import React from "react";
import { Box, Grid, Typography, Link } from "@mui/material";
import { useTheme } from "@emotion/react";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.error.main,
        p: { xs: 2, sm: 4 },
        mt: "auto",
        borderTop: "1px solid #e0e0e0",
        marginTop: "40px",
        color: "white",
      }}
    >
      <Grid container spacing={2}>
        {/* Column 1 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Company
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              About Us
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Careers
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Blog
            </Link>
          </Typography>
        </Grid>

        {/* Column 2 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Help
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Contact Us
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              FAQs
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Shipping & Returns
            </Link>
          </Typography>
        </Grid>

        {/* Column 3 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Privacy Policy
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Terms of Service
            </Link>
          </Typography>
        </Grid>

        {/* Column 4 */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Social Media
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Facebook
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Instagram
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="#" underline="none" color="inherit">
              Twitter
            </Link>
          </Typography>
        </Grid>
      </Grid>

      {/* Copyright */}
      <Box
        sx={{
          textAlign: "center",
          pt: 2,
          mt: 2,
          borderTop: "1px solid #e0e0e0",
          color: "white",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © 2024 Your E-commerce Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
