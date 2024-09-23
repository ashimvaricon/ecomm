import {
  Box,
  Grid,
  Typography,
  Link,
  IconButton,
  useTheme,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  const theme = useTheme(); // This should be imported from MUI, not Emotion

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.primary.main, // Adjust the theme color here
        padding: theme.spacing(2), // Responsive spacing
        marginTop: "auto",
        borderTop: "1px solid #e0e0e0",
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

        {/* Column 4: Social Media Icons */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom textAlign="center">
            Follow Us
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap={1}
            mt={1}
          >
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "white" }}
            >
              <TwitterIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Copyright Section */}
      <Box
        sx={{
          textAlign: "center",
          pt: 2,
          mt: 2,
          borderTop: "1px solid #e0e0e0",
          color: "white",
        }}
      >
        <Typography variant="body2" sx={{ color: "white" }}>
          © 2024 Ecomms Nepal. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
