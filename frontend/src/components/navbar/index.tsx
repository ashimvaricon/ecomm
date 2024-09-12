import { Box, IconButton, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Outlet } from "react-router-dom";
import NavbarLink, { NavbarLinkProps } from "./NavbarLink";

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

          <Box sx={{ gap: 2 }} display="flex">
            {navbarItem.map((item) => (
              <NavbarLink name={item.name} path={item.path} />
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <main style={{ marginTop: "64px" }}>
        <Outlet />
      </main>
    </Box>
  );
};

export default Navbar;
