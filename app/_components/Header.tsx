import { Box, Container, MenuItem, Typography } from "@mui/material";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ImageAvatars from "./Avatar";
import Link from "next/link";
import SettingIcon from "@mui/icons-material/Settings";
import Select from "@/app/_components/Select";

export default function Header() {
  return (
    <header
      style={{
        background: "linear-gradient(to right, #407BFF, #264A99)",
        borderRadius: "0 0 33px 0",
        padding: "10px 0",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box maxWidth="lg" sx={{ display: "flex", alignItems: "center" }}>
          <Logo />
          <Navigation />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Select
            text="Select a currency"
            style={{
              minWidth: "150px",
              width: "250px",
              marginRight: "20px",
              bgColor: "white",
              height: "40px",
              borderRadius: "12px",
            }}
          >
            <MenuItem value={"Select a currency"}>Select a currency</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <ImageAvatars />
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Ahmed
            </Typography>
          </Box>
          {/* Setting Page */}
          <Link href="/settings" style={{ marginLeft: "10px" }}>
            <SettingIcon
              sx={{ fontSize: 40, p: 2, color: "white", padding: 0 }}
            />
          </Link>
        </Box>
      </Container>
    </header>
  );
}
