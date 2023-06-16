import React, { useEffect, useState } from "react";
import "./home.scss";
import { fetchRssFeed } from "../../util/RssFeed";
import Article from "../../components/article/Article";
import HeaderLayout from "../../layout/HeaderLayout";
import ArticleTitle from "../../components/article/ArticleTitle";


const HomePage = () => {
  const [dataArticle, setDataArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataArticle = await fetchRssFeed('https://tienphong.vn/rss/home.rss');
        setDataArticle(dataArticle);

      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  // Chia dữ liệu thành 2 phần
  const firstSection = dataArticle.slice(0, 25);
  const secondSection = dataArticle.slice(25, 50);
  const thirdSection = dataArticle.slice(50, 100);
  console.log(firstSection)


  return (
    <div className="home">
      <HeaderLayout></HeaderLayout>
      <h3 className="caption">Trang chủ</h3>
      <div className="layout">
        <section className="list-home first">
          {/* <ListArticleHome></ListArticleHome> */}
          {
            firstSection.map((item, index) => (
              <div key={index}>
                <Article feed={item}></Article>
              </div>
            ))
          }
          {
            secondSection.map((item, index) => (
              <div key={index}>
                <Article feed={item}></Article>
              </div>
            ))
          }
        </section>

        <section className="article-right">
          {
            thirdSection.map((item, index) => (
              <div key={index}>
                <ArticleTitle feed={item}></ArticleTitle>
              </div>
            ))
          }
        </section>
      </div>
    </div>
  );
};

export default HomePage;
