import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "../components/navbar";
import Home from "../pages/Home";
import Products from "../pages/Products";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Products />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
