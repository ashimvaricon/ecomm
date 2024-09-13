import { Box } from "@mui/material";
import MainHeader from "./components/MainHeader";
import ProductSection from "./components/ProductSection";

const Products = () => {
    return (
        <Box display="flex" flexDirection="column">
            <MainHeader />
            <ProductSection />
        </Box>
    );
};

export default Products;
