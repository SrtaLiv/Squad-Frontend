import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import customAxios from "../../components/CustomAxios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMoon, faXmark, faSun, faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import profileImg from "../../assets/ppl.jpg";

import GroupCard from "../../components/groupCard/GroupCard";
import AuthGuard from "../../components/AuthGuard.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
// import Feed from "../../components/feed/Feed.jsx";

import { DarkModeContext } from "../../context/darkModeContext.jsx";

import "./home.scss";
import "./feed.scss";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);
  
  const [showSidenav, setMenu] = useState(false);
  const [groups, setGroups] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await customAxios.get("/groups");
        setGroups(response.data.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchGroups();
  }, []);

  function handleMoreClick() {
    setMenu(!showSidenav);
  }

  if (error) {
    return <div>Error: {error}</div>;
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
        {/* <Feed /> */}

        <div className="feed">
          {groups ? (
            groups.map((group) => (
              <Link to={`/groups/${group.ulid}`} key={group.ulid} style={{ textDecoration: "none", color: "inherit" }}>
                <GroupCard key={group.ulid} group={group} />
              </Link>
            ))
          ) : (
            <Backdrop></Backdrop>
          )}
        </div>

      </div>
    </>
  );
};

export default Home;
