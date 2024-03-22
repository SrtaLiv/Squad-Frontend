import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// import AuthGuard from "../services/ProtectedRoute";
// import axiosApi from "../api/AxiosApi";
import { fetchGroup, groupRequestAction } from "../services/api.jsx";

import ProtectedRoute from "../services/ProtectedRoute.jsx";
import Navbar from "../components/Navbar";
import Backdrop from "../components/Backdrop";
import Loader from "../components/Loader";
import Sidenav from "../components/Sidenav.jsx";

import { timeAgo } from "../utils/timeUtils";
import { capFirst } from "../utils/stringUtils";

import logo from "../assets/logo.png";
import placeholderProfileImg from "../assets/ppl.jpg";

import "../styles/group.scss";

const Group = () => {
  // const { darkMode, toggle } = useContext(DarkModeContext);
  // const { currentUser } = useContext(AuthContext);
  const { ulid } = useParams();
  const [group, setGroup] = useState(null);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const [showSidenav, setSidenav] = useState(false);

  useEffect(() => {
    let controller = new AbortController();

    setLoading(true);

    const getGroup = async () => {
      try {
        const response = await fetchGroup(ulid, controller);
        setGroup(response);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching group:", error.message);
      }
    };

    getGroup();

    return () => {
      controller.abort();
    };
  }, [refresh]);

  const handleGroupAction = async (e) => {
    e.preventDefault();
    let controller = new AbortController();

    let action = group.user.hasJoinRequest ? "cancel" : "join";
    action = group.user.isMember ? "leave" : action;

    try {
      const response = await groupRequestAction(ulid, action, controller);
      setRefresh(!refresh);
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }

    setSidenav(false);
  };

  // useEffect(() => {
  //   fetchGroup();
  // }, [refresh]);

  return (
    <>
      <ProtectedRoute />
      <Navbar>
        <Link to="/" className="icon-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
        <div className="navbar-logo">
          <img src={logo} />
        </div>
        <button className="icon-btn" onClick={() => setSidenav(!showSidenav)}>
          <i className="fa-solid fa-gear"></i>
        </button>
      </Navbar>
      <Backdrop showBackdrop={showSidenav} />
      <Sidenav showSidenav={showSidenav} side="right" setSidenav={setSidenav}>
        {group ? (
        <div className="links">
          <div className="section">
            <Link className="link"># option</Link>
            <Link className="link"># option</Link>
            <Link className="link"># option</Link>
            <Link className="link"># option</Link>
            <Link className="link"># option</Link>
          </div>
          <div className="section">
            {group.user.isMember ? (
              <Link className="link red" to="" onClick={handleGroupAction}>
                <i className="fa-solid fa-person-walking-arrow-right"></i> Salir del grupo
              </Link>
            ) : (null)}
          </div>
        </div>
        ) : null }
      </Sidenav>

      {loading ? <Loader /> : ""}

      {group ? ( // await for load
        <div className="groupDetail">
          <div className="header">
            <div className="profile">
              <div className="profile-image">
                <img className="profile-img" src={placeholderProfileImg} />
              </div>
              <div className="profile-info">
                <div className="profile-top">
                  <label className="user-name">
                    {group.owner.name} {group.owner.surname}
                  </label>
                </div>
                <div className="profile-bot">
                  <label className="breadcrums">
                    {group.facultad} - {group.carrera}
                  </label>
                  <label className="created-at">
                    <i className="fa-solid fa-clock"></i> {timeAgo(group.creationDate)}
                  </label>
                </div>
              </div>
            </div>

            <div className="badges">
              {Object.values(group.tags).map((tag, index) => (
                <div className="badge badge-blue" key={tag}>
                  <label className="badge-title">{capFirst(tag)}</label>
                </div>
              ))}
            </div>

            <div className="title">
              <h2>{group.title}</h2>
            </div>
          </div>

          <div className="group">
            <div className="group-badges">
              <div className="group-badge">
                <label>
                  <i className={`fa-solid ${group.privacy == "open" ? "fa-lock-open" : "fa-lock"}`}></i>
                </label>
                <label>Grupo {group.privacy == "open" ? "abierto" : "cerrado"}</label>
              </div>
              <div className="group-badge">
                <label>
                  <i className="fa-solid fa-user-group"></i>
                </label>
                <label>
                  {group.membersCount}
                  {group.maxMembers != null ? " / " + group.maxMembers : ""}
                </label>
              </div>
            </div>

            <div className="group-card">
              <p>{group.description}</p>
            </div>

            <div className="members">
              {Object.values(group.members).map((member, index) => (
                <div className="group-card" key={member.ulid}>
                  <img className="profile-img" src={placeholderProfileImg} />
                  <div className="member-info">
                    <label className="member-name">
                      {member.name} {member.surname}
                    </label>
                    <label className="member-info">member.facultad - member.carrera</label>
                  </div>
                </div>
              ))}
            </div>

            {group.maxMembers != null && group.membersCount >= group.maxMembers ? (
              <button className="btn btn-join" disabled>
                <i className="fa-solid fa-ban"></i> Grupo lleno
              </button>
            ) : group.user.isMember ? (
              <button className="btn btn-join">
                <i className="fa-solid fa-comments"></i> Abrir chat
              </button>
            ) : group.user.hasJoinRequest ? (
              <button className="btn btn-join" onClick={handleGroupAction}>
                {/* <i className="fa-solid fa-hourglass-start"></i> Solicitud enviada */}
                <i className="fa-solid fa-xmark"></i> Cancelar solicitud
              </button>
            ) : (
              <button className="btn btn-join" onClick={handleGroupAction}>
                <i className="fa-solid fa-share-from-square"></i> {group.privacy == "closed" ? "Solicitar unirse" : "Unirse"}
              </button>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Group;
