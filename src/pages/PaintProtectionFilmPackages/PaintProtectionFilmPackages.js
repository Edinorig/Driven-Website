import React, { useState } from 'react';
import BlurData from '../../components/BlurData';
import Footer from '../../components/Footer';
import InformationCardBanner from '../../components/InformationCardBanner';
import './PaintProtectionFilmPackages.css';
import SelectCard from '../../components/SelectCard';
import PartialProtection from '../../assets/img/PaintProtectionFilmPackages/Partialrotection.svg';
import FullFrontProtection from '../../assets/img/PaintProtectionFilmPackages/FFProtection.svg';
import FullProtection from '../../assets/img/PaintProtectionFilmPackages/FCarProtection.svg';
import carService from '../../assets/img/PaintProtectionFilmPackages/carService.svg'
import carWash from '../../assets/img/PaintProtectionFilmPackages/carWash.svg'
import carIcon from '../../assets/img/PaintProtectionFilmPackages/carIcon.svg'
import saveMoney from '../../assets/img/PaintProtectionFilmPackages/saveMoney.svg'
import gWagon from '../../assets/img/icons/GWAGON.svg'

const PaintProtectionFilmPackages = () => {

    const informationCard = [
        {
            id: 1,
            imgSrc: carService,
            primaryText: "SSelf-Healing Protection for Your Vehicle's Exterior Surface",
            secondaryText: "Among the various reasons vehicle owners entrust their cars, trucks, and other vehicles to our paint protection film installation team at Driven Customs, peace of mind stands out as the most prevalent. The clear bra ensures you can drive without flinching at every rock ricochet or fearing scratches in busy parking lots, allowing for worry-free driving experiences."
        },
        {
            id: 2,
            imgSrc: carWash,
            primaryText: "Hydrophobic Shield: Guarding Against Stains and Grime",
            secondaryText: "Both paint protection films and our ceramic coating packages share a striking similarity. While the primary motivation behind most paint protection film purchases is its self-healing abrasion resistance, it also boasts a hydrophobic, glossy surface. This surface not only enhances the paintwork but also safeguards against stains, sun fading, and other surface degradation caused by environmental factors."
        },
        {
            id: 3,
            imgSrc: carIcon,
            primaryText: "Stress-Free Vehicle Ownership Experience",
            secondaryText: "As previously mentioned, the majority of vehicle owners desire a flawless exterior either for their pride or to ensure the vehicle continues to operate properly for many years. A paint protection film effectively addresses nearly all common concerns shared by vehicle owners, ensuring worries are wiped clean."
        },
        {
            id: 4,
            imgSrc: saveMoney,
            primaryText: "Comprehensive Low-Maintenance Protection Solution",
            secondaryText: "Surfaces protected by a clear bra on your vehicle require minimal maintenance. This not only reduces the frequency of exterior cleaning but also prevents abrasions that would otherwise need buffing and polishing to maintain your finish."
        }
    ]

    const [cardContent, setCardContent] = useState([{
        id: 1,
        sizeCard: "mediumcard",
        paddingCard: "mediumPadding",
        styleCards: "flexStart",
        stylePrimaryText: true,
        background: "darkBackground",
        primaryText: "PARTIAL PROTECTION",
        colorPrimaryText: "accentColor",
        secondaryText: "Our Partial Protection PPF shields 18” to 24” of your vehicle’s hood with an Opticle Clear Bra.",
        secondaryTextStyle: "mainColorSecondaryText",
        primaryTextList: "THIS PACKAGE INCLUDES:",
        primaryTextListStyle: "accentColor",
        button: [
            {
                id: 1,
                background: "darkBackgroundgreenBorder",
                color: "greenColor",
                size: "medimuSize",
                text: "SELECTED",
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
        sizeCard: "largeCard",
        styleCards: "flexStart",
        paddingCard: "mediumPadding",
        stylePrimaryText: true,
        background: "accentBackground",
        primaryText: "FULL FRONT PROTECTION",
        colorPrimaryText: "colorDarkPrimaryText",
        secondaryText: "Our Full Front Protection PPF package includes the special feature of wrapped edges for enhanced coverage.",
        secondaryTextStyle: "darkColorSecondaryText",
        primaryTextList: "THIS PACKAGE INCLUDES:",
        primaryTextListStyle: "darkColor",
        button: [
            {
                id: 2,
                background: "darkBackgroundBorderWhite",
                color: "whiteColor",
                size: "medimuSize",
                text: "SELECT",
                hover: "whiteHover",
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
        secondaryTextListStyle: "darkSecondaryTextList"
    },
    {
        id: 3,
        sizeCard: "mediumcard",
        paddingCard: "mediumPadding",
        styleCards: "flexStart",
        stylePrimaryText: true,
        background: "darkBackground",
        primaryText: "PARTIAL PROTECTION",
        colorPrimaryText: "accentColor",
        secondaryText: "Whether you desire an invisible protective film or a custom stealth appearance with a matte finish, our Full Car Protection PPF package offers durable surface protection and effortless maintenance for all types of automobiles.",
        secondaryTextStyle: "mainColorSecondaryText",
        primaryTextList: "THIS PACKAGE INCLUDES:",
        primaryTextListStyle: "accentColor",
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

    const titleInformationBanner = "Why Choose a Clear Bra for Your Vehicle?"

    const images = {
        1: PartialProtection,
        2: FullFrontProtection,
        3: FullProtection,
    };
    const [selectedImageId, setSelectedImageId] = useState(1);
    const handleButtonClick = (id) => {
        console.log(selectedImageId);
        setSelectedImageId(id);
        setCardContent((prev) =>
            prev.map((item) => ({
                ...item,
                button: item.button.map((button) => ({
                    ...button,
                    background: button.id === id ? "darkBackgroundgreenBorder" : "darkBackgroundBorderWhite",
                    color: button.id === id ? "greenColor" : "whiteColor",
                    text: button.id === id ? "SELECTED" : "SELECT",
                    hover: button.id === id ? (button.hover === "darkHoverGreenBorder" ? "darkHoverGreenBorder" : (button.hover === "whiteHover" ? "whiteHover" : "darkHoverGreenBorder")) : "whiteHover",
                })),
            }))
        );
    };
    console.log(images[selectedImageId]);

    return (
        <div>
            <BlurData
                primaryText="TOP Paint Protection Film Packages Located In Chicago, IL"
                img={gWagon}
            />
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
                    <img className='selectCard-car' src={images[selectedImageId]} alt='Car Protection' />
                </div>
            </div>
            <InformationCardBanner
                informationCard={informationCard}
                title={titleInformationBanner}
            />
            <Footer />
        </div >
    );
}

export default PaintProtectionFilmPackages;
