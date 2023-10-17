import React from 'react';
/* import { Link } from 'react-router-dom' */
import '../css/NavBar.css'
import '../assets/font/font.css'
import { menuItems } from './menuItems';
import MenuItem from './MenuItem';
/* import downArrow from '../assets/img/icons/down-arrow.svg' */

const NavBar = () => {
  console.log(menuItems);
  return (
    <nav className='nav-bar'>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItem items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>

      {/*             <div className='midl-side'>
                <Link to={"/"} className='navBar-menu'>HOME</Link>
                <Link to={"/services"} className='navBar-menu services-link'><h5>SEARVICES</h5><img alt=''src={downArrow}></img></Link>
                <Link to={"/contact-us"} className='navBar-menu'><h5>CONTACT US</h5></Link>
                <Link to={"/learn-more"} className='navBar-menu'><h5>LEARN MORE</h5> </Link>
            </div>
            <div className='left-side'>
            </div>  */}
    </nav>
  );
}

export default NavBar;
