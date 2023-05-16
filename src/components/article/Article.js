import React from 'react';
import "./article.scss";
import { getRssFeedDetail } from '../../util/RssFeed';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addHistory } from '../../store/Action';

const Article = ({ feed }) => {
    const { title, image, link, updated, description, cate } = feed;
    const article = feed;
    console.log(article);


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
            <button className='date'>Chi tiết</button>
            {/* <span className='description'>{description}</span> */}

        </div>
        // </div>
    );
};

export default Article;