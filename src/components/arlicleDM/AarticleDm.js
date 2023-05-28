import React from 'react';
import "../arlicleDM/ArlicleDM.scss";

const AarticleDm = ({ feeds }) => {
    const { title, image, link, updated, description, cate } = feeds;
    const article = feeds;
    // console.log(article);


    return (
        // <div className='articleDM'>
            <div className="articles">
                <a href={link}>
                    <img
                        src={image}
                        alt=""
                    />
                </a>
                {cate}
                <a href={link} className='title'>{title}</a>
                <span className='date'>{updated}</span>
                {/*<span className='des'> {description} </span>*/}
                {/* <button className='date'>Chi tiết</button> */}
                {/* <div className='decription' dangerouslySetInnerHTML={{ __html: description }}></div> */}
                {/* <span className='description'>{description}</span> */}

            </div>
        // </div>
    );
};

export default AarticleDm;