import React from "react";
import { Box, TextField, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const AddToCart: React.FC = () => (
  <Box display="flex" margin="4px 6px" alignItems="center">
    <Button
      variant="contained"
      startIcon={<ShoppingCartIcon />}
      size="large"
      component={Link}
      to="/cart"
    >
      Add to Cart
    </Button>
  </Box>
);

export default AddToCart;
