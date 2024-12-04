import { TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchProps {
  onSearch: (text: string) => void;
  style?: React.CSSProperties;
  placeholder?: string;
}

export default function Search({ onSearch, style, placeholder }: SearchProps) {
  return (
    <TextField
      style={style}
      id="outlined-basic"
      placeholder={placeholder}
      variant="outlined"
      onChange={(e) => onSearch(e.target.value)}
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
