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
const SpecialistsPage = lazy(
  () => import("../app/main/specialist/pages/specialists-dashboard")
);
const SpecialistProfilePage = lazy(
  () => import("../app/main/specialist/pages/specialist-profile")
);
const MessagePage = lazy(() => import("../app/main/message/pages/messages"));
const PharmacyPage = lazy(() => import("../app/main/pharmacy/pages/pharmacy"));
const SettingsPage = lazy(() => import("../app/main/settings/pages/settings"));
const AppointmentPage = lazy(
  () => import("../app/main/appointment/pages/appointments")
);
const ReportsPage = lazy(() => import("../app/main/report/pages/reports"));

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
      {
        path: "specialists",
        children: [
          {
            path: "",
            Component: SpecialistsPage,
          },
          {
            path: ":profileId",
            Component: SpecialistProfilePage,
          },
        ],
      },
      {
        path: "appointments",
        Component: AppointmentPage,
      },
      {
        path: "messages",
        Component: MessagePage,
      },
      {
        path: "pharmacy",
        Component: PharmacyPage,
      },
      {
        path: "reports",
        Component: ReportsPage,
      },
      {
        path: "settings",
        Component: SettingsPage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
];

export default routes;
