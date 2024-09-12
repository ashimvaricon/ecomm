import { Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export type NavbarLinkProps = {
  name: string;
  path: string;
};

const NavbarLink: React.FC<NavbarLinkProps> = ({ name, path }) => {
  return (
    <NavLink
      to={path}
      style={({ isActive }) => ({
        textDecoration: "none",
        color: isActive ? "black" : "inherit",
      })}
    >
      <Typography variant="h6">{name}</Typography>
    </NavLink>
  );
};

export default NavbarLink;
