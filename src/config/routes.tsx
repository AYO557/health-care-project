import type { RouteObject } from "react-router";
import AuthLayout from "../app/auth/pages/layout";
import { lazy } from "react";

const LoginPage = lazy(() => import("../app/auth/pages/login"));
const SignupPage = lazy(() => import("../app/auth/pages/signup"));
const ForgotPasswordPage = lazy(
  () => import("../app/auth/pages/forgot-password")
);
const ResetPasswordPage = lazy(
  () => import("../app/auth/pages/reset-password")
);

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
      {
        path: "forgot-password",
        Component: ForgotPasswordPage,
      },
      {
        path: "reset-password",
        Component: ResetPasswordPage,
      },
    ],
  },
];

export default routes;
