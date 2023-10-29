import React from "react";
import style from "../css/DescriptionContent.module.css";

const DescriptionContent = ({primaryText, secondaryText}) => {
  return (
    <div>
      <div className={style.wrapperPrimaryText}>
        <h5>
          <p className={style.accentColor}>{primaryText}</p>
        </h5>
      </div>
      <div className={style.wrapperSecondaryText}>
        <h6>
          <p className={style.alighnText}>{secondaryText}</p>
        </h6>
      </div>
    </div>
  );
};

export default DescriptionContent;
