import React from 'react';
import logo from '../assets/logo/logo.svg'
import CommonButton from './UI/button/CommonButton/CommonButton';
import { Link } from 'react-router-dom'
import '../css/NavBar.css'
import '../assets/font/font.css'

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='right-side'>
                <Link to={"/"}><img className='logo' src={logo} alt="SEO" /></Link>
            </div>
            <div className='midl-side'>
                <Link to={"/"} className='navBar-menu'>HOME</Link>
                <Link to={"/contact-us"} className='navBar-menu'><h5>CONTACT US</h5></Link>
                <Link to={"/services"} className='navBar-menu'><h5>SEARVICES</h5></Link>
                <Link to={"/learn-more"} className='navBar-menu'><h5>LEARN MORE</h5> </Link>
            </div>
            <div className='left-side'>
                <CommonButton
                    color="greenText"
                    background="blackMedimuSoftBackground"
                    size="smallSize"
                    hover="blackMedimuSoftHover"
                    text="CALL NOW"
                    link="call-now"
                     />
            </div>
        </div>
    );
}

export default NavBar;
