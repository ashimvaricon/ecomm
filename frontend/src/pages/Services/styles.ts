import { Box, styled, Typography } from "@mui/material";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

export const BoxStyled = styled(Box)({
  marginTop: "100px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
});

export const Box1Styled = styled(Box)({
  backgroundColor: "#002c3e",
  color: "white",
  width: "360px",
  height: "257.2px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
});

export const BoxIconStyled = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: 1.5,
});

export const LocalShippingOutlinedIconStyled = styled(
  LocalShippingOutlinedIcon
)({
  width: "55px",
  height: "auto",
});

export const TypographyStyled = styled(Typography)(({ theme }) => ({
  margin: "auto",
  width: "300px",
  textAlign: "center",
  wordWrap: "break-word",
}));

export const ShoppingBagOutlinedIconStyled = styled(ShoppingBagOutlinedIcon)(
  ({ theme }) => ({
    width: "55px",
    height: "auto",
  })
);

export const StarBorderOutlinedIconStyled = styled(StarBorderOutlinedIcon)(
  ({ theme }) => ({
    width: "55px",
    height: "auto",
  })
);
