import { useState, useEffect  } from "react";
import React from "react";

import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'

// import {
//   handleSelectAll,
//   handleLocationSelect,
//   handleClick,
//   handleClose,
//   availableSubcomponents,
//   handleExtraMenuOpen,
//   handleExtraMenuClose,
//   handleOptionSelect,
//   generateLocationLabel,
//   handleOptionDeselect,
// } from '../../useLocation';

import {
  faFilter,
  faBars,
  faUser,
  faCalendarDays,
  faLocationDot,
  faChevronDown,
  faMapLocationDot,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import "./Orders.css";
import zIndex from "@mui/material/styles/zIndex";

// Filter
const useStyles = makeStyles({
  root: {},
  icon: {},
  redIcon: {},
  selectedOptionsContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -59,
    marginLeft: '5px',
  },
  selectedOption: {
    background: '#fffff',
    border: '1px solid #ccc',
    borderRadius: 20,
    padding: '8px 10px',
    marginRight: 5,
    marginLeft: 5,
    display: 'flex',
    alignItems: 'center',
  },
  closeIcon: {
    marginLeft: 5,
    cursor: 'pointer',
  },
  scrollbar: {
    height: '80px', // Adjust the scroll height as needed
    width: '100%', // Adjust the width as needed
    overflowY: 'auto',
    scrollbarWidth: 'thin', // For Firefox
    '&::-webkit-scrollbar': {
      width: '8px', // For Chrome, Safari, and Opera
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#ccc', // Customize the thumb color
      borderRadius: '4px', // Rounder corners for the thumb
    },
  },

  selectedOptionsRow: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap', // Set to 'nowrap' initially to prevent wrapping
    marginTop: '10px',
    marginLeft: '10px', // Adjust as needed
  },
})
// ... (import statements and makeStyles definition)

const availableSubcomponents = {
    Mangalore: ['Knight Bite', 'Pancake Bite', 'Cake Bite', 'rome Bite', 'ome Bite','rdfzfzvvvvvvvvvuuuuuuuuuuuuuuuu','fzfzdfzf','jsois'],
    Bangalore: ['Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite','rdfzfz','fzfzdfzf','jsois'],
    Hubli: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Pune: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Udupi: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Manipal: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Hydrabad: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Belgum: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Kerala: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Mumbai: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Mysore: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Madikeri: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Goa: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],

  } 
const Orders = () => {
  // Create Order Redirect
  const navigate = useNavigate();
  const CreateOrder = () =>{
    navigate("/CreateOrder");
  };
  
  // order type
  const [orderTypeTab, setorderTypeTab] = useState("all");
  const orderTabClick = (tabName) => {
    setorderTypeTab(tabName);
  };
 // All tab change
 const [allTab, setAllTab] = useState("ALL-Live Orders");
 const handleAllClick = (tabName) => {
  setAllTab(tabName);
 };


  // online tab change
  const [activeTab, setActiveTab] = useState("Live Orders");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  

  // Pickup tab change
  const [pickupTab, setPickupTab] = useState("PA-Live Orders");
  const handlePikupClick = (tabName) => {
    setPickupTab(tabName);
  };
  

  // table tab change
  const [tableTab, setTableTab] = useState("TB-New");
  const handleTableClick = (tabName) => {
    setTableTab(tabName);
  };


  // Open location
  const [locationVisible, setLocationVisible] = useState(false);

  const openLocation = () => {
    setLocationVisible(true);
  };

  const closeLocation = () => {
    setLocationVisible(false);
  };
  // Date filter
  const [dateFilterVisible, setdateFilterVisible] = useState(false);

  const openDateFilter = () => {
    setdateFilterVisible(true);
  };

  const closeDateFilter = () => {
    setdateFilterVisible(false);
  };
  // Date filter custom
  const [selectCutsomVisible, setselectCutsomVisible] = useState(false);

  const openSelectCustom = () => {
    setselectCutsomVisible(true);
  };

  const closeSelectCustom = () => {
    setselectCutsomVisible(false);
  };

  //filter
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedLocation, setSelectedLocation] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const [extraMenusOpen, setExtraMenusOpen] = React.useState({});
  const [popupDropdownOpen, setPopupDropdownOpen] = useState(false);

  const handleClick = (event) => {
  setPopupDropdownOpen(true);
  setAnchorEl(event.currentTarget);
};

const handleClose = () => {
  setPopupDropdownOpen(false);
  setAnchorEl(null);
};


useEffect(() => {
  // Disable main scroll when the popup dropdown is open
  if (popupDropdownOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto'; // Enable main scroll when the popup dropdown is closed
  }

  // Clean up the effect
  return () => {
    document.body.style.overflow = 'auto'; // Make sure to reset the scroll behavior when the component unmounts
  };
}, [popupDropdownOpen]);

 

   const handleLocationSelect = (location) => {
  if (location === 'Select All') {
    const allLocations = Object.keys(availableSubcomponents);
    if (selectedLocation.length === allLocations.length) {
      setSelectedLocation([]);
      setSelectedOptions({});
    } else {
      setSelectedLocation(allLocations);
      const allOptions = allLocations.reduce((acc, loc) => {
        acc[loc] = availableSubcomponents[loc];
        return acc;
      }, {});
      setSelectedOptions(allOptions);
    }
  } else {
    if (!selectedLocation.includes(location)) {
      setSelectedLocation([...selectedLocation, location]);

      // Automatically select and display the subcomponents of the selected location
      const subcomponents = availableSubcomponents[location];
      setSelectedOptions((prevState) => ({
        ...prevState,
        [location]: subcomponents,
      }));

      handleExtraMenuOpen(location); // Automatically open the extra menu when a location is selected
    } else {
      setSelectedLocation(selectedLocation.filter((selected) => selected !== location));
      setSelectedOptions((prevState) => ({
        ...prevState,
        [location]: [], // Clear subcomponents when location is deselected
      }));
      handleExtraMenuClose(location); // Automatically close the extra menu when a location is deselected
    }
    handleClose();
  }
};



const handleExtraMenuOpen = (location) => {
  setExtraMenusOpen((prevState) => ({
    ...prevState,
    [location]: true,
  }));
};

const handleExtraMenuClose = (location) => {
  setExtraMenusOpen((prevState) => ({
    ...prevState,
    [location]: false,
  }));
};


  const handleOptionSelect = (location, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [location]: prevState[location]?.includes(option)
        ? prevState[location].filter((selected) => selected !== option)
        : [...(prevState[location] || []), option],
    }));
  };

  const generateLocationLabel = () => {
    const numSelected = selectedLocation.length;
    if (numSelected === 0) {
      return 'Location';
    } else if (numSelected === 1) {
      return selectedLocation[0];
    } else {
      return ` ${numSelected} Locations`;
    }
  };

 const handleOptionDeselect = (location, option) => {
  setSelectedOptions((prevState) => ({
    ...prevState,
    [location]: prevState[location].filter((selected) => selected !== option),
  }));

  const allSubcomponentsDeselected =
    selectedOptions[location]?.length === 1 && option === selectedOptions[location][0];

  if (allSubcomponentsDeselected) {
    setSelectedLocation(selectedLocation.filter((selected) => selected !== location));
  }

  // Close the extra menu when deselecting an option
  handleExtraMenuClose(location);
};



  const handleSelectAll = () => {
    const allLocations = Object.keys(availableSubcomponents);
    if (selectedLocation.length === allLocations.length) {
      setSelectedLocation([]);
      setSelectedOptions({});
    } else {
      setSelectedLocation(allLocations);
      const allOptions = allLocations.reduce((acc, location) => {
        acc[location] = availableSubcomponents[location];
        return acc;
      }, {});
      setSelectedOptions(allOptions);
    }
  };

  
React.useEffect(() => {
  const openMenusCopy = { ...extraMenusOpen };
  for (const location of selectedLocation) {
    if (selectedOptions[location]?.length === 0) {
      openMenusCopy[location] = false;
    }
  }
  setExtraMenusOpen(openMenusCopy);
}, [selectedOptions]);


  return (
    <div>
      
      <div className="order-page">
        <div className="OR-container-1 grid-2">
          <div className="OR-container-1-left g-left">
            <div style={{ display: "flex", gap: "20px" }}>
              <button className="p-outline-button" onClick={openLocation} >
                <FontAwesomeIcon icon={faLocationDot} /> Location
              </button>
              <select
                className="OR-droptype"
                style={{width:'18%'}}
                name="languages"
                id="lang"
                onChange={(e) => orderTabClick(e.target.value)}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="onlineOrder">
                  Home Delivery
                </option>
                <option value="pickup">Pickup Order</option>
                <option value="tableOrder">Table Order</option>
                
              </select>
            </div>
            {/* onClick={openDateFilter} */}
        <div className="OR-h-modal">
              <button className="p-outline-button" >
                <FontAwesomeIcon icon={faCalendarDays} /> Date filter
              </button>
              <div className="OR-h-modal-open">
              {/* Date filter modal */}
              <div
                className="OR-datefilter-modal OR-datefilter-modal-open"
                
              >
                <div className="OR-datefilter-modal-content">
                  <div className="grid-2">
                    <p className="">Date Filter</p>
                    
                  </div>
                  <div className="grid-2">
                  <div
                    class="radio-container"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <label className="radio">
                      <input
                        type="radio"
                        name="date-group"
                        value="today"
                        onClick={closeSelectCustom}
                      />
                      Today
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="date-group"
                        value="yesterday"
                        onClick={closeSelectCustom}
                      />
                      Yesterday
                    </label>
                    <label className="radio">
                      <input
                        type="radio"
                        name="date-group"
                        value="last-7-days"
                        onClick={closeSelectCustom}
                      />
                      Last 7 Days
                    </label>
                    <label className="radio custom-radio">
                      <input
                        type="radio"
                        name="date-group"
                        value="custom"
                        onClick={openSelectCustom}
                      />
                      Custom
                    </label>
                    <button className="OR-datefilter-btn" style={{marginTop:'100px', marginLeft:'10px'}}>Submit</button>
                  </div>


                
                  <div className="date-input-container">
                  {selectCutsomVisible && (
                    <>
                    <div style={{display:'flex', alignItems:'center', gap:'60px'}}>
                      <div>
                    <p style={{fontSize:'12px'}}>From date </p>
                      <input type="date" name="fromDate" id="" className="styled-input" />
                      </div>
                      <div>
                      <p style={{fontSize:'12px'}}>To date </p>
                      <input type="date" name="Date" id="" className="styled-input" />
                      </div>
                    
                    </div>
                    </>
                  )}
                  </div>
                  </div>
                  
                </div>
              </div>  
              
              </div>
              </div>
              
          </div>
          <div className="OR-container-1-right g-right">
          <button className="p-button bg-purple OR-container-2-buttons" onClick={CreateOrder}>
                Create Order <FontAwesomeIcon icon={faCirclePlus} />
              </button>
              <button className="p-outline-button OR-container-2-buttons">
                <FontAwesomeIcon icon={faBars} /> Bulk action
              </button>
          
        </div>
          
        </div>
        
        {/* container 2 */}
        {/* All order */}
        {orderTypeTab === "all" && (
          <div>
          <div className="OR-container-2 grid-2">
            <div className="OR-container-2-left  g-left txt-grey f-14">
            <Link
                className={`OR-container-2-tabs ${
                  allTab === "ALL-Live Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Live Orders")}
              >
                Live Orders <span className="t-tip"> <FontAwesomeIcon icon={faCircleInfo} /> 
                <div class="t-tip-text f-12" style={{zIndex:'100'}}>
                                  Includes: New, In progress, Ready, Packed and Dispatched.
                                </div>
                                </span> <span className="txt-red">(15)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs ${
                  allTab === "ALL-New" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-New")}
              >
                New <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs ${
                  allTab === "ALL-In Progress" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-In Progress")}
              >
                In Progress <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  allTab === "ALL-Ready" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Ready")}
              >
                Ready <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  allTab === "ALL-Packed" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Packed")}
              >
                Packed <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs ${
                  allTab === "ALL-Dispatched" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Dispatched")}
              >
                Dispatched <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  allTab === "ALL-Delivered Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Delivered Orders")}
              >
                Delivered Orders <span className="txt-red">(5)</span>
              </Link>
              
              <Link
                className={`OR-container-2-tabs ${
                  allTab === "ALL-Cancelled Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Cancelled Orders")}
              >
                Cancelled Orders <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  allTab === "ALL-On hold" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-On hold")}
              >
                On Hold <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  allTab === "ALL-On hold" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-On hold")}
              >
                On Hold <span className="txt-red">(5)</span>
              </Link>
              
             
            </div>
            <div className="OR-container-2-right txt-grey g-right f-14">
               
            <div className="OR-container-2-actions">
                <p className="OR-container-2-tabs">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </p>
                <p className="OR-container-2-tabs">
                  <FontAwesomeIcon icon={faFilter} />
                </p>
              </div>
            </div>
          </div>
          
          </div>
        )}
        {/* Online order */}
        {orderTypeTab === "onlineOrder" && (
          <div className="OR-container-2 grid-2">
            <div className="OR-container-2-left  g-left txt-grey f-14">
            <Link
                className={`OR-container-2-tabs  ${
                  activeTab === "Live Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Live Orders")}
              >
                Live Orders <span className="t-tip"> <FontAwesomeIcon icon={faCircleInfo} /> 
                <div class="t-tip-text f-12" style={{zIndex:'100'}}>
                                  Includes: New, In progress, Ready, Packed and Dispatched.
                                </div>
                                </span> <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs ${
                  activeTab === "New" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("New")}
              >
                New <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs ${
                  activeTab === "In Progress" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("In Progress")}
              >
                In Progress <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  activeTab === "Ready" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Ready")}
              >
                Ready <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  activeTab === "Packed" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Packed")}
              >
                Packed <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs ${
                  activeTab === "Dispatched" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Dispatched")}
              >
                Dispatched <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  activeTab === "Delivered Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Delivered Orders")}
              >
                Delivered Orders <span className="txt-red">(5)</span>
              </Link>
              
              <Link
                className={`OR-container-2-tabs ${
                  activeTab === "Cancelled Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Cancelled Orders")}
              >
                Cancelled Orders <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  activeTab === "On hold" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("On hold")}
              >
                On Hold <span className="txt-red">(5)</span>
              </Link>
              
            </div>
            <div className="OR-container-2-left txt-grey f-14 g-right">
            <div className="OR-container-2-actions">
                <p className="OR-container-2-tabs">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </p>
                <p className="OR-container-2-tabs">
                  <FontAwesomeIcon icon={faFilter} />
                </p>
              </div>
            </div>
          </div>
        )}
        {/* Pickup Order */}
        {orderTypeTab === "pickup" && (
          <div className="OR-container-2 grid-2">
          <div className="OR-container-2-left  g-left txt-grey f-14">
          <Link
              className={`OR-container-2-tabs  ${
                pickupTab === "PA-Live Orders" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-Live Orders")}
            >
              Live Orders <span className="t-tip"> <FontAwesomeIcon icon={faCircleInfo} /> 
                <div class="t-tip-text f-12" style={{zIndex:'100'}}>
                                  Includes: New, In progress, Ready, Packed and Dispatched.
                                </div>
                                </span> <span className="txt-red">(5)</span>
            </Link>
            <Link
              className={`OR-container-2-tabs ${
                pickupTab === "PA-New" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-New")}
            >
              New <span className="txt-red">(5)</span>
            </Link>
            <Link
              className={`OR-container-2-tabs ${
                pickupTab === "PA-In Progress" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-In Progress")}
            >
              In Progress <span className="txt-red">(5)</span>
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                pickupTab === "PA-Ready" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-Ready")}
            >
              Ready <span className="txt-red">(5)</span>
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                pickupTab === "PA-Packed" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-Packed")}
            >
              Packed <span className="txt-red">(5)</span>
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                pickupTab === "PA-Delivered Orders" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-Delivered Orders")}
            >
              Delivered Orders <span className="txt-red">(5)</span>
            </Link>
            
            <Link
              className={`OR-container-2-tabs ${
                pickupTab === "PA-Cancelled Orders" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-Cancelled Orders")}
            >
              Cancelled Orders <span className="txt-red">(5)</span>
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                pickupTab === "PA-On hold" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-On hold")}
            >
              On Hold <span className="txt-red">(5)</span>
            </Link>
          </div>
          <div className="OR-container-2-left g-right f-14 txt-grey">
          <div className="OR-container-2-actions">
              <p className="OR-container-2-tabs">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </p>
              <p className="OR-container-2-tabs">
                <FontAwesomeIcon icon={faFilter} />
              </p>
            </div>
          </div>
        </div>
        )}
        {/* Table order */}
        {orderTypeTab === "tableOrder" && (
          <div className="OR-container-2 grid-2">
          <div className="OR-container-2-left  g-left txt-grey f-14">
            <Link
              className={`OR-container-2-tabs ${
                tableTab === "TB-New" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handleTableClick("TB-New")}
            >
              New <span className="txt-red">(5)</span>
            </Link>
            <Link
              className={`OR-container-2-tabs ${
                tableTab === "TB-In Progress" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handleTableClick("TB-In Progress")}
            >
              In Progress <span className="txt-red">(5)</span>
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                tableTab === "TB-Ready" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handleTableClick("TB-Ready")}
            >
              Ready <span className="txt-red">(5)</span>
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                tableTab === "TB-Delivered Orders" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handleTableClick("PA-Delivered Orders")}
            >
              Delivered Orders <span className="txt-red">(5)</span>
            </Link>
            <Link
              className={`OR-container-2-tabs ${
                tableTab === "TB-Cancelled Orders" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handleTableClick("TB-Cancelled Orders")}
            >
              Cancelled Orders <span className="txt-red">(5)</span>
            </Link>
          </div>
          <div className="OR-container-2-left g-right txt-grey f-14">
          <div className="OR-container-2-actions">
              <p className="OR-container-2-tabs">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </p>
              <p className="OR-container-2-tabs">
                <FontAwesomeIcon icon={faFilter} />
              </p>
            </div>
          </div>
        </div>
        )}
        
      </div>


      {/* All order*/}
      {orderTypeTab === "all" &&  (
        <div>
      {allTab === "ALL-New" && (
        <div className="OR-content-position">
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">All-Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#FEFFB6",
                    borderColor: "#FEFFB6",
                  }}
                >
                  <option value="" disabled selected>
                    In progress
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#73f596",
                    borderColor: "#73f596",
                  }}
                >
                  <option value="" disabled selected>
                    Dispatch
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#50b66c",
                    borderColor: "#50b66c",
                  }}
                >
                  <option value="" disabled selected>
                    Delivered
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#9dfff9",
                    borderColor: "#9dfff9",
                  }}
                >
                  <option value="" disabled selected>
                    Packed
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#f4f675",
                    borderColor: "#f4f675",
                  }}
                >
                  <option value="" disabled selected>
                    Ready
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
        </div>
      )}
      {allTab === "ALL-Ready" && (
        <div className="OR-content-position">
          <div className="OR-content">ALL-Ready</div>
          <div className="OR-content">hi</div>
          <div className="OR-content">hi</div>
          <div className="OR-content">hi</div>
        </div>
      )}
      {allTab === "ALL-In Progress" && (
        <div className="OR-content-position">
          <div className="OR-content">ALL-Progress</div>
          <div className="OR-content">hi</div>
          <div className="OR-content">hi</div>
          <div className="OR-content">hi</div>
        </div>
      )}
      {allTab === "ALL-Live Orders" && (
        <div className="OR-content-position">
        <div className="OR-content">ALL-Live Orders</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
      </div>
      )}      
      </div>
      )}
      

      {/* Online order*/}
      {orderTypeTab === "onlineOrder" && (
        <div>
      {activeTab === "New" && (
        <div className="OR-content-position">
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">ON-Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#FEFFB6",
                    borderColor: "#FEFFB6",
                  }}
                >
                  <option value="" disabled selected>
                    In progress
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#73f596",
                    borderColor: "#73f596",
                  }}
                >
                  <option value="" disabled selected>
                    Dispatch
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#50b66c",
                    borderColor: "#50b66c",
                  }}
                >
                  <option value="" disabled selected>
                    Delivered
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#9dfff9",
                    borderColor: "#9dfff9",
                  }}
                >
                  <option value="" disabled selected>
                    Packed
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#f4f675",
                    borderColor: "#f4f675",
                  }}
                >
                  <option value="" disabled selected>
                    Ready
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
        </div>
      )}
      {activeTab === "Ready" && (
        <div className="OR-content-position">
          <div className="OR-content">Ready</div>
          <div className="OR-content">hi</div>
          <div className="OR-content">hi</div>
          <div className="OR-content">hi</div>
        </div>
      )}
      {activeTab === "Live Orders" && (
        <div className="OR-content-position">
        <div className="OR-content">Live Orders</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
      </div>
      )}
      </div>
      )}

       {/* Pickup order*/}
       {orderTypeTab === "pickup" && (
        <div>
       {pickupTab === "PA-New" &&(
        <div className="OR-content-position">
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">PA-Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#FEFFB6",
                    borderColor: "#FEFFB6",
                  }}
                >
                  <option value="" disabled selected>
                    In progress
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#73f596",
                    borderColor: "#73f596",
                  }}
                >
                  <option value="" disabled selected>
                    Dispatch
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#50b66c",
                    borderColor: "#50b66c",
                  }}
                >
                  <option value="" disabled selected>
                    Delivered
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#9dfff9",
                    borderColor: "#9dfff9",
                  }}
                >
                  <option value="" disabled selected>
                    Packed
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#f4f675",
                    borderColor: "#f4f675",
                  }}
                >
                  <option value="" disabled selected>
                    Ready
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
        </div>
      )}
      {pickupTab === "PA-In Progress" && (
        <div className="OR-content-position">
          <div className="OR-content">PA-In progress</div>
          <div className="OR-content">hi</div>
          <div className="OR-content">hi</div>
          <div className="OR-content">hi</div>
        </div>
      )}
       {pickupTab === "PA-Live Orders" && (
        <div className="OR-content-position">
        <div className="OR-content">PA-Live Orders</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
      </div>
      )}
      </div>
      )}

      {/* Table order*/}
      {orderTypeTab === "tableOrder" && (
        <div>
       {tableTab === "TB-New" &&(
        <div className="OR-content-position">
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">TB-Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#FEFFB6",
                    borderColor: "#FEFFB6",
                  }}
                >
                  <option value="" disabled selected>
                    In progress
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#73f596",
                    borderColor: "#73f596",
                  }}
                >
                  <option value="" disabled selected>
                    Dispatch
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#50b66c",
                    borderColor: "#50b66c",
                  }}
                >
                  <option value="" disabled selected>
                    Delivered
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#9dfff9",
                    borderColor: "#9dfff9",
                  }}
                >
                  <option value="" disabled selected>
                    Packed
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
          <div className="OR-content">
            <div className="OR-info">
              <div className="txt-black OR-info-1-spacing">
                <div style={{ display: "flex", gap: "10px" }}>
                  <div className="OR-g1-logo-back bg-orange">
                    <img
                      src="kb_logo.png"
                      alt=""
                      width={"26px"}
                      height={"25px"}
                      style={{ marginLeft: "-2px" }}
                    />
                    <p className="OR-info-1-brand txt-orange">Knight Bite</p>
                  </div>

                  <div className="OR-info-1-orders bg-green">
                    <p className="OR-info-1-order-text"> 32 Orders</p>
                  </div>
                </div>
                <p style={{ fontSize: "15px" }}>
                  Order ID: <b>#20001</b>
                </p>
                <p>2:03 AM, Sunday 6th June</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <span>
                    <FontAwesomeIcon icon={faUser} /> &nbsp;Admin
                  </span>
                  <Icon icon="mdi:printer" width={"20px"} />
                </div>
              </div>

              <p className="OR-info-line"></p>
              <div className="OR-info-2-spacing">
                <p className="txt-black OR-info-2-name">Alex</p>
                <div style={{ display: "flex", gap: "40px" }}>
                  <p className="txt-black OR-info-2-phone">8452147859</p>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Icon
                      icon="logos:whatsapp-icon"
                      color="blue"
                      width={"18px"}
                    />
                    <Icon icon="ic:sharp-call" color="blue" width={"18px"} />
                    <Icon
                      icon="fa6-solid:location-dot"
                      color="#fa4d4d"
                      width={"12px"}
                    />
                  </div>
                </div>
                <p>
                  House/Flat No:st. agnes pg center WH5 7H3,
                  kadri,Managluru,Karnataka, India
                </p>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-3-spacing">
                <p className="OR-info-3-special-request">
                  Special Request:<b>Spicy</b>
                </p>
                <ol>
                  <li>Boneless Chicken Burger</li>
                  <li>Water</li>
                  <li>Tandoori Chicken Burge</li>
                  <ul>
                    <li>
                      Extras: <b>Cheese</b>
                    </li>
                  </ul>
                  <li>Knight Zinger Chicken Burgerrrrrrrrrrrrrrrrrrrrrrrrrr</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                  <li>Knight Zinger Chicken Burger</li>
                </ol>
              </div>
              <p className="OR-info-line"></p>

              <div className="OR-info-4-spacing">
                <div>
                  <Icon icon="bxs:offer" color="#3a7cf5" width="30" />
                  <p style={{ fontSize: "15px" }}>
                    ₹675 <Icon icon="material-symbols:info" color="#fa4d4d" />
                  </p>
                  <p>Applied code</p>
                  <p>745874521478</p>
                </div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-5-spacing">
                <select className="OR-dropbtn" name="languages" id="lang">
                  <option value="" disabled selected>
                    Choose DE
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-6-spacing">
                <button className="OR-code-btn">C.O.D</button>
                <div className="OR-pament-link">Send Payment link</div>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-7-spacing">
                <select
                  className="OR-dropbtn"
                  name="languages"
                  id="lang"
                  style={{
                    textAlign: "center",
                    width: "110px",
                    backgroundColor: "#f4f675",
                    borderColor: "#f4f675",
                  }}
                >
                  <option value="" disabled selected>
                    Ready
                  </option>
                  <option value="javascript">JavaScript</option>
                  <option value="php">PHP</option>
                  <option value="java">Java</option>
                  <option value="golang">Golang</option>
                  <option value="python">Python</option>
                  <option value="c#">C#</option>
                  <option value="C++">C++</option>
                  <option value="erlang">Erlang</option>
                </select>
              </div>
              <p className="OR-info-line"></p>
              <div className="OR-info-8-spacing">
                <Icon icon="mdi:pencil" color="#2e2e2e" width="30" />
              </div>
            </div>
          </div>
        </div>
      )}
      {tableTab === "TB-In Progress" && (
        <div className="OR-content-position">
          <div className="OR-content">TB-In progress</div>
          <div className="OR-content">hi</div>
          <div className="OR-content">hi</div>
          <div className="OR-content">hi</div>
        </div>
      )}
      {tableTab === "TB-Live Orders" && (
        <div className="OR-content-position">
        <div className="OR-content">TB-LIve Orders</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
      </div>
      )}
      </div>
      )}





      {/* Location modal */}
      {locationVisible && (
        <div
          className={`location-modal ${
            locationVisible ? "location-modal-open" : ""
          }`}
        >
          <div className="location-modal-content">
            <div className="location-modal-content-inside">
            <div className="grid-2">
              <p className="" style={{fontSize:'20px',marginLeft:'10px'}}>Location Filter</p>
              <span
                className=""
                style={{ textAlign: "right", marginTop: "14px" }}
                onClick={closeLocation}
              >
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

            <Button
        style={{
          border: '1px solid black',
          borderRadius: '30px',
          color: 'black',
          top: '10px',
          marginLeft: '10px',
        }}
        className={classes.root}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faMapLocationDot} style={{marginRight:'10px',color:'#ED8382',fontSize:'18px'}}/>
        {generateLocationLabel()}
        <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:'10px'}} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          className: classes.scrollbar,
          style: {
            marginTop: '10px',
            width: '250px',
            border: '1px solid',
            borderRadius: '5px',
            outline: 'none',
            overflow: 'auto',
            height:'200px',
          },
        }}
      >
        <MenuItem key="Select All" onClick={() => handleLocationSelect('Select All')}>
          <Checkbox
            checked={selectedLocation.length === Object.keys(availableSubcomponents).length}
            indeterminate={selectedLocation.length > 0 && selectedLocation.length < Object.keys(availableSubcomponents).length}
          />
          Select All
        </MenuItem>
        
        {Object.keys(availableSubcomponents).map((location) => (
          <MenuItem key={location} onClick={() => handleLocationSelect(location)}>
            <Checkbox checked={selectedLocation.includes(location)} />
            {location}
          </MenuItem>
        ))}
      </Menu>
       {selectedLocation.length > 0 && (
    <div className={classes.selectedOptionsContainer} style={{display: 'flex', flexWrap: 'wrap'}}>
      {selectedLocation.map((location) => (
        <div key={location} style={{ marginRight: '10px', marginTop:'10px'}}>
          <Button
            style={{
              border: '1px solid black',
              borderRadius: '30px',
              color: 'black',
              top: '80px',
              left: '4px',
              marginRight: '10px',
              display: 'flex',
            }}
            onClick={() => handleExtraMenuOpen(location)}
          >
            {location}
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:'10px'}} />
          </Button>
          {extraMenusOpen[location] && (
            <Menu
              anchorEl={anchorEl}
              open={extraMenusOpen[location]}
              onClose={() => handleExtraMenuClose(location)}
              PaperProps={{
                className: classes.scrollbar,
                style: {
                  position: 'absolute',
                  top: '40px',
                  left: '0',
                  marginTop: '-350px',
                  borderRadius: '5px',
                  border: '1px solid',
                  width: '250px',
                  height: '200px',
                  overflow: 'auto',
                  marginLeft:'375px'
                },
              }}
            >
              {availableSubcomponents[location]?.map((option, index) => (
  <MenuItem key={option}>
    <Checkbox
      checked={selectedOptions[location]?.includes(option)}
      onChange={() => handleOptionSelect(location, option)}
      disabled={
        selectedOptions[location]?.length === 1 &&
        selectedOptions[location]?.includes(option)
      }
    />
    {option}
  </MenuItem>
))}

            </Menu>
          )}
        </div>
      ))}
    </div>
  )}

{selectedLocation.length > 0 && (
  <div style={{ marginTop: '100px' }}>
    {selectedLocation.map((location) => (
      <div style={{marginLeft:'10px'}}><b>{location}</b>
      <div key={location} style={{ marginTop: '0px', marginLeft: '0px', display: 'flex', flexWrap: 'wrap' }}>
        
        {selectedOptions[location]?.map((option) => (
          <div key={option} className={classes.selectedOption} style={{ marginTop: '10px', boxSizing: 'border-box', paddingRight: '10px' }}>
            <div className="grid-2">
              <div style={{ marginTop: '5px', width: 'auto' }}>
                {option}
              </div>
              <div>
                <FontAwesomeIcon className="location-close-btn"
                  icon={faCircleXmark}
                  style={{
                    // color: '#d11f1f',
                    fontSize: '20px',
                    marginLeft: '10px',
                    marginTop: '3px'
                  }}
                  onClick={() => handleOptionDeselect(location, option)}
                />
              </div>
            </div>
            
          </div>
          
        ))}
        <div style={{width:'100%',height:'1px',backgroundColor:'#aeaeae',marginTop:'10px',marginBottom:'10px'}}></div>
      </div>
      </div>
    ))}
  </div>
)}



          </div>
          </div>
        </div>
      )}
      {/* Date filter modal */}
      {dateFilterVisible && (
        <div
          className={`OR-datefilter-modal ${
            dateFilterVisible ? "OR-datefilter-modal-open" : ""
          }`}
        >
          <div className="OR-datefilter-modal-content">
            <div className="grid-2">
              <p className="">Date Filter</p>
              <span
                className=""
                style={{ textAlign: "right", marginTop: "14px" }}
                onClick={closeDateFilter}
              >
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
            <div className="grid-2">
            <div
              class="radio-container"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <label className="radio">
                <input
                  type="radio"
                  name="date-group"
                  value="today"
                  onClick={closeSelectCustom}
                />
                Today
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="date-group"
                  value="yesterday"
                  onClick={closeSelectCustom}
                />
                Yesterday
              </label>
              <label className="radio">
                <input
                  type="radio"
                  name="date-group"
                  value="last-7-days"
                  onClick={closeSelectCustom}
                />
                Last 7 Days
              </label>
              <label className="radio custom-radio">
                <input
                  type="radio"
                  name="date-group"
                  value="custom"
                  onClick={openSelectCustom}
                />
                Custom
              </label>
              <button className="OR-datefilter-btn" style={{marginTop:'100px', marginLeft:'10px'}}>Submit</button>
            </div>


          
            <div className="date-input-container">
            {selectCutsomVisible && (
              <>
              <div style={{display:'flex', alignItems:'center', gap:'60px'}}>
                <div>
              <p style={{fontSize:'12px'}}>From date </p>
                <input type="date" name="fromDate" id="" className="styled-input" />
                </div>
                <div>
                <p style={{fontSize:'12px'}}>To date </p>
                <input type="date" name="Date" id="" className="styled-input" />
                </div>
              
              </div>
              </>
            )}
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
