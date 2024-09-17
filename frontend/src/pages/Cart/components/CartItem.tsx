import React from "react";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { CartItemProps } from "../../../types/cart";

const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onRemove(item.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText
        primary={item.name}
        secondary={`$${item.price.toFixed(2)}`}
      />
    </ListItem>
  );
};

export default CartItem;
