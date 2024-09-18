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
        textDecoration: isActive ? "underline" : "none",
        textUnderlineOffset: "6px",
        color: isActive ? "white" : "#EF476F",
      })}
    >
      <Typography variant="h6">{name}</Typography>
    </NavLink>
  );
};

export default NavbarLink;
