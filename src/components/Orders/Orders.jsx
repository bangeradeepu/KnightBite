import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faFilter, faBars } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./Orders.css";

const styles = {
  activeTab: {
    fontWeight: "bold",
    color: "#175c3a",
  },
};
const Orders = () => {
  const [activeTab, setActiveTab] = useState("In Progress");
  const [filter, setFilter] = useState("all");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div className="order-page">
        <div className="OR-container-1 grid-2">
          <div className="OR-container-1-left g-left">1</div>
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
        <div className="OR-container-2 grid-2">
          <div className="OR-container-2-left  g-left txt-grey">
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
                activeTab === "Ready and Packed" ? "txt-purple" : "txt-grey"
              }`}
              onClick={() => handleTabClick("Ready and Packed")}
            >
              Ready and Packed
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
      </div>
      {activeTab === 'In Progress' && (
      <div className="OR-content-position">
        <div className="OR-content">In progress</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
      </div>
      )}
      {activeTab === 'Ready and Packed' && (
      <div className="OR-content-position">
        <div className="OR-content">Ready and Packed</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
        <div className="OR-content">hi</div>
      </div>
      )}

    </div>
  );
};

export default Orders;
