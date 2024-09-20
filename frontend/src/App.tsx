import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleBasedRoute from "./components/RoleBasedRoute";
import Home from "./pages/Home";
import AdminDashboard from "./components/AdminDashboard";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./components/ErrorPage";
import Checkout from "./pages/Checkout/index";
import Cart from "./pages/Cart";
import Product from "./pages/Products";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route
        path="/user-dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin-dashboard"
        element={
          <ProtectedRoute>
            <RoleBasedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </RoleBasedRoute>
          </ProtectedRoute>
        }
      />
      <Route path="/checkout" element={<Checkout />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
