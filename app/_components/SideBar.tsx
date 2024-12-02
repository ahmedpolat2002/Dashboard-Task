import React from "react";
import { Box, List, ListItem, ListItemText, MenuItem } from "@mui/material";
import Link from "next/link";
import Select from "./Select";

const SideBar = () => {
  return (
    <Box
      sx={{
        width: 250,
        height: "500px",
        background: "linear-gradient(3600deg, #FDF7F7 0%, #407BFF1A 100%)",
        boxShadow: "-14px 15px 13.1px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <List>
        <ListItem component={Link} href="/dashboard">
          <ListItemText
            primary="Dashboard"
            sx={{
              color: "white",
              bgcolor: "#407BFF",
              borderRadius: "12px",
              textAlign: "center",
              px: 6,
              py: 1,
            }}
          />
        </ListItem>
      </List>
      <Select
        text="Companies"
        style={{
          width: "175px",
          bgColor: "#407BFF",
          borderRadius: "12px",
          textAlign: "center",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 3,
        }}
      >
        <MenuItem value={"Companies"}>Companies</MenuItem>
      </Select>
      {/* Nested Pages */}
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 2,
          alignItems: "end",
          width: "60%",
        }}
      >
        <ListItem
          component={Link}
          style={{ padding: "0px", width: "100%" }}
          href="/dashboard/companies"
        >
          <ListItemText
            primary="All Companies"
            sx={{
              color: "black",
              bgcolor: "#407BFF",
              borderRadius: "12px",
              textAlign: "center",
              px: 2,
              py: 1,
            }}
          />
        </ListItem>
        <ListItem
          component={Link}
          style={{ padding: "0px", width: "100%" }}
          href="/dashboard/branches"
        >
          <ListItemText
            primary="All Branches"
            sx={{
              color: "black",
              bgcolor: "#407BFF4A",
              borderRadius: "12px",
              textAlign: "center",
              px: 2,
              py: 1,
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
