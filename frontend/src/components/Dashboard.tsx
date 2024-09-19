import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();

  return <div>Welcome, {user?.name}</div>;
};

export default Dashboard;
