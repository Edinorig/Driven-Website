/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import './Home.css'
import CommonButton from '../../components/UI/button/CommonButton/CommonButton';
import lamboPhoto from '../../assets/img/HomePage/lamboFigma.png'
import dillerImg1 from '../../assets/img/icons/dillerImg1.png'
import dillerImg2 from '../../assets/img/icons/dillerImg2.png'
import dillerImg3 from '../../assets/img/icons/dillerImg3.png'
import dillerImg4 from '../../assets/img/icons/dillerImg4.png'
import dillerImg5 from '../../assets/img/icons/dillerImg5.png'
import servicesImg from '../../assets/img/HomePage/services-img.svg'
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <main>
            <div className='wrapper-information wrapper-position'>
                <p className='primary-text-information'> EXOTIC CAR DETAILING</p>
                <h6 className='secondary-text-information'>LOCATED IN CHICAGO ILLINOIS. PREMIUM QUALITY CAR SELLING SHOP</h6>
                <div className='wrapper-button'>
                    <CommonButton
                        color="greenText"
                        background="blackBackground"
                        size="largeSize"
                        hover="darkHover"
                        text="BOOK NOW"
                        link="contact-us"
                    />
                </div>
                <img className='lambo-photo' src={lamboPhoto} alt="" />
            </div>
            <div className='banner-diller'>
                <div className='wrapper-diller-img'>
                    <img src={dillerImg1} alt="" />
                    <img src={dillerImg2} alt="" />
                    <img src={dillerImg3} alt="" />
                    <img src={dillerImg4} alt="" />
                    <img src={dillerImg5} alt="" />
                </div>
            </div>
            <div className='wrapper-services'>
                <div className='wrapper-primary-text-services'>
                    <p className='primary-text-slash'>///</p>
                    <p className='primary-text-services'>SERVICES</p>
                </div>
                <img src={servicesImg} alt="" />
                <div className='wrapper-btn-services'>
                    <CommonButton
                        color="greenText"
                        background="blackBackground"
                        size="largeSize"
                        hover="darkHover"
                        text="VIEW SERVICES"
                        link="services"
                    />
                </div>
            </div>
            <div className='banner-why-us'>
                <div className='wrapper-text-why-us'>
                    <h2><p className='primary-text-why-us'>WHY US ?</p></h2>
                    <h1> <p className='primary-medumi-text-why-us'>We have 5+ years expirience in this industry</p></h1>
                    <h3> <p className='secondary-text-why-us'>Choose us for your window tinting needs. With over 5 years of experience, we deliver expertise, quality, and lasting satisfaction !</p></h3>
                </div>
                <div className='wrapper-btn-banner-why-us'>
                    <CommonButton
                        color="greenText"
                        background="blackBackground"
                        size="extraLargeSize"
                        hover="darkHover"
                        text="CALL NOW"
                        link="call-now"
                    />
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default Home;
