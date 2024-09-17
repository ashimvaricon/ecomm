import React from "react";
import { List, Paper, Typography, Divider, Button } from "@mui/material";
import CartItem from "./CartItem";
import { CartProps } from "../../../types/cart";

const Cart: React.FC<CartProps> = ({ items, onRemove, onCheckout }) => {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <Paper style={{ padding: 16 }}>
      <Typography variant="h6">Cart</Typography>
      <List>
        {items.map((item) => (
          <CartItem key={item.id} item={item} onRemove={onRemove} />
        ))}
      </List>
      <Divider />
      <Typography variant="h6" style={{ marginTop: 16 }}>
        Total: ${total.toFixed(2)}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={onCheckout}
        style={{ marginTop: 16 }}
      >
        Checkout
      </Button>
    </Paper>
  );
};

export default Cart;
