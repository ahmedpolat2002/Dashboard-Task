"use client";

import { Box } from "@mui/material";
import TotalBox from "../_components/TotalBox";
import Search from "../_components/Search";
import Filter from "../_components/Filter";
import Table from "../_components/Table";
import Columns from "./Columns";
import { useEffect, useState } from "react";
import { Filters } from "@/app/_types/FilterTypes";

export default function ContentPage() {
  const [searchText, setSearchText] = useState("");
  const [visibleColumns, setVisibleColumns] = useState<string[]>([
    "id",
    "firstName",
    "lastName",
    "age",
    "fullName",
  ]);
  const [filters, setFilters] = useState<Filters>({
    column: undefined,
    operator: "equals",
    value: "",
  });

  useEffect(() => {
    if (searchText) {
      setFilters({
        column: undefined,
        operator: "equals",
        value: "",
      });
    }
  }, [searchText]);

  const handleFilterApply = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  return (
    <Box style={{ display: "flex", flexDirection: "column" }}>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "6px",
          flexWrap: "wrap",
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
          flexWrap: "wrap",
          marginTop: "12px",
          gap: "12px",
        }}
      >
        <Search
          onSearch={setSearchText}
          style={{ flex: 1 }}
          placeholder="Enter the Name"
        />

        <Filter onApplyFilter={handleFilterApply} />

        <Columns
          visibleColumns={visibleColumns}
          setVisibleColumns={setVisibleColumns}
        />
      </Box>
      <Box style={{ marginTop: "12px" }}>
        <Table
          searchText={searchText}
          visibleColumns={visibleColumns}
          filters={filters}
        />
      </Box>
    </Box>
  );
}
