import React, { useState } from "react";
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
import ColumnSelectIcon from "@mui/icons-material/ViewColumn";

const options = [
  { field: "id", label: "ID" },
  { field: "firstName", label: "First name" },
  { field: "lastName", label: "Last name" },
  { field: "age", label: "Age" },
  { field: "fullName", label: "Full name" },
];

interface ColumnsProps {
  visibleColumns: string[];
  setVisibleColumns: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function Columns({
  visibleColumns,
  setVisibleColumns,
}: ColumnsProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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

  const handleCheck = (field: string) => {
    setVisibleColumns((prev) =>
      prev.includes(field)
        ? prev.filter((col) => col !== field)
        : [...prev, field]
    );
  };

  return (
    <Stack
      direction="row"
      spacing={1}
      sx={{ display: "flex", alignItems: "center" }}
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
        <Stack spacing={2} sx={{ padding: "16px", width: "300px" }}>
          <TextField
            placeholder="Search columns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            size="small"
          />
          <List>
            {filteredOptions.map((option) => (
              <ListItem key={option.field}>
                <FormControlLabel
                  label={<ListItemText primary={option.label} />}
                  control={
                    <Checkbox
                      checked={visibleColumns.includes(option.field)}
                      onChange={() => handleCheck(option.field)}
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
