import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink className='link' to='/mainpage'>Main page</NavLink>
        </div>
    );
};
export default Navbar;