import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Backdrop from "../components/Backdrop";
import Loader from "../components/Loader";

import logo from "../assets/logo.png";
import "../styles/register.scss";
import "../styles/forms.scss";

import placeholderProfileImg from "../assets/ppl.jpg";

const Register = () => {
  return (
    <>
      <div className="registerContainer">
        <div className="formContainer">

          <img className="logo" src={logo}></img>
          <h2><i class="fa-solid fa-user-plus"></i> Crea tu cuenta</h2>

          <div className="formInputs">
            <div className="input-group">
              <label className="input-title">Email</label>
              <input type="email" name="email" className="input-control"></input>
            </div>

            <div className="input-group">
              <label className="input-title">Nombre</label>
              <input type="text" name="name" className="input-control"></input>
            </div>

            <div className="input-group">
              <label className="input-title">Apellido</label>
              <input type="text" name="surname" className="input-control"></input>
            </div>

            <div className="input-group">
              <label className="input-title">Contraseña</label>
              <input type="password" name="password" className="input-control"></input>
            </div>

            <div className="input-group">
              <label className="input-title">Confirmar contraseña</label>
              <input type="password" name="password_confirmation" className="input-control"></input>
            </div>

            <button className="btn">
              Registrarme <i className="fa-solid fa-chevron-right"></i>
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
