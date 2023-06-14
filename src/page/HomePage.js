import React, {useEffect} from "react";
import Header from "../layout/header/Header";
import Navigation from "../layout/navigation/Navigation";
import "./home.scss";
import {getRssFeedDetail} from "../util/RssFeed";


const HomePage = () => {
  return (
    <div className="home">
      <div className="layout">

        <Header></Header>
        <Navigation></Navigation>
      </div>
    </div>
  );
};

export default HomePage;
