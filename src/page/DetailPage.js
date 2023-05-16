import React, {useEffect, useState} from 'react';
import {getRssFeedDetail} from "../util/RssFeed";
import Header from "../layout/header/Header";
import Navigation from "../layout/navigation/Navigation";

const DetailPage = () => {
    const [content, setContent] = useState({
        title: '',
        sapo: '',
        body: '',
    });

    useEffect(() => {
        getRssFeedDetail('https://tienphong.vn/buoc-qua-noi-so-tao-dot-pha-kinh-te-tinh-6-dam-5-that-phat-trien-toan-dien-post1534626.tpo', (result) => {
            console.log(result.title); // In ra tiêu đề
            console.log(result.sapo); // In ra mô tả
            console.log(result.body); // In ra nội dung
            const text = result;
            // console.log(content);
            // lỗi khong set trực tiếp giá trị cho content mà phải tạo cái mới set lại
            setContent({
                ...content,
                title: text.title,
                sapo: text.sapo,
                body: text.body,
            });

            return result;
        });
    }, []);
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <div>{content.title}</div>
            <div dangerouslySetInnerHTML={{ __html: content.body }}></div>
            
        </div>
    );
};

export default DetailPage;