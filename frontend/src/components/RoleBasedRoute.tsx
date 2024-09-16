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

// import React from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// interface RoleBasedRouteProps {
//   allowedRoles: string[];
//   children: React.ReactNode;
// }

// const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({
//   allowedRoles,
//   children,
// }) => {
//   const { user } = useAuth();
//   const location = useLocation();

//   console.log("User:", user); // Debugging line
//   console.log("Allowed Roles:", allowedRoles); // Debugging line

//   if (!user) {
//     console.log("No user found, redirecting to /login"); // Debugging line
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   if (!allowedRoles.includes(user.role)) {
//     console.log("User role not allowed, redirecting to /403"); // Debugging line
//     return <Navigate to="/403" state={{ from: location }} replace />;
//   }

//   return <>{children}</>;
// };

// export default RoleBasedRoute;
