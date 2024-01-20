import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import Select from "react-select";
import { colourOptions, Option } from "./Filter";

import React, { useState } from "react";
import "./CreateNewAddons.css";
const CreateNewAddons = () => {
  // Go back
  const navigate = useNavigate();
  const goBacktoDB = () => {
    navigate("/menu/addons");
  };
  // preview and input page switch
  const [page, setPage] = useState(1);
  const showPage1 = () => {
    setPage(1);
  };
  const showPage2 = () => {
    setPage(2);
  };
  //   Preview for addons name
  const [AN, setAN] = useState(""); // State to store the input text

  const handleAN = (event) => {
    setAN(event.target.value);
    setIsAnyInput(true);
  };
  //   Preview for addons group
  const [AG, setAG] = useState(""); // State to store the input text

  const handleAG = (event) => {
    setAG(event.target.value);
    setIsAnyInput(true);
  };
    //   Preview for addons Price
    const [Price, setPrice] = useState(""); // State to store the input text

    const handlePrice = (event) => {
      setPrice(event.target.value);
      setIsAnyInput(true);
    };

        //   Preview for addons Type
        const [Type, setType] = useState(""); // State to store the input text

        const handleType = (event) => {
          setType(event.target.value);
          setIsAnyInput(true);
        };
  return (
    <div className="AO-create ">
      {/* Desktop mode */}
      <div className="AO-desktop d-flex g-20">
        <div className="AO-left">
          <div className="f-20">
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              onClick={goBacktoDB}
              className="txt-black"
              style={{ cursor: "pointer" }}
            />{" "}
            Create Addons
          </div>
          <br />
          <br />
          <div>
            <label htmlFor="" className="f-12 txt-grey">
              Addons name
            </label>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter addons name"
                value={AN}
                onChange={handleAN}
              />
            </div>
          </div>
          <br />
          <div>
            <label htmlFor="" className="f-12 txt-grey">
              Addons group
            </label>
            <div>
              <select name="" id="" value={AG} onChange={handleAG}>
                <option value="" selected disabled>
                  Addons Group
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <br />
          <div className="d-flex g-30">
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                Price
              </label>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Price"
                  style={{ width: "16vw" }}
                  value={Price}
                  onChange={handlePrice}
                />
              </div>
            </div>
            <div>
              <label htmlFor="" className="f-12 txt-grey">
                Type
              </label>
              <div>
                <select name="" id="" value={Type} onChange={handleType}>
                  <option value="" selected disabled>
                    Addon type
                  </option>
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non Veg</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="AO-right">
          <div className="f-20">Preview</div>
          <br />
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="f-12 txt-grey">Addons Name</div>
              <div>
                {AN}
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="f-12 txt-grey">Addons Group</div>
              <div>{AG}</div>
            </div>
            <div className="flex-1">
              <div className="f-12 txt-grey">Price</div>
              <div>₹{Price}</div>
            </div>
            <div className="flex-1">
              <div className="f-12 txt-grey">Addons Type</div>
              <div>
              {Type === "Veg" ? (
                  <Icon icon="mdi:square-circle" className="txt-green" />
                ) : Type === "Non-Veg" ? (
                  <Icon icon="mdi:square-circle" className="txt-red" />
                ) : null}
              </div>
            </div>
          </div>
          <div className="d-flex">
            <button
              className="p-outline-button"
              style={{ padding: "0.7vw 3.5vw", marginTop: "7.2vw" }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Phone Mode */}
      <div className="AO-phone">
        <div className="ADD-p-top">
          <div> <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={goBacktoDB}
              className="txt-black"
              style={{ cursor: "pointer" }}
            />{" "} Create Addons</div>
        </div>
        {page === 1 && (
          <div className="ADD-p-position">
            <div className="ADD-p-container">
              <input
                type="text"
                className="ADD-p-input-textbox"
                placeholder="Enter Addons Name"
              />
              <br />
              <select
                name=""
                id=""
                className="ADD-p-input-textbox"
                style={{ width: "100%", backgroundColor: "white" }}
              >
                <option value="" selected disabled>
                  Select Addons Group
                </option>
              </select>
              <input
                type="text"
                className="ADD-p-input-textbox"
                placeholder="Enter Price"
              />
              <select
                name=""
                id=""
                className="ADD-p-input-textbox"
                style={{ width: "100%", backgroundColor: "white" }}
              >
                <option value="" selected disabled>
                  Select Addon type
                </option>
              </select>

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
                  <div className="f-12 txt-grey">Addons name</div>
                  <div className="d-flex align-item-center">
                    Chocolate &nbsp;
                    <Icon
                      className="txt-green"
                      icon="mdi:square-circle"
                      width="20"
                      height="20"
                    />
                  </div>
                </div>
                {/* <div className="flex-1">
    <div className="f-12 txt-grey"></div>
    <div className="f-12 txt-grey">&nbsp;</div>
    <div className="txt-green"><Icon icon="mdi:square-circle" width="20" height="20" /></div>
    </div> */}
                <div className="flex-1">
                  <div className="f-12 txt-grey">Addons group</div>
                  <div>5</div>
                </div>
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="f-12 txt-grey">Price</div>
                  <div>₹30</div>
                </div>
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
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNewAddons;
