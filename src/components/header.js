import React from 'react';
import NavBar from './NavBar';
import logo from '../assets/logo/logo.svg'
import '../css/header.css'
import {  Link } from 'react-router-dom'
import CommonButton from './UI/button/CommonButton/CommonButton';
import phoneIcon from '../assets/img/icons/phone-icon.svg'
import BurgerMenu from './BurgerMenu';

const Header = () => {

    return (
        <header>

            <div className='wrapper-phone-icon'>
                <a href='tel:+1-708-515-0171'>
                    <img className='phone-icon' alt='seo' src={phoneIcon} />
                </a>
            </div>

            <Link to={"/"}><img className='logo' src={logo} alt="SEO" /></Link>
            <NavBar stateMenu={true}/>
            <div className='wrapper-butn'>
                <CommonButton
                    color="greenText"
                    background="blackMedimuSoftBackground"
                    size="smallSize"
                    hover="blackMedimuSoftHover"
                    text="CALL NOW"
                    link="call-now"
                />
            </div>
            <BurgerMenu/>
        </header>
    );
}

export default Header;
