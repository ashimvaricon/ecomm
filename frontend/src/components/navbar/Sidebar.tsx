import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { navbarItem } from "./nav";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          {navbarItem.map((item) => (
            <ListItem
              key={item.name}
              component={NavLink}
              to={item.path}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
  return (
    <Box>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      {drawer}
    </Box>
  );
};

export default Sidebar;
