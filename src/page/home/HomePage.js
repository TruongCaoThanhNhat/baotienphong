import React, { useEffect, useState } from "react";
import "./home.scss";
import { fetchRssFeed } from "../../util/RssFeed";
import Article from "../../components/article/Article";
import HeaderLayout from "../../layout/HeaderLayout";


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
  const halfIndex = Math.ceil(dataArticle.length / 2);
  const firstHalf = dataArticle.slice(0, halfIndex);
  const secondHalf = dataArticle.slice(halfIndex);
  console.log(firstHalf)


  return (
    <div className="home">
      <div className="layout">
        <HeaderLayout></HeaderLayout>
        <h3 className="caption">Trang chủ</h3>
        <section className="list-home">
          {/* <ListArticleHome></ListArticleHome> */}
          {
            dataArticle.map((item, index) => (
              <div key={index}>
                <Article feed={item}></Article>
              </div>
            ))
          }
        </section>
      </div>
    </div>
  );
};

export default HomePage;
