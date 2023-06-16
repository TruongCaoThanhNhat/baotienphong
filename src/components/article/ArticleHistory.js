import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addHistory, deleteHistory } from '../../store/Action';

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

    // bi loi xoa truc tiep redux khong chap nhan
    // function handelDelHistory(article) {
    //     article.isViewed = false;
    //     dispatch(deleteHistory(article));
    // }
    function handelDelHistory(article) {
        const updatedArticle = {
            ...article,
            isViewed: false,
        };
        dispatch(deleteHistory(updatedArticle));
    }

    return (
        <div className='history'>
            <div className="article article-history" onClick={() => handleButtonClick(getSlugFromLink(link))}>
                {/* <a href={link}>
            </a> */}
                <img
                    src={image}
                    alt=""
                />
                {cate}
                <p className='title'>{title}</p>
                <span className='date'>{updated}</span>
                {/* <button className='date' onClick={() => handleButtonClick(getSlugFromLink(link))}>Chi tiết</button> */}
            </div>
            <button className='btn-delete' onClick={() => handelDelHistory(feed)}>Xóa</button>
        </div>
    );
};


export default ArticleHistory;