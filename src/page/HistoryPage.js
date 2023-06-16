import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArticleHistory from '../components/article/ArticleHistory';
import Header from '../layout/header/Header';
import Navigation from '../layout/navigation/Navigation';
import "./home/home.scss";
import HeaderLayout from '../layout/HeaderLayout';

const HistoryPage = () => {
    // localStorage.clear();
    const listHistory = useSelector(state => state.root.history);
    console.log(listHistory);
    const dispatch = useDispatch();

    // function handelDelHistory(article) {
    //     article.isViewed = false;
    //     dispatch(deleteHistory(article));
    // }
    return (
        <Fragment>
            <HeaderLayout></HeaderLayout>
            <h1 className='caption'> Lịch sử xem</h1>
            <div className='list-history'>
                {listHistory.map(article => (
                    <div key={article.guid}>
                        <ArticleHistory feed={article}></ArticleHistory>
                        {/* <button className='date' onClick={() => handelDelHistory(article)}>xoa</button> */}
                        {/* tao 1 cai nua de render lich su khi click van chuyen trang toi */}
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default HistoryPage;