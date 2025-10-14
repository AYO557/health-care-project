import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./routes";
import { Suspense } from "react";
import LoadingPage from "@/app/pages/loading";

const RoutesConfig = () => {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default RoutesConfig;
