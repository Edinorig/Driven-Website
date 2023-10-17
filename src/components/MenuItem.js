import Dropdown from './Dropdown';
import '../css/MenuItems.css'
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  console.log(items);
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
    <li className="menu-items"
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
              <h4> {items.title}{''}
                {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
              </h4>) :
              <h6> {items.title}{''}
                {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
              </h6>
            }
          </button>
          <Dropdown
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel} />
        </>
      ) : (
        items.className === "headerMenu" ?
          (<h4 key={items.title}>
            <Link to={items.url}>{items.title}</Link>
          </h4>) :
          <h6 key={items.title}>
            <Link to={items.url}>{items.title}</Link>
          </h6>
      )}
    </li>
  );
};

export default MenuItems;