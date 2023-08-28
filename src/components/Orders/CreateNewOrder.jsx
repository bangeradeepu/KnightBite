import React, { useState } from "react";
import "./CreateNewOrder.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTrash,
  faPlus,
  faCircleInfo,
  faCopyright,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";

import { Icon } from "@iconify/react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const CreateNewOrder = () => {
  // Order Type
  const [activeTab, setActiveTab] = useState("online"); // Set 'Items' as the default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Category tab
  const [catTab, setCatTab] = useState("Combo");
  const handleCatTabChange = (tabName) => {
    setCatTab(tabName);
  };
  const categories = [
    "Combo",
    "Combo meal",
    "Ice Cream",
    "Kids Meal",
    "Noodles",
    "Pancake",
    "Sandwiches",
    "Veg Burgers",
    "Wrap",
    "Milk Shakes",
    "Coolers",
    "Dessert",
    "Extras",
    "Veg Burgers",
    "Combo for 3",
    "Rice",
    "Haleem",
    "Non-veg Burgers",
  ];

  // Inc Dec button
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };


  // Date filter
  const [submitVisible, setSubmitVisible] = useState(false);

  const openSubmit = () => {
    setSubmitVisible(true);
  };

  const closeSubmit = () => {
    setSubmitVisible(false);
  };
    // Open Touch Screen
    const navigate = useNavigate();
    const openTouchScreen = () =>{
      navigate("/touchScreen");
    };
  return (
    <div>
      <div className="CO-page">
        <div className="CO-container-1">
          <p style={{ marginLeft: "20px", fontSize: "20px" }}>Create Order</p>
          {catTab && (
            <div>
              {catTab === "Combo" && <div>hi</div>}
              {catTab === "Combo meal" && <div>hello</div>}
              {catTab === "Ice Cream" && <div>hey</div>}
              {/* Add similar blocks for other categories */}
            </div>
          )}
          <div className="grid-2">
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginLeft: "20px",
                }}
              >
                <button
                  className={
                    activeTab === "online" ? "active-filter" : "filter-button"
                  }
                  onClick={() => handleTabClick("online")}
                >
                  Online
                </button>
                <button
                  className={
                    activeTab === "pickup" ? "active-filter" : "filter-button"
                  }
                  onClick={() => handleTabClick("pickup")}
                >
                  Pickup
                </button>
                <button
                  className={
                    activeTab === "table" ? "active-filter" : "filter-button"
                  }
                  onClick={() => handleTabClick("table")}
                >
                  Table
                </button>
              </div>
            </div>
            <div className="g-right">
              <button
                className="p-button bg-purple"
                style={{ width: "100px", marginRight: "20px" }}
              >
                <FontAwesomeIcon icon={faLocationDot} /> Location
              </button>
              <button className="CO-b-button" style={{ marginRight: "40px" }} onClick={openTouchScreen}>
                Touch screen mode
              </button>
            </div>
          </div>

          {/* {activeTab === "online" ? (
            <div>Online Content</div>
          ) : activeTab === "pickup" ? (
            <div>Pickup Content</div>
          ) : activeTab === "table" ? (
            <div>Table Content</div>
          ) : (
            <div>Default Content</div>
          )} */}
        </div>
        {/* <div className="CO-content">
            <div className="grid-2">
            <div>1</div>
            <div className="g-right">2</div>
            </div>
           
        </div> */}
        <div className="CO-side-1">
          <input
            className="CO-side-search"
            placeholder="Search Category"
          ></input>
          <div className="CO-side-1-content">
            {categories.map((category, index) => (
              <div className="CO-cat-gap" key={index}>
                <Link
                  to={``} // Adjust the route path as needed /category/${category}
                  className={`CO-cat-dec ${
                    catTab === category ? "txt-purple" : "txt-black"
                  }`}
                  onClick={() => handleCatTabChange(category)}
                >
                  {category}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="CO-side-2">
          <input className="CO-side-search" placeholder="Search Items"></input>

          <div className="CO-side-2-content">
            <div
              className="CO-side-2-content-layer-1"
              style={{ marginTop: "5px" }}
            >
              <div className="txt-purple CO-side-2-content-layer-1-header ">
                Combo
              </div>
              <div style={{ marginTop: "22px" }}>
                <div style={{ fontSize: "12px" }}>
                  <div className="CO-sde-2-content-left">
                    <div>Chicken Burger + Coke + Code+ Fries</div>
                    <div
                      style={{
                        width: "20.4rem",
                        height: "1px",
                        backgroundColor: "#aeaeae",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    ></div>
                  </div>
                  <div className="CO-sde-2-content-right">
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="txt-red" style={{ fontSize: "20px" }}>
                        <Icon icon="mdi:lacto-vegetarian" />
                      </div>
                      <div
                        className="txt-dark-grey"
                        style={{ fontSize: "20px" }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <div className="CO-sde-2-content-left">
                    <div>Chicken Burger</div>
                    <div
                      style={{
                        width: "20.4rem",
                        height: "1px",
                        backgroundColor: "#aeaeae",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    ></div>
                  </div>
                  <div className="CO-sde-2-content-right">
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="txt-green" style={{ fontSize: "20px" }}>
                        <Icon icon="mdi:lacto-vegetarian" />
                      </div>
                      <div
                        className="txt-dark-grey"
                        style={{ fontSize: "20px" }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <div className="CO-sde-2-content-left">
                    <div>Chicken Burger</div>
                    <div
                      style={{
                        width: "20.4rem",
                        height: "1px",
                        backgroundColor: "#aeaeae",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    ></div>
                  </div>
                  <div className="CO-sde-2-content-right">
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="txt-green" style={{ fontSize: "20px" }}>
                        <Icon icon="mdi:lacto-vegetarian" />
                      </div>
                      <div
                        className="txt-dark-grey"
                        style={{ fontSize: "20px" }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <div className="CO-sde-2-content-left">
                    <div>Chicken Burger</div>
                    <div
                      style={{
                        width: "20.4rem",
                        height: "1px",
                        backgroundColor: "#aeaeae",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    ></div>
                  </div>
                  <div className="CO-sde-2-content-right">
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="txt-green" style={{ fontSize: "20px" }}>
                        <Icon icon="mdi:lacto-vegetarian" />
                      </div>
                      <div
                        className="txt-dark-grey"
                        style={{ fontSize: "20px" }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ fontSize: "12px" }}>
                  <div className="CO-sde-2-content-left">
                    <div>
                      Chicken Burger + Coke + Code+ Fries + Chicken Burger +
                      Coke + Code+ Fries
                    </div>
                    <div
                      style={{
                        width: "20.4rem",
                        height: "1px",
                        backgroundColor: "#aeaeae",
                        marginTop: "10px",
                        marginBottom: "10px",
                      }}
                    ></div>
                  </div>
                  <div className="CO-sde-2-content-right">
                    <div style={{ display: "flex", gap: "5px" }}>
                      <div className="txt-red" style={{ fontSize: "20px" }}>
                        <Icon icon="mdi:lacto-vegetarian" />
                      </div>
                      <div
                        className="txt-dark-grey"
                        style={{ fontSize: "20px" }}
                      >
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CO-side-3">
          <div
            className="CO-side-3-content"
            style={{ display: "flex", gap: "10px" }}
          >
            <div className="CO-side-3-fields">
              Enter Customer details
              <input
                type="text"
                className="CO-side-search"
                placeholder="Enter Name"
                style={{ marginTop: "15px" }}
              ></input>
              <input
                type="text"
                className="CO-side-search"
                placeholder="Enter Phone Number"
                style={{ marginTop: "15px" }}
              ></input>
              <input
                type="text"
                className="CO-side-search"
                placeholder="Enter Alternative Number"
                style={{ marginTop: "15px" }}
              ></input>
              <input
                type="text"
                className="CO-side-search"
                placeholder="Enter Phone Number"
                style={{ marginTop: "15px" }}
              ></input>
              <textarea
                class="CO-custom-input"
                placeholder="Enter address"
                style={{ marginTop: "15px", width: "255px" }}
              ></textarea>
              <select class="CO-dropbtn txt-dark-grey" name="languages" id="lang">
                <option value="" disabled="">
                  Choose payment method
                </option>
                <option value="javascript">C.O.D</option>
                <option value="php">Online Payment</option>
              </select>
            </div>
            <div className="CO-side-3-items">
              <div className="CO-side-3-items-billing ">
                <div className="grid-2" style={{ marginBottom: "10px" }}>
                  <div className="g-left">
                    Discount{" "}
                    <input
                      className="CO-dis-per-textbox"
                      type="text"
                      name=""
                      id=""
                      placeholder="Rupees ₹"
                    />
                    &nbsp;
                    <input
                      className="CO-dis-per-textbox"
                      type="text"
                      name=""
                      id=""
                      placeholder="Percentage %"
                    />
                  </div>
                  <div className="g-right CO-m-r">₹250</div>
                </div>
                <div className="grid-2" style={{ marginBottom: "10px" }}>
                  <div className="g-left">
                  {activeTab === "online" ? (
            <div>
               Delivery charges{" "}
                    <label>
                      <input
                        type="radio"
                        name="option"
                        id="option1"
                        value="35"
                      />
                      35
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="option"
                        id="option2"
                        value="45"
                      />
                      45
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="option"
                        id="option3"
                        value="Free"
                      />
                      Free
                    </label>
            </div>
          ) : activeTab === "pickup" ? (
            <div></div> //add id data for pickup
          ) : activeTab === "table" ? (
            <div></div> //add id data for table
          ) : (
            <div></div>
          )}
                   
                  </div>
                  {activeTab === "online" &&  <div className="g-right CO-m-r">₹250</div>}
                </div>
                <div className="grid-2" style={{ marginBottom: "10px" }}>
                  <div className="g-left">Aditional charges <FontAwesomeIcon icon={faCircleInfo} className="txt-dark-grey" /></div>
                  <div className="g-right CO-m-r">₹250</div>
                </div>
                <div className="grid-2" style={{ marginBottom: "10px" }}>
                  <div className="g-left">Tax charges <FontAwesomeIcon icon={faCircleInfo} className="txt-dark-grey"/></div>
                  <div className="g-right CO-m-r">₹250</div>
                </div>
                <div
                  style={{
                    width: "540px",
                    backgroundColor: "#aeaeae",
                    height: "1px",
                  }}
                ></div>
                <div className="grid-2" style={{ marginTop: "7px" }}>
                  <div className="g-left">
                    <b>Total</b>
                  </div>
                  <div className="g-right CO-m-r">
                    <b>₹250</b>
                  </div>
                </div>
                <div className="grid-2" style={{ marginTop: "7px" }}>
                  <textarea
                    className="CO-custom-input"
                    placeholder="Special Request"
                  ></textarea>
                </div>
                <div
                  style={{ marginTop: "10px", display: "flex", gap: "10px" }}
                >
                  <button className="p-outline-button">Cancel</button>
                  <button className="p-button bg-purple" onClick={openSubmit}>Submit</button>
                </div>
              </div>

              <div className="CO-side-3-items-head">
                <div
                  style={{
                    display: "flex",
                    gap: "87px",
                    fontSize: "13px",
                    color: "#2e2e2e",
                  }}
                >
                  <div style={{ marginLeft: "7px" }}>No</div>
                  <div style={{ marginLeft: "-70px" }}>Item</div>

                  <div
                    style={{
                      display: "flex",
                      gap: "30px",
                      fontSize: "13px",
                      color: "#2e2e2e",
                      marginLeft: "40px",
                    }}
                  >
                    <div>Quantity</div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "23px",
                      fontSize: "13px",
                      color: "#2e2e2e",
                      marginLeft: "-40px",
                    }}
                  >
                    <div>Extras</div>
                    <div>Price </div>
                    <div>Amount</div>
                    <div>Remove</div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  marginTop: "40px",
                  marginLeft: "10px",
                }}
              >
                <div
                  className="CO-sde-2-content-left"
                  style={{ width: "480px" }}
                >
                  <p class="txt-black CO-item-no-spacing">1</p>
                  <p class="txt-black CO-item-name-spacing">
                    Chicken Burger Chicken Burger Chicken Burger Chicken Burger
                    Chicken Burger
                    <div
                      style={{
                        width: "29rem",
                        height: "1px",
                        backgroundColor: "#aeaeae",
                        marginTop: "20px",
                        marginRight: "140px",
                      }}
                    ></div>
                  </p>
                  <p class="txt-orange CO-item-cat-spacing">
                    <button
                      className="CO-btn-inc"
                      type="button"
                      onClick={decNum}
                    >
                      -
                    </button>
                    <span></span>
                    <input
                      type="text"
                      class="form-control"
                      value={num}
                      onChange={handleChange}
                      className="CO-qty-input"
                    />

                    <button
                      className="CO-btn-dec"
                      type="button"
                      onClick={incNum}
                    >
                      +
                    </button>
                  </p>
                  <p
                    class="txt-black CO-item-extras-spacing"
                    style={{ marginLeft: "24px" }}
                  >
                                        <FontAwesomeIcon icon={faCopyright} style={{fontSize:'16px'}}/>  &nbsp; <FontAwesomeIcon icon={faPizzaSlice} style={{fontSize:'16px'}}/>

                  </p>
                  <p
                    class="txt-black CO-item-extras-spacing"
                    style={{ marginLeft: "3px" }}
                  >
                    ₹250
                  </p>
                  <p
                    class="txt-black CO-item-extras-spacing"
                    style={{ marginLeft: "7px" }}
                  >
                    ₹250
                  </p>
                </div>
                <div className="CO-sde-2-content-right">
                  <p
                    class="txt-dark-grey CO-item-extras-spacing"
                    style={{ marginLeft: "-4px" }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </p>
                </div>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  marginTop: "40px",
                  marginLeft: "10px",
                }}
              >
                <div
                  className="CO-sde-2-content-left"
                  style={{ width: "480px" }}
                >
                  <p class="txt-black CO-item-no-spacing">2</p>
                  <p class="txt-black CO-item-name-spacing">
                    Chicken Burger
                    <div
                      style={{
                        width: "29rem",
                        height: "1px",
                        backgroundColor: "#aeaeae",
                        marginTop: "20px",
                        marginRight: "140px",
                      }}
                    ></div>
                  </p>
                  <p class="txt-orange CO-item-cat-spacing">
                    <button
                      className="CO-btn-inc"
                      type="button"
                      onClick={decNum}
                    >
                      -
                    </button>
                    <span></span>
                    <input
                      type="text"
                      class="form-control"
                      value={num}
                      onChange={handleChange}
                      className="CO-qty-input"
                    />

                    <button
                      className="CO-btn-dec"
                      type="button"
                      onClick={incNum}
                    >
                      +
                    </button>
                  </p>
                  <p
                    class="txt-black CO-item-extras-spacing"
                    style={{ marginLeft: "24px" }}
                  >
                                        <FontAwesomeIcon icon={faCopyright} style={{fontSize:'16px'}}/> &nbsp; <FontAwesomeIcon icon={faPizzaSlice} style={{fontSize:'16px'}}/>

                  </p>
                  <p
                    class="txt-black CO-item-extras-spacing"
                    style={{ marginLeft: "3px" }}
                  >
                    ₹250
                  </p>
                  <p
                    class="txt-black CO-item-extras-spacing"
                    style={{ marginLeft: "7px" }}
                  >
                    ₹250
                  </p>
                </div>
                <div className="CO-sde-2-content-right">
                  <p
                    class="txt-dark-grey CO-item-extras-spacing"
                    style={{ marginLeft: "-4px" }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </p>
                </div>
              </div>
              <div
                style={{
                  fontSize: "12px",
                  marginTop: "40px",
                  marginLeft: "10px",
                }}
              >
                <div
                  className="CO-sde-2-content-left"
                  style={{ width: "480px" }}
                >
                  <p class="txt-black CO-item-no-spacing">2</p>
                  <p class="txt-black CO-item-name-spacing">
                    Chicken Burger
                    <div
                      style={{
                        width: "29rem",
                        height: "1px",
                        backgroundColor: "#aeaeae",
                        marginTop: "20px",
                        marginRight: "140px",
                      }}
                    ></div>
                  </p>
                  <p class="txt-orange CO-item-cat-spacing">
                    <button
                      className="CO-btn-inc"
                      type="button"
                      onClick={decNum}
                    >
                      -
                    </button>
                    <span></span>
                    <input
                      type="text"
                      class="form-control"
                      value={num}
                      onChange={handleChange}
                      className="CO-qty-input"
                    />

                    <button
                      className="CO-btn-dec"
                      type="button"
                      onClick={incNum}
                    >
                      +
                    </button>
                  </p>
                  <p
                    class="txt-black CO-item-extras-spacing"
                    style={{ marginLeft: "24px" }}
                  >
                    <FontAwesomeIcon icon={faCopyright} style={{fontSize:'16px'}}/> &nbsp; <FontAwesomeIcon icon={faPizzaSlice} style={{fontSize:'16px'}}/>
                  </p>
                  <p
                    class="txt-black CO-item-extras-spacing"
                    style={{ marginLeft: "3px" }}
                  >
                    ₹250
                  </p>
                  <p
                    class="txt-black CO-item-extras-spacing"
                    style={{ marginLeft: "7px" }}
                  >
                    ₹250
                  </p>
                </div>
                <div className="CO-sde-2-content-right">
                  <p
                    class="txt-dark-grey CO-item-extras-spacing"
                    style={{ marginLeft: "-4px" }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Date filter modal */}
       {submitVisible && (
        <div
          className={`CO-submit-modal ${
            submitVisible ? "CO-submit-modal-open" : ""
          }`}
        >
          <div className="CO-submit-modal-content">
            <div className="grid-2">
              <p className="">Set order status</p>
              <span
                className=""
                style={{ textAlign: "right", marginTop: "14px" }}
                onClick={closeSubmit}
              >
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
            </div>
            <div className="radio-container" style={{ display: "flex", flexDirection: "column" }}>
  <label className="radio">
    <input
      type="radio"
      name="status"
      className="radio-input"
      defaultValue="in-progress"
    />
    <span className="radio-text">In Progress</span>
  </label>
  <label className="radio">
    <input
      type="radio"
      name="status"
      className="radio-input"
      defaultValue="on-hold"
    />
    <span className="radio-text">On Hold</span>
  </label>
</div>
<button className="OR-datefilter-btn" style={{marginTop:'45px', marginLeft:'10px'}}>Submit</button>


          </div>
        </div>
      )}
    </div>
  );
};

export default CreateNewOrder;
