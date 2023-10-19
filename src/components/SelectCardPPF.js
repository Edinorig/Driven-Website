import React from 'react';
import { useState } from 'react';
import style from '../css/Card.module.css'


const SelectCardPPF = ({ sizeCard, primaryText, secondaryText, button, background, primaryTextList, secondaryTextList, onButtonClick, hover }) => {
    const [hovered, setHovered] = useState(false);
    console.log({ button });

    return (
        <div className={`${style.card} ${style[sizeCard]} ${style[background]}`}>
            <div className={style.wrapperPrimaryText}>
                <h4><p className={style.primaryTextStyle}>{primaryText}</p></h4>
            </div>
            <div className={style.wrapperContent}>
                <div className={style.wrapperSecondaryText}>
                    <h6><p>{secondaryText}</p></h6>
                </div>
                <div className={style.wrapperPrimaryTextList}>
                    <h5 className={style.primaryTextListStyled}><p>{primaryTextList}</p></h5>
                    <div className={style.wrapperSecondaryTextList}>
                        <ul className={style.wrappertextList}>
                            {secondaryTextList.map((item) =>
                                <li key={item.id}> <h6><p>{item.content}</p></h6></li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={style.wrapperButton}>
                {button.map((item) =>
                    <button
                        key={item.id}
                        className={`${style[item.background]} ${style[item.color]} ${style[item.size]} ${hovered ? style[item.hover] : ""}`}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        onClick={() => {
                            onButtonClick(item.id);
                        }}
                    >{item.text}</button>
                )}
            </div>
        </div>
    );
}

export default SelectCardPPF;
