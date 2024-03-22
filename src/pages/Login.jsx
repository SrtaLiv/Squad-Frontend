import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

// import API_URL from "../Config";
// import axiosApi from "../api/AxiosApi";

import { login as apiLogin } from '../services/api';
import { setToken } from "../services/auth";

import logo from "../assets/logo.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import "../styles/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [ error, setError ] = useState();
  const navigate = useNavigate();

  const toggleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = async (e) => {
    
    e.preventDefault();

    const response = await apiLogin(email, password);
    if (response.token){
      setToken(response.token, rememberMe);
      navigate("/");
    }else{
      // console.log(response.error);
      
      switch(response.error.code){
        case 'user_not_registred':
        setError('Email no registrado.');
        break;

        case 'invalid_password':
        setError('Contraseña incorrecta.');
        break;
      }
    
    }
  };

  return (
    <div className="loginForm">
      <div className="logo">
        <img src={logo} alt="SQUAD" />
      </div>

      <div className="header">
        <h2 className="welcome">¡Bienvenido de vuelta!</h2>
        <label className="register">
          ¿Aun no tienes cuenta?
          <Link className="link" to="/register">
            Registrate
          </Link>
        </label>
      </div>

      <form className="form" onSubmit={handleLogin}>
        <div className="input-group">
          <label className="input-icon">
            <i className="fa-solid fa-envelope"></i>
          </label>
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        </div>

        <div className="input-group">
          <label className="input-icon">
            <i className="fa-solid fa-key"></i>
          </label>
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
        </div>

        <div className="form-options">
          <div className="checkbox-group">
            <input className="rememberme" type="checkbox" name="rememberme" checked={rememberMe} onChange={toggleRememberMe} />
            <label className="checkbox-label">Recuerdame</label>
          </div>
          <Link className="forgot" to="/recover">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {error ? (<label className="errorMessage">{error}</label>):null}

        <button className="btn login-btn" type="submit">
          Iniciar sesion <i className="fa-solid fa-right-to-bracket"></i>
        </button>

        <div className="third-login">
          <div className="legend">
            <div className="divider"></div>
            <label className="divider-text">o continuar con</label>
            <div className="divider"></div>
          </div>

          <div className="logos">
            <img src={google} alt="google" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </form>

      <footer className="footer">
        <label className="copyright">SQUAD / BETA Release v1.24.3.1.0</label>
      </footer>
    </div>
  );
};

export default Login;
