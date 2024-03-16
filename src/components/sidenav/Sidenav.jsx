import React, { useContext, useState } from "react";

import "./sidenav.scss";

const Sidenav = ({ showSidenav, toggleSidenav, children }) => {

    // const [showSidenav, setSideNav] = useState(false);
    // function toggleSidenav() {
    //     setSideNav(!showSidenav);
    // }

    return (

        <div className={`sidenav ${ showSidenav ? 'open' : ''}`}>
            {children}
        </div>

    );
}

export default Sidenav;