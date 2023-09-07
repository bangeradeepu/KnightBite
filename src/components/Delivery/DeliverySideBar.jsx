import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import './DeliverySideBar.css';

const DeliverySideBar = ({ children }) => {
  const [activeLink, setActiveLink] = useState('db') // Set the default active link

  // Function to handle link clicks and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  return (
    <div>
      <div className='Manage-sidenav'>
        {/* Add content for the Side page here */}
        <span>
        <b>
        <FontAwesomeIcon icon={faListCheck} /> Delivery
          
        </b>
      </span>
      
        <div>
          <br></br>
      
          <Link
            to='/deliveryboy/db'
            className={activeLink === 'db' ? 'active' : ''}
            onClick={() => handleLinkClick('db')}
          >
           Delivery Boys
          </Link>

        </div>
        <div>
          <Link
            to='/deliveryboy/vr'
            className={activeLink === 'vr' ? 'active' : ''}
            onClick={() => handleLinkClick('vr')}
          >
           Verify Registration
          </Link>
        </div>
        <div>
          <Link
            to='/deliveryboy/analytics'
            className={activeLink === 'analytics' ? 'active' : ''}
            onClick={() => handleLinkClick('analytics')}
          >
           Analytics
          </Link>
        </div>
        <div>
          <Link
            to='/deliveryboy/track'
            className={activeLink === 'track' ? 'active' : ''}
            onClick={() => handleLinkClick('track')}
          >
            Track
          </Link>
        </div>
        
      </div>
      {children}
    </div>
  )
}

export default DeliverySideBar;


