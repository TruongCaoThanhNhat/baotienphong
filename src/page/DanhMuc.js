import React, { useEffect, useState } from 'react';
import { fetchRssFeed } from '../util/RssFeed';
import Header from '../layout/header/Header';
import Navigation from '../layout/navigation/Navigation';
import AarticleDm from '../components/arlicleDM/AarticleDm';
import FormSearch from "../components/FormSearch";



const DanhMuc = () => {
    const [dataArticle, setDataArticle] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const dataArticle = await fetchRssFeed('https://tienphong.vn/rss/home.rss');
            setDataArticle(dataArticle);
            setFilteredData(dataArticle);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSearch = (searchTerm) => {
        const filtered = dataArticle.filter((item) => {
            // Xử lý logic tìm kiếm tại đây
            // Ví dụ: so sánh tiêu đề hoặc mô tả với searchTerm
            const title = item.title.toLowerCase();
            const description = item.description.toLowerCase();
            const searchTermLower = searchTerm.toLowerCase();
            return title.includes(searchTermLower) || description.includes(searchTermLower);
        });
        setFilteredData(filtered);
    };

    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <FormSearch onSearch={handleSearch} />
            <div className="articleDM">
                {filteredData.map((item, index) => (
                    <div key={index}>
                        <AarticleDm feeds={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DanhMuc;