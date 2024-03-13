import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoon, faXmark, faSun, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

import "./navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const { darkMode, toggle } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);
    const [showMenu, setMenu] = useState(false);


    function handleMoreClick() {
        setMenu(!showMenu);
    }

    return (
        <div className="navbar">
            <button onClick={handleMoreClick}>
                {showMenu ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                {showMenu &&
                    <div className="sidenav" >
                        <div className="header">
                            <button className="icon-btn" id="close-sidenav-btn"><i className="fa-solid fa-xmark"></i></button>
                        </div>

                        <div className="profile-sidenav">
                            <img className="profile-image" src="images/ppl.jpg" />
                            <label className="profile-name">Nicolal Agustin Lopez</label>
                        </div>

                        <div className="links">
                            <div className="section">
                                <Link to="/">
                                    <span className="link"><i className="fa-solid fa-house"></i> Inicio</span>
                                </Link>

                                <Link to="/groups">
                                    <span className="link"><i className="fa-solid fa-user-group"></i> Mis grupos</span>
                                </Link>

                                <Link to="/profile">
                                    <span className="link"><i className="fa-solid fa-user"></i> Perfil</span>
                                </Link>

                                <Link to="">
                                    <span className="link"><i className="fa-solid fa-gear"></i> Ajustes</span>
                                </Link>

                                <Link to="/">
                                    <span className="link btn-create-group"><i className="fa-regular fa-square-plus"></i> Crear grupo</span>
                                </Link>
                            </div>

                            <Link to="/login">
                                <div className="section">
                                    <span className="link"><i className="fa-solid fa-right-from-bracket"></i> Cerrar sesión</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                }
            </button>

            <FontAwesomeIcon icon={faMagnifyingGlass} />

            <div className="logo">
                <img src={logo} alt="SQUAD" />
            </div>

            <button className="icon-btn"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
            /* <div className="left">
                <Link to="/" style={{ textDecoration: "none" }}>
                <h3>Squad</h3>
            </Link>
                <div className="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="search" placeholder="Search" />
                </div>
            </div>

            <div className="right">
                <div className="user">
                    <span>{currentUser.name}</span>
                    <img
                        src={currentUser.profilePic}
                        alt=""
                    />
                </div>
                    {darkMode ? (
                        <FontAwesomeIcon icon={faSun} onClick={toggle} className="sun-icon" />
                    ) : ( // De lo contrario, mostrar el icono de la luna
                        <FontAwesomeIcon icon={faMoon} onClick={toggle} className="moon-icon" />
                    )}
            </div> */
    );
}

export default Navbar;
