import React from 'react';
import '../css/BlurData.css'
import CommonButton from './UI/button/CommonButton/CommonButton';

const BlurData = ({ primaryText, secondaryText, img }) => {
    return (
        <div className='wrapper-blur'>
            <div className='wrapper-content'>
                <div>
                    <h1><p className='primary-text-styled'>{primaryText}</p></h1>
                    {secondaryText ? <h6><p className='secondary-text-styled'>{secondaryText}</p></h6> : null}

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
                        <img src={img} alt='Car styling' />
                    </div>

                </div>
            </div>
        </div >
    );
}

export default BlurData;
