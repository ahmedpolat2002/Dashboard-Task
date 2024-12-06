"use client";

import React from "react";
import { Select, MenuItem, FormControl } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";

export default function LanguageSelector() {
  const [language, setLanguage] = React.useState("en");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value);
  };

  return (
    <FormControl
      sx={{
        minWidth: "150px",
        width: "100%",
        maxWidth: "250px",
        marginRight: "20px",
        bgcolor: "white",
        borderRadius: "12px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Select
        value={language}
        onChange={handleChange}
        style={{
          minWidth: "150px",
          width: "250px",
          marginRight: "20px",
          height: "40px",
          borderRadius: "12px",
        }}
      >
        <MenuItem value={"en"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {language === "en" ? (
              <img
                src={`/${language}.png`}
                alt={`Language Icon`}
                style={{ marginRight: "10px", width: "20px", height: "20px" }}
              />
            ) : (
              ""
            )}
            English
          </div>
        </MenuItem>
        <MenuItem value={"sp"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={`/${"en"}.png`}
              alt={`Language Icon`}
              style={{ marginRight: "10px", width: "20px", height: "20px" }}
            />
            Spanish
          </div>
        </MenuItem>
        <MenuItem value={"fr"}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={`/${"en"}.png`}
              alt={`Language Icon`}
              style={{ marginRight: "10px", width: "20px", height: "20px" }}
            />
            French
          </div>
        </MenuItem>
      </Select>
    </FormControl>
  );
}
