import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link, useLocation  } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from '@mui/material/DialogTitle';
import Home from "./components/Home/Home";
import Side from "./components/Menu/MenuSideBar";
import "./YourComponent.css";
import Head from "./components/Mains/Head";
import Items from "./components/Menu/Items";
import Categories from "./components/Menu/Categories";
import AddOns from "./components/Menu/AddOns";
import AddonGroups from "./components/Menu/AddonGroups";
import Tags from "./components/Menu/Tags";
import MenuSideBar from "./components/Menu/MenuSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { GoHome } from "react-icons/go";
import { LuMenuSquare,LuSettings } from "react-icons/lu";
import { CgBowl } from "react-icons/cg";
import { TbUserCog,TbUser } from "react-icons/tb";
import { BiHomeAlt2 } from "react-icons/bi";

import {
  faXmark,
  faBars,
  faHouse,
  faUtensils,
  faMotorcycle,
  faPeopleRoof,
  faListCheck,
  faLocationDot,
  faBoxesStacked,
  faStore,
} from "@fortawesome/free-solid-svg-icons";
import CreateNewItem from "./components/Menu/CreateNewItem";
import CreateNewAddons from "./components/Menu/CreateNewAddons";
import CreateNewAddonGroups from "./components/Menu/CreateNewAddonGroups";
import ManageSideBar from "./components/Manage/ManageSideBar";
import Orders from "./components/Orders/Orders";
import CreateNewOrder from "./components/Orders/CreateNewOrder";
import CreateOrderTS from "./components/Orders/CreateOrderTS";
import LocationFilter from "./LocationFilter";
import DeliverySideBar from "./components/Delivery/DeliverySideBar";
import DeliveryBoys from "./components/Delivery/DeliveryBoys";
import AddDeliveryBoys from "./components/Delivery/AddDeliveryBoys";
import VerifyRegistration from "./components/Delivery/VerifyRegistration";
import AccountsSidebar from "./components/Accounts/AccountsSidebar";
import Users from "./components/Accounts/Users";
import CompanyProfile from "./components/Accounts/CompanyProfile";
import HelpCenter from "./components/Accounts/HelpCenter";
import SubscriptionPlan from "./components/Accounts/SubscriptionPlan";
import ManageUser from "./components/Manage/ManageUser";
import ManageDelSetting from "./components/Manage/ManageDelSetting";
import ManageCandO from "./components/Manage/ManageCandO";
import ManageBanner from "./components/Manage/ManageBanner";
import ManageAddBrand from "./components/Manage/ManageAddBrand";
import ManageReportAndAnalytics from "./components/Manage/ManageReportAndAnalytics";
import ManageConfigureOutlets from "./components/Manage/ManageConfigureOutlets";
import ManageCustomerData from "./components/Manage/ManageCustomerData";
import ManageOrderNotification from "./components/Manage/ManageOrderNotification";
import ManageTimingSetting from "./components/Manage/ManageTimingSetting";
import ManagePaymentSettings from "./components/Manage/ManagePaymentSettings";
import ManageOrderPause from "./components/Manage/ManageOrderPause";
import ManageReviews from "./components/Manage/ManageReviews";
import ManageBliiningInvoice from "./components/Manage/ManageBliiningInvoice";
import ManageTax from "./components/Manage/ManageTax";
import ManageOtherCharges from "./components/Manage/ManageOtherCharges";
import ManageMarketAndLoyality from "./components/Manage/ManageMarketAndLoyality";
import ManageOrderingTheme from "./components/Manage/ManageOrderingTheme";
import ManageIntegrations from "./components/Manage/ManageIntegrations";
import ManageInvoiceSettings from "./components/Manage/ManageInvoiceSettings";
import ManagePosSettings from "./components/Manage/ManagePosSettings";
import ManageAppNotification from "./components/Manage/ManageAppNotification";
import ManageTableOrdering from "./components/Manage/ManageTableOrdering";

const YourComponent = ({setSessionphoneNumber, setIsLoggedIn, setSessionpId, setSessionCompId}) => {
  
  // const [selectedOutlets, setSelectedOutlets] = useState([]);

  // const handleOutletsSelected = (selectedOutlets) => {
  //   // Update the state with the selected outlets
  //   setSelectedOutlets(selectedOutlets);
  // };
  // const [selectedLocations, setSelectedLocations] = useState([]);
  // const handleCheckboxChange = (location) => {
  //   const updatedLocations = [...selectedLocations];

  //   if (updatedLocations.includes(location)) {
  //     updatedLocations.splice(updatedLocations.indexOf(location), 1);
  //   } else {
  //     updatedLocations.push(location);
  //   }
  //   setSelectedLocations(updatedLocations);
  // };

  // const [selectedBrandIds, setSelectedBrandIds] = useState([]);

  // const handleBrandIdChange = (brandId) => {
  //   // Update the selectedBrandIds state when a brand ID changes
  //   setSelectedBrandIds((prevSelectedBrandIds) =>
  //     prevSelectedBrandIds.includes(brandId)
  //       ? prevSelectedBrandIds.filter((id) => id !== brandId)
  //       : [...prevSelectedBrandIds, brandId]
  //   );
  // };

  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedBrandIds, setSelectedBrandIds] = useState([]);

  const handleSelectionChange = (item, selectedState, setSelectedState) => {
    const updatedItems = [...selectedState];

    if (updatedItems.includes(item)) {
      updatedItems.splice(updatedItems.indexOf(item), 1);
    } else {
      updatedItems.push(item);
    }

    setSelectedState(updatedItems);
  };
  const handleLogout = async() => {
    const apiUrl =
  "http://127.0.0.1:8000/user/permissions/user_permissions/put/";
const companyId = setSessionCompId;

try {
  const response = await axios.put(
    `${apiUrl}?per_id=${setSessionpId}&comp_id=${companyId}&activity=0`
  );
  console.log("Update activty status", response.data);
  // fetchArchiveData();
} catch (error) {
  console.error("Error updating permissions", error);
}
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('sessionId');
  };

  const [stockTab, setStockTab] = useState("all");

  const handleStock = (tab) => {
    setStockTab(tab);
  };

// Active Link
    // const [activeLink, setMainMenuActiveLink] = useState('home');
    // const [subMenuActiveLink, setSubMenuActiveLink] = useState('');

    // useEffect(() => {
    //   // Get the current path from window.location.pathname
    //   const currentPath = window.location.pathname;
    
    //   // Update active links based on the current path
    //   if (currentPath === '/') {
    //     // If the current path is '/', it's the root (home) page
    //     setMainMenuActiveLink('home');
    //     setSubMenuActiveLink('');
    //   } else if (currentPath.startsWith('/menu')) {
    //     // If the current path starts with '/menu', it's a submenu
    //     setMainMenuActiveLink('menu');
    //     setSubMenuActiveLink(currentPath.replace('/menu/', ''));
    //   } else if (currentPath.startsWith('/deliveryboy')) {
    //     // If the current path starts with '/deliveryboy', it's a submenu
    //     setMainMenuActiveLink('deliveryboy');
    //     setSubMenuActiveLink(currentPath.replace('/deliveryboy/', ''));
    //   } else if (currentPath.startsWith('/manage')) {
    //     // If the current path starts with '/manage', it's a submenu
    //     setMainMenuActiveLink('manage');
    //     setSubMenuActiveLink(currentPath.replace('/manage/', ''));
    //   } else if (currentPath.startsWith('/accounts')) {
    //     // If the current path starts with '/accounts', it's a submenu
    //     setMainMenuActiveLink('accounts');
    //     setSubMenuActiveLink(currentPath.replace('/accounts/', ''));
    //   } else if (currentPath.startsWith('/orders')) {
    //     // If the current path starts with '/orders', it's a submenu
    //     setMainMenuActiveLink('orders');
    //     setSubMenuActiveLink(currentPath.replace('/orders/', ''));
    //   } else {
    //     // It's a main menu item
    //     setMainMenuActiveLink(currentPath.slice(1)); // Remove leading '/'
    //     setSubMenuActiveLink(''); // Clear submenu active link
    //   }
    // }, []);

    // const [activeLink, setActiveLink] = useState("home");

    // const handleLinkClick = (link) => {
    //   setActiveLink(link);
    // };

      // Get the active link from local storage or default to "home"
  const initialActiveLink = localStorage.getItem('activeLink') || 'home';
  const [activeLink, setActiveLink] = useState(initialActiveLink);

  // Update local storage when activeLink changes
  useEffect(() => {
    localStorage.setItem('activeLink', activeLink);
  }, [activeLink]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  
    
// store setting navigation bar
  const [sideNavRight, setSideNavRight] = useState(-380);

  const openNav = () => {
    setSideNavRight(0);
  };

  const closeNav = () => {
    setSideNavRight(-380);
  };

  // main navigation bar
  const [mainNavigation, setMainNavigation] = useState('-30vh');
  const [showBackground, setShowBackground] = useState(false);

  const openMainNavigation = () => {
    setMainNavigation('0');
    setShowBackground(true);
  };

  const closeMainNavigation = () => {
    setMainNavigation('-30vh');
    setShowBackground(false);
  };
  // Open stock control
  const [stockVisible, setStocklVisible] = useState(false);

  const openStock = () => {
    setStocklVisible(true);
  };

  const closeStock = () => {
    setStocklVisible(false);
  };
  // Open location
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const closeLocation = () => {
    setLocationVisible(false);
  };
  // Notification open
  const [notificationVisible, setNotificationlVisible] = useState(false);

  const openNotification = () => {
    setNotificationlVisible(true);
  };

  const closeNotification = () => {
    setNotificationlVisible(false);
  };


// Open Add popup
const [addSlotVisible, setaddSlotVisible] = useState(false);

const openAddSlot = () => {
  setaddSlotVisible(true);
};

const closeAddSlot= () => {
  setaddSlotVisible(false);
};
const toggleAddSlot = () => {
  setaddSlotVisible((prev) => !prev);
};

const [data, setData] = useState([]);
const [stockLink, setStockVisible] = useState(false);

useEffect(() => {
  const fetchData = async () => {
try {
const responseUserPermission = await axios.get(`http://127.0.0.1:8000/user/permissions/user_permissions/get/?comp_id=${setSessionCompId}&per_id=${setSessionpId}`);
const checkOwner = responseUserPermission.data.some(item => item.role === 'owner_main' || item.role === 'owner_main_p');
if(checkOwner){
setStockVisible(true);
}else{
try {
  const response = await axios.get(`http://127.0.0.1:8000/user/permissions/permissions/get/?per_id=${setSessionpId}&comp_id=${setSessionCompId}`);
  setData(response.data);
  const hasStock = response.data.some(item => item.permissions === 'stockControl');
  if (hasStock) {
    setStockVisible(true);
  } else {
    setStockVisible(false);
  }
} catch (error) {
  console.error('Error fetching data:', error);
}
}

} catch (error) {

}


    
  };

  fetchData();
}, []); 
  
  return (
    <div>
      <Router>
        {/* <Head /> */}
        <div className="header">
          <div className="header-logo">
            <img src="/kb_logo.png" alt="" />
            <h3>Knight Bite</h3>
          </div>
          <div className="d-flex">
            <div className="txt-red">{setSessionphoneNumber}</div>
            <div className="txt-purple">{setSessionCompId}</div>
            <div className="txt-green">{setSessionpId}</div>
          </div>
          <button onClick={handleLogout}>Logout</button>
          <div className="KYC">
            <button className="o-button bg-orange txt-orange">
              Complete your KYC
            </button>
          </div>
          {selectedLocations.map((location) => (
            <li className="txt-green" key={location}>{location}</li>
          ))}
          
          {selectedBrandIds.map((brandId) => (
            <li className="txt-red" key={brandId}>{brandId}</li>
          ))}
          <div className="h-search d-flex g-20 align-item-center">
<div>
<FontAwesomeIcon icon={faMagnifyingGlass} className="txt-grey" />
</div>
  <div>
    <input type="text" name="" id="" className="h-search-input" placeholder="Search"/>
  </div>

</div>

          <div className="user-notification">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={openNotification}
            >
              <path
                d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
                fill="#FFCDA0"
              />
              <path
                d="M10.1776 21.6225C10.0316 21.7782 9.95004 21.9887 9.95 22.2076V24.5452C9.95 24.7641 10.0315 24.9747 10.1776 25.1304C10.3237 25.2862 10.5226 25.3744 10.7308 25.3744H15.7962V25.9295C15.7802 26.9293 16.1107 27.9006 16.725 28.6575C17.3395 29.4145 18.195 29.9038 19.1279 30.0305L19.1294 30.0307C19.6448 30.0852 20.1652 30.024 20.657 29.8512C21.1488 29.6785 21.601 29.3979 21.9846 29.0278C22.3682 28.6578 22.6748 28.2064 22.8847 27.7028C23.0946 27.1993 23.2033 26.6545 23.2038 26.1037V26.1036V25.3744H28.2692C28.4774 25.3744 28.6763 25.2862 28.8224 25.1304C28.9685 24.9747 29.05 24.7641 29.05 24.5452V22.2076C29.05 21.9887 28.9684 21.7782 28.8224 21.6225L26.8577 19.5276V16.7531V16.7531C26.8554 14.8106 26.1778 12.9375 24.9551 11.4962C23.7323 10.0547 22.0511 9.14726 20.2362 8.95029L20.2362 8.95H20.2308H18.7692V8.94971L18.7638 8.95029C16.9489 9.14726 15.2677 10.0547 14.0449 11.4962C12.8222 12.9375 12.1446 14.8106 12.1423 16.7531V16.7531V19.5276L10.1776 21.6225ZM10.1776 21.6225L10.2141 21.6567M10.1776 21.6225L10.1776 21.6225L10.2141 21.6567M10.2141 21.6567C10.0771 21.8028 10 22.0009 10 22.2076V24.5452C10 24.7519 10.077 24.9501 10.214 25.0962C10.3511 25.2423 10.537 25.3244 10.7308 25.3244H15.7962L10.2141 21.6567ZM11.5115 23.716H27.4885V22.5499L25.5238 20.4551L25.5238 20.4551L25.5603 20.4209L11.5115 23.716ZM11.5115 23.716V22.5499L13.4762 20.4551L13.4762 20.4551L13.4397 20.4209L11.5115 23.716ZM21.6423 26.1036C21.6423 26.7113 21.4159 27.2936 21.0137 27.7224C20.6117 28.1511 20.0671 28.3912 19.5 28.3912C18.9329 28.3912 18.3883 28.1511 17.9863 27.7224C17.5841 27.2936 17.3577 26.7113 17.3577 26.1036V25.3744H21.6423V26.1036Z"
                fill="#A36A36"
                stroke="#A36A36"
                // stroke-width="0.1
              />
            </svg>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "10px" }}
              onClick={openMainNavigation}
            >
              <path
                d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
                fill="#D3D3D3"
              />
              <path
                d="M20 11C21.0609 11 22.0783 11.4214 22.8284 12.1716C23.5786 12.9217 24 13.9391 24 15C24 16.0609 23.5786 17.0783 22.8284 17.8284C22.0783 18.5786 21.0609 19 20 19C18.9391 19 17.9217 18.5786 17.1716 17.8284C16.4214 17.0783 16 16.0609 16 15C16 13.9391 16.4214 12.9217 17.1716 12.1716C17.9217 11.4214 18.9391 11 20 11ZM20 21C24.42 21 28 22.79 28 25V27H12V25C12 22.79 15.58 21 20 21Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="p-user-notification"></div>
        </div>
        <div className="p-search">
          <input type="text" name="" id="" placeholder="Search Item" />
          <div className="p-search-right-side">
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                onClick={handleClickOpen}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div>
              <FontAwesomeIcon icon={faBoxesStacked} onClick={openStock} />
            </div>
            <div>
              <FontAwesomeIcon icon={faStore} onClick={openNav} />
            </div>
          </div>
        </div>

        <div className="top-space">
          {/* Desktop navigation bar */}
          <div className="topnav" id="myDIV">
            <div className="left-align">
              <Link
                to="/"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </Link>
              <Link
                to="/menu/items"
                className={activeLink === "menu" ? "active" : ""}
                onClick={() => handleLinkClick("menu")}
              >
                Menu
              </Link>
              <Link
                to="/orders"
                className={activeLink === "orders" ? "active" : ""}
                onClick={() => handleLinkClick("orders")}
              >
                Orders
              </Link>
              <Link
                to="/deliveryboy/db"
                className={activeLink === "deliveryboy" ? "active" : ""}
                onClick={() => handleLinkClick("deliveryboy")}
              >
                Delivery Boys
              </Link>
              <Link
                to="/manage/users"
                className={activeLink === "manage" ? "active" : ""}
                onClick={() => handleLinkClick("manage")}
              >
                Manage
              </Link>
              <Link
                to="/accounts/cp"
                className={activeLink === "accounts" ? "active" : ""}
                onClick={() => handleLinkClick("accounts")}
              >
                Accounts
              </Link>
            </div>
            
        
            <div className="right-buttons-group">
              <button className="store-btn" onClick={handleClickOpen}>
                Outlet
              </button>
{stockLink && (
  <button className="store-btn" onClick={openStock}>
                {" "}
                Stock Control
              </button>
)}
              

              <button className="store-btn" onClick={openNav}>
                {" "}
                <FontAwesomeIcon icon={faBars} /> Store settings
              </button>
            </div>
          </div>
          {/* Phone navigation bar */}
          <div className="p-navigation">
            <div className="mt-1 d-flex pNaL">
            <div className="align-text-center M-lnG" >
            <Link
              to="/"
              
              onClick={() => {handleLinkClick("home"),closeAddSlot()}}
            >
              <BiHomeAlt2 className={activeLink === "home" ? "txt-purple" : "txt-grey"} />
              
            </Link>
            {activeLink === "home" && ( 
            <div className={activeLink === "home" ? "txt-purple r-f-6" : ""}>Home</div>
            )}
            </div>
            <div className="align-text-center M-lnG">
            <Link
              to="/menu/items"
             
              onClick={() => {handleLinkClick("menu",closeAddSlot())}}
            >
              <LuMenuSquare  className={activeLink === "menu" ? "txt-purple" : "txt-grey"} />
            </Link>
            {activeLink === "menu" && ( 
            <div className={activeLink === "menu" ? "txt-purple r-f-6" : ""}>Menu</div>
            )}
            </div>
            <div className="align-text-center M-lnG">
            <Link
              to="/orders"
              onClick={() =>{handleLinkClick("orders"), closeAddSlot()}}
            >
              <CgBowl className={activeLink === "orders" ? "txt-purple" : "txt-grey"} />
            </Link>
            {activeLink === "orders" && ( 
            <div className={activeLink === "orders" ? "txt-purple r-f-6" : ""}>Orders</div>
            )}
            </div>
            <div className="align-text-center M-lnG">
            <LuSettings
              className={
                activeLink === "manage"
                  ? "txt-purple"
                  : activeLink === "deliveryboy"
                  ? "txt-purple"
                  : activeLink === "accounts"
                  ? "txt-purple"
                  : "txt-grey"
              }
              onClick={toggleAddSlot}
            />

            <div className="r-f-6">&nbsp;</div>
            </div>

            </div>
           
            
          </div>
          {addSlotVisible && (
          <div className="p-navigation-popup align-text-center r-f-10" onClick={closeAddSlot}>
            <div><Link
              to="/deliveryboy/db"
              
              onClick={() => handleLinkClick("deliveryboy")}
              className={activeLink === "deliveryboy" ? "txt-purple" : "txt-grey"}
            >
              Delivery Boy
            </Link>

            </div>
            <div>
            <Link
              to="/manage"
              className={activeLink === "manage" ? "txt-purple" : "txt-grey"}
              onClick={() => handleLinkClick("manage")}
            >
           Manage
            </Link>
           
            </div>
            <div>
            <Link
              to="/accounts/cp"
              className={activeLink === "accounts" ? "txt-purple" : "txt-grey"}
              onClick={() => handleLinkClick("accounts")}
            >
              Accounts
            </Link>
    
            </div>
          </div>
           )}
          <div>
          {/* Store setting navigation */}
            <div
              id="mySidenav"
              className="SO-sidenav"
              style={{ right: sideNavRight }}
            >
              <div className="SO-close">
                <FontAwesomeIcon icon={faXmark} onClick={closeNav} />
              </div>
              <div className="SO-header">Store settings</div>
              <div>
                <br />
                <select className="dropbtn" name="languages" id="lang">
                  <option value="" disabled="">
                    Select Location
                  </option>
                  <option value="knightbite">Knight Bite</option>
                  <option value="pancake">Pancake Bite</option>
                  <option value="desibite">Desi Bite</option>
                  <option value="wafflebite">Waffle Bite</option>
                  <option value="sandwichbite">Sandwich Bite</option>
                </select>
              </div>
              <br />
              <div className="SO-content">
                <div>Knight Bite</div>
                <label className="switch">
                  <input type="checkbox"></input>
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
            {showBackground && (
        <div
          className="sidenav-background"
          onClick={closeMainNavigation}
        ></div>
      )}
            {/* Main navigation */}
            {showBackground && (
            <div
              id="mySidenav"
              className="main-sidenav"
              // style={{ right: mainNavigation }}
            >
              <div className="d-flex space-between f-24">
                <div>
                <FontAwesomeIcon icon={faXmark} onClick={closeMainNavigation} />
                </div>
              
              <div>User Profile</div>
              </div>
              <hr />
          
    
            </div>
            )}
          </div>

          <Routes>
            <Route path="/CreateNewItem" element={<Items />} />{" "}
            {/*Reciving data from home page */}
            <Route path="/" element={<Home setSessionCompId={setSessionCompId} setSessionphoneNumber={setSessionphoneNumber} setSessionpId={setSessionpId} selectedBrands={selectedBrandIds} selectedLocations={selectedLocations} />}   />
            {/* Menu Side bar starts */}
            {/* Menu Route */}
            <Route
              path="/menu"
              element={
                <>
                  <MenuSideBar />
                  <Items />
                </>
              }
            />
            {/* Add items call CreateAddons */}
            <Route
              path="/handleAddItem"
              element={
                <MenuSideBar>
                  <CreateNewItem />
                </MenuSideBar>
              }
            />
            <Route
              path="/CreateAddons"
              element={
                <MenuSideBar>
                  <CreateNewAddons />
                </MenuSideBar>
              }
            />
            <Route
              path="/addItems"
              element={
                <MenuSideBar>
                  <CreateNewItem />
                </MenuSideBar>
              }
            />
            <Route
              path="/AddAddonGroups"
              element={
                <MenuSideBar>
                  <CreateNewAddonGroups />
                </MenuSideBar>
              }
            />
            <Route
              path="/menu/items"
              element={
                <MenuSideBar>
                  <Items />
                </MenuSideBar>
              }
            />
            <Route
              path="/menu/categories"
              element={
                <MenuSideBar>
                  <Categories />
                </MenuSideBar>
              }
            />
            <Route
              path="/menu/addongroups"
              element={
                <MenuSideBar>
                  <AddonGroups />
                </MenuSideBar>
              }
            />
            <Route
              path="/menu/addons"
              element={
                <MenuSideBar>
                  <AddOns />
                </MenuSideBar>
              }
            />
            <Route
              path="/menu/tags"
              element={
                <MenuSideBar>
                  <Tags setSessionCompId={setSessionCompId} setSessionphoneNumber={setSessionphoneNumber} setSessionpId={setSessionpId} />
                </MenuSideBar>
              }
            />
            {/* Orders Route */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/CreateOrder" element={<CreateNewOrder />} />
            <Route path="/orders/touchScreen" element={<CreateOrderTS />} />
            {/* Manage Route */}
            <Route
              path="/manage"
              element={
                <>
                  <ManageSideBar />
                  <ManageUser setSessionCompId={setSessionCompId} setSessionphoneNumber={setSessionphoneNumber} setSessionpId={setSessionpId} />
                </>
              }
            />
            <Route
              path="/manage/users"
              element={
                <ManageSideBar>
                  <ManageUser setSessionCompId={setSessionCompId} setSessionphoneNumber={setSessionphoneNumber} setSessionpId={setSessionpId} />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/OrderNotifications"
              element={
                <ManageSideBar>
                  <ManageOrderNotification />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/TimignSettings"
              element={
                <ManageSideBar>
                  <ManageTimingSetting />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/OutletsAddBrand"
              element={
                <ManageSideBar>
                  <ManageAddBrand />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/OutletsConfigOutlets"
              element={
                <ManageSideBar>
                  <ManageConfigureOutlets />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/CustomerData"
              element={
                <ManageSideBar>
                  <ManageCustomerData />
                  
                </ManageSideBar>
              }
            />
             <Route
              path="/manage/OnOrderingPaymentSettings"
              element={
                <ManageSideBar>
                  <ManagePaymentSettings />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/OnOrderingDeliverySettings"
              element={
                <ManageSideBar>
                  <ManageDelSetting />
                  
                </ManageSideBar>
              }
            />
             <Route
              path="/manage/OnOrderingOrderPauseMessage"
              element={
                <ManageSideBar>
                  <ManageOrderPause />
                  
                </ManageSideBar>
              }
            />
             <Route
              path="/manage/OnOrderingReviews"
              element={
                <ManageSideBar>
                  <ManageReviews />
                  
                </ManageSideBar>
              }
            />
             <Route
              path="/manage/OnOrderingBanner"
              element={
                <ManageSideBar>
                  <ManageBanner />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/OnOrderingCandO"
              element={
                <ManageSideBar>
                  <ManageCandO />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/OnOrderingAppNotification"
              element={
                <ManageSideBar>
                  <ManageAppNotification />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/TableOrdering"
              element={
                <ManageSideBar>
                  <ManageTableOrdering />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/TaxChargesTax"
              element={
                <ManageSideBar>
                  <ManageTax />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/TaxChargesOC"
              element={
                <ManageSideBar>
                  <ManageOtherCharges />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/AppearanceOrderAppTheme"
              element={
                <ManageSideBar>
                  <ManageOrderingTheme />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/AppearanceInvoiceHandF"
              element={
                <ManageSideBar>
                  <ManageInvoiceSettings />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/MarketingLoyality"
              element={
                <ManageSideBar>
                  <ManageMarketAndLoyality />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/ReportAnalytics"
              element={
                <ManageSideBar>
                  <ManageReportAndAnalytics />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/Integrations"
              element={
                <ManageSideBar>
                  <ManageIntegrations />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/POSsettings"
              element={
                <ManageSideBar>
                  <ManagePosSettings />
                  
                </ManageSideBar>
              }
            />
            <Route
              path="/manage/BillinInvoice"
              element={
                <ManageSideBar>
                  <ManageBliiningInvoice />
                  
                </ManageSideBar>
              }
            />
            
            {/* Delivery Route */}
            <Route
              path="/deliveryboy"
              element={
                <>
                  <DeliverySideBar />
                  <DeliveryBoys />
                </>
              }
            />
            <Route
              path="/addDeliveryBoys"
              element={
                <DeliverySideBar>
                  <AddDeliveryBoys />
                </DeliverySideBar>
              }
            />
            <Route
              path="/deliveryboy/db"
              element={
                <DeliverySideBar>
                  <DeliveryBoys />
                </DeliverySideBar>
              }
            />
            <Route
              path="/deliveryboy/vr"
              element={
                <DeliverySideBar>
                  <VerifyRegistration />
                </DeliverySideBar>
              }
            />
            {/* Accounts Route */}
            <Route
             path="/accounts"
             element={
               <>
                 <AccountsSidebar />
                 <CompanyProfile setSessionCompId={setSessionCompId} setSessionphoneNumber={setSessionphoneNumber} setSessionpId={setSessionpId} />
               </>
             }
              />
               <Route
              path="/accounts/cp"
              element={
                <AccountsSidebar>
                  <CompanyProfile setSessionCompId={setSessionCompId} setSessionphoneNumber={setSessionphoneNumber} setSessionpId={setSessionpId} />
                </AccountsSidebar>
              }
            />
            

             <Route
              path="/accounts/hc"
              element={
                <AccountsSidebar>
                  <HelpCenter />
                </AccountsSidebar>
              }
            />
            <Route
              path="/accounts/sp"
              element={
                <AccountsSidebar>
                  <SubscriptionPlan />
                </AccountsSidebar>
              }
            />
          </Routes>
          

          <Routes>
            <Route path="/kyc" element={<CreateNewItem />} />
          </Routes>
        </div>
      </Router>
      {/* Stock Control */}
      {stockVisible && (
        <div
          className={`Stock-modal ${stockVisible ? "Stock-modal-open" : ""}`}
        >
          <div className="Stock-modal-content">
            <div className="Stock-header">
              <div className="Stock-header-name">
                <div>Stock Control</div>
                <div style={{ cursor: "pointer" }} onClick={closeStock}>
                  <FontAwesomeIcon icon={faXmark} />
                </div>
              </div>
              <div className="Stock-actions">
                <div className="Stock-textboxes">
                  <input type="text" name="" id="" placeholder="Search Items" />
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search Category"
                  />
                </div>
                <div className="stock-control-filter-buttons-container">
                  <button
                    className={
                      stockTab === "all" ? "active-filter" : "filter-button"
                    }
                    onClick={() => handleStock("all")}
                  >
                    All
                  </button>
                  <button
                    className={
                      stockTab === "inStock" ? "active-filter" : "filter-button"
                    }
                    onClick={() => handleStock("inStock")}
                  >
                    In Stock
                  </button>
                  <button
                    className={
                      stockTab === "outStock"
                        ? "active-filter"
                        : "filter-button"
                    }
                    onClick={() => handleStock("outStock")}
                  >
                    Out of Stock
                  </button>
                </div>
              </div>
              <div className="Stock-item-header txt-grey">
                <div style={{ textAlign: "left" }}>Name</div>
                <div style={{ textAlign: "center" }}>Type</div>
                <div style={{ textAlign: "center" }}>Category</div>
                <div style={{ textAlign: "center" }}>Price</div>
                <div style={{ textAlign: "center" }}>Availibility</div>
              </div>
              <div className="p-stock-control-filter-buttons-container">
                <button
                  className={
                    stockTab === "all" ? "active-filter" : "filter-button"
                  }
                  onClick={() => handleStock("all")}
                >
                  All
                </button>
                <button
                  className={
                    stockTab === "inStock" ? "active-filter" : "filter-button"
                  }
                  onClick={() => handleStock("inStock")}
                >
                  In Stock
                </button>
                <button
                  className={
                    stockTab === "outStock" ? "active-filter" : "filter-button"
                  }
                  onClick={() => handleStock("outStock")}
                >
                  Out of Stock
                </button>
              </div>
              <div className="p-stock-actions">
                <input type="text" name="" id="" placeholder="Search Items" />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Category"
                />
              </div>
            </div>

            <br />
            {stockTab === "all" && (
              <div className="Stock-content-card">
                <div className="Stock-card">
                  <div style={{ textAlign: "left" }}>Chicken Burger</div>
                  <div style={{ textAlign: "center" }} className="txt-green">
                    <Icon icon="mdi:lacto-vegetarian" width="25" height="30" />
                  </div>
                  <div style={{ textAlign: "center" }} className="txt-orange">
                    Price
                  </div>
                  <div style={{ textAlign: "center" }}>₹120</div>
                  <div style={{ textAlign: "center" }}>
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                <div className="p-stock-card">
                  <div className="d-flex">
                    <div className="">
                      <div className="txt-grey f-14">Name</div>
                      <div>Chicken burger</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex space-between">
                    <div className="flex-1">
                      <div className="txt-grey f-14">Price</div>
                      <div>₹120</div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Category</div>
                      <div className="txt-orange">Combo</div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Type</div>
                      <div className="txt-green">
                        <Icon
                          icon="mdi:lacto-vegetarian"
                          width="20"
                          height="20"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Availibility</div>
                      <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="p-stock-card">
                  <div className="d-flex">
                    <div className="">
                      <div className="txt-grey f-14">Name</div>
                      <div>Chicken burger</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex space-between">
                    <div className="flex-1">
                      <div className="txt-grey f-14">Price</div>
                      <div>₹120</div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Category</div>
                      <div className="txt-orange">Combo</div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Type</div>
                      <div className="txt-green">
                        <Icon
                          icon="mdi:lacto-vegetarian"
                          width="20"
                          height="20"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Availibility</div>
                      <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="p-stock-card">
                  <div className="d-flex">
                    <div className="">
                      <div className="txt-grey f-14">Name</div>
                      <div>Chicken burger</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex space-between">
                    <div className="flex-1">
                      <div className="txt-grey f-14">Price</div>
                      <div>₹120</div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Category</div>
                      <div className="txt-orange">Combo</div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Type</div>
                      <div className="txt-green">
                        <Icon
                          icon="mdi:lacto-vegetarian"
                          width="20"
                          height="20"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Availibility</div>
                      <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="p-stock-card">
                  <div className="d-flex">
                    <div className="">
                      <div className="txt-grey f-14">Name</div>
                      <div>Chicken burger</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex space-between">
                    <div className="flex-1">
                      <div className="txt-grey f-14">Price</div>
                      <div>₹120</div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Category</div>
                      <div className="txt-orange">Combo</div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Type</div>
                      <div className="txt-green">
                        <Icon
                          icon="mdi:lacto-vegetarian"
                          width="20"
                          height="20"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Availibility</div>
                      <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="p-stock-card">
                  <div className="d-flex">
                    <div className="">
                      <div className="txt-grey f-14">Name</div>
                      <div>Chicken burger</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex space-between">
                    <div className="flex-1">
                      <div className="txt-grey f-14">Price</div>
                      <div>₹120</div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Category</div>
                      <div className="txt-orange">Combo</div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Type</div>
                      <div className="txt-green">
                        <Icon
                          icon="mdi:lacto-vegetarian"
                          width="20"
                          height="20"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="txt-grey f-14">Availibility</div>
                      <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {stockTab === "inStock" && (
              <div className="Stock-content-card">
                <div className="Stock-card">
                  <div style={{ textAlign: "left" }}>
                    Chicken Burger Chicken Burger Chicken Burger Chicken Burger{" "}
                  </div>
                  <div style={{ textAlign: "center" }} className="txt-green">
                    <Icon icon="mdi:lacto-vegetarian" width="25" height="30" />
                  </div>
                  <div style={{ textAlign: "center" }} className="txt-orange">
                    Price
                  </div>
                  <div style={{ textAlign: "center" }}>₹120</div>
                  <div style={{ textAlign: "center" }}>
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}
            {stockTab === "outStock" && (
              <div className="Stock-content-card">
                <div className="Stock-card">
                  <div style={{ textAlign: "left" }}>
                    Chicken Burger Chicken Burger Chicken Burger Chicken Burger
                    Chicken Burger Chicken Burger Chicken Burger Chicken Burger
                    Chicken Burger{" "}
                  </div>
                  <div style={{ textAlign: "center" }} className="txt-green">
                    <Icon icon="mdi:lacto-vegetarian" width="25" height="30" />
                  </div>
                  <div style={{ textAlign: "center" }} className="txt-orange">
                    Price
                  </div>
                  <div style={{ textAlign: "center" }}>₹120</div>
                  <div style={{ textAlign: "center" }}>
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Location modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Select Outlets
        </DialogTitle>
        <DialogContent>
          <LocationFilter
          setSessionCompId={setSessionCompId}
          selectedLocations={selectedLocations}
          // onCheckboxChange={handleCheckboxChange}
          // onBrandIdChange={handleBrandIdChange} 
          onCheckboxChange={(location) => handleSelectionChange(location, selectedLocations, setSelectedLocations)}
          onBrandIdChange={(brandId) => handleSelectionChange(brandId, selectedBrandIds, setSelectedBrandIds)}
          selectBrands={selectedBrandIds}
          sessionPid = {setSessionpId}
          />
        </DialogContent>

      </Dialog>

      {notificationVisible && (
        <div className={`H-modal ${notificationVisible ? "H-modal-open" : ""}`}>
          <div className="H-modal-content">
            <div className="notification-top-fix">
              <p className="H-create-header txt-black">Notifications</p>
              <p className="txt-grey" style={{ fontSize: "12px" }}>
                Clear all
              </p>
              <br />
              <br />
              <span className="H-modal-close" onClick={closeNotification}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#2e2e2e"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                  />
                </svg>
              </span>
            </div>
            <div className="H-create-filter-position"></div>
            <br />
            <div className="notification-content-layer">
              <br />
              <div className="notification-box">
                <div className="row">
                  <div className="column1">
                    <img src="kb_logo.png" alt="" width={"60px"} />
                  </div>
                  <div className="column2">
                    <p className="txt-black">New Order</p>
                    <span className="txt-grey notification-audio">
                      <i>Rencent</i>
                    </span>

                    <div></div>
                  </div>
                  <div className="column3">
                    <button className="btn-notification-content-close">
                      <FontAwesomeIcon icon={faXmark} />
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <div className="notification-box">
                <div className="row">
                  <div className="column1">
                    <div className="notification-update-back">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="white"
                          d="M12 21q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 12q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 3q2.05 0 3.888.875T19 6.35V4h2v6h-6V8h2.75q-1.025-1.4-2.525-2.2T12 5Q9.075 5 7.037 7.038T5 12q0 2.925 2.038 4.963T12 19q2.625 0 4.588-1.7T18.9 13h2.05q-.375 3.425-2.937 5.713T12 21Zm2.8-4.8L11 12.4V7h2v4.6l3.2 3.2l-1.4 1.4Z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="column2">
                    <p className="txt-black">Update</p>
                    <span className="txt-grey notification-audio">
                      <i>Yesterday</i>
                    </span>

                    <div></div>
                  </div>
                  <div className="column3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
