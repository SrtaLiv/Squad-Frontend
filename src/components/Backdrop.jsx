import React, { useContext, useState } from "react";

import "../styles/backdrop.scss";

const Backdrop = () => {
  return (
    <div className="backdrop show"><span className="loader"></span></div>
  );
};

export default Backdrop;
