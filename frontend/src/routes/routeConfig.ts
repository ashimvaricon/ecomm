import { ROUTES } from "../constants/routes";
import React from "react";

export interface RouteConfig<T = object> {
  path: string;
  component: React.LazyExoticComponent<React.ComponentType<T>>;
}

export const routeConfigs: RouteConfig[] = [
  { path: ROUTES.Home, component: React.lazy(() => import("../pages/Home")) },
  {
    path: ROUTES.Products,
    component: React.lazy(() => import("../pages/Products")),
  },
  {
    path: ROUTES.ProductDetails,
    component: React.lazy(() => import("../pages/Products/ProductDetails")),
  },
  {
    path: ROUTES.Cart,
    component: React.lazy(() => import("../pages/Cart")),
  },
];
