import React, { useState, useRef } from "react";
import "./AddDeliveryBoys.css";

const languages = [
  "English",
  "Hindi",
  "Kannada",
  "Malayalam",
  "Tulu",
  "Konkani",
  "Marathi",
];

function AddDeliveryBoys() {
  // Open Language modal
  const [lanuguageVisible, setLanguageVisible] = useState(false);

  const openLanguage = () => {
    setLanguageVisible(true);
  };

  const closeLanguage = () => {
    setLanguageVisible(false);
  };

  //   Select and display the selectd lanuages
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleCheckboxChange = (event) => {
    const selectedLanguage = event.target.name;
    if (event.target.checked) {
      setSelectedLanguages((prevSelectedLanguages) => [
        ...prevSelectedLanguages,
        selectedLanguage,
      ]);
    } else {
      setSelectedLanguages((prevSelectedLanguages) =>
        prevSelectedLanguages.filter((lang) => lang !== selectedLanguage)
      );
    }
    setIsAnyInput(true);
  };
  // Open only naything is typed
  const [isAnyInput, setIsAnyInput] = useState(false);

  //   Preview for name
  const [inputName, setInputName] = useState(""); // State to store the input text

  const handleInputNameChange = (event) => {
    setInputName(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for username
  const [inputUsername, setInputUsername] = useState(""); // State to store the input text

  const handleInputUsernameChange = (event) => {
    setInputUsername(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for Phone number
  const [inputPhone, setInputPhone] = useState(""); // State to store the input text

  const handleInputPhoneChange = (event) => {
    setInputPhone(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for Phone number
  const [inputAltPhone, setInputAltPhone] = useState(""); // State to store the input text

  const handleInputAltPhoneChange = (event) => {
    setInputAltPhone(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for email
  const [inputEmail, setInputEmail] = useState(""); // State to store the input text

  const handleInputEmaileChange = (event) => {
    setInputEmail(event.target.value);
    setIsAnyInput(true);
  };

  //    Preview blood grup
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    setIsAnyInput(true);
  };

  //   Preview for address
  const [inputAddress, setInputAddress] = useState(""); // State to store the input text

  const handleInputAddressChange = (event) => {
    setInputAddress(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for VRN
  const [inputVRN, setInputVRN] = useState(""); // State to store the input text

  const handleInputVRNChange = (event) => {
    setInputVRN(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for VN
  const [inputVN, setInputVN] = useState(""); // State to store the input text

  const handleInputVNChange = (event) => {
    setInputVN(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for VM
  const [inputVM, setInputVM] = useState(""); // State to store the input text

  const handleInputVMChange = (event) => {
    setInputVM(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for LN
  const [inputLN, setInputLN] = useState(""); // State to store the input text

  const handleInputLNChange = (event) => {
    setInputLN(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for LED
  const [inputLED, setInputLED] = useState(""); // State to store the input text

  const formatDateLED = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };
  const handleInputLEDChange = (event) => {
    const newDate = event.target.value;
    const formattedDate = formatDateLED(newDate);
    setInputLED(formattedDate); // Update the inputLED state with the formatted date
    setIsAnyInput(true);
  };

  //   Preview for IN
  const [inputIN, setInputIN] = useState(""); // State to store the input text

  const handleInputINChange = (event) => {
    setInputIN(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for IED
  const [inputIED, setInputIED] = useState(""); // State to store the input text

  const formatDateIED = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      undefined,
      options
    );
    return formattedDate;
  };
  const handleInputIEDChange = (event) => {
    const newDate = event.target.value;
    const formattedDate = formatDateIED(newDate);
    setInputIED(formattedDate);
    setIsAnyInput(true);
  };

  // File upload
  // file upload for photo
  const fileInputPhotoRef = useRef(null);
  const [fileUploadedPhoto, fsetFileUploadedPhoto] = useState(false);

  // Function to handle file selection
  const handleFileChangePhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
      fsetFileUploadedPhoto(true); // Set the fileUploadedPhoto state to true
    }
    setIsAnyInput(true);
  };

  const fileInputPhotoClass = fileUploadedPhoto
    ? "ADB-input-file-custom ADB-input-file-custom-DB-photo uploaded ADB-input-file-custom-DB-photo txt-uploaded"
    : "ADB-input-file-custom ADB-input-file-custom-DB-photo";

  // file upload for  licence
  const fileInputLicenceRef = useRef(null);
  const [fileUploadedLicence, fsetFileUploadedLicence] = useState(false);

  const handleFileChangeLicence = (event) => {
    const file = event.target.files[0];
    if (file) {
      fsetFileUploadedLicence(true); // Set the fileUploadedPhoto state to true
    }
    setIsAnyInput(true);
  };

  const fileInputLicenceClass = fileUploadedLicence
    ? "ADB-input-file-custom ADB-input-file-custom-DB-data-uploaded color-data-uploaded txt-data-uploaded"
    : "ADB-input-file-custom ADB-input-file-custom-DB-data-Upload";

  // file upload for  licence
  const fileInputRCeRef = useRef(null);
  const [fileUploadedRC, fsetFileUploadedRC] = useState(false);

  const handleFileChangeRC = (event) => {
    const file = event.target.files[0];
    if (file) {
      fsetFileUploadedRC(true); // Set the fileUploadedPhoto state to true
    }
    setIsAnyInput(true);
  };

  const fileInputRCClass = fileUploadedRC
    ? "ADB-input-file-custom ADB-input-file-custom-DB-data-uploaded color-data-uploaded txt-data-uploaded"
    : "ADB-input-file-custom ADB-input-file-custom-DB-data-Upload";

  // file upload for  lnsurance
  const fileInputINCRef = useRef(null);
  const [fileUploadedINC, fsetFileUploadedINC] = useState(false);

  const handleFileChangeINC = (event) => {
    const file = event.target.files[0];
    if (file) {
      fsetFileUploadedINC(true); // Set the fileUploadedPhoto state to true
    }
    setIsAnyInput(true);
  };

  const fileInputINCClass = fileUploadedINC
    ? "ADB-input-file-custom ADB-input-file-custom-DB-data-uploaded color-data-uploaded txt-data-uploaded"
    : "ADB-input-file-custom ADB-input-file-custom-DB-data-Upload";

  // file upload for  Emission
  const fileInputEMSNeRef = useRef(null);
  const [fileUploadedEMSN, fsetFileUploadedEMSN] = useState(false);

  const handleFileChangeEMSN = (event) => {
    const file = event.target.files[0];
    if (file) {
      fsetFileUploadedEMSN(true); // Set the fileUploadedPhoto state to true
    }
    setIsAnyInput(true);
  };

  const fileInputEMSNClass = fileUploadedEMSN
    ? "ADB-input-file-custom ADB-input-file-custom-DB-data-uploaded color-data-uploaded txt-data-uploaded"
    : "ADB-input-file-custom ADB-input-file-custom-DB-data-Upload";

  return (
    <div className="ADB-app">
      <div className="ADB-left-box">
        <div className="ADB-container">
          <div className=" ADB-row f-20">Add delivery boys</div>
          <br />
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Name</label>
              <input
                type="text"
                className="ADB-input"
                value={inputName}
                onChange={handleInputNameChange}
              />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Username</label>
              <input
                type="text"
                className="ADB-input"
                value={inputUsername}
                onChange={handleInputUsernameChange}
              />
            </div>
          </div>
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Phone number</label>
              <input
                type="text"
                className="ADB-input"
                value={inputPhone}
                onChange={handleInputPhoneChange}
              />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Alternative Phone number</label>
              <input
                type="text"
                className="ADB-input"
                value={inputAltPhone}
                onChange={handleInputAltPhoneChange}
              />
            </div>
          </div>
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Email</label>
              <input
                type="text"
                className="ADB-input"
                value={inputEmail}
                onChange={handleInputEmaileChange}
              />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Alternative Phone number</label>
              <select
                name=""
                id=""
                className="ADB-dropdown"
                value={selectedOption} // Bind selected value to the state
                onChange={handleSelectChange}
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
          </div>
          <div className="ADB-row">
            <label className="f-12">Address</label>
            <textarea
              className="ADB-textarea"
              name=""
              id=""
              cols="30"
              rows="5"
              value={inputAddress}
              onChange={handleInputAddressChange}
            ></textarea>
          </div>
          <div className="ADB-row-left-right-align">
            <div className="f-12">
              <button
                className="p-button bg-purple"
                type="button"
                style={{
                  marginBottom: "0rem",
                  width: "11rem",
                  height: "40px",
                  paddingTop: "11px",
                }}
                onClick={openLanguage}
              >
                Select known lanugaes
              </button>
              {lanuguageVisible && (
                <div
                  className={`ADB-language ${
                    lanuguageVisible ? "ADB-language-open" : ""
                  }`}
                  onClick={closeLanguage}
                >
                  <div className="ADB-language-content">
                    <div className="grid-2">
                      <p className="">Select Languages</p>
                    </div>
                    <div className="ADB-language-content-inside">
                      {languages.map((language, index) => (
                        <div key={index}>
                          <input
                            type="checkbox"
                            name={language}
                            id={language}
                            onChange={handleCheckboxChange}
                            checked={selectedLanguages.includes(language)}
                          />
                          {language}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <input
              type="file"
              className={fileInputPhotoClass}
              ref={fileInputPhotoRef}
              onChange={handleFileChangePhoto}
            />
          </div>
          <div className="f-12">
            {selectedLanguages.map((selectedLanguage, index) => (
              <div key={index}>{selectedLanguage}</div>
            ))}
          </div>
          <div
            className="row"
            style={{
              width: "100%",
              backgroundColor: "#dadada",
              height: "1px",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          ></div>
          <div className="">Vehicle Details</div>
          <br />
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Vehicle RC number</label>
              <input
                type="text"
                className="ADB-input"
                value={inputVRN}
                onChange={handleInputVRNChange}
              />
            </div>
          </div>
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Vehicle Number</label>
              <input
                type="text"
                className="ADB-input"
                value={inputVN}
                onChange={handleInputVNChange}
              />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Vehicle modal</label>
              <input
                type="text"
                className="ADB-input"
                value={inputVM}
                onChange={handleInputVMChange}
              />
            </div>
          </div>
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Licence number</label>
              <input
                type="text"
                className="ADB-input"
                value={inputLN}
                onChange={handleInputLNChange}
              />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Licence Exp date</label>
              <input
                type="date"
                className="ADB-input"
                value={inputLED}
                onChange={handleInputLEDChange}
              />
            </div>
          </div>
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Insurance number</label>
              <input
                type="text"
                className="ADB-input"
                value={inputIN}
                onChange={handleInputINChange}
              />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Insurance Exp date</label>
              <input
                type="date"
                className="ADB-input"
                value={inputIED}
                onChange={handleInputIEDChange}
              />
            </div>
          </div>
          <div
            className="row"
            style={{
              width: "100%",
              backgroundColor: "#dadada",
              height: "1px",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          ></div>
          <div className="ADB-row-left-right-align">
            <div>
              <label htmlFor="button" className="f-12">
                Upload Licence
                <div>
                  <input
                    type="file"
                    className={fileInputLicenceClass}
                    ref={fileInputLicenceRef}
                    onChange={handleFileChangeLicence}
                  />
                </div>
              </label>
            </div>

            <div>
              <label htmlFor="button" className="f-12">
                Upload RC
                <div>
                  <input
                    type="file"
                    className={fileInputRCClass}
                    ref={fileInputRCeRef}
                    onChange={handleFileChangeRC}
                  />
                </div>
              </label>
            </div>
          </div>

          <div
            className="ADB-row-left-right-align"
            style={{ marginTop: "1rem" }}
          >
            <div>
              <label htmlFor="button" className="f-12">
                Upload Insurance
                <div>
                  <input
                    type="file"
                    className={fileInputINCClass}
                    ref={fileInputINCRef}
                    onChange={handleFileChangeINC}
                  />
                </div>
              </label>
            </div>

            <div>
              <label htmlFor="button" className="f-12">
                Upload Emission
                <div>
                  <input
                    type="file"
                    className={fileInputEMSNClass}
                    ref={fileInputEMSNeRef}
                    onChange={handleFileChangeEMSN}
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="ADB-right-box">
        {isAnyInput && (
          <div>
            <div className=" ADB-row f-20">Preview</div>

            <div className="ADB-right-box-container">
              <div className="ADB-right-box-left-column">
                <img src="Images/person.png" alt="Image" width="72%" />
              </div>
              <div className="ADB-right-box-right-column">
                <div className="ADB-right-box-row">
                  <div className="ADB-right-box-column">
                    <div className="f-12 txt-grey">Name</div>
                    <div className="f-14 txt-black">{inputName}</div>
                  </div>
                  <div className="ADB-right-box-column">
                    <div className="f-12 txt-grey">Email address</div>
                    <div className="f-14 txt-black">{inputEmail}</div>
                  </div>
                </div>
                <div className="ADB-right-box-row">
                  <div className="ADB-right-box-column">
                    <div className="f-12 txt-grey">Username</div>
                    <div className="f-14 txt-black">{inputUsername}</div>
                  </div>
                  <div className="ADB-right-box-column">
                    <div className="f-12 txt-grey">Blood group</div>
                    <div className="f-14 txt-black">{selectedOption}</div>
                  </div>
                </div>
                <div className="ADB-right-box-row">
                  <div className="ADB-right-box-column">
                    <div className="f-12 txt-grey">Phone number</div>
                    <div className="f-14 txt-black">
                      {inputPhone ? `+91 ${inputPhone}` : null}{" "}
                    </div>
                  </div>
                  <div className="ADB-right-box-column">
                    <div className="f-12 txt-grey">
                      Alternative phone number
                    </div>
                    <div className="f-14 txt-black">
                      {inputAltPhone ? `+91 ${inputAltPhone}` : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                width: "100%",
                backgroundColor: "#dadada",
                height: "1px",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            ></div>
            <div>
              <div>
                <div className="f-12 txt-grey">Address</div>
                <div className="ADB-row-left-right-align">
                  <div className="f-14 txt-black">{inputAddress}</div>
                </div>
              </div>
              <div style={{ marginTop: "2rem" }}>
                <div className="f-12 txt-grey">Known languages</div>
                <div className="ADB-row-left-right-align">
                  <div className="f-14 txt-black">
                    {selectedLanguages.map((selectedLanguage, index) => (
                      <>
                        {selectedLanguage}
                        {", "}
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{
                width: "100%",
                backgroundColor: "#dadada",
                height: "1px",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            ></div>
            <div className="ADB-right-box-row">
              <div className="ADB-right-box-column">
                <div className="f-12 txt-grey">Vechile number</div>
                <div className="f-14 txt-black">{inputVN}</div>
              </div>
              <div className="ADB-right-box-column">
                <div className="f-12 txt-grey">Vechile RC number</div>
                <div className="f-14 txt-black">{inputVRN}</div>
              </div>
              <div className="ADB-right-box-column">
                <div className="f-12 txt-grey">Vechile model</div>
                <div className="f-14 txt-black">{inputVM}</div>
              </div>
            </div>
            <div className="ADB-right-box-row">
              <div className="ADB-right-box-column">
                <div className="f-12 txt-grey">Licence number</div>
                <div className="f-14 txt-black">{inputLN}</div>
              </div>
              <div className="ADB-right-box-column">
                <div className="f-12 txt-grey">Licence Exp date</div>
                <div className="f-14 txt-black">{inputLED}</div>
              </div>
              <div className="ADB-right-box-column">
                <div className="f-12 txt-grey">{""}</div>
                <div className="f-14 txt-black">{""}</div>
              </div>
            </div>
            <div className="ADB-right-box-row">
              <div className="ADB-right-box-column">
                <div className="f-12 txt-grey">Insurance number</div>
                <div className="f-14 txt-black">{inputIN}</div>
              </div>
              <div className="ADB-right-box-column">
                <div className="f-12 txt-grey">Insurance Exp date</div>
                <div className="f-14 txt-black">{inputIED}</div>
              </div>
              <div className="ADB-right-box-column">
                <div className="f-12 txt-grey">{""}</div>
                <div className="f-14 txt-black">{""}</div>
              </div>
            </div>
            <div className="ADB-right-box-row" style={{ marginTop: "1rem" }}>
              <button className="p-button bg-orange txt-orange">Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddDeliveryBoys;
