import React from 'react';
import "./article.scss";

const Article = ({ feed }) => {
    const { title, image, link, updated, description, cate } = feed;
    const article = feed;
    // console.log(article);


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
            {/* <button className='date'>Chi tiết</button> */}
            {/* <div className='decription' dangerouslySetInnerHTML={{ __html: description }}></div> */}
            {/* <span className='description'>{description}</span> */}

        </div>

    );
};

export default Article;