import React from 'react';
import './Header.scss';
import FormSearch from '../../components/FormSearch';

const Header = () => {
    return (
        <div>
            <div className="header">
                <a href='#' className="logo">
                    <img srcSet="logo-web-white.png" alt="" />
                </a>
                <FormSearch></FormSearch>
                <div className="day">Chủ Nhật, 07/05/2023, 15:50:51 GMT+7</div>
            </div>
        </div>
    );
};

export default Header;