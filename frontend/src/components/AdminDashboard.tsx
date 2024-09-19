import React from "react";
import { useAuth } from "../hooks/useAuth";

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Welcome, Admin {user?.name}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;
