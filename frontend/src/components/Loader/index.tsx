import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import { loaderStyles } from "./styles";
import { LoadingProps } from "../../types/loader";

const Loader: React.FC<LoadingProps> = ({ size = 40, message }) => {
  return (
    <Box sx={loaderStyles}>
      <CircularProgress size={size} />
      {message && (
        <Typography variant="body1" color="textSecondary">
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Loader;
