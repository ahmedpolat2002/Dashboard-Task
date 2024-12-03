"use client";
import { Box, MenuItem, Select, InputAdornment, Stack } from "@mui/material";
import SideBar from "@/app/_components/SideBar";
import TotalBox from "../_components/TotalBox";
import Search from "../_components/Search";
import Filter from "../_components/Filter";
import Table from "../_components/Table";
import { useState } from "react";
import ColumnSelectIcon from "@mui/icons-material/ViewColumn";

export default function Page() {
  const [numCol, setNumCol] = useState("columns");

  return (
    <Box
      display="grid"
      sx={{ gridTemplateColumns: "250px 1fr", gap: 2, marginTop: "12px" }}
    >
      <SideBar />
      <Box style={{ display: "flex", flexDirection: "column" }}>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TotalBox
            title="Number Companies"
            value={"000001"}
            image="/Flat.png"
            type={"number"}
          />
          <TotalBox
            title="Total Subs 1 years"
            value={"99999"}
            image="/Earnings.png"
          />
          <TotalBox
            title="Total Subs 1 month"
            value={"99999"}
            image="/Earnings(1).png"
          />
        </Box>

        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "12px",
            gap: "12px",
          }}
        >
          <Search style={{ flex: 1 }} placeholder="Find the store" />
          <Filter />
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
              value={numCol}
              onChange={(e) => setNumCol(e.target.value)}
              sx={{
                "& fieldset": {
                  border: "none", // إزالة الإطار
                },
                fontWeight: "bold",
                fontSize: "18px",
                width: "fit-content",
              }}
            >
              <MenuItem value={"columns"}>Columns</MenuItem>
            </Select>
          </Stack>
        </Box>
        <Box style={{ marginTop: "12px" }}>
          <Table />
        </Box>
      </Box>
    </Box>
  );
}
