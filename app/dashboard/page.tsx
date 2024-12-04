import SideBar from "@/app/_components/SideBar";
import { Box } from "@mui/material";
import ContentPage from "../_components/ContentPage";

export default function Page() {
  return (
    <Box
      display="grid"
      sx={{ gridTemplateColumns: "250px 1fr", gap: 2, marginTop: "12px" }}
    >
      <SideBar />
      <ContentPage />
    </Box>
  );
}
