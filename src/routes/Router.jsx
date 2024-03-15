import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Lab from "../pages/Lab/Lab";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const routes = [
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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/labs",
        element: <Lab></Lab>,
      },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
