import React, { useState } from "react";
import ColumnSelectIcon from "@mui/icons-material/ViewColumn";
import {
  MenuItem,
  Select,
  InputAdornment,
  Stack,
  Popover,
  TextField,
  Checkbox,
  List,
  ListItem,
  ListItemText,
  FormControlLabel,
} from "@mui/material";

const options = [
  { id: 1, label: "ID" },
  { id: 2, label: "Column 2" },
  { id: 3, label: "Column 3" },
  { id: 4, label: "Column 4" },
];

export default function Columns() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [checkedOptions, setCheckedOptions] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpen = (event: React.SyntheticEvent<Element, Event>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCheck = (id: number) => {
    setCheckedOptions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <Stack
      direction="row"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      spacing={1}
    >
      <InputAdornment position="start" sx={{ color: "black" }}>
        <ColumnSelectIcon />
      </InputAdornment>
      <Select
        onOpen={handleOpen}
        open={false}
        value={"columns"}
        sx={{
          "& fieldset": {
            border: "none",
          },
          fontWeight: "bold",
          fontSize: "18px",
          width: "fit-content",
        }}
      >
        <MenuItem value={"columns"}>Columns</MenuItem>
      </Select>

      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            padding: "16px",
            width: "300px",
          }}
        >
          <TextField
            placeholder="Search columns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            size="small"
          />

          <List>
            {filteredOptions.map((option) => (
              <ListItem key={option.id}>
                <FormControlLabel
                  style={{
                    backgroundColor: "#008CFF",
                    borderRadius: "5px",
                    padding: "5px 10px",
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row-reverse",
                  }}
                  label={
                    <ListItemText
                      style={{ fontWeight: "bold", color: "white" }}
                      primary={option.label}
                    />
                  }
                  control={
                    <Checkbox
                      checked={checkedOptions.includes(option.id)}
                      onChange={() => handleCheck(option.id)}
                    />
                  }
                />
              </ListItem>
            ))}
          </List>
        </Stack>
      </Popover>
    </Stack>
  );
}
