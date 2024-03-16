import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthGuard from "./components/AuthGuard.jsx";

import Login from "./pages/Login.jsx";
import Logout from "./utils/logout.jsx";
// import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Group from "./pages/Group.jsx";

// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from "./context/authContext.jsx";
// import Profile from "./components/profile/Profile.jsx";

import "./styles/style.scss";

function App() {
  // const { darkMode } = useContext(DarkModeContext);
  // const user = ;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout/>} />

        <Route path="/" element={<Home />} />
        <Route path="" element={<Home />} />

        <Route path="/groups/:ulid" element={<Group />} />

      </Routes>
    </Router>
  );

  // const { currentUser } = useContext(AuthContext);

  // const ProtectedRoute = ({ children }) => {
  //   if (!currentUser) {
  //     return <Navigate to="/login" />;
  //   }
  //   return children;
  // };

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
  //   // {
  //   //   path: "/navbar",
  //   {
  //     path: "profile/:id",
  //     element: <Profile />,
  //   },
  // ]);

  // return (
  //   <>
  //     <div>
  //       <RouterProvider router={router} />
  //     </div>
  //   </>
  // );
}

export default App;
