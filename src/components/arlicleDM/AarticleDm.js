import React from 'react';
import "./arlicleDM.scss";

const AarticleDm = ({ feeds }) => {
    const { title, image, link, updated, description, cate } = feeds;
    const article = feeds;
    // console.log(article);


    return (
        // <div className='articleDM'>
        <div className="articles">
            <div className="image">
                <a href={link}>
                    <img
                        src={image}
                        alt=""
                        className='imga'
                    />
                </a>
            </div>
            {cate}
            <div className='titleDate'>
                <a href={link} className='title'>{title}</a>
                <span className='date'>{updated}</span>
            </div>
            {/*<span className='des'> {description} </span>*/}
            {/* <button className='date'>Chi tiết</button>*/}
            {/* <div className='decription' dangerouslySetInnerHTML={{ __html: description }}></div> */}
            {/* <span className='description'>{description}</span> */}

        </div>
        // </div>
    );
};

export default AarticleDm;