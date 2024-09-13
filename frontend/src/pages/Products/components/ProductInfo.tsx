import React from "react";
import { Typography, Chip, Box, Rating } from "@mui/material";
import { ProductInfoProps } from "../../../types/products";

const ProductInfo: React.FC<ProductInfoProps> = ({
    name,
    category,
    price,
    rating,
}) => (
    <>
        <Typography variant="h4" gutterBottom>
            {name}
        </Typography>
        <Chip label={category} color="primary" size="small" sx={{ mb: 2 }} />
        <Typography variant="h5" color="primary" gutterBottom>
            ${price.toFixed(2)}
        </Typography>
        <Box display="flex" alignItems="center" mb={2}>
            <Rating value={rating} readOnly />
            <Typography variant="body2" sx={{ ml: 1 }}>
                ({rating.toFixed(1)})
            </Typography>
        </Box>
    </>
);

export default ProductInfo;
