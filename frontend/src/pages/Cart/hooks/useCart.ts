import { useState } from "react";
import { Item } from "../../../types/cart";

export const useCart = () => {
  const [cart, setCart] = useState<Item[]>([]);

  const handleAddToCart = (item: Item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    alert("Checkout not implemented");
  };

  return {
    cart,
    setCart,
    handleAddToCart,
    handleRemoveFromCart,
    handleCheckout,
  };
};
