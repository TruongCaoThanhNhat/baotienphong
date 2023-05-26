import React, { Fragment } from 'react';
import "./dropdown.scss";
import { Link } from 'react-router-dom';
const DropDown = ({ dropdown }) => {
    const listDropdown = dropdown;
    // console.log(listDropdown);
    return (
        <div className=''>
            <ul className='dropdown-content'>
                {
                    listDropdown.map(dropdown => (
                        <li className='dropdown-item' key={dropdown.id}>
                            <Link to={dropdown.link}>{dropdown.name}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default DropDown;