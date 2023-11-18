import React from 'react';
import '../css/NavBar.css';
import '../assets/font/font.css';
import { menuItems } from './menuItems';
import MenuItem from './MenuItem';

const NavBar = ({ stateMenu }) => {

  return (
    <div className={`wrapper-navbar ${stateMenu ? "open" : "close"}`}>
      <nav className='nav-bar'>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
            return <MenuItem items={menu} key={index} depthLevel={depthLevel} />;
          })}
        </ul>
      </nav>
    </div>

  );

}

export default NavBar;
