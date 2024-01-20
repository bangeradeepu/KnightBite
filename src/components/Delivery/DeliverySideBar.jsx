import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./DeliverySideBar.css";

const DeliverySideBar = ({ children }) => {
  const [activeLink, setActiveLink] = useState("db"); // Set the default active link
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/deliveryboy/')) {
      setActiveLink(currentPath.replace('/deliveryboy/', ''));
    } else {
      setActiveLink(currentPath.substr(1));
    }
  }, []);
  
  const [sideNavRight, setSideNavRight] = useState(-380);

  const openNav = () => {
    setSideNavRight(0);
  };

  const closeNav = () => {
    setSideNavRight(-380);
  };

  return (
    <div>
      <div className="d-sidenav">
        <span>
          <b>
            <FontAwesomeIcon icon={faListCheck} /> Delivery
          </b>
        </span>
        <div className="d-sidenav-containers">
        <div>
          <Link
            to="/deliveryboy/db"
            className={activeLink === "db" ? "active" : ""}
            onClick={() => handleLinkClick("db")}
          >
            Delivery Boys
          </Link>
        </div>
        <div>
          <Link
            to="/deliveryboy/vr"
            className={activeLink === "vr" ? "active" : ""}
            onClick={() => handleLinkClick("vr")}
          >
            Verify Registration
          </Link>
        </div>
        <div>
          <Link
            to="/deliveryboy/analytics"
            className={activeLink === "analytics" ? "active" : ""}
            onClick={() => handleLinkClick("analytics")}
          >
            Analytics
          </Link>
        </div>
        <div>
          <Link
            to="/deliveryboy/track"
            className={activeLink === "track" ? "active" : ""}
            onClick={() => handleLinkClick("track")}
          >
            Track
          </Link>
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
          <div className="p-sidenav-header">Delivery</div>
          <br />
          <Link
            to="/deliveryboy/db"
            className={activeLink === "db" ? "txt-purple" : "txt-black"}
            onClick={() => handleLinkClick("db")}
          >
            Delivery Boys
          </Link>
        </div>
        <div>
          <Link
            to="/deliveryboy/vr"
            className={activeLink === "vr" ? "txt-purple" : "txt-black"}
            onClick={() => handleLinkClick("vr")}
          >
            Verify Registration
          </Link>
        </div>
        <div>
          <Link
            to="/deliveryboy/analytics"
            className={activeLink === "analytics" ? "txt-purple" : "txt-black"}
            onClick={() => handleLinkClick("analytics")}
          >
            Analytics
          </Link>
        </div>
        <div>
          <Link
            to="/deliveryboy/track"
            className={activeLink === "track" ? "txt-purple" : "txt-black"}
            onClick={() => handleLinkClick("track")}
          >
            Track
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
};

export default DeliverySideBar;
