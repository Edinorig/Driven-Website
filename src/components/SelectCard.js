import React from 'react';
import { useState } from 'react';
import style from '../css/Card.module.css'

const SelectCard = ({ sizeCard, paddingCard, primaryText, colorPrimaryText, secondaryText, secondaryTextStyle, button, buttonName, background, primaryTextList, primaryTextListStyle, secondaryTextList, secondaryTextListStyle, onButtonClick, bannerBg, bannerText, bannerTextStyle }) => {
    const [hovered, setHovered] = useState(false);

    console.log(button);

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
        <button
            key={item.id}
            className={`${style[item.background]} ${style[item.color]} ${style[item.size]} ${hovered ? style[item.hover] : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <p>{item.text}</p>
        </button>
    );

    const selectCardTinting = (item) => (
        <button
            key={item.id}
            className={`${style[item.background]} ${style[item.color]} ${style[item.size]} ${hovered ? style[item.hover] : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <p>{item.text}</p>
        </button>
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
        <div className={`${style.card} ${style[sizeCard]} ${style[paddingCard]} ${style[background]}`}>
            <div className={`${style.wrapperPrimaryText} ${style.wrapperPrimaryText}`}>
                <h4><p className={`${style[colorPrimaryText]}`}>{primaryText}</p></h4>
            </div>
            {bannerBg ?
                <div className={`${style[bannerBg]} ${style.wrapperBanner}`}>
                    <h6><p className={style[bannerTextStyle]}>{bannerText}</p></h6>
                </div>
                : null}
            <div className={style.wrapperContent}>
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
            </div>
            {button ?
                <div className={style.wrapperButton}>
                    {button.map((item) =>
                        switchButtons(item)
                    )}
                </div> : null}
        </div>
    );
}

export default SelectCard;
