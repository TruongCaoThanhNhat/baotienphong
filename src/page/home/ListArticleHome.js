import React, { Fragment, useEffect, useState } from 'react';
import { fetchRssFeed } from '../../util/RssFeed';
import Article from '../../components/article/Article';


const ListArticleHome = () => {
    const [dataArticle, setDataArticle] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataArticle = await fetchRssFeed('https://tienphong.vn/rss/home.rss');
                setDataArticle(dataArticle);

            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <Fragment>
            {
                dataArticle.map((item, index) => (
                    <div key={index}>
                        <Article feed={item}></Article>
                    </div>
                ))
            }
        </Fragment>
    );
};

export default ListArticleHome;