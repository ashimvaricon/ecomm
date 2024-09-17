import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BoxStyled = styled(Box)({
  marginTop: "50px",
  width: "100%",
  height: "auto",
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

export const CategoryTypographyStyled = styled(Stack)({});
