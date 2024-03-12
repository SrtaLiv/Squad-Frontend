import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

import logo from "../../assets/logo.png";
import google from "../../assets/google.png";
import facebook from "../../assets/facebook.png";
import "./login.scss";

const Login = () => {

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    
      <div className="login">
        
        <div className="logo">
          <img src={logo} alt="SQUAD"/>
        </div>

        <div className="header">
          <h2 className="welcome">¡Bienvenido de vuelta!</h2>
          <label className="register">¿Aun no tienes cuenta? <Link className="link" to="/register">Registrate</Link></label>
        </div>

        <form className="form">
          <div className="input-group">
            <label className="input-icon">
              <i className="fa-solid fa-envelope"></i>
            </label>
            <input type="text" name="email" placeholder="Email"/>
          </div>

          <div className="input-group">
            <label className="input-icon">
              <i className="fa-solid fa-key"></i>
            </label>
            <input type="password" name="password" placeholder="Contraseña"/>
          </div>

          <div className="form-options">
            <div className="checkbox-group">
              <input className="rememberme" type="checkbox" name="rememberme"/>
              <label className="checkbox-label">Recuerdame</label>
            </div>
            <Link className="forgot" to="/recover">¿Olvidaste tu contraseña?</Link>
          </div>

          <button className="login-btn" id="login-btn" type="button" onClick={handleLogin} >Iniciar sesion <i className="fa-solid fa-right-to-bracket"></i></button>

          <div className="third-login">
            <div className="divider">
              <label className="divider-text">o continuar con</label>
            </div>

            <div className="logos">
              <img src={google} alt="google"/>
              <img src={facebook} alt="facebook"/>
            </div>
          </div>
        </form>

      </div>

  );
};

export default Login;
