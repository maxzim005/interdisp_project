import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink className='link' to='/main_page'>Main page</NavLink>
            <NavLink className='link' to='/choose_category'>Choose category</NavLink>
            <NavLink className='link' to='/list_of_points'>List of points</NavLink>
            <NavLink className='link' to='/profile'>Profile</NavLink>
        </div>
    );
};
export default Navbar;