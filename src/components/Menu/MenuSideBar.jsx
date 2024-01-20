import React, { useState,useEffect  } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook,
  faXmark,
  faBars, } from '@fortawesome/free-solid-svg-icons';
import './MenuSideBar.css';

const MenuSideBar = ({ children }) => {
  // Active Link
  const [activeLink, setActiveLink] = useState('items');
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };  

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/menu/')) {
      setActiveLink(currentPath.replace('/menu/', ''));
    } else {
      setActiveLink(currentPath.substr(1));
    }
  }, []);


  
  const [sideNavRight, setSideNavRight] = useState(-380);

  const openNav = () => {
    setSideNavRight(0);
  };

  const closeNav = () => {
    setSideNavRight(-380);
  };
  return (
    <div>
      <div className='d-sidenav'>
  
        <span>
        <b>
        <FontAwesomeIcon icon={faBook} /> Catalogue
          
        </b>
      </span>
      <div className="d-sidenav-containers">
      <div>
          <Link
            to='/menu/items'
            className={activeLink === 'items' ? 'active' : ''}
            onClick={() => handleLinkClick('items')}
          >
            Items
          </Link>

        </div>
        <div>
          <Link
            to='/menu/categories'
            className={activeLink === 'categories' ? 'active' : ''}
            onClick={() => handleLinkClick('categories')}
          >
            Categories
          </Link>
        </div>
        <div>
          <Link
            to='/menu/addongroups'
            className={activeLink === 'addongroups' ? 'active' : ''}
            onClick={() => handleLinkClick('addongroups')}
          >
            Addon Groups
          </Link>
        </div>
        <div>
          <Link
            to='/menu/addons'
            className={activeLink === 'addons' ? 'active' : ''}
            onClick={() => handleLinkClick('addons')}
          >
            Add Ons
          </Link>
        </div>
        <div>
          <Link
            to='/menu/tags'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Tags
          </Link>
        </div>
      </div>
      
      </div>
      {/* Phone view */}
      <div className="p-nav-open f-20" onClick={openNav}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      
      <div
        className="p-sidenav"
        id="mySidenav"
        style={{ right: sideNavRight }}
        onClick={closeNav} 
      >
        <div>
          <div className="f-24">
            <FontAwesomeIcon icon={faXmark} onClick={closeNav} />
          </div>
          <br />
          <div className="p-sidenav-header">Menu</div>
          <br />
          <Link
            to='/menu/items'
            className={activeLink === 'items' ? 'txt-purple' : 'txt-black'}
            onClick={() => handleLinkClick('items')}
          >
            Items
          </Link>
        </div>
        <div>
        <Link
            to='/menu/categories'
            className={activeLink === 'categories' ? 'txt-purple' : 'txt-black'}
            onClick={() => handleLinkClick('categories')}
          >
            Categories
          </Link>
        </div>
        <div>
          <Link
            to='/menu/addongroups'
            className={activeLink === 'addongroups' ? 'txt-purple' : 'txt-black'}
            onClick={() => handleLinkClick('addongroups')}
          >
            Addon Groups
          </Link>
        </div>
        <div>
          <Link
            to='/menu/addons'
            className={activeLink === 'addons' ? 'txt-purple' : 'txt-black'}
            onClick={() => handleLinkClick('addons')}
          >
            Add Ons
          </Link>
        </div>
        <div>
          <Link
            to='/menu/tags'
            className={activeLink === 'tags' ? 'txt-purple' : 'txt-black'}
            onClick={() => handleLinkClick('tags')}
          >
            Tags
          </Link>
        </div>
      </div>
      {children}
    </div>
  )
}

export default MenuSideBar;
