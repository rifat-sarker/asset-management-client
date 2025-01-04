import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Navbar2 from "../shared/Navbar/Navbar2";

const Main = () => {
  return (
    <div className="font-Inter mx-auto">
      {/* <Navbar/> */}
      <Navbar2 />
      <Outlet />
    </div>
  );
};

export default Main;
