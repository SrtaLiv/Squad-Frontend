import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRequireAuth } from "./auth";

const ProtectedRoute = ({ children }) => {
  const token = useRequireAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      console.log("Auth token not found, redirecting to /login ...");
      navigate("/login");
    }
  }, [navigate, token]);

  return token ? children : null;
};

export default ProtectedRoute;
