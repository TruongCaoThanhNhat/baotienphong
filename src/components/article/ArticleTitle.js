import React from 'react';
import "./article.scss";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addHistory } from '../../store/Action';

const ArticleTitle = ({ feed }) => {
    const { title, image, link, updated, description, cate } = feed;
    // const article = feed;
    const article = {
        ...feed,
        // id: id,
        id: Math.random().toString(36).substring(2, 9),
        isViewed: false,
    };
    // console.log(article);

    // get slug for detail article
    function getSlugFromLink(link) {
        const lastSlashIndex = link.lastIndexOf('/');
        const slug = link.substring(lastSlashIndex + 1);
        return slug;
    }

    // const slugLink = getSlugFromLink(link);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // lich su xem
    const historyRedux = useSelector(state => state.root.history);
    function handelAddHistory(article) {
        article.isViewed = true;
        // Kiểm tra xem bài báo có cùng id đã tồn tại trong danh sách lịch sử chưa
        const existingArticle = historyRedux.find(item => item.title === article.title);
        // const existingArticle = historyRedux.find(item => item.id === article.id);
        if (!existingArticle) {
            dispatch(addHistory(article));
        }
    }

    const handleButtonClick = (link) => {
        handelAddHistory(article);

        const slug = `/${link}`;
        navigate(slug);
    };


    return (
        // <div>
        <div className="article-title" onClick={() => handleButtonClick(getSlugFromLink(link))}>
            {/* <a href={link}>
            </a> */}
            {/* <img
                src={image}
                alt=""
            /> */}
            {cate}
            <h2 className='title'>{title}</h2>
            {/* <span className='date'>{updated}</span> */}
            {/* <button className='date' onClick={() => handleButtonClick(getSlugFromLink(link))}>Chi tiết</button> */}
            {/* <button className='date'>Chi tiết</button> */}
            {/* <div className='decription' dangerouslySetInnerHTML={{ __html: description }}></div> */}
            {/* <span className='description'>{description}</span> */}

        </div>

    );
};

export default ArticleTitle;