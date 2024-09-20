import { useEffect, useState, useMemo } from "react";
import { Product } from "../types/products";
import products from "../constants/products";

const useProducts = () => {
    const [allProducts, setAllProducts] = useState<Product[]>([]);

    useEffect(() => {
        setAllProducts(products);
    }, []);

    const getAllProducts = useMemo(
        () => () => {
            return allProducts;
        },
        [allProducts]
    );

    const getProductBySlug = useMemo(
        () => (slug: string) => {
            return allProducts.find((product) => product.slug === slug);
        },
        [allProducts]
    );

    const getProductsByCategory = useMemo(
        () => (category: string) => {
            return allProducts.filter(
                (product) => product.category === category
            );
        },
        [allProducts]
    );

    const searchProducts = useMemo(
        () => (query: string) => {
            const lowercaseQuery = query.toLowerCase();
            return allProducts.filter(
                (product) =>
                    product.name.toLowerCase().includes(lowercaseQuery) ||
                    product.description.toLowerCase().includes(lowercaseQuery)
            );
        },
        [allProducts]
    );

    return {
        getAllProducts,
        getProductBySlug,
        getProductsByCategory,
        searchProducts,
    };
};

export default useProducts;
