import Dropdown from './Dropdown';
import '../css/MenuItems.css'
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import arrow from '../assets/img/icons/down-arrow.svg'

const MenuItems = ({ items, depthLevel, mobileMenu, toggleComponent }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };



  return (
    <div className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            className='button-dropdown'
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}>
            {items.className === "headerMenu" ? (
              <h4> {items.title}
                {depthLevel > 0 ? <span>&raquo;</span> : <img className='down-arrow' src={arrow} alt='s' />}
              </h4>) :
              <h6> {items.title}
                <img className='down-arrow' src={arrow} alt='s' />
              </h6>
            }
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
            mobileMenu={mobileMenu}
            toggleComponent={toggleComponent}
          />
        </>
      ) : (
        items.className === "headerMenu" ? (
          <h4 key={items.title} onClick={() => toggleComponent(false)}>
            <Link to={items.url}>{items.title}</Link>
          </h4>
        ) : (
          <h6 key={items.title} onClick={() => toggleComponent(false)}>
            <Link to={items.url}>{items.title}</Link>
          </h6>
        ))}
    </div>
  );
};

export default MenuItems;