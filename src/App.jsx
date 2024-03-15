import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import AuthGuard from "./components/AuthGuard.jsx";

import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import Home from "./pages/home/Home.jsx";
import Group from "./pages/group/Group.jsx";


// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import { DarkModeContext } from "./context/darkModeContext";
// import { AuthContext } from "./context/authContext.jsx";
// import Profile from "./components/profile/Profile.jsx";

import "./style.scss";

function App() {

  // const { darkMode } = useContext(DarkModeContext);
  
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        
        <Route path='/' element={<Home />} />
        <Route path='' element={<Home />} />
        
        <Route path='/groups/:ulid' element={<Group />} />
        
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
