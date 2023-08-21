import './M_Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Mobile from './components/Home/Mobile'

const M_Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleSidebarToggle = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
    
    <div className="Msidebarframe">
      <div className="Msidebardiv">
        <div className="Msidebarlogo-and-knight-bite">
          <img
            className="Msidebarkb-logo"
            alt="Kb logo"
            src="https://generation-sessions.s3.amazonaws.com/03e7101f135674468dac007369ff50a9/img/kb-logo@2x.png"
          />
          <div className="Msidebargroup">
            <div className="Msidebartext-wrapper">Knight Bite</div>
            <img
              className="Msidebarvector"
              alt="Vector"
              src="https://generation-sessions.s3.amazonaws.com/03e7101f135674468dac007369ff50a9/img/vector.svg"
            />
          </div>
        </div>
        <div className="Msidebarsearch-bar">
          <div className="Msidebarsearch">
            <div className="Msidebaroverlap-group">
              <img
                className="Msidebarseach-icon"
                alt="Seach icon"
                src="https://generation-sessions.s3.amazonaws.com/03e7101f135674468dac007369ff50a9/img/seach-icon.svg"
              />
              <div className="Msidebartext-wrapper-2">Search</div>
            </div>
          </div>
        </div>
        <img
          className="Msidebarmenu-bar" onClick={handleSidebarToggle}
          alt="Menu bar"
          src="https://generation-sessions.s3.amazonaws.com/03e7101f135674468dac007369ff50a9/img/menu-bar.svg"
        />
        {/* <button className='menu-bar' onClick={handleSidebarToggle}>
              <FontAwesomeIcon icon={faBars} />
              </button> */}
      </div>
    </div>
    
    
    <Mobile />
      <div className={`Msidebarcontainer-fluid mt-3 ${isOpen ? 'Msidebarsidebar-open' : ''}`}>
        
        <div className={`Msidebarsidebar ${isOpen ? 'Msidebaractive' : ''}`}>
          {/* <div className='sd-header'>
            <h4 className='mb-0'>Sidebar Header</h4>
            <button className='btn btn-primary' onClick={handleSidebarToggle}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div> */}
          <div className="Msidebarandroid-large-side">
      <div className="Msidebargroup-wrapper">
        <div className="Msidebargroup">
          <div className="Msidebardiv">
            <img
              className="Msidebarnotification-group"
              alt="Notification group"
              src="Images/notification.svg"
            />
            <img
              className="Msidebarline"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/bb58b5285a3b1637590e164729ab0111/img/line-65.svg"
            />
            <img
              className="Msidebarimg"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/bb58b5285a3b1637590e164729ab0111/img/line-66.svg"
            />
            <img
              className="Msidebarep-close-bold"  onClick={handleSidebarToggle}
              alt="Ep close bold"
              src="https://generation-sessions.s3.amazonaws.com/bb58b5285a3b1637590e164729ab0111/img/ep-close-bold.svg"
            />
            <div className="Msidebargroup-2">
              <div className="Msidebarprofile">
                <div className="Msidebartext-wrapper">Sabil Bakhar</div>
              </div>
              
            </div>
            <div className="Msidebargroup-3">
              <img
                className="Msidebariconamoon-delivery"
                alt="Iconamoon delivery"
                src="https://generation-sessions.s3.amazonaws.com/bb58b5285a3b1637590e164729ab0111/img/iconamoon-delivery-fill.svg"
              />
              <img
                className="Msidebarmaterial-symbols"
                alt="Material symbols"
                src="https://generation-sessions.s3.amazonaws.com/bb58b5285a3b1637590e164729ab0111/img/material-symbols-home.svg"
              />
              <div className="Msidebartext-wrapper-2">Home</div>
              <div className="Msidebartext-wrapper-3">Menu</div>
              <div className="Msidebartext-wrapper-4">Orders</div>
              <div className="Msidebartext-wrapper-5">Delivery Boys</div>
              <div className="Msidebartext-wrapper-6">Manage</div>
              <div className="Msidebartext-wrapper-7">Accounts</div>
              <img
                className="Msidebarmaterial-symbols-2"
                alt="Material symbols"
                src="https://generation-sessions.s3.amazonaws.com/bb58b5285a3b1637590e164729ab0111/img/material-symbols-bookmark-manager-rounded.svg"
              />
              <img
                className="Msidebarmdi-accounts"
                alt="Mdi accounts"
                src="https://generation-sessions.s3.amazonaws.com/bb58b5285a3b1637590e164729ab0111/img/mdi-accounts.svg"
              />
              <img
                className="Msidebarmaterial-symbols-3"
                alt="Material symbols"
                src="https://generation-sessions.s3.amazonaws.com/bb58b5285a3b1637590e164729ab0111/img/material-symbols-draft-orders.svg"
              />
              <img
                className="Msidebarfluent-food"
                alt="Fluent food"
                src="https://generation-sessions.s3.amazonaws.com/bb58b5285a3b1637590e164729ab0111/img/fluent-food-20-filled.svg"
              />
            </div>
            <div className="Msidebargroup-4">
              <div className="Msidebartext-wrapper-8">Logout</div>
              <img
                className="Msidebarfa-solid-power-off"
                alt="Fa solid power off"
                src="https://generation-sessions.s3.amazonaws.com/bb58b5285a3b1637590e164729ab0111/img/fa-solid-power-off.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
   
        </div>
        {isOpen && (
          <div className='sidebar-overlay' onClick={handleSidebarToggle}></div>
        )}
      </div>
    </>
  )
}

export default M_Sidebar
