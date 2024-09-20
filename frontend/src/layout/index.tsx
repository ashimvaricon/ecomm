import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: "64px" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
