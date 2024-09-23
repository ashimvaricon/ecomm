import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BoxStyled = styled(Box)({
  width: "70%",
  height: "auto",
  margin: "70px auto",
});

export const TypographyStyled = styled(Typography)({
  fontSize: "30px",
  fontWeight: "600",
  textAlign: "center",
});

export const CategoryBoxStyled = styled(Box)({
  padding: "0 10px",
  boxSizing: "border-box",
});

export const StackStyled = styled(Stack)({
  height: "100px",
  backgroundColor: "#ccc",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
});

export const CatTypographyStyled = styled(Typography)({
  fontSize: "16px",
  fontWeight: "500",
});
