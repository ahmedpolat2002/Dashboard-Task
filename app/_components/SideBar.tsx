"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import Link from "next/link";

const SideBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        // width: 250,
        // height: "500px",
        height: "100%",
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
      <Box>
        {/* Button to open menu */}
        <Button
          onClick={handleOpen}
          sx={{
            width: "175px",
            backgroundColor: "#407BFF",
            borderRadius: "12px",
            textAlign: "center",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            "&:hover": {
              backgroundColor: "#3568D4",
            },
          }}
        >
          Companies
        </Button>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              mt: 1,
              borderRadius: "12px",
              width: "175px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "10px",
            },
          }}
        >
          <MenuItem
            component={Link}
            href="/dashboard/companies"
            onClick={handleClose}
            sx={{
              bgcolor: "#407BFF",
              color: "white",
              borderRadius: "12px",
              textAlign: "center",
              px: 2,
              py: 1,
              mb: 1,
              "&:hover": {
                backgroundColor: "#3568D4",
              },
            }}
          >
            <ListItemText primary="All Companies" />
          </MenuItem>
          <MenuItem
            component={Link}
            href="/dashboard/branches"
            onClick={handleClose}
            sx={{
              bgcolor: "#407BFF4A",
              color: "black",
              borderRadius: "12px",
              textAlign: "center",
              px: 2,
              py: 1,
              "&:hover": {
                backgroundColor: "#3568D4",
                color: "white",
              },
            }}
          >
            <ListItemText primary="All Branches" />
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default SideBar;
