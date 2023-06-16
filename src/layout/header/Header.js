import React from 'react';
import './Header.scss';
// import { Link } from 'react-router-dom';
import FormSearch from '../../components/FormSearch';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="header">
                <Link to="/" className="logo">
                    <img srcSet="logo-web-white.png" alt="" />
                </Link>
                {/*<FormSearch></FormSearch>*/}
                <div className="day">Chủ Nhật, 07/05/2023, 15:50:51 GMT+7</div>
                <a href="history">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </a>
                {/* <Link to="history">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                </Link> */}
            </div>
        </div>
    );
};

export default Header;