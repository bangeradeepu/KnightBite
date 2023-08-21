import React, { useState } from "react";
import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "./Head.css";
import Home from "../Home/Home";

function Head() {
  const navigate = useNavigate();
  const openKYC = () => {
    navigate("/kyc");
  };
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  const handleOutsideClick = (event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  // Notification open
  const [notificationVisible, setNotificationlVisible] = useState(false);

  const openNotification = () => {
    setNotificationlVisible(true);
  };

  const closeNotification = () => {
    setNotificationlVisible(false);
  };

  // Inc Dec button
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };
  const modalRef = React.createRef();
  return (
    <div>
      <div className="H-head-frame" ref={modalRef} onClick={handleOutsideClick}>
        <div className="H-div">
          <a href="/">
            <img
              className="H-kb-logo"
              alt="Kb logo"
              src="https://generation-sessions.s3.amazonaws.com/894eb1655d9943c3bad34f2e963f97f3/img/kb-logo@2x.png"
            />
          </a>
          <div className="H-group">
            <div className="H-text-wrapper">
              <div className="H-dropdown">
                <a className="">Knight Bite</a>
              </div>
            </div>
          </div>
          <div className="H-overlap-group-wrapper">
            <button onClick={openKYC} className="o-button bg-orange txt-orange">
              Complete your KYC <FontAwesomeIcon icon={faArrowRight} />{" "}
            </button>
          </div>

          <div className="H-overlap-wrapper">
            <i className="search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
            </i>
            <input className="input-field" placeholder="Search"></input>
          </div>
          {/* onClick={openModal} */}

          <div class="H-head-frame">
            <div class="H-group-2">
              <div class="open_user">
                <div class="H-text-wrapper-4">Sabil Bakhar</div>
                <p class="txt-grey H-text-sub">Knight Bite</p>
              </div>
              <div class="H-user">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
              <div class="H-dropdown-content">
                <a href="#">Profile</a>
                <a href="#">Settings</a>
                <a href="#">Logout</a>
              </div>
            </div>
          </div>

          <img
            className="H-group-3"
            alt="Group"
            src="https://generation-sessions.s3.amazonaws.com/894eb1655d9943c3bad34f2e963f97f3/img/group-166@2x.png"
            onClick={openNotification}
          />
        </div>

        {modalVisible && (
          <div className={`modal ${modalVisible ? "modal-open" : ""}`}>
            <div className="modal-content">
              <span className="modal-close" onClick={closeModal}>
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
              <div className="create-filter-position"></div>
              <br />
              <p className="create-header txt-black">Profile</p>
            </div>
          </div>
        )}
        {notificationVisible && (
          <div
            className={`H-modal ${notificationVisible ? "H-modal-open" : ""}`}
          >
            <div className="H-modal-content">
              <div className="notification-top-fix">
                <p className="H-create-header txt-black">Notifications</p>
                <p className="txt-grey" style={{fontSize:'12px'}}>Clear all</p>
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
                {/* <div className="notification-box">
                  <div className="row">
                    <div className="column">
                      <p className="txt-black">New Order Notification</p>
                      <span className="txt-grey notification-audio">
                        default.mp3
                      </span>
                      <span className="notification-audio txt-orange">
                        <a href=""> Change</a>
                      </span>
                      <br />
                      <br />
                      <p className="notification-duration">Duration (sec)</p>
                      <div>
                        <button
                          class="btn btn-outline-primary"
                          type="button"
                          onClick={decNum}
                          className="btn-inc"
                        >
                          -
                        </button>
                        <span></span>
                        <input
                          type="text"
                          class="form-control"
                          value={num}
                          onChange={handleChange}
                          className="qty-input"
                        />

                        <button
                          class="btn btn-outline-primary"
                          type="button"
                          onClick={incNum}
                          className="btn-dec"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="column">
                      <p className="" style={{ textAlign: "right" }}>
                        <label class="switch">
                          <input type="checkbox" />
                          <span class="slider round"></span>
                        </label>
                      </p>
                    </div>
                  </div>
                </div> */}
                
                
                <br />
                <div className="notification-box">
                  <div className="row">
                    <div className="column1">
                    <img src="kb_logo.png" alt=""  width={'60px'}/>
                    </div>
                    <div className="column2">
                      
                      <p className="txt-black">New Order</p>
                      <span className="txt-grey notification-audio">
                        <i>Rencent</i>
                      </span>
                      
                      
                      <div>
                        
                      

                        
                      </div>
                    </div>
                    <div className="column3">
                      <button className="btn-notification-content-close"><FontAwesomeIcon icon={faXmark} /></button>
                    </div>
                  </div>
                </div>
                <br /><div className="notification-box">
                  <div className="row">
                    <div className="column1">
                    <div className="notification-update-back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="white" d="M12 21q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 12q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 3q2.05 0 3.888.875T19 6.35V4h2v6h-6V8h2.75q-1.025-1.4-2.525-2.2T12 5Q9.075 5 7.037 7.038T5 12q0 2.925 2.038 4.963T12 19q2.625 0 4.588-1.7T18.9 13h2.05q-.375 3.425-2.937 5.713T12 21Zm2.8-4.8L11 12.4V7h2v4.6l3.2 3.2l-1.4 1.4Z"/></svg>
                    </div>
                    </div>
                    <div className="column2">
                      
                      <p className="txt-black">Update</p>
                      <span className="txt-grey notification-audio">
                        <i>Yesterday</i>
                      </span>
                      
                      
                      <div>
                        
                       

                        
                      </div>
                    </div>
                    <div className="column3">
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Head;
