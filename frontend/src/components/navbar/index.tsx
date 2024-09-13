import { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet, NavLink } from "react-router-dom";
import NavbarLink, { NavbarLinkProps } from "./NavbarLink";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const navbarItem: NavbarLinkProps[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Product",
    path: "/product",
  },
];

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            edge="start"
            aria-label="logo"
          >
            <ShoppingBasketIcon />
          </IconButton>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ecomms Nepal
          </Typography>

          {isMobile ? (
            <>
              <IconButton color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              {drawer}
            </>
          ) : (
            <Box sx={{ gap: 2 }} display="flex">
              {navbarItem.map((item) => (
                <NavbarLink key={item.name} name={item.name} path={item.path} />
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <main style={{ marginTop: "64px" }}>
        <Outlet />
      </main>
    </Box>
  );
};

export default Navbar;
