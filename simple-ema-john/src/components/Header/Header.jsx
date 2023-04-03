import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='nav'> 
            <div className="nav-logo">
              <img src={logo} alt="logo"  />
               
            </div>
            <div className="nav-link">
                <a href="/order">Order</a>
                <a href="/review">Order Review</a>
                <a href="/shop">Shop</a>
                <a href="/login">Login</a>

            </div>
           
        </nav>
    );
};

export default Header;