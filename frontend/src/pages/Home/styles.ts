import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const BoxStyled = styled(Box)({
  height: "50vh",
  backgroundColor: "grey",
  marginTop: "70px",
});

export const CenteredBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

export const CustomBox = styled(Box)(({ theme }) => ({
  height: "100%",
  width: "70vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));
