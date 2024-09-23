import { Box, styled, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

// BoxStyled - Main container
export const BoxStyled = styled(Box)({
  marginTop: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});

// Box1Styled - Individual service boxes
export const Box1Styled = styled(Box)(({ theme }) => ({
  backgroundColor: "#002c3e",
  color: "white",
  width: "360px",
  height: "257.2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%", // Full width on medium screens
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%", // Full width on small screens
  },
}));

// BoxIconStyled - Container for the icons and text
export const BoxIconStyled = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 1.5,
});

// Styled icons
export const LocalShippingOutlinedIconStyled = styled(
  LocalShippingOutlinedIcon
)({
  color: "white",
  width: "55px",
  height: "auto",
});

export const ShoppingBagOutlinedIconStyled = styled(ShoppingBagOutlinedIcon)({
  color: "white",
  width: "55px",
  height: "auto",
});

export const StarBorderOutlinedIconStyled = styled(StarBorderOutlinedIcon)({
  color: "white",
  width: "55px",
  height: "auto",
});

// TypographyStyled - for the text inside the boxes
export const TypographyStyled = styled(Typography)({
  margin: "auto",
  width: "300px",
  textAlign: "center",
  wordWrap: "break-word",
  color: "white",
});
