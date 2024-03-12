import React, { useContext } from "react";
import "./home.scss";
import Groups from '../../components/feed/Feed'

const Home = () => {
    return (
        <div className="home">
            <Groups/>
        </div>
    );
}

export default Home;
