import React from "react";
import { useParams } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid2";
import MainHeader from "../components/MainHeader";
import ProductImage from "../components/ProductImage";
import ProductInfo from "../components/ProductInfo";
import AddToCart from "../components/AddToCart";
import ProductDetailsInfo from "../components/ProductDetailsInfo";
import useProducts from "../../../hooks/useProducts";

const ProductDetails: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const { getProductBySlug } = useProducts();
    const product = getProductBySlug(slug as string);

    if (!product) {
        return (
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
            >
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Box display="flex" flexDirection="column">
            <MainHeader />
            <Box p={3}>
                <Grid container spacing={4}>
                    <ProductImage image={product.image} name={product.name} />
                    <Grid size={{ xs: 12, md: 6 }}>
                        <ProductInfo
                            name={product.name}
                            category={product.category}
                            price={product.price}
                            rating={product.rating}
                        />
                        <AddToCart />
                        <ProductDetailsInfo description={product.description} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default ProductDetails;
