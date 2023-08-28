import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Home from "./components/Home/Home";
import Side from "./components/Menu/MenuSideBar";
import "./YourComponent.css";
import Head from "./components/Mains/Head";
import Items from "./components/Menu/Items";
import Categories from "./components/Menu/Categories";
import AddOns from "./components/Menu/AddOns";
import AddonGroups from "./components/Menu/AddonGroups";
import Tags from "./components/Menu/Tags";
import MenuSideBar from "./components/Menu/MenuSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CreateNewItem from "./components/Menu/CreateNewItem";
import CreateNewAddons from "./components/Menu/CreateNewAddons";
import CreateNewAddonGroups from "./components/Menu/CreateNewAddonGroups";
import ManageSideBar from "./components/Manage/ManageSideBar";
import ItemsStock from "./components/Menu/ItemsStock";
import Orders from "./components/Orders/Orders";
import CreateNewOrder from "./components/Orders/CreateNewOrder";
import CreateOrderTS from "./components/Orders/CreateOrderTS";

const YourComponent = () => {
  const [stockTab, setStockTab] = useState("all");

  const handleStock = (tab) => {
    setStockTab(tab);
  };


  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const [sideNavRight, setSideNavRight] = useState(-380);

  const openNav = () => {
    setSideNavRight(0);
  };

  const closeNav = () => {
    setSideNavRight(-380);
  };
  // Open stock control
  const [stockVisible, setStocklVisible] = useState(false);

  const openStock = () => {
    setStocklVisible(true);
  };

  const closeStock = () => {
    setStocklVisible(false);
  };
  return (
    <div>
      <Router>
        <Head />
        <div className="top-space">
          <div className="topnav" id="myDIV">
            <div className="left-align">
              <Link
                to="/"
                className={activeLink === "home" ? "active" : ""}
                onClick={() => handleLinkClick("home")}
              >
                Home
              </Link>
              <Link
                to="/menu"
                className={activeLink === "menu" ? "active" : ""}
                onClick={() => handleLinkClick("menu")}
              >
                Menu
              </Link>
              <Link
                to="/orders"
                className={activeLink === "orders" ? "active" : ""}
                onClick={() => handleLinkClick("orders")}
              >
                Orders
              </Link>
              <Link
                to="/deliveryboy"
                className={activeLink === "deliveryboy" ? "active" : ""}
                onClick={() => handleLinkClick("deliveryboy")}
              >
                Delivery Boys
              </Link>
              <Link
                to="/manage"
                className={activeLink === "manage" ? "active" : ""}
                onClick={() => handleLinkClick("manage")}
              >
                Manage
              </Link>
              <Link
                to="/accounts"
                className={activeLink === "accounts" ? "active" : ""}
                onClick={() => handleLinkClick("accounts")}
              >
                Accounts
              </Link>
            </div>

            <div className="store-pos">
              <button className="store-btn" onClick={openNav}>
                {" "}
                <FontAwesomeIcon icon={faBars} /> Store settings
              </button>
            </div>
            <div className="store-pos">
              <button className="store-btn" onClick={openStock}>
                {" "}
                Stock Control
              </button>
            </div>
          </div>
          <div>
            <div
              id="mySidenav"
              className="SO-sidenav"
              style={{ right: sideNavRight }}
            >
              <Link
                className="SO-closebtn"
                onClick={closeNav}
              >
                <FontAwesomeIcon icon={faXmark} />
              </Link>
              <div className="side-padding">
                <p>Store Settings</p>
                <div className="dropdown">
                  <select className="dropbtn" name="languages" id="lang">
                    <option value="" disabled="">
                      Select Location
                    </option>
                    <option value="knightbite">Knight Bite</option>
                    <option value="pancake">Pancake Bite</option>
                    <option value="java">Java</option>
                    <option value="golang">Golang</option>
                    <option value="python">Python</option>
                    <option value="c#">C#</option>
                    <option value="C++">C++</option>
                    <option value="erlang">Erlang</option>
                  </select>
                </div>
                <br />
                <br />
                <br />
                <div className="store-set-grid-container">
                  <div className="store-set-left">Pancake Bite</div>
                  <div className="store-set-right">
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>

                <div className="store-set-grid-container">
                  <div className="store-set-left">Chicken Bite</div>
                  <div className="store-set-right">
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Routes>
            <Route path="/CreateNewItem" element={<Items />} />{" "}
            {/*Reciving data from home page */}
            <Route path="/" element={<Home />} />
            {/* Menu Side bar starts */}
            {/* Menu Route */}
            <Route
              path="/menu"
              element={
                <>
                  <MenuSideBar />
                  <Items />
                </>
              }
            />
            {/* Add items call CreateAddons */}
            <Route
              path="/handleAddItem"
              element={
                <MenuSideBar>
                  <CreateNewItem />
                </MenuSideBar>
              }
            />
            <Route
              path="/handleStock"
              element={
                <MenuSideBar>
                  <ItemsStock />
                </MenuSideBar>
              }
            />
            <Route
              path="/CreateAddons"
              element={
                <MenuSideBar>
                  <CreateNewAddons />
                </MenuSideBar>
              }
            />
            <Route
              path="/AddAddonGroups"
              element={
                <MenuSideBar>
                  <CreateNewAddonGroups />
                </MenuSideBar>
              }
            />
            <Route
              path="/menu/items"
              element={
                <MenuSideBar>
                  <Items />
                </MenuSideBar>
              }
            />
            <Route
              path="/menu/categories"
              element={
                <MenuSideBar>
                  <Categories />
                </MenuSideBar>
              }
            />
            <Route
              path="/menu/addongroups"
              element={
                <MenuSideBar>
                  <AddonGroups />
                </MenuSideBar>
              }
            />
            <Route
              path="/menu/addons"
              element={
                <MenuSideBar>
                  <AddOns />
                </MenuSideBar>
              }
            />
            <Route
              path="/menu/tags"
              element={
                <MenuSideBar>
                  <Tags />
                </MenuSideBar>
              }
            />
            {/* Orders Route */}
            <Route path="/orders" element={<Orders />} />
            <Route path="/CreateOrder" element={<CreateNewOrder />} />

            <Route path="/touchScreen" element={<CreateOrderTS />} />


            {/* Manage Route */}
            <Route path="/manage" element={<ManageSideBar />} />
            <Route
              path="/manage/contactdetails"
              element={
                <ManageSideBar>
                  <Tags />
                </ManageSideBar>
              }
            />
          </Routes>

          <Routes>
            <Route path="/kyc" element={<CreateNewItem />} />
          </Routes>
        </div>
      </Router>
      {/* Stock Control */}
      {stockVisible && (
        <div
          className={`Stock-modal ${stockVisible ? "Stock-modal-open" : ""}`}
        >
          <div className="Stock-modal-content">
            <div className="Stock-top-fix">
              <p className="Stock-create-header txt-black">Stock Control</p>
              <div style={{marginLeft:'0px', marginTop:'52px', position:'absolute'}}>

              <i className='search-icon-s' style={{paddingTop:'3%', paddingBottom:'3.2%'}}><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                  <input className="input-field-s" placeholder='Search Items' />
              </div>
              <div style={{marginLeft:'350px', marginTop:'52px', position:'absolute'}}>

              <i className='search-icon-s' style={{paddingTop:'3%', paddingBottom:'3.2%'}}><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                  <input className="input-field-s" placeholder='Search Category' />
              </div>
              
              <div className="stock-control-filter-buttons-container">
              
              <button
          className={stockTab === 'all' ? "active-filter" : "filter-button"}
          onClick={() => handleStock('all')}
        >
          All
        </button>
        <button
          className={stockTab === 'inStock' ? "active-filter" : "filter-button"}
          onClick={() => handleStock('inStock')}
        >
          In Stock
        </button>
        <button
          className={stockTab === 'outStock' ? "active-filter" : "filter-button"}
          onClick={() => handleStock('outStock')}
        >
          Out of Stock
        </button>
  </div>
              <span className="Stock-modal-close" onClick={closeStock}>
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
              
              <div className="grid-2 txt-grey" style={{marginTop:'25px', fontSize:'12px'}}>
                <div style={{marginLeft:'30px'}}>Name</div>
                <div className="" style={{ textAlign: "right" }}>
                  <div className="Stock-head-content-position " style={{marginRight:'125px'}}>Type</div>
                  <div className="Stock-head-content-position " style={{marginRight:'125px'}}>Category</div>
                  <div className="Stock-head-content-position " style={{marginRight:'100px'}}>Price</div>
                  <div className="Stock-head-content-position " style={{marginRight:'50px'}}>Availability</div>
                </div>
              </div>


              
            </div>

            <br />
            {stockTab === 'all' && (
            <div className="Stock-content-layer">
              
             
              {/* <div className="Stock-content-card grid-2">
                <div className="">Chicken burger</div>

                <div className="grid-4 g-center">
                  <div className="txt-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                      />
                    </svg>
                  </div>
                  <div className="txt-grey">super saver meal box</div>
                  <div className="">₹200</div>
                  <div className="">
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div> */}
              {/* <div className="Stock-content-card grid-2">
                <div
                  className=""
                  style={{ fontSize: "14px", fontWeight: "10px" }}
                >
                  Chicken burger
                </div>

                <div className="" style={{ textAlign: "right" }}>
                  <div
                    className="Stock-right-content-position txt-green"
                    style={{ paddingBottom: "20px" }}
                  >
                    <Icon icon="mdi:lacto-vegetarian" width="18" height="18" />
                  </div>
                  <div
                    className="Stock-right-content-position txt-grey"
                    style={{ fontSize: "14px" }}
                  >
                    super
                  </div>
                  <div className="Stock-right-content-position">₹200</div>
                  <div className="Stock-right-content-position">
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div> */}

              <div className="IS-content-group">
                <div className="IS-i-frame">
                  <div className="IS-overlap-6">
                    <div className="IS-item-name-container">
                      <p className="txt-black IS-item-name-spacing">
                        Chicken burger all
                      </p>
                      <p className="txt-green IS-item-hide-spacing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                          />
                        </svg>
                      </p>

                      <p className="txt-grey IS-item-available-spacing">
                        super saver meal box
                      </p>

                      <p className="txt-dark-grey IS-item-edit-spacing">₹200</p>
                      <p className="txt-dark-grey IS-item-arch-spacing">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="slider round"></span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="IS-overlap-6">
                    <div className="IS-item-name-container">
                      <p className="txt-black IS-item-name-spacing">
                        Chicken burger all
                      </p>
                      <p className="txt-green IS-item-hide-spacing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                          />
                        </svg>
                      </p>

                      <p className="txt-grey IS-item-available-spacing">
                        super saver meal box
                      </p>

                      <p className="txt-dark-grey IS-item-edit-spacing">₹200</p>
                      <p className="txt-dark-grey IS-item-arch-spacing">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="slider round"></span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="IS-overlap-6">
                    <div className="IS-item-name-container">
                      <p className="txt-black IS-item-name-spacing">
                        Chicken burger all
                      </p>
                      <p className="txt-green IS-item-hide-spacing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                          />
                        </svg>
                      </p>

                      <p className="txt-grey IS-item-available-spacing">
                        super saver meal box
                      </p>

                      <p className="txt-dark-grey IS-item-edit-spacing">₹200</p>
                      <p className="txt-dark-grey IS-item-arch-spacing">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="slider round"></span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="IS-overlap-6">
                    <div className="IS-item-name-container">
                      <p className="txt-black IS-item-name-spacing">
                        Chicken burger all
                      </p>
                      <p className="txt-green IS-item-hide-spacing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                          />
                        </svg>
                      </p>

                      <p className="txt-grey IS-item-available-spacing">
                        super saver meal box
                      </p>

                      <p className="txt-dark-grey IS-item-edit-spacing">₹200</p>
                      <p className="txt-dark-grey IS-item-arch-spacing">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="slider round"></span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="IS-overlap-6">
                    <div className="IS-item-name-container">
                      <p className="txt-black IS-item-name-spacing">
                        Chicken burger all
                      </p>
                      <p className="txt-green IS-item-hide-spacing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                          />
                        </svg>
                      </p>

                      <p className="txt-grey IS-item-available-spacing">
                        super saver meal box
                      </p>

                      <p className="txt-dark-grey IS-item-edit-spacing">₹200</p>
                      <p className="txt-dark-grey IS-item-arch-spacing">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="slider round"></span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="IS-overlap-6">
                    <div className="IS-item-name-container">
                      <p className="txt-black IS-item-name-spacing">
                        Chicken burger all
                      </p>
                      <p className="txt-green IS-item-hide-spacing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                          />
                        </svg>
                      </p>

                      <p className="txt-grey IS-item-available-spacing">
                        super saver meal box
                      </p>

                      <p className="txt-dark-grey IS-item-edit-spacing">₹200</p>
                      <p className="txt-dark-grey IS-item-arch-spacing">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="slider round"></span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="IS-overlap-6">
                    <div className="IS-item-name-container">
                      <p className="txt-black IS-item-name-spacing">
                        Chicken burger all
                      </p>
                      <p className="txt-green IS-item-hide-spacing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                          />
                        </svg>
                      </p>

                      <p className="txt-grey IS-item-available-spacing">
                        super saver meal box
                      </p>

                      <p className="txt-dark-grey IS-item-edit-spacing">₹200</p>
                      <p className="txt-dark-grey IS-item-arch-spacing">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="slider round"></span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="IS-overlap-6">
                    <div className="IS-item-name-container">
                      <p className="txt-black IS-item-name-spacing">
                        Chicken burger all
                      </p>
                      <p className="txt-green IS-item-hide-spacing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                          />
                        </svg>
                      </p>

                      <p className="txt-grey IS-item-available-spacing">
                        super saver meal box
                      </p>

                      <p className="txt-dark-grey IS-item-edit-spacing">₹200</p>
                      <p className="txt-dark-grey IS-item-arch-spacing">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="slider round"></span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <br />
                </div>
                
              </div>
              
            </div>
            )}
            {stockTab === 'inStock' && (
            <div className="Stock-content-layer">
              
             
              {/* <div className="Stock-content-card grid-2">
                <div className="">Chicken burger</div>

                <div className="grid-4 g-center">
                  <div className="txt-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                      />
                    </svg>
                  </div>
                  <div className="txt-grey">super saver meal box</div>
                  <div className="">₹200</div>
                  <div className="">
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div> */}
              {/* <div className="Stock-content-card grid-2">
                <div
                  className=""
                  style={{ fontSize: "14px", fontWeight: "10px" }}
                >
                  Chicken burger
                </div>

                <div className="" style={{ textAlign: "right" }}>
                  <div
                    className="Stock-right-content-position txt-green"
                    style={{ paddingBottom: "20px" }}
                  >
                    <Icon icon="mdi:lacto-vegetarian" width="18" height="18" />
                  </div>
                  <div
                    className="Stock-right-content-position txt-grey"
                    style={{ fontSize: "14px" }}
                  >
                    super
                  </div>
                  <div className="Stock-right-content-position">₹200</div>
                  <div className="Stock-right-content-position">
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div> */}

              <div className="IS-content-group">
                <div className="IS-i-frame">
                  <div className="IS-overlap-6">
                    <div className="IS-item-name-container">
                      <p className="txt-black IS-item-name-spacing">
                        Chicken burger instock
                      </p>
                      <p className="txt-green IS-item-hide-spacing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                          />
                        </svg>
                      </p>

                      <p className="txt-grey IS-item-available-spacing">
                        super saver meal box
                      </p>

                      <p className="txt-dark-grey IS-item-edit-spacing">₹200</p>
                      <p className="txt-dark-grey IS-item-arch-spacing">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="slider round"></span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            )}
            {stockTab === 'outStock' && (
            <div className="Stock-content-layer">
              
             
              {/* <div className="Stock-content-card grid-2">
                <div className="">Chicken burger</div>

                <div className="grid-4 g-center">
                  <div className="txt-green">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                      />
                    </svg>
                  </div>
                  <div className="txt-grey">super saver meal box</div>
                  <div className="">₹200</div>
                  <div className="">
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div> */}
              {/* <div className="Stock-content-card grid-2">
                <div
                  className=""
                  style={{ fontSize: "14px", fontWeight: "10px" }}
                >
                  Chicken burger
                </div>

                <div className="" style={{ textAlign: "right" }}>
                  <div
                    className="Stock-right-content-position txt-green"
                    style={{ paddingBottom: "20px" }}
                  >
                    <Icon icon="mdi:lacto-vegetarian" width="18" height="18" />
                  </div>
                  <div
                    className="Stock-right-content-position txt-grey"
                    style={{ fontSize: "14px" }}
                  >
                    super
                  </div>
                  <div className="Stock-right-content-position">₹200</div>
                  <div className="Stock-right-content-position">
                    <label className="switch">
                      <input type="checkbox"></input>
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div> */}

              <div className="IS-content-group">
                <div className="IS-i-frame">
                  <div className="IS-overlap-6">
                    <div className="IS-item-name-container">
                      <p className="txt-black IS-item-name-spacing">
                        Chicken burger out stock
                      </p>
                      <p className="txt-green IS-item-hide-spacing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"
                          />
                        </svg>
                      </p>

                      <p className="txt-grey IS-item-available-spacing">
                        super saver meal box
                      </p>

                      <p className="txt-dark-grey IS-item-edit-spacing">₹200</p>
                      <p className="txt-dark-grey IS-item-arch-spacing">
                        <label className="switch">
                          <input type="checkbox"></input>
                          <span className="slider round"></span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
            )}
            

          </div>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
