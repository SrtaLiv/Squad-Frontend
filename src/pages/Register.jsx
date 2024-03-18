import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import API_URL from "../Config";
import axiosApi from "../api/AxiosApi";

import logo from "../assets/logo.png";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import "../styles/login.scss";

const Register = () => {
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
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: token ? `Bearer ${token}` : "",
          },
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
    <div className="registerForm">
      
      <div className="logo">
        <img src={logo} alt="SQUAD" />
      </div>

      <div className="header">
        <h2 className="welcome">Vamos a crear tu cuenta</h2>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="input-row">
          <label>Correo electronico</label>
          <input className="input-control" type="text" name="email"/>
        </div>

        <div className="input-row">
          <label>Nombre</label>
          <input className="input-control" type="text" name="username" placeholder="" />
        </div>

        <div className="input-row">
          <label>Apellido</label>
          <input className="input-control" type="text" name="surname" placeholder="" />
        </div>

        <div className="input-row">
          <label>Contraseña</label>
          <input className="input-control" type="password" name="password" placeholder="" />
        </div>

        <div className="input-row">
          <label>Repite la contraseña</label>
          <input className="input-control" type="password" name="password_confirmation"/>
        </div>

        <button className="btn login-btn" type="submit">
          Registrarse <i className="fa-solid fa-chevron-right"></i>
        </button>

        <label className="already">¿Ya tienes una cuenta? <Link className="link" to="/login">Inicia sesion</Link></label>

      </form>

      <footer className="footer">
        <label className="copyright">SQUAD / BETA Release v1.24.3.1.0</label>
      </footer>
    </div>
  );
};

export default Register;
