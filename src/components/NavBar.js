import React from 'react';
import '../css/NavBar.css'
import '../assets/font/font.css'
import { menuItems } from './menuItems';
import MenuItem from './MenuItem';
/* import downArrow from '../assets/img/icons/down-arrow.svg' */

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItem items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
}

export default NavBar;
