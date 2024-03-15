import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoon, faXmark, faSun, faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import profileImg from "../../assets/ppl.jpg";

import AuthGuard from "../../components/AuthGuard.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Feed from "../../components/feed/Feed.jsx";

import { DarkModeContext } from "../../context/darkModeContext.jsx";

import "./home.scss";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [showSidenav, setMenu] = useState(false);

  function handleMoreClick() {
    setMenu(!showSidenav);
  }

  return (
    <>
      <AuthGuard />
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar>
          <button className="icon-btn" onClick={handleMoreClick}>
            <FontAwesomeIcon icon={faBars} />{" "}
          </button>

          <div className={showSidenav ? "sidenav open" : "sidenav"}>
            <div className="header">
              <button className="icon-btn" id="close-sidenav-btn" onClick={handleMoreClick}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="profile">
              <img className="profile-image" src={profileImg} />
              <label className="profile-name">Nicolal Agustin Lopez</label>
            </div>

            <div className="links">
              <div className="section">
                <Link className="link" to="/">
                  <i className="fa-solid fa-house"></i> Inicio
                </Link>
                <Link className="link" to="/">
                  <i className="fa-solid fa-user-group"></i> Mis grupos
                </Link>
                <Link className="link" to="/">
                  <i className="fa-solid fa-user"></i> Perfil
                </Link>
                <Link className="link" to="/">
                  <i className="fa-solid fa-gear"></i> Ajustes
                </Link>
                <Link className="link btn-create-group" href="#">
                  <i className="fa-regular fa-square-plus"></i> Crear grupo
                </Link>
              </div>

              <div className="section">
                <a className="link" href="/logout">
                  <i className="fa-solid fa-right-from-bracket"></i> Cerrar sesion
                </a>
              </div>
            </div>
          </div>

          <div className="logo">
            <img src={logo} alt="SQUAD" />
          </div>
          <button className="icon-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </Navbar>
        <Feed />
      </div>
    </>
  );
};

export default Home;
