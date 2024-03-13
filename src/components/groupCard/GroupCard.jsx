import { Link } from "react-router-dom";
import profileImg from "../../assets/ppl.jpg";
import "./groupCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserGroup, faClock, faCheck, faL } from "@fortawesome/free-solid-svg-icons";

const GroupCard = ({ group }) => {
  const join = true;
  return (

<div className="card">

      <div className="header">
          {/* <img className="profile-img" src={group.profilePic} /> */}
          <img className="profile-img" src={profileImg} />
          <div className="info">
            <h2 className="title">{group.title}</h2>
            <label className="subtitle">{group.facultad} - {group.carrera}</label>
          </div>
      </div>

      <div className="content">
        <p className="description">{group.description}</p>
      </div>

      <div className="footer">
        
        <div className="badges">
          <div className="badge badge-red">
            <label className="badge-title">Parcial</label>
          </div>
          <div className="badge badge-blue">
            <label className="badge-title">Online</label>
          </div>
        </div>

        <div className="options">
          <label className="members">
            <i className="fa-solid fa-user-group"></i> 3/5
          </label>
          {/* <button className="join-btn">
            <i className="fa-solid fa-plus"></i>
          </button> */}
        </div>
        
      </div>

    </div>
  );
};

export default GroupCard;
