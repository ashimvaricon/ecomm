import React from "react";
import { Box, CircularProgress, Typography, styled } from "@mui/material";

type LoadingProps = {
  size?: number;
  message?: string;
};

const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const Loader: React.FC<LoadingProps> = ({ size = 40, message }) => {
  return (
    <StyledBox>
      <CircularProgress size={size} />
      {message && (
        <StyledTypography variant="body1" color="textSecondary">
          {message}
        </StyledTypography>
      )}
    </StyledBox>
  );
};

export default Loader;
