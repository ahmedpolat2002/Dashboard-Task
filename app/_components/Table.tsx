"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { MenuItem, Pagination, Select, Stack, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { Filters } from "@/app/_types/FilterTypes";

// Data:
const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Ahmed", firstName: "Bolad", age: 23 },
  { id: 11, lastName: "Ahmed", firstName: "Bolad", age: 23 },
  { id: 12, lastName: "Ahmed", firstName: "Bolad", age: 23 },
  { id: 13, lastName: "Ahmed", firstName: "Bolad", age: 23 },
  { id: 14, lastName: "Ahmed", firstName: "Bolad", age: 23 },
  { id: 15, lastName: "Ahmed", firstName: "Bolad", age: 23 },
  { id: 16, lastName: "Ahmed", firstName: "Bolad", age: 23 },
  { id: 17, lastName: "Ahmed", firstName: "Bolad", age: 23 },
  { id: 18, lastName: "Ahmed", firstName: "Bolad", age: 23 },
  { id: 19, lastName: "Ahmed", firstName: "Bolad", age: 23 },
  { id: 20, lastName: "Ahmed", firstName: "Bolad", age: 23 },
];

const initialColumns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 170 },
  { field: "lastName", headerName: "Last name", width: 170 },
  { field: "age", headerName: "Age", type: "number", width: 90 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
    // valueGetter: (params: {
    //   row: { firstName?: string; lastName?: string };
    // }) => {
    //   if (!params || !params.row) return "Unknown";
    //   const { firstName, lastName } = params.row;
    //   return ${firstName || ""} ${lastName || ""};
    // },
  },
];

interface TableProps {
  searchText: string;
  visibleColumns: string[];
  filters: Filters;
}

export default function DataTable({
  searchText,
  visibleColumns,
  filters,
}: TableProps) {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(5);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
    setPageSize(Number(event.target.value));
    setPage(1);
  };

  const filteredColumns = initialColumns.filter((col) =>
    visibleColumns.includes(col.field)
  );

  // const filteredRows = rows.filter((row) =>
  //   Object.values(row).some(
  //     (value) =>
  //       value &&
  //       value.toString().toLowerCase().includes(searchText.toLowerCase())
  //   )
  // );
  const filteredRows = rows.filter((row) => {
    if (filters.column && filters.operator && filters.value) {
      let columnValue = "";
      if (filters.column === "fullName") {
        columnValue = `${row.firstName || ""} ${
          row.lastName || ""
        }`.toLowerCase();
      } else {
        columnValue = (row[filters.column]?.toString() || "").toLowerCase();
      }
      const filterValue = filters.value.toLowerCase();

      if (filters.operator === "equals") {
        return columnValue === filterValue;
      } else if (filters.operator === "contains") {
        return columnValue.includes(filterValue);
      }
    } else if (searchText) {
      return Object.values(row).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(searchText.toLowerCase())
      );
    }
    return true;
  });

  const count = Math.ceil(rows.length / pageSize);

  const displayedRows = filteredRows.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  return (
    <Paper sx={{ height: 400, overflow: "hidden" }}>
      <DataGrid
        rows={displayedRows}
        columns={filteredColumns}
        checkboxSelection
        pageSizeOptions={[pageSize]}
        sx={{
          border: 0,
          "& .MuiDataGrid-columnHeaders": {
            color: "black",
            fontSize: "16px",
            backgroundColor: "#264A99 !important",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#264A99",
            color: "white",
          },
        }}
        slots={{
          footer: () => (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px",
                textAlign: "center",
                backgroundColor: "#264A99",
                color: "white",
              }}
            >
              <Typography variant="body1" color="inherit">
                total record : {rows.length}
              </Typography>
              <Stack spacing={2}>
                <Pagination
                  count={count}
                  page={page}
                  onChange={handleChange}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "white",
                    },
                    "& .MuiPaginationItem-root.Mui-selected": {
                      backgroundColor: "#1E90FF",
                      color: "white",
                      fontWeight: "bold",
                    },
                    "& .MuiPaginationItem-root:hover": {
                      backgroundColor: "#1E90FF",
                    },
                  }}
                />
              </Stack>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" style={{ marginRight: "10px" }}>
                  Rows per page:
                </Typography>
                <Select
                  value={pageSize}
                  onChange={handlePageSizeChange}
                  sx={{
                    backgroundColor: "white",
                    color: "#264A99",
                    height: "30px",
                    fontSize: "14px",
                  }}
                >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                </Select>
              </div>
            </div>
          ),
        }}
      ></DataGrid>
    </Paper>
  );
}
