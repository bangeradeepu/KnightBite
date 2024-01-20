import React, { useState, useEffect } from "react";
import "./ManageAppNotification.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
const ManageAppNotification = () => {
  const [fileUploadedCL, setFileUploadedCL] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChangeCL = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFileUploadedCL(true);
      setSelectedFileName(selectedFile.name);

      // Read the selected file as a data URL and set it as the image source
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setFileUploadedCL(false);
      setSelectedFileName("");
      setSelectedImage(null);
    }
  };

  // Set Title
  const [titleMessage, setTitleMessage] = useState("");

  const handleTitleMessage = (e) => {
    setTitleMessage(e.target.value);
  };

  // Set Description
  const [descMessage, setDescMessage] = useState("");
  const handleDescMessage = (e) => {
    setDescMessage(e.target.value);
  };
  return (
    <div className="ManageAppNotification r-f-12">
      <div className="MAN-desktop">
        <div className="MAN-layer">
          <div className="d-flex space-between align-item-center">
            <div>
              <div className="r-f-18 f-w-600">App Notification</div>
            </div>
          </div>
          <div className="d-flex" style={{ gap: "10vw" }}>
            <div>
              <div className="d-flex mt-4 g-20 align-item-center">
                <div className="MAN-left-side-w">
                  <div className="r-f-14">Title Message</div>
                  <div className="r-f-10 txt-dark-grey">(Minimum 10 words)</div>
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols="50"
                    rows="4"
                    className="MAN-textarea"
                    onChange={handleTitleMessage}
                  ></textarea>
                </div>
              </div>
              <div className="d-flex mt-4 g-20 align-item-center">
                <div className="MAN-left-side-w">
                  <div className="r-f-14">Description Message</div>
                  <div className="r-f-10 txt-dark-grey">(Minimum 20 words)</div>
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    cols="50"
                    rows="4"
                    className="MAN-textarea"
                    onChange={handleDescMessage}
                  ></textarea>
                </div>
              </div>
              <div className="d-flex mt-4 g-20 align-item-center">
                <div className="MAN-left-side-w">
                  <div className="r-f-14">Image</div>
                  <div className="r-f-10 txt-dark-grey">
                    (Dimension:500X500 px)
                  </div>
                </div>
                <div>
                  <label className="MAN-custom-file-upload-logo">
                    <input
                      type="file"
                      name=""
                      id="fileInput"
                      className="MAN-file-input"
                      onChange={handleFileChangeCL}
                    />
                    {fileUploadedCL ? (
                      <span className="r-f-12 d-flex g-10 align-item-center align-text-center justify-content-center txt-dark-grey">
                        Replace File <FontAwesomeIcon icon={faPaperclip} />
                      </span>
                    ) : (
                      <span className="r-f-12 d-flex g-10 align-item-center align-text-center justify-content-center txt-dark-grey">
                        Browse File <FontAwesomeIcon icon={faPaperclip} />
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>
            
              <div className="MAN-image-preview mt-4">
    <div className="d-flex space-between align-item-center">
        <div className="r-f-12 txt-grey d-flex align-item-center"><img src="../Images/kb_logo.png" alt=""  className="MAN-img-logo" /  >Knight Bite</div>
        <div className="r-f-8">8 min ago</div>
    </div>
    <div className="r-f-12 f-w-600 mt-1">    {titleMessage || 'Title Message'}</div>
    <div className="mt-1 r-f-10"> {descMessage || 'Description Message'}</div>
    <div className="MAN-preview-image-box mt-1">
    {selectedImage && (
    <img src={selectedImage} alt="Selected File" />
    )}
    </div>
</div>
            
          </div>
        </div>
      </div>
      <div className="MAN-mobile">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">App Notification</div>
        </div>
        <div className="ADD-p-position">
          <div className="ADD-p-container">
            <div>
              <div className="">
                <div className="r-f-18">Title Message</div>
                <div className="r-f-10 txt-dark-grey">(Minimum 10 words)</div>
              </div>
              <textarea
                name=""
                id=""
                cols="38"
                rows="4"
                className="MAN-textarea mt-1"
                onChange={handleTitleMessage}
              ></textarea>
            </div>
            <div>
              <div className="mt-2">
                <div className="r-f-18">Description Message</div>
                <div className="r-f-10 txt-dark-grey">(Minimum 20 words)</div>
              </div>
              <textarea
                name=""
                id=""
                cols="38"
                rows="4"
                className="MAN-textarea mt-1"
                onChange={handleDescMessage}
              ></textarea>
            </div>
            <div>
              <div className="mt-2">
                <div className="d-flex g-30 align-item-center">
                  <div>
                    <div className="r-f-18">Image</div>
                    <div className="r-f-10 txt-dark-grey">
                      (Dimension:500X500 px)
                    </div>
                  </div>

                  <label className="MAN-custom-file-upload-logo mt-1">
                    <input
                      type="file"
                      name=""
                      id="fileInput"
                      className="MAN-file-input"
                      onChange={handleFileChangeCL}
                    />
                    {fileUploadedCL ? (
                      <span className="r-f-12 d-flex g-10 align-item-center align-text-center justify-content-center txt-dark-grey">
                        Replace File <FontAwesomeIcon icon={faPaperclip} />
                      </span>
                    ) : (
                      <span className="r-f-12 d-flex g-10 align-item-center align-text-center justify-content-center txt-dark-grey">
                        Browse File <FontAwesomeIcon icon={faPaperclip} />
                      </span>
                    )}
                  </label>
                </div>
              </div>
            </div>

            <div className="d-flex">
              <div className="MAN-image-preview mt-4">
                <div className="d-flex space-between align-item-center">
                  <div className="r-f-12 txt-grey d-flex align-item-center">
                    <img
                      src="../Images/kb_logo.png"
                      alt=""
                      className="MAN-img-logo"
                    />
                    Knight Bite
                  </div>
                  <div className="r-f-8">8 min ago</div>
                </div>
                <div className="r-f-12 f-w-600 mt-1">
                  {" "}
                  {titleMessage || "Title Message"}
                </div>
                <div className="mt-1 r-f-10">
                  {" "}
                  {descMessage || "Description Message"}
                </div>
                <div className="MAN-preview-image-box mt-1">
                  {selectedImage && (
                    <img src={selectedImage} alt="Selected File" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageAppNotification;
