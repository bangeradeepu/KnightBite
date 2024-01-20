import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import { faBars,faBoxArchive,faPlus,faPencil,faEyeSlash,faXmark } from '@fortawesome/free-solid-svg-icons';
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
import React, { useState, useEffect } from "react";
import "./Items.css";

const Categories = (
  {
    setSessionCompId,
    setSessionphoneNumber,
    setSessionpId,
  }
) => {
  const navigate = useNavigate();
  const handleAddItem = () => {
    navigate("/handleAddItem");
  };
  //Open create new tag
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
      setModalVisible(true);
    };

    const closeModal = () => {
      setModalVisible(false);
    };
    // Open edit tag
    const [modalEdit, setModalEdit] = useState(false);
    const [tagIdEdit,setTagIdEdit]  = useState('');
    const [tagEditFeild,setTageEditFeild] = useState('');
    const openModalEdit = async (tagId) => {
      setModalEdit(true);
      console.log(tagId);
      setTagIdEdit(tagId);
      // GET Data here
    };

    const closeModalEdit = () => {
      setModalEdit(false);
    };

    const handleSubmitEdit = async() => {
    const apiUrl =
    "http://127.0.0.1:8000/menu/addons/api/tag-put/";
  const companyId = setSessionCompId;
  
  try {
    const response = await axios.put(
      `${apiUrl}?tag_id=${tagIdEdit}&comp_id=${companyId}&tag_name=${tagEditFeild}`
    );
    console.log("Update successful", response.data);
  } catch (error) {
    console.error("Error updating permissions", error);
  }
  setModalEdit(false);
  setTagIdEdit('');
  setTageEditFeild('');
    }

  const handleOutsideClick = (event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };
  //Archive
const [modalArchive, setModalArchiveVisible] = useState(false);

const openArchiveModal = () => {
  setModalArchiveVisible(true);
};

const closeArchiveModal = () => {
  setModalArchiveVisible(false);
};
const [newtagName, setNewTagName] = useState('');
// POST tag
const handleSubmitNewTag = async () => {
  console.log(newtagName);
  console.log(setSessionCompId);
  const apiUrl = "http://127.0.0.1:8000/menu/addons/api/tag-post/";

  try {
    const formData = new FormData();
    formData.append("comp_id", setSessionCompId);
    formData.append("brand_id", 12345);
    formData.append("outlet_id", 12345);
    formData.append("hide", 0);
    formData.append("archive", 0);
    formData.append("tag_name", newtagName); // Fix typo here
    formData.append("tag_id", Math.floor(Math.random() * 1000000));

    const response = await axios.post(apiUrl, formData);
    console.log(`Data posted successfully for outlet ID:`, response.data);

    // If you want to update the list or perform additional actions, do it here

  } catch (error) {
    if (error.response) {
      console.error("Error posting data:", error.response.data);
    } else if (error.request) {
      console.error("Network error:", error.request);
    } else {
      console.error("Unexpected error:", error.message);
    }
  }
}
// GET Data
const [tagData, setTagData] = useState([]);
const [searchTerm, setSearchTerm] = useState('');

const fetchData = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/menu/addons/api/tag-get/');
    const filteredData = response.data.filter(tag => tag.archive !== 1 && tag.tag_name.toLowerCase().includes(searchTerm.toLowerCase()));
    setTagData(filteredData);
  } catch (error) {
    console.error('Error fetching tag data:', error);
  }
};

useEffect(() => {
  // Fetch data initially
  fetchData();

  // Set interval to fetch data every 5 seconds
  const intervalId = setInterval(() => {
    fetchData();
  }, 5000);

  // Clean up interval when component unmounts
  return () => clearInterval(intervalId);
}, [searchTerm]);

// GET  archive data
const [tagArchive, setTagArchive] = useState([]);
const [searchArciveTerm, setSearchArciveTerm] = useState('');
const fetchArchive = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/menu/addons/api/tag-get/');
    const filteredData = response.data.filter(tag => tag.archive !== 0 && tag.tag_name.toLowerCase().includes(searchArciveTerm.toLowerCase()));
    setTagArchive(filteredData);
  } catch (error) {
    console.error('Error fetching tag data:', error);
  }
};

useEffect(() => {
  // Fetch data initially
  fetchArchive();

  // Set interval to fetch data every 5 seconds
  const intervalId = setInterval(() => {
    fetchArchive();
  }, 5000);

  // Clean up interval when component unmounts
  return () => clearInterval(intervalId);
}, [searchArciveTerm]);


  const handleArchive = async (tagId) => {
    const apiUrl =
    "http://127.0.0.1:8000/menu/addons/api/tag-put/";
  const companyId = setSessionCompId;
  
  try {
    const response = await axios.put(
      `${apiUrl}?tag_id=${tagId}&comp_id=${companyId}&archive=1`
    );
    console.log("Update successful", response.data);
  } catch (error) {
    console.error("Error updating permissions", error);
  }
  }
  const handleNonArchive = async (tagId) => {
    const apiUrl =
    "http://127.0.0.1:8000/menu/addons/api/tag-put/";
  const companyId = setSessionCompId;
  
  try {
    const response = await axios.put(
      `${apiUrl}?tag_id=${tagId}&comp_id=${companyId}&archive=0`
    );
    console.log("Update successful", response.data);
  } catch (error) {
    console.error("Error updating permissions", error);
  }
  }
  const handleHide = async (tagId) => {
    const apiUrl =
    "http://127.0.0.1:8000/menu/addons/api/tag-put/";
  const companyId = setSessionCompId;
  
  try {
    const response = await axios.put(
      `${apiUrl}?tag_id=${tagId}&comp_id=${companyId}&hide=1`
    );
    console.log("Update successful", response.data);
  } catch (error) {
    console.error("Error updating permissions", error);
  }
  }
  return (
    <div className="TAG-app">
      {/* Desktop top container */}
      <div className="d-top-container f-12">
        <div className="d-flex flex-end" style={{ padding: "0vw 2vw" }}>
          <input
            type="text"
            placeholder="Search Tags"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
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
              onClick={openModal}
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
          <div style={{ textAlign: "left" }}>Tag name</div>

          <div>Hide</div>
          <div>Edit</div>
          <div>Archive</div>
        </div>
      </div>
      {/* Desktop card */}
      <div className="scrollable-container">
      {tagData.map(tag => (
        <div className="d-card f-12" key={tag.id}>
          <div style={{ textAlign: "left" }}>
          <div
                  className="d-flex g-10"
                  style={{
                    textAlign: "left",
                    flexWrap: "wrap",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <button className="ITM-tags f-10">{tag.tag_name}</button>
                </div>
          </div>
  
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon icon={faEyeSlash} style={{ cursor: "pointer" }}               onClick={() => handleHide(tag.tag_id)}
 />
          </div>
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon icon={faPencil} style={{ cursor: "pointer" }} onClick={() => openModalEdit(tag.tag_id)} />
          </div>
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon
              icon={faBoxArchive}
              style={{ cursor: "pointer" }}
              onClick={() => handleArchive(tag.tag_id)}
            />
          </div>
        </div>
      ))}
      </div>
      {/* Phone top container */}
      <div className="p-top-container">
        <input type="text" name="" id="" placeholder="Search Tags" />
        <br />
        <br />
        <div className="d-flex g-10">
          <button className="p-button bg-purple" onClick={openModal}>Create new</button>
          <button className="p-outline-button" onClick={openArchiveModal}>Archive List</button>
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
              <div className="txt-grey f-14">Tag name</div>
              <div className="txt-black f-16"><button class="ITM-tags f-10">Spicy</button></div>
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
  {modalVisible && (
     <div
     className="main-modal main-modal-open"
   >
     <div className="main-modal-content TAG-main-modal-custom-content">
       <div className="d-flex space-between f-20">
        <div>Create new Tag</div>
        <div><FontAwesomeIcon icon={faXmark} className="f-20" onClick={closeModal} style={{cursor:'pointer'}} /></div>
       </div>
       <div>
        <input type="text" name="newTag" id="newTag" value={newtagName} onChange={(e) => setNewTagName(e.target.value)} className="TAG-ADD-input" placeholder="Enter Tag name"/>
       </div>
       <button className="p-button bg-purple submit-button" onClick={handleSubmitNewTag}>Submit</button>
     </div>
   </div>
  )}
  {modalEdit && (
     <div
     className="main-modal main-modal-open"
   >
     <div className="main-modal-content TAG-main-modal-custom-content">
       <div className="d-flex space-between f-20">
        <div>Edit Tag</div>
        <div><FontAwesomeIcon icon={faXmark} className="f-20" onClick={closeModalEdit} style={{cursor:'pointer'}} /></div>
       </div>
       <div>
        <input type="text" name="newTag" id="newTag" value={tagEditFeild} onChange={(e) => setTageEditFeild(e.target.value)} className="TAG-ADD-input" placeholder="Enter Tag name"/>
       </div>
       <button className="p-button bg-purple submit-button" onClick={handleSubmitEdit}>Submit</button>
     </div>
   </div>
  )}

  
    {modalArchive && (
        <div
        className="main-modal main-modal-open MA-C"
      >
        <div className="main-modal-content">
          <div className="d-flex space-between f-20">
            <div className="">
            Tags Archive List

            </div>
            <div onClick={closeArchiveModal} style={{cursor:'pointer'}}><FontAwesomeIcon icon={faXmark} /></div>
          </div>

          <br />
          <div className="d-flex flex-end">
            <input type="text" name="" id="" className="t-box" placeholder="Search Tags"  value={searchArciveTerm}
            onChange={(e) => setSearchArciveTerm(e.target.value)}/>
          </div>
          <div className="d-header txt-dark-grey f-12" style={{marginleft:'0.8vw',marginRight:'2vw'}}>
          <div style={{ textAlign: "left" }}>Tag name</div>

          <div>Hide</div>
          <div>Edit</div>
          <div>Archive</div>
        </div>
          <div className="main-modal-content-inside">
          {tagArchive.map(tag => (
          <div className="d-card f-12 align-item-center" key={tag.id}>
          <div style={{ textAlign: "left" }}>
          <div
                  className="d-flex g-10 align-item-center"
                  style={{
                    textAlign: "left",
                    flexWrap: "wrap",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <button className="ITM-tags f-10">{tag.tag_name}</button>
                </div>
          </div>
  
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon icon={faEyeSlash} style={{ cursor: "pointer" }}  onClick={() => handleHide(tag.tag_id)} />
          </div>
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon icon={faPencil} style={{ cursor: "pointer" }} />
          </div>
          <div className="txt-dark-grey f-16">
            <FontAwesomeIcon
              icon={faBoxArchive}
              style={{ cursor: "pointer" }}
              onClick={() => handleNonArchive(tag.tag_id)}
            />
          </div>
        </div>
          ))}
        
          </div>
          <div className="p-main-modal-content-inside">
          <div className="p-card">
          <div className="d-flex">
            <div className="flex-1">
              <div className="txt-grey f-14">Tag name</div>
              <div className="txt-black f-16"><button class="ITM-tags f-10">Spicy</button></div>
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
};

export default Categories;
