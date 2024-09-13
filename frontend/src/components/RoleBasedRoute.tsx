import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface RoleBasedRouteProps {
  //allowedRoles: Array<"admin" | "user">;
  allowedRoles: string[];
  children: React.ReactNode;
}

const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({
  allowedRoles,
  children,
}) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/403" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RoleBasedRoute;
