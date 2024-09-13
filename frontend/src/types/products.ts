export interface Comment {
    userName: string;
    comment: string;
}

export interface Product {
    slug: string;
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating: number;
    comments: Comment[];
}

export interface ProductCardProps {
    product: Product;
}

export interface ProductDetailsInfoProps {
    description: string;
}

export interface ProductImageProps {
    image: string;
    name: string;
}

export interface ProductInfoProps {
    name: string;
    category: string;
    price: number;
    rating: number;
}
