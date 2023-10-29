import React from "react";
import style from "../css/PackageBennefit.module.css";
import CommonButton from "./UI/button/CommonButton/CommonButton";

const PackageBennefit = ({title, content}) => {
  return (
    <div className={style.wrapperPackageBennefit}>
      <div>
        <div className={style.wrapperTittle}>
          <h4>
            <p>{title}</p>
          </h4>
        </div>
        <div className={style.wrapperDescription}>
            <h6><p className={style.contentText}>{content}</p></h6>
        </div>
        <div className={style.wrapperButton}>
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
  );
};

export default PackageBennefit;
