import React, { useEffect, useState } from 'react';
import '../css/NavBar.css';
import '../assets/font/font.css';
import { menuItems } from './menuItems';
import MenuItem from './MenuItem';

const NavBar = ({ stateBurgerMenu }) => {
  const [openLink, setOpenLink] = useState(stateBurgerMenu);

  useEffect(() => {
    setOpenLink(stateBurgerMenu);
  }, [stateBurgerMenu]);


  return (
    <>
      <nav className='nav-bar'>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItem items={menu} key={index} depthLevel={depthLevel} />;
          })}
        </ul>
      </nav>
      <nav className={`hidden-nav-bar ${openLink ? "open" : "close"}`}>
        <ul className="hidden-menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItem items={menu} key={index} depthLevel={depthLevel} mobileMenu="leftSide"/>;
          })}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
