import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "../components/navbar";
import LazyLoad from "../components/LazyLoads";
import { routeConfigs } from "./routeConfig";

const generateRoutes = (configs: typeof routeConfigs) => {
  return configs.map(({ path, component }) => (
    <Route
      key={path}
      path={path}
      element={<LazyLoad Component={component} />}
    />
  ));
};

const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        {generateRoutes(routeConfigs)}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Routes;
