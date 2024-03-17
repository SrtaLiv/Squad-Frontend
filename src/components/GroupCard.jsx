import { Link } from "react-router-dom";
import placeholderProfileImg from "../assets/ppl.jpg";
import "../styles/groupCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserGroup, faClock, faCheck, faL } from "@fortawesome/free-solid-svg-icons";
import { capFirst } from "../utils/stringUtils";
import { timeAgo } from "../utils/timeUtils";

const GroupCard = ({ group, index }) => {
  // const join = true;
  return (
    <div className="card">
      <div className="header">
        {/* <img className="profile-img" src={`https://randomuser.me/api/portraits/thumb/${index % 2 == 0 ? 'men' : 'women'}/${index}.jpg`} /> 
        
        <div className="info">
          <h2 className="title">{group.title}</h2>
          <label className="subtitle">
            {group.facultad} - {group.carrera}
          </label>
        </div>
      </div> */}

        <div className="info">
          <div className="owner">
            <img className="profile-img" src={`https://randomuser.me/api/portraits/thumb/${index % 2 == 0 ? "men" : "women"}/${index}.jpg`} />
            <div className="text">
              <label className="name subtitle">
                {group.owner.name} {group.owner.surname}
              </label>
              <label className="name subtitle">
                <i className="fa-solid fa-clock"></i> {timeAgo(group.creationDate)}
              </label>
            </div>
          </div>
          <h2 className="title">{group.title}</h2>
          <label className="subtitle">
            {group.facultad} - {group.carrera}
          </label>
        </div>
      </div>

      <div className="content">
        <p className="description">{group.description}</p>
      </div>

      <div className="footer">
        <div className="badges">
          {Object.values(group.tags).map((tag, index) => (
            <div className="badge badge-blue" key={tag}>
              <label className="badge-title">{capFirst(tag)}</label>
            </div>
          ))}
        </div>

        <div className="options">
          <label className="members">
            <i className="fa-solid fa-user-group"></i>
            {group.membersCount}
            {group.maxMembers != null ? " / " + group.maxMembers : ""}
          </label>
          <button className="join-btn">
            {/* <i className="fa-solid fa-plus"></i> */}
            <i className={`fa-solid ${group.privacy == "closed" ? "fa-lock" : "fa-lock-open"}`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCard;
