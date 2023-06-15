import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import FormSearch from '../../components/FormSearch';

const Header = () => {
    return (
        <div>
            <div className="header">
                <Link to='/HomePage' className="logo">
                    <img srcSet="logo-web-white.png" alt="" />
                </Link>
                {/*<FormSearch></FormSearch>*/}
                <div className="day">Chủ Nhật, 07/05/2023, 15:50:51 GMT+7</div>
            </div>
        </div>
    );
};

export default Header;