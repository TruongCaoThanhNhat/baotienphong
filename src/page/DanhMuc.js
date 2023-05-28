import React, {Fragment, useEffect, useState} from "react";
import { fetchRssFeed, getRssFeedDetail } from "../util/RssFeed";
import Header from "../layout/header/Header";
import Navigation from "../layout/navigation/Navigation";
import AarticleDm from "../components/arlicleDM/AarticleDm"

const DanhMuc = () => {
    const [dataArticle, setDataArticle] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataArticle = await fetchRssFeed("https://tienphong.vn/rss/xa-hoi-2.rss");
                setDataArticle(dataArticle);
            } catch (error) {
                console.error("Error:", error);
            }
        };
        fetchData();
    }, []);
    console.log(dataArticle);


    return (
        <Fragment>
            <Header></Header>
            <Navigation></Navigation>
            <div className='articleDM'>
                {
                    dataArticle.map((item, index) => (
                        <div key={index}>
                            <AarticleDm feeds={item}> </AarticleDm>
                        </div>
                    ))
                }
            </div>

        </Fragment>
    );
};

export default DanhMuc;
