import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import './MenuSideBar.css';

const MenuSideBar = ({ children }) => {
  const [activeLink, setActiveLink] = useState('items') // Set the default active link

  // Function to handle link clicks and set the active link
  const handleLinkClick = (link) => {
    setActiveLink(link)
  }

  return (
    <div>
      <div className='sidenav'>
        {/* Add content for the Side page here */}
        <span>
        <b>
        <FontAwesomeIcon icon={faBook} /> Catalogue
          
        </b>
      </span>
      
        <div>
          <br></br>
      
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
      {children}
    </div>
  )
}

export default MenuSideBar;
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

