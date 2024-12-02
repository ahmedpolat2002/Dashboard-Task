import { List, ListItem, ListItemText } from "@mui/material";
import LinkNav from "./LinkNav";

export default function Navigation() {
  return (
    // <ul style={{ display: "flex", gap: "1rem" }}>
    //   <li>
    //     <Link href="/">Home</Link>
    //   </li>
    //   <li>
    //     <Link href="/dashboard">Dashboard</Link>
    //   </li>
    //   <li>
    //     <Link href="/supscraptions">Supscraptions</Link>
    //   </li>
    // </ul>
    <List sx={{ display: "flex", gap: "1rem", alignItems: "center", pl: 5 }}>
      <ListItem>
        <ListItemText>
          <LinkNav href="/">Home</LinkNav>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          <LinkNav href="/dashboard">Dashboard</LinkNav>
        </ListItemText>
      </ListItem>
      {/* <ListItem>
        <ListItemText>
          <LinkNav href="/supscraptions">Supscraptions</LinkNav>
        </ListItemText>
      </ListItem> */}
    </List>
  );
}
