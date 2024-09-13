import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "../components/navbar";
import React from "react";
import LazyLoad from "../components/LazyLoads";
const Home = React.lazy(() => import("../pages/Home"));
const Products = React.lazy(() => import("../pages/Products"));

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<LazyLoad Component={Home} />} />
        <Route path="/product" element={<LazyLoad Component={Products} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Routes;
