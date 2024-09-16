import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";
import Home from "./components/Home";
import AdminDashboard from "./components/AdminDashboard";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./components/ErrorPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/user-dashboard"
        element={
          <RoleBasedRoute allowedRoles={["user"]}>
            <Dashboard />
          </RoleBasedRoute>
        }
      />
      <Route
        path="/admin-dashboard"
        element={
          <RoleBasedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </RoleBasedRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
