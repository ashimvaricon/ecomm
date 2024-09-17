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
      main: "#118AB2",
      light: "#4EC3DF",
      dark: "#0A7691",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#073B4C",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FFD166",
      dark: "#E6B855",
      contrastText: "#000000",
    },
    success: {
      main: "#06D6A0",
      dark: "#05B088",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#F78C6B",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#F6F9FC",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#333333",
      secondary: "#073B4C",
      disabled: "#B0B0B0",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#EF476F",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: "#118AB2",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#333333",
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
          borderRadius: "8px",
          textTransform: "none",
        },
        containedPrimary: {
          backgroundColor: "#EF476F",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#FF758F",
          },
        },
        containedSecondary: {
          backgroundColor: "#118AB2",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#4EC3DF",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& label.Mui-focused": {
            color: "#EF476F",
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#118AB2",
            },
            "&:hover fieldset": {
              borderColor: "#EF476F",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#EF476F",
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: "#073B4C",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  },
});

export default theme;
