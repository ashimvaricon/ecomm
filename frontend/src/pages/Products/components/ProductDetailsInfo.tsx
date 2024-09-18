import React from "react";
import { Typography, Divider } from "@mui/material";
import { ProductDetailsInfoProps } from "../../../types/products";

const ProductDetailsInfo: React.FC<ProductDetailsInfoProps> = ({
    description,
}) => (
    <>
        <Divider sx={{ my: 3 }} />
        <Typography variant="h5" gutterBottom>
            Description:
        </Typography>
        <Typography variant="h6" paragraph>
            {description}
        </Typography>
    </>
);

export default ProductDetailsInfo;
