import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Icon } from "@iconify/react";
import "./Items.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faPencil,
  faEyeSlash,
  faFileLines,
  faLocationDot,
  faPowerOff,
  faPlus,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";


const apiUrl = "http://127.0.0.1:8000/menu/get/"; // Replace with your Django server URL

const fetchMenuItems = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error;
  }
};
const Items = () => {
  // Add Delivery boys
  const navigate = useNavigate();
  const addItems = () => {
    navigate("/addItems");
  };
  // Open Archive modal
  const [archiveVisible, setArchiveVisible] = useState(false);

  const openArchive = () => {
    setArchiveVisible(true);
  };

  const closeArchive = () => {
    setArchiveVisible(false);
  };

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenuItems()
      .then((response) => {
        setMenuItems(response.data); // Update state with response.data, which is an array
      })
      .catch((error) => {
        console.error("Error fetching menu items:", error);
        // Handle the error, e.g., set an error state or show an error message
      });
  }, []);

  //  Search
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = menuItems.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="ITM-app">
      {/* Desktop top-container */}
      <div className="d-top-container">
        <div className="d-flex flex-end" style={{padding:'0vw 2vw'}}>
          <input
            type="text"
            placeholder="Search Items"
            className="t-box"
            value={searchQuery}
            onChange={handleSearchChange}
            style={{width:'28%'}}
          />
        </div>
        <div className="d-flex space-between" style={{ marginTop: "2vw",padding:'0vw 2vw' }}>
          <div className="f-20">
            Items
          </div>

          <div className="d-flex g-10">
            <button
              className="p-button bg-purple"
              style={{ width: "8rem" }}
              onClick={addItems}
            >
              Add Items <FontAwesomeIcon icon={faPlus} />
            </button>
            <button className="p-outline-button" onClick={openArchive}>
              <FontAwesomeIcon icon={faBoxArchive} /> Archive List
            </button>
            <button className="p-outline-button">
              <FontAwesomeIcon icon={faBars} /> Bulk Action
            </button>
          </div>
        </div>
        <div className="ITM-header txt-dark-grey">
          <div>Name</div>
          <div style={{ textAlign: "left" }}></div>
          <div style={{ textAlign: "left" }}>Category</div>
          <div>Price</div>
          <div>Type</div>
          <div style={{ textAlign: "left" }}>Tags</div>
          <div>Availibility</div>
          <div>Edit</div>
          <div>Archive</div>
        </div>
      </div>
      {/* Desktop card */}
      <div className="scrollable-container">
        {menuItems.length > 0 ? (
          <div>
            {filteredData.map((item) => (
              // item.deleted === false ? (
              <div className="d-card" key={item.id}>
                <div>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA" />
                  </svg>
                </div>
                <div className="ITM-content-pad" style={{ textAlign: "left" }}>
                  {item.name}
                </div>
                <div
                  className="ITM-content-pad txt-orange"
                  style={{ textAlign: "left" }}
                >
                  {item.item_type}
                </div>
                <div className="ITM-content-pad">₹{item.price}</div>
                {item.food_tag === "VEG" ? (
                  <div className="txt-green" style={{ marginTop: "6px" }}>
                    <Icon icon="mdi:lacto-vegetarian" width="24" height="24" />
                  </div>
                ) : item.food_tag === "NON_VEG" ? (
                  <div className="txt-red" style={{ marginTop: "6px" }}>
                    <Icon icon="mdi:lacto-vegetarian" width="24" height="24" />
                  </div>
                ) : null}
                <div
                  className="d-flex g-10"
                  style={{
                    textAlign: "left",
                    flexWrap: "wrap",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <button className="ITM-tags f-10">Spicy</button>
                  <button className="ITM-tags f-10">Spicy</button>{" "}
                </div>
                <div className="ITM-content-pad txt-green">Available</div>
                <div className="ITM-content-pad">
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="txt-dark-grey f-16"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="ITM-content-pad">
                  <FontAwesomeIcon
                    icon={faBoxArchive}
                    className="txt-dark-grey f-16"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              // ) : <div>No data</div>
            ))}
          </div>
        ) : (
        <div class="loader"></div>
        )}
      </div>
      {/* Phone top container */}
      <div className="p-top-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Items"
          value={searchQuery}
            onChange={handleSearchChange}
        />
        <br />
        <br />
        <div className="d-flex g-10">
          <button className="p-button bg-purple" onClick={addItems} >
            Add Items
          </button>
          <button className="p-outline-button" onClick={openArchive}>
            Archive List
          </button>
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
                  <div className="txt-black f-16"><img src="/Images/kb_logo.png" alt="" /> </div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Item Name</div>
                  <div className="txt-black f-16">Veg Burger</div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Category</div>
                  <div className="txt-orange f-16">Single</div>
                </div>
              </div>
              
              <br />
              <div className="d-flex">
              <div className="flex-1">
                  <div className="txt-grey f-14">Type</div>
                  <div className="txt-black f-16">
                    <div className="txt-green" style={{ marginTop: "6px" }}>
                    <Icon icon="mdi:lacto-vegetarian" width="24" height="24" />
                  </div></div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Price</div>
                  <div className="txt-black f-16">₹120</div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Availibility</div>
                  <div className="txt-green f-16">Available</div>
                </div>
                
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="txt-grey f-14">Tags</div>
                  <div className="txt-black f-16"><button class="ITM-tags f-10">Spicy</button> <button class="ITM-tags f-10">New</button></div>
                </div>
              </div>
              <br />

              <hr />
              <div
                className="d-flex space-evenly"
                style={{ marginTop: "4vw" }}
              >
               
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
      {archiveVisible && (
        <div
          className={`main-modal ${archiveVisible ? "main-modal-open" : ""}`}
        >
          <div className="main-modal-content">
          <div className="grid-2">
                <p
                  className=""
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                >
                  Archive List
                </p>
                <span
                  className=""
                  style={{ textAlign: "right", marginTop: "14px" }}
                  onClick={closeArchive}
                >
                  <FontAwesomeIcon icon={faXmark} className="f-20" />
                </span>
              </div>
              <div className="d-flex flex-end" style={{paddingBottom:'2vw'}}>
                <input
                  type="text"
                  placeholder="Search Items"
                  className="t-box"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <div
                className="ITM-header txt-dark-grey"
                style={{ padding:'0vw 2.9vw 0vw 0vw'}}
              >
                <div>Name</div>
                <div style={{ textAlign: "left" }}></div>
                <div style={{ textAlign: "left" }}>Category</div>
                <div>Price</div>
                <div>Type</div>
                <div style={{ textAlign: "left" }}>Tags</div>
                <div>Availibility</div>
                <div>Edit</div>
                <div>Archive</div>
              </div>
           
              <div className="main-modal-content-inside">
              {menuItems.length > 0 ? (
          <div>
            {filteredData.map((item) => (
              // item.deleted === false ? (
              <div className="d-card" key={item.id} style={{marginLeft:'0rem'}}>
                <div>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA" />
                  </svg>
                </div>
                <div className="ITM-content-pad" style={{ textAlign: "left" }}>
                  {item.name}
                </div>
                <div
                  className="ITM-content-pad txt-orange"
                  style={{ textAlign: "left" }}
                >
                  {item.item_type}
                </div>
                <div className="ITM-content-pad">₹{item.price}</div>
                {item.food_tag === "VEG" ? (
                  <div className="txt-green" style={{ marginTop: "6px" }}>
                    <Icon icon="mdi:lacto-vegetarian" width="24" height="24" />
                  </div>
                ) : item.food_tag === "NON_VEG" ? (
                  <div className="txt-red" style={{ marginTop: "6px" }}>
                    <Icon icon="mdi:lacto-vegetarian" width="24" height="24" />
                  </div>
                ) : null}
                <div
                  className="d-flex g-10"
                  style={{
                    textAlign: "left",
                    flexWrap: "wrap",
                    paddingBottom: "0.5rem",
                  }}
                >
                  <button className="ITM-tags f-10" >Spicy</button>
                  <button className="ITM-tags f-10" >Spicy</button>{" "}
                </div>
                <div className="ITM-content-pad txt-green">Available</div>
                <div className="ITM-content-pad">
                  <FontAwesomeIcon
                    icon={faPencil}
                    className="txt-dark-grey f-16"
                    style={{ cursor: "pointer" }}
                  />
                </div>
                <div className="ITM-content-pad">
                  <FontAwesomeIcon
                    icon={faBoxArchive}
                    className="txt-dark-grey f-16"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
              // ) : <div>No data</div>
            ))}
          </div>
        ) : (
          <p>No menu items available.</p>
        )}
              </div>
              {/* Phone */}
              <div className="p-main-modal-content-inside">
               
              <div className="p-card">
              <div className="d-flex">
                <div className="flex-1">
                  <div className="txt-black f-16"><img src="/Images/kb_logo.png" alt="" /> </div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Item Name</div>
                  <div className="txt-black f-16">Veg Burger</div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Category</div>
                  <div className="txt-orange f-16">Single</div>
                </div>
              </div>
              
              <br />
              <div className="d-flex">
              <div className="flex-1">
                  <div className="txt-grey f-14">Type</div>
                  <div className="txt-black f-16">
                    <div className="txt-green" style={{ marginTop: "6px" }}>
                    <Icon icon="mdi:lacto-vegetarian" width="24" height="24" />
                  </div></div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Price</div>
                  <div className="txt-black f-16">₹120</div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Availibility</div>
                  <div className="txt-green f-16">Available</div>
                </div>
                
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="txt-grey f-14">Tags</div>
                  <div className="txt-black f-16"><button>Spicy</button> <button>New</button></div>
                </div>
              </div>
              <br />

              <hr />
              <div
                className="d-flex space-evenly"
                style={{ marginTop: "4vw" }}
              >
               
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

export default Items;
