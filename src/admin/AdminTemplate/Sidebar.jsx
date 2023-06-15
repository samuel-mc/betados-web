import React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Sidebar = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <aside className="admin__aside">
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "#0C134F" }}
        component="nav"
      >
        <ListItemButton component="a" href="/admin">
          <ListItemText primary="Home" />
        </ListItemButton>

        <ListItemButton component="a" href="/admin/matches">
          <ListItemText primary="Matches" />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemText primary="Catalog" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Players" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} >
              <ListItemText primary="Teams" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Leagues" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Countries" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} component="a" href="/admin/sports">
              <ListItemText primary="Sports"/>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </aside>
  );
};

export default Sidebar;
