import { AppBar, ThemeProvider, Toolbar, Typography } from "@mui/material";
import productStyles, { theme } from "./styles";

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
