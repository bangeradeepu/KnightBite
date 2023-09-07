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
    // <div>
    //   <div className="H-head-frame" ref={modalRef} onClick={handleOutsideClick}>
    //     <div className="H-div">
    //       <a href="/">
    //         <img
    //           className="H-kb-logo"
    //           alt="Kb logo"
    //           src="https://generation-sessions.s3.amazonaws.com/894eb1655d9943c3bad34f2e963f97f3/img/kb-logo@2x.png"
    //         />
    //       </a>
    //       <div className="H-group">
    //         <div className="H-text-wrapper">
    //           <div className="H-dropdown">
    //             <a className="">Knight Bite</a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="H-overlap-group-wrapper">
    //         <button onClick={openKYC} className="o-button bg-orange txt-orange">
    //           Complete your KYC <FontAwesomeIcon icon={faArrowRight} />{" "}
    //         </button>
    //       </div>

    //       <div className="H-overlap-wrapper">
    //         <i className="search-icon">
    //           <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
    //         </i>
    //         <input className="input-field" placeholder="Search"></input>
    //       </div>
    //       {/* onClick={openModal} */}

    //       <div className="H-head-frame">
    //         <div className="H-group-2">
    //           <div className="open_user">
    //             <div className="H-text-wrapper-4">Sabil Bakhar</div>
    //             <p className="txt-grey H-text-sub">Knight Bite</p>
    //           </div>
    //           <div className="H-user">
    //             <svg
    //               width="40"
    //               height="40"
    //               viewBox="0 0 40 40"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <path
    //                 d="M40 20C40 31.0457 31.0457 40 20 40C8.9543 40 0 31.0457 0 20C0 8.9543 8.9543 0 20 0C31.0457 0 40 8.9543 40 20Z"
    //                 fill="#D3D3D3"
    //               />
    //               <path
    //                 d="M20 11C21.0609 11 22.0783 11.4214 22.8284 12.1716C23.5786 12.9217 24 13.9391 24 15C24 16.0609 23.5786 17.0783 22.8284 17.8284C22.0783 18.5786 21.0609 19 20 19C18.9391 19 17.9217 18.5786 17.1716 17.8284C16.4214 17.0783 16 16.0609 16 15C16 13.9391 16.4214 12.9217 17.1716 12.1716C17.9217 11.4214 18.9391 11 20 11ZM20 21C24.42 21 28 22.79 28 25V27H12V25C12 22.79 15.58 21 20 21Z"
    //                 fill="white"
    //               />
    //             </svg>
    //           </div>
    //             <div className="H-dropdown-content">
    //               <a href="#">Profile</a>
    //               <a href="#">Settings</a>
    //               <a href="#">Logout</a>
    //             </div>
    //         </div>
    //       </div>

    //       <img
    //         className="H-group-3"
    //         alt="Group"
    //         src="https://generation-sessions.s3.amazonaws.com/894eb1655d9943c3bad34f2e963f97f3/img/group-166@2x.png"
    //         onClick={openNotification}
    //       />
    //     </div>

    //     {modalVisible && (
    //       <div className={`modal ${modalVisible ? "modal-open" : ""}`}>
    //         <div className="modal-content">
    //           <span className="modal-close" onClick={closeModal}>
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //             >
    //               <path
    //                 fill="#2e2e2e"
    //                 d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
    //               />
    //             </svg>
    //           </span>
    //           <div className="create-filter-position"></div>
    //           <br />
    //           <p className="create-header txt-black">Profile</p>
    //         </div>
    //       </div>
    //     )}
    //     {notificationVisible && (
    //       <div
    //         className={`H-modal ${notificationVisible ? "H-modal-open" : ""}`}
    //       >
    //         <div className="H-modal-content">
    //           <div className="notification-top-fix">
    //             <p className="H-create-header txt-black">Notifications</p>
    //             <p className="txt-grey" style={{fontSize:'12px'}}>Clear all</p>
    //             <br />
    //             <br />
    //             <span className="H-modal-close" onClick={closeNotification}>
    //               <svg
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 width="24"
    //                 height="24"
    //                 viewBox="0 0 24 24"
    //               >
    //                 <path
    //                   fill="#2e2e2e"
    //                   d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
    //                 />
    //               </svg>
    //             </span>
    //           </div>
    //           <div className="H-create-filter-position"></div>
    //           <br />
    //           <div className="notification-content-layer">
    //             {/* <div className="notification-box">
    //               <div className="row">
    //                 <div className="column">
    //                   <p className="txt-black">New Order Notification</p>
    //                   <span className="txt-grey notification-audio">
    //                     default.mp3
    //                   </span>
    //                   <span className="notification-audio txt-orange">
    //                     <a href=""> Change</a>
    //                   </span>
    //                   <br />
    //                   <br />
    //                   <p className="notification-duration">Duration (sec)</p>
    //                   <div>
    //                     <button
    //                       class="btn btn-outline-primary"
    //                       type="button"
    //                       onClick={decNum}
    //                       className="btn-inc"
    //                     >
    //                       -
    //                     </button>
    //                     <span></span>
    //                     <input
    //                       type="text"
    //                       class="form-control"
    //                       value={num}
    //                       onChange={handleChange}
    //                       className="qty-input"
    //                     />

    //                     <button
    //                       class="btn btn-outline-primary"
    //                       type="button"
    //                       onClick={incNum}
    //                       className="btn-dec"
    //                     >
    //                       +
    //                     </button>
    //                   </div>
    //                 </div>
    //                 <div className="column">
    //                   <p className="" style={{ textAlign: "right" }}>
    //                     <label class="switch">
    //                       <input type="checkbox" />
    //                       <span class="slider round"></span>
    //                     </label>
    //                   </p>
    //                 </div>
    //               </div>
    //             </div> */}

    //             <br />
    //             <div className="notification-box">
    //               <div className="row">
    //                 <div className="column1">
    //                 <img src="kb_logo.png" alt=""  width={'60px'}/>
    //                 </div>
    //                 <div className="column2">

    //                   <p className="txt-black">New Order</p>
    //                   <span className="txt-grey notification-audio">
    //                     <i>Rencent</i>
    //                   </span>

    //                   <div>

    //                   </div>
    //                 </div>
    //                 <div className="column3">
    //                   <button className="btn-notification-content-close"><FontAwesomeIcon icon={faXmark} /></button>
    //                 </div>
    //               </div>
    //             </div>
    //             <br /><div className="notification-box">
    //               <div className="row">
    //                 <div className="column1">
    //                 <div className="notification-update-back">
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="white" d="M12 21q-1.875 0-3.513-.713t-2.85-1.924q-1.212-1.213-1.924-2.85T3 12q0-1.875.713-3.513t1.924-2.85q1.213-1.212 2.85-1.924T12 3q2.05 0 3.888.875T19 6.35V4h2v6h-6V8h2.75q-1.025-1.4-2.525-2.2T12 5Q9.075 5 7.037 7.038T5 12q0 2.925 2.038 4.963T12 19q2.625 0 4.588-1.7T18.9 13h2.05q-.375 3.425-2.937 5.713T12 21Zm2.8-4.8L11 12.4V7h2v4.6l3.2 3.2l-1.4 1.4Z"/></svg>
    //                 </div>
    //                 </div>
    //                 <div className="column2">

    //                   <p className="txt-black">Update</p>
    //                   <span className="txt-grey notification-audio">
    //                     <i>Yesterday</i>
    //                   </span>

    //                   <div>

    //                   </div>
    //                 </div>
    //                 <div className="column3">
    //                 </div>
    //               </div>
    //             </div>

    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <div>
    <div className="container-head">
      {/* First Row */}
      <div className="row">
        <div className="column">
          <img src="kb_logo.png" alt="Logo" style={{ width: "50px" }} />
          <span style={{fontSize:'20px'}}> Knight Bite</span>
        </div>
        <div className="column">
          <button className="o-button bg-orange txt-orange">
            Complete your KYC
          </button>
        </div>
        <div className="column">
          <i className="search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
          </i>
          <input type="text" placeholder="Search" className="input-field" />
        </div>
        <div className="column">
          <div className="button-group">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{marginRight:'20px'}}
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
                stroke-width="0.1"
              />
            </svg>

            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{marginRight:'10px'}}

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

            <span>
              <div>Sabil Bakhar</div>
              <div>Admin</div>
            </span>
          </div>
        </div>
      </div>
    </div>
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
  );
}

export default Head;
