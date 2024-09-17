import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LaptopMacOutlinedIcon from "@mui/icons-material/LaptopMacOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import { SvgIconProps } from "@mui/material";

interface Category {
  name: string;
  icon: React.ComponentType<SvgIconProps>; // Using ComponentType for the icon
}

export const categories: Category[] = [
  { name: "Clothes", icon: ShoppingBagOutlinedIcon },
  { name: "Laptops", icon: LaptopMacOutlinedIcon },
  { name: "Mobiles", icon: PhoneIphoneOutlinedIcon },
  { name: "Accessories", icon: WatchOutlinedIcon },
];
