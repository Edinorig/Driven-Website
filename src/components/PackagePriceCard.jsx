import React from "react";
import style from "../css/PackagePriceCard.module.css";

const PackagePriceCard = ({ backgroundCard, primaryText, price, color }) => {
  return (
    <div className={`${style[backgroundCard]} ${style.card}`}>
      <div className={style.wrapperText}>
        <h5>
          <p className={style[color]}>{primaryText}</p>
        </h5>
      </div>
      <div className={style.wrapperPrice}>
        <h5>
          <p className={`${style[color]} ${style.price}`}>{price}</p>
        </h5>
      </div>
    </div>
  );
};

export default PackagePriceCard;
