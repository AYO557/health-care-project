import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RoutesConfig from "./config/routes-config";
import AuthContextProvider from "./app/auth/store/auth";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <RoutesConfig />
    </AuthContextProvider>
  </StrictMode>
);
