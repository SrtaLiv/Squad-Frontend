import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AuthGuard from "../../components/AuthGuard.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Feed from "../../components/feed/Feed.jsx";

import { DarkModeContext } from "../../context/darkModeContext.jsx";

import "./home.scss";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <AuthGuard />
      <Navbar />
      <Feed />
    </div>
  );
};

export default Home;
