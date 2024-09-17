import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardMedia,
} from "@mui/material";
import { WishListProps } from "../../../types/cart";

// This is the wishlist component from which the users add items to cart.
const WishList: React.FC<WishListProps> = ({ item, onAddToCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.name}
      />
      <CardContent>
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          ${item.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onAddToCart(item)}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default WishList;
