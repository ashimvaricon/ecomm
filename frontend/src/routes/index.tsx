import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import AppLayout from "../layout";

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Products />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
