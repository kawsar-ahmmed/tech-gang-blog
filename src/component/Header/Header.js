import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='meni-main'>
           <Navbar>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/videos'>Video</NavLink>
            <NavLink to='/Login'>Login</NavLink>
           </Navbar>
        </div>
    );
};

export default Header;