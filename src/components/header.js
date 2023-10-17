import React from 'react';
import NavBar from './NavBar';
import logo from '../assets/logo/logo.svg'
import '../css/header.css'
import { Link } from 'react-router-dom'
import CommonButton from './UI/button/CommonButton/CommonButton';

const Header = () => {
    return (
        <header>
            <Link to={"/"}><img className='logo' src={logo} alt="SEO" /></Link>
            <NavBar />
            <CommonButton
                color="greenText"
                background="blackMedimuSoftBackground"
                size="smallSize"
                hover="blackMedimuSoftHover"
                text="CALL NOW"
                link="call-now"
            />
        </header>
    );
}

export default Header;
