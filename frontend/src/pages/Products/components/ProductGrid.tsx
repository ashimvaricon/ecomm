import { Typography, Grid, Card, CardContent, CardMedia } from "@mui/material";
import products from "../../../constants/products";
import productStyles from "./styles";
import { Link } from "react-router-dom";

const ProductGrid: React.FC = () => {
    return (
        <Grid container spacing={4}>
            {products.map((product, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Link
                        to={`/product/${product.name
                            .toLowerCase()
                            .replace(" ", "-")}`}
                        style={{
                            textDecoration: "none",
                        }}
                    >
                        <Card sx={productStyles.cardStyles}>
                            <CardMedia
                                component="img"
                                image={product.image}
                                alt={product.name}
                            />
                            <CardContent
                                sx={{ flexGrow: 1, textAlign: "center" }}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                >
                                    {product.name}
                                </Typography>
                                <Typography variant="h6" color="primary">
                                    Rs. {product.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGrid;
