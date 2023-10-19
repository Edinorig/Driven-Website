import React, { useState } from 'react';
import BlurData from '../../components/BlurData';
import Footer from '../../components/Footer';
import './PaintProtectionFilmPackages.css';
import SelectCardPPF from '../../components/SelectCardPPF';
import PartialProtection from '../../assets/img/PaintProtectionFilmPackages/Partialrotection.svg';
import FullFrontProtection from '../../assets/img/PaintProtectionFilmPackages/FFProtection.svg';
import FullProtection from '../../assets/img/PaintProtectionFilmPackages/FCarProtection.svg';

const PaintProtectionFilmPackages = () => {

    const [cardContent, setCardContent] = useState([{
        id: 1,
        sizeCard: "mediumcard",
        stylePrimaryText: true,
        background: "darkBackground",
        primaryText: "PARTIAL PROTECTION",
        secondaryText: "Our Partial Protection PPF covers from 18” to 24” of your vehicle’s hood surface with an Opticle Clear Bra.",
        primaryTextList: "THIS PACKAGE INCLUDES:",
        button: [
            {
                id: 1,
                background: "darkBackgroundgreenBorder",
                color: "greenColor",
                size: "medimuSize",
                text: "SELECTED",
                hover: "darkHoverWhiteBorder",
            },
        ],
        secondaryTextList: [
            {
                id: Math.random(),
                content: "Front bumper"
            },
            {
                id: Math.random(),
                content: "Partial hood"
            },
            {
                id: Math.random(),
                content: "Headlights"
            },
            {
                id: Math.random(),
                content: "Partial front fenders"
            },
        ]
    },
    {
        id: 2,
        sizeCard: "mediumcard",
        stylePrimaryText: true,
        background: "darkBackground",
        primaryText: "Full Front Protection",
        secondaryText: "A special feature of our Full Front Protection PPF package is that we incorporate wrapped edges .",
        primaryTextList: "THIS PACKAGE INCLUDES:",
        button: [
            {
                id: 2,
                background: "darkBackgroundBorderWhite",
                color: "whiteColor",
                size: "medimuSize",
                text: "SELECT",
                hover: "darkHoverGreenBorder",
            },
        ],
        secondaryTextList: [
            {
                id: Math.random(),
                content: "Front bumper"
            },
            {
                id: Math.random(),
                content: "Partial hood"
            },
            {
                id: Math.random(),
                content: "Full front fenders"
            },
            {
                id: Math.random(),
                content: "Headlights"
            },
            {
                id: Math.random(),
                content: "Mirror caps"
            },
        ]
    },
    {
        id: 3,
        sizeCard: "mediumcard",
        stylePrimaryText: true,
        background: "darkBackground",
        primaryText: "Full Car Protection",
        secondaryText: "Whether you are looking for that perfectly invisible protective film or a custom stealth appearance created by a satin finish.",
        primaryTextList: "THIS PACKAGE INCLUDES:",
        button: [
            {
                id: 3,
                background: "darkBackgroundBorderWhite",
                color: "whiteColor",
                size: "medimuSize",
                text: "SELECT",
                hover: "darkHoverGreenBorder",
            },
        ],
        secondaryTextList: [
            {
                id: Math.random(),
                content: "Full car painted surfaces vehicle protection"
            },
        ]
    }
    ])

    const images = {
        1: PartialProtection,
        2: FullFrontProtection,
        3: FullProtection,
    };
    const [selectedImageId, setSelectedImageId] = useState(1);
    const handleButtonClick = (id) => {
        setCardContent((prev) =>
            prev.map((item) => ({
                ...item,
                button: item.button.map((button) => ({
                    ...button,
                    background: button.id === id ? "darkBackgroundgreenBorder" : "darkBackgroundBorderWhite",
                    color: button.id === id ? "greenColor" : "whiteColor",
                    size: "medimuSize",
                    text: button.id === id ? "SELECTED" : "SELECT",
                    hover: button.id === id ? "darkHoverWhiteBorder" : "darkHoverGreenBorder",
                })),
            }))
        );
        setSelectedImageId(id);
    };

    return (
        <div>
            <div className='wrapper-blur-data'>
                <BlurData />
            </div>
            <div className='wrapper-package'>
                <div className='wrapper-primary-text'>
                    <h1 className='primary-text'><p>PPF PACKAGES</p></h1>
                </div>
                <div className='wrapper-cards-ppf'>
                    {cardContent.map((item) => (
                        <SelectCardPPF
                            key={item.id}
                            sizeCard={item.sizeCard}
                            stylePrimaryText={item.stylePrimaryText}
                            primaryText={item.primaryText}
                            secondaryText={item.secondaryText}
                            primaryTextList={item.primaryTextList}
                            secondaryTextList={item.secondaryTextList}
                            background={item.background}
                            button={item.button}
                            onButtonClick={handleButtonClick}
                        />
                    ))}
                </div>
                <div className='wrapper-img-ppf'>
                    <img src={images[selectedImageId]} alt='Car Protection' />
                </div>
            </div>
            <div className='wrapper-banner-card-information'>
                <div className='wrapper-primary-text-styled-green'>
                    <h1 className='primary-text-styled-green'><p>Why Should You Consider  PPF For Your Ride ?</p></h1>
                </div>
                <div className='wrapper-information-cards'>

                </div>
            </div>
            <Footer />
        </div >
    );
}

export default PaintProtectionFilmPackages;
