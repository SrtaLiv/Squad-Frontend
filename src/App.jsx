import React, { useContext, useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Offline from "./pages/Offline.jsx";
import Login from "./pages/Login.jsx";
import Logout from "./utils/logout.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Group from "./pages/Group.jsx";
import CreateGroup from "./pages/CreateGroup.jsx";

// import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
// import { DarkModeContext } from "./context/darkModeContext";

function App() {

  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // console.log("is online: "+isOnline);
  // if(!isOnline){
  //   window.location.replace("/offline");
  // }

  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/logout" element={<Logout />} />
        <Route exact path="/register" element={<Register />} />

        <Route exact path="/" element={<Home />} />
        <Route exact path="" element={<Home />} />

        <Route path="/groups/:ulid" element={<Group />} />
        <Route exact path="/create" element={<CreateGroup />} />
      </Routes>
    </Router>
  );

}

export default App;
