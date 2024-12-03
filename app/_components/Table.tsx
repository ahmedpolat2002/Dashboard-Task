"use client";

import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { MenuItem, Pagination, Select, Stack, Typography } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

// البيانات:
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

// تعريف الأعمدة:
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 170 },
  { field: "lastName", headerName: "Last name", width: 170 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
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
    //   // التحقق من وجود params.row
    //   if (!params || !params.row) return "Unknown"; // قيمة افتراضية إذا كان الصف غير موجود
    //   const { firstName, lastName } = params.row;
    //   return ${firstName || ""} ${lastName || ""};
    // },
  },
];

export default function DataTable() {
  const [page, setPage] = React.useState(1); // الصفحة الحالية
  const [pageSize, setPageSize] = React.useState(5); // عدد العناصر في الصفحة

  // دالة التغيير عند الت��قل بين الصفحات
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // دالة لتغيير عدد العناصر في الصفحة
  const handlePageSizeChange = (event: SelectChangeEvent<number>) => {
    setPageSize(Number(event.target.value)); // تحديث pageSize
    setPage(1); // إعادة الصفحة إلى الأولى عند تغيير الحجم
  };

  // حساب عدد الصفحات
  const count = Math.ceil(rows.length / pageSize);

  // تقسيم البيانات بناءً على الصفحة الحالية
  const displayedRows = rows.slice((page - 1) * pageSize, page * pageSize);

  return (
    <Paper sx={{ height: 400, overflow: "hidden" }}>
      <DataGrid
        rows={displayedRows} // البيانات المعروضة فقط للصفحة الحالية
        columns={columns}
        checkboxSelection
        pageSizeOptions={[pageSize]}
        sx={{
          border: 0,
          "& .MuiDataGrid-columnHeaders": {
            color: "black", // لون النص
            fontSize: "16px", // حجم الخط
            backgroundColor: "#264A99 !important", // لون الخلفية مع أولوية
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#264A99", // لون الفوتر
            color: "white", // لون النص
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
                total recorde {page} / {count}
              </Typography>
              <Stack spacing={2}>
                <Pagination
                  count={count}
                  page={page}
                  onChange={handleChange}
                  sx={{
                    "& .MuiPaginationItem-root": {
                      color: "white", // لون الأرقام
                    },
                    "& .MuiPaginationItem-root.Mui-selected": {
                      backgroundColor: "#1E90FF", // لون خلفية للصفحة النشطة
                      color: "white", // لون النص للصفحة النشطة
                      fontWeight: "bold", // جعل النص عريضًا
                    },
                    "& .MuiPaginationItem-root:hover": {
                      backgroundColor: "#1E90FF", // لون الخلفية عند التمرير
                    },
                  }}
                />
              </Stack>
              {/* التحكم في عدد العناصر المعروضة */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography variant="body2" style={{ marginRight: "10px" }}>
                  Rows per page:
                </Typography>
                <Select
                  value={pageSize}
                  onChange={handlePageSizeChange}
                  sx={{
                    backgroundColor: "white", // لون الخلفية
                    color: "#264A99", // لون النص
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