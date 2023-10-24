import React, { useState } from 'react';
import BlurData from '../../components/BlurData';
import Footer from '../../components/Footer';
import InformationCard from '../../components/InformationCard';
import './PaintProtectionFilmPackages.css';
import SelectCard from '../../components/SelectCard';
import PartialProtection from '../../assets/img/PaintProtectionFilmPackages/Partialrotection.svg';
import FullFrontProtection from '../../assets/img/PaintProtectionFilmPackages/FFProtection.svg';
import FullProtection from '../../assets/img/PaintProtectionFilmPackages/FCarProtection.svg';
import carService from '../../assets/img/PaintProtectionFilmPackages/carService.svg'
import carWash from '../../assets/img/PaintProtectionFilmPackages/carWash.svg'
import carIcon from '../../assets/img/PaintProtectionFilmPackages/carIcon.svg'
import saveMoney from '../../assets/img/PaintProtectionFilmPackages/saveMoney.svg'
import CommonButton from '../../components/UI/button/CommonButton/CommonButton';

const PaintProtectionFilmPackages = () => {

    const informationCard = [
        {
            id: 1,
            imgSrc: carService,
            primaryText: "Self-Healing Vehicle Exterior Surface Security",
            secondaryText: "Of all the reasons that vehicle owners bring their cars, trucks, and otherwise to our paint protection film installation team here at Chicago Auto Pros, the most common one is peace of mind. With a clear bra, you can drive freely without flinching every single time you hear a rock ricochet against your door or worrying that your finish will be scratched when parking in a busy lot."
        },
        {
            id: 2,
            imgSrc: carWash,
            primaryText: "Hydrophobic Protection Against Stains and Grime",
            secondaryText: "This is a very similar characteristic between paint protection films and our ceramic coating packages. While the primary reason most purchase a paint protection film is due to its self-healing abrasion resistance, it too has a hydrophobic, glossy surface that enhances paintwork while preventing stains, fading from the sun, and other surface degradation from the environment."
        },
        {
            id: 3,
            imgSrc: carIcon,
            primaryText: "Worry-Free Vehicle Ownership",
            secondaryText: "As we mentioned, most vehicle owners either want their exterior to look flawless for the sake of their pride, or they want a perfect vehicle to know that it will continue to operate properly for many years. Nearly all of the most common concerns that every vehicle owner has will be wiped clean thanks to a paint protection film."
        },
        {
            id: 4,
            imgSrc: saveMoney,
            primaryText: "All-Around Low-Maintenance Protection Effort",
            secondaryText: "Your vehicle’s surfaces that can be covered by a clear bra are sure to boast some of the most low-maintenance characteristics imaginable. This is not only by way of less frequent exterior cleaning, but also via its resistance to abrasions that would ultimately need to be buffed and polished from your finish."
        }
    ]

    const [cardContent, setCardContent] = useState([{
        id: 1,
        sizeCard: "mediumcard",
        paddingCard: "smallPadding",
        styleCards: "flexStart",
        stylePrimaryText: true,
        background: "darkBackground",
        primaryText: "PARTIAL PROTECTION",
        colorPrimaryText: "colorAccentPrimaryText",
        secondaryText: "Our Partial Protection PPF covers from 18” to 24” of your vehicle’s hood surface with an Opticle Clear Bra.",
        secondaryTextStyle: "mainColorSecondaryText",
        primaryTextList: "THIS PACKAGE INCLUDES:",
        primaryTextListStyle: "mainColor",
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
        buttonName: "PPF",
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
        ],
        secondaryTextListStyle: "mainSecondaryTextList"
    },
    {
        id: 2,
        sizeCard: "mediumcard",
        styleCards: "flexStart",
        paddingCard: "smallPadding",
        stylePrimaryText: true,
        background: "darkBackground",
        primaryText: "Full Front Protection",
        colorPrimaryText: "colorAccentPrimaryText",
        secondaryText: "A special feature of our Full Front Protection PPF package is that we incorporate wrapped edges .",
        secondaryTextStyle: "mainColorSecondaryText",
        primaryTextList: "THIS PACKAGE INCLUDES:",
        primaryTextListStyle: "mainColor",
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
        buttonName: "PPF",
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
        ],
        secondaryTextListStyle: "mainSecondaryTextList"
    },
    {
        id: 3,
        sizeCard: "mediumcard",
        styleCards: "flexStart",
        paddingCard: "smallPadding",
        stylePrimaryText: true,
        background: "darkBackground",
        primaryText: "Full Car Protection",
        colorPrimaryText: "colorAccentPrimaryText",
        secondaryText: "Whether you are looking for that perfectly invisible protective film or a custom stealth appearance created by a satin finish.",
        secondaryTextStyle: "mainColorSecondaryText",
        primaryTextList: "THIS PACKAGE INCLUDES:",
        primaryTextListStyle: "mainColor",
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
        buttonName: "PPF",
        secondaryTextList: [
            {
                id: Math.random(),
                content: "Full car painted surfaces vehicle protection"
            },
        ],
        secondaryTextListStyle: "mainSecondaryTextList"
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
                <BlurData
                    primaryText="Get invisible and strongprotection for your vehicle"
                />
            </div>
            <div className='wrapper-package'>
                <div className='wrapper-primary-text'>
                    <h1 className='primary-text'><p>PPF PACKAGES</p></h1>
                </div>
                <div className='wrapper-cards-ppf'>
                    {cardContent.map((item) => (
                        <SelectCard
                            key={item.id}
                            styleCards={item.styleCards}
                            sizeCard={item.sizeCard}
                            paddingCard={item.paddingCard}
                            stylePrimaryText={item.stylePrimaryText}
                            primaryText={item.primaryText}
                            colorPrimaryText={item.colorPrimaryText}
                            secondaryText={item.secondaryText}
                            secondaryTextStyle={item.secondaryTextStyle}
                            primaryTextList={item.primaryTextList}
                            primaryTextListStyle={item.primaryTextListStyle}
                            secondaryTextList={item.secondaryTextList}
                            secondaryTextListStyle={item.secondaryTextListStyle}
                            background={item.background}
                            button={item.button}
                            buttonName={item.buttonName}
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
                    {informationCard.map((item) =>
                        <InformationCard
                            key={item.id}
                            img={item.imgSrc}
                            primaryText={item.primaryText}
                            secondaryText={item.secondaryText}
                        />
                    )}
                </div>
                <div className='wrapper-button-information-card'>
                    <CommonButton
                        color="greenText"
                        background="blackBackground"
                        size="largeSize"
                        hover="darkHover"
                        text="BOOK NOW"
                        link="contact-us"
                    />
                </div>
            </div>
            <Footer />
        </div >
    );
}

export default PaintProtectionFilmPackages;
