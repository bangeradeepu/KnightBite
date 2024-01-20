import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListCheck,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";


const AccountsSidebar = ({ children }) => {
  const [activeLink, setActiveLink] = useState("cp");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/accounts/')) {
      setActiveLink(currentPath.replace('/accounts/', ''));
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
            Accounts
          </b>
        </span>
        <div className="d-sidenav-containers">
        <div>
          <Link
            to="/accounts/cp"
            className={activeLink === "cp" ? "active" : ""}
            onClick={() => handleLinkClick("cp")}
          >
           Company Profile
          </Link>
        </div>
        <div>
          <Link
            to="/accounts/hc"
            className={activeLink === "hc" ? "active" : ""}
            onClick={() => handleLinkClick("hc")}
          >
            Help Center
          </Link>
        </div>
        <div>
          <Link
            to="/accounts/sp"
            className={activeLink === "sp" ? "active" : ""}
            onClick={() => handleLinkClick("sp")}
          >
            Subscription Plan
          </Link>
        </div>
        <div>
          <Link
            to="/accounts/pp"
            className={activeLink === "pp" ? "active" : ""}
            onClick={() => handleLinkClick("pp")}
          >
            Privacy Policy
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
        onClick={closeNav}
      >
        <div>
          <div className="f-24">
            <FontAwesomeIcon icon={faXmark} onClick={closeNav} />
          </div>
          <br />
          <div className="p-sidenav-header">Accounts</div>
          <br />
          
        </div>
        <div>
          <Link
            to="/accounts/cp"
            className={activeLink === "cp" ? "txt-purple" : "txt-black"}
            onClick={() => handleLinkClick("cp")}
          >
            Company Profile
          </Link>
        </div>
        <div>
          <Link
            to="/accounts/hc"
            className={activeLink === "hc" ? "txt-purple" : "txt-black"}
            onClick={() => handleLinkClick("hc")}
          >
            Help Center
          </Link>
        </div>
        <div>
          <Link
            to="/accounts/sp"
            className={activeLink === "sp" ? "txt-purple" : "txt-black"}
            onClick={() => handleLinkClick("sp")}
          >
            Subscription Plan
          </Link>
        </div>
        <div>
          <Link
            to="/accounts/pp"
            className={activeLink === "pp" ? "txt-purple" : "txt-black"}
            onClick={() => handleLinkClick("pp")}
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      {children}
    </div>
  );
};

export default AccountsSidebar;
