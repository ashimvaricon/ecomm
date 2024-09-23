import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const BoxStyled = styled(Box)(({ theme }) => ({
  height: "35vh",
  backgroundColor: "grey",
  marginTop: "70px",
  overflow: "hidden",
  [theme.breakpoints.up("lg")]: {
    height: "35vh",
    overflow: "hidden",
  },
  [theme.breakpoints.down("md")]: {
    height: "35vh",
    overflow: "hidden",
  },
  [theme.breakpoints.down("sm")]: {
    height: "35vh",
    overflow: "hidden",
  },
}));

export const CenteredBox = styled(Box)(({ theme }) => ({
  height: "60vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "50vh",
  },
  [theme.breakpoints.down("sm")]: {
    height: "40vh",
  },
}));

// Responsive CustomBox
export const CustomBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "60vh",
  },
  [theme.breakpoints.down("sm")]: {
    width: "50vh",
  },
}));

export const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "50vh",
  [theme.breakpoints.up("lg")]: {
    height: "10vh",
    overflow: "hidden",
  },
  [theme.breakpoints.between("xs", "sm")]: {
    width: "100%",
    height: "auto",
  },

  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "35vh",
  },

  [theme.breakpoints.down("xs")]: {
    width: "60%",
    height: "auto",
  },

  [theme.breakpoints.up("md")]: {
    width: "100%",
    height: "35vh",
  },
}));
