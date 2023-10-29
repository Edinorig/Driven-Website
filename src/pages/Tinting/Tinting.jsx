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
        "When it comes to appearance and affordability, color stable dyed window tint is your top choice.",
      secondaryTextStyle: "mainColorSecondaryText",
      background: "darkBackground",
      primaryTextList: "Key Features:",
      primaryTextListStyle: "accentColor",
      secondaryTextList: [
        {
          id: 1,
          content: "Moderate glare reduction",
        },
        {
          id: 2,
          content: "Improve vehicle appearance without fading",
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
      bannerText: "BETTER NANO-CERAMIC",
      secondaryText:
        "Designed for maximum UV protection, a dual-layer ceramic window tint can keep your vehicle cooler & more comfortable wherever you're headed.",
      secondaryTextStyle: "darkColorSecondaryText",
      background: "accentBackground",
      primaryTextList: "Key Features:",
      primaryTextListStyle: "darkColor",
      secondaryTextList: [
        {
          id: 1,
          content:
            "Ultra low heat transmission to interior of vehicle resulting in cool interiors",
        },
        {
          id: 2,
          content:
            "The best available UV and heat rejection. Use a light shade of tint on your windshield for the best possible result without compromising your vision",
        },
        {
          id: 3,
          content: "Won't block cellular signals like metalized films do",
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
        "Designed for maximum UV protection, this window tint can keep your vehicle cooler & more comfortable wherever you're headed.",
      secondaryTextStyle: "mainColorSecondaryText",
      background: "darkBackground",
      primaryTextList: "Key Features:",
      primaryTextListStyle: "accentColor",
      secondaryTextList: [
        {
          id: 1,
          content: "Offer UV protection equalling SPF 1,000",
        },
        {
          id: 2,
          content: "Won't block cellular signals like metalized films do",
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
      text: "Blocks up to 98% of Solar Infrared Heat",
    },
    {
      id: 2,
      img: icontTintingBennefits2,
      text: "Reduces Sun Glare for Safer Driving",
    },
    {
      id: 3,
      img: icontTintingBennefits3,
      text: "Offers Greater Privacy",
    },
    {
      id: 4,
      img: icontTintingBennefits4,
      text: "Protects passengers from harmful UV Rays",
    },
    {
      id: 5,
      img: icontTintingBennefits5,
      text: "Improves Your Vehicle's Appearance",
    },
    {
      id: 6,
      img: icontTintingBennefits6,
      text: "Protects Your Vehicles Interior",
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
      <BlurData
        primaryText="Specialized Window Tint Film Installation Located In Chicago, IL"
        secondaryText="Specialized Window Tint Film Installation Located In Chicago, IL"
      />
      <section className="wrapper-tinting-benefits">
        <h4 className="wrapper-benefits-primary-text">
          <p className="primary-text-tinting-benefits">THE</p>
          <span className="primary-styled-text-green primary-text-tinting-benefits">
            TOP REASONS
          </span>
          <p className="primary-text-tinting-benefits">
            TO GET YOUR WINDOWS TINTED AT CHICAGO AUTO PROS
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
          <p className="primary-styled-text-green primary-text-tinting-packages">
            THREE TYPES
          </p>
          <span className="primary-styled-text-border-white">
            OF PERFORMANCE WINDOW TINT
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
            Numerous Options for Tinting Available at Chicago Auto Pros
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
