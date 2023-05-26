import React from 'react';
import './navigation.scss';
import DropDown from '../../components/DropDown';
import ListMenu from "./ListMenu";
// import DropDown from '../../components/DropDown';
const Navigation = () => {
    return (
        <div>
            <div className="navigation">
                <a href=""><i class="fas fa-home"></i></a>
                <ListMenu></ListMenu>
                <a href=""><i class="fas fa-bars"></i></a>
            </div>
        </div>
    );
};

export default Navigation;