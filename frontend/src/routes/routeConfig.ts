import { ROUTES } from "../constants/routes";
import React from "react";

export interface RouteConfig<T = object> {
  path: ROUTES;
  component: React.LazyExoticComponent<React.ComponentType<T>>;
}


export const routeConfigs: RouteConfig[] = [
  { path: ROUTES.Home, component: React.lazy(() => import("../pages/Home")) },
  { path: ROUTES.Products, component: React.lazy(() => import("../pages/Products")) },
 
];
