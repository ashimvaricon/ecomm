import { createTheme } from "@mui/material/styles";

// Defining the color palette
const theme = createTheme({
  palette: {
    primary: {
      main: "#f7444e",
    },
    secondary: {
      main: "#002c3e",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
