import React from 'react';
import '../css/Dropdown.css'
import MenuItems from './MenuItem';

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  console.log("this is submenu" + submenus);
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  console.log(submenus);
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      <div className='wrapper-menu-Items'>
        {submenus.map((submenu, index) => (
          <li key={index} className="menu-items">
            <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default Dropdown;
