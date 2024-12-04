"use client";

import { Box } from "@mui/material";
import TotalBox from "../_components/TotalBox";
import Search from "../_components/Search";
import Filter from "../_components/Filter";
import Table from "../_components/Table";
import Columns from "./Columns";
import { useState } from "react";

export default function ContentPage() {
  const [searchText, setSearchText] = useState("");

  return (
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
        <Search
          onSearch={setSearchText}
          style={{ flex: 1 }}
          placeholder="Find the store"
        />
        <Filter />
        <Columns />
      </Box>
      <Box style={{ marginTop: "12px" }}>
        <Table searchText={searchText} />
      </Box>
    </Box>
  );
}
