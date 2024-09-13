import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
<<<<<<< HEAD
import Navbar from "../components/navbar";
<<<<<<< HEAD
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/Products/ProductDetails";

const Routes = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Navbar />}>
                <Route index element={<Home />} />
                <Route path="/product" element={<Products />} />
                <Route path="/product/:slug" element={<ProductDetails />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
=======
import React from "react";
import LazyLoad from "../components/LazyLoads";
const Home = React.lazy(() => import("../pages/Home"));
const Products = React.lazy(() => import("../pages/Products"));
=======
import Home from "../pages/Home";
import Products from "../pages/Products";
import AppLayout from "../layout";
>>>>>>> 41806a520639fbf64bb301529690405c40953b7c

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
<<<<<<< HEAD
      <Route path="/" element={<Navbar />}>
        <Route index element={<LazyLoad Component={Home} />} />
        <Route path="/product" element={<LazyLoad Component={Products} />} />
=======
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Products />} />
>>>>>>> 41806a520639fbf64bb301529690405c40953b7c
      </Route>
    )
  );

  return <RouterProvider router={router} />;
>>>>>>> ecomm-2-navbar
};

export default Routes;
