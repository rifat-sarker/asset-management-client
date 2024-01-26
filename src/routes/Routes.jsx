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
import AdminRoute from "./AdminRoute";
import AssetList from "../Pages/Dashboard/Admin/AssetList/AssetList";
import CustomRequestList from "../Pages/Dashboard/Admin/CustomRequestList/CustomRequestList";
import RequestAsset from "../Pages/Dashboard/Employee/RequestAsset/RequestAsset";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import MyAsset from "../Pages/Dashboard/Employee/MyAsset/MyAsset";
import MyTeam from "../Pages/Dashboard/Employee/MyTeam/MyTeam";
import AllRequest from "../Pages/Dashboard/Admin/AllRequest/AllRequest";
import AddEmployee from "../Pages/Dashboard/Admin/AddEmployee/AddEmployee";
import Payment from "../Pages/Dashboard/Admin/Payment/Payment";
import PaymentPage from "../Pages/Dashboard/Admin/Payment/PaymentPage";





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
        path: "requestAsset",
        element: <RequestAsset></RequestAsset>
      },
      
      {
        path: "myAssets",
        element: <MyAsset></MyAsset>
      },
      
      {
        path: "myTeam",
        element: <MyTeam></MyTeam>
      },
      
      {
        path: "customRequest",
        element: <CustomRequest></CustomRequest>,
      },
      // admin related routes
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      },
      {
        path: "employeeList",
        element: <AdminRoute><EmployeeList></EmployeeList></AdminRoute>,
      },
      {
        path: "allRequest",
        element: <AdminRoute><AllRequest></AllRequest></AdminRoute>
      },
      {
        path: "addAsset",
        element:<AdminRoute><AddAsset></AddAsset></AdminRoute>,
      },
      {
        path: "assetList",
        element:<AdminRoute><AssetList></AssetList></AdminRoute>,
      },
      {
        path: "customRequestList",
        element:<AdminRoute><CustomRequestList></CustomRequestList></AdminRoute>,
      },
      {
        path: "addEmployee",
        element:<AdminRoute><AddEmployee></AddEmployee></AdminRoute>,
      },
      {
        path: "payment",
        element:<AdminRoute><Payment></Payment></AdminRoute>,
      },
      {
        path: "paymentPage/:id",
        element:<AdminRoute><PaymentPage></PaymentPage></AdminRoute>,
      },
      
    ]
  }
]);
