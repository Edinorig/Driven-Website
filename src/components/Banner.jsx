import React from "react";
import styles from "../css/Banner.module.css";
import CommonButton from "./UI/button/CommonButton/CommonButton";

const Banner = ({accentText, textBorderLine, content}) => {
  return (
    <div className={styles.wrapperBanner}>
      <div className={styles.wrapperTittle}>
        <h4>
          <p><span className={styles.textAccent}>{accentText}</span><span className={styles.textBorderLine}>{textBorderLine}</span></p>
        </h4>
      </div>
      <div className={styles.wrapperContent}>
        <h6>
          <p className={styles.contentText}>{content}</p>
        </h6>
      </div>
      <div className={styles.wrapperButton}>
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

export default Banner;
