import React, { useEffect, useState } from "react";
import "./home.scss";
import { fetchRssFeed } from "../../util/RssFeed";
import Article from "../../components/article/Article";
import HeaderLayout from "../../layout/HeaderLayout";
import ArticleTitle from "../../components/article/ArticleTitle";
import FormSearch from "../../components/FormSearch";


const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
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
    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);

        if (searchTerm.trim() === "") {
            // Nếu không có kết quả tìm kiếm, reset searchResults về mảng rỗng
            setSearchResults([]);
        } else {
            // Thực hiện tìm kiếm trong dataArticle dựa trên searchTerm
            const filtered = dataArticle.filter((item) => {
                const title = item.title.toLowerCase();
                const searchTermLower = searchTerm.toLowerCase();
                return title.includes(searchTermLower);
            });
            setSearchResults(filtered);
        }
    };


    return (
        <div className="home">
            <HeaderLayout></HeaderLayout>
            <h3 className="caption">Trang chủ</h3>
            <FormSearch onSearch={handleSearch} />
            <div className="layout">
                <section className="list-home first">
                    {searchTerm.trim() === "" ? (
                        // Hiển thị các bài viết theo phân chia ban đầu nếu không có kết quả tìm kiếm
                        <>
                            {firstSection.map((item, index) => (
                                <div key={index}>
                                    <Article feed={item}></Article>
                                </div>
                            ))}
                            {secondSection.map((item, index) => (
                                <div key={index}>
                                    <Article feed={item}></Article>
                                </div>
                            ))}
                        </>
                    ) : (
                        // Hiển thị kết quả tìm kiếm nếu có kết quả
                        searchResults.map((item, index) => (
                            <div key={index}>
                                <Article feed={item}></Article>
                            </div>
                        ))
                    )}
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