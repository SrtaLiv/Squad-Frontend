import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 
import { createRoot } from "react-dom/client"; // Importa createRoot desde 'react-dom/client'
import App from "./App.jsx";

import { DarkModeContextProvider } from "./context/darkModeContext";
// import { AuthContextProvider } from "./context/authContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      {/* <AuthContextProvider> */}
        <App />
      {/* </AuthContextProvider> */}
    </DarkModeContextProvider>
  </React.StrictMode>
);
