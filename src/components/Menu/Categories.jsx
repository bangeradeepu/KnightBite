import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBoxArchive,
  faPlus,
  faPencil,
  faEyeSlash,
  faXmark
} from "@fortawesome/free-solid-svg-icons";


import React, { useState } from "react";

import "./Categories.css";

import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

// import React from 'react'
import "./Items.css";
import LocationFilter from "../../LocationFilter";

const Categories = () => {
  const navigate = useNavigate();
  const handleAddItem = () => {
    navigate("/handleAddItem");
  };

  //
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
    //Archive
    const [modalArchive, setModalArchiveVisible] = useState(false);

    const openArchiveModal = () => {
      setModalArchiveVisible(true);
    };
  
    const closeArchiveModal = () => {
      setModalArchiveVisible(false);
    };

    //Open Add Cat modal
    const [addCat, setAddCat] = useState(false);

    const openAddCat = () => {
      setAddCat(true);
    };
  
    const closeAddCat = () => {
      setAddCat(false);
    };

  const handleOutsideClick = (event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  return (
    <div className="CAT-app">
      {/* Desktop top container */}
      <div className="d-top-container f-12">
        <div className="d-flex flex-end" style={{ padding: "0vw 2vw" }}>
          <input
            type="text"
            placeholder="Search Categories"
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
          <div className="f-20">Categories</div>

          <div className="d-flex g-10">
            <button
              className="p-button bg-purple"
              style={{}}
               onClick={openAddCat}
            >
              Add Categories <FontAwesomeIcon icon={faPlus} />
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
          <div style={{ textAlign: "left" }}>Category name</div>
          <div style={{ textAlign: "center" }}>Brand</div>

          <div>Availiblility</div>
          <div>Hide</div>
          <div>Edit</div>
          <div>Archive</div>
        </div>
      </div>
      {/* Phone top container */}
      <div className="p-top-container">
        <input type="text" name="" id="" placeholder="Search Categories" />
        <br />
        <br />
        <div className="d-flex g-10">
          <button className="p-button bg-purple" onClick={openAddCat}>Add Categories</button>
          <button className="p-outline-button" onClick={openArchiveModal}>Archive List</button>
          <button className="p-outline-button">Bulk Action</button>
        </div>
      </div>
      {/* Desktop card */}
      <div className="scrollable-container">
        <div className="d-card f-12">
          <div style={{ textAlign: "left" }}>
            Combo 1 Noodles Kids meal fried rice Combo 1 Noodles Kids meal fried
            rice
          </div>
          <div style={{ textAlign: "center" }}>Knight Bite</div>
          <div className="txt-green">Available</div>
          <div className="txt-dark-grey">
            <FontAwesomeIcon icon={faEyeSlash} style={{ cursor: "pointer" }} />
          </div>
          <div className="txt-dark-grey">
            <FontAwesomeIcon icon={faPencil} style={{ cursor: "pointer" }} />
          </div>
          <div className="txt-dark-grey">
            <FontAwesomeIcon
              icon={faBoxArchive}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
       {/* Phone card */}
       <div className="ADD-p-position">
          <div className="ADD-p-container">
          {Array.from({ length: 5 }, (_, index) => (
            <div className="p-card">
              <div className="d-flex">
                <div className="flex-1">
                  <div className="txt-grey f-14">Categoies name</div>
                  <div className="txt-black f-16">Biteof the day</div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Availibility</div>
                  <div className="txt-green f-16">Available</div>
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
            Categories Archive List

            </div>
            <div onClick={closeArchiveModal} style={{cursor:'pointer'}}><FontAwesomeIcon icon={faXmark} /></div>
          </div>

          <br />
          <div className="d-flex flex-end">
            <input type="text" name="" id="" className="t-box" placeholder="Search Categories" />
          </div>
          <div className="d-header txt-dark-grey f-12" style={{marginLeft:'0.7vw',marginRight:'2vw',}}>
          <div style={{ textAlign: "left" }}>Category name</div>
          <div style={{ textAlign: "center" }}>Brand</div>

          <div>Availiblility</div>
          <div>Hide</div>
          <div>Edit</div>
          <div>Archive</div>
        </div>
          <div className="main-modal-content-inside">
            <div className="d-card f-12">
          <div style={{ textAlign: "left" }}>
            Combo 1 Noodles Kids meal fried rice Combo 1 Noodles Kids meal fried
            rice
          </div>
          <div style={{ textAlign: "center" }}>Knight Bite</div>
          <div className="txt-green">Available</div>
          <div className="txt-dark-grey">
            <FontAwesomeIcon icon={faEyeSlash} style={{ cursor: "pointer" }} />
          </div>
          <div className="txt-dark-grey">
            <FontAwesomeIcon icon={faPencil} style={{ cursor: "pointer" }} />
          </div>
          <div className="txt-dark-grey">
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
                  <div className="txt-grey f-14">Categoies name</div>
                  <div className="txt-black f-16">Biteof the day</div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Availibility</div>
                  <div className="txt-green f-16">Available</div>
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
      {addCat && (
        <div
        className="main-modal main-modal-open addCat"
      >
        <div className="main-modal-content">
        <div className="d-flex space-between f-20">
            <div className="f-18">
            Add Categories

            </div>
            <div onClick={closeAddCat} style={{cursor:'pointer'}}><FontAwesomeIcon icon={faXmark} /></div>
          </div>
          <br />
          <div className="main-modal-content-inside">
            <div className="d-flex">
            
            <div>
              <div>
              <label htmlFor="" className="f-14 txt-grey">Category Name</label>
              </div>
              <input type="text" name="" className="t-box" id="" placeholder="Enter Catgeory name"/>

            </div>
            </div>
            <br />
            <div className="d-flex">
              <div>
                <div>
                  <label htmlFor="" className="f-14 txt-grey">Addons Group</label>
                </div>
              <select name="" id="" className="t-box" style={{width:'22vw'}}>
              <option value="" selected disabled>Select Addons Group</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
              </div>
            
            </div>
            <br />
            {/* <label htmlFor="" className="f-14 txt-grey">Select Brands</label> */}
            
            
          </div>
          <div className="p-main-modal-content-inside">
          <div className="d-flex">
            
            <div>
              <div>
              <label htmlFor="" className="f-14 txt-grey">Category Name</label>
              </div>
              <input type="text" name="" className="t-box" id="" placeholder="Enter Catgeory name"/>

            </div>
            </div>
            <br />
            <div className="d-flex">
              <div>
                <div>
                  <label htmlFor="" className="f-14 txt-grey">Addons Group</label>
                </div>
              <select name="" id="" className="t-box" style={{width:'55vw'}}>
              <option value="" selected disabled>Select Addons Group</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
              </div>
            
            </div>
            <br />
            <label htmlFor="" className="f-14 txt-grey">Select Brands</label>
            
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Categories;
