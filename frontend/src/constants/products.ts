import { Product } from "../types/products";

const products: Product[] = [
  {
    slug: "t-shirt",
    name: "T-Shirt",
    description: "A comfortable cotton t-shirt.",
    price: 19.99,
    category: "Apparel",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    comments: [
      { userName: "Alice", comment: "Great quality!" },
      { userName: "Bob", comment: "Fits well and feels soft." },
    ],
  },
  {
    slug: "bluetooth-headphones",
    name: "Bluetooth Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: 89.99,
    category: "Electronics",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.7,
    comments: [
      { userName: "Charlie", comment: "Amazing sound quality!" },
      {
        userName: "Dana",
        comment: "Comfortable for long listening sessions.",
      },
    ],
  },
  {
    slug: "smart-watch",
    name: "Smart Watch",
    description: "A smartwatch with fitness tracking features.",
    price: 149.99,
    category: "Electronics",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.2,
    comments: [
      { userName: "Eve", comment: "Very useful for tracking workouts." },
      { userName: "Frank", comment: "Battery life could be better." },
    ],
  },
  {
    slug: "coffee-maker",
    name: "Coffee Maker",
    description: "A drip coffee maker with programmable settings.",
    price: 59.99,
    category: "Home Appliances",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.3,
    comments: [
      { userName: "Grace", comment: "Brews excellent coffee." },
      { userName: "Hank", comment: "A bit noisy, but works well." },
    ],
  },
  {
    slug: "yoga-mat",
    name: "Yoga Mat",
    description: "A non-slip yoga mat for exercise and stretching.",
    price: 29.99,
    category: "Fitness",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    comments: [
      { userName: "Ivy", comment: "Perfect for my yoga practice." },
      { userName: "Jack", comment: "Good grip and comfortable." },
    ],
  },
  {
    slug: "portable-charger",
    name: "Portable Charger",
    description: "A high-capacity power bank for charging devices on the go.",
    price: 34.99,
    category: "Accessories",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
    comments: [
      { userName: "Kara", comment: "Charges my phone quickly." },
      { userName: "Leo", comment: "Compact and efficient." },
    ],
  },
  {
    slug: "sunglasses",
    name: "Sunglasses",
    description: "Stylish sunglasses with UV protection.",
    price: 24.99,
    category: "Accessories",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.4,
    comments: [
      {
        userName: "Mia",
        comment: "Look great and protect well from the sun.",
      },
      { userName: "Nick", comment: "Good value for the price." },
    ],
  },
  {
    slug: "desk-chair",
    name: "Desk Chair",
    description: "Ergonomic office chair with adjustable features.",
    price: 119.99,
    category: "Furniture",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.1,
    comments: [
      { userName: "Olivia", comment: "Very comfortable for long hours." },
      { userName: "Paul", comment: "Assembly was a bit tricky." },
    ],
  },
  {
    slug: "novel-book",
    name: "Novel Book",
    description: "A bestselling novel by a popular author.",
    price: 14.99,
    category: "Books",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.9,
    comments: [
      {
        userName: "Quinn",
        comment: "A must-read, couldn't put it down!",
      },
      { userName: "Riley", comment: "Incredible storytelling." },
    ],
  },
  {
    slug: "camera",
    name: "Camera",
    description:
      "A high-resolution digital camera for photography enthusiasts.",
    price: 399.99,
    category: "Electronics",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.6,
    comments: [
      { userName: "Sam", comment: "Excellent image quality." },
      { userName: "Tina", comment: "A bit expensive but worth it." },
    ],
  },
  {
    slug: "camping-tent",
    name: "Camping Tent",
    description: "A weather-resistant tent for outdoor camping.",
    price: 89.99,
    category: "Outdoor Gear",
    image:
      "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?q=80&w=2956&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
    comments: [
      { userName: "Uma", comment: "Spacious and easy to set up." },
      { userName: "Vera", comment: "Keeps out the rain well." },
    ],
  },
];

export default products;
