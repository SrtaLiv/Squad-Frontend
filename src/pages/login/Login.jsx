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
    // <div className="login">
    //     <div className="card">
    //         <div className="logo">
    //             <img src={logo} alt="Logo" />
    //         </div>

    //         <h1>¡Bienvenido de vuelta!</h1>

    //         <span>¿Aun no tienes cuenta? <Link className="link" to="/register">Registrate</Link></span>

    //         <form className="form">
    //             <div className="input-group">
    //                 <label className="input-icon"><i className="fa-solid fa-envelope"></i></label>
    //                 <input type="text" name="email" placeholder="Correo Electronico" />
    //             </div>

    //             <div className="input-group">
    //                 <label className="input-icon"><i className="fa-solid fa-key"></i></label>
    //                 <input type="password" placeholder="Contrasena" name="password" />
    //             </div>

    //             <div className="form-options">
    //                 <div className="checkbox-group">
    //                     <input className="rememberme" type="checkbox" name="rememberme" />
    //                     <label className="checkbox-label">Recuerdame</label>
    //                 </div>

    //                 <a className="forgot" href="forgot.html">¿Olvidaste tu contraseña?</a>
    //             </div>

    //             <button className="login-btn" id="login-btn" onClick={handleLogin} >Iniciar sesión <i className="fa-solid fa-right-to-bracket"></i></button>
    //         </form>

    //         <div className="third-login">
    //             <div className="divider">
    //                 <label className="divider-text">o continuar con</label>
    //             </div>

    //             <div className="logos">
    //                 <a href="#"><img src={google} alt="Google Logo" /></a>
    //                 <img src={facebook} alt="Facebook Logo" />
    //             </div>
    //         </div>
    //     </div>
    // </div>
    
      <div className="login">
        
        <div className="logo">
          <img src={logo} />
        </div>

        <div className="header">
          <h2 className="welcome">¡Bienvenido de vuelta!</h2>
          <label className="register">
            ¿Aun no tienes cuenta?
            <a className="link" href="register.html">
              Registrate
            </a>
          </label>
        </div>

        <form className="form">
          <div className="input-group">
            <label className="input-icon">
              <i className="fa-solid fa-envelope"></i>
            </label>
            <input type="text" name="email" placeholder="example@email.com" />
          </div>

          <div className="input-group">
            <label className="input-icon">
              <i className="fa-solid fa-key"></i>
            </label>
            <input type="password" name="password" />
          </div>

          <div className="form-options">
            <div className="checkbox-group">
              <input className="rememberme" type="checkbox" name="rememberme" />
              <label className="checkbox-label">Recuerdame</label>
            </div>

            <a className="forgot" href="forgot.html">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <button className="login-btn" id="login-btn" type="button">
            Iniciar sesion <i className="fa-solid fa-right-to-bracket"></i>
          </button>

          <div className="third-login">
            <div className="divider">
              <label className="divider-text">o continuar con</label>
            </div>

            <div className="logos">
              <img src={google}/>
              <img src={facebook}/>
            </div>
          </div>
        </form>

      </div>

  );
};

export default Login;
