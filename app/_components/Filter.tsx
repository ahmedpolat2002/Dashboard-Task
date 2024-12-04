import React, { useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import {
  Button,
  Popover,
  TextField,
  Select,
  MenuItem,
  Stack,
  Typography,
  Box,
} from "@mui/material";

export default function FilterComponent() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Button
        onClick={handleOpen}
        startIcon={<FilterListIcon />}
        sx={{
          color: "black",
          fontWeight: "bold",
          fontSize: "18px",
          textTransform: "capitalize",
        }}
      >
        filter
      </Button>

      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box sx={{ padding: "16px", width: "400px" }}>
          <Typography variant="h6" gutterBottom>
            Filter
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{
              marginBottom: "16px",
            }}
          >
            <TextField
              label="Input 1"
              variant="outlined"
              size="small"
              fullWidth
            />
            <Select
              defaultValue=""
              size="small"
              fullWidth
              sx={{
                "& fieldset": {
                  borderRadius: "4px",
                },
              }}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="option1">Option 1</MenuItem>
              <MenuItem value="option2">Option 2</MenuItem>
            </Select>
            <TextField
              label="Input 2"
              variant="outlined"
              size="small"
              fullWidth
            />
          </Stack>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClose}
          >
            Apply Filter
          </Button>
        </Box>
      </Popover>
    </Stack>
  );
}
