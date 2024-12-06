import { Box, Container, Typography } from "@mui/material";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ImageAvatars from "./Avatar";
import Link from "next/link";
import SettingIcon from "@mui/icons-material/Settings";
import LanguageSelector from "./LanguageSelector";

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
          <LanguageSelector />

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
