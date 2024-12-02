import { Box } from "@mui/material";
import SideBar from "@/app/_components/SideBar";
import TotalBox from "../_components/TotalBox";

export default function Page() {
  return (
    <Box
      display="grid"
      sx={{ gridTemplateColumns: "250px 1fr", gap: 2, marginTop: 1 }}
    >
      <SideBar />
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
      </Box>
    </Box>
  );
}
