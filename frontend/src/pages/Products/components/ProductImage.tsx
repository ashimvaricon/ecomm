import React from "react";
import Grid from "@mui/material/Grid2";
import { ProductImageProps } from "../../../types/products";

const ProductImage: React.FC<ProductImageProps> = ({ image, name }) => (
    <Grid size={{ xs: 12, md: 6 }}>
        <img src={image} alt={name} style={{ width: "100%", height: "auto" }} />
    </Grid>
);

export default ProductImage;
