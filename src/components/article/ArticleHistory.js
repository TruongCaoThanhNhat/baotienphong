import React from 'react';
import { addHistory } from '../../store/Action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ArticleHistory = ({ feed }) => {
    const { title, image, link, updated, description, cate, id, isViewed } = feed;
    // const article = feed;
    const article = {
        ...feed,
        // // id: id,
        // id: Math.random().toString(36).substr(2, 9),
        // isViewed: false,
    };
    // console.log(article);

    function getSlugFromLink(link) {
        const lastSlashIndex = link.lastIndexOf('/');
        const slug = link.substring(lastSlashIndex + 1);
        return slug;
    }

    // const slugLink = getSlugFromLink(link);

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    // xoa lich su
    const listHistory = useSelector(state => state.root.history);
    console.log(listHistory);

    // function handelDelHistory(article) {
    //     article.isViewed = false;
    //     dispatch(deleteHistory(article));
    // }

    return (
        // <div>
        <div className="article">
            <a href={link}>
                <img
                    src={image}
                    alt=""
                />
            </a>
            {cate}
            <a href='' className='title'>{title}</a>
            <span className='date'>{updated}</span>
            <button className='date' onClick={() => handleButtonClick(getSlugFromLink(link))}>Chi tiết</button>
            {/* <button className='date' onClick={() => handelDelHistory(feed)}>xoa</button> */}
        </div>
        // </div>
    );
};


export default ArticleHistory;