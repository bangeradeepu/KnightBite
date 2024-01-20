import React, { useState, useEffect } from "react";
import "./ManageDelSetting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faXmark,
  faChevronDown,
  faChevronUp,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
const ManageDelSetting = () => {
  // Open Setup Delivery Boundary
  const [showSDB, setShowSDB] = useState(false);
  const [isSDBDownButton, setIsSDBDownButton] = useState(true);

  const toggleSDB = () => {
    setShowSDB(!showSDB);
    setIsSDBDownButton(!isSDBDownButton);
  };

  // Choose circular or polygon
  const [selectedOption, setSelectedOption] = useState("polygon");

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  // Setup delivery reward
  const [selectedDelRew, setSelectedDelRew] = useState("DV"); // Initialize with an empty string

  // Function to handle the select change
  const handleSelectDelRewChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDelRew(selectedValue);
  };

  // Open DDB
  const [showDDB, setShowDDB] = useState(false);
  const [isDDBDownButton, setIsDDBDownButton] = useState(true);

  const toggleDDB = () => {
    setShowDDB(!showDDB);
    setIsDDBDownButton(!isDDBDownButton);
  };
  // SDPA
  const [showSDPA, setShowSDPA] = useState(false);
  const [isSDPADownButton, setIsSDPADownButton] = useState(true);

  const toggleSDPA = () => {
    setShowSDPA(!showSDPA);
    setIsSDPADownButton(!isSDPADownButton);
  };
  // Define Areas within delivery Boundary
  const [showDAWDB, setShowDAWDB] = useState(false);
  const [isDAWDBDownButton, setIsDAWDBDownButton] = useState(true);

  const toggleDAWDB = () => {
    setShowDAWDB(!showDAWDB);
    setIsDAWDBDownButton(!isDAWDBDownButton);
  };

  // Change Shape DAWDB
  const [selectedDAWDBshape, setSelectedDAWDBshape] = useState("UsePoly"); // Initialize with an empty string

  // Function to handle the select change
  const handleSelectDAWDBshapeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDAWDBshape(selectedValue);
  };

  // Enter Delivery Personnel Reward and delivery charge applied
  const [showDPRDCA, setShowDPRDCA] = useState(false);
  const [isDPRDCADownButton, setIsDPRDCADownButton] = useState(true);

  const toggleDPRDCA = () => {
    setShowDPRDCA(!showDPRDCA);
    setIsDPRDCADownButton(!isDPRDCADownButton);
  };

  // Define Areas within delivery Boundary
  const [showDPRD, setShowDPRD] = useState(false);
  const [isDPRDDownButton, setIsDPRDDownButton] = useState(true);

  const toggleDPRD = () => {
    setShowDPRD(!showDPRD);
    setIsDPRDDownButton(!isDPRDDownButton);
  };
  // Change Shape DPRD
  const [selectedDPRDshape, setSelectedDPRDshape] = useState("usePoly"); // Initialize with an empty string

  // Function to handle the select change
  const handleSelectDPRDshapeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedDPRDshape(selectedValue);
  };

  return (
    <div className="ManageDelSetting">
      <div className="MDS-desktop">
        <div className="MDS-layer">
          <div className="MDS-instructions">
            <div className="r-f-12">
              <div className="r-f-12">Instructions:</div>
              <div className="r-f-10 mt-2">
                <span className="f-w-700">Step 1:&nbsp;</span>
                <span>Setup Delivery Boundary</span>
              </div>
              <div className="r-f-10  MDS-sub-item">
                Define Delivery Boundary
              </div>
              <div className="r-f-10 mt-2">
                <span className="f-w-700">Step 2:&nbsp;</span>
                <span>
                  Setup Delivery personnel reward and Delivery Charge applied
                </span>
              </div>
              <div className="r-f-10  MDS-sub-item">
                Define Areas within Delivery Boundary{" "}
                <span className="f-w-700">OR</span>&nbsp;setting values as per
                the drop location distance
              </div>
              <div className="r-f-10  MDS-sub-item">
                Enter Delivery personnel reward and delivery charge applied
              </div>
              <div className="mt-4 r-f-10">
                <div>Note:</div>
                <div className="mt-1">
                  1. Step 1 is mandatory for online ordering
                </div>
                <div className="mt-1">
                  2. Delivery Personnel reward and Delivery Charge will be set
                  to 0 if step 2 is skipped.
                </div>
              </div>
            </div>
          </div>
          <div className="r-f-12 mt-4 d-flex g-10 align-item-center">
            <div className="r-f-12">Select any one outlet to edit</div>
            <div>
              <select name="" id="" className="MDS-location-dropdown">
                <option value="" selected>
                  Bandra, Mumbai
                </option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <div className="r-f-12 d-flex  align-item-center txt-purple f-w-700">
              {isSDBDownButton ? (
                <div onClick={toggleSDB} className="c-pointer">
                  <span>1.&nbsp;</span>
                  <span className="MDS-header">
                    Setup Delivery Boundary&nbsp;
                  </span>
                  <span onClick={toggleSDB}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                </div>
              ) : (
                <div onClick={toggleSDB} className="c-pointer">
                  <span>1.&nbsp;</span>
                  <span className="MDS-header">
                    Setup Delivery Boundary&nbsp;
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faChevronUp} />
                  </span>
                </div>
              )}
              &nbsp;
              <FontAwesomeIcon icon={faCircleCheck} className="txt-green" />
            </div>
            <div>
              {showSDB && (
                <div>
                  <div className="r-f-12  MDS-sub-item MDS-ml">
                    Define Delivery Boundary&nbsp;
                    {isDDBDownButton ? (
                      <span onClick={toggleDDB}>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="c-pointer"
                        />
                      </span>
                    ) : (
                      <span onClick={toggleDDB}>
                        <FontAwesomeIcon
                          icon={faChevronUp}
                          className="c-pointer"
                        />
                      </span>
                    )}{" "}
                    &nbsp;{" "}
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="txt-green"
                    />
                  </div>
                  {showDDB && (
                    <div className="MDS-line-border mt-4">
                      <div className="d-flex space-between align-item-center">
                        <div className="d-flex align-item-center g-10">
                          <div>Setup using</div>
                          <div>
                            <select
                              name=""
                              id=""
                              className="MDS-map-rad-shape"
                              onChange={handleSelectChange}
                            >
                              <option value="polygon">
                                Drawing Polygon around outlet
                              </option>
                              <option value="circular">
                                Circular radius with outlet as centre
                              </option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <div className="MDS-es r-f-10">Enlagrge Screen</div>
                        </div>
                      </div>

                      {selectedOption === "polygon" && (
                        <div>
                          <div className="MDS-map mt-2"></div>
                          <div className="mt-4">
                            <div className="d-flex space-evenly align-item-center">
                              <div className="r-f-12">Line 1</div>
                              <div className="r-f-12 MDS-es">
                                154754568416,548461316
                              </div>
                              <div className="r-f-12 MDS-es">
                                154754568416,548461316
                              </div>
                              <div className="r-f-14 c-pointer">
                                <FontAwesomeIcon icon={faXmark} />
                              </div>
                            </div>
                            <div className="mt-2 d-flex space-evenly align-item-center">
                              <div className="r-f-12">Line 2</div>
                              <div className="r-f-12 MDS-es">
                                154754568416,548461316
                              </div>
                              <div className="r-f-12 MDS-es">
                                154754568416,548461316
                              </div>
                              <div className="r-f-14 c-pointer">
                                <FontAwesomeIcon icon={faXmark} />
                              </div>
                            </div>
                            <div className="mt-2 d-flex space-evenly align-item-center">
                              <div className="r-f-12">Line 3</div>
                              <div className="r-f-12 MDS-es">
                                154754568416,548461316
                              </div>
                              <div className="r-f-12 MDS-es">
                                154754568416,548461316
                              </div>
                              <div className="r-f-14 c-pointer">
                                <FontAwesomeIcon icon={faXmark} />
                              </div>
                            </div>
                            <div className="mt-2 d-flex space-evenly align-item-center">
                              <div className="r-f-12">Line 4</div>
                              <div className="r-f-12 MDS-es">
                                154754568416,548461316
                              </div>
                              <div className="r-f-12 MDS-es">
                                154754568416,548461316
                              </div>
                              <div className="r-f-14 c-pointer">
                                <FontAwesomeIcon icon={faXmark} />
                              </div>
                            </div>
                            <div className="mt-2 d-flex space-evenly align-item-center">
                              <div className="r-f-12">Line 5</div>
                              <div className="r-f-12 MDS-es">
                                154754568416,548461316
                              </div>
                              <div className="r-f-12 MDS-es">
                                154754568416,548461316
                              </div>
                              <div className="r-f-14 c-pointer">
                                <FontAwesomeIcon icon={faXmark} />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex space-evenly mt-4">
                            <div className="MDS-apc r-f-10 txt-white c-pointer">
                              Apply Changes
                            </div>
                          </div>
                        </div>
                      )}
                      {selectedOption === "circular" && (
                        <div>
                          <div className="MDS-map mt-2"></div>
                          <div className="mt-4">
                            <div className="d-flex space-evenly">
                              <div className="d-flex align-item-center">
                                <div>Radius from outlet (in kms): &nbsp;</div>
                                <div>
                                  <input
                                    type="text"
                                    name=""
                                    id=""
                                    style={{ padding: "0.5vw", width: "2.5vw" }}
                                  />
                                </div>
                                <div>&nbsp;Kms</div>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex space-evenly mt-4">
                            <div className="MDS-apc r-f-10 txt-white c-pointer">
                              Apply Changes
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="txt-purple mt-4 f-w-700 r-f-12">
              <span>2.&nbsp;</span>
              <span className="MDS-header">
                Setup Delivery personnel reward and Delivery Charge Applied
              </span>
              &nbsp;
              {isSDPADownButton ? (
                <span onClick={toggleSDPA}>
                  <FontAwesomeIcon icon={faChevronDown} className="c-pointer" />
                </span>
              ) : (
                <span onClick={toggleSDPA}>
                  <FontAwesomeIcon icon={faChevronUp} className="c-pointer" />
                </span>
              )}
              &nbsp;
              <FontAwesomeIcon icon={faCircleCheck} className="txt-green" />
            </div>
            <div>
              {showSDPA && (
                <div>
                  <div className="MDS-sub-item-wl r-f-12">
                    Setup delivery reward and delivery charge by{" "}
                    <span>
                      <select
                        name=""
                        id=""
                        className="MDS-map-rad-shape"
                        onChange={handleSelectDelRewChange}
                      >
                        <option value="DV">Defining Area</option>
                        <option value="SVAPD">
                          Setting values as per drop location distance
                        </option>
                      </select>
                    </span>
                  </div>
                  {selectedDelRew === "DV" && (
                    <div>
                      <div className="MDS-sub-item r-f-12">
                        Define Areas within delivery Boundary&nbsp;
                        {isDAWDBDownButton ? (
                          <span onClick={toggleDAWDB}>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="c-pointer"
                            />
                          </span>
                        ) : (
                          <span onClick={toggleDAWDB}>
                            <FontAwesomeIcon
                              icon={faChevronUp}
                              className="c-pointer"
                            />
                          </span>
                        )}{" "}
                        &nbsp;{" "}
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="txt-green"
                        />
                      </div>
                      <div>
                        {showDAWDB && (
                          <div
                            className="d-flex
                        "
                          >
                            <div className="MU-track-line"></div>
                            <div className="MDS-line-border mt-4">
                              <div className="d-flex space-between align-item-center">
                                <div className="d-flex align-item-center g-10">
                                  <div>
                                    Define Areas within delivery boundary:
                                  </div>
                                  <div>
                                    <select
                                      name=""
                                      id=""
                                      className="MDS-map-rad-shape"
                                      onChange={handleSelectDAWDBshapeChange}
                                    >
                                      <option value="UsePoly">
                                        Using Polygon
                                      </option>
                                      <option value="UseCircle">
                                        Using Circle
                                      </option>
                                    </select>
                                  </div>
                                </div>
                                <div>
                                  <div className="MDS-es r-f-10">
                                    Enlagrge Screen
                                  </div>
                                </div>
                              </div>
                              {selectedDAWDBshape === "UsePoly" && (
                                <div>
                                  <div className="MDS-map mt-2"></div>
                                  <div className="mt-4">
                                    <div className="r-f-10 d-flex space-evenly">
                                      You can only define Areas within the
                                      delivery boundary defined in Step 1.
                                    </div>
                                    <div
                                      className=""
                                      style={{ margin: "2vw 20vw" }}
                                    >
                                      <div className="d-flex space-evenly align-item-center mt-2">
                                        <div className="r-f-12">Area A</div>
                                        <div className="MU-clr-box-red"></div>
                                        <div className="r-f-14">
                                          <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                      </div>
                                      <div className="d-flex space-evenly align-item-center mt-2">
                                        <div className="r-f-12">Area B</div>
                                        <div className="MU-clr-box-purple"></div>
                                        <div className="r-f-14">
                                          <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                      </div>
                                      <div className="d-flex space-evenly align-item-center mt-2">
                                        <div className="r-f-12">Area C</div>
                                        <div className="MU-clr-box-yellow"></div>
                                        <div className="r-f-14">
                                          <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex space-evenly justify-content-center align-text-center mt-4">
                                    <div>
                                      <div className="MDS-apc r-f-10 txt-white c-pointer">
                                        Apply Changes
                                      </div>
                                      <div className="r-f-10 mt-1">or</div>
                                      <div className="r-f-10 mt-1 c-pointer">
                                        Skip this step
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              {selectedDAWDBshape === "UseCircle" && (
                                <div>
                                  <div className="MDS-map mt-2"></div>
                                  <div className="mt-4">
                                    <div className="r-f-10 d-flex space-evenly">
                                      You can only define Areas within the
                                      delivery boundary defined in Step 1.
                                    </div>
                                    <div
                                      className=""
                                      style={{ margin: "2vw 20vw" }}
                                    >
                                      <div className="d-flex space-evenly align-item-center mt-2">
                                        <div className="r-f-12">Area A</div>
                                        <div className="MU-clr-box-red"></div>
                                        <div className="r-f-14">
                                          <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                      </div>
                                      <div className="d-flex space-evenly align-item-center mt-2">
                                        <div className="r-f-12">Area B</div>
                                        <div className="MU-clr-box-purple"></div>
                                        <div className="r-f-14">
                                          <FontAwesomeIcon icon={faXmark} />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex space-evenly justify-content-center align-text-center mt-4">
                                    <div>
                                      <div className="MDS-apc r-f-10 txt-white c-pointer">
                                        Apply Changes
                                      </div>
                                      <div className="r-f-10 mt-1">or</div>
                                      <div className="r-f-10 mt-1 c-pointer">
                                        Skip this step
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="MDS-sub-item r-f-12">
                        Enter Delivery Personnel Reward and delivery charge
                        applied&nbsp;
                        {isDPRDDownButton ? (
                          <span onClick={toggleDPRD}>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="c-pointer"
                            />
                          </span>
                        ) : (
                          <span onClick={toggleDPRD}>
                            <FontAwesomeIcon
                              icon={faChevronUp}
                              className="c-pointer"
                            />
                          </span>
                        )}{" "}
                        &nbsp;{" "}
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="txt-green"
                        />
                      </div>
                      <div>
                        {showDPRD && (
                          <div className="MDS-line-border mt-4">
                            <div className="d-flex space-between align-item-center">
                              <div className="d-flex align-item-center g-10">
                                <div>Define reward and charges:</div>
                                <div>
                                  <select
                                    name=""
                                    id=""
                                    className="MDS-map-rad-shape"
                                    onChange={handleSelectDPRDshapeChange}
                                  >
                                    <option value="usePoly">
                                      Using Polygon
                                    </option>
                                    <option value="useCircle">
                                      as per areas defined
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div>
                                <div className="MDS-es r-f-10">
                                  Enlagrge Screen
                                </div>
                              </div>
                            </div>
                            {selectedDPRDshape === "usePoly" && (
                              <div>
                                <div className="MDS-map mt-2"></div>
                                <div className="mt-4">
                                  <div className="d-flex space-evenly">
                                    <div className="d-flex align-item-center g-10">
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-b-h align-text-center r-f-8">
                                        Delivery Personnel Reward
                                      </div>
                                      <div className="MU-color-type-b-h align-text-center r-f-8">
                                        Delivery Charge
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex space-evenly">
                                    <div className="d-flex align-item-center g-10">
                                      <div className="MU-color-type-nb">
                                        <div className="r-f-12">Area A</div>
                                      </div>
                                      <div className="MU-color-type-nb">
                                        <div className="MU-clr-box-red"></div>
                                      </div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-b align-text-center">
                                        30
                                      </div>
                                      <div className="MU-color-type-b align-text-center">
                                        Free
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex space-evenly">
                                    <div className="d-flex align-item-center g-10">
                                      <div className="MU-color-type-nb">
                                        <div className="r-f-12">Area B</div>
                                      </div>
                                      <div className="MU-color-type-nb">
                                        <div className="MU-clr-box-purple"></div>
                                      </div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-b align-text-center">
                                        45
                                      </div>
                                      <div className="MU-color-type-b align-text-center">
                                        45
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex space-evenly">
                                    <div className="d-flex align-item-center g-10">
                                      <div className="MU-color-type-nb">
                                        <div className="r-f-12">Area C</div>
                                      </div>
                                      <div className="MU-color-type-nb">
                                        <div className="MU-clr-box-yellow"></div>
                                      </div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-b align-text-center">
                                        60
                                      </div>
                                      <div className="MU-color-type-b align-text-center">
                                        60
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex space-evenly justify-content-center align-text-center mt-4">
                                  <div>
                                    <div className="MDS-apc r-f-10 txt-white c-pointer">
                                      Apply Changes
                                    </div>
                                    <div className="r-f-10 mt-1">or</div>
                                    <div className="r-f-10 mt-1 c-pointer">
                                      Skip this step
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                            {selectedDPRDshape === "useCircle" && (
                              <div>
                                <div className="MDS-map mt-2"></div>
                                <div className="mt-4">
                                  <div className="d-flex space-evenly">
                                    <div className="d-flex align-item-center g-10">
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-b-h align-text-center r-f-8">
                                        Delivery Personnel Reward
                                      </div>
                                      <div className="MU-color-type-b-h align-text-center r-f-8">
                                        Delivery Charge
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex space-evenly">
                                    <div className="d-flex align-item-center g-10">
                                      <div className="MU-color-type-nb">
                                        <div className="r-f-12">Area A</div>
                                      </div>
                                      <div className="MU-color-type-nb">
                                        <div className="MU-clr-box-red"></div>
                                      </div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-b align-text-center">
                                        30
                                      </div>
                                      <div className="MU-color-type-b align-text-center">
                                        Free
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex space-evenly">
                                    <div className="d-flex align-item-center g-10">
                                      <div className="MU-color-type-nb">
                                        <div className="r-f-12">Area B</div>
                                      </div>
                                      <div className="MU-color-type-nb">
                                        <div className="MU-clr-box-purple"></div>
                                      </div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-b align-text-center">
                                        45
                                      </div>
                                      <div className="MU-color-type-b align-text-center">
                                        45
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex space-evenly justify-content-center align-text-center mt-4">
                                  <div>
                                    <div className="MDS-apc r-f-10 txt-white c-pointer">
                                      Apply Changes
                                    </div>
                                    <div className="r-f-10 mt-1">or</div>
                                    <div className="r-f-10 mt-1 c-pointer">
                                      Skip this step
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {selectedDelRew === "SVAPD" && (
                    <div>
                      <div className="MDS-sub-item r-f-12">
                        Enter Delivery Personnel Reward and delivery charge
                        applied&nbsp;
                        {isDPRDCADownButton ? (
                          <span onClick={toggleDPRDCA}>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="c-pointer"
                            />
                          </span>
                        ) : (
                          <span onClick={toggleDPRDCA}>
                            <FontAwesomeIcon
                              icon={faChevronUp}
                              className="c-pointer"
                            />
                          </span>
                        )}{" "}
                        &nbsp;{" "}
                        <FontAwesomeIcon
                          icon={faCircleCheck}
                          className="txt-green"
                        />
                      </div>
                      {showDPRDCA && (
                        <div className="MDS-line-border mt-4">
                          <div className="d-flex space-between align-item-center">
                            <div></div>
                            <div>
                              <div className="MDS-es r-f-10">
                                Enlagrge Screen
                              </div>
                            </div>
                          </div>
                          <div className="MDS-map mt-2"></div>
                          <div className="mt-4">
                            <div className="d-flex space-evenly">
                              <div className="d-flex align-item-center">
                                <div className="MU-color-type-b-h-1 align-text-center r-f-8">
                                  Distance of drop location (in kms)
                                </div>
                                <div className="MU-color-type-b-h-1 align-text-center r-f-8">
                                  Delivery Personnel Reward
                                </div>
                                <div className="MU-color-type-b-h-1 align-text-center r-f-8">
                                  Delivery Charge
                                </div>
                              </div>
                            </div>
                            <div className="d-flex space-evenly mt-1">
                              <div className="d-flex align-item-center g-10">
                                <div className="MU-color-type-b align-text-center">
                                  30
                                </div>
                                <div className="MU-color-type-b align-text-center">
                                  Free
                                </div>
                                <div className="MU-color-type-b align-text-center">
                                  Free
                                </div>
                              </div>
                            </div>
                            <div className="d-flex space-evenly mt-1">
                              <div className="d-flex align-item-center g-10">
                                <div className="MU-color-type-b align-text-center">
                                  30
                                </div>
                                <div className="MU-color-type-b align-text-center">
                                  Free
                                </div>
                                <div className="MU-color-type-b align-text-center">
                                  Free
                                </div>
                              </div>
                            </div>
                            <div className="d-flex space-evenly mt-1">
                              <div className="d-flex align-item-center g-10">
                                <div className="MU-color-type-b align-text-center">
                                  30
                                </div>
                                <div className="MU-color-type-b align-text-center">
                                  Free
                                </div>
                                <div className="MU-color-type-b align-text-center">
                                  Free
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="r-f-12 f-w-700 d-flex space-evenly mt-4">
                            OR
                          </div>
                          <div className="mt-4">
                            <div className="r-f-12">
                              After every{" "}
                              <input
                                type="text"
                                name=""
                                id=""
                                style={{ padding: "0.5vw", width: "2.5vw" }}
                              />{" "}
                              kms increment the delivery charge and delivery
                              reward by Rs{" "}
                              <input
                                type="text"
                                name=""
                                id=""
                                style={{ padding: "0.5vw", width: "2.5vw" }}
                              />
                            </div>
                            <div className="mt-4 r-f-12 f-w-500">
                              Above condition will be applicable:
                            </div>
                            <div className="r-f-12 mt-1">
                              1. After initial{" "}
                              <input
                                type="text"
                                name=""
                                id=""
                                style={{ padding: "0.5vw", width: "2.5vw" }}
                              />{" "}
                              kms
                            </div>
                            <div className="r-f-12 mt-1">
                              2. Base value of Delivery Reward Rs.{" "}
                              <input
                                type="text"
                                name=""
                                id=""
                                style={{ padding: "0.5vw", width: "2.5vw" }}
                              />
                            </div>
                            <div className="r-f-12 mt-1">
                              3. Base value of Delivery Charge Rs.{" "}
                              <input
                                type="text"
                                name=""
                                id=""
                                style={{ padding: "0.5vw", width: "2.5vw" }}
                              />
                            </div>
                          </div>
                          <div className="d-flex space-evenly justify-content-center align-text-center mt-4">
                            <div>
                              <div className="MDS-apc r-f-10 txt-white c-pointer">
                                Apply Changes
                              </div>
                              <div className="r-f-10 mt-1">or</div>
                              <div className="r-f-10 mt-1 c-pointer">
                                Skip this step
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="MDS-mobile r-f-12">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Delivery Settings</div>
        </div>
        <div className="ADD-p-position">
          <div className="ADD-p-container">
            <div className="MDS-instructions-p">
              <div className="f-w-600 r-f-12">Instructions:</div>
              <div className="r-f-10 mt-1">
                <span className="f-w-600">Step:1</span>&nbsp;
                <span>Setup Delivery Boundary</span>
              </div>
              <ul>
                <li className="r-f-10 f-w-300">Define Delivery Boundary</li>
              </ul>
              <div className="r-f-10 mt-3">
                <span className="f-w-600">Step:2</span>&nbsp;
                <span>
                  Setup Delivery personnel reward and Delivery Charge applied
                </span>
              </div>
              <ul>
                <li className="r-f-10 f-w-300">
                  <span>Define Areas within Delivery Boundary </span>&nbsp;
                  <span className="f-w-700">OR</span>&nbsp;
                  <span>setting values as per the drop location distance</span>
                </li>
                <li className="r-f-10 f-w-300">
                  Enter Delivery personnel reward and delivery charge applied
                </li>
              </ul>
              <div className="mt-4">
                <div className="r-f-12 f-w-600">Note:</div>
                <ol>
                  <li className="f-w-300 r-f-10">
                    Step 1 is mandatory for online ordering
                  </li>
                  <li className="f-w-300 r-f-10">
                    Delivery Personnel reward and Delivery Charge will be set to
                    0 if step 2 is skipped.
                  </li>
                </ol>
              </div>
            </div>
            <div className="d-flex g-10 mt-2 align-item-center">
              <div className="r-f-12">Select any outlet to edit</div>
              <div>
                <select name="" id="" className="MDS-location-dd-p">
                  <option value="">Bandra, Mumbai</option>
                </select>
              </div>
            </div>
            <div className="mt-2">
              <div className="txt-purple d-flex align-item-center">
                {isSDBDownButton ? (
                  <div onClick={toggleSDB}>
                    <span>1.</span>&nbsp;
                    <span className="MDS-header">Setup Delivery Boundary</span>
                    &nbsp;
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="c-pointer"
                      />
                    </span>
                  </div>
                ) : (
                  <div onClick={toggleSDB}>
                    <span>1.</span>&nbsp;
                    <span className="MDS-header">Setup Delivery Boundary</span>
                    &nbsp;
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className="c-pointer"
                      />
                    </span>
                  </div>
                )}
                &nbsp;
                <span>
                  <FontAwesomeIcon icon={faCircleCheck} className="txt-green" />
                </span>
              </div>
              <div>
                {showSDB && (
                  <div>
                    <div className="MDS-sub-p mt-2 d-flex align-item-center">
                      {isDDBDownButton ? (
                        <div onClick={toggleDDB}>
                          Define Delivery Boundary&nbsp;
                          <span>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="c-pointer"
                            />
                          </span>
                        </div>
                      ) : (
                        <div onClick={toggleDDB}>
                          Define Delivery Boundary&nbsp;
                          <span>
                            <FontAwesomeIcon
                              icon={faChevronUp}
                              className="c-pointer"
                            />
                          </span>
                        </div>
                      )}
                      &nbsp;
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="txt-green"
                      />
                    </div>
                    {showDDB && (
                      <div className="MDS-line-border mt-2">
                        <div className="d-flex space-between">
                          <div>
                            <div className="r-f-10">Setup using</div>
                            <select
                              name=""
                              id=""
                              className="MDS-s2-dd-p"
                              onChange={handleSelectChange}
                            >
                              <option value="polygon">
                                Drawing Polygon around outlet
                              </option>
                              <option value="circular">
                                Circular radius with outlet as centre
                              </option>
                            </select>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faExpand}
                              className="txt-dark-grey"
                            />
                          </div>
                        </div>
                        {selectedOption === "polygon" && (
                          <div>
                            <div className="MDS-map mt-2"></div>
                            <div className="mt-2">
                              <div className="d-flex align-item-center space-between">
                                <div className="txt-dark-grey r-f-10">
                                  Level 1
                                </div>
                                <div>
                                  <FontAwesomeIcon icon={faXmark} />
                                </div>
                              </div>
                              <div>
                                <div className="r-f-10 MDS-es">
                                  154754568416,548461316
                                </div>
                                <div className="r-f-10 MDS-es mt-1">
                                  154754568416,548461316
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                              <div className="d-flex align-item-center space-between">
                                <div className="txt-dark-grey r-f-10">
                                  Level 2
                                </div>
                                <div>
                                  <FontAwesomeIcon icon={faXmark} />
                                </div>
                              </div>
                              <div>
                                <div className="r-f-10 MDS-es">
                                  154754568416,548461316
                                </div>
                                <div className="r-f-10 MDS-es mt-1">
                                  154754568416,548461316
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                              <div className="d-flex align-item-center space-between">
                                <div className="txt-dark-grey r-f-10">
                                  Level 3
                                </div>
                                <div>
                                  <FontAwesomeIcon icon={faXmark} />
                                </div>
                              </div>
                              <div>
                                <div className="r-f-10 MDS-es">
                                  154754568416,548461316
                                </div>
                                <div className="r-f-10 MDS-es mt-1">
                                  154754568416,548461316
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                              <div className="d-flex align-item-center space-between">
                                <div className="txt-dark-grey r-f-10">
                                  Level 4
                                </div>
                                <div>
                                  <FontAwesomeIcon icon={faXmark} />
                                </div>
                              </div>
                              <div>
                                <div className="r-f-10 MDS-es">
                                  154754568416,548461316
                                </div>
                                <div className="r-f-10 MDS-es mt-1">
                                  154754568416,548461316
                                </div>
                              </div>
                            </div>
                            <div className="d-flex space-evenly mt-4">
                              <div className="MDS-apc r-f-10 txt-white c-pointer">
                                Apply Changes
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedOption === "circular" && (
                          <div>
                            <div className="MDS-map mt-2"></div>
                            <div className="mt-2 d-flex space-evenly align-item-center">
                              <div>Radius from outlet (in kms): </div>
                              <div>
                                <input
                                  type="text"
                                  name=""
                                  id=""
                                  style={{ padding: "2vw", width: "10.5vw" }}
                                />
                              </div>
                              <div>&nbsp;Kms</div>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-2">
              <div className="txt-purple d-flex ">
                {isSDPADownButton ? (
                  <div onClick={toggleSDPA}>
                    <span>2.</span>&nbsp;
                    <span className="MDS-header">
                      Setup Delivery personnel reward and Delivery Charge
                      Applied
                    </span>
                    &nbsp;
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="c-pointer"
                      />
                    </span>
                    &nbsp;
                    <span>
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="txt-green"
                      />
                    </span>
                  </div>
                ) : (
                  <div onClick={toggleSDPA}>
                    <span>2.</span>&nbsp;
                    <span className="MDS-header">
                      Setup Delivery personnel reward and Delivery Charge
                      Applied
                    </span>
                    &nbsp;
                    <span>
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className="c-pointer"
                      />
                    </span>
                    &nbsp;
                    <span>
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="txt-green"
                      />
                    </span>
                  </div>
                )}
              </div>
              {showSDPA && (
                <div>
                  <div className="MDS-sub-p mt-1">
                    Setup delivery reward and delivery charge by{" "}
                  </div>
                  <div>
                    <select
                      name=""
                      id=""
                      className="MDS-sub-p MDS-s2-dd-p mt-1"
                      onChange={handleSelectDelRewChange}
                    >
                      <option value="DV">Defining Area</option>
                      <option value="SVAPD">
                        Setting values as per drop location distance
                      </option>
                    </select>
                  </div>
                  {selectedDelRew === "DV" && (
                  <div>
                    <div className="MDS-sub-p mt-2 d-flex align-item-center">
                      {isDAWDBDownButton ? (
                        <div onClick={toggleDAWDB}>
                           Define Areas within delivery Boundary&nbsp;
                          <span>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="c-pointer"
                            />
                          </span>
                        </div>
                      ) : (
                        <div onClick={toggleDAWDB}>
                          Define Areas within delivery Boundary&nbsp;
                          <span>
                            <FontAwesomeIcon
                              icon={faChevronUp}
                              className="c-pointer"
                            />
                          </span>
                        </div>
                      )}
                      &nbsp;
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="txt-green"
                      />
                    </div>
                    {showDAWDB && (
                      <div>
                          <div className="MDS-line-border mt-2">
                        <div className="d-flex space-between">
                          <div>
                            <div className="r-f-10">Define Areas within Delivery Boundary</div>
                            <select
                              name=""
                              id=""
                              className="MDS-s2-dd-p"
                              onChange={handleSelectDAWDBshapeChange}
                            >
                              <option value="UsePoly">
                                        Using Polygon
                                      </option>
                                      <option value="UseCircle">
                                        Using Circle
                                      </option>
                            </select>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faExpand}
                              className="txt-dark-grey"
                            />
                          </div>
                        </div>
                        {selectedDAWDBshape === "UsePoly" && (
                          <div>
                            <div className="MDS-map mt-2"></div>
                            <div className="d-flex space-evenly align-text-center r-f-10 mt-2"><div>
                            You can only define Areas within the delivery boundary defined in Step 1.</div>
                            </div>
                            <div className="mt-3 d-flex space-evenly align-item-center">
                            <div className="r-f-10">Area A</div>
                                        <div className="MU-clr-box-red"></div>
                                        <div className="r-f-14">
                                          <FontAwesomeIcon icon={faXmark} />
                                        </div>
                            </div>
                            <div className="mt-3 d-flex space-evenly align-item-center">
                            <div className="r-f-10">Area B</div>
                                        <div className="MU-clr-box-purple"></div>
                                        <div className="r-f-14">
                                          <FontAwesomeIcon icon={faXmark} />
                                        </div>
                            </div>
                            <div className="mt-3 d-flex space-evenly align-item-center">
                            <div className="r-f-10">Area C</div>
                                        <div className="MU-clr-box-yellow"></div>
                                        <div className="r-f-14">
                                          <FontAwesomeIcon icon={faXmark} />
                                        </div>
                            </div>
                            <div className="d-flex space-evenly mt-4">
                              <div className="MDS-apc r-f-10 txt-white c-pointer">
                                Apply Changes
                              </div>
                            </div>
                            <div className="r-f-10  align-text-center">or</div>
                                    <div className="r-f-10 c-pointer align-text-center">
                                      Skip this step
                                    </div>
                          </div>
                        )}
                       {selectedDAWDBshape === "UseCircle" && (
                          <div>
                          <div className="MDS-map mt-2"></div>
                          <div className="d-flex space-evenly align-text-center r-f-10 mt-2"><div>
                          You can only define Areas within the delivery boundary defined in Step 1.</div>
                          </div>
                          <div className="mt-3 d-flex space-evenly align-item-center">
                          <div className="r-f-10">Area A</div>
                                      <div className="MU-clr-box-red"></div>
                                      <div className="r-f-14">
                                        <FontAwesomeIcon icon={faXmark} />
                                      </div>
                          </div>
                          <div className="mt-3 d-flex space-evenly align-item-center">
                          <div className="r-f-10">Area B</div>
                                      <div className="MU-clr-box-purple"></div>
                                      <div className="r-f-14">
                                        <FontAwesomeIcon icon={faXmark} />
                                      </div>
                          </div>
                         
                          <div className="d-flex space-evenly mt-4">
                              <div className="MDS-apc r-f-10 txt-white c-pointer">
                                Apply Changes
                              </div>
                            </div>
                            <div className="r-f-10  align-text-center">or</div>
                                    <div className="r-f-10 c-pointer align-text-center">
                                      Skip this step
                                    </div>
                        </div>
                        )}
                      </div>
                      </div>
                    )}
                    <div className="MDS-sub-p mt-2 d-flex align-item-center">
                      {isDPRDDownButton ? (
                        <div onClick={toggleDPRD}>
                           Enter Delivery Personnel Reward and delivery charge applied&nbsp;
                          <span>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="c-pointer"
                            />
                          </span>
                          &nbsp;
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="txt-green"
                      />
                        </div>
                      ) : (
                        <div onClick={toggleDPRD}>
                          Enter Delivery Personnel Reward and delivery charge applied&nbsp;
                          <span>
                            <FontAwesomeIcon
                              icon={faChevronUp}
                              className="c-pointer"
                            />
                          </span>
                          &nbsp;
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="txt-green"
                      />
                        </div>
                      )}
                     
                    </div>
                    {showDPRD && (
                      <div>
                      <div className="MDS-line-border mt-2">
                    <div className="d-flex space-between">
                      <div>
                        <div className="r-f-10">Define reward and charges</div>
                        <select
                          name=""
                          id=""
                          className="MDS-s2-dd-p"
                          onChange={handleSelectDPRDshapeChange}
                        >
                           <option value="usePoly">
                                      Using Polygon
                                    </option>
                                    <option value="useCircle">
                                      as per areas defined
                                    </option>
                        </select>
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faExpand}
                          className="txt-dark-grey"
                        />
                      </div>
                    </div>
                    {selectedDPRDshape === "usePoly" && (
                      <div>
                        <div className="MDS-map mt-2"></div>
                        <div className="d-flex space-evenly align-text-center r-f-10 mt-2"><div>
                        You can only define Areas within the delivery boundary defined in Step 1.</div>
                        </div>
                        <div className="d-flex space-evenly mt-4">
                                    <div className="d-flex align-item-center g-10">
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-b-h align-text-center r-f-6">
                                        Delivery Personnel Reward
                                      </div>
                                      <div className="MU-color-type-b-h align-text-center r-f-6">
                                        Delivery Charge
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex space-evenly">
                                    <div className="d-flex align-item-center g-10">
                                      <div className="MU-color-type-nb">
                                        <div className="r-f-8 f-w-600">Area A</div>
                                      </div>
                                      <div className="MU-color-type-nb">
                                        <div className="MU-clr-box-red"></div>
                                      </div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-b align-text-center">
                                        30
                                      </div>
                                      <div className="MU-color-type-b align-text-center">
                                        Free
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex space-evenly">
                                    <div className="d-flex align-item-center g-10">
                                      <div className="MU-color-type-nb">
                                        <div className="r-f-8 f-w-600">Area B</div>
                                      </div>
                                      <div className="MU-color-type-nb">
                                        <div className="MU-clr-box-purple"></div>
                                      </div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-b align-text-center">
                                        45
                                      </div>
                                      <div className="MU-color-type-b align-text-center">
                                        45
                                      </div>
                                    </div>
                                  </div>
                                  <div className="d-flex space-evenly">
                                    <div className="d-flex align-item-center g-10">
                                      <div className="MU-color-type-nb">
                                        <div className="r-f-8 f-w-600">Area C</div>
                                      </div>
                                      <div className="MU-color-type-nb">
                                        <div className="MU-clr-box-yellow"></div>
                                      </div>
                                      <div className="MU-color-type-nb"></div>
                                      <div className="MU-color-type-b align-text-center">
                                        60
                                      </div>
                                      <div className="MU-color-type-b align-text-center">
                                        60
                                      </div>
                                    </div>
                                  </div>
                        <div className="d-flex space-evenly mt-4">
                          <div className="MDS-apc r-f-10 txt-white c-pointer">
                            Apply Changes
                          </div>
                        </div>
                        <div className="r-f-10  align-text-center">or</div>
                                    <div className="r-f-10 c-pointer align-text-center">
                                      Skip this step
                                    </div>
                      </div>
                    )}
                    {selectedDPRDshape === "useCircle" && (
                      <div>
                      <div className="MDS-map mt-2"></div>
                      <div className="d-flex space-evenly align-text-center r-f-10 mt-2"><div>
                      You can only define Areas within the delivery boundary defined in Step 1.</div>
                      </div>
                      <div className="d-flex space-evenly mt-4">
                                  <div className="d-flex align-item-center g-10">
                                    <div className="MU-color-type-nb"></div>
                                    <div className="MU-color-type-nb"></div>
                                    <div className="MU-color-type-nb"></div>
                                    <div className="MU-color-type-b-h align-text-center r-f-6">
                                      Delivery Personnel Reward
                                    </div>
                                    <div className="MU-color-type-b-h align-text-center r-f-6">
                                      Delivery Charge
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex space-evenly">
                                  <div className="d-flex align-item-center g-10">
                                    <div className="MU-color-type-nb">
                                      <div className="r-f-8 f-w-600">Area A</div>
                                    </div>
                                    <div className="MU-color-type-nb">
                                      <div className="MU-clr-box-red"></div>
                                    </div>
                                    <div className="MU-color-type-nb"></div>
                                    <div className="MU-color-type-b align-text-center">
                                      30
                                    </div>
                                    <div className="MU-color-type-b align-text-center">
                                      Free
                                    </div>
                                  </div>
                                </div>
                                <div className="d-flex space-evenly">
                                  <div className="d-flex align-item-center g-10">
                                    <div className="MU-color-type-nb">
                                      <div className="r-f-8 f-w-600">Area B</div>
                                    </div>
                                    <div className="MU-color-type-nb">
                                      <div className="MU-clr-box-purple"></div>
                                    </div>
                                    <div className="MU-color-type-nb"></div>
                                    <div className="MU-color-type-b align-text-center">
                                      45
                                    </div>
                                    <div className="MU-color-type-b align-text-center">
                                      45
                                    </div>
                                  </div>
                                </div>
                             
                      <div className="d-flex space-evenly mt-4">
                        <div className="MDS-apc r-f-10 txt-white c-pointer">
                          <div>Apply Changes</div>
                          
                        </div>
                        
                      </div>
                      <div className="r-f-10  align-text-center">or</div>
                                    <div className="r-f-10 c-pointer align-text-center">
                                      Skip this step
                                    </div>
                    </div>
                    )}
                  </div>
                  </div>
                    )}
                  </div>
                  )}
                  {selectedDelRew === "SVAPD" && (
                    <div>
                      <div className="MDS-sub-p mt-2 d-flex align-item-center">
                      {isDPRDCADownButton ? (
                        <div onClick={toggleDPRDCA}>
                          Enter Delivery Personnel Reward and delivery charge
                        applied&nbsp;
                          <span>
                            <FontAwesomeIcon
                              icon={faChevronDown}
                              className="c-pointer"
                            />
                          </span>
                          &nbsp;
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="txt-green"
                      />
                        </div>
                      ) : (
                        <div onClick={toggleDPRDCA}>
                         Enter Delivery Personnel Reward and delivery charge
                        applied&nbsp;
                          <span>
                            <FontAwesomeIcon
                              icon={faChevronUp}
                              className="c-pointer"
                            />
                          </span>
                          &nbsp;
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="txt-green"
                      />
                        </div>
                      )}
                    
                    </div>
                    {showDPRDCA && (
                      <div>
                          <div className="MDS-line-border mt-2">
                        <div className="d-flex space-between">
                          <div>
                          
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faExpand}
                              className="txt-dark-grey"
                            />
                          </div>
                        </div>
                        {selectedDAWDBshape === "UsePoly" && (
                          <div>
                            <div className="MDS-map mt-2"></div>
                            <div className="d-flex space-evenly mt-2">
                              <div className="d-flex align-item-center g-10">
                                <div className="MU-color-type-b-h-12 align-text-center r-f-8">
                                  Distance of drop location (in kms)
                                </div>
                                <div className="MU-color-type-b-h-12 align-text-center r-f-8">
                                  Delivery Personnel Reward
                                </div>
                                <div className="MU-color-type-b-h-12 align-text-center r-f-8">
                                  Delivery Charge
                                </div>
                              </div>
                            </div>
                            <div className="d-flex space-evenly mt-1">
                              <div className="d-flex align-item-center g-10">
                                <div className="MU-color-type-bp-12 align-text-center">
                                  30
                                </div>
                                <div className="MU-color-type-bp-12 align-text-center">
                                  Free
                                </div>
                                <div className="MU-color-type-bp-12 align-text-center">
                                  Free
                                </div>
                              </div>
                            </div>
                            <div className="d-flex space-evenly mt-1">
                              <div className="d-flex align-item-center g-10">
                                <div className="MU-color-type-bp-12 align-text-center">
                                  30
                                </div>
                                <div className="MU-color-type-bp-12  align-text-center">
                                  Free
                                </div>
                                <div className="MU-color-type-bp-12 align-text-center">
                                  Free
                                </div>
                              </div>
                            </div>
                            <div className="d-flex space-evenly mt-1">
                              <div className="d-flex align-item-center g-10">
                                <div className="MU-color-type-bp-12  align-text-center">
                                  30
                                </div>
                                <div className="MU-color-type-bp-12 align-text-center">
                                  Free
                                </div>
                                <div className="MU-color-type-bp-12 align-text-center">
                                  Free
                                </div>
                              </div>
                            </div>
                            
                            <div className="d-flex space-evenly mt-4">
                              <div className="MDS-apc r-f-10 txt-white c-pointer">
                                Apply Changes
                              </div>
                            </div>
                            <div className="r-f-10  align-text-center">or</div>
                                    <div className="r-f-10 c-pointer align-text-center">
                                      Skip this step
                                    </div>
                          </div>
                        )}
                       {selectedDAWDBshape === "UseCircle" && (
                          <div>
                          <div className="MDS-map mt-2"></div>
                          <div className="d-flex space-evenly align-text-center r-f-10 mt-2"><div>
                          You can only define Areas within the delivery boundary defined in Step 1.</div>
                          </div>
                          <div className="mt-3 d-flex space-evenly align-item-center">
                          <div className="r-f-10">Area A</div>
                                      <div className="MU-clr-box-red"></div>
                                      <div className="r-f-14">
                                        <FontAwesomeIcon icon={faXmark} />
                                      </div>
                          </div>
                          <div className="mt-3 d-flex space-evenly align-item-center">
                          <div className="r-f-10">Area B</div>
                                      <div className="MU-clr-box-purple"></div>
                                      <div className="r-f-14">
                                        <FontAwesomeIcon icon={faXmark} />
                                      </div>
                          </div>
                         
                          <div className="d-flex space-evenly mt-4">
                              <div className="MDS-apc r-f-10 txt-white c-pointer">
                                Apply Changes
                              </div>
                            </div>
                            <div className="r-f-10  align-text-center">or</div>
                                    <div className="r-f-10 c-pointer align-text-center">
                                      Skip this step
                                    </div>
                        </div>
                        )}
                      </div>
                      </div>
                    )}
                    </div>
                   )} 
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageDelSetting;
