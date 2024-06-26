import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/menu/Menu";
import Order from "../pages/order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/signUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
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
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children:[
     {
      path:'cart',
      element:<Cart></Cart>
     }
    ]
  }
]);
