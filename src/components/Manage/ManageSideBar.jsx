import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import './ManageSideBar.css';

const ManageSideBar = ({ children }) => {
  const [activeLink, setActiveLink] = useState('items') // Set the default active link

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
        <FontAwesomeIcon icon={faListCheck} /> Manage
          
        </b>
      </span>
      
        <div>
          <br></br>
      
          <Link
            to='/manage/contactdetails'
            className={activeLink === 'items' ? 'active' : ''}
            onClick={() => handleLinkClick('items')}
          >
            Contact Details
          </Link>

        </div>
        <div>
          <Link
            to='/manage/ordernotifications'
            className={activeLink === 'categories' ? 'active' : ''}
            onClick={() => handleLinkClick('categories')}
          >
            Order Notifications
          </Link>
        </div>
        <div>
          <Link
            to='/manage/otpnotifications'
            className={activeLink === 'addongroups' ? 'active' : ''}
            onClick={() => handleLinkClick('addongroups')}
          >
            OTP Notifications
          </Link>
        </div>
        <div>
          <Link
            to='/manage/timingsettings'
            className={activeLink === 'addons' ? 'active' : ''}
            onClick={() => handleLinkClick('addons')}
          >
            Timing Settings
          </Link>
        </div>
        <div>
          <Link
            to='/manage/paymentsettings'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Payment Settings
          </Link>
        </div>
        <div>
          <Link
            to='/manage/deliverysettings'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Delivery Settings
          </Link>
        </div>
        <div>
          <Link
            to='/manage/outletsettings'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
           Outlet Settings
          </Link>
        </div>
        <div>
          <Link
            to='/manage/deliverysettings'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Delivery Settings
          </Link>
        </div>
        <div>
          <Link
            to='/manage/presets'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Presets
          </Link>
        </div>
        <div>
          <Link
            to='/manage/reviews'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Reviews
          </Link>
        </div>
        <div>
          <Link
            to='/manage/items'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Items
          </Link>
        </div>
        <div>
          <Link
            to='/manage/carousel'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Carousel
          </Link>
        </div>
        <div>
          <Link
            to='/manage/coupons'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Coupons
          </Link>
        </div>
        <div>
          <Link
            to='/manage/revenueanalytics'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Revenue Analytics
          </Link>
        </div>
        <div>
          <Link
            to='/manage/linkstripe'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Link Stripe
          </Link>
        </div>
        <div>
          <Link
            to='/manage/linkurbanpiper'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Link Urbanpiper
          </Link>
        </div>
        <div>
          <Link
            to='/manage/sfxdetails'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            SFX Details
          </Link>
        </div>
        <div>
          <Link
            to='/manage/possettings'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            POS Settings
          </Link>
        </div>
        <div>
          <Link
            to='/manage/dunzodetails'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Dunzo Details
          </Link>
        </div>
        <div>
          <Link
            to='/manage/invoices'
            className={activeLink === 'tags' ? 'active' : ''}
            onClick={() => handleLinkClick('tags')}
          >
            Invoices
          </Link>
        </div>
      </div>
      {children}
    </div>
  )
}

export default ManageSideBar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './MenuSideBar.css';

// const MenuSideBar = ({ children }) => {
//   const [activeLink, setActiveLink] = useState('section1') // Set the default active link

//   // Function to handle link clicks and set the active link
//   const handleLinkClick = (link) => {
//     setActiveLink(link)
//   }

//   return (
//     <div>
//       <div className='sidenav'>
//         {/* Add content for the Side page here */}
//         <div>
//           <Link
//             to='/menu/items'
//             className={activeLink === 'section1' ? 'active' : ''}
//             onClick={() => handleLinkClick('section1')}
//           >
//             Items
//           </Link>
//         </div>
//         <div>
//           <Link
//             to='/menu/categories'
//             className={activeLink === 'section2' ? 'active' : ''}
//             onClick={() => handleLinkClick('section2')}
//           >
//             Addon Groups
//           </Link>
//         </div>
//         <div>
//           <Link
//             to='/menu/addongroups'
//             className={activeLink === 'section3' ? 'active' : ''}
//             onClick={() => handleLinkClick('section3')}
//           >
//             Add Ons
//           </Link>
//         </div>
//       </div>
//       {children}
//     </div>
//   )
// }

// export default MenuSideBar;

