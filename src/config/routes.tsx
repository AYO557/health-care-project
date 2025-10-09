import type { RouteObject } from "react-router";
import AuthLayout from "../app/auth/pages/layout";
import { lazy } from "react";
import ErrorPage from "../app/pages/error";

//! auth
const LoginPage = lazy(() => import("../app/auth/pages/login"));
const SignupPage = lazy(() => import("../app/auth/pages/signup"));
const ForgotPasswordPage = lazy(
  () => import("../app/auth/pages/forgot-password")
);
const ResetPasswordPage = lazy(
  () => import("../app/auth/pages/reset-password")
);

//! app
const NotFoundPage = lazy(() => import("../app/pages/not-found"));

const routes: RouteObject[] = [
  {
    path: "auth",
    Component: AuthLayout,
    errorElement: <ErrorPage />,
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
  {
    path: "*",
    Component: NotFoundPage,
  },
];

export default routes;
