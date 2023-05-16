import React, { useEffect, useState } from "react";
import { fetchRssFeed, getRssFeedDetail } from "../util/RssFeed";
import Header from "../layout/header/Header";
import Navigation from "../layout/navigation/Navigation";

const DanuMuc = () => {
    const [dataArticle, setDataArticle] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataArticle = await fetchRssFeed("https://tienphong.vn/rss/home.rss");
                setDataArticle(dataArticle);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);

    const handleArticleClick = async (link) => {
        try {
            const article = await getRssFeedDetail(link);
            console.log(article.content); // In ra nội dung chi tiết của bài viết
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            {dataArticle.map((article) => (
                <div key={article.guid} onClick={() => handleArticleClick(article.link)}>
                    <div>{article.title}</div>
                    <div>{article.contentSnippet}</div>
                </div>
            ))}
        </div>
    );
};

export default DanuMuc;
