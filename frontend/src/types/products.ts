export interface Comment {
    userName: string;
    comment: string;
}

export interface Product {
    name: string;
    description: string;
    price: number;
    category: string;
    image: string;
    rating: number;
    comments: Comment[];
}
