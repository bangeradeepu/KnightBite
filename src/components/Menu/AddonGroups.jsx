import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';

import { faBars,faBoxArchive,faPlus,faPencil,faEyeSlash,faXmark } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Select from 'react-select'
import { colourOptions, Option } from './Filter'

import './AddonGroups.css'


import {Link, Route, BrowserRouter as  Router, Routes, useNavigate } from 'react-router-dom'

// import React from 'react'
import React, { useState } from 'react';
import './Items.css';

const AddonGroups = () => {
  const navigate = useNavigate();
const AddAddonGroups = () =>{
  navigate("/AddAddonGroups");
};
//Archive
const [modalArchive, setModalArchiveVisible] = useState(false);

const openArchiveModal = () => {
  setModalArchiveVisible(true);
};

const closeArchiveModal = () => {
  setModalArchiveVisible(false);
};




    
    return (
        <div className="ADG-app">
           {/* Desktop top container */}
      <div className="d-top-container f-12">
        <div className="d-flex flex-end" style={{ padding: "0vw 2vw" }}>
          <input
            type="text"
            placeholder="Search Addon Groups"
            // value={searchQuery}
            // onChange={handleSearchChange}
            className="t-box"
            style={{ width: "28%" }}
          />
        </div>
        <div
          className="d-flex space-between"
          style={{ marginTop: "2vw", padding: "0vw 2vw" }}
        >
          <div className="f-20">Addon Groups</div>

          <div className="d-flex g-10">
            <button
              className="p-button bg-purple"
              style={{}}
              onClick={AddAddonGroups}
            >
              Create new <FontAwesomeIcon icon={faPlus} />
            </button>
            <button className="p-outline-button" onClick={openArchiveModal}>
              <FontAwesomeIcon icon={faBoxArchive} /> Archive List
            </button>
            <button className="p-outline-button">
              <FontAwesomeIcon icon={faBars} /> Bulk Action
            </button>
          </div>
        </div>
        <div className="d-header txt-dark-grey">
          <div style={{ textAlign: "left" }}>Addon Group name</div>
          <div style={{ textAlign: "center" }}>Type</div>

          <div>Associated Items</div>
          <div>Addons</div>
          <div>Availibility</div>
          <div>Hide</div>
          <div>Edit</div>
          <div>Archive</div>
        </div>
      </div>
      {/* Desktop card */}
      <div className="scrollable-container">
        <div className="d-card f-12">
          <div style={{ textAlign: "left" }}>
            Cheese
          </div>
          <div style={{ textAlign: "center" }}><Icon icon="mdi:square-circle" className="txt-green f-18" /></div>
          <div>2</div>
          <div>5</div>
          <div className="txt-green">Available</div>
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon icon={faEyeSlash} style={{ cursor: "pointer" }} />
          </div>
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon icon={faPencil} style={{ cursor: "pointer" }} />
          </div>
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon
              icon={faBoxArchive}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
      {/* Phone top container */}
      <div className="p-top-container">
        <input type="text" name="" id="" placeholder="Search Addon Groups" />
        <br />
        <br />
        <div className="d-flex g-10">
          <button className="p-button bg-purple" onClick={AddAddonGroups}>Create new</button>
          <button className="p-outline-button"  onClick={openArchiveModal}>Archive List</button>
          <button className="p-outline-button">Bulk Action</button>
        </div>
      </div>
      {/* Phone card */}
      <div className="ADD-p-position">
          <div className="ADD-p-container">
          {Array.from({ length: 5 }, (_, index) => (
        <div className="p-card">
          <div className="d-flex">
            <div className="flex-1">
              <div className="txt-grey f-14">Addons Group name</div>
              <div className="txt-black f-16">Cheese options</div>
            </div>
            <div className="flex-1">
              <div className="txt-grey f-14">Availibility</div>
              <div className="txt-green f-16">Available</div>
            </div>
           
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="txt-grey f-14">Addons</div>
              <div className="txt-black f-16">11</div>
            </div>
            <div className="flex-1">
              <div className="txt-grey f-14">Associated items</div>
              <div className="txt-black f-16">5</div>
            </div>
           
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="txt-grey f-14">Type</div>
              <div className="txt-black f-16">Single</div>
            </div>

           
          </div>
          
          <br />
        
          <hr />
          <div
            className="d-flex space-between"
            style={{ marginTop: "4vw" }}
          >
            
            <div className="">
              <div>
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="txt-dark-grey f-16"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="">
              <div>
                <FontAwesomeIcon
                  icon={faPencil}
                  className="txt-dark-grey f-16"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="">
              <div>
                <FontAwesomeIcon
                  icon={faBoxArchive}
                  className="txt-dark-grey f-16"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
          ))}
        </div>
      
  </div>
  {modalArchive && (
        <div
        className="main-modal main-modal-open"
      >
        <div className="main-modal-content">
          <div className="d-flex space-between f-20">
            <div className="">
            Addons Archive List

            </div>
            <div onClick={closeArchiveModal} style={{cursor:'pointer'}}><FontAwesomeIcon icon={faXmark} /></div>
          </div>

          <br />
          <div className="d-flex flex-end">
            <input type="text" name="" id="" className="t-box" placeholder="Search Addon Groups"  />
          </div>
          <div className="d-header txt-dark-grey f-12" style={{marginRight:'2vw',marginLeft:'0.8vw'}}>
          <div style={{ textAlign: "left" }}>Addon Group name</div>
          <div style={{ textAlign: "center" }}>Type</div>

          <div>Associated Items</div>
          <div>Addons</div>
          <div>Availibility</div>
          <div>Hide</div>
          <div>Edit</div>
          <div>Archive</div>
        </div>
          <div className="main-modal-content-inside">
          <div className="d-card f-12">
          <div style={{ textAlign: "left" }}>
            Cheese
          </div>
          <div style={{ textAlign: "center" }}>Knight Bite</div>
          <div>2</div>
          <div>5</div>
          <div className="txt-green">Available</div>
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon icon={faEyeSlash} style={{ cursor: "pointer" }} />
          </div>
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon icon={faPencil} style={{ cursor: "pointer" }} />
          </div>
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon
              icon={faBoxArchive}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        
          </div>
          <div className="p-main-modal-content-inside">
          <div className="p-card">
          <div className="d-flex">
            <div className="flex-1">
              <div className="txt-grey f-14">Addons Group name</div>
              <div className="txt-black f-16">Cheese options</div>
            </div>
            <div className="flex-1">
              <div className="txt-grey f-14">Availibility</div>
              <div className="txt-green f-16">Available</div>
            </div>
           
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="txt-grey f-14">Addons</div>
              <div className="txt-black f-16">11</div>
            </div>
            <div className="flex-1">
              <div className="txt-grey f-14">Associated items</div>
              <div className="txt-black f-16">5</div>
            </div>
           
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="txt-grey f-14">Type</div>
              <div className="txt-black f-16">Single</div>
            </div>

           
          </div>
          
          <br />
        
          <hr />
          <div
            className="d-flex space-between"
            style={{ marginTop: "4vw" }}
          >
            
            <div className="">
              <div>
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="txt-dark-grey f-16"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="">
              <div>
                <FontAwesomeIcon
                  icon={faPencil}
                  className="txt-dark-grey f-16"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="">
              <div>
                <FontAwesomeIcon
                  icon={faBoxArchive}
                  className="txt-dark-grey f-16"
                  style={{ cursor: "pointer" }}
                />
              </div>
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

export default AddonGroups