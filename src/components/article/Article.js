import React from 'react';
import "./article.scss";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Article = ({ feed }) => {
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

    const handleButtonClick = (link) => {


        const slug = `/${link}`;
        navigate(slug);
    };


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
            <a href={link} className='title'>{title}</a>
            <span className='date'>{updated}</span>
            <button className='date' onClick={() => handleButtonClick(getSlugFromLink(link))}>Chi tiết</button>
            {/* <button className='date'>Chi tiết</button> */}
            {/* <div className='decription' dangerouslySetInnerHTML={{ __html: description }}></div> */}
            {/* <span className='description'>{description}</span> */}

        </div>

    );
};

export default Article;