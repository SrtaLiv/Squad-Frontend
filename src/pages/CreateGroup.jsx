import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import AuthGuard from "../components/AuthGuard";
import Navbar from "../components/Navbar";
import Backdrop from "../components/Backdrop";
import Loader from "../components/Loader";

import logo from "../assets/logo.png";
import "../styles/forms.scss";
import "../styles/createGroup.scss";

const CreateGroup = () => {
  return (
    <>
      <AuthGuard />
      <Navbar>
        <div className="icon-btn void"></div>
        <div className="navbar-logo">
          <img src={logo} alt="SQUAD" />
        </div>
        <Link to="/" className="icon-btn">
          <i className="fa-solid fa-xmark"></i>
        </Link>
      </Navbar>

      <div className="container">
        <div className="header">
          <h2>
            <i className="fa-solid fa-user-group"></i> Crear nuevo grupo
          </h2>
        </div>

        <div className="input-group">
          <label className="input-title">
            <i className="fa-solid fa-tag"></i> Titulo
          </label>
          <input type="text" className="input-control"></input>
        </div>

        <div className="input-group">
          <label className="input-title">
            <i className="fa-solid fa-building-columns"></i> Facultad
          </label>
          <select className="input-control">
            <option>Facultad de ciencias exactas</option>
            <option>Facultad de ciencias economicas</option>
          </select>
        </div>

        <div className="input-group">
          <label className="input-title">
            <i className="fa-solid fa-graduation-cap"></i> Carrera
          </label>
          <select className="input-control">
            <option>Ingenieria en sistemas</option>
            <option>TUDAI</option>
          </select>
        </div>

        <div className="input-group">
          <label className="input-title">
            <i className="fa-solid fa-quote-left"></i> Descripcion
          </label>
          <textarea className="input-control textarea"></textarea>
        </div>

        <div className="input-group">
          <label className="input-title">
            <i className="fa-solid fa-eye"></i> Privacidad
          </label>
          <select className="input-control">
            <option>Abierto</option>
            <option>Cerrado</option>
            <option>Privado</option>
          </select>
        </div>

        <div className="input-group">
          <label className="input-title">
            <i className="fa-solid fa-user"></i> Limite de miembros
          </label>
          <input type="number" className="input-control"></input>
        </div>

        <button className="btn">
          <i className="fa-regular fa-plus"></i> Crear nuevo grupo
        </button>
      </div>
    </>
  );
};

export default CreateGroup;
