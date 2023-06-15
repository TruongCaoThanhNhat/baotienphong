import React, { useEffect, useState } from 'react';
import { getRssFeedDetail } from "../util/RssFeed";
import Header from "../layout/header/Header";
import Navigation from "../layout/navigation/Navigation";
import { useParams } from 'react-router-dom';

const DetailPage = () => {

    // lấy đường dẫn lại
    const { slug } = useParams();
    // console.log(slug);
    const link = `https://tienphong.vn/${slug}`
    // console.log(link);

    const [content, setContent] = useState({
        title: '',
        sapo: '',
        body: '',
        tag: '',
        more: '',
    });

    useEffect(() => {
        getRssFeedDetail(link, (result) => {
            // console.log(result.title); // In ra tiêu đề
            // console.log(result.sapo); // In ra mô tả
            console.log(result.body); // In ra nội dung
            // console.log(result.tag);
            console.log(result.more);
            const text = result;
            // console.log(content);
            // lỗi khong set trực tiếp giá trị cho content mà phải tạo cái mới set lại
            setContent({
                ...content,
                title: text.title,
                sapo: text.sapo,
                body: text.body,
                tag: text.tag,
                more: text.more,
            });

            return result;
        });
    }, []);
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <div>{content.title}</div>
            <div>{content.sapo}</div>
            <div dangerouslySetInnerHTML={{ __html: content.body }}></div>
            <div dangerouslySetInnerHTML={{ __html: content.tag }}></div>
            <div dangerouslySetInnerHTML={{ __html: content.more }}></div>
        </div>
    );
};

export default DetailPage;