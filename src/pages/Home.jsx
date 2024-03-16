import React, { useState, useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axiosApi from "../api/AxiosApi";

import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import placeholderProfileImg from "../assets/ppl.jpg";

import AuthGuard from "../components/AuthGuard.jsx";
import Navbar from "../components/Navbar.jsx";
import Sidenav from "../components/Sidenav.jsx";
import GroupCard from "../components/GroupCard";

import Backdrop from "../components/Backdrop.jsx";
import Loader from "../components/Loader.jsx";

import { DarkModeContext } from "../context/darkModeContext.jsx";

import "../styles/home.scss";
import "../styles/search.scss";
import { compile } from "sass";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [showSidenav, setSideNav] = useState(false); // toggle sidenav
  function toggleSidenav() {
    setSideNav(!showSidenav);
  }

  const [searchQuery, setSerachQuery] = useState(""); // update the search query
  const [showSearch, setSearchNav] = useState(false); // toggle search navbar
  const timeout = useRef();
  const searchInputRef = useRef();
  function toggleSearch() {
    setSearchNav(!showSearch);
  }
  useEffect(() => {
    if (showSearch) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState([]); // fetch groups for the feed
  const [error, setError] = useState(null);

  const fetchGroups = async () => {
    clearTimeout(timeout.current);

    // if no search query, fetch all
    if (!searchInputRef.current.value.trim() || !showSearch) {
      axiosApi
        .get(`/groups`)
        .then(async (response) => {
          setGroups(response.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(error.message);
        });
      return;
    }

    // debounced 600ms fetch, search query
    timeout.current = setTimeout(() => {
      axiosApi
        .get(`/groups?search=${searchQuery}`)
        .then(async (response) => {
          setGroups(response.data.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(error.message);
        });
    }, 600);
  };

  // === default fetchGroups ===
  // const fetchGroups = async () => {
  //   try {
  //     const response = await axiosApi.get(`/groups?search=${searchQuery}`);
  //     setGroups(response.data.data);
  //     console.log(response);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // effect react to serachQuery changes
  useEffect(() => {
    fetchGroups();
  }, [searchQuery, showSearch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <AuthGuard />

      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Backdrop showBackdrop={showSidenav} />
        <Sidenav showSidenav={showSidenav} toggleSidenav={toggleSidenav}>
          <div className="profile">
            <img className="profile-image" src={placeholderProfileImg} />
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
        </Sidenav>

        <Navbar>
          <div className={`default ${showSearch ? "hidden" : ""}`}>
            <button className="icon-btn" onClick={toggleSidenav}>
              <i class="fa-solid fa-bars"></i>
            </button>
            <div className="navbar-logo">
              <img src={logo} alt="SQUAD" />
            </div>
            <button className="icon-btn" onClick={toggleSearch}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          {/* end default div wrapper */}
          <div className={`search ${showSearch ? "show" : ""}`}>
            <div className="search-box">
              <div className="search-input">
                <label className="search-icon">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </label>
                <input type="text" name="search" ref={searchInputRef} value={searchQuery} onChange={(e) => setSerachQuery(e.target.value)} placeholder="Buscar..."></input>
              </div>
              <button className="exit-search icon-btn" onClick={toggleSearch}>
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="filters-box">
              <div className="filter-dropdown">
                <label>
                  <i className="fa-solid fa-filter"></i>
                </label>
                <label>Filtros</label>
                <label>
                  <i className="fa-solid fa-chevron-down"></i>
                </label>
              </div>
              <div className="filter-dropdown">
                <label>
                  <i className="fa-solid fa-arrow-up-wide-short"></i>
                </label>
                <label>Orden</label>
                <label>
                  <i className="fa-solid fa-chevron-down"></i>
                </label>
              </div>
            </div>
          </div>
          {/* end search div wrapper */}
        </Navbar>

        <div className="feed">
          
          {loading ? <Loader /> : ""}

          {groups.map((group, index) => (
            <Link to={`/groups/${group.ulid}`} key={group.ulid} style={{ textDecoration: "none", color: "inherit" }}>
              <GroupCard key={group.ulid} group={group} index={index} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
