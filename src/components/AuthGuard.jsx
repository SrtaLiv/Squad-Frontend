import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();

  const authToken = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  useEffect(() => {
    if (!authToken) {
      console.log("Auth token not found, redirecting to /login ...");
      navigate("/login");
    }

    // TODO: add stored expired token check
    // mentira eso tiene que ir en ele customAxios en cada request ?
    // jaja pero que pelotudo que soy
  }, [navigate, authToken]);

  return authToken ? children : null;
};

export default AuthGuard;


