import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#EF476F",
      light: "#FF758F",
      dark: "#D03055",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#fdc500",
      light: "#ffdd73",
      dark: "#c49d00",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#fffffa",
      paper: "#ffffff",
    },
    text: {
      primary: "#003366",
      secondary: "#707070",
    },
    success: {
      main: "#00509d",
    },
    error: {
      main: "#D9534F",
    },
    warning: {
      main: "#fdc500",
    },
    info: {
      main: "#00509d",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#003366",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#003366",
    },
    body1: {
      fontSize: "1rem",
      color: "#003366",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
        },
        containedPrimary: {
          backgroundColor: "#00509d",
          "&:hover": {
            backgroundColor: "#003366",
          },
        },
        containedSecondary: {
          backgroundColor: "#fdc500",
          "&:hover": {
            backgroundColor: "#ffdd73",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#003366",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
