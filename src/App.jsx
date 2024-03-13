import React, { useContext } from "react";

import Login from "./pages/login/Login.jsx";             
import Register from "./pages/register/Register.jsx";    
import Navbar from "./components/navbar/Navbar.jsx";      
import Feed from "./components/feed/Feed.jsx";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext.jsx";
import Profile from "./components/profile/Profile.jsx";

import "./style.scss";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Home = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <Feed />
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    // {
    //   path: "/navbar",
    {
      path: "profile/:id",
      element: <Profile />,
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
