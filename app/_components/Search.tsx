import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Search({
  style,
  placeholder,
}: {
  style?: React.CSSProperties;
  placeholder?: string;
}) {
  return (
    <TextField
      style={style}
      id="outlined-basic"
      placeholder={placeholder}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
}
