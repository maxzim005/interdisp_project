import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfilePic from '../../../img/Profile.svg'
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <NavLink className={s.link + ' offset-5 col-1'} to='/main_page'>WA</NavLink>
            <NavLink className={s.link + ' offset-4 col-1'} to='/profile'><img src={ProfilePic} alt="" /></NavLink>
        </div>
    );
};
export default Navbar;