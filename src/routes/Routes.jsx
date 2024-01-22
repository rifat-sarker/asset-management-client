import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import AdminSignUp from "../Pages/SignUp/AdminSignUp";
import EmployeeSignUp from "../Pages/SignUp/EmployeeSignUp";
import Dashboard from "../Layout/Dashboard";
import EmployeeHome from "../Pages/Dashboard/EmployeeHome/EmployeeHome";
import CustomRequest from "../Pages/Dashboard/EmployeeHome/CustomRequest/CustomRequest";
import CustomDetails from "../Pages/Dashboard/EmployeeHome/CustomDetails/CustomDetails";
import EmployeeList from "../Pages/Dashboard/Admin/EmployeeList/EmployeeList";
import PrivateRoute from "./PrivateRoute";
import AddAsset from "../Pages/Dashboard/Admin/AddAsset/AddAsset";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/admin",
        element: <AdminSignUp></AdminSignUp>,
      },
      {
        path: "/employee",
        element: <EmployeeSignUp></EmployeeSignUp>,
      },
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // normal employee related routes
      {
        path: "employeeHome",
        element: <EmployeeHome></EmployeeHome>,
      },
      {
        path: "employeeHome/:id",
        element: <CustomDetails></CustomDetails>
      },
      
      {
        path: "customRequest",
        element: <CustomRequest></CustomRequest>,
      },
      // admin related routes
      {
        path: "employeeList",
        element: <EmployeeList></EmployeeList>,
      },
      {
        path: "addAsset",
        element:<AddAsset></AddAsset>,
      },
    
    
      
    ]
  }
]);
