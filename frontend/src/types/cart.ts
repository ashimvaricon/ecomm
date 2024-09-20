export interface Item {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartProps {
  items: Item[];
  onRemove: (id: number) => void;
  onCheckout: () => void;
}

export interface CartItemProps {
  item: Item;
  onRemove: (id: number) => void;
}

export interface WishListProps {
  item: Item;
  onAddToCart: (item: Item) => void;
}
