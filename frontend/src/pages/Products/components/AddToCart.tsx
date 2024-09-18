import React from "react";
import { Box, TextField, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const AddToCart: React.FC = () => (
  <Box display="flex" alignItems="center" mb={2}>
    <TextField
      type="number"
      label="Quantity"
      defaultValue={1}
      InputProps={{ inputProps: { min: 1 } }}
      size="small"
      sx={{ width: 100, mr: 2 }}
    />
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
