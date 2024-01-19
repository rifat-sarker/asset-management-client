import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";


const Dashboard = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Dashboard;
