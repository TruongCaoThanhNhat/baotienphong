import React from "react";
import Header from "../layout/header/Header";
import Navigation from "../layout/navigation/Navigation";
import "./home.scss";


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
