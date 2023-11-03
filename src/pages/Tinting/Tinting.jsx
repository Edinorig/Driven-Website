import React from "react";
import BlurData from "../../components/BlurData";
import Footer from "../../components/Footer";
import "./Tinting.css";
import SelectCard from "../../components/SelectCard";
import BennefitCard from "../../components/BennefitCard";
import icontTintingBennefits1 from "../../assets/img/TintingPage/icontTintingBennefits1.svg";
import icontTintingBennefits2 from "../../assets/img/TintingPage/icontTintingBennefits2.svg";
import icontTintingBennefits3 from "../../assets/img/TintingPage/icontTintingBennefits3.svg";
import icontTintingBennefits5 from "../../assets/img/TintingPage/icontTintingBennefits5.svg";
import icontTintingBennefits6 from "../../assets/img/TintingPage/icontTintingBennefits6.svg";
import icontTintingBennefits4 from "../../assets/img/TintingPage/icontTintingBennefits4.svg";
import windowStripTinting from "../../assets/img/TintingPage/windowStripTinting.svg";
import fullWindshieldTinting from "../../assets/img/TintingPage/fullWindshieldTinting.svg";
import fullVeichleSurroundTinting from "../../assets/img/TintingPage/fullVeichleSurroundTinting.svg";
import front2WindowPatchTinting from "../../assets/img/TintingPage/front2WindowPatchTinting.svg";

const Tinting = () => {
  const tintingPackages = [
    {
      id: 1,
      sizeCard: "mediumcard",
      paddingCard: "mediumPadding",
      primaryText: "Dyed Film",
      colorPrimaryText: "colorMainPrimaryText",
      bannerBg: "bannerAccent",
      bannerText: "GOOD VALUE OPTION",
      secondaryText:
        "For a perfect blend of style and cost-effectiveness, opt for Color Stable Dyed Window Tint",
      secondaryTextStyle: "mainColorSecondaryText",
      background: "darkBackground",
      primaryTextList: "Key Features:",
      primaryTextListStyle: "accentColor",
      secondaryTextList: [
        {
          id: 1,
          content: "Moderate glare reduction for improved visibility",
        },
        {
          id: 2,
          content: "Enhance vehicle appearance without the worry of fading",
        },
      ],
      secondaryTextListStyle: "mainSecondaryTextList",
      button: false,
    },
    {
      id: 2,
      sizeCard: "largeCard",
      paddingCard: "mediumPadding",
      primaryText: "Two-layer Heat Rejecting Ceramic Tint",
      colorPrimaryText: "colorDarkPrimaryText",
      bannerBg: "bannerDark",
      bannerText: "BEST ULTIMATE PERFORMANCE",
      secondaryText:
        "Crafted for ultimate UV protection, dual-layer ceramic window tint ensures a cooler, more comfortable ride wherever you go",
      secondaryTextStyle: "darkColorSecondaryText",
      background: "accentBackground",
      primaryTextList: "Key Features:",
      primaryTextListStyle: "darkColor",
      secondaryTextList: [
        {
          id: 1,
          content:
            "Ultra-low heat transmission creates cool and comfortable vehicle interiors",
        },
        {
          id: 2,
          content:
            "Opt for the best UV and heat rejection with a light windshield tint, ensuring optimal results without compromising your vision",
        },
        {
          id: 3,
          content: "Preserves cellular signals, unlike metalized films that can disrupt connectivity",
        },
      ],
      secondaryTextListStyle: "darkSecondaryTextList",
      button: [
        {
          id: 1,
          background: "darkBackgroundBorderWhite",
          color: "whiteColor",
          size: "medimuSize",
          text: "CALL NOW",
          hover: "whiteHoverWhiteBorder",
        },
      ],
      buttonName: "TintingPackages",
    },
    {
      id: 3,
      sizeCard: "mediumcard",
      paddingCard: "mediumPadding",
      primaryText: "Ceramic Tint",
      colorPrimaryText: "colorMainPrimaryText",
      bannerBg: "bannerAccent",
      bannerText: "BETTER NANO-CERAMIC",
      secondaryText:
        "Crafted for peak UV protection, this window tint ensures a cooler, more comfortable ride wherever you go",
      secondaryTextStyle: "mainColorSecondaryText",
      background: "darkBackground",
      primaryTextList: "Key Features:",
      primaryTextListStyle: "accentColor",
      secondaryTextList: [
        {
          id: 1,
          content: "Offers SPF 1000-level UV protection.",
        },
        {
          id: 2,
          content: "Preserves cellular signals, unlike metalized films.",
        },
        {
          id: 3,
          content:
            "60%+ of solar heat and UV rejection for large reduction in cabin temperature",
        },
      ],
      secondaryTextListStyle: "mainSecondaryTextList",
      button: false,
    },
  ];

  const tintingBennefitsCard = [
    {
      id: 1,
      img: icontTintingBennefits1,
      text: "Blocks 98% solar heat for ultimate coolness.",
    },
    {
      id: 2,
      img: icontTintingBennefits2,
      text: "Reduces glare, enhancing drive safety.",
    },
    {
      id: 3,
      img: icontTintingBennefits3,
      text: "Adds privacy for peace of mind.",
    },
    {
      id: 4,
      img: icontTintingBennefits4,
      text: "Shields from harmful UV rays, prioritizing well-being.",
    },
    {
      id: 5,
      img: icontTintingBennefits5,
      text: "Enhances vehicle appeal for a stylish look.",
    },
    {
      id: 6,
      img: icontTintingBennefits6,
      text: "Preserves interior, ensuring longevity and beauty.",
    },
  ];

  const tintingCards = [
    {
      id: 1,
      sizeCard: "smallcard",
      styleCards: "alighnCentre",
      paddingCard: "smallPadding",
      background: "darkBackground",
      img: windowStripTinting,
      text: "Window Strip",
      button: [
        {
          id: 1,
          background: "darkBackgroundBorderWhite",
          color: "whiteColor",
          size: "medimuSize",
          text: "CALL NOW",
          hover: "whiteHoverWhiteBorder",
        },
      ],
      buttonName: "TintingCard",
    },
    {
      id: 2,
      sizeCard: "smallcard",
      styleCards: "alighnCentre",
      paddingCard: "smallPadding",
      background: "darkBackground",
      img: fullWindshieldTinting,
      text: "Front 2 window patch",
      button: [
        {
          id: 1,
          background: "darkBackgroundBorderWhite",
          color: "whiteColor",
          size: "medimuSize",
          text: "CALL NOW",
          hover: "whiteHoverWhiteBorder",
        },
      ],
      buttonName: "TintingCard",
    },
    {
      id: 3,
      sizeCard: "smallcard",
      styleCards: "alighnCentre",
      paddingCard: "smallPadding",
      background: "darkBackground",
      img: fullVeichleSurroundTinting,
      text: "Full windshield",
      button: [
        {
          id: 1,
          background: "darkBackgroundBorderWhite",
          color: "whiteColor",
          size: "medimuSize",
          text: "CALL NOW",
          hover: "whiteHoverWhiteBorder",
        },
      ],
      buttonName: "TintingCard",
    },
    {
      id: 4,
      sizeCard: "smallcard",
      styleCards: "alighnCentre",
      paddingCard: "smallPadding",
      background: "darkBackground",
      img: front2WindowPatchTinting,
      text: "Full veichle surround",
      button: [
        {
          id: 1,
          background: "darkBackgroundBorderWhite",
          color: "whiteColor",
          size: "medimuSize",
          text: "CALL NOW",
          hover: "whiteHoverWhiteBorder",
        },
      ],
      buttonName: "TintingCard",
    },
  ];

  return (
    <div>
      <BlurData primaryText="Be invisible and have strong security for your car." />
      <section className="wrapper-tinting-benefits">
        <h4 className="wrapper-benefits-primary-text">
          <p className="primary-text-tinting-benefits">DISCOVER</p>
          <span className="primary-styled-text-green primary-text-tinting-benefits">
            THE MAIN REASONS
          </span>
          <p className="primary-text-tinting-benefits">
            TO TINT TOUR WINDOWS AT DRIVEN CUSTOMS
          </p>
        </h4>
        <div className="wrapper-tinting-bennefits-card">
          {tintingBennefitsCard.map((item) => (
            <BennefitCard key={item.id} img={item.img} text={item.text} />
          ))}
        </div>
      </section>
      <section className="wrapper-tinting-banner wrapper-banner">
        <h4 className="wrapper-banner-primary-text">
          <span className="primary-styled-text-border-white">DISCOVER</span>
          <p className="primary-styled-text-green primary-text-tinting-packages">
            THREE PERFORMANCE
          </p>
          <span className="primary-styled-text-border-white">
            WINDOW TINT OPTIONS
          </span>
        </h4>
        <div className="wrapper-tinting-packages">
          {tintingPackages.map((item) => (
            <SelectCard
              key={item.id}
              styleCards={item.styleCards}
              sizeCard={item.sizeCard}
              paddingCard={item.paddingCard}
              primaryText={item.primaryText}
              colorPrimaryText={item.colorPrimaryText}
              bannerBg={item.bannerBg}
              bannerText={item.bannerText}
              secondaryText={item.secondaryText}
              secondaryTextStyle={item.secondaryTextStyle}
              background={item.background}
              primaryTextList={item.primaryTextList}
              primaryTextListStyle={item.primaryTextListStyle}
              secondaryTextList={item.secondaryTextList}
              secondaryTextListStyle={item.secondaryTextListStyle}
              button={item.button}
              buttonName={item.buttonName}
            />
          ))}
        </div>
      </section>
      <section className="wrapper-tintings-select-cards">
        <h4 className="wrapper-benefits-primary-text">
          <p className="primary-text-tinting-cards">
          Driven Customs offers a variety of tinting options to choose from.
          </p>
        </h4>
        <div className="wrapper-tinting-cards">
          {tintingCards.map((item) => (
            <SelectCard
              key={item.id}
              styleCards={item.styleCards}
              sizeCard={item.sizeCard}
              paddingCard={item.paddingCard}
              background={item.background}
              primaryTextImg={item.text}
              img={item.img}
              button={item.button}
              buttonName={item.buttonName}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Tinting;
