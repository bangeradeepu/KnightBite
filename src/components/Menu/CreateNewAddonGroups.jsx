import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

import Select from 'react-select'
import { colourOptions, Option } from './Filter'

import React, { useState } from 'react';
import './CreateNewAddonGroups.css'
const CreateNewAddonGroups = () => {
  // Go back
  const navigate = useNavigate();
  const goBacktoDB = () => {
    navigate("/menu/addongroups");
  };
  // preview and input page switch
  const [page, setPage] = useState(1);
  const showPage1 = () => {
    setPage(1);
  };
  const showPage2 = () => {
    setPage(2);
  };

  //   Preview for addons group name
  const [addonsGroupName, setAddonsGroupName] = useState(""); // State to store the input text

  const handleAddonsGroupName = (event) => {
    setAddonsGroupName(event.target.value);
    setIsAnyInput(true);
  };
  //   Preview for addons Associate item
  const [AI, setAI] = useState(""); // State to store the input text

  const handleAI = (event) => {
    setAI(event.target.value);
    setIsAnyInput(true);
  };
    //   Preview for addons Type
    const [Type, setType] = useState(""); // State to store the input text

    const handleType = (event) => {
      setType(event.target.value);
      setIsAnyInput(true);
    };
        //   Preview for addons 
        const [AO, setAO] = useState(""); // State to store the input text

        const handleAO = (event) => {
          setAO(event.target.value);
          setIsAnyInput(true);
        };
    



  return (
    <div className="AOG-create ">
      {/* Desktop mode */}
      <div className="AOG-desktop d-flex g-20">
        <div className="AOG-left">
          <div className="f-20">
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              onClick={goBacktoDB}
              className="txt-black"
              style={{ cursor: "pointer" }}
            />{" "}
            Create Addon Groups
          </div>
          <br />
          <br />
          <div>
            <label htmlFor="" className="f-12 txt-grey">
              Addons group name
            </label>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter addons name"
                value={addonsGroupName}
                onChange={handleAddonsGroupName}
              />
            </div>
          </div>
       
          <br />
          <div className="d-flex g-30">
          <div>
              <label htmlFor="" className="f-12 txt-grey">
                Associate Item
              </label>
              <div>
                <select name="" id="" value={AI}
                onChange={handleAI}>
                  <option value="" selected disabled>
                    Select  Associate Item
                  </option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            
          </div>
          <br />
          <div className="d-flex g-30">
          <div>
              <label htmlFor="" className="f-12 txt-grey">
                Type
              </label>
              <div>
                <select name="" id="" value={Type}
                onChange={handleType}>
                  <option value="" selected disabled>
                    Select type
                  </option>
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non Veg</option>
                </select>
              </div>
            </div>
            <div>
            <label htmlFor="" className="f-12 txt-grey">
              Addons
            </label>
              <input type="text" name="" id="" style={{width:'16vw'}} placeholder="Enter addons" value={AO} onChange={handleAO} />
            </div>
          </div>
        </div>
        <div className="AOG-right">
          <div className="f-20">Preview</div>
          <br />
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="f-12 txt-grey">Addons group name</div>
              <div>{addonsGroupName}</div>
            </div>
          </div>
          <br />
          <div className="d-flex">
           
            <div className="flex-1">
              <div className="f-12 txt-grey">Associate Item</div>
              <div>{AI}</div>
            </div>
            <div className="flex-1">
              <div className="f-12 txt-grey">Type</div>
              <div>
              {Type === "Veg" ? (
                  <Icon icon="mdi:square-circle" className="txt-green" />
                ) : Type === "Non-Veg" ? (
                  <Icon icon="mdi:square-circle" className="txt-red" />
                ) : null}
              </div>
            </div>
          </div>
          <br />
          <div className="d-flex">
          
           <div className="flex-1">
             <div className="f-12 txt-grey">Addons</div>
             <div>
             {AO}
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
      <div className="AOG-phone">
        <div className="ADD-p-top">
          <div> <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={goBacktoDB}
              className="txt-black"
              style={{ cursor: "pointer" }}
            />{" "}Create Addon Group</div>
        </div>
        {page === 1 && (
          <div className="ADD-p-position">
            <div className="ADD-p-container">
              <input
                type="text"
                className="ADD-p-input-textbox"
                placeholder="Enter Addons group Name"
                value={addonsGroupName}
                onChange={handleAddonsGroupName}
              />
              <br />
              <select
                name=""
                id=""
                className="ADD-p-input-textbox"
                style={{ width: "100%", backgroundColor: "white" }}
                value={AI}
                onChange={handleAI}
              >
                <option value="" selected disabled>
                  Select Associate Item
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="2">3</option>
              </select>
              
              <select
                name=""
                id=""
                className="ADD-p-input-textbox"
                style={{ width: "100%", backgroundColor: "white" }}
                value={Type}
                onChange={handleType}
              >
                <option value="" selected disabled>
                 Select Type
                </option>
                <option value="Veg">Veg</option>
                <option value="Non-Veg">Non veg</option>
              </select>
              <br />
              <input
                type="number"
                inputMode="numeric"
                className="ADD-p-input-textbox"
                placeholder="Enter Addons"
                value={AO}
                onChange={handleAO}
              />
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
                  <div className="f-12 txt-grey">Addon group name</div>
                  <div className="d-flex align-item-center">
                  {addonsGroupName} &nbsp;
                  {Type === "Veg" ? (
                  <Icon icon="mdi:square-circle" className="txt-green" />
                ) : Type === "Non-Veg" ? (
                  <Icon icon="mdi:square-circle" className="txt-red" />
                ) : null}
                  </div>
                </div>
                {/* <div className="flex-1">
    <div className="f-12 txt-grey"></div>
    <div className="f-12 txt-grey">&nbsp;</div>
    <div className="txt-green"><Icon icon="mdi:square-circle" width="20" height="20" /></div>
    </div> */}
                
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="f-12 txt-grey">Associate Item</div>
                  <div>{AI}</div>
                </div>
                <div className="flex-1">
                  <div className="f-12 txt-grey">Addons</div>
                  <div>{AO}</div>
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
}

export default CreateNewAddonGroups

