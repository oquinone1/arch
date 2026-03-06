import React from 'react';
import Logo from '../assets/images/logo.svg';
import Hamburger from '../assets/icons/icon-hamburger.svg';
import "../Styling/navbar.css";

// Big screen 
// Show navbar items in a row

//Small Screen
//Show Button to popup dropdown list pages to nav to 


const NavbarComponent = () => {
    return(
    // <div className='container'>
    //     <span><img src={Logo} alt="Logo" /></span>
    //     <ul className='list-container'>
    //         <li>Portfolio</li>
    //         <li>About Us</li>
    //         <li>Contact</li>
    //     </ul>
    //     <span />
    // </div>

    <div className='navbar-mobile-container'>
        <span><img src={Logo} alt="Logo" /></span>
        <span id="hamburger-container"><img src={Hamburger} alt='hamburger'/></span>
    </div>
    );
};

export default NavbarComponent;