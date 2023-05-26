import React from "react";
import Header from "../../layout/header/Header";
import Navigation from "../../layout/navigation/Navigation";
import "./home.scss";
import ListArticleHome from "./ListArticleHome";


const HomePage = () => {
  return (
    <div className="home">
      <div className="layout">
        <Header></Header>
        <Navigation></Navigation>
        {/* <h3>Trang chủ</h3> */}
        <section className="list-home">
          <ListArticleHome></ListArticleHome>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
