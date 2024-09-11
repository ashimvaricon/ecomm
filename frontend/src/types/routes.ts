import { RouteProps } from "react-router-dom";

export interface Route {
    path: string;
    component: React.ComponentType;
    exact?: boolean | RouteProps;
}
