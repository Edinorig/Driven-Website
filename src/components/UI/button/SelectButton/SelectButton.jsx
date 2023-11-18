import React from "react";
import style from "./SelectButton.module.css";

const SelectButton = ({
  id,
  primaryText,
  styleButton,
  size,
  getButtonId,
  hover,
  isDisabled,
  quantityCards
}) => {
  const [hovered, setHovered] = React.useState(false);
  console.log(hover);
  return (
    <>
      <button
        disabled={isDisabled}
        className={`${style[styleButton]} ${style[size]} ${
          hovered ? style[hover] : ""
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {
          getButtonId(id);
        }}
      >
        <h5>
          <p>{primaryText}</p>
        </h5>
      </button>
    </>
  );
};

export default SelectButton;
