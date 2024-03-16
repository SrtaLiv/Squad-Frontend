import React from "react";

import "../styles/navbar.scss";

const Navbar = ({ children }) => {
  return <div className="navbar">{children}</div>;
};

export default Navbar;
