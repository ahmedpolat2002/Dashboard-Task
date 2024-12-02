"use client";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function CustomSelect({
  text,
  children,
  style,
}: {
  text: string;
  style: {
    bgColor?: string;
    borderRadius?: string;
    textAlign?: string;
    height?: string;
    width?: string;
    display?: string;
    alignItems?: string;
    justifyContent?: string;
    minWidth?: string;
    marginRight?: string;
    px?: number;
  };
  children: React.ReactNode;
}) {
  const [currency, setCurrency] = useState(text);
  const handleChange = (event: { target: { value: string } }) => {
    setCurrency(event.target.value);
  };
  return (
    <div>
      <FormControl sx={{ ...style }} variant="standard">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={currency}
          onChange={handleChange}
          variant="outlined"
          sx={{
            "& fieldset": {
              border: "none", // إزالة الإطار
            },
            color: `${style["bgColor"] === "white" ? "black" : "white"}`,
            bgcolor: `${style["bgColor"]}`,
            height: `${style["height"]}`,
            width: `${style["width"]}`,
            borderRadius: `${style["borderRadius"]}`,
          }}
        >
          {children}
        </Select>
      </FormControl>
    </div>
  );
}
