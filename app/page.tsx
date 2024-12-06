"use client";

import React from "react";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "2.5rem", md: "4rem" },
          fontWeight: "bold",
          color: "#264A99",
          marginBottom: "20px",
        }}
      >
        مرحبا بالعالم
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", md: "1.5rem" },
          color: "#555",
          marginBottom: "30px",
        }}
      >
        :لتجربة تطبيق ،Next.js مع تصميم حديث.
      </Typography>
      <Link href="/dashboard" passHref>
        <Button
          variant="contained"
          sx={{
            padding: "10px 20px",
            fontSize: "1rem",
            backgroundColor: "#264A99",
            "&:hover": {
              backgroundColor: "#1E90FF",
            },
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          الذهاب إلى لوحة التحكم
        </Button>
      </Link>
    </Box>
  );
}
