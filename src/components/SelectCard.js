import React from 'react';
import { useState } from 'react';
import style from '../css/Card.module.css'
import CommonButton from './UI/button/CommonButton/CommonButton';

const SelectCard = ({ sizeCard, paddingCard, primaryText, colorPrimaryText, secondaryText, secondaryTextStyle, button, buttonName, background, primaryTextList, primaryTextListStyle, secondaryTextList, secondaryTextListStyle, onButtonClick, bannerBg, bannerText, bannerTextStyle, img, styleCards, primaryTextImg }) => {
    const [hovered, setHovered] = useState(false);

    const selectButtonPPF = (item) => (
        <button
            key={item.id}
            className={`${style[item.background]} ${style[item.color]} ${style[item.size]} ${hovered ? style[item.hover] : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => {
                onButtonClick(item.id);
            }}
        >
            <p>{item.text}</p>
        </button>
    );

    const selectPackagesTinting = (item) => (
        <CommonButton
            color="whiteText"
            background="blackBackgroundWhiteBorder"
            size="mediumSize"
            hover="whiteHover"
            text="BOOK NOW"
            link="contact-us"
        />
    );

    const selectCardTinting = (item) => (
        <CommonButton
            color="greenText"
            background="blackBackground"
            size="mediumSize"
            hover="darkHover"
            text="BOOK NOW"
            link="contact-us"
        />
    );


    const switchButtons = (item) => {
        switch (buttonName) {
            case "PPF":
                return selectButtonPPF(item);
            case "TintingPackages":
                return selectPackagesTinting(item);
            case "TintingCard":
                return selectCardTinting(item);
            default:
                return null;
        }
    };



    return (
        <div className={`${style[styleCards]} ${style[sizeCard]} ${style[paddingCard]} ${style[background]}`}>
            <div className={`${style.wrapperPrimaryText} ${style.wrapperPrimaryText}`}>
                <h4><p className={`${style[colorPrimaryText]}`}>{primaryText}</p></h4>
            </div>
            {img ? <div className={style.wrapperImg}><img src={img} alt='Tinting' /></div> : null}
            {primaryTextImg ? 
            <div className={`${style.wrapperPrimaryText} ${style.wrapperPrimaryText}`}>
                <h4><p className={`${style[colorPrimaryText]}`}>{primaryTextImg}</p></h4>
            </div> : null}
            {bannerBg ?
                <div className={`${style[bannerBg]} ${style.wrapperBanner}`}>
                    <h6><p className={style[bannerTextStyle]}>{bannerText}</p></h6>
                </div>
                : null}
            {secondaryText ?
                < div className={style.wrapperContent}>
                    <div className={style.wrapperSecondaryText}>
                        <h6><p className={style[secondaryTextStyle]}>{secondaryText}</p></h6>
                    </div>
                    <div className={style.wrapperList}>
                        <h5 ><p className={style[primaryTextListStyle]}>{primaryTextList}</p></h5>
                        <div className={style.wrapperSecondaryTextList}>
                            <ul className={style.wrappertextList}>
                                {secondaryTextList.map((item) =>
                                    <li key={item.id} className={style[secondaryTextListStyle]}> <h6><p className={style[secondaryTextListStyle]}>{item.content}</p></h6></li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div> : null
            }
            {button.length > 0 ?
                <div className={style.wrapperButton}>
                    {button.map((item) =>
                        switchButtons(item)
                    )}
                </div> : null
            }
        </div >
    );
}

export default SelectCard;
