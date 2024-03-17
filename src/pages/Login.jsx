import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import API_URL from "../Config";
import axiosApi from "../api/AxiosApi";


import logo from "../assets/logo.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import "../styles/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const toggleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosApi.post("/login", { email, password });

      if (response && response.data) {
        const { token } = response.data;

        // clear storage
        localStorage.removeItem("authToken");
        sessionStorage.removeItem("authToken");

        if (rememberMe) {
          localStorage.setItem("authToken", token);
        } else {
          sessionStorage.setItem("authToken", token);
        }

        const userdataResponse = await axios({
          url: `${API_URL}/api/v1/user`, 
          method: 'get',
          headers: {
            "Content-Type": "application/json",
            "Authorization": token ? `Bearer ${token}` : "",
          }
        });

        const userdata = userdataResponse.data.data;
        localStorage.setItem("userdata", JSON.stringify(userdata));

        navigate("/");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  // const { login } = useContext(AuthContext);
  // const handleLogin = () => {
  //   login();
  // };

  return (
    <div className="login">
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

      <form className="form" onSubmit={handleSubmit}>
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

        <button className="btn login-btn" type="submit">
          Iniciar sesion <i className="fa-solid fa-right-to-bracket"></i>
        </button>

        <div className="third-login">
          <div className="divider">
            <label className="divider-text">o continuar con</label>
          </div>

          <div className="logos">
            <img src={google} alt="google" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
