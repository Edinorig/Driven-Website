import React from 'react';
import '../css/Dropdown.css'
import MenuItems from './MenuItem';

const Dropdown = ({ submenus, dropdown, depthLevel, mobileMenu }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  console.log(dropdownClass);
  console.log(mobileMenu);
  return (
    <ul className={`dropdown ${dropdownClass} ${mobileMenu} ${dropdown ? "show" : ""}`}>
      <div className='wrapper-menu-Items'>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <MenuItems items={submenu} key={index} depthLevel={depthLevel} mobileMenu={mobileMenu}/>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Dropdown;
