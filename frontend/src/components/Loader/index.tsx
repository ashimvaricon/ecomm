import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

type LoadingProps = {
  size?: number;
  message?: string;
};

const Loading: React.FC<LoadingProps> = ({ size, message }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <CircularProgress size={size} />
      {message && (
        <Typography sx={{ marginTop: 2 }} variant="body1" color="textSecondary">
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Loading;
