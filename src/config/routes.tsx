import type { RouteObject } from "react-router";
import AuthLayout from "../app/auth/pages/layout";
import LoginPage from "../app/auth/pages/login";
import SignupPage from "../app/auth/pages/signup";

const routes: RouteObject[] = [
  {
    path: "auth",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "signup",
        Component: SignupPage,
      },
    ],
  },
];

export default routes;
