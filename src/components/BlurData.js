import React from 'react';
import '../css/BlurData.css'
import CommonButton from './UI/button/CommonButton/CommonButton';
import tesla from '../assets/img/icons/tesla.svg'

const BlurData = () => {
    return (
        <div className='wrapper-blur'>
            <div className='wrapper-content'>
                <div className=''>
                    <h1 className='primary-text-styled'><p>Get invisible and strongprotection for your vehicle</p></h1>
                    <div className='wrapper-middle'>
                        <div className='wrapper-btn-service'>
                            <CommonButton
                                color="greenText"
                                background="blackBackgroundWhiteBorder"
                                size="largeSize"
                                hover="darkHoverWhiteBorder"
                                text="BOOK NOW"
                                link="contact-us"
                            />
                        </div>
                        <div className='wrapper-content-img'>
                            <img src={tesla} alt='Car styling'/>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default BlurData;
