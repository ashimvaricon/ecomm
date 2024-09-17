import {
  AppBar,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import productStyles from "./styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d4e6f8",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});
const MainHeader: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" sx={{ mt: 2 }}>
        <Toolbar sx={productStyles.tooltipStyles}>
          <Typography variant="h2" sx={productStyles.headerText}>
            Product Grid
          </Typography>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default MainHeader;
