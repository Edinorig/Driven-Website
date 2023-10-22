import React from "react";
import BlurData from "../../components/BlurData";
import Footer from "../../components/Footer";
import "./Tinting.css";
import SelectCard from "../../components/SelectCard";

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
      buttonName: "TintingPackages"
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
  return (
    <div>
      <div className="wrapper-blur-data">
        <BlurData
          primaryText="Specialized Window Tint Film Installation Located In Chicago, IL"
          secondaryText="Specialized Window Tint Film Installation Located In Chicago, IL"
        />
      </div>
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
      <Footer />
    </div>
  );
};

export default Tinting;
