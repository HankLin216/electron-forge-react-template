import { createHashRouter } from "react-router-dom";
import Home from "../pages/home";
import DefaultLayout from "../layout";

const Router = createHashRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default Router;
