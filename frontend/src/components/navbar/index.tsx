import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import NavbarLink from "./NavbarLink";
import { navbarItem } from "./nav";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
            <Sidebar />
          ) : (
            <Box sx={{ gap: 2 }} display="flex">
              {navbarItem.map((item) => (
                <NavbarLink key={item.name} name={item.name} path={item.path} />
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <main style={{ marginTop: "40px" }}>
        <Outlet />
      </main>

      <Footer />
    </Box>
  );
};

export default Navbar;
