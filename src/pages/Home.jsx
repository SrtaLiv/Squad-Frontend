import React, { useState, useContext, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchGroups } from "../services/api.jsx";

import ProtectedRoute from "../services/ProtectedRoute.jsx";
import Navbar from "../components/Navbar.jsx";
import Tag from "../components/Tag.jsx";
import Sidenav from "../components/Sidenav.jsx";
import GroupCard from "../components/GroupCard";

import Backdrop from "../components/Backdrop.jsx";
import Loader from "../components/Loader.jsx";

import { DarkModeContext } from "../context/darkModeContext.jsx";

import logo from "../assets/logo.png";
import placeholderProfileImg from "../assets/ppl.jpg";
import "../styles/home.scss";
import "../styles/search.scss";
import { compile } from "sass";

const Home = () => {
  const { darkMode } = useContext(DarkModeContext);

  const [showSidenav, setSidenav] = useState(false); // toggle sidenav
  const [searchQuery, setSerachQuery] = useState(""); // update the search query
  const [showSearch, setSearchNav] = useState(false); // toggle search navbar
  const [user, setUser] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedTags, setTags] = useState([]);
  const tags = [];

  const timeoutRef = useRef(null);
  const searchInputRef = useRef();

  const [groups, setGroups] = useState([]); // fetch groups for the feed
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    let controller = new AbortController();
    setGroups([]);
    setLoading(true);

    const getGroups = async () => {
      try {
        setSerachQuery(showSearch ? searchQuery : ''); // only search if search is open
        const groupsData = await fetchGroups(searchQuery, '', page, controller);
        setGroups(groupsData.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching groups:", error.message);
      }
    };

    // if search query, debounce 600ms to avoid api abuse
    if (searchQuery) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(getGroups, 600);
    } else {
      getGroups();
    }

    return () => {
      controller.abort();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

  }, [searchQuery, showSearch, page]);

  
  useEffect(() => {
    if (showSearch) {
      searchInputRef.current.focus(); // focus on search input on show
    }
  }, [showSearch]);

  // ==== load user data ==== //
  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("userdata")));
  // }, []);

  const handleTagChange = (tag) => {
    if (selectedTags.includes(tag)) {
      setTags(selectedTags.filter((t) => t !== tag));
    } else {
      setTags([...selectedTags, tag]);
    }
    console.log(selectedTags);
  };

  // ==== lazy load feed ==== //
  // const handleScroll = () => {
  //   if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
  //     setPage(prev => prev + 1);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <>
      <ProtectedRoute />

      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Backdrop showBackdrop={showSidenav} />
        <Sidenav showSidenav={showSidenav} setSidenav={setSidenav}>
          <div className="profile">
            <img className="profile-image" src={placeholderProfileImg} />
            <label className="profile-name">{/* {user.name} {user.surname} */}</label>
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
              <Link to="/create" className="link btn-create-group">
                <i className="fa-regular fa-square-plus"></i> Crear grupo
              </Link>
            </div>
            <div className="section">
              <Link to="/logout" className="link">
                <i className="fa-solid fa-right-from-bracket"></i> Cerrar sesion
              </Link>
            </div>
          </div>
        </Sidenav>

        <Navbar>
          <div className={`default ${showSearch ? "hidden" : ""}`}>
            <button className="icon-btn" onClick={() => setSidenav(!showSidenav)}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="navbar-logo">
              <img src={logo} alt="SQUAD" />
            </div>
            <button className="icon-btn" onClick={() => setSearchNav(!showSearch)}>
              <i className="fa-solid fa-magnifying-glass"></i>
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
              <button className="exit-search icon-btn" onClick={() => setSearchNav(!showSearch)}>
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

        <div className="feedFilters">
          {/* <button className="filterBadge selected">Cursada</button>
          <button className="filterBadge selected">Parcial</button>
          <button className="filterBadge">Final</button>
          <button className="filterBadge">Otro</button>
          <button className="filterBadge">Online</button>
          <button className="filterBadge">Presencial</button>
          <button className="filterBadge">Hibrido</button> */}

          <Tag value="cursada" tags={tags} setTags={handleTagChange}>
            Cursada
          </Tag>
          <Tag value="parcial" tags={tags} setTags={handleTagChange}>
            Parcial
          </Tag>
          <Tag value="final" tags={tags} setTags={handleTagChange}>
            Final
          </Tag>
          <Tag value="online" tags={tags} setTags={handleTagChange}>
            Online
          </Tag>
          <Tag value="presencial" tags={tags} setTags={handleTagChange}>
            Presencial
          </Tag>
          <Tag value="hibrido" tags={tags} setTags={handleTagChange}>
            Hibrido
          </Tag>
        </div>

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
