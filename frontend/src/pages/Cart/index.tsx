import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { Cart, WishList } from "./components";
import { wishListItems } from "../../constants/cart";
import { useCart } from "./hooks/useCart";

const AddToCartPage: React.FC = () => {
  const { cart, handleAddToCart, handleRemoveFromCart, handleCheckout } =
    useCart();

  return (
    <Container>
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" gutterBottom>
          Wishlist
        </Typography>
        <Grid container spacing={2}>
          {wishListItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <WishList item={item} onAddToCart={handleAddToCart} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Your Cart
          </Typography>
          <Cart
            items={cart}
            onRemove={handleRemoveFromCart}
            onCheckout={handleCheckout}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AddToCartPage;
