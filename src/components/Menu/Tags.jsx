import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Select from "react-select";
import { colourOptions, Option } from "./Filter";
import "./Tags.css";

import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

// import React from 'react'
import React, { useState } from "react";
import "./Items.css";

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

  const handleOutsideClick = (event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };
  //


  return (
    <div className="TAG-menu-page">
      <div className="TAG-div">
        <div className="item-top">
          {/* Drop down filter */}
          

          <div className="TAG-add-multi-item">
            <button className="p-button bg-purple" onClick={openModal}>
              Create new <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className="TAG-search-items">
            <i className="search-icon-s">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
            <input className="input-field-s" placeholder="Search Items" />
          </div>
          <div className="TAG-bulk-actions">
            <button className="p-outline-button">
              <div className="TAG-">
                <FontAwesomeIcon icon={faBars} /> Bulk Actions
              </div>
            </button>
          </div>
          <div className="TAG-text-wrapper-7">Tags</div>

          <div className="TAG-group">
            <div className="TAG-text-wrapper-8">Name</div>
            <div className="TAG-text-wrapper-13">Hide</div>
            <div className="TAG-text-wrapper-16">Edit</div>
            <div className="TAG-text-wrapper-17">Archive</div>
            {/*  */}
            </div>
          </div>
        </div>

        <div className="TAG-content-group">
          <div className="TAG-i-frame">
            <div className="TAG-overlap-6">
              <div className="TAG-item-name-container">
                <div className="TAG-item-tag-container">
                  <div className="TAG-tag-spacing-new">
                    <p className="txt-black TAG-tag-border-new">Must try</p>
                  </div>
                </div>
                <p className="txt-dark-grey TAG-item-hide-spacing">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"
                    />
                  </svg>
                </p>
                <p className="txt-dark-grey TAG-item-edit-spacing">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"
                    />
                  </svg>
                </p>
                <p className="txt-dark-grey TAG-item-arch-spacing">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"
                    />
                  </svg>
                </p>
              </div>
            </div>

            <br />
            {modalVisible && (
              <div
                className={`tags-modal ${
                  modalVisible ? "tags-modal-open" : ""
                }`}
              >
                <div className="tags-modal-content">
                  <span className="tags-modal-close" onClick={closeModal}>
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
                  <div className="tags-create-filter-position">
           
                  </div>
                  <br />
                  <p className="tags-create-header txt-black">Create new Tag</p>
                  <p className="tags-create-name txt-grey">Tag Name</p>
                  <input
                    className="custom-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Tag name"
                  />
                  <br /><br />
                                      <button class="add-item-button">Add Tag</button>

                </div>
              </div>
            )}
          </div>
        </div>
      
    </div>
  );
};

export default Categories;
