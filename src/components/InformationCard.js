import React from 'react';
import style from '../css/InformationCard.module.css'

const InformationCard = ({ img, primaryText, secondaryText}) => {

    console.log(img);
    return (
        <div className={style.wrapperInformationCard}>
            <div className={style.informationCard}>
                <div className={style.wrapperImg}>
                    <img src={img} className={style.imgIconReadCard} alt='Paint protection' />
                </div>
                <div className={style.wrapperPrimaryAccentText}>
                    <h5><p className={style.accentText}>{primaryText}</p></h5>
                </div>
                <div className={style.wrapperSecondaryText}>
                    <h6><p className={style.secondaryCarsText}>{secondaryText}</p></h6>
                </div>
            </div>
        </div>
    );
}

export default InformationCard;
