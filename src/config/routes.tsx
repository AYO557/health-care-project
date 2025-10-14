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

//! main
const MainLayout = lazy(() => import("../app/main/layout"));
const DashboardPage = lazy(() => import("../app/main/dashboard/page"));

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
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
      {
        path: "dashboard",
        Component: DashboardPage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
];

export default routes;
