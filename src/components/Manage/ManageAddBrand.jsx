import React, { useState, useEffect } from "react";
import "./ManageAddBrand.css";
import { Icon } from "@iconify/react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const ManageAddBrand = () => {
  const [fileUploadedGSTIN, setFileUploadedGSTIN] = useState(false);

  const handleFileChangeGSTIN = (e) => {
    if (e.target.files.length > 0) {
      setFileUploadedGSTIN(true);
    } else {
      setFileUploadedGSTIN(false);
    }
  };
  const [fileUploadedFSSAI, setFileUploadedFSSAI] = useState(false);

  const handleFileChangeFSSAI = (e) => {
    if (e.target.files.length > 0) {
      setFileUploadedFSSAI(true);
    } else {
      setFileUploadedFSSAI(false);
    }
  };
  const [fileUploadedTL, setFileUploadedTL] = useState(false);

  const handleFileChangeTL = (e) => {
    if (e.target.files.length > 0) {
      setFileUploadedTL(true);
    } else {
      setFileUploadedTL(false);
    }
  };
  const [fileUploadedCL, setFileUploadedCL] = useState(false);

  const handleFileChangeCL = (e) => {
    if (e.target.files.length > 0) {
      setFileUploadedCL(true);
    } else {
      setFileUploadedCL(false);
    }
  };
  const [fileUploadedBL, setFileUploadedBL] = useState(false);

  const handleFileChangeBL = (e) => {
    if (e.target.files.length > 0) {
      setFileUploadedBL(true);
    } else {
      setFileUploadedBL(false);
    }
  };

  const [numOwners, setNumOwners] = useState();
  const [ownerFields, setOwnerFields] = useState([]);

  useEffect(() => {
    generateOwnerFields(numOwners);
  }, [numOwners]);

  const handleNumOwnersChange = (e) => {
    const count = parseInt(e.target.value) || "";
    setNumOwners(count);
  };

  const generateOwnerFields = (count) => {
    const fields = [];
    for (let i = 1; i <= count; i++) {
      fields.push(
        <div className="d-flex g-30 mt-2" key={i}>
          <div>
            <div className="r-f-8 txt-grey">
              Owner's name ({i})<span className="txt-red">*</span>
            </div>
            <input
              type="text"
              name={`ownerName${i}`}
              id={`ownerName${i}`}
              className="MAB-textfield MAB-textfield-p-2 mt-1"
            />
          </div>
          <div>
            <div className="r-f-8 txt-grey">
              Contact Number ({i})<span className="txt-red">*</span>
            </div>
            <input
              type="text"
              name={`ownerContact${i}`}
              id={`ownerContact${i}`}
              className="MAB-textfield MAB-textfield-p-2 mt-1"
            />
          </div>
        </div>
      );
    }
    setOwnerFields(fields);
  };

  const [isCCVisible, setIsCCVisible] = useState(false);
  const toggleCC = () => {
    setIsCCVisible(!isCCVisible);
  };

  const [isAddressVisible, setIsAddressVisible] = useState(false);
  const toggleAddress = () => {
    setIsAddressVisible(!isAddressVisible);
  };

  const [isComplienceVisible, setIsComplienceVisible] = useState(false);
  const toggleComplience = () => {
    setIsComplienceVisible(!isComplienceVisible);
  };

  const [isBDVisible, setIsBDVisible] = useState(false);
  const toggleBD = () => {
    setIsBDVisible(!isBDVisible);
  };
  const [isODVisible, setIsODVisible] = useState(false);
  const toggleOD = () => {
    setIsODVisible(!isODVisible);
  };
  return (
    <div className="ManageAddBrand">
      <div className="MAB-desktop">
        <div className="MAB-layer">
          <div className="d-flex space-between align-item-center mt-2">
            <div>
              <div className="r-f-18">Add Brand</div>
              <div className="r-f-10 txt-grey">
                (You can add same brand in different location or different in
                existing location)
              </div>
            </div>
          </div>
          <div className="MAB-comp-config mt-2">
            <div
            onClick={toggleCC}
              className={`MAB-comp-config-header ${
                isCCVisible ? "MAB-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleCC} className="c-pointer">
                      {isCCVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Company Configuration</div>
                    <div className="r-f-10 txt-dark-grey">
                      Baisc Settings of your company
                    </div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-18 txt-green"
                  />
                </div>
              </div>
            </div>
            {isCCVisible && (
              <div className="MAB-comp-config-content">
                <div className="d-flex space-between">
                  <div>
                    <div className="d-flex g-30">
                      <div>
                        <div>
                          <div className="r-f-8 txt-grey">
                            Company Name <span className="txt-red">*</span>
                            &nbsp;
                            <span className="MAB-textfield-title-role r-f-6">
                              Used for billing
                            </span>
                            &nbsp;
                            <span>
                              <Icon icon="bi:info-circle" />
                            </span>
                          </div>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="MAB-textfield mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="r-f-8 txt-grey">Company ID</div>
                        <div className="MAB-textfield-s d-flex space-between mt-1">
                          <input
                            type="text"
                            name=""
                            id=""
                            value={"7897897465"}
                            style={{
                              width: "5vw",
                              border: "none",
                              outline: "none",
                            }}
                            readOnly
                          />
                          <div className="c-pointer MAB-idcopy txt-grey d-flex align-item-center r-f-14">
                            <Icon icon="ph:copy" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="r-f-8 txt-grey">Company Logo</div>
                        <div className="d-flex g-10">
                          <div className="mt-1">
                            <label className="MAB-custom-file-upload-logo">
                              <input
                                type="file"
                                name=""
                                id="fileInput"
                                className="MAB-file-input"
                                onChange={handleFileChangeCL}
                              />
                              {fileUploadedCL ? (
                                <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center">
                                  Replace File <AiOutlinePaperClip />
                                </span>
                              ) : (
                                <span className="r-f-12 d-flex align-item-center align-text-center justify-content-center txt-dark-grey">
                                  Browse File <AiOutlinePaperClip />
                                </span>
                              )}
                            </label>
                          </div>
                          <div>
                            <div className="logo-eclipse">
                              <div className="logo-image-eclipse">
                                <img
                                  src="./Images/DeliveyBoyDocuments/1.jpg"
                                  alt="No File"
                                  className="logo-image-eclipse r-f-8"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex g-30 mt-2">
                      <div>
                        <div>
                          <div className="r-f-8 txt-grey">
                            Brand Name <span className="txt-red">*</span>&nbsp;
                            <span className="MAB-textfield-title-role r-f-6">
                              Customers see this
                            </span>
                            &nbsp;
                            <span>
                              <Icon icon="bi:info-circle" />
                            </span>
                          </div>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="MAB-textfield mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="r-f-8 txt-grey">Brand ID</div>
                        <div className="MAB-textfield-s d-flex space-between mt-1">
                          <input
                            type="text"
                            name=""
                            id=""
                            value={"7897897465"}
                            style={{
                              width: "5vw",
                              border: "none",
                              outline: "none",
                            }}
                            readOnly
                          />
                          <div className="c-pointer MAB-idcopy txt-grey d-flex align-item-center r-f-14">
                            <Icon icon="ph:copy" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="r-f-8 txt-grey">Brand Logo</div>
                        <div className="d-flex g-10">
                          <div className="mt-1">
                            <label className="MAB-custom-file-upload-logo">
                              <input
                                type="file"
                                name=""
                                id="fileInput"
                                className="MAB-file-input"
                                onChange={handleFileChangeBL}
                              />
                              {fileUploadedBL ? (
                                <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center">
                                  Replace File <AiOutlinePaperClip />
                                </span>
                              ) : (
                                <span className="r-f-12 d-flex align-item-center align-text-center justify-content-center txt-dark-grey">
                                  Browse File <AiOutlinePaperClip />
                                </span>
                              )}
                            </label>
                          </div>
                          <div>
                            <div className="logo-eclipse">
                              <div className="logo-image-eclipse">
                                <img
                                  src="./Images/DeliveyBoyDocuments/12.jpg"
                                  alt="No File"
                                  className="logo-image-eclipse r-f-8"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex g-30 mt-2">
                      <div>
                        <div>
                          <div className="r-f-8 txt-grey">
                            Outlet Name<span className="txt-red">*</span>&nbsp;
                            <span className="MAB-textfield-title-role r-f-6">
                              For internal use
                            </span>
                            &nbsp;
                            <span>
                              <Icon icon="bi:info-circle" />
                            </span>
                          </div>
                          <input
                            type="text"
                            name=""
                            id=""
                            className="MAB-textfield mt-1"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="r-f-8 txt-grey">Outlet ID</div>
                        <div className="MAB-textfield-s d-flex space-between mt-1">
                          <input
                            type="text"
                            name=""
                            id=""
                            value={"7897897465"}
                            style={{
                              width: "5vw",
                              border: "none",
                              outline: "none",
                            }}
                            readOnly
                          />
                          <div className="c-pointer MAB-idcopy txt-grey d-flex align-item-center r-f-14">
                            <Icon icon="ph:copy" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex g-30">
                      <div className="align-text-center">
                        <div className="r-f-10 f-w-500">Outlet 1</div>
                        <div className="r-f-8">(Outlet Name)</div>
                        <div className="MAB-outlet-rect f-w-500">
                          <div className="MAB-outlet-circle d-flex justify-content-center align-item-center">
                            <div>
                              <div>Brand 1</div>
                              <div>(Brand Name)</div>
                            </div>
                          </div>
                          <div className="MAB-outlet-circle mt-1 d-flex justify-content-center align-item-center">
                            <div>
                              <div>Brand 2</div>
                              <div>(Brand Name)</div>
                            </div>
                          </div>
                          <div className="MAB-outlet-circle mt-1 d-flex justify-content-center align-item-center">
                            <div>
                              <div>Brand 3</div>
                              <div>(Brand Name)</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="align-text-center">
                          <div className="r-f-10 f-w-500">Outlet 2</div>
                          <div className="r-f-8">(Outlet Name)</div>
                          <div className="MAB-outlet-rect f-w-500">
                            <div className="MAB-outlet-circle d-flex justify-content-center align-item-center">
                              <div>
                                <div>Brand 1</div>
                                <div>(Brand Name)</div>
                              </div>
                            </div>
                            <div className="MAB-outlet-circle mt-1 d-flex justify-content-center align-item-center">
                              <div>
                                <div>Brand 2</div>
                                <div>(Brand Name)</div>
                              </div>
                            </div>
                            <div className="MAB-outlet-circle mt-1 d-flex justify-content-center align-item-center">
                              <div>
                                <div>Brand 3</div>
                                <div>(Brand Name)</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="r-f-8 mt-1">
                      <div>
                        <span className="f-w-500">Example:</span> Incase of a
                        restaurant chain having 3{" "}
                      </div>
                      <div>brands under each of its 2 outlets</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="MAB-comp-config mt-3">
            <div
            onClick={toggleAddress}
              className={`MAB-comp-config-header ${
                isAddressVisible ? "MAB-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleAddress} className="c-pointer">
                      {isAddressVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Address</div>
                    <div className="r-f-10 txt-dark-grey">Outlet Address</div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-18 txt-green"
                  />
                </div>
              </div>
            </div>
            {isAddressVisible && (
              <div className="MAB-comp-config-content">
                <div>
                  <div className="r-f-8 txt-grey">
                    Complete address <span className="txt-red">*</span>
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="MAB-textfield mt-1"
                    style={{ width: "33.5vw" }}
                  />
                </div>
                <div className="d-flex g-30 mt-2">
                  <div>
                    <div className="r-f-8 txt-grey">
                      Country <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MAB-textfield mt-1"
                    />
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      State <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MAB-textfield mt-1"
                    />
                  </div>
                </div>
                <div className="d-flex g-30 mt-2">
                  <div>
                    <div className="r-f-8 txt-grey">
                      City <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MAB-textfield mt-1"
                    />
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      Co-ordinate <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MAB-textfield mt-1"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="MAB-comp-config mt-3">
            <div
            onClick={toggleComplience}
              className={`MAB-comp-config-header ${
                isComplienceVisible ? "MAB-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleComplience} className="c-pointer">
                      {isComplienceVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Compliance</div>
                    <div className="r-f-10 txt-dark-grey">
                      Manage info related to tax, legal & regulatory agencies
                    </div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-18 txt-green"
                  />
                </div>
              </div>
            </div>
            {isComplienceVisible && (
              <div className="MAB-comp-config-content">
                <div className="d-flex g-30">
                  <div>
                    <div className="r-f-8 txt-grey">
                      GSTIN <span className="txt-red">*</span>
                    </div>
                    <div className="MAB-textfield d-flex g-10 align-item-center mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          border: "none",
                          outline: "none",
                          width: "9vw",
                          fontSize: "1vw",
                        }}
                      />
                      <label className="MAB-custom-file-upload">
                        <input
                          type="file"
                          name=""
                          id="fileInput"
                          className="MAB-file-input"
                          onChange={handleFileChangeGSTIN}
                        />
                        {fileUploadedGSTIN ? (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            File Uploaded
                          </span>
                        ) : (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            Browse File
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      FSSAI <span className="txt-red">*</span>
                    </div>
                    <div className="MAB-textfield d-flex g-10 align-item-center mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          border: "none",
                          outline: "none",
                          width: "9vw",
                          fontSize: "1vw",
                        }}
                      />
                      <label className="MAB-custom-file-upload">
                        <input
                          type="file"
                          name=""
                          id="fileInput"
                          className="MAB-file-input"
                          onChange={handleFileChangeFSSAI}
                        />
                        {fileUploadedFSSAI ? (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            File Uploaded
                          </span>
                        ) : (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            Browse File
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex g-30 mt-2">
                  <div>
                    <div className="r-f-8 txt-grey">
                      Trade License <span className="txt-red">*</span>
                    </div>
                    <div className="MAB-textfield d-flex g-10 align-item-center mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          border: "none",
                          outline: "none",
                          width: "9vw",
                          fontSize: "1vw",
                        }}
                      />
                      <label className="MAB-custom-file-upload">
                        <input
                          type="file"
                          name=""
                          id="fileInput"
                          className="MAB-file-input"
                          onChange={handleFileChangeTL}
                        />
                        {fileUploadedTL ? (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            File Uploaded
                          </span>
                        ) : (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            Browse File
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="MAB-comp-config mt-3">
            <div
            onClick={toggleBD}
              className={`MAB-comp-config-header ${
                isBDVisible ? "MAB-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleBD} className="c-pointer">
                      {isBDVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Bank Details</div>
                    <div className="r-f-10 txt-dark-grey">
                      Configure Bank Info
                    </div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-18 txt-green"
                  />
                </div>
              </div>
            </div>
            {isBDVisible && (
              <div className="MAB-comp-config-content">
                <div className="d-flex g-30">
                  <div>
                    <div className="r-f-8 txt-grey">
                      Bank Account Name <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MAB-textfield mt-1"
                    />
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      Bank Name <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MAB-textfield mt-1"
                    />
                  </div>
                </div>
                <div className="d-flex g-30 mt-2">
                  <div>
                    <div className="r-f-8 txt-grey">
                      Account Number <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MAB-textfield mt-1"
                    />
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      IFSC Code <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MAB-textfield mt-1"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="MAB-comp-config mt-3">
            <div
            onClick={toggleOD}
              className={`MAB-comp-config-header ${
                isODVisible ? "MAB-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleOD} className="c-pointer">
                      {isODVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Owner Details</div>
                    <div className="r-f-10 txt-dark-grey">
                      Configure Contact Info
                    </div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-18 txt-green"
                  />
                </div>
              </div>
            </div>
            {isODVisible && (
              <div className="MAB-comp-config-content">
                <div className="d-flex g-30">
                  <div>
                    <div className="r-f-8 txt-grey">
                      Number of Owners <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name="numOwners"
                      id="numOwners"
                      className="MAB-textfield mt-1"
                      onChange={handleNumOwnersChange}
                      value={numOwners}
                    />
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      Ownership Type/Term <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MAB-textfield mt-1"
                    />
                  </div>
                </div>
                {ownerFields}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="MAB-mobile">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Add Brand</div>
          <div
            className="p-outline-button d-flex justify-content-center align-item-center align-text-center"
            style={{ width: "70px", padding: "10px" }}
          >
            <div>Edit Profile</div>
          </div>
        </div>

        <div className="ADD-p-position" style={{ marginTop: "32vh" }}>
          <div className="ADD-p-container">
            <div className="MAB-comp-config-p">
              <div
              onClick={toggleCC}
                className={`MAB-comp-config-header-p ${
                  isCCVisible ? "MAB-grey" : ""
                }`}
              >
                <div className="d-flex space-between align-item-center">
                  <div className="d-flex align-item-center g-20">
                    <div>
                      <div onClick={toggleCC} className="c-pointer">
                        {isCCVisible ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="r-f-14">Company Configuration</div>
                      <div className="r-f-10 txt-dark-grey">
                        Baisc Settings of your company
                      </div>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="r-f-20 txt-green"
                    />
                  </div>
                </div>
              </div>
              {isCCVisible && ( 
              <div className="MAB-comp-config-content-p">
                <div className="mt-2">
                  <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                    Company name &nbsp;<span className="txt-red">*</span>&nbsp;
                    <span className="field-role-p r-f-6">Used For Billing</span>
                    &nbsp;
                    <Icon icon="bi:info-circle" className="txt-dark-grey" />
                  </div>
                  <input
                    className="MAB-textfield-p"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="d-flex g-30">
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey">Company ID</div>
                    <div className="MAB-textfield-s-p">
                      <div className="d-flex space-between align-item-center">
                        <div>
                          <input
                            type="text"
                            name=""
                            id=""
                            style={{
                              padding: "2vw",
                              width: "25vw",
                              border: "none",
                              borderRight: "1.5px solid #cbcbce",
                              outline: "none",
                              borderRadius: "2vw 0vw 0vw 2vw",
                            }}
                          />
                        </div>
                        <div className="d-flex align-text-center">
                          <div className="d-flex align-text-center">
                            <Icon
                              icon="ph:copy"
                              style={{ marginLeft: "2vw" }}
                              className="txt-grey"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey">Company Logo</div>
                    <div className="d-flex g-10">
                      <div className="mt-1">
                        <label className="MAB-custom-file-upload-logo">
                          <input
                            type="file"
                            name=""
                            id="fileInput"
                            className="MAB-file-input"
                            onChange={handleFileChangeCL}
                          />
                          {fileUploadedCL ? (
                            <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center">
                              Replace File <AiOutlinePaperClip />
                            </span>
                          ) : (
                            <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center txt-dark-grey">
                              Browse File <AiOutlinePaperClip />
                            </span>
                          )}
                        </label>
                      </div>
                      <div>
                        <div className="logo-eclipse-p">
                          <div className="logo-image-eclipse-p">
                            <img
                              src="./Images/DeliveyBoyDocuments/1.jpg"
                              alt="No File"
                              className="logo-image-eclipse-p r-f-8"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                    Brand name &nbsp;<span className="txt-red">*</span>&nbsp;
                    <span className="field-role-p r-f-6">
                      Customers see this
                    </span>
                    &nbsp;
                    <Icon icon="bi:info-circle" className="txt-dark-grey" />
                  </div>
                  <input
                    className="MAB-textfield-p"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="d-flex g-30">
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey">Brand ID</div>
                    <div className="MAB-textfield-s-p">
                      <div className="d-flex space-between align-item-center">
                        <div>
                          <input
                            type="text"
                            name=""
                            id=""
                            style={{
                              padding: "2vw",
                              width: "25vw",
                              border: "none",
                              borderRight: "1.5px solid #cbcbce",
                              outline: "none",
                              borderRadius: "2vw 0vw 0vw 2vw",
                            }}
                          />
                        </div>
                        <div className="d-flex align-text-center">
                          <div className="d-flex align-text-center">
                            <Icon
                              icon="ph:copy"
                              style={{ marginLeft: "2vw" }}
                              className="txt-grey"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey">Brand Logo</div>
                    <div className="d-flex g-10">
                      <div className="mt-1">
                        <label className="MAB-custom-file-upload-logo">
                          <input
                            type="file"
                            name=""
                            id="fileInput"
                            className="MAB-file-input"
                            onChange={handleFileChangeBL}
                          />
                          {fileUploadedBL ? (
                            <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center">
                              Replace File <AiOutlinePaperClip />
                            </span>
                          ) : (
                            <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center txt-dark-grey">
                              Browse File <AiOutlinePaperClip />
                            </span>
                          )}
                        </label>
                      </div>
                      <div>
                        <div className="logo-eclipse-p">
                          <div className="logo-image-eclipse-p">
                            <img
                              src="./Images/DeliveyBoyDocuments/10.jpg"
                              alt="No File"
                              className="logo-image-eclipse-p r-f-8"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                    Outlet name &nbsp;<span className="txt-red">*</span>&nbsp;
                    <span className="field-role-p r-f-6">For Internal use</span>
                    &nbsp;
                    <Icon icon="bi:info-circle" className="txt-dark-grey" />
                  </div>
                  <input
                    className="MAB-textfield-p"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="d-flex g-30">
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey">Outlet ID</div>
                    <div className="MAB-textfield-s-p">
                      <div className="d-flex space-between align-item-center">
                        <div>
                          <input
                            type="text"
                            name=""
                            id=""
                            style={{
                              padding: "2vw",
                              width: "25vw",
                              border: "none",
                              borderRight: "1.5px solid #cbcbce",
                              outline: "none",
                              borderRadius: "2vw 0vw 0vw 2vw",
                            }}
                          />
                        </div>
                        <div className="d-flex align-text-center">
                          <div className="d-flex align-text-center">
                            <Icon
                              icon="ph:copy"
                              style={{ marginLeft: "2vw" }}
                              className="txt-grey"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              )}
            </div>
            <div className="MAB-comp-config-p mt-3">
            <div
            onClick={toggleAddress}
              className={`MAB-comp-config-header-p ${
                isAddressVisible ? "MAB-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleAddress} className="c-pointer">
                      {isAddressVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Address</div>
                    <div className="r-f-10 txt-dark-grey">Outlet Address</div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-20 txt-green"
                  />
                </div>
              </div>
            </div>
            {isAddressVisible && (
            <div className=" MAB-comp-config-content-p">
              <div className="r-f-12">Address</div>
              <div className="r-f-8 txt-grey">Outlet Address</div>
              <div className="mt-2">
                <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                  Complete Address<span className="txt-red">*</span>
                </div>
                <input className="MAB-textfield-p" type="text" name="" id="" />
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                  Country<span className="txt-red">*</span>
                </div>
                <input className="MAB-textfield-p" type="text" name="" id="" />
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                  State<span className="txt-red">*</span>
                </div>
                <input className="MAB-textfield-p" type="text" name="" id="" />
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                  City<span className="txt-red">*</span>
                </div>
                <input className="MAB-textfield-p" type="text" name="" id="" />
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                  Co-ordinates<span className="txt-red">*</span>
                </div>
                <input className="MAB-textfield-p" type="text" name="" id="" />
              </div>
            </div>
            )}
            </div>
            
            
            <div className="MAB-comp-config-p mt-3">
            <div
            onClick={toggleComplience}
              className={`MAB-comp-config-header-p ${
                isComplienceVisible ? "MAB-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleComplience} className="c-pointer">
                      {isComplienceVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Compliance</div>
                    <div className="r-f-10 txt-dark-grey">
                      Manage info related to tax, legal & regulatory agencies
                    </div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-20 txt-green"
                  />
                </div>
              </div>
            </div>
            {isComplienceVisible && (
              <div className="MAB-comp-config-content">
              <div className="mt-2">
                <div className="r-f-8 txt-grey">
                  GSTIN <span className="txt-red">*</span>
                </div>
                <div className="MAB-textfield-p d-flex g-10 align-item-center mt-1">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ border: "none", outline: "none", width: "60vw" }}
                  />
                  <label className="MAB-custom-file-upload-p">
                    <input
                      type="file"
                      name=""
                      id="fileInput"
                      className="MAB-file-input-p"
                      onChange={handleFileChangeGSTIN}
                    />
                    {fileUploadedGSTIN ? (
                      <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                        File Uploaded
                      </span>
                    ) : (
                      <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                        Browse File
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="mt-2">
                <div className="r-f-8 txt-grey">
                  FSSAI <span className="txt-red">*</span>
                </div>
                <div className="MAB-textfield-p d-flex g-10 align-item-center mt-1">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ border: "none", outline: "none", width: "60vw" }}
                  />
                  <label className="MAB-custom-file-upload-p">
                    <input
                      type="file"
                      name=""
                      id="fileInput"
                      className="MAB-file-input-p"
                      onChange={handleFileChangeFSSAI}
                    />
                    {fileUploadedFSSAI ? (
                      <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                        File Uploaded
                      </span>
                    ) : (
                      <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                        Browse File
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="mt-2">
                <div className="r-f-8 txt-grey">
                  Trade License <span className="txt-red">*</span>
                </div>
                <div className="MAB-textfield-p d-flex g-10 align-item-center mt-1">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ border: "none", outline: "none", width: "60vw" }}
                  />
                  <label className="MAB-custom-file-upload-p">
                    <input
                      type="file"
                      name=""
                      id="fileInput"
                      className="MAB-file-input-p"
                      onChange={handleFileChangeTL}
                    />
                    {fileUploadedTL ? (
                      <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                        File Uploaded
                      </span>
                    ) : (
                      <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                        Browse File
                      </span>
                    )}
                  </label>
                </div>
              </div>
              </div>
              )}
            </div>
            
            <div className="MAB-comp-config-p mt-3">
            <div
            onClick={toggleBD}
              className={`MAB-comp-config-header-p ${
                isBDVisible ? "MAB-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleBD} className="c-pointer">
                      {isBDVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Bank Details</div>
                    <div className="r-f-10 txt-dark-grey">
                      Configure Bank Info
                    </div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-20 txt-green"
                  />
                </div>
              </div>
            </div>
            {isBDVisible && (
            <div className="MAB-comp-config-content-p">
            <div className="mt-2">
                <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                  Bank Account Name<span className="txt-red">*</span>
                </div>
                <input className="MAB-textfield-p" type="text" name="" id="" />
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                  Bank name<span className="txt-red">*</span>
                </div>
                <input className="MAB-textfield-p" type="text" name="" id="" />
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                  Account Number<span className="txt-red">*</span>
                </div>
                <input className="MAB-textfield-p" type="text" name="" id="" />
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                  IFSC Code<span className="txt-red">*</span>
                </div>
                <input className="MAB-textfield-p" type="text" name="" id="" />
              </div>
            </div>
             )}
             
            </div>

            <div className="MAB-comp-config-p mt-3">
            <div
            onClick={toggleOD}
              className={`MAB-comp-config-header-p ${
                isODVisible ? "MAB-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleOD} className="c-pointer">
                      {isODVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Owner Details</div>
                    <div className="r-f-10 txt-dark-grey">
                      Configure Contact Info
                    </div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-20 txt-green"
                  />
                </div>
              </div>
            </div>
            {isODVisible && (
            <div className="MAB-comp-config-content-p">
              <div className="d-flex g-30">
                <div>
                  <div className="r-f-8 txt-grey">
                    Number of Owners <span className="txt-red">*</span>
                  </div>
                  <input
                    type="text"
                    name="numOwners"
                    id="numOwners"
                    className="MAB-textfield-p-2 mt-1"
                    onChange={handleNumOwnersChange}
                    value={numOwners}
                  />
                </div>
                <div>
                  <div className="r-f-8 txt-grey">
                    Ownership Type/Term <span className="txt-red">*</span>
                  </div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="MAB-textfield-p-2 mt-1"
                  />
                </div>
              </div>
              {ownerFields}
            </div>
            )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAddBrand;
