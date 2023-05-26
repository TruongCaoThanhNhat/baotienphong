import React, { useEffect, useState } from 'react';
import { getRssFeedDetail } from "../util/RssFeed";
import Header from "../layout/header/Header";
import Navigation from "../layout/navigation/Navigation";
import "./detail.css"

const DetailPage = () => {
    const [content, setContent] = useState({
        title: '',
        sapo: '',
        body: '',
        tag: '',
        more: '',
        comment: '',
    });

    useEffect(() => {
        getRssFeedDetail('https://tienphong.vn/7-vung-dat-do-william-cai-quan-post1536755.tpo', (result) => {
            console.log(result.title); // In ra tiêu đề
            console.log(result.sapo); // In ra mô tả
            console.log(result.body); // In ra nội dung
            console.log(result.tag);
            console.log(result.more);
            console.log(result.comment);
            const text = result;
            console.log(content);
            // lỗi khong set trực tiếp giá trị cho content mà phải tạo cái mới set lại
            setContent({
                ...content,
                title: text.title,
                sapo: text.sapo,
                body: text.body,
                tag: text.tag,
                more: text.more,
                comment: text.comment,
            });

            return result;
        });
    }, []);
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>
            <div className="article__title cms-title">{content.title}</div>
            <div className="article__sapo cms-desc">{content.sapo}</div>
            <div className="article__body cms-body" dangerouslySetInnerHTML={{ __html: content.body }}></div>
            <div className="article__tag" dangerouslySetInnerHTML={{ __html: content.tag }}></div>
            <div dangerouslySetInnerHTML={{ __html: content.more }}></div>
            <div>{content.comment}</div>
        </div>
    );
};

export default DetailPage;