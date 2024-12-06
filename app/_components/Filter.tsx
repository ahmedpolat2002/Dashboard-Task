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
import { Filters } from "@/app/_types/FilterTypes";

interface FilterProps {
  onApplyFilter: (filters: Filters) => void;
}

const fieldMapping: { [key: string]: string } = {
  "first name": "firstName",
  "last name": "lastName",
  "full name": "fullName",
  id: "id",
  age: "age",
};

export default function Filter({ onApplyFilter }: FilterProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [column, setColumn] = useState<
    "id" | "firstName" | "lastName" | "age" | "fullName" | undefined
  >(undefined);
  const [operator, setOperator] = useState<"equals" | "contains">("equals");
  const [value, setValue] = useState("");

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isOpen = Boolean(anchorEl);

  const handleApplyFilter = () => {
    onApplyFilter({ column, operator, value });
    handleClose();
  };

  const handleColumnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase(); // تحويل النص المدخل إلى lowercase لتسهيل المطابقة
    const matchedColumn = fieldMapping[input]; // البحث عن القيمة في القاموس
    if (matchedColumn) {
      setColumn(
        matchedColumn as "id" | "firstName" | "lastName" | "age" | "fullName"
      );
    } else {
      setColumn(undefined); // إذا لم يكن هناك تطابق
    }
  };

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
        Filter
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

          <Stack direction="row" spacing={2} sx={{ marginBottom: "16px" }}>
            <TextField
              label="Field Name"
              variant="outlined"
              size="small"
              fullWidth
              onChange={handleColumnChange}
            />
            <Select
              value={operator}
              size="small"
              fullWidth
              onChange={(e) =>
                setOperator(e.target.value as "equals" | "contains")
              }
              sx={{
                "& fieldset": {
                  borderRadius: "4px",
                },
              }}
            >
              <MenuItem value="">Select Operator</MenuItem>
              <MenuItem value="equals">Equals</MenuItem>
              <MenuItem value="contains">Contains</MenuItem>
            </Select>
            <TextField
              label="Value"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setValue(e.target.value)}
            />
          </Stack>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleApplyFilter}
          >
            Apply Filter
          </Button>
        </Box>
      </Popover>
    </Stack>
  );
}
