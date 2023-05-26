import React, { Fragment, useEffect, useState } from 'react';
import DropDown from '../../components/DropDown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { loadCategory } from '../../store/Action';
import categorys from '../../data/DanhMuc';

const ListMenu = () => {
    const { cate, setCate } = useState();
    const listCategory = useSelector(state => state.root.categorys);
    // console.log(listCategory);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadCategory(categorys))
    }, [])
    return (
        <Fragment>
            <ul className='menu'>
                {listCategory.map(category => (
                    <li className='dropdown' key={category.id} id={category.id}>
                        <NavLink to={category.link}>{category.name}</NavLink>
                        <DropDown dropdown={category.dropdown}></DropDown>

                    </li>
                ))}
            </ul>
        </Fragment>
    );
};

export default ListMenu;