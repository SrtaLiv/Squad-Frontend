import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoon, faXmark, faSun, faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

import "./navbar.scss";
// import logo from "../../assets/logo.png";
// import profileImg from "../../assets/ppl.jpg";

const Navbar = ({ children }) => {
  // const { darkMode, toggle } = useContext(DarkModeContext);
  // const { currentUser } = useContext(AuthContext);


  return (
    <div className="navbar">      
      {children}
    </div>
  );
};

export default Navbar;
