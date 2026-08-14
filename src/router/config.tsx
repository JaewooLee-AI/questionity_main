import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import ClubDetail from "../pages/club-detail/page";
import Login from "../pages/login/page";
import Signup from "../pages/signup/page";
import FAQ from "../pages/faq/page";
import Terms from "../pages/terms/page";
import Privacy from "../pages/privacy/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/terms",
    element: <Terms />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
  },
  {
    path: "/clubs",
    element: <Navigate to="/#clubs" replace />,
  },
  {
    path: "/clubs/:id",
    element: <ClubDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;