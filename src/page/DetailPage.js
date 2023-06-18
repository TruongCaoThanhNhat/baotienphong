import React, { useEffect, useState } from 'react';
import { getRssFeedDetail } from "../util/RssFeed";
import Header from "../layout/header/Header";
import Navigation from "../layout/navigation/Navigation";

import { useParams } from 'react-router-dom';

import "./detail.css"
import TextToSpeech from '../util/TextToSpeech';


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
        comment: '',
    });

    useEffect(() => {
        getRssFeedDetail(link, (result) => {
            // console.log(result.title); // In ra tiêu đề
            // console.log(result.sapo); // In ra mô tả
            console.log(result.body); // In ra nội dung
            // console.log(result.tag);

            // console.log(result.more);
            // console.log(result.comment);
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
                comment: text.comment,
            });

            return result;
        });
    }, [link]);

    const img = document.querySelectorAll('img');
    img.forEach((img) => {
        const src = img.getAttribute('src');
        const dataSrc = img.getAttribute('data-src');
        if (dataSrc) {
            img.setAttribute('src', dataSrc);
            img.removeAttribute('data-src');
        }
        // Sử dụng các giá trị thuộc tính ở đây
        // console.log('Src:', src);
        // console.log('data-src:', dataSrc);
    });

    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>

            <TextToSpeech text={content.body} />

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