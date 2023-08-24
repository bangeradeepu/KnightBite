import { useState } from "react";
import React from "react";

import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";

import {
  faFilter,
  faBars,
  faUser,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./Orders.css";

const styles = {
  activeTab: {
    fontWeight: "bold",
    color: "#175c3a",
  },
};

const useStyles = makeStyles({
  root: {},
  icon: {},
  redIcon: {},
  selectedOptionsContainer: {
    display: "flex",
    alignItems: "center",
    marginLeft: "0px",
  },
  selectedOption: {
    background: "#fffff",
    border: "1px solid #ccc",
    borderRadius: 20,
    padding: "8px 10px",
    marginRight: 5,
    display: "flex",
    alignItems: "center",
  },
  closeIcon: {
    marginLeft: 5,
    cursor: "pointer",
  },
  scrollbar: {
    height: "80px", // Adjust the scroll height as needed
    width: "100%", // Adjust the width as needed
    overflowY: "auto",
    scrollbarWidth: "thin", // For Firefox
    "&::-webkit-scrollbar": {
      width: "8px", // For Chrome, Safari, and Opera
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ccc", // Customize the thumb color
      borderRadius: "4px", // Rounder corners for the thumb
    },
  },

  selectedOptionsRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap", // Set to 'nowrap' initially to prevent wrapping
  },
});

const Orders = () => {
  // order type
  const [orderTypeTab, setorderTypeTab] = useState("onlineOrder");
  const orderTabClick = (tabName) => {
    setorderTypeTab(tabName);
  };


  // online tab change
  const [activeTab, setActiveTab] = useState("New");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  // Pickup tab change
  const [pickupTab, setPickupTab] = useState("PA-New");
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
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const [extraMenuOpen, setExtraMenuOpen] = React.useState(false);
  const [secondaryMenuOpen, setSecondaryMenuOpen] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    handleClose();
    setExtraMenuOpen(false);
    setSelectedOptions([]);
    setSecondaryMenuOpen(false);
  };

  const handleExtraMenuOpen = () => {
    setExtraMenuOpen(true);
    setSecondaryMenuOpen(false);
  };

  const handleOptionSelect = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions([...selectedOptions, option]);
    }
    setSecondaryMenuOpen(true);
  };

  const handleOptionDeselect = (option) => {
    setSelectedOptions(
      selectedOptions.filter((selected) => selected !== option)
    );
  };

  const optionsPerRow = 2; // Adjust this number as needed
  const optionsRows = [];

  for (let i = 0; i < selectedOptions.length; i += optionsPerRow) {
    const row = selectedOptions.slice(i, i + optionsPerRow);
    optionsRows.push(row);
  }

  return (
    <div>
      <div className="order-page">
        <div className="OR-container-1 grid-2">
          <div className="OR-container-1-left g-left">
            <div style={{ display: "flex", gap: "20px" }}>
              <button className="p-outline-button" onClick={openLocation}>
                <FontAwesomeIcon icon={faLocationDot} /> Location
              </button>
              <select
                className="OR-droptype"
                style={{}}
                name="languages"
                id="lang"
                onChange={(e) => orderTabClick(e.target.value)}
              >
                <option value="onlineOrder" selected>
                  Online
                </option>
                {/* <option value="onlineOrder">Online</option> */}
                <option value="pickup">Pickup</option>
                <option value="tableOrder">Table</option>
                
              </select>
              <button className="p-outline-button" onClick={openDateFilter}>
                <FontAwesomeIcon icon={faCalendarDays} /> Date filter
              </button>
            </div>
          </div>
          <div className="OR-container-1-right g-right">
            <div className="OR-container-1-status">
              <svg
                width="15"
                height="15"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#B8D9C6" />
                <circle cx="6" cy="6" r="2" fill="#239258" />
              </svg>{" "}
              Live Orders <b>20</b>
            </div>
            <div className="OR-container-1-status">
              <FontAwesomeIcon icon={faCircleCheck} className="txt-green" />{" "}
              Delivered Orders <b>20</b>
            </div>
            <div className="OR-container-1-status">
              <FontAwesomeIcon icon={faCircleXmark} className="txt-red" />{" "}
              Canceled orders <b>20</b>
            </div>
          </div>
        </div>
        {/* container 2 */}
        {/* Online order */}
        {orderTypeTab === "onlineOrder" && (
          <div className="OR-container-2 grid-2">
            <div className="OR-container-2-left  g-left txt-grey">
              <Link
                className={`OR-container-2-tabs ${
                  activeTab === "New" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("New")}
              >
                New
              </Link>
              <Link
                className={`OR-container-2-tabs ${
                  activeTab === "In Progress" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("In Progress")}
              >
                In Progress
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  activeTab === "Ready" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Ready")}
              >
                Ready
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  activeTab === "Packed" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Packed")}
              >
                Packed
              </Link>
              <Link
                className={`OR-container-2-tabs ${
                  activeTab === "Dispatched" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Dispatched")}
              >
                Dispatched
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  activeTab === "Delivered Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Delivered Orders")}
              >
                Delivered Orders
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  activeTab === "Live Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Live Orders")}
              >
                Live Orders
              </Link>
              <Link
                className={`OR-container-2-tabs ${
                  activeTab === "Cancelled Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Cancelled Orders")}
              >
                Cancelled Orders
              </Link>
              <Link
                className={`OR-container-2-tabs  ${
                  activeTab === "On hold" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("On hold")}
              >
                On Hold
              </Link>
              <div className="OR-container-2-actions">
                <p className="OR-container-2-tabs">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </p>
                <p className="OR-container-2-tabs">
                  <FontAwesomeIcon icon={faFilter} />
                </p>
              </div>
            </div>
            <div className="OR-container-2-left g-right">
              <button className="p-button bg-purple OR-container-2-buttons">
                Create Order <FontAwesomeIcon icon={faCirclePlus} />
              </button>
              <button className="p-outline-button OR-container-2-buttons">
                <FontAwesomeIcon icon={faBars} /> Bulk action
              </button>
              <p className="OR-container-2-buttons">View all</p>
            </div>
          </div>
        )}
        {/* Pickup Order */}
        {orderTypeTab === "pickup" && (
          <div className="OR-container-2 grid-2">
          <div className="OR-container-2-left  g-left txt-grey">
            <Link
              className={`OR-container-2-tabs ${
                pickupTab === "PA-New" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-New")}
            >
              New
            </Link>
            <Link
              className={`OR-container-2-tabs ${
                pickupTab === "PA-In Progress" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-In Progress")}
            >
              In Progress
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                pickupTab === "PA-Ready" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-Ready")}
            >
              Ready
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                pickupTab === "PA-Packed" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-Packed")}
            >
              Packed
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                pickupTab === "PA-Delivered Orders" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-Delivered Orders")}
            >
              Delivered Orders
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                pickupTab === "PA-Live Orders" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-Live Orders")}
            >
              Live Orders
            </Link>
            <Link
              className={`OR-container-2-tabs ${
                pickupTab === "PA-Cancelled Orders" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-Cancelled Orders")}
            >
              Cancelled Orders
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                pickupTab === "PA-On hold" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handlePikupClick("PA-On hold")}
            >
              On Hold
            </Link>
            <div className="OR-container-2-actions">
              <p className="OR-container-2-tabs">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </p>
              <p className="OR-container-2-tabs">
                <FontAwesomeIcon icon={faFilter} />
              </p>
            </div>
          </div>
          <div className="OR-container-2-left g-right">
            <button className="p-button bg-purple OR-container-2-buttons">
              Create Order <FontAwesomeIcon icon={faCirclePlus} />
            </button>
            <button className="p-outline-button OR-container-2-buttons">
              <FontAwesomeIcon icon={faBars} /> Bulk action
            </button>
            <p className="OR-container-2-buttons">View all</p>
          </div>
        </div>
        )}
        {/* Table order */}
        {orderTypeTab === "tableOrder" && (
          <div className="OR-container-2 grid-2">
          <div className="OR-container-2-left  g-left txt-grey">
            <Link
              className={`OR-container-2-tabs ${
                tableTab === "TB-New" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handleTableClick("TB-New")}
            >
              New
            </Link>
            <Link
              className={`OR-container-2-tabs ${
                tableTab === "TB-In Progress" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handleTableClick("TB-In Progress")}
            >
              In Progress
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                tableTab === "TB-Ready" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handleTableClick("TB-Ready")}
            >
              Ready
            </Link>
            <Link
              className={`OR-container-2-tabs  ${
                tableTab === "TB-Delivered Orders" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handleTableClick("PA-Delivered Orders")}
            >
              Delivered Orders
            </Link>
            <Link
              className={`OR-container-2-tabs ${
                tableTab === "TB-Cancelled Orders" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handleTableClick("TB-Cancelled Orders")}
            >
              Cancelled Orders
            </Link>
            <div className="OR-container-2-actions">
              <p className="OR-container-2-tabs">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </p>
              <p className="OR-container-2-tabs">
                <FontAwesomeIcon icon={faFilter} />
              </p>
            </div>
          </div>
          <div className="OR-container-2-left g-right">
            <button className="p-button bg-purple OR-container-2-buttons">
              Create Order <FontAwesomeIcon icon={faCirclePlus} />
            </button>
            <button className="p-outline-button OR-container-2-buttons">
              <FontAwesomeIcon icon={faBars} /> Bulk action
            </button>
            <p className="OR-container-2-buttons">View all</p>
          </div>
        </div>
        )}
        


      </div>

      {/* Online order*/}
      {orderTypeTab === "onlineOrder" && (
        <div>
      {activeTab === "New" && (
        <div className="OR-content-position">
          <div className="OR-content">
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
      </div>
      )}

       {/* Pickup order*/}
       {orderTypeTab === "pickup" && (
        <div>
       {pickupTab === "PA-New" &&(
        <div className="OR-content-position">
          <div className="OR-content">
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
      </div>
      )}

      {/* Table order*/}
      {orderTypeTab === "tableOrder" && (
        <div>
       {tableTab === "TB-New" &&(
        <div className="OR-content-position">
          <div className="OR-content">
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div class="OR-info">
              <div class="txt-black OR-info-1-spacing">
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
            <div className="grid-2">
              <p className="">Location Filter</p>
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
                border: "1px solid black",
                borderRadius: "30px",
                color: "black",
                marginLeft: "0px",
              }}
              className={classes.root}
              onClick={handleClick}
            >
              <LocationOnIcon
                className={`${classes.icon} ${classes.redIcon}`}
              />
              {selectedLocation || "Location"}
              <ArrowDropDownIcon className={classes.icon} />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                style: {
                  marginTop: "10px",
                  width: "250px",
                  border: "1px solid",
                  borderRadius: "5px",
                  outline: "none",
                },
              }}
            >
              <MenuItem onClick={() => handleLocationSelect("Mangalore")}>
                <Checkbox checked={selectedLocation === "Mangalore"} />
                Mangalore
              </MenuItem>
              <MenuItem onClick={() => handleLocationSelect("Bangalore")}>
                <Checkbox checked={selectedLocation === "Bangalore"} />
                Bangalore
              </MenuItem>
            </Menu>
            {selectedLocation && (
              <div>
                <Button
                  style={{
                    border: "1px solid black",
                    borderRadius: "30px",
                    color: "black",

                    marginLeft: "170px",
                    marginTop: "-60px",
                  }}
                  onClick={handleExtraMenuOpen}
                >
                  {selectedLocation}
                  <ArrowDropDownIcon className={classes.icon} />
                </Button>

                {extraMenuOpen && (
                  <Menu
                    anchorEl={anchorEl}
                    open={extraMenuOpen}
                    onClose={() => setExtraMenuOpen(false)}
                    PaperProps={{
                      className: classes.scrollbar,
                      style: {
                        marginLeft: "365px",
                        borderRadius: "5px",
                        border: "1px solid",
                        width: "250px",
                        marginTop: "-320px",
                        height: "200px",
                        overflow: "auto",
                      },
                    }}
                  >
                    {selectedLocation === "Mangalore" && (
                      <div>
                        <MenuItem
                          onClick={() => handleOptionSelect("Knight Bite")}
                        >
                          <Checkbox
                            checked={selectedOptions.includes("Knight Bite")}
                          />
                          Knight Bite
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleOptionSelect("Pancake Bite")}
                        >
                          <Checkbox
                            checked={selectedOptions.includes("Pancake Bite")}
                          />
                          Pancake Bite
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleOptionSelect("cake Bite")}
                        >
                          <Checkbox
                            checked={selectedOptions.includes("cake Bite")}
                          />
                          Cake Bite
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleOptionSelect("Some Bite")}
                        >
                          <Checkbox
                            checked={selectedOptions.includes("Some Bite")}
                          />
                          Some Bite
                        </MenuItem>
                      </div>
                    )}
                    {selectedLocation === "Bangalore" && (
                      <div>
                        <MenuItem
                          onClick={() => handleOptionSelect("Chicken Bite")}
                        >
                          <Checkbox
                            checked={selectedOptions.includes("Chicken Bite")}
                          />
                          Chicken Bite
                        </MenuItem>
                        <MenuItem
                          onClick={() => handleOptionSelect("Masala Bite")}
                        >
                          <Checkbox
                            checked={selectedOptions.includes("Masala Bite")}
                          />
                          Masala Bite
                        </MenuItem>
                      </div>
                    )}
                  </Menu>
                )}
              </div>
            )}
            <div>
              {selectedOptions.length > 0 && (
                <div className={classes.selectedOptionsContainer}>
                  {Array.from({
                    length: Math.ceil(selectedOptions.length / optionsPerRow),
                  }).map((_, rowIndex) => (
                    <div key={rowIndex} className={classes.selectedOptionsRow}>
                      {selectedOptions
                        .slice(
                          rowIndex * optionsPerRow,
                          (rowIndex + 1) * optionsPerRow
                        )
                        .map((option) => (
                          <div key={option} className={classes.selectedOption}>
                            {option}
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              style={{
                                color: "#d11f1f",
                                fontSize: "20px",
                                marginLeft: "10px",
                              }}
                              onClick={() => handleOptionDeselect(option)}
                            />
                          </div>
                        ))}
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
