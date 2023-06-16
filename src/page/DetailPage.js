import React, { useEffect, useState } from 'react';
import { getRssFeedDetail } from "../util/RssFeed";
import Header from "../layout/header/Header";
import Navigation from "../layout/navigation/Navigation";

import { useParams } from 'react-router-dom';

import "./detail.css"


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
        // more: '',
        mgbox:'',
    });
    const [comments, setComments] = useState([]);

    const submitComment = (event) => {
        event.preventDefault();
        const comment = event.target.elements.comment.value;
        const name = event.target.elements.name.value;
        const newComment = { name: name, comment: comment };
        setComments([...comments, newComment]); // Thêm bình luận mới vào danh sách
        event.target.elements.comment.value = ''; // Xóa nội dung của input
        event.target.elements.name.value = ''; // Xóa tên của input
    }


    useEffect(() => {
        getRssFeedDetail(link, (result) => {
            console.log(result.title); // In ra tiêu đề
            console.log(result.sapo); // In ra mô tả
            console.log(result.body); // In ra nội dung
            console.log(result.tag);//In ra nhãn bài báo
            // console.log(result.more);
            console.log(result.mgbox)
            console.log(content);
            const text = result;
            // lỗi khong set trực tiếp giá trị cho content mà phải tạo cái mới set lại
            setContent({
                ...content,
                title: text.title,
                sapo: text.sapo,
                body: text.body,
                tag: text.tag,
                // more: text.more,
                mgbox: text.mgbox,
            });

            return result;
        });
    }, []);
    return (
        <div>
            <Header></Header>
            <Navigation></Navigation>


            <div className={"article__title cms-title"}>{content.title}</div>
            <div className={"article__sapo cms-desc"}>{content.sapo}</div>
            <div className={"article__body cms-body"} dangerouslySetInnerHTML={{ __html: content.body }}></div>
            <div className={"article__tag"} dangerouslySetInnerHTML={{ __html: content.tag }}></div>
            {/*<div className="more-story-3" dangerouslySetInnerHTML={{ __html: content.more }}></div>*/}
            <div className={"title-comment"}> Bình Luận  </div>
            {/*<form id="comment-form">*/}
            {/*    /!*<input className="name" type="text" name="name" placeholder="Tên của bạn"  /><br />*!/*/}
            {/*    <textarea className="comments" name="comment" placeholder="Nhập bình luận của bạn"></textarea><br />*/}
            {/*    <button className="button" type="submit">Gửi bình luận</button>*/}
            {/*</form>*/}

            <div className={"comment"}>
                {/*Hiển thị danh sách bình luận*/}
                {comments.map((comment, index) => (
                    <div key={index}>
                        <h4>{comment.name}:</h4>
                        <p>{comment.comment}</p>
                    </div>
                ))}

                {/* Form nhập bình luận */}
                <form onSubmit={submitComment}>
                    <label className={"name"} htmlFor="name">Tên của bạn:</label>
                    <input type="text" id="name" name="name" /><br />

                    <label className={"comments"} htmlFor="comment">Bình luận:</label>
                    <textarea  id="comment" name="comment"></textarea><br />

                    <button className="button" type="submit">Gửi bình luận</button>
                </form>
            </div>


            <div className={"mgbox"} dangerouslySetInnerHTML={{ __html: content.mgbox }}></div>

        </div>

    );
};
export default DetailPage;