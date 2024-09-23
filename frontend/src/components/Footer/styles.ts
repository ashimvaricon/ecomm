import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/system";

export const BoxStyled = styled(Box)<BoxProps>(({ theme }) => ({
  backgroundColor: theme.palette.error.main, // Use your desired theme color
  padding: theme.spacing(2), // Responsive spacing
  marginTop: "auto",
  borderTop: "1px solid #e0e0e0",
  color: "white",
}));
