import "./CreateNewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faArrowLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import React, { useState, useRef } from "react";

const tagsSet = ["Spicy", "New", "Combo", "Sweet"];

function CreateNewItem() {
  // tab switch
  const [activeTab, setActiveTab] = useState("Single"); // Set 'Items' as the default active tab
  const [filter, setFilter] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Go back
  const navigate = useNavigate();
  const goBacktoDB = () => {
    navigate("/menu/items");
  };
  // preview and input page switch
  const [page, setPage] = useState(1);
  const showPage1 = () => {
    setPage(1);
  };
  const showPage2 = () => {
    setPage(2);
  };
  // Open select tags modal -desktop mode
  const [selectTagsVisible, setSelectTagsVisible] = useState(false);

  const openselectTags = () => {
    setSelectTagsVisible(true);
  };

  const closeselectTags = () => {
    setSelectTagsVisible(false);
  };

  // Open select tags modal -phone
  const [selectTagsPhoneVisible, setSelectTagsPhoneVisible] = useState(false);

  const openselectPhoneTags = () => {
    setSelectTagsPhoneVisible(true);
  };

  const closeselectPhoneTags = () => {
    setSelectTagsPhoneVisible(false);
  };
  //   Select and display the selectd lanuages
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleTagsCheckboxChange = (event) => {
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
  //   Preview for item name
  const [inputItemName, setInputItemName] = useState(""); // State to store the input text

  const setInhandleInputItemNameChange = (event) => {
    setInputItemName(event.target.value);
    setIsAnyInput(true);
  };
  //   Preview for category
  const [inputCategory, setCategory] = useState(""); // State to store the input text

  const handleSetCategory = (event) => {
    setCategory(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for Type
  const [inputType, setType] = useState(""); // State to store the input text

  const handleType = (event) => {
    setType(event.target.value);
    setIsAnyInput(true);
  };
  //   Preview for Sort order
  const [inputSetOrder, setSetOrder] = useState(""); // State to store the input text

  const handleSetOrder = (event) => {
    setSetOrder(event.target.value);
    setIsAnyInput(true);
  };
  //   Preview for Recommended
  const [inputRecommended, setRecommended] = useState(false); // State to store the input text

  const handleRecommended = (event) => {
    setRecommended(event.target.checked);
    setIsAnyInput(true);
  };

  //   Preview for Weight
  const [inputWeight, setWeight] = useState(""); // State to store the input text

  const handleWeight = (event) => {
    setWeight(event.target.value);
    setIsAnyInput(true);
  };

  //   Preview for DSP
  const [inputDSP, setDSP] = useState(""); // State to store the input text

  const handleDSP = (event) => {
    setDSP(event.target.value);
    setIsAnyInput(true);
  };
  //   Preview for MP
  const [inputMP, setMP] = useState(""); // State to store the input text

  const handleMP = (event) => {
    setMP(event.target.value);
    setIsAnyInput(true);
  };
  //   Preview for PID
  const [inputPID, setPID] = useState(""); // State to store the input text

  const handlePID = (event) => {
    setPID(event.target.value);
    setIsAnyInput(true);
  };
  //   Preview for DESC
  const [inputDESC, setDESC] = useState(""); // State to store the input text

  const handleDESC = (event) => {
    setDESC(event.target.value);
    setIsAnyInput(true);
  };
  //   Preview for Serves
  const [inputServes, setServes] = useState(""); // State to store the input text

  const handleServes = (event) => {
    setServes(event.target.value);
    setIsAnyInput(true);
  };
  //   Preview for FM
  const [inputFM, setFM] = useState(""); // State to store the input text

  const handleFM = (event) => {
    setFM(event.target.value);
    setIsAnyInput(true);
  };

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
  return (
    <div className="ITM-create">
      {/* Desktop mode */}
      <div className="ITM-desktop d-flex g-20">
        <div className="ITM-left">
          <div className="d-flex space-between align-item-center">
            <div className="f-20">
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                onClick={goBacktoDB}
                className="txt-black"
                style={{ cursor: "pointer" }}
              />{" "}
              Create Items
            </div>
            <div className="d-flex g-10">
              <button
                className={
                  activeTab === "Single" ? "active-filter" : "filter-button"
                }
                onClick={() => handleTabClick("Single")}
              >
                Single
              </button>
              <button
                className={
                  activeTab === "Combo" ? "active-filter" : "filter-button"
                }
                onClick={() => handleTabClick("Combo")}
              >
                Combo
              </button>
              <button
                className={
                  activeTab === "MRP" ? "active-filter" : "filter-button"
                }
                onClick={() => handleTabClick("MRP")}
              >
                MRP
              </button>
            </div>
          </div>
          <br />
          <br />
          <div>
            <label htmlFor="" className="f-12 txt-grey">
              Item name
            </label>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Item name"
                value={inputItemName}
                onChange={setInhandleInputItemNameChange}
              />
            </div>
          </div>

          <br />
          <div className="d-flex g-10">
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                Category
              </label>
              <div>
                <select
                  name=""
                  id=""
                  value={inputCategory}
                  onChange={handleSetCategory}
                >
                  <option value="" selected disabled>
                    Select Category
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                Food Type
              </label>
              <div>
                <select name="" id="" value={inputType} onChange={handleType}>
                  <option value="" selected disabled>
                    Select food type
                  </option>
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex" style={{ gap: "1vw" }}>
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                Sort Order
              </label>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Sort Order"
                  style={{ width: "16vw" }}
                  value={inputSetOrder}
                  onChange={handleSetOrder}
                />
              </div>
            </div>
            <div style={{ marginBottom: "0vw" }}>
              <label htmlFor="" className="f-12 txt-grey">
                Is recommended
              </label>
              <div>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={inputRecommended}
                    onChange={handleRecommended}
                  ></input>
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex g-10">
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                Default sales price
              </label>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter default sales price"
                  style={{ width: "16vw" }}
                  value={inputDSP}
                  onChange={handleDSP}
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                Markup price
              </label>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter markup price"
                  style={{ width: "16vw" }}
                  value={inputMP}
                  onChange={handleMP}
                />
              </div>
            </div>
          </div>

          <br />
          <div>
            <label htmlFor="" className="f-12 txt-grey">
              Description
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Enter Decription"
              value={inputDESC}
              onChange={handleDESC}
            ></textarea>
          </div>
          <br />
          <div className="d-flex g-10">
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                POS ID
              </label>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter POS ID"
                  style={{ width: "16vw" }}
                  value={inputPID}
                  onChange={handlePID}
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                Weight (in gms)
              </label>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Weight"
                  style={{ width: "16vw" }}
                  value={inputWeight}
                  onChange={handleWeight}
                />
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex g-10">
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                Serves
              </label>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter serves"
                  style={{ width: "16vw" }}
                  value={inputServes}
                  onChange={handleServes}
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                Fulfilment modes
              </label>
              <div>
                <select name="" id="" value={inputFM} onChange={handleFM}>
                  <option value="" selected disabled>
                    Select Fulfilment mode
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex g-10 align-item-center">
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                Tags
              </label>
              <div>
                <button
                  className="p-button bg-purple"
                  style={{ padding: "0.8vw 6.5vw" }}
                  onClick={openselectTags}
                >
                  Select Tags
                </button>
              </div>
            </div>
            <div>
              {selectedLanguages.map((tagsmap, index) => (
                <>
                  <button className="ITM-tags f-10" key={index}>
                    {tagsmap}
                  </button>{" "}
                  &nbsp;
                </>
              ))}
            </div>
          </div>
          {selectTagsVisible && (
            <div
              className="main-modal main-modal-open"
              onClick={closeselectTags}
            >
              <div className="main-modal-content">
                Select Tags
                <div className="main-modal-content-inside">
                  {tagsSet.map((tagsmap, index) => (
                    <div key={index}>
                      <input
                        className="ITM-select-tags"
                        type="checkbox"
                        name={tagsmap}
                        id={tagsmap}
                        onChange={handleTagsCheckboxChange}
                        checked={selectedLanguages.includes(tagsmap)}
                      />
                      {tagsmap}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          <br />
          <br />
          <input
            type="file"
            className={fileInputPhotoClass}
            ref={fileInputPhotoRef}
            onChange={handleFileChangePhoto}
            style={{ border: "none", padding: "0vw 0vw 0vw 0vw" }}
          />
          <br />
        </div>
        <div className="ITM-right">
          <div className="f-20" style={{ paddingTop: "0.7vw" }}>
            Preview
          </div>
          <br />
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="f-12 txt-grey">Item name</div>
              <div>{inputItemName}</div>
            </div>
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="f-12 txt-grey">Category</div>
              <div>{inputCategory}</div>
            </div>

            <div className="flex-1">
              <div className="f-12 txt-grey">Type</div>
              <div>
                {inputType === "Veg" ? (
                  <Icon icon="mdi:square-circle" className="txt-green" />
                ) : inputType === "Non-Veg" ? (
                  <Icon icon="mdi:square-circle" className="txt-red" />
                ) : null}
              </div>
            </div>
            <div className="flex-1"></div>
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="f-12 txt-grey">Sort order</div>
              <div>{inputSetOrder}</div>
            </div>
            <div className="flex-1">
              <div className="f-12 txt-grey">Is recommended</div>
              <div>{inputRecommended ? "Yes" : "No"}</div>
            </div>
            <div className="flex-1">
              <div className="f-12 txt-grey">Weight (in gms)</div>
              <div>{inputWeight}</div>
            </div>
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="f-12 txt-grey">Default Sales price</div>
              <div>₹{inputDSP}</div>
            </div>
            <div className="flex-1">
              <div className="f-12 txt-grey">Markup price</div>
              <div>₹{inputMP}</div>
            </div>
            <div className="flex-1">
              <div className="f-12 txt-grey">POS ID</div>
              <div>{inputPID}</div>
            </div>
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="f-12 txt-grey">Description</div>
              <div>{inputDESC}</div>
            </div>
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="f-12 txt-grey">Serves</div>
              <div>{inputServes}</div>
            </div>
            <div className="flex-1">
              <div className="f-12 txt-grey">Fulfilment modes</div>
              <div>{inputFM}</div>
            </div>
            <div className="flex-1"> </div>
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="f-12 txt-grey">Tags</div>
              <div>
                {selectedLanguages.map((tagsmap, index) => (
                  <>
                    <button className="ITM-tags f-10" key={index}>
                      {tagsmap}
                    </button>{" "}
                    &nbsp;
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className="d-flex">
            <button
              className="p-outline-button"
              style={{ padding: "0.7vw 3.5vw", marginTop: "4vw" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Phone Mode */}
      <div className="ITM-phone">
        <div className="p-top-container">
          <div>
            {" "}
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={goBacktoDB}
              className="txt-black"
              style={{ cursor: "pointer" }}
            />{" "}
            Create new Item
          </div>
          <br />
          <div className="d-flex g-10">
            <button
              className={
                activeTab === "Single" ? "active-filter" : "filter-button"
              }
              onClick={() => handleTabClick("Single")}
            >
              Single
            </button>
            <button
              className={
                activeTab === "Combo" ? "active-filter" : "filter-button"
              }
              onClick={() => handleTabClick("Combo")}
            >
              Combo
            </button>
            <button
              className={
                activeTab === "MRP" ? "active-filter" : "filter-button"
              }
              onClick={() => handleTabClick("MRP")}
            >
              MRP
            </button>
          </div>
        </div>

        {page === 1 && (
          <div className="ADD-p-position">
            <div className="ADD-p-container">
              <input
                type="text"
                className="ADD-p-input-textbox"
                placeholder="Enter Item name"
                value={inputItemName}
                onChange={setInhandleInputItemNameChange}
              />
              <br />
              <select
                name=""
                id=""
                className="ADD-p-input-textbox"
                style={{ width: "100%", backgroundColor: "white" }}
                value={inputCategory}
                  onChange={handleSetCategory}
              >
                <option value="" selected disabled>
                  Select Category
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <select
                name=""
                id=""
                className="ADD-p-input-textbox"
                style={{ width: "100%", backgroundColor: "white" }}
                value={inputType} onChange={handleType}
              >
                <option value="" selected disabled>
                  Select food type
                </option>
                <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
              </select>

              <input
                type="number"
                inputMode="numeric"
                className="ADD-p-input-textbox"
                placeholder="Enter Sort order"
                value={inputSetOrder}
                  onChange={handleSetOrder}
              />
              <input
                type="number"
                inputMode="numeric"
                className="ADD-p-input-textbox"
                placeholder="Enter default sales price"
                value={inputDSP}
                  onChange={handleDSP}
              />
              <input
                type="number"
                inputMode="numeric"
                className="ADD-p-input-textbox"
                placeholder="Enter markup price (Optional)"
                value={inputMP}
                  onChange={handleMP}
              />
              <textarea
                name=""
                className="ADD-p-input-textbox"
                style={{ borderRadius: "2vw" }}
                id=""
                cols="30"
                rows="10"
                placeholder="Enter description"
                value={inputDESC}
              onChange={handleDESC}
              ></textarea>
              <input
                type="number"
                inputMode="numeric"
                className="ADD-p-input-textbox"
                placeholder="Enter POS ID"
                value={inputPID}
                  onChange={handlePID}
              />
              <input
                type="number"
                inputMode="numeric"
                className="ADD-p-input-textbox"
                placeholder="Enter weght (in gms"
                value={inputWeight}
                  onChange={handleWeight}
              />
              <input
                type="number"
                inputMode="numeric"
                className="ADD-p-input-textbox"
                placeholder="Enter serves)"
                value={inputServes}
                  onChange={handleServes}
              />
              <select
                name=""
                id=""
                className="ADD-p-input-textbox"
                style={{ width: "100%", backgroundColor: "white" }}
                value={inputFM} onChange={handleFM}
              >
                <option value="" selected disabled>
                  Select fulfilment modes
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>

              <div className="d-flex space-between align-item-center">
                <div>
                  <button
                    className="p-button bg-purple"
                    onClick={openselectPhoneTags}
                    style={{ marginTop: "1vw" }}
                  >
                    Select Tags
                  </button>
                </div>

                <div>
                  <label htmlFor="" className="f-12 txt-grey">
                    Is Recommended
                  </label>
                  <div>
                    <label className="switch">
                      <input type="checkbox"
                      checked={inputRecommended}
                      onChange={handleRecommended}
                      ></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>

              <br />
              <div>
                {selectedLanguages.map((tagsmap, index) => (
                  <>
                    <button className="ITM-tags f-10" key={index}>
                      {tagsmap}
                    </button>{" "}
                    &nbsp;
                  </>
                ))}
              </div>

              {selectTagsPhoneVisible && (
                <div
                  className="main-modal main-modal-open"
                  onClick={closeselectPhoneTags}
                >
                  <div className="main-modal-content">
                    <div className="d-flex space-between">
                      <div className="f-18">Select Tags</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="f-24"
                          onClick={closeselectPhoneTags}
                        />
                      </div>
                    </div>
                    <div className="p-main-modal-content-inside f-18">
                      {tagsSet.map((tagsmap, index) => (
                        <div key={index}>
                          <input
                            className="ITM-select-tags"
                            type="checkbox"
                            name={tagsmap}
                            id={tagsmap}
                            onChange={handleTagsCheckboxChange}
                            checked={selectedLanguages.includes(tagsmap)}
                          />
                          {tagsmap}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <br />
              <div>
                <input
                  type="file"
                  className={fileInputPhotoClass}
                  ref={fileInputPhotoRef}
                  onChange={handleFileChangePhoto}
                  style={{ border: "none", padding: "0vw 3vw 0vw 0vw" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "7vw",
                }}
              >
                <button
                  className="p-button bg-purple"
                  style={{ padding: "3vw 6vw", borderRadius: "10vw" }}
                  onClick={showPage2}
                >
                  Go to Preview
                </button>
              </div>
            </div>
          </div>
        )}
        {page === 2 && (
          <div className="ADD-p-position">
            <div className="ADD-p-container" style={{ padding: "4vw" }}>
              <div className="f-18">
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  onClick={showPage1}
                  className="txt-black"
                  style={{ cursor: "pointer" }}
                />{" "}
                Preview
              </div>
              <br />
              <div className="d-flex align-item-center">
                <div className="flex-1">
                  <div className="f-12 txt-grey">Item name</div>
                  <div className="d-flex align-item-center">
                  {inputItemName} &nbsp;
                  {inputType === "Veg" ? (
                  <Icon icon="mdi:square-circle" className="txt-green" />
                ) : inputType === "Non-Veg" ? (
                  <Icon icon="mdi:square-circle" className="txt-red" />
                ) : null}
                  </div>
                </div>
              </div>
              <br />
              <div className="d-flex">
              <div className="flex-1">
                  <div className="f-12 txt-grey">Category</div>
                  <div className="txt-orange">{inputCategory}</div>
                </div>
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="f-12 txt-grey">Sort Order</div>
                  <div>{inputSetOrder}</div>
                </div>
                <div className="flex-1">
                  <div className="f-12 txt-grey">Is recommended</div>
                  <div>{inputRecommended ? "Yes" : "No"}</div>
                </div>
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="f-12 txt-grey">Weight(In gms)</div>
                  <div>{inputWeight}</div>
                </div>
                <div className="flex-1">
                  <div className="f-12 txt-grey">POS ID</div>
                  <div>{inputPID}</div>
                </div>
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="f-12 txt-grey">Default Sales price</div>
                  <div>₹{inputDSP}</div>
                </div>
                <div className="flex-1">
                  <div className="f-12 txt-grey">Markup price</div>
                  <div>₹{inputMP}</div>
                </div>
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="f-12 txt-grey">Description</div>
                  <div>{inputDESC}</div>
                </div>
            
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="f-12 txt-grey">Serves</div>
                  <div>{inputServes}</div>
                </div>
                <div className="flex-1">
                  <div className="f-12 txt-grey">Fulfilment modes</div>
                  <div>{inputFM}</div>
                </div>
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="f-12 txt-grey">Tags</div>
                  <div>
                  {selectedLanguages.map((tagsmap, index) => (
                  <>
                    <button className="ITM-tags f-10" key={index}>
                      {tagsmap}
                    </button>{" "}
                    &nbsp;
                  </>
                ))}
                  </div>
                </div>
            
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "7vw",
                }}
              >
                <div className="d-flex space-evenly g-20">
                  <button className="p-outline-button" style={{ padding: "calc(3vw - 1px) 6vw", borderRadius: "10vw" }} onClick={showPage1}>Back</button>
                <button
                  className="p-button bg-purple"
                  style={{ padding: "3vw 6vw", borderRadius: "10vw" }}
                  onClick={showPage2}
                >
                  Submit
                </button>
                </div>
               
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreateNewItem;
