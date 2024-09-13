import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import products from "../../../constants/products";
import ProductCard from "./ProductCard";

const ProductGrid: React.FC = () => {
    return (
        <Grid container spacing={4}>
            {products.map((product, index) => (
                <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                    <Link
                        to={`/product/${product.name.replace(" ", "-")}`}
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <ProductCard product={product} />
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGrid;
