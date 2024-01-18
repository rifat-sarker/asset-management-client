import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import AdminSignUp from "../Pages/SignUp/AdminSignUp";
import EmployeeSignUp from "../Pages/SignUp/EmployeeSignUp";
import Dashboard from "../Layout/Dashboard";
import EmployeeHome from "../Pages/Dashboard/EmployeeHome/EmployeeHome";


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
      // {
      //   path: "/employeeHome",
      //   element: <EmployeeHome></EmployeeHome>,
      // },
    ],
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      // normal employee related routes
      {
        path: "employeeHome",
        element: <EmployeeHome></EmployeeHome>,
      },
      
    ]
  }
]);
