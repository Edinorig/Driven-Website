import React from "react";
import InformationCard from "./InformationCard";
import CommonButton from "./UI/button/CommonButton/CommonButton";
import style from "../css/InformationCardBanner.module.css"

const InformationCardBanner = ({informationCard}) => {
  return (
    <div className={style.wrapperBannerCardInformation}>
      <div className={style.wrapperPrimaryTextStyledGreen}>
        <h1 className={style.primaryTextStyledGreen}>
          <p>Why Should You Consider PPF For Your Ride ?</p>
        </h1>
      </div>
      <div className={style.wrapperInformationCards}>
        {informationCard.map((item) => (
          <InformationCard
            key={item.id}
            img={item.imgSrc}
            primaryText={item.primaryText}
            secondaryText={item.secondaryText}
          />
        ))}
      </div>
      <div className={style.wrapperButtonInformationCard}>
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
  );
};

export default InformationCardBanner;
