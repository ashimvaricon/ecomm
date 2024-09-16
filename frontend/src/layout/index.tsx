import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { BoxStyled } from "./appLayoutStyled";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <BoxStyled sx={{ marginTop: "64px" }}>
        <Outlet />
      </BoxStyled>
    </div>
  );
};

export default AppLayout;
