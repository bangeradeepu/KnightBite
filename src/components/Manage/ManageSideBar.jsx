import React, { useState } from "react";
import { Link } from "react-router-dom";
import './ManageSideBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { GrCubes  } from 'react-icons/gr';

const AccountsSidebar = ({ children }) => {
  const [activeLink, setActiveLinks] = useState({
    parent: "users",
    child: "",
  });

  const handleLinkClick = (link, type) => {
    if (type === "parent") {
      setActiveLinks({ parent: link, child: "" });
      setIsOutletsOpen(false);
      setIsOnlineOrderingOpen(false);
      setIsTaxAndChargesOpen(false);
      setIsAppearanceOpen(false);
    } else {
      setActiveLinks({ ...activeLink, child: link });
      
    }
    
  };

  const [sideNavRight, setSideNavRight] = useState(-380);

  const openNav = () => {
    setSideNavRight(0);
  };

  const closeNav = () => {
    setSideNavRight(-380);
  };

  // Open sub menu
  const [isOutletsOpen, setIsOutletsOpen] = useState(false);
  const [isOnlineOrderingOpen, setIsOnlineOrderingOpen] = useState(false);
  const [isTaxandChargesOpen, setIsTaxAndChargesOpen] = useState(false);
  const [isAppearanceOpen, setIsAppearanceOpen] = useState(false);

  const toggleMenu = (menuName) => {
    // Close all menus
    setIsOutletsOpen(false);
    setIsOnlineOrderingOpen(false);
    setIsTaxAndChargesOpen(false);
    setIsAppearanceOpen(false);
  
    // Open the selected menu
    if (menuName === "outlets") {
      setIsOutletsOpen(true);
    } else if (menuName === "onlineOrdering") {
      setIsOnlineOrderingOpen(true);
    } else if (menuName === "taxAndCharges") {
      setIsTaxAndChargesOpen(true);
    } else if (menuName === "appearance") {
      setIsAppearanceOpen(true);
    }
  };
  return (
    <div className="ManageSidebar">
      <div className="d-sidenav">
        <span>
          <b>
            Manage
          </b>
        </span>
        <div className="d-sidenav-containers" style={{paddingLeft:'1vw',paddingTop:'0vw',marginBottom:'15vw',width:'20vw'}}>
        <div className="menu-container">
      <div className="menu-items">
        <div className="menu-item">
        <Link
            to="/manage/users"
            className={activeLink.parent === "users" ? "active" : ""}
            onClick={() => handleLinkClick("users", "parent")}
          >
            Users
          </Link>
          <Link
            to="/manage/OrderNotifications"
            className={activeLink.parent === "OrderNotifications" ? "active" : ""}
            onClick={() => handleLinkClick("OrderNotifications", "parent")}
          >
            Order Notifications
          </Link>
          <Link
            to="/manage/TimignSettings"
            className={activeLink.parent === "TimignSettings" ? "active" : ""}
            onClick={() => handleLinkClick("TimignSettings", "parent")}
          >
            Timing Settings
          </Link>
        </div>
        <div className="menu-item">
          <Link 
           className={activeLink.parent === "Outlets" ? "active" : ""}
           onClick={() => {
             handleLinkClick("Outlets", "parent");
             toggleMenu("outlets");
           }}
          >
            Outlets
          </Link>
          {isOutletsOpen && (
            <div className="sub-items">
              <div className="sub-item d-flex">
              <Link
            to="/manage/OutletsAddBrand"
            className={activeLink.child === "OutletsAddBrand" ? "active" : ""}
            onClick={() => handleLinkClick("OutletsAddBrand", "child")}
          >
            Add Brand
          </Link>
              </div>
              <div className="sub-item d-flex">
              <Link
            to="/manage/OutletsConfigOutlets"
            className={activeLink.child === "OutletsConfigOutlets" ? "active" : ""}
            onClick={() => handleLinkClick("OutletsConfigOutlets", "child")}
          >
            Configure Outlets
          </Link>
              </div>
            </div>
          )}
        </div>
        <Link
            to="/manage/CustomerData"
            className={activeLink.parent === "CustomerData" ? "active" : ""}
            onClick={() => handleLinkClick("CustomerData", "parent")}
          >
            Customer data
          </Link>
        <div className="menu-item">
          <Link 
          className={activeLink.parent === "OnlineOrdering" ? "active" : ""}
          onClick={() => {
            handleLinkClick("OnlineOrdering", "parent");
            toggleMenu("onlineOrdering");
          }}
          >
            Online Ordering
          </Link>
          {isOnlineOrderingOpen && (
           <div className="sub-items">
           <div className="sub-item d-flex">
           <Link
            to="/manage/OnOrderingPaymentSettings"
            className={activeLink.child === "OnOrderingPaymentSettings" ? "active" : ""}
            onClick={() => handleLinkClick("OnOrderingPaymentSettings", "child")}
          >
            Payment Settings
          </Link>
           </div>
           <div className="sub-item d-flex">
           <Link
            to="/manage/OnOrderingDeliverySettings"
            className={activeLink.child === "OnOrderingDeliverySettings" ? "active" : ""}
            onClick={() => handleLinkClick("OnOrderingDeliverySettings", "child")}
          >
            Delivery Settings
          </Link>
           </div>
           <div className="sub-item d-flex">
           <Link
            to="/manage/OnOrderingOrderPauseMessage"
            className={activeLink.child === "OnOrderingOrderPauseMessage" ? "active" : ""}
            onClick={() => handleLinkClick("OnOrderingOrderPauseMessage", "child")}
          >
            Order Pause Message
          </Link>
           </div>
           <div className="sub-item d-flex">
           <Link
            to="/manage/OnOrderingReviews"
            className={activeLink.child === "OnOrderingReviews" ? "active" : ""}
            onClick={() => handleLinkClick("OnOrderingReviews", "child")}
          >
            Reviews
          </Link>
           </div>
           <div className="sub-item d-flex">
           <Link
            to="/manage/OnOrderingBanner"
            className={activeLink.child === "OnOrderingBanner" ? "active" : ""}
            onClick={() => handleLinkClick("OnOrderingBanner")}
          >
            Banner
          </Link>
           </div>
           <div className="sub-item d-flex">
           <Link
            to="/manage/OnOrderingCandO"
            className={activeLink.child === "OnOrderingCandO" ? "active" : ""}
            onClick={() => handleLinkClick("OnOrderingCandO", "child")}
          >
            Coupons & Offers
          </Link>
           </div>
           <div className="sub-item d-flex">
           <Link
            to="/manage/OnOrderingAppNotification"
            className={activeLink.child === "OnOrderingAppNotification" ? "active" : ""}
            onClick={() => handleLinkClick("OnOrderingAppNotification", "child")}
          >
            App Notification
          </Link>
           </div>
         </div>
          )}
        </div>
        <Link
            to="/manage/TableOrdering"
            className={activeLink.parent === "TableOrdering" ? "active" : ""}
            onClick={() => handleLinkClick("TableOrdering", "parent")}
          >
            Table Ordering
          </Link>
    
        <div className="menu-item">
        <Link
              className={activeLink.parent === "TaxCharges" ? "active" : ""}
            onClick={() => {
              handleLinkClick("TaxCharges", "parent");
              toggleMenu("taxAndCharges");
            }}
          >
            Tax and Charges
          </Link>
          {isTaxandChargesOpen && (
            <div className="sub-items">
            <div className="sub-item d-flex">
            <Link
            to="/manage/TaxChargesTax"
            className={activeLink.child === "TaxChargesTax" ? "active" : ""}
            onClick={() => handleLinkClick("TaxChargesTax", "child")}
          >
            Tax
          </Link>
            </div>
            <div className="sub-item d-flex">
            <Link
            to="/manage/TaxChargesOC"
            className={activeLink.child === "TaxChargesOC" ? "active" : ""}
            onClick={() => handleLinkClick("TaxChargesOC", "child")}
          >
            Other Charges
          </Link>
            </div>
          </div>
          )}
           <Link
             className={activeLink.parent === "Appearance" ? "active" : ""}
             onClick={() => {
               handleLinkClick("Appearance", "parent");
               toggleMenu("appearance");
             }}
          >
            Appearance
          </Link>
          {isAppearanceOpen && (
            <div className="sub-items">
            <div className="sub-item d-flex">
            <Link
            to="/manage/AppearanceOrderAppTheme"
            className={activeLink.child === "AppearanceOrderAppTheme" ? "active" : ""}
            onClick={() => handleLinkClick("AppearanceOrderAppTheme", "child")}
          >
            Ordering App Theme
          </Link>
            </div>
            <div className="sub-item d-flex">
            <Link
            to="/manage/AppearanceInvoiceHandF"
            className={activeLink.child === "AppearanceInvoiceHandF" ? "active" : ""}
            onClick={() => handleLinkClick("AppearanceInvoiceHandF", "child")}
          >
            Invoice Header / Footer
          </Link>
            </div>
          </div>
          )}
          <Link
            to="/manage/MarketingLoyality"
            className={activeLink.parent === "MarketingLoyality" ? "active" : ""}
            onClick={() => handleLinkClick("MarketingLoyality", "parent")}
          >
            Marketing / Loyalty
          </Link>
          <Link
            to="/manage/ReportAnalytics"
            className={activeLink.parent === "ReportAnalytics" ? "active" : ""}
            onClick={() => handleLinkClick("ReportAnalytics", "parent")}
          >
            Report / Analytics
          </Link>
          <Link
            to="/manage/Integrations"
            className={activeLink.parent === "Integrations" ? "active" : ""}
            onClick={() => handleLinkClick("Integrations", "parent")}
          >
            Integrations
          </Link>
          <Link
            to="/manage/POSsettings"
            className={activeLink.parent === "POSsettings" ? "active" : ""}
            onClick={() => handleLinkClick("POSsettings", "parent")}
          >
            POS Settings
          </Link>
          <Link
            to="/manage/BillinInvoice"
            className={activeLink.parent === "BillinInvoice" ? "active" : ""}
            onClick={() => handleLinkClick("BillinInvoice", "parent")}
          >
            Billing / Invoices
          </Link>
        </div>
      </div>
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
      >
        <div>
          <div className="f-24">
            <FontAwesomeIcon icon={faXmark} onClick={closeNav} />
          </div>
          <br />
          <div className="p-sidenav-header">Manage</div>
          <br />
          
        </div>
        <div className="scrollable-contentt-sidenav-p">
        <div>
          <Link
           to="/manage/users"
           className={activeLink.parent === "users" ? "txt-purple" : "txt-black"}
           onClick={() => {handleLinkClick("users", "parent"); closeNav();}}
          >
            Users
          </Link>
          
        </div>
        <div>
        <Link
            to="/manage/OrderNotifications"
            className={activeLink.parent === "OrderNotifications" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("OrderNotifications", "parent"); closeNav();}}
          >
            Order Notifications
          </Link>
        </div>
        <div>
        <Link
            to="/manage/TimignSettings"
            className={activeLink.parent === "TimignSettings" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("TimignSettings", "parent"); closeNav();}}
          >
            Timing Settings
          </Link>
        </div>
        <div>
        <Link 
           className={activeLink.parent === "Outlets" ? "txt-purple" : "txt-black"}
           onClick={() => {
             handleLinkClick("Outlets", "parent");
             toggleMenu("outlets");
           }}
          >
            Outlets
          </Link>
          
        </div>
        {isOutletsOpen && (
        <div className="sub-menu-p">
          <div>
          <Link
            to="/manage/OutletsAddBrand"
            className={activeLink.child === "OutletsAddBrand" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("OutletsAddBrand", "child"); closeNav();}}
          >
            Add Brand
          </Link>
          
        </div>
        <div>
        <Link
            to="/manage/OutletsConfigOutlets"
            className={activeLink.child === "OutletsConfigOutlets" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("OutletsConfigOutlets", "child"); closeNav();}}
          >
            Configure Outlets
          </Link>
        </div>
    
        </div>
        )}
        <div>
        <Link
            to="/manage/CustomerData"
            className={activeLink.parent === "CustomerData" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("CustomerData", "parent"); closeNav();}}
          >
            Customer data
          </Link>
        </div>
        <div>
        <Link 
          className={activeLink.parent === "OnlineOrdering" ? "txt-purple" : "txt-black"}
          onClick={() => {
            handleLinkClick("OnlineOrdering", "parent");
            toggleMenu("onlineOrdering");
          }}
          >
            Online Ordering
          </Link>
        </div>
        {isOnlineOrderingOpen && (
          <div className="sub-menu-p">
            <div>
            <Link
            to="/manage/OnOrderingPaymentSettings"
            className={activeLink.child === "OnOrderingPaymentSettings" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("OnOrderingPaymentSettings", "child"); closeNav();}}
          >
            Payment Settings
          </Link>
            </div>
            <div>
            <Link
            to="/manage/OnOrderingDeliverySettings"
            className={activeLink.child === "OnOrderingDeliverySettings" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("OnOrderingDeliverySettings", "child"); closeNav();}}
          >
            Delivery Settings
          </Link>
            </div>
            <div>
            <Link
            to="/manage/OnOrderingOrderPauseMessage"
            className={activeLink.child === "OnOrderingOrderPauseMessage" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("OnOrderingOrderPauseMessage", "child"); closeNav();}}
          >
            Order Pause Message
          </Link>
            </div>
            <div>
            <Link
            to="/manage/OnOrderingReviews"
            className={activeLink.child === "OnOrderingReviews" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("OnOrderingReviews", "child"); closeNav();}}
          >
            Reviews
          </Link>
            </div>
            <div>
            <Link
            to="/manage/OnOrderingBanner"
            className={activeLink.child === "OnOrderingBanner" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("OnOrderingBanner"); closeNav();}}
          >
            Banner
          </Link>
            </div>
            <div>
            <Link
            to="/manage/OnOrderingCandO"
            className={activeLink.child === "OnOrderingCandO" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("OnOrderingCandO", "child"); closeNav();}}
          >
            Coupons & Offers
          </Link>
            </div>
            <div>
            <Link
            to="/manage/OnOrderingAppNotification"
            className={activeLink.child === "OnOrderingAppNotification" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("OnOrderingAppNotification", "child"); closeNav();}}
          >
            App Notification
          </Link>
            </div>
          </div>
        )}
        <div>
        <Link
            to="/manage/TableOrdering"
            className={activeLink.parent === "TableOrdering" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("TableOrdering", "parent"); closeNav();}}
          >
            Table Ordering
          </Link>
        </div>
        <div>
        <Link
              className={activeLink.parent === "TaxCharges" ? "txt-purple" : "txt-black"}
            onClick={() => {
              handleLinkClick("TaxCharges", "parent");
              toggleMenu("taxAndCharges");
            }}
          >
            Tax and Charges
          </Link>
        </div>
        {isTaxandChargesOpen && (
          <div className="sub-menu-p">
            <div>
            <Link
            to="/manage/TaxChargesTax"
            className={activeLink.child === "TaxChargesTax" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("TaxChargesTax", "child"); closeNav();}}
          >
            Tax
          </Link>
            </div>
            <div>
            <Link
            to="/manage/TaxChargesOC"
            className={activeLink.child === "TaxChargesOC" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("TaxChargesOC", "child"); closeNav();}}
          >
            Other Charges
          </Link>
            </div>
          </div>
        )}
        <div>
        <Link
             className={activeLink.parent === "Appearance" ? "txt-purple" : "txt-black"}
             onClick={() => {
               handleLinkClick("Appearance", "parent");
               toggleMenu("appearance");
             }}
          >
            Appearance
          </Link>
        </div>
        {isAppearanceOpen && (
            <div className="sub-menu-p">
              <div>
              <Link
            to="/manage/AppearanceOrderAppTheme"
            className={activeLink.child === "AppearanceOrderAppTheme" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("AppearanceOrderAppTheme", "child"); closeNav();}}
          >
            Ordering App Theme
          </Link>
              </div>
              <div>
              <Link
            to="/manage/AppearanceInvoiceHandF"
            className={activeLink.child === "AppearanceInvoiceHandF" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("AppearanceInvoiceHandF", "child"); closeNav();}}
          >
            Invoice Header / Footer
          </Link>
              </div>
            </div>
        )}
        <div>
        <Link
            to="/manage/MarketingLoyality"
            className={activeLink.parent === "MarketingLoyality" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("MarketingLoyality", "parent"); closeNav();}}
          >
            Marketing / Loyalty
          </Link>
        </div>
        <div>
        <Link
            to="/manage/ReportAnalytics"
            className={activeLink.parent === "ReportAnalytics" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("ReportAnalytics", "parent"); closeNav();}}
          >
            Report / Analytics
          </Link>
        </div>
        <div>
        <Link
            to="/manage/Integrations"
            className={activeLink.parent === "Integrations" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("Integrations", "parent"); closeNav();}}
          >
            Integrations
          </Link>
        </div>
        <div>
        <Link
            to="/manage/POSsettings"
            className={activeLink.parent === "POSsettings" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("POSsettings", "parent"); closeNav();}}
          >
            POS Settings
          </Link>
        </div>
        <div>
        <Link
            to="/manage/BillinInvoice"
            className={activeLink.parent === "BillinInvoice" ? "txt-purple" : "txt-black"}
            onClick={() => {handleLinkClick("BillinInvoice", "parent"); closeNav();}}
          >
            Billing / Invoices
          </Link>
        </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default AccountsSidebar;
