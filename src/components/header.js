import React from 'react';
import NavBar from './NavBar';
import logo from '../assets/logo/logo.svg'
import '../css/header.css'
import { Link } from 'react-router-dom'
import CommonButton from './UI/button/CommonButton/CommonButton';
import burgerMenuIcon from '../assets/img/icons/burgerMenu.svg'

const Header = () => {

    const [burgerMenu,setBurgerMenu]=React.useState(false)

    return (
        <header>
            <Link to={"/"}><img className='logo' src={logo} alt="SEO" /></Link>
            <NavBar stateBurgerMenu={burgerMenu} />
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
            <img onClick={() => setBurgerMenu(!burgerMenu)} className='burger-menu' alt='seo' src={burgerMenuIcon} />
        </header>
    );
}

export default Header;
