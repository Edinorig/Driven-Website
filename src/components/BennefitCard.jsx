import React from "react";
import "../css/BennefitCard.css"

const BennefitCard = ({ img, text }) => {
  return (
    <div className="wrapper-bennefit-card">
      <img src={img} alt="bennefits tinting"  className="icon-tinting"/>
      <div className="wrapper-bennefits-tinting-text">
        <h6>
          <p>{text}</p>
        </h6>
      </div>
    </div>
  );
};

export default BennefitCard;
