import { Container } from "@mui/material";
import ProductHeader from "./ProductHeader";
import ProductGrid from "./ProductGrid";

const ProductSection: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <ProductHeader />
      <ProductGrid />
    </Container>
  );
};

export default ProductSection;
