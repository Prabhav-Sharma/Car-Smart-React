import React from "react";
import { useAuth } from "../contexts/Providers/AuthProvider/AuthProvider";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function ProtectedRoutes() {
  const {
    authState: { isAuthenticated },
  } = useAuth();

  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={"/login"} replace state={{ from: location }} />
  );
}

export { ProtectedRoutes };
