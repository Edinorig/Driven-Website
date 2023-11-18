import React, { useState } from "react";
import burgerMenuIcon from "../assets/img/icons/burgerMenu.svg";
import { menuItems } from "./menuItems";
import MenuItem from "./MenuItem";
import logo from "../assets/logo/logo.svg";
import closeIcon from "../assets/img/icons/close-icon.svg";
import "../css/BurgerMenu.css";
import instagram from "../assets/img/icons/instagram-boorger-menu.svg";
import facebook from "../assets/img/icons/facebook-borger-menu.svg";
import youtube from "../assets/img/icons/youtube-boorger-menu.svg";
import CommonButton from "./UI/button/CommonButton/CommonButton";
import phone from "../assets/img/icons/phone-icon.svg";
import location from "../assets/img/icons/location-icon.svg";
import email from "../assets/img/icons/email-icon.svg";

const BurgerMenu = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen((prevState) => !prevState);
  };

  const toggleComponent = (value) => {
    setIsBurgerMenuOpen(value);
  };

  console.log(isBurgerMenuOpen);

  return (
    <div className={`wrapper-menu`}>
      <div
        className={`wrapper-burger-menu ${isBurgerMenuOpen ? "open" : "close"}`}
      >
        <div className="header-burger-menu">
          <div className="wrapper-header">
            <img src={logo} alt="" className="logo" />
            <img src={closeIcon} alt="" onClick={toggleBurgerMenu} />
          </div>
          <nav className="hidden-nav-bar">
            <ul className="hidden-menus">
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItem
                    items={menu}
                    key={index}
                    depthLevel={depthLevel}
                    mobileMenu="leftSide"
                    handleClick={() => setIsBurgerMenuOpen(false)}
                    toggleComponent={toggleComponent}
                  />
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="footer-burger-menu">
          <div className="wrapper-cennect-us">
            <h5>
              <p>Connect with Driven Customs</p>
            </h5>
            <div className="wrapper-social-media">
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={youtube} alt="" />
            </div>
            <CommonButton
              color="greenText"
              background="blackBackgroundWhiteBorder"
              size="largeSize"
              hover="darkHoverWhiteBorder"
              text="BOOK NOW"
              link="contact-us"
            />
          </div>
          <div className="wrapper-find-us">
            <div className="wrapper-find-us-content">
              <img src={phone} alt="" className="find-us-icons" />
              <h5>
                <p>Call US</p>
              </h5>
            </div>
            <div className="wrapper-find-us-content middle-icon">
              <img
                src={location}
                alt=""
                className="find-us-icons"
              />
              <h5>
                <p>Find US</p>
              </h5>
            </div>
            <div className="wrapper-find-us-content">
              <img src={email} alt="" className="find-us-icons" />
              <h5><p> Email US</p></h5>
            </div>
          </div>
        </div>
      </div>
      <img
        onClick={toggleBurgerMenu}
        className="burger-menu"
        alt="seo"
        src={burgerMenuIcon}
      />
    </div>
  );
};

export default BurgerMenu;
