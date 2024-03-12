import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMoon, faSun, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

import "./navbar.scss";
import logo from "../../assets/logo.png";

const Navbar = () => {
    const { darkMode, toggle } = useContext(DarkModeContext);
    const { currentUser } = useContext(AuthContext);

    return (
        <div className="navbar">
            {/* <div className="left">
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
            </div> */}

            <button className="icon-btn"><i className="fa-solid fa-bars"></i></button>
            <div className="logo">
                <img src={logo} alt="SQUAD"/>
            </div>
            <button className="icon-btn" onClick={toggle}><i className="fa-solid fa-magnifying-glass"></i></button>

        </div>
    );
}

export default Navbar;
