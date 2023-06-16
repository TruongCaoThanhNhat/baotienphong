import React from 'react';
import Header from './header/Header';
import Navigation from './navigation/Navigation';
import "../page/home/home.scss"

const HeaderLayout = () => {
    return (
        <div>
            <div className="fixed">
                <Header></Header>
                <Navigation></Navigation>
            </div>
        </div>
    );
};

export default HeaderLayout;