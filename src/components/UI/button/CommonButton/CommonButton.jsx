import React from "react";
import classes from "./CommonButton.module.css";
import "../../../../css/vars.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const CommonButton = ({ color, background, size, hover, text, link }) => {
  const [hovered, setHovered] = useState(false);

  let switchLinks = (buttonLink) => {
    switch (link) {
      case "contact-us":
        link = "/contact-us";
        break;
      case "services":
        link = "/services";
        break;
      case "learn-more":
        link = "/learn-more";
        break;
      case "call-now":
        link = "tel:+1-708-515-0171";
        break;
      default:
        link = "/";
        break;
    }
    return link;
  };

  return (
    <Link to={switchLinks(link)}>
      <button
        className={`${classes.button} ${classes[color]} ${classes[size]} ${
          classes[background]
        } ${hovered ? classes[hover] : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p>{text}</p>
      </button>
    </Link>
  );
};

export default CommonButton;
