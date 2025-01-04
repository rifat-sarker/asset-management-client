import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";

const Dashboard = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
