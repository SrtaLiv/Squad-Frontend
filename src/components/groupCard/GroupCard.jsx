import { Link } from "react-router-dom";
import profileImg from "../../assets/ppl.jpg";
import "./groupCard.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUserGroup, faClock, faCheck, faL } from "@fortawesome/free-solid-svg-icons";

const GroupCard = ({ group }) => {
  const join = true;
  return (
    // <div className="group">
    //     <div className="container-cards">
    //         <div className="card" data-ripple="">

    //             <div className="top">
    //                 <Link to={`profile/${group.userId}`}>
    //                 <div className="profileCard">
    //                     <img src={imgPerfil} />
    //                     <h3>{group.name}</h3>
    //                 </div>
    //                 </Link>

    //                 <div className="time">
    //                     <FontAwesomeIcon icon={faClock} />
    //                     <span>{group.time}</span>
    //                 </div>
    //             </div>

    //             <div className="info-card">
    //                 <h2>{group.title}</h2>
    //                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, error, explicabo nemo odio, doloribus ullam consequuntur quasi deserunt architecto temporibus porro officiis! Voluptate maxime dolor alias cumque, dolorum veritatis nemo.</p>
    //             </div>

    //             <div className="bottom">
    //                 <div className="badges">
    //                     <div className="badge badge-red">
    //                         <label className="badge-title">Parcial</label>
    //                     </div>
    //                     <div className="badge badge-blue">
    //                         <label className="badge-title">Online</label>
    //                     </div>
    //                 </div>

    //                 <div className="info">
    //                     <div className="members">
    //                         <FontAwesomeIcon icon={faUserGroup} />
    //                         <span>3/4</span>
    //                     </div>

    //                     <i>
    //                         {join ?
    //                             <FontAwesomeIcon icon={faPlus} /> :
    //                             <FontAwesomeIcon icon={faCheck} />
    //                         }
    //                     </i>

    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

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
          <button className="join-btn">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        
      </div>

    </div>
  );
};

export default GroupCard;
