import { Box, Typography } from "@mui/material";
import productStyles from "./styles";

const ProductHeader: React.FC = () => {
    return (
        <Box sx={productStyles.productHeader}>
            <Typography
                sx={productStyles.productHeaderText}
                variant="h3"
                align="center"
            >
                Our{" "}
                <Box component="span" color="primary.main">
                    Products
                </Box>
            </Typography>
            <Box sx={productStyles.productHeaderBox}></Box>
        </Box>
    );
};

export default ProductHeader;
