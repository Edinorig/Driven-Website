import React, { useState } from "react";
import style from "../css/Package.module.css";
import DescriptionContent from "./DescriptionContent";
import SelectButton from "./UI/button/SelectButton/SelectButton.jsx";
import PackagePriceCard from "./PackagePriceCard";
import CommonButton from "./UI/button/CommonButton/CommonButton";

const Package = ({ contentInformation, selectButtonsInformation, imgBg }) => {
  const [contentInformationId, setSelectedButtonId] = useState(1);
  const [button, setButton] = useState(selectButtonsInformation);

  const getButtonId = (id) => {
    setSelectedButtonId(id);
    console.log(button);
    setButton((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, styleButton: "accentBorder", isDisabled: true }
          : { ...item, styleButton: "accentBackground", isDisabled: false }
      )
    );
  };

  const contentInfo = contentInformation.find(
    (content) => content.id === contentInformationId
  );

  return (
    <div className={style.packageWrapper}>
      <div>
        <div className={style.wrapperTittle}>
          <div className={style.wrapperPrimaryText}>
            <h3>
              <p>{contentInfo.title}</p>
            </h3>
          </div>
          <div className={style.wrapperSecondaryText}>
            <h6 className={style.accentColor}>{contentInfo.subTitle}</h6>
          </div>
        </div>
        <div className={style.wrapperSelectButtons}>
          {button
            ? button.map((item) => (
                <SelectButton
                  key={item.id}
                  id={item.id}
                  primaryText={item.primaryText}
                  styleButton={item.styleButton}
                  size={item.size}
                  getButtonId={getButtonId}
                  hover={item.hover}
                  hoverText={item.hoverText}
                  textColor={item.textColor}
                  isDisabled={item.isDisabled}
                />
              ))
            : null}
        </div>
        <div className={style.wrapperContent}>
          <div className={style.wrapperTurnaround}>
            <h5>
              <p>TURNAROUND: {contentInfo.turnaround}</p>
            </h5>
          </div>
          <div className={style.wrapperDescription}>
            {contentInfo.content.map((item) => (
              <DescriptionContent
                key={item.id}
                primaryText={item.primaryText}
                secondaryText={item.secondaryText}
              />
            ))}
          </div>
          <div className={style.wrapperBenefitsCards}>
            {contentInfo.packagePriceCard.map((item) => (
              <PackagePriceCard
                key={item.id}
                color={item.color}
                primaryText={item.primaryText}
                price={item.price}
                backgroundCard={item.backgroundCard}
              />
            ))}
          </div>
          <div className={style.wrapperBtn}>
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
      </div>
              {imgBg ? (
        <div className={style.wrapperImg}>
          <img src={imgBg} alt="se" />
        </div>
      ) : null}
    </div>
  );
};

export default Package;
