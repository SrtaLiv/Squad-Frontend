import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faMoon, faXmark, faSun, faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { AuthContext } from "../../context/authContext";
import customAxios from "../../components/CustomAxios";
import Navbar from "../../components/navbar/Navbar";
import Backdrop from "../../components/backdrop/Backdrop";

import logo from "../../assets/logo.png";
import profileImg from "../../assets/ppl.jpg";

import "./group.scss";

const Gruop = () => {
  // const { darkMode, toggle } = useContext(DarkModeContext);
  // const { currentUser } = useContext(AuthContext);
  const { ulid } = useParams();
  const [group, setGroup] = useState(null);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const response = await customAxios.get(`/groups/${ulid}`);
        setGroup(response.data);
      } catch (error) {
        console.error("Error fetching group: ", error);
      }
    };
    fetchGroup();
  });

  if (!group) {
    return <Backdrop></Backdrop>;
  }

  return (
    <>
      <Navbar>
        <Link to="/" className="icon-btn">
          <i className="fa-solid fa-chevron-left"></i>
        </Link>
        <div className="logo">
          <img src={logo} />
        </div>
        <button className="icon-btn">
          <i className="fa-solid fa-gear"></i>
        </button>
      </Navbar>

      <div className="groupDetail">
        <div className="header">
          <div className="profile">
            <div className="profile-image">
              <img className="profile-img" src={profileImg} />
            </div>
            <div className="profile-info">
              <div className="profile-top">
                <label className="user-name">
                  {group.owner.name} {group.owner.surname}
                </label>
                <label className="created-at">
                  <i className="fa-solid fa-clock"></i> Hace 1 hora
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
                <label className="badge-title">{tag}</label>
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
                <i className={group.facultad == "open" ? "fa-solid fa-lock-open" : "fa-solid fa-lock"}></i>
              </label>
              <label>Grupo {group.facultad == "open" ? "abierto" : "cerrado"}</label>
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
                <img className="profile-img" src={profileImg} />
                <div className="member-info">
                  <label className="member-name">
                    {member.name} {member.surname}
                  </label>
                  {/* <label className="member-info">Facultad de ciencias exactas - TUDAI</label> */}
                </div>
              </div>
            ))}
          </div>

          <button className="btn btn-join">
            <i className="fa-solid fa-share-from-square"></i> Solicitar unirse
          </button>
        </div>
      </div>
    </>
  );
};

export default Gruop;
