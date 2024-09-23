import { ROUTES } from "../constants/routes";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../pages/Products/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";
import Profile from "../pages/Profile";
import NotFound from "../components/NotFound/index";
import { Route } from "../types/routes";

const routes: Route[] = [
  { path: ROUTES.Home, component: Home, exact: true },
  { path: ROUTES.Products, component: Products },
  { path: ROUTES.ProductDetails, component: ProductDetails },
  { path: ROUTES.Cart, component: Cart },
  { path: ROUTES.Checkout, component: Checkout },
  { path: ROUTES.Orders, component: Orders },
  { path: ROUTES.Profile, component: Profile },
  { path: ROUTES.NotFound, component: NotFound },
];

export default routes;
