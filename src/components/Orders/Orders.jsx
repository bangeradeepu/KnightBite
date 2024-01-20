import { useState, useEffect } from "react";
import React from "react";
import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faBars,
  faCalendarDays,
  faCircleInfo,
  faMagnifyingGlass,
  faUser,
  faPrint,
  faPencil,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";

import "./Orders.css";


const initialData = [
  {
    id: 1,
    name: "KNIGHT BITE",
    orderID: "2001",
    admin: "Admin",
    orderTime: "2:03 AM",
    orderDate: "06-05-2023",
    customerName: "Shiekh Mohammed Sajjad",
    customerPhone: "8452565874",
    customerAddress: "House/Flat No:st. agnes pg center WH5 7H3 No:st. agnes pg center WH5 7H3..",
    orderCount: 31,
    specialRequest: "Spicy",
    orderItems: [
      "Boneless Chicken Burger",
      "Water",
      "Tandoori Chicken Burger",
      "Knight Zinger Chicken Burger",
      // Add more items as needed
    ],
    extras: [
      {
        item: "Boneless Chicken Burger",
        subItems: ["Extras: Cheese", /* Add more sub-items if needed */],
      },
      // Add more extras data objects as needed
    ],
    totalOrderAmount: "500",
    appliedCoupon:"78452145698",
  },
  // Add more data objects as needed
  {
    id: 2,
    name: "KNIGHT BITE",
    orderID: "2001",
    admin: "Admin",
    orderTime: "2:03 AM",
    orderDate: "06-06-2023",
    customerName: "Gagan",
    customerPhone: "8452565874",
    customerAddress: "House/Flat No:st. agnes pg center WH5 7H3 No:st. agnes pg center WH5 7H3..",
    orderCount: 31,
    specialRequest: "Spicy",
    orderItems: [
      "Boneless Chicken Burger",
      "Water",
      "Tandoori Chicken Burger",
      "Knight Zinger Chicken Burger",
      // Add more items as needed
    ],
    extras: [
      {
        item: "Boneless Chicken Burger",
        subItems: ["Extras: Cheese", /* Add more sub-items if needed */],
      },
      // Add more extras data objects as needed
    ],
    totalOrderAmount: "500",
    appliedCoupon:"78452145698",
  },
];
// Format date to string
function formatOrderDate(dateString) {
  const options = { weekday: "long", day: "numeric", month: "long" };
  const date = new Date(dateString);
  const day = date.toLocaleDateString("en-US", { weekday: "long" });
  const dateNum = date.getDate();
  const month = date.toLocaleDateString("en-US", { month: "long" });
  return `${day} ${dateNum}${getOrdinalSuffix(dateNum)} ${month}`;
}

// Helper function to add ordinal suffix to a number (e.g., 1st, 2nd, 3rd)
function getOrdinalSuffix(number) {
  if (number >= 11 && number <= 13) {
    return "th";
  }
  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
const Orders = () => {
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

  // Date filter custom
  const [selectCutsomVisible, setselectCutsomVisible] = useState(false);

  const openSelectCustom = () => {
    setselectCutsomVisible(true);
  };

  const closeSelectCustom = () => {
    setselectCutsomVisible(false);
  };

  // create new order
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("all"); // Initial value

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Perform the redirection based on the selected option
    if (selectedValue === "standardmode") {
      navigate("/orders/CreateOrder");
    } else if (selectedValue === "touchscreenmode") {
      navigate("/orders/touchScreen");
    }
  };

//Phone create Orders
  const CreateOrderPhone = () => {
    navigate("/orders/CreateOrder");
  };

  // Datefilter open
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  // Open sidenav
  const [sideNavRight, setSideNavRight] = useState(-380);

  const openNav = () => {
    setSideNavRight(0);
  };

  const closeNav = () => {
    setSideNavRight(-380);
  };
  // Open date modal in mobile
  const [dateModalPhone, setdateModalPhone] = useState(false);

  const opendateModalPhone = () => {
    setdateModalPhone(true);
  };

  const closedateModalPhone = () => {
    setdateModalPhone(false);
  };
  // Expand mobile card
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (id) => {
    setExpandedCard((prevExpandedCard) =>
      prevExpandedCard === id ? null : id
    );
  };

  return (
    <div className="ORDER-app">
      {/* Desktop Top */}
      <div className="OR-container-1">
        <div className="d-flex space-between align-item-center">
          <div>
            <div className="d-flex g-20">
              {/* Select Typeof order */}
              <select
                className="OR-droptype"
                name="languages"
                id="lang"
                onChange={(e) => orderTabClick(e.target.value)}
              >
                <option value="all" selected>
                  All
                </option>
                <option value="onlineOrder">Home Delivery</option>
                <option value="pickup">Pickup Order</option>
                <option value="tableOrder">Table Order</option>
              </select>
              <button className="p-outline-button" onMouseEnter={openModal}>
                <FontAwesomeIcon icon={faCalendarDays} /> Date filter
              </button>
              {isModalOpen && (
                <div className="main-modal main-modal-open hb">
                  <div className="main-modal-content" onMouseLeave={closeModal}>
                    <div className="f-18">Date Filter</div>
                    <br />
                    <div className="d-flex space-between">
                      <div
                        className="d-flex f-14"
                        style={{ flexDirection: "column", lineHeight: "2vw" }}
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
                        <br />
                        <br />
                        <button
                          className="p-button bg-purple f-12"
                          style={{ width: "7vw" }}
                        >
                          Submit
                        </button>
                      </div>
                      <div>
                        {selectCutsomVisible && (
                          <>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "60px",
                              }}
                              className="f-14"
                            >
                              <div>
                                <p style={{ fontSize: "12px" }}>From date </p>
                                <input
                                  type="date"
                                  name="fromDate"
                                  id=""
                                  className="t-box"
                                />
                              </div>
                              <div>
                                <p style={{ fontSize: "12px" }}>To date </p>
                                <input
                                  type="date"
                                  name="Date"
                                  id=""
                                  className="t-box"
                                />
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
          </div>
          <div className="d-flex g-20">
            <select
              className="OR-droptype"
              name="languages"
              id="lang"
              onChange={handleDropdownChange}
              value={selectedOption}
            >
              <option value="all" disabled>
                Create Order
              </option>
              <option value="standardmode">Standard Mode</option>
              <option value="touchscreenmode">Touch Screen Mode</option>
            </select>
            <button className="p-outline-button">
              <FontAwesomeIcon icon={faBars} /> Bulk action
            </button>
          </div>
        </div>
        <br />
        <br />

        {/* All orders */}
        {orderTypeTab === "all" && (
          <div className="d-flex space-between f-14">
            <div className="d-flex g-20">
              <Link
                className={`OR-container-1-tabs ${
                  allTab === "ALL-Live Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Live Orders")}
              >
                Live Orders{" "}
                <span className="t-tip">
                  {" "}
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <div class="t-tip-text f-12" style={{ zIndex: "100" }}>
                    Includes: New, In progress, Ready, Packed and Dispatched.
                  </div>
                </span>{" "}
                <span className="txt-red">(15)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs ${
                  allTab === "ALL-New" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-New")}
              >
                New <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs ${
                  allTab === "ALL-In Progress" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-In Progress")}
              >
                In Progress <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  allTab === "ALL-Ready" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Ready")}
              >
                Ready <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  allTab === "ALL-Packed" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Packed")}
              >
                Packed <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs ${
                  allTab === "ALL-Dispatched" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Dispatched")}
              >
                Dispatched <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  allTab === "ALL-Delivered Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Delivered Orders")}
              >
                Delivered Orders <span className="txt-red">(5)</span>
              </Link>

              <Link
                className={`OR-container-1-tabs ${
                  allTab === "ALL-Cancelled Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-Cancelled Orders")}
              >
                Cancelled Orders <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  allTab === "ALL-On hold" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleAllClick("ALL-On hold")}
              >
                On Hold <span className="txt-red">(5)</span>
              </Link>
            </div>
            <div className="d-flex g-20 txt-grey">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <FontAwesomeIcon icon={faFilter} />
            </div>
          </div>
        )}
        {/* Online Orders */}
        {orderTypeTab === "onlineOrder" && (
          <div className="d-flex space-between f-14">
            <div className="d-flex g-20">
              <Link
                className={`OR-container-1-tabs  ${
                  activeTab === "Live Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Live Orders")}
              >
                Live Orders{" "}
                <span className="t-tip">
                  {" "}
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <div class="t-tip-text f-12" style={{ zIndex: "100" }}>
                    Includes: New, In progress, Ready, Packed and Dispatched.
                  </div>
                </span>{" "}
                <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs ${
                  activeTab === "New" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("New")}
              >
                New <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs ${
                  activeTab === "In Progress" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("In Progress")}
              >
                In Progress <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  activeTab === "Ready" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Ready")}
              >
                Ready <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  activeTab === "Packed" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Packed")}
              >
                Packed <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs ${
                  activeTab === "Dispatched" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Dispatched")}
              >
                Dispatched <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  activeTab === "Delivered Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Delivered Orders")}
              >
                Delivered Orders <span className="txt-red">(5)</span>
              </Link>

              <Link
                className={`OR-container-1-tabs ${
                  activeTab === "Cancelled Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("Cancelled Orders")}
              >
                Cancelled Orders <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  activeTab === "On hold" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTabClick("On hold")}
              >
                On Hold <span className="txt-red">(5)</span>
              </Link>
            </div>
            <div className="d-flex g-20 txt-grey">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <FontAwesomeIcon icon={faFilter} />
            </div>
          </div>
        )}
        {/* Pickup Orders */}
        {orderTypeTab === "pickup" && (
          <div className="d-flex space-between f-14">
            <div className="d-flex g-20">
              <Link
                className={`OR-container-1-tabs  ${
                  pickupTab === "PA-Live Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handlePikupClick("PA-Live Orders")}
              >
                Live Orders{" "}
                <span className="t-tip">
                  {" "}
                  <FontAwesomeIcon icon={faCircleInfo} />
                  <div class="t-tip-text f-12" style={{ zIndex: "100" }}>
                    Includes: New, In progress, Ready, Packed and Dispatched.
                  </div>
                </span>{" "}
                <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs ${
                  pickupTab === "PA-New" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handlePikupClick("PA-New")}
              >
                New <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs ${
                  pickupTab === "PA-In Progress" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handlePikupClick("PA-In Progress")}
              >
                In Progress <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  pickupTab === "PA-Ready" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handlePikupClick("PA-Ready")}
              >
                Ready <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  pickupTab === "PA-Packed" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handlePikupClick("PA-Packed")}
              >
                Packed <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  pickupTab === "PA-Delivered Orders"
                    ? "txt-purple"
                    : "txt-grey"
                }`}
                onClick={() => handlePikupClick("PA-Delivered Orders")}
              >
                Delivered Orders <span className="txt-red">(5)</span>
              </Link>

              <Link
                className={`OR-container-1-tabs ${
                  pickupTab === "PA-Cancelled Orders"
                    ? "txt-purple"
                    : "txt-grey"
                }`}
                onClick={() => handlePikupClick("PA-Cancelled Orders")}
              >
                Cancelled Orders <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  pickupTab === "PA-On hold" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handlePikupClick("PA-On hold")}
              >
                On Hold <span className="txt-red">(5)</span>
              </Link>
            </div>
            <div className="d-flex g-20 txt-grey">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <FontAwesomeIcon icon={faFilter} />
            </div>
          </div>
        )}
        {/* Table Orders */}
        {orderTypeTab === "tableOrder" && (
          <div className="d-flex space-between f-14">
            <div className="d-flex g-20">
              <Link
                className={`OR-container-1-tabs ${
                  tableTab === "TB-New" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTableClick("TB-New")}
              >
                New <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs ${
                  tableTab === "TB-In Progress" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTableClick("TB-In Progress")}
              >
                In Progress <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  tableTab === "TB-Ready" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTableClick("TB-Ready")}
              >
                Ready <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs  ${
                  tableTab === "TB-Delivered Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTableClick("TB-Delivered Orders")}
              >
                Delivered Orders <span className="txt-red">(5)</span>
              </Link>
              <Link
                className={`OR-container-1-tabs ${
                  tableTab === "TB-Cancelled Orders" ? "txt-purple" : "txt-grey"
                }`}
                onClick={() => handleTableClick("TB-Cancelled Orders")}
              >
                Cancelled Orders <span className="txt-red">(5)</span>
              </Link>
            </div>
            <div className="d-flex g-20 txt-grey">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <FontAwesomeIcon icon={faFilter} />
            </div>
          </div>
        )}
      </div>
      {/* Phone top content */}
      <div className="p-top-container">
        <div className="d-flex space-between align-item-center">
          <select
            className="p-button bg-purple "
            name=""
            id=""
            onChange={(e) => orderTabClick(e.target.value)}
          >
            <option value="all" selected>
              All
            </option>
            <option value="onlineOrder">Home Delivery</option>
            <option value="pickup">Pickup Order</option>
            <option value="tableOrder">Table Order</option>
          </select>

          <div>
            <FontAwesomeIcon
              icon={faBars}
              className="f-main-20"
              onClick={openNav}
            />
          </div>
        </div>
        <br />
        <div className="d-flex space-between align-item-center">
          <div className="d-flex g-10">
            <button className="p-button bg-purple" onClick={CreateOrderPhone}>Create Order</button>
            <button className="p-outline-button">Bulk Action</button>
          </div>
          <button className="p-outline-button" onClick={opendateModalPhone}>
            Date filter
          </button>
        </div>
        {/* Sidenav for Order Types */}
        <div
          className="p-sidenav"
          id="mySidenav"
          style={{ right: sideNavRight }}
        >
          <div className="f-main-20">
            <FontAwesomeIcon icon={faXmark} onClick={closeNav} />
          </div>
          <br />

          {orderTypeTab === "all" && (
            <div>
              <div className="p-sidenav-header">All Orders</div>
              <div>
                <div>
                  <Link
                    className={`OR-container-1-tabs ${
                      allTab === "ALL-Live Orders" ? "txt-purple" : "txt-grey"
                    }`}
                    onClick={() => handleAllClick("ALL-Live Orders")}
                  >
                    <span onClick={closeNav}>Live Orders</span>{" "}
                    <span className="t-tip">
                      {" "}
                      <FontAwesomeIcon icon={faCircleInfo} />
                      <div
                        class="t-tip-text  f-12"
                        style={{
                          zIndex: "100",
                          backgroundColor: "rgba(0, 0, 0, 0.1)",
                          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          padding: "2vw",
                          textAlign: "left",
                          lineHeight: "5vw",
                        }}
                      >
                        Includes: New, In progress, Ready, Packed and
                        Dispatched.
                      </div>
                    </span>{" "}
                    <span className="txt-red">(15)</span>
                  </Link>
                </div>

                <div onClick={closeNav}>
                  <Link
                    className={`OR-container-1-tabs ${
                      allTab === "ALL-New" ? "txt-purple" : "txt-grey"
                    }`}
                    onClick={() => handleAllClick("ALL-New")}
                  >
                    New <span className="txt-red">(5)</span>
                  </Link>
                </div>

                <div onClick={closeNav}>
                  <Link
                    className={`OR-container-1-tabs ${
                      allTab === "ALL-In Progress" ? "txt-purple" : "txt-grey"
                    }`}
                    onClick={() => handleAllClick("ALL-In Progress")}
                  >
                    In Progress <span className="txt-red">(5)</span>
                  </Link>
                </div>

                <div onClick={closeNav}>
                  <Link
                    className={`OR-container-1-tabs  ${
                      allTab === "ALL-Ready" ? "txt-purple" : "txt-grey"
                    }`}
                    onClick={() => handleAllClick("ALL-Ready")}
                  >
                    Ready <span className="txt-red">(5)</span>
                  </Link>
                </div>

                <div onClick={closeNav}>
                  <Link
                    className={`OR-container-1-tabs  ${
                      allTab === "ALL-Packed" ? "txt-purple" : "txt-grey"
                    }`}
                    onClick={() => handleAllClick("ALL-Packed")}
                  >
                    Packed <span className="txt-red">(5)</span>
                  </Link>
                </div>

                <div onClick={closeNav}>
                  <Link
                    className={`OR-container-1-tabs ${
                      allTab === "ALL-Dispatched" ? "txt-purple" : "txt-grey"
                    }`}
                    onClick={() => handleAllClick("ALL-Dispatched")}
                  >
                    Dispatched <span className="txt-red">(5)</span>
                  </Link>
                </div>

                <div onClick={closeNav}>
                  <Link
                    className={`OR-container-1-tabs  ${
                      allTab === "ALL-Delivered Orders"
                        ? "txt-purple"
                        : "txt-grey"
                    }`}
                    onClick={() => handleAllClick("ALL-Delivered Orders")}
                  >
                    Delivered Orders <span className="txt-red">(5)</span>
                  </Link>
                </div>

                <div onClick={closeNav}>
                  <Link
                    className={`OR-container-1-tabs ${
                      allTab === "ALL-Cancelled Orders"
                        ? "txt-purple"
                        : "txt-grey"
                    }`}
                    onClick={() => handleAllClick("ALL-Cancelled Orders")}
                  >
                    Cancelled Orders <span className="txt-red">(5)</span>
                  </Link>
                </div>

                <div onClick={closeNav}>
                  <Link
                    className={`OR-container-1-tabs  ${
                      allTab === "ALL-On hold" ? "txt-purple" : "txt-grey"
                    }`}
                    onClick={() => handleAllClick("ALL-On hold")}
                  >
                    On Hold <span className="txt-red">(5)</span>
                  </Link>
                </div>
              </div>
            </div>
          )}
          {orderTypeTab === "onlineOrder" && (
            <div>
              <div className="p-sidenav-header">Home Delivery</div>
              <div>
                <Link
                  className={`OR-container-1-tabs  ${
                    activeTab === "Live Orders" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTabClick("Live Orders")}
                >
                  <span onClick={closeNav}>Live Orders</span>{" "}
                  <span className="t-tip">
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <div
                      class="t-tip-text  f-12"
                      style={{
                        zIndex: "100",
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        padding: "2vw",
                        textAlign: "left",
                        lineHeight: "5vw",
                      }}
                    >
                      Includes: New, In progress, Ready, Packed and Dispatched.
                    </div>
                  </span>{" "}
                  <span className="txt-red">(5)</span>
                </Link>
              </div>
              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs ${
                    activeTab === "New" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTabClick("New")}
                >
                  New <span className="txt-red">(5)</span>
                </Link>
              </div>
              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs ${
                    activeTab === "In Progress" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTabClick("In Progress")}
                >
                  In Progress <span className="txt-red">(5)</span>
                </Link>
              </div>
              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs  ${
                    activeTab === "Ready" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTabClick("Ready")}
                >
                  Ready <span className="txt-red">(5)</span>
                </Link>
              </div>
              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs  ${
                    activeTab === "Packed" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTabClick("Packed")}
                >
                  Packed <span className="txt-red">(5)</span>
                </Link>
              </div>
              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs ${
                    activeTab === "Dispatched" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTabClick("Dispatched")}
                >
                  Dispatched <span className="txt-red">(5)</span>
                </Link>
              </div>
              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs  ${
                    activeTab === "Delivered Orders" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTabClick("Delivered Orders")}
                >
                  Delivered Orders <span className="txt-red">(5)</span>
                </Link>
              </div>

              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs ${
                    activeTab === "Cancelled Orders" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTabClick("Cancelled Orders")}
                >
                  Cancelled Orders <span className="txt-red">(5)</span>
                </Link>
              </div>
              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs  ${
                    activeTab === "On hold" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTabClick("On hold")}
                >
                  On Hold <span className="txt-red">(5)</span>
                </Link>
              </div>
            </div>
          )}
          {orderTypeTab === "pickup" && (
            <div>
              <div className="p-sidenav-header">Pickup Orders</div>
              <div>
                <Link
                  className={`OR-container-1-tabs  ${
                    pickupTab === "PA-Live Orders" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handlePikupClick("PA-Live Orders")}
                >
                  <span onClick={closeNav}>Live Orders</span>{" "}
                  <span className="t-tip">
                    {" "}
                    <FontAwesomeIcon icon={faCircleInfo} />
                    <div
                      class="t-tip-text  f-12"
                      style={{
                        zIndex: "100",
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                        padding: "2vw",
                        textAlign: "left",
                        lineHeight: "5vw",
                      }}
                    >
                      Includes: New, In progress, Ready, Packed and Dispatched.
                    </div>
                  </span>{" "}
                  <span className="txt-red">(5)</span>
                </Link>
              </div>
              <div>
                <Link
                  className={`OR-container-1-tabs ${
                    pickupTab === "PA-New" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handlePikupClick("PA-New")}
                >
                  New <span className="txt-red">(5)</span>
                </Link>
              </div>

              <div>
                <Link
                  className={`OR-container-1-tabs ${
                    pickupTab === "PA-In Progress" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handlePikupClick("PA-In Progress")}
                >
                  In Progress <span className="txt-red">(5)</span>
                </Link>
              </div>

              <div>
                <Link
                  className={`OR-container-1-tabs  ${
                    pickupTab === "PA-Ready" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handlePikupClick("PA-Ready")}
                >
                  Ready <span className="txt-red">(5)</span>
                </Link>
              </div>

              <div>
                <Link
                  className={`OR-container-1-tabs  ${
                    pickupTab === "PA-Packed" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handlePikupClick("PA-Packed")}
                >
                  Packed <span className="txt-red">(5)</span>
                </Link>
              </div>

              <div>
                <Link
                  className={`OR-container-1-tabs  ${
                    pickupTab === "PA-Delivered Orders"
                      ? "txt-purple"
                      : "txt-grey"
                  }`}
                  onClick={() => handlePikupClick("PA-Delivered Orders")}
                >
                  Delivered Orders <span className="txt-red">(5)</span>
                </Link>
              </div>

              <div>
                <Link
                  className={`OR-container-1-tabs ${
                    pickupTab === "PA-Cancelled Orders"
                      ? "txt-purple"
                      : "txt-grey"
                  }`}
                  onClick={() => handlePikupClick("PA-Cancelled Orders")}
                >
                  Cancelled Orders <span className="txt-red">(5)</span>
                </Link>
              </div>

              <div>
                <Link
                  className={`OR-container-1-tabs  ${
                    pickupTab === "PA-On hold" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handlePikupClick("PA-On hold")}
                >
                  On Hold <span className="txt-red">(5)</span>
                </Link>
              </div>
            </div>
          )}
          {orderTypeTab === "tableOrder" && (
            <div>
              <div className="p-sidenav-header">Table Orders</div>
              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs ${
                    tableTab === "TB-New" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTableClick("TB-New")}
                >
                  New <span className="txt-red">(5)</span>
                </Link>
              </div>

              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs ${
                    tableTab === "TB-In Progress" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTableClick("TB-In Progress")}
                >
                  In Progress <span className="txt-red">(5)</span>
                </Link>
              </div>

              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs  ${
                    tableTab === "TB-Ready" ? "txt-purple" : "txt-grey"
                  }`}
                  onClick={() => handleTableClick("TB-Ready")}
                >
                  Ready <span className="txt-red">(5)</span>
                </Link>
              </div>

              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs  ${
                    tableTab === "TB-Delivered Orders"
                      ? "txt-purple"
                      : "txt-grey"
                  }`}
                  onClick={() => handleTableClick("TB-Delivered Orders")}
                >
                  Delivered Orders <span className="txt-red">(5)</span>
                </Link>
              </div>

              <div onClick={closeNav}>
                <Link
                  className={`OR-container-1-tabs ${
                    tableTab === "TB-Cancelled Orders"
                      ? "txt-purple"
                      : "txt-grey"
                  }`}
                  onClick={() => handleTableClick("TB-Cancelled Orders")}
                >
                  Cancelled Orders <span className="txt-red">(5)</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Desktop Scrollable content */}
      <div className="scrollable-container">
        {/* All orders */}
        {orderTypeTab === "all" && (
          <div>
            {allTab === "ALL-New" && <div className="d-card">All-new</div>}
            {allTab === "ALL-Ready" && <div className="d-card">All-ready</div>}
            {allTab === "ALL-In Progress" && (
              <div className="d-card">All-in progress</div>
            )}
            {allTab === "ALL-Live Orders" && (
              <div>
                {initialData.map((data) => (
              <div className="d-card" key={data.id}>
                <div>
                  <div className="d-flex">
                    <div>
                      <div className="d-flex g-10 align-item-center">
                        <div className="d-flex d-card-1-orangeCard txt-black f-14 align-item-center">
                          <img
                            src="kb_logo.png"
                            className="orangeCard-img"
                            alt=""
                          />
                          &nbsp;{data.name}
                        </div>
                        <div className="d-card-1-greenCard txt-purple f-14">
                        {data.orderCount} Orders
                        </div>
                      </div>
                      <br />
                      <div className="d-flex g-10">
                        <div className="txt-black f-14">
                          <span>Order ID:</span>
                          <span style={{ fontWeight: "600" }}> #{data.orderID}</span>
                        </div>
                      </div>
                      <br />
                      <div className="d-flex g-10">
                        <div className="txt-black f-14">
                          <span>{data.orderTime}, {formatOrderDate(data.orderDate)}</span>
                        </div>
                      </div>
                      <br />
                      <div className="d-flex space-between align-item-center">
                        <div className="d-flex f-14">
                          <FontAwesomeIcon icon={faUser} />
                          &nbsp;<span>{data.admin}</span>
                        </div>
                        <div className="f-24">
                          <Icon
                            icon="ph:printer-fill"
                            className="txt-dark-grey c-pointer"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="d-flex space-between pd wt">
                    <div className="d-card-lines"></div>
                    <div className="pd">
                      <div className="f-20">{data.customerName}</div>
                      <br />
                      <div className="d-flex g-30 align-item-center">
                        <div className="f-18">{data.customerPhone}</div>
                        <div className="d-flex g-10 f-16">
                        <Icon icon="fluent:location-28-regular" />
                        <Icon icon="ic:baseline-whatsapp" />
                        <Icon icon="fluent:call-20-regular" />
                        </div>
                      </div>
                      <br />
                      <div className="f-14">
                      {data.customerAddress}
                      </div>
                    </div>
                    <div className="d-card-lines"></div>
                  </div>
                </div>
                <div className="wt sc f-14">
                  <div>
                    Speical Request:{" "}
                    <span>
                      <b>{data.specialRequest}</b>
                    </span>
                  </div>
                  <ol>
                {data.orderItems.map((item, index) => (
                  <li key={index}>
                    {item}
                    {item === "Boneless Chicken Burger" && (
                      <ul>
                        {data.extras
                          .filter((extra) => extra.item === "Boneless Chicken Burger")
                          .map((extraItem, extraIndex) =>
                            extraItem.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>{subItem}</li>
                            ))
                          )}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
                </div>
                <div className="d-flex pd">
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "1vw",
                      width: "7vw",
                    }}
                  >
                    <Icon
                      icon="teenyicons:discount-solid"
                      color="blue"
                      style={{ fontSize: "2vw" }}
                    />
                    <div className="f-20 align-item-center">
                      ₹{data.totalOrderAmount}{" "}
                      <span className="f-14 txt-red">
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </span>
                    </div>
                    <br />
                    <div className="f-14">Applied Code</div>
                    <div className="f-14">{data.appliedCoupon}</div>
                  </div>
                  <div
                    className="d-card-lines"
                    style={{ height: "9vw", width: "0.5px" }}
                  ></div>
                </div>

                <div className="d-flex pd">
                  <div className="d-flex g-10  pd" style={{ marginTop: "4vw" }}>
                    <div style={{ textAlign: "center" }}>
                      <select className="t-box" name="" id="">
                        <option value="" selected disabled>
                          Choose DE
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <button className="t-box" style={{backgroundColor:'white',fontSize:'0.9vw'}}>Payment Link</button>
                      <br />
                      <br />
                      C.O.D
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <select className="t-box IP" name="" id="">
                        <option value="" selected>
                          In Progress
                        </option>
                      </select>
                    </div>
                  </div>
                  <div
                    className="d-card-lines"
                    style={{ height: "9vw", width: "0.5px" }}
                  ></div>
                </div>

                <div
                  style={{ textAlign: "right" }}
                  className="pd d-flex align-item-center"
                >
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="f-20 txt-dark-grey c-pointer"
                  />
                </div>
              </div>
              ))}
              </div>
              
            )}
          </div>
        )}

        {/* Online Orders */}
        {orderTypeTab === "onlineOrder" && (
          <div>
            {activeTab === "New" && <div className="d-card">Online-new</div>}
            {activeTab === "Ready" && (
              <div className="d-card">Online-ready</div>
            )}
            {activeTab === "Live Orders" && (
              <div className="d-card">Online Live Orders</div>
            )}
          </div>
        )}

        {/* Pickup Orders */}
        {orderTypeTab === "pickup" && (
          <div>
            {pickupTab === "PA-New" && <div className="d-card">PA-new</div>}
            {pickupTab === "PA-In Progress" && (
              <div className="d-card">PA-in progress</div>
            )}
            {pickupTab === "PA-Live Orders" && (
              <div className="d-card">PA-Live Orders</div>
            )}
          </div>
        )}

        {/* Table orders */}
        {orderTypeTab === "tableOrder" && (
          <div>
            {tableTab === "TB-New" && <div className="d-card">TB-new</div>}
            {tableTab === "TB-In Progress" && (
              <div className="d-card">TB-in progress</div>
            )}
            {tableTab === "TB-Live Orders" && (
              <div className="d-card">TB-live orders</div>
            )}
          </div>
        )}
      </div>
      {/* Phone Scrollable content */}
      {/* <div className="p-scrollable-container"> */}
      <div className="ADD-p-position">
          <div className="ADD-p-container">
        {initialData.map((data) => (
        <div className="p-card">
          <div key={data.id}  className={`card ${expandedCard === data.id ? "expanded" : ""}`}>
            <div className="top-content">
              {/* Content at the top */}
             
              <div className="d-flex space-between align-item-center">
                <div>

                </div>
                <div className="d-flex align-item-center">
                  <img
                    src="kb_logo.png"
                    alt=""
                    style={{ width: "8vw", height: "8vw" }}
                  />
                  <span className="f-18">{data.name}</span>
                </div>
                <div>
                <FontAwesomeIcon icon={faPencil} className="txt-dark-grey" />
                </div>
                
              </div>
              <br />

              <div className="d-flex space-between">
                <div className="d-flex">
                  <div className="f-16" style={{ width: "38vw" }}>
                    <span>
                      Order ID: <span style={{ fontWeight: "600" }}>#{data.orderID}</span>
                    </span>
                    <br />
                    <br />
                    <span>
                      <FontAwesomeIcon
                        icon={faUser}
                        className="txt-dark-grey"
                      />{" "}
                      {data.admin}
                    </span>
                    <br />
                    <br />
                    <span className="f-14">{data.orderTime}, {formatOrderDate(data.orderDate)}</span>
                    <br />
                    <br />
                    <div className="d-flex space-between align-item-center f-20 txt-dark-grey">
                      <div className="d-flex g-10">
                        <Icon icon="fluent:location-28-regular" />
                        <Icon icon="ic:baseline-whatsapp" />
                        <Icon icon="fluent:call-20-regular" />
                      </div>
                      <div>
                      <Icon icon="mdi:printer" className="txt-dark-grey" />
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "1px",
                      backgroundColor: "#dadada",
                      margin: "1vh",
                    }}
                  ></div>
                </div>
                <div className="f-16">
                  <span>{data.customerName}</span>
                  <br />
                  <br />
                  <span>{data.customerPhone}</span>
                  <br />
                  <br />
                  <span className="f-14">
                  {data.customerAddress}
                  </span>
                  <br />
                  <br />
                  <div className="d-flex space-between align-item-center">
                    <div className="txt-purple f-14">
                    {data.orderCount} Orders
                    </div>
                    <div
                      className="txt-purple d-flex align-item-center f-14"
                      style={{ fontWeight: "600" }}
                      onClick={() => toggleCard(data.id)}
                    >
                      More Details{" "}
                      {expandedCard === data.id ? (
                        <div>
                          <Icon icon="mingcute:up-line" className="f-16" />
                        </div>
                      ) : (
                        <div>
                          <Icon icon="mingcute:down-line" className="f-16" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {expandedCard === data.id && (
              <div className="middle-content">
                {/* Content in the middle */}
                <hr />
                <div className="p-ps f-16">
                  <div>
                    Speical Request:{" "}
                    <span>
                      <b>{data.specialRequest}</b>
                    </span>
                  </div>
                  <ol>
                {data.orderItems.map((item, index) => (
                  <li key={index}>
                    {item}
                    {item === "Boneless Chicken Burger" && (
                      <ul>
                        {data.extras
                          .filter((extra) => extra.item === "Boneless Chicken Burger")
                          .map((extraItem, extraIndex) =>
                            extraItem.subItems.map((subItem, subIndex) => (
                              <li key={subIndex}>{subItem}</li>
                            ))
                          )}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
                </div>
                <hr />
                <div className="d-flex align-item-center">
                  <div className="flex-1">
                    <div className="txt-grey f-14">Total order Amount</div>
                    <div className="f-20">
                    ₹{data.totalOrderAmount}{" "}
                      <span className="f-14 txt-red">
                        <FontAwesomeIcon icon={faCircleInfo} />
                      </span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="f-20 d-flex g-20">
                      <Icon
                        icon="teenyicons:discount-solid"
                        color="blue"
                        style={{ fontSize: "6vw" }}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <div className="d-flex">
                  <div className="flex-1">
                  <div className="txt-grey f-14">Applied Coupon</div>
                  <div className="f-16">{data.appliedCoupon}</div>
                  </div>
                </div>
              </div>
            )}
            <div className="bottom-content">
              {/* Content at the bottom */}
              <hr />
              <div className="d-flex space-between">
                <select className="t-box IP" name="" id="" style={{marginBottom:'5vw'}}>
                  <option value="" selected>
                    In Progress
                  </option>
                </select>
                <select className="t-box bw" name="" id="" style={{marginBottom:'5vw'}}>
                  <option value="" selected disabled>
                    Delivery Agent
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <div style={{textAlign:'center'}}>
                <button className="t-box bw d-flex align-item-center">Payment Link &nbsp; <Icon icon="cil:send" /></button>
                <div className="f-16">C.O.D</div>
                </div>
              </div>
              <br />

            </div>
          </div>
        </div>
        ))}
      </div>
      </div>
      {/* Modal Open for Date filter-Phone */}
      {dateModalPhone && (
        <div className="main-modal main-modal-open ">
          <div className="main-modal-content mop">
            <div className="d-flex space-between align-item-center">
              <div className="f-20">Date Filter</div>
              <div className="f-20">
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={closedateModalPhone}
                  className="c-pointer"
                />
              </div>
            </div>
            <div className="p-main-modal-content-inside">
              <div
                className="d-flex f-14"
                style={{ flexDirection: "column", lineHeight: "10vw" }}
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
              </div>
              {selectCutsomVisible && (
                <>
                  <div>
                    <p className="f-12">From date </p>
                    <input
                      type="date"
                      name="fromDate"
                      id=""
                      className="t-box"
                    />
                  </div>
                  <div>
                    <p className="f-12">To date </p>
                    <input type="date" name="Date" id="" className="t-box" />
                  </div>
                </>
              )}
              <br />
              <br />
              <div style={{ textAlign: "center" }}>
                <button
                  className="p-button bg-purple f-12"
                  style={{ width: "35vw" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
