import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddDevice from "../pages/AddDevice/AddDevice";
import AddLab from "../pages/AddLab/AddLab";
import CardDetails from "../pages/CardDetails/CardDetails";
import Hardware from "../pages/Hardware/Hardware";
import Home from "../pages/Home/Home";
import Lab from "../pages/Lab/Lab";
import Login from "../pages/Login/Login";
import Networking from "../pages/Networking/Networking";
import Register from "../pages/Register/Register";
import Software from "../pages/Software/Software";

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
      {
        path: "/addLab",
        element: <AddLab></AddLab>,
      },
      {
        path: "/addDevice",
        element: <AddDevice></AddDevice>,
      },
      {
        path: "/software",
        element: <Software></Software>,
      },
      {
        path: "/software/:Id", // Dynamic path for device ID
        element: <CardDetails></CardDetails>,
      },
      {
        path: "/hardware",
        element: <Hardware></Hardware>,
      },
      {
        path: "/networking",
        element: <Networking></Networking>,
      },
    ],
  },
];

const Router = createBrowserRouter(routes);

export default Router;
