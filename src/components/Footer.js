import React from 'react';
import '../css/Footer.css'
import logo from '../assets/logo/logo.svg'
import facebookIcon from '../assets/img/icons/footer/facebookIcon.svg'
import instagramIcon from '../assets/img/icons/footer/instagramIcon.svg'
import twitterIcon from '../assets/img/icons/footer/twitterIcon.svg'
import youTubeIcon from '../assets/img/icons/footer/youTubeIcon.svg'
import linkedInIcon from '../assets/img/icons/footer/linkedInIcon.svg'

const Footer = () => {
    return (
        <footer>
            <div className='wrapper-footer-information'>
                <img className='logo' src={logo} alt="car tunning" />
                <div className='wrapper-social-icons'>
                    <div className='circle-for-social'><img src={facebookIcon} alt="" /></div>
                    <div className='circle-for-social'><img src={instagramIcon} alt="" /></div>
                    <div className='circle-for-social'><img src={twitterIcon} alt="" /></div>
                    <div className='circle-for-social'><img src={youTubeIcon} alt="" /></div>
                    <div className='circle-for-social'><img src={linkedInIcon} alt="" /></div>
                </div>
                <div className='wrapper-primary-text'>
                    <h2><p className='primary-text-footer'>We Make Your Car Look Beautiful</p></h2>
                </div>
                <div className='wrapper-secondary-text'>
                    <h6><p className='secondary-text-footer'>Founded with an unquenchable desire for automotive perfection, Chicago Auto Pros is a leader in paint protection efforts and aesthetic vehicle detailing services in Chicago, Illinois. When you bring your automobile to our Chicago-based detailing shop.</p></h6>
                </div>
                <div className='wrapper-shop-contac'>
                    <h6><p className='address-information'>3208 W Lake Ave Glenview, IL 60026</p></h6>
                    <h6><p className='telephone-information'>708.834.9116</p></h6>
                    <h6><p className='email-information'>dmytro@drivencustomsllc.com</p></h6>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
