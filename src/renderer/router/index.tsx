import { RouteObject, createHashRouter } from "react-router-dom";
import Home from "../pages/home";
import Search from "../pages/search";
import About from "../pages/about";
import Draft from "../pages/draft";
import DefaultLayout from "../layout";
interface ISidebarLink {
  name: string;
  path: string;
  element: JSX.Element;
}

const SidebarLinks: ISidebarLink[] = [
  {
    name: "Home",
    path: "/Home",
    element: <Home />,
  },
  {
    name: "About",
    path: "/About",
    element: <About />,
  },
  {
    name: "Search",
    path: "/Search",
    element: <Search />,
  },
  {
    name: "Draft",
    path: "/Draft",
    element: <Draft />,
  },
];

const Router = createHashRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      ...SidebarLinks.map((link, _): RouteObject => {
        return {
          path: link.path,
          element: link.element,
        };
      }),
    ],
  },
]);

export { Router, SidebarLinks };
