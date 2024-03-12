import React, { useContext } from 'react';
import './App.css';

import logo from './assets/logo.png';
import Login from './pages/login/Login.jsx'; // Cambiar la ruta absoluta a relativa
import Register from './pages/register/Register.jsx'; // Cambiar la ruta absoluta a relativa
import Navbar from './components/navbar/Navbar.jsx'; // Cambiar la ruta absoluta a relativa
import Home from './pages/home/Home.jsx'
import './style.scss';

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from './context/authContext.jsx';
import Profile from './components/profile/Profile.jsx';

function App() {
   const {currentUser} = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <Home/>
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
      element: <Layout/>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/navbar",
      element: <Navbar />
    },
    {
      path: "profile/:id",
      element: <Profile />
    }
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
