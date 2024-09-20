import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import productStyles from "./styles";
import { ProductCardProps } from "../../../types/products";
import NotFound from "../../../components/NotFound";
import AddToCart from "../components/AddToCart";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) {
    return <NotFound />;
  }
  return (
    <Card sx={productStyles.cardStyles}>
      <CardMedia component="img" image={product.image} alt={product.name} />
      <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="h2">
          {product.name}
        </Typography>
        <Typography variant="h6" color="primary">
          Rs. {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <AddToCart />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
