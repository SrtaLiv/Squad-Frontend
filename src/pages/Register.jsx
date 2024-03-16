// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/register.scss";
// // import logo from './logo.png';
// import google from "/src/assets/google.png";
// import facebook from "/src/assets/facebook.png";

// const Register = () => {
//     const [name, setName] = useState(""); // Estado para el nombre
//     const [password, setPassword] = useState(""); // Estado para la contraseña
//     const [email, setEmail] = useState(""); // Estado para el correo electrónico
    
//     //es asincrono necesitamos el servi
//     const submitRegister = async(error) => {
//         error.preventDefault();
//     }

//     return(
//         <div className="login">
//             <div className="card">
//                 <div className="logo">
//                     <img src={logo} alt="Logo" />
//                 </div>

//                 <h1>Únete a Squad</h1>
                
//                 <span>Tienes cuenta? <Link to="/login">Inicia sesión</Link></span>

//                 <form className="form">
//                     <div className="input-group">
//                         <label className="input-icon"><i className="fa-solid fa-envelope"></i></label>
//                         <input value={name} placeholder="Nombre completo" onChange={(e) => setName(e.target.value)} required/> 
//                     </div>

//                     <div className="input-group">
//                         <label className="input-icon"><i className="fa-solid fa-envelope"></i></label>
//                         <input value={email} type="email" name="email" placeholder="Correo electrónico" onChange={(e) => setEmail(e.target.value)} required/>
//                     </div>

//                     <div className="input-group">
//                         <label className="input-icon"><i className="fa-solid fa-key"></i></label>
//                         <input value={password} type="password" placeholder="Contraseña" name="password" onChange={(e) => setPassword(e.target.value)} required/>
//                     </div>

//                     <div className="form-options">
//                         <div className="checkbox-group">
//                             <input className="rememberme" type="checkbox" name="rememberme" />
//                             <label className="checkbox-label">Acepto las condiciones we JSJA</label>
//                         </div>
//                     </div>

//                     <button className="login-btn" onClick={submitRegister}>Regístrate <i className="fa-solid fa-right-to-bracket"></i></button>
//                 </form>

//                 <div className="third-login">
//                     <div className="divider">
//                         <label className="divider-text">o continuar con</label>
//                     </div>

//                     <div className="logos">
//                         <img src={google} alt="Google Logo" />
//                         <img src={facebook} alt="Facebook Logo" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Register;