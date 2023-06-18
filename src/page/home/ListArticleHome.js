import React, { Fragment, useEffect, useState } from 'react';
import { fetchRssFeed } from '../../util/RssFeed';
import Article from '../../components/article/Article';
import FormSearch from "../../components/FormSearch";


const ListArticleHome = () => {
    // const [dataArticle, setDataArticle] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
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
    const handleSearch = (searchTerm) => {
        const filtered = dataArticle.filter((items) => {
            // Xử lý logic tìm kiếm tại đây
            // Ví dụ: so sánh tiêu đề hoặc mô tả với searchTerm
            const title = items.title.toLowerCase();
            const description = items.description.toLowerCase();
            const searchTermLower = searchTerm.toLowerCase();
            return title.includes(searchTermLower);
        });
        setFilteredData(filtered);
    };

    return (

        <Fragment>

            {/*<FormSearch onSearch={handleSearch} />*/}

            {
                dataArticle.map((item, index) => (
                    <div key={index}>
                        <Article feed={item}></Article>
                    </div>
                ))
            }
        </Fragment>
    );
};

export default ListArticleHome;