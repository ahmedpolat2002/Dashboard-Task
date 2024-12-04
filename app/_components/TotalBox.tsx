import { Box, Typography } from "@mui/material";

export default function TotalBox({
  title,
  value,
  image,
  type,
}: {
  title: string;
  value: string;
  image: string;
  type?: string;
}) {
  return (
    <Box
      sx={{
        bgcolor: "white",
        borderRadius: "10px",
        border: "1px solid #ccc",
        padding: "10px",
        width: "30%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2,
        boxShadow: "1px 0px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Box>
        <Typography
          variant="subtitle1"
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            color: "#000000",
            marginBottom: "5px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            fontWeight: "400",
            fontSize: "18px",
            color: "#ccc",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          {`${type === "number" ? value : value + " $"}`}
        </Typography>
      </Box>
      <Box style={{ marginRight: "20px" }}>
        <img src={image} alt={title} />
      </Box>
    </Box>
  );
}
