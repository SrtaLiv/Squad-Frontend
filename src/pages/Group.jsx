import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import AuthGuard from "../components/AuthGuard";
import axiosApi from "../api/AxiosApi";
import Navbar from "../components/Navbar";

import Backdrop from "../components/Backdrop";
import Loader from "../components/Loader";

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

  const fetchGroup = async () => {
    
    try {
      const response = await axiosApi.get(`/groups/${ulid}`);
      setGroup(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleJoin = async () => {
    // e.preventDefault();

    try {
      const response = await axiosApi.get(`/groups/join/${ulid}`);
      setRefresh(true);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchGroup();
  }, [refresh]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <AuthGuard />
      <Navbar>
        <Link to="/" className="icon-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
        <div className="navbar-logo">
          <img src={logo} />
        </div>
        <button className="icon-btn">
          <i className="fa-solid fa-gear"></i>
        </button>
      </Navbar>

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
                  <label className="created-at">
                    <i className="fa-solid fa-clock"></i> {timeAgo(group.creationDate)}
                  </label>
                </div>
                <div className="profile-bot">
                  <label className="breadcrums">
                    {group.facultad} - {group.carrera}
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
              <button className="btn btn-join">
                {/* <i className="fa-solid fa-hourglass-start"></i> Solicitud enviada */}
                <i className="fa-solid fa-xmark"></i> Cancelar solicitud
              </button>
            ) : (
              <button className="btn btn-join" onClick={handleJoin}>
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
