import React, { useState, useEffect } from "react";
import "./ManageCandO.css";
import { GoDotFill } from "react-icons/go";
import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faBoxArchive,
  faStarOfLife,
  faXmark,
  faChevronDown,
  faChevronUp,
  faEyeSlash,
  faGripVertical,
  faArrowsUpDownLeftRight,
} from "@fortawesome/free-solid-svg-icons";
const ManageCandO = () => {
  const [activeTab, setActiveTab] = useState("Coupons"); // Set the default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const [items, setItems] = useState([
    {
      id: 1,
      CoupName: "KBBURGER",
      CoupDesc: "Rs.50 off on orders Above Rs.239",
      AssociateOutlet: "Multiple Outlets",
      status: "Active",
    },
    {
      id: 2,
      CoupName: "KBHUNGRY",
      CoupDesc: "Rs.50 off on orders Above Rs.239",
      AssociateOutlet: "Multiple Outlets",
      status: "Inactive",
    },
    {
      id: 3,
      CoupName: "KBHUNGRY",
      CoupDesc: "Rs.50 off on orders Above Rs.239",
      AssociateOutlet: "Multiple Outlets",
      status: "Inactive",
    },
    {
      id: 4,
      CoupName: "KBHUNGRY",
      CoupDesc: "Rs.50 off on orders Above Rs.239",
      AssociateOutlet: "Multiple Outlets",
      status: "Active",
    },
    {
      id: 5,
      CoupName: "KBHUNGRY",
      CoupDesc: "Rs.50 off on orders Above Rs.239",
      AssociateOutlet: "Multiple Outlets",
      status: "Active",
    },
  ]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDragEnter = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(newIndex, 0, draggedItem);

    // Update serial numbers
    for (let i = 0; i < updatedItems.length; i++) {
      updatedItems[i].id = i + 1;
    }

    setItems(updatedItems);
    setDraggedIndex(null);
  };

  const touchEvents = {
    onTouchStart: (e, index) => handleDragStart(e, index),
    onTouchMove: (e) => e.preventDefault(), // Prevent default touchmove behavior
    onTouchEnd: (e, newIndex) => handleDrop(e, newIndex),
  };
  // Open Archive modal
  const [newCouponVisible, setNewCouponVisible] = useState(false);

  const openNewCoupon = () => {
    setNewCouponVisible(true);
  };

  const closeNewCoupon = () => {
    setNewCouponVisible(false);
  };

  //  New coupon offer type
  const [selectedOFType, setSelectedOFType] = useState("FI"); // Initialize with an empty string

  // Function to handle the select change
  const handleSelectOFTypeChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedOFType(selectedValue);
  };

  return (
    <div className="ManageCandO">
      <div className="MCO-desktop">
        <div className="MCO-layer">
          <div className="d-flex space-between align-item-center">
            <div className="MCO-tab d-flex align-item-center g-10 r-f-12">
              <div className="MCO-tab-content">
                <div
                  className={`${
                    activeTab === "Coupons"
                      ? "MCO-tab-content-active f-w-700"
                      : "MCO-tab-content-inactive"
                  }`}
                  onClick={() => handleTabClick("Coupons")}
                >
                  Coupons
                </div>
              </div>
              <div className="MCO-tab-content">
                <div
                  className={`${
                    activeTab === "Archive List"
                      ? "MCO-tab-content-active f-w-700"
                      : "MCO-tab-content-inactive"
                  }`}
                  onClick={() => handleTabClick("Archive List")}
                >
                  Archive List
                </div>
              </div>
            </div>
            <div className="d-flex g-20">
              <div
                className="MCO-invite-button r-f-10 c-pointer"
                onClick={openNewCoupon}
              >
                New Coupon
              </div>
            </div>
          </div>
          <div className="MCO-content">
            {activeTab === "Coupons" && (
              <div>
                <div className="MCO-content-header r-f-8 f-w-800 align-item-center">
                  <div></div>
                  <div className="">Sort Order</div>
                  <div className="">
                    Coupon Name <div>(customers see this)</div>
                  </div>
                  <div className="">
                    Coupon Description <div>(customers see this)</div>
                  </div>
                  <div className="">Associated Outlet</div>
                  <div>Hide</div>
                  <div>Status</div>
                  <div>Edit</div>
                  <div>Archive</div>
                </div>
                <div className="MCO-content-scrollable">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className="MCO-content-card r-f-8 align-item-center"
                      draggable
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDragEnter={(e) => handleDragEnter(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                      {...touchEvents}
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faGripVertical}
                          className="r-f-12 txt-dark-grey MCO-all-scroll"
                        />
                      </div>
                      <div className="">{item.id}</div>
                      <div className="">{item.CoupName}</div>
                      <div className="d-flex justify-content-center align-item-center">
                        <div>{item.CoupDesc}</div>&nbsp;
                        <div>
                          <Icon
                            icon="ph:info"
                            className="txt-dark-grey c-pointer r-f-12"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-item-center">
                        <div>{item.AssociateOutlet}</div>&nbsp;
                        <div>
                          <Icon
                            icon="ph:info"
                            className="txt-dark-grey c-pointer r-f-12"
                          />
                        </div>
                      </div>
                      <div className="r-f-12 txt-dark-grey">
                        <FontAwesomeIcon icon={faEyeSlash} />
                      </div>
                      {item.status === "Active" ? (
                        <div className="MCO-active d-flex align-item-center justify-content-center ">
                          <GoDotFill />
                          {item.status}
                        </div>
                      ) : (
                        <div className="MCO-inactive d-flex align-item-center justify-content-center ">
                          <GoDotFill />
                          {item.status}
                        </div>
                      )}

                      <div>
                        <FontAwesomeIcon
                          icon={faPencil}
                          className="r-f-12 txt-dark-grey"
                        />
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faBoxArchive}
                          className="r-f-12 txt-dark-grey"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "Archive List" && (
              <div>
                <div className="MCO-content-header r-f-8 f-w-800 align-item-center">
                  <div></div>
                  <div className="">Sort Order</div>
                  <div className="">
                    Coupon Name <div>(customers see this)</div>
                  </div>
                  <div className="">
                    Coupon Description <div>(customers see this)</div>
                  </div>
                  <div className="">Associated Outlet</div>
                  <div>Hide</div>
                  <div>Status</div>
                  <div>Edit</div>
                  <div>Archive</div>
                </div>
                <div className="MCO-content-scrollable">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className="MCO-content-card r-f-8 align-item-center"
                      draggable
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDragEnter={(e) => handleDragEnter(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                    >
                      <div>
                        <FontAwesomeIcon
                          icon={faGripVertical}
                          className="r-f-12 txt-dark-grey MCO-all-scroll"
                        />
                      </div>
                      <div className="">{item.id}</div>
                      <div className="">{item.CoupName}</div>
                      <div className="d-flex justify-content-center align-item-center">
                        <div>{item.CoupDesc}</div>&nbsp;
                        <div>
                          <Icon
                            icon="ph:info"
                            className="txt-dark-grey c-pointer r-f-12"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center align-item-center">
                        <div>{item.AssociateOutlet}</div>&nbsp;
                        <div>
                          <Icon
                            icon="ph:info"
                            className="txt-dark-grey c-pointer r-f-12"
                          />
                        </div>
                      </div>
                      <div className="r-f-12 txt-dark-grey">
                        <FontAwesomeIcon icon={faEyeSlash} />
                      </div>
                      {item.status === "Active" ? (
                        <div className="MCO-active d-flex align-item-center justify-content-center ">
                          <GoDotFill />
                          {item.status}
                        </div>
                      ) : (
                        <div className="MCO-inactive d-flex align-item-center justify-content-center ">
                          <GoDotFill />
                          {item.status}
                        </div>
                      )}

                      <div>
                        <FontAwesomeIcon
                          icon={faPencil}
                          className="r-f-12 txt-dark-grey"
                        />
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faBoxArchive}
                          className="r-f-12 txt-dark-grey"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {newCouponVisible && (
        <div className="main-modal main-modal-open nCV">
          <div className="main-modal-content">
            <div className="d-flex space-between">
              <div className="r-f-14">New Coupon</div>
              <div>
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={closeNewCoupon}
                  className="r-f-14 c-pointer"
                />
              </div>
            </div>
            <div className="main-modal-content-inside">
              <div className="d-flex mt-5 g-30">
                <div>
                  <div className="txt-grey r-f-10">Coupon Name</div>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MCO-new-cop-tb"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <div className="txt-grey r-f-10">
                      Associated Outlet/brands
                    </div>
                    <div>
                      <select name="" id="" className="MCO-new-cop-dd">
                        <option value="">Multiple Outlets</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex mt-3 g-30">
                <div>
                  <div className="txt-grey r-f-10">Coupon Description</div>
                  <div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MCO-new-cop-tb"
                    />
                  </div>
                </div>
              </div>
              <div className="d-flex mt-3 g-30">
                <div>
                  <div className="txt-grey r-f-10">Offer Type</div>
                  <div>
                    <select
                      name=""
                      id=""
                      className="MCO-new-cop-dd"
                      onChange={handleSelectOFTypeChange}
                    >
                      <option value="FI">Free Item </option>
                      <option value="FA">Fixed Amount</option>
                      <option value="PER">Percentage</option>
                    </select>
                  </div>
                </div>
              </div>
              {selectedOFType === "FI" && (
                <div className="d-flex mt-3 g-30">
                  <div>
                    <div className="txt-grey r-f-10 d-flex align-item-center">
                      <div>Select a free item </div>&nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-cop-tb"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="txt-grey r-f-10 d-flex align-item-center">
                      <div>Min. Order Value (Rs.)</div>&nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-cop-tb"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="txt-grey r-f-10 d-flex align-item-center">
                      <div>User Limit</div> &nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <select name="" id="" className="MCO-new-cop-dd">
                        <option value="">One-time</option>
                        <option value="">Unlimited</option>
                        <option value="">Only New Users</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {selectedOFType === "FA" && (
                <div className="d-flex mt-3 g-30">
                  <div>
                    <div className="txt-grey r-f-10 d-flex align-item-center">
                      <div>Percentage Off</div> &nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-cop-tb"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="txt-grey r-f-10 d-flex align-item-center">
                      <div>Min. Order Value (Rs.)</div> &nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-cop-tb"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="txt-grey r-f-10 d-flex align-item-center">
                      <div>Cap Amount (Rs.)</div> &nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-cop-tb"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="txt-grey r-f-10 d-flex align-item-center">
                      <div>User Limit</div> &nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <select name="" id="" className="MCO-new-cop-dd">
                        <option value="">One-time</option>
                        <option value="">Unlimited</option>
                        <option value="">Only New Users</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {selectedOFType === "PER" && (
                <div className="d-flex mt-3 g-30">
                  <div>
                    <div className="txt-grey r-f-10 d-flex align-item-center">
                      <div>Amount (Rs.) </div>&nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-cop-tb"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="txt-grey r-f-10 d-flex align-item-center">
                      <div>Min. Order Value (Rs.) </div>&nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-cop-tb"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="txt-grey r-f-10 d-flex align-item-center">
                      <div>Cap Amount (Rs.) </div>&nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-cop-tb"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="txt-grey r-f-10 d-flex align-item-center">
                      <div>User Limit </div>&nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <select name="" id="" className="MCO-new-cop-dd">
                        <option value="">One-time</option>
                        <option value="">Unlimited</option>
                        <option value="">Only New Users</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              <div className="d-flex space-evenly mt-10" >
                <div className="p-button bg-purple" style={{padding:'1vw 4vw'}}>Submit</div>
              </div>
            </div>
            <div
              className="main-modal-content-inside-p"
              style={{ overflowY: "scroll", height: "68vh" }}
            >
              <div className="mt-2">
                <div className="r-f-10 txt-grey">Coupon Name</div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="MCO-new-coupon-tb"
                  />
                </div>
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-grey">Associated Outlet/brands</div>
                <div>
                  <select name="" id="" className="MCO-new-coupon-bb">
                    <option value="">Multiple Outlets</option>
                  </select>
                </div>
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-grey">Coupon Description</div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="MCO-new-coupon-tb"
                  />
                </div>
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-grey">Offer Type</div>
                <div>
                  <select
                    name=""
                    id=""
                    className="MCO-new-coupon-bb"
                    onChange={handleSelectOFTypeChange}
                  >
                    <option value="FI">Free Item </option>
                    <option value="FA">Fixed Amount</option>
                    <option value="PER">Percentage</option>
                  </select>
                </div>
              </div>
              {selectedOFType === "FI" && (
                <div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-grey d-flex align-item-center">
                      Select a free item&nbsp;{" "}
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-coupon-tb"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="r-f-10 txt-grey d-flex align-item-center">
                      Min. Order Value (Rs.)&nbsp;{" "}
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-coupon-tb"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="r-f-10 txt-grey d-flex align-item-center">
                      User Limit&nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <select
                        name=""
                        id=""
                        className="MCO-new-coupon-bb"
                        onChange={handleSelectOFTypeChange}
                      >
                        <option value="">One-time</option>
                        <option value="">Unlimited</option>
                        <option value="">Only New Users</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {selectedOFType === "FA" && (
                <div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-grey d-flex align-item-center">
                      Percentage Off&nbsp;{" "}
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-coupon-tb"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="r-f-10 txt-grey d-flex align-item-center">
                      Min. Order Value (Rs.)&nbsp;{" "}
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-coupon-tb"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="r-f-10 txt-grey d-flex align-item-center">
                      Cap Amount (Rs.)&nbsp;{" "}
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-coupon-tb"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="r-f-10 txt-grey d-flex align-item-center">
                      User Limit &nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <select
                        name=""
                        id=""
                        className="MCO-new-coupon-bb"
                        onChange={handleSelectOFTypeChange}
                      >
                        <option value="">One-time</option>
                        <option value="">Unlimited</option>
                        <option value="">Only New Users</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              {selectedOFType === "PER" && (
                <div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-grey d-flex align-item-center">
                      Amount (Rs.)&nbsp;{" "}
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-coupon-tb"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="r-f-10 txt-grey d-flex align-item-center">
                      Min. Order Value (Rs.)&nbsp;{" "}
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-coupon-tb"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="r-f-10 txt-grey d-flex align-item-center">
                      Cap Amount (Rs.)&nbsp;{" "}
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCO-new-coupon-tb"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <div className="r-f-10 txt-grey d-flex align-item-center">
                      User Limit &nbsp;
                      <Icon
                        icon="ph:info"
                        className="txt-dark-grey c-pointer r-f-12"
                      />
                    </div>
                    <div>
                      <select
                        name=""
                        id=""
                        className="MCO-new-coupon-bb"
                        onChange={handleSelectOFTypeChange}
                      >
                        <option value="">One-time</option>
                        <option value="">Unlimited</option>
                        <option value="">Only New Users</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}
              <div className="d-flex space-evenly mt-3">
                <div
                  className="p-button bg-purple"
                  style={{ padding: "3vw 10vw" }}
                >
                  Submit
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="MCO-mobile">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Users</div>
          <div className="d-flex g-10">
            <div
              className="p-button bg-purple d-flex justify-content-center align-item-center align-text-center"
              style={{ width: "80px", padding: "10px" }}
              onClick={openNewCoupon}
            >
              <div>New Coupon</div>
            </div>
          </div>
        </div>
        <div className="ADD-p-position"  style={{marginTop:'32vh'}}>
          <div className="ADD-p-container" style={{padding:'4vw'}}>
            <div className="d-flex space-evenly r-f-12">
              <div
                className={`${
                  activeTab === "Coupons"
                    ? "MCO-tab-button-active-p f-w-700"
                    : "MCO-tab-button-p"
                }`}
                onClick={() => handleTabClick("Coupons")}
              >
                Coupons
              </div>
              <div
                className={`${
                  activeTab === "Archive List"
                    ? "MCO-tab-button-active-p f-w-700"
                    : "MCO-tab-button-p"
                }`}
                onClick={() => handleTabClick("Archive List")}
              >
                Archive List
              </div>
            </div>
            <div className="mt-2">
              {activeTab === "Coupons" && (
                <div>
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDragEnter={(e) => handleDragEnter(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                      {...touchEvents}
                    >
                      <div className="mt-2"></div>
                      <div className="d-flex g-10 align-item-center">
                        <div style={{ width: "10vw" }}>
                          <FontAwesomeIcon
                            icon={faGripVertical}
                            className="r-f-20 txt-dark-grey MCO-all-scroll"
                          />
                        </div>
                        <div style={{ width: "100vw" }}>
                          <div className="d-flex" sty>
                            <div className="flex-1">
                              <div className="txt-grey r-f-8">Sort Order</div>
                              <div className="r-f-10">{item.id}</div>
                            </div>
                            <div className="flex-1">
                              <div className="txt-grey r-f-8">Coupon Name</div>
                              <div className="r-f-10">{item.CoupName}</div>
                            </div>
                          </div>
                          <div className="d-flex mt-1">
                            <div className="flex-1">
                              <div className="txt-grey r-f-8">
                                Associated Outlet
                              </div>
                              <div className="r-f-10 d-flex align-item-center">
                                {item.AssociateOutlet} &nbsp;
                                <Icon
                                  icon="ph:info"
                                  className="txt-dark-grey c-pointer r-f-12"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex mt-1">
                            <div className="flex-1">
                              <div className="txt-grey r-f-8">
                                Coupon Description
                              </div>
                              <div className="r-f-10 d-flex align-item-center">
                                {item.CoupDesc}&nbsp;
                                <Icon
                                  icon="ph:info"
                                  className="txt-dark-grey c-pointer r-f-12"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex mt-2 space-between">
                            {item.status === "Active" ? (
                              <div className="MCO-active r-f-8 d-flex align-item-center justify-content-center">
                                <GoDotFill />
                                {item.status}
                              </div>
                            ) : (
                              <div className="MCO-inactive r-f-8 d-flex align-item-center justify-content-center">
                                <GoDotFill />
                                {item.status}
                              </div>
                            )}
                            <div className="d-flex g-20">
                              <div>
                                <FontAwesomeIcon
                                  icon={faEyeSlash}
                                  className="r-f-12 txt-dark-grey"
                                />
                              </div>
                              <div>
                                <FontAwesomeIcon
                                  icon={faPencil}
                                  className="r-f-12 txt-dark-grey"
                                />
                              </div>
                              <div>
                                <FontAwesomeIcon
                                  icon={faBoxArchive}
                                  className="r-f-12 txt-dark-grey"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-2"></div>
                      <hr />
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "Archive List" && (
                <div>
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      draggable
                      onDragStart={(e) => handleDragStart(e, index)}
                      onDragOver={(e) => handleDragOver(e, index)}
                      onDragEnter={(e) => handleDragEnter(e, index)}
                      onDrop={(e) => handleDrop(e, index)}
                      {...touchEvents}
                    >
                      <div className="d-flex g-10 align-item-center">
                        <div style={{ width: "10vw" }}>
                          <FontAwesomeIcon
                            icon={faGripVertical}
                            className="r-f-20 txt-dark-grey MCO-all-scroll"
                          />
                        </div>
                        <div style={{ width: "100vw" }}>
                          <div className="d-flex" sty>
                            <div className="flex-1">
                              <div className="txt-grey r-f-8">Sort Order</div>
                              <div className="r-f-10">{item.id}</div>
                            </div>
                            <div className="flex-1">
                              <div className="txt-grey r-f-8">Coupon Name</div>
                              <div className="r-f-10">{item.CoupName}</div>
                            </div>
                          </div>
                          <div className="d-flex mt-1">
                            <div className="flex-1">
                              <div className="txt-grey r-f-8">
                                Associated Outlet
                              </div>
                              <div className="r-f-10 d-flex align-item-center">
                                {item.AssociateOutlet} &nbsp;
                                <Icon
                                  icon="ph:info"
                                  className="txt-dark-grey c-pointer r-f-12"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex mt-1">
                            <div className="flex-1">
                              <div className="txt-grey r-f-8">
                                Coupon Description
                              </div>
                              <div className="r-f-10 d-flex align-item-center">
                                {item.CoupDesc}&nbsp;
                                <Icon
                                  icon="ph:info"
                                  className="txt-dark-grey c-pointer r-f-12"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="d-flex mt-2 space-between">
                            {item.status === "Active" ? (
                              <div className="MCO-active r-f-8 d-flex align-item-center justify-content-center">
                                <GoDotFill />
                                {item.status}
                              </div>
                            ) : (
                              <div className="MCO-inactive r-f-8 d-flex align-item-center justify-content-center">
                                <GoDotFill />
                                {item.status}
                              </div>
                            )}
                            <div className="d-flex g-20">
                              <div>
                                <FontAwesomeIcon
                                  icon={faEyeSlash}
                                  className="r-f-12 txt-dark-grey"
                                />
                              </div>
                              <div>
                                <FontAwesomeIcon
                                  icon={faPencil}
                                  className="r-f-12 txt-dark-grey"
                                />
                              </div>
                              <div>
                                <FontAwesomeIcon
                                  icon={faBoxArchive}
                                  className="r-f-12 txt-dark-grey"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageCandO;
