import React, { useState } from "react";
import "./CreateNewOrder.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faTrash,
  faPlus,
  faMinus,
  faCircleInfo,
  faCopyright,
  faPlateWheat,
  faCircleArrowLeft,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import { Icon } from "@iconify/react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import LocationFilter from "../../LocationFilter";

const CreateNewOrder = () => {
  //Submit payment link
  const [selectedButtonAction, setSelectedButtonAction] = useState("");
  const [submitButtonVisible, setSubmitButtonVisible] = useState(false);

  const handleActionChange = (action) => {
    setSelectedButtonAction(action);
    setSubmitButtonVisible(true);
  };

  const handleOrderSubmit = () => {
    // Implement logic to handle order submission
    console.log("Order submitted");
  };

  const handlePaymentLinkSubmit = () => {
    // Implement logic to send payment link
    console.log("Payment link sent");
  };

  // Order Type
  const [activeTab, setActiveTab] = useState("online"); // Set 'Items' as the default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  // Go back
  const goBack = () => {
    window.history.back();
  };

  // addd to cart
  const [cartItems, setCartItems] = useState([]);
  const [selectedDeliveryCharge, setSelectedDeliveryCharge] = useState(null);
  const [selectedDiscountType, setSelectedDiscountType] =
    useState("PERCENTAGE");
  const [discountAmount, setDiscountAmount] = useState(0);
  const [selectedCoupon, setSelectedCoupon] = useState(null);
  const [discountPercentage, setDiscountPercentage] = useState(0);

  const deliveryCharges = [
    { label: "Free", value: 0 },
    { label: "35", value: 35 },
    { label: "45", value: 45 },
  ];
  const couponCodes = [
    { code: "ALLBITE", discountPercentage: 40 },
    { code: "SMOOTHIE", discountPercentage: 50 },
  ];

  const cartAddons = [
    { name: "Cart Addon 1", price: 5 },
    { name: "Cart Addon 2", price: 10 },
    { name: "Cart Addon 3", price: 15 },
  ];

  const products = [
    {
      category: "Combo",
      name: "Chicken burger + Fries + Coke + Chicken burger + Fries + Coke",
      price: 10,
      type: "nonveg",
      discription: "This is product1 1",
    },
    {
      category: "Combo",
      name: "Product 2",
      price: 20,
      type: "veg",
      discription: "This is product1 2",
    },
    {
      category: "Noodles",
      name: "Product 3",
      price: 230,
      type: "veg",
      discription:
        "This is product1 3 This is product1 3 This is product1 3 This is product1 3 This is product1 3 This is product1 3",
    },
  ];

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

  const [selectedCategory, setSelectedCategory] = useState("Combo");
  const [searchCategoryInput, setSearchCategoryInput] = useState("");
  const [searchMenuInput, setSearchMenuInput] = useState("");

  // Filter categories based on the search input
  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchCategoryInput.toLowerCase())
  );

  // Filter products based on the selected category and search input
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;
    const searchMatch = product.name
      .toLowerCase()
      .includes(searchMenuInput.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const handleCatTabChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCategorySearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchCategoryInput(inputValue);
  };

  const handleMenuSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchMenuInput(inputValue);
  };

  const addToCart = (productName) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product === productName
    );

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([
        ...cartItems,
        { product: productName, quantity: 1, selectedAddons: [] },
      ]);
    }
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const updateQuantity = (index, quantity) => {
    const newCartItems = [...cartItems];
    newCartItems[index] = { ...newCartItems[index], quantity };
    setCartItems(newCartItems);
  };

  const incrementQuantity = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index] = {
      ...newCartItems[index],
      quantity: newCartItems[index].quantity + 1,
    };
    setCartItems(newCartItems);
  };

  const decrementQuantity = (index) => {
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index] = {
        ...newCartItems[index],
        quantity: newCartItems[index].quantity - 1,
      };
      setCartItems(newCartItems);
    }
  };
  const getCouponDetails = (code) => {
    return couponCodes.find((coupon) => coupon.code === code);
  };
  const calculateDiscount = () => {
    const total = calculateTotal();

    if (selectedDiscountType === "PERCENTAGE") {
      const discount = total * (discountPercentage / 100);
      return discount;
    } else if (selectedDiscountType === "AMOUNT") {
      return discountAmount;
    } else if (selectedDiscountType === "COUPON") {
      const couponDetails = getCouponDetails(selectedCoupon);
      if (couponDetails) {
        const couponDiscount = total * (couponDetails.discountPercentage / 100);
        return couponDiscount;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  var tax = 0.025;

  const calculateTax = () => {
    const total = calculateTotal();
    const cgst = total * tax; // CGST at 2.5%
    const sgst = total * tax; // SGST at 2.5%
    return { cgst, sgst };
  };

  const addCharge = () => {
    const add = 10;
    return add;
  };

  const calculateGrandTotal = () => {
    const total = calculateTotal() - calculateDiscount();
    const deliveryCharge = selectedDeliveryCharge || 0;
    const taxCharges = calculateTax();
    const totalTax = taxCharges.cgst + taxCharges.sgst;
    return Math.max(total + deliveryCharge + totalTax + addCharge(), 0);
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const product = products.find((p) => p.name === item.product);
      const addonsTotal = item.selectedAddons.reduce((acc, addonName) => {
        const addon = cartAddons.find((a) => a.name === addonName);
        return acc + addon.price;
      }, 0);
      const productTotal = (product.price + addonsTotal) * item.quantity;
      total += productTotal;
      item.productTotal = productTotal;
    });
    return total;
  };

  const getAddonPrice = (addonName) => {
    const selectedAddon = cartAddons.find((addon) => addon.name === addonName);
    return selectedAddon ? selectedAddon.price : 0;
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPopupIndex, setSelectedPopupIndex] = useState(null);

  const openPopup = (index) => {
    setSelectedPopupIndex(index);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedPopupIndex(null);
    setIsPopupOpen(false);
  };

  // location and custoer details step
  const [showLocation, setShowLocation] = useState(true);
  const [showTextBox, setShowTextBox] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleLocationSubmit = () => {
    setShowLocation(false);
    setShowResult(true);
  };

  const handleOpenLocation = () => {
    setShowLocation(true);
    setShowTextBox(false);
    setShowResult(false);
    setLocationText("");
  };
  const handleOpenTextbox = () => {
    setShowTextBox(true);
    setShowResult(false);
  };

  // submit button
  const [selectedItem, setSelectedItem] = useState("Place An Order");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownItems = ["Place An Order", "Send Payment Link"];

  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedItem(selectedValue);
  };

  const handleButtonClick = () => {
    if (selectedItem) {
      // Perform an action with the selected item, e.g., send it to an API
      console.log(`Selected Item: ${selectedItem}`);
    }
  };

  return (
    <div>
      <div className="CO-page">
        <div className="CO-container-1">
          <p style={{ marginLeft: "1%", fontSize: "20px" }}>
            <span>
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                onClick={goBack}
                className="txt-black"
              />
            </span>{" "}
            Create Order
          </p>

          <div className="grid-2">
            <div>
              <div
                style={{
                  display: "flex",
                  gap: "1%",
                  marginLeft: "2%",
                }}
              >
                <button
                  className={
                    activeTab === "online" ? "active-filter" : "filter-button"
                  }
                  onClick={() => handleTabClick("online")}
                >
                  Home Delivery
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
            <div className="g-right d-flex" style={{ marginLeft: "55%" }}>
              {/* {activeTab === "online" ? (
                <div>
                  <button
                    onClick={handleOpenLocation}
                    className="p-button bg-purple"
                    style={{ width: "100px", marginRight: "20px" }}
                  >
                    <FontAwesomeIcon icon={faLocationDot} /> Location
                  </button>
                </div>
              ) : activeTab === "pickup" ? (
                <div>
                  <button
                    onClick={handleOpenLocation}
                    className="p-button bg-purple"
                    style={{ width: "100px", marginRight: "20px" }}
                  >
                    <FontAwesomeIcon icon={faLocationDot} /> Location
                  </button>
                </div>
              ) : activeTab === "table" ? (
                <div>
                  <button
                    onClick={handleOpenLocation}
                    className="p-button bg-purple"
                    style={{ width: "100px", marginRight: "20px" }}
                  >
                    <FontAwesomeIcon icon={faLocationDot} /> Location
                  </button>
                </div>
              ) : (
                <div></div>
              )} */}

             
            </div>
          </div>
        </div>
        {showLocation && (
          <div
          className="CO-location-first-step CO-location-first-step-open"
        >
          <div className="CO-location-first-step-content">
            
            <div className="grid-2">
              <p className="" style={{fontSize:'20px',marginLeft:'10px'}}>Outlet Filter</p>
              <FontAwesomeIcon icon={faX} onClick={goBack} style={{cursor:'pointer', marginTop:'5%', marginLeft:'95%'}} />
            </div>
            <div className="CO-location-first-step-content-inside">
            <LocationFilter />

              <button
                className="p-button bg-purple"
                onClick={handleLocationSubmit}
                style={{
                  marginTop: "20px",
                  marginLeft: "10px",
                }}
              >
                Next
              </button>
           


          </div>
          </div>
        </div>
        )}
        {showResult && (
          <div>
            {activeTab === "online" ? (
              <div className="">
                <div className="CO-side-1">
                  <input
                    className="CO-side-search"
                    placeholder="Search Category"
                    value={searchCategoryInput}
                    onChange={handleCategorySearchInputChange}
                  ></input>
                  <div className="CO-side-1-content">
                    {filteredCategories.map((category, index) => (
                      <div className="CO-cat-gap" key={index}>
                        <Link
                          className={`CO-cat-dec ${
                            selectedCategory === category
                              ? "txt-purple"
                              : "txt-black"
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
                  <input
                    className="CO-side-search"
                    placeholder="Search Items"
                    value={searchMenuInput}
                    onChange={handleMenuSearchInputChange}
                  ></input>

                  <div className="CO-side-2-content">
                    <div
                      className="CO-side-2-content-layer-1"
                      style={{ marginTop: "5px" }}
                    >
                      <div className="txt-purple CO-side-2-content-layer-1-header ">
                        <div>{selectedCategory}</div>
                      </div>
                      <div style={{ marginTop: "22px" }}>
                        {filteredProducts.map((product) => (
                          <div style={{ fontSize: "12px" }}>
                            <div className="CO-sde-2-content-left">
                              <div key={product.name}>
                                {product.name}
                                <div
                                  style={{
                                    width: "165%",
                                    height: "1px",
                                    backgroundColor: "#aeaeae",
                                    marginTop: "10px",
                                    marginBottom: "10px",
                                  }}
                                ></div>
                              </div>
                            </div>
                            <div className="CO-item-right-spacing">
                              <div className="t-tip">
                                <FontAwesomeIcon
                                  icon={faCircleInfo}
                                  className="txt-dark-grey f-16"
                                />
                                <div class="t-tip-text">
                                  {product.discription}
                                </div>
                              </div>
                            </div>
                            <div className="CO-item-right-spacing">
                              <div
                                className="f-14"
                                style={{
                                  width: "38px",
                                  float: "left",
                                  textAlign: "left",
                                  marginRight: "5px",
                                }}
                              >
                                ₹{product.price}{" "}
                              </div>
                            </div>
                            <div className="CO-item-right-spacing">
                              {product.type === "veg" ? (
                                <div
                                  className="txt-green"
                                  style={{ fontSize: "20px" }}
                                >
                                  <Icon icon="mdi:lacto-vegetarian" />
                                </div>
                              ) : (
                                <div
                                  className="txt-red"
                                  style={{ fontSize: "20px" }}
                                >
                                  <Icon icon="mdi:lacto-vegetarian" />
                                </div>
                              )}
                            </div>
                            <div className="CO-item-right-spacing">
                              <div
                                className="txt-dark-grey"
                                style={{ fontSize: "20px" }}
                              >
                                <FontAwesomeIcon
                                  icon={faPlus}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => addToCart(product.name)}
                                />
                              </div>
                            </div>
                          </div>
                        ))}
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
                      <div>
                        <input
                          type="text"
                          className="CO-side-search"
                          placeholder="Enter Phone Number"
                          style={{ marginTop: "15px" }}
                        ></input>
                        <input
                          type="text"
                          className="CO-side-search"
                          placeholder="Enter Name"
                          style={{ marginTop: "15px" }}
                        ></input>
                        <input
                          type="text"
                          className="CO-side-search"
                          placeholder="Enter Alternative Number"
                          style={{ marginTop: "15px" }}
                        ></input>
                        <textarea
                          class="CO-custom-input"
                          placeholder="Enter address"
                          style={{ marginTop: "15px", width: "92%" }}
                        ></textarea>
                        <select
                          class="CO-dropbtn txt-dark-grey"
                          name="languages"
                          id="lang"
                        >
                          <option value="" disabled="">
                            Choose payment method
                          </option>
                          <option value="javascript">C.O.D</option>
                          <option value="php">Online Payment</option>
                        </select>
                      </div>
                      <div></div>{" "}
                    </div>

                    {isPopupOpen && selectedPopupIndex !== null && (
                      <div
                        className="CO-addons-modal CO-addons-modal-open"
                        onClick={closePopup}
                      >
                        <div className="CO-addons-modal-content">
                          <div className="grid-2"></div>
                          <div className="CO-addons-container">
                            {cartAddons.map((addon, addonIndex) => (
                              <label key={addon.name}>
                                <div className="g-left">
                                  <input
                                    type="checkbox"
                                    checked={cartItems[
                                      selectedPopupIndex
                                    ].selectedAddons.includes(addon.name)}
                                    onChange={(e) => {
                                      const newCartItems = [...cartItems];
                                      const newSelectedAddons =
                                        newCartItems[selectedPopupIndex]
                                          .selectedAddons;
                                      if (e.target.checked) {
                                        newSelectedAddons.push(addon.name);
                                      } else {
                                        const addonIndex =
                                          newSelectedAddons.indexOf(addon.name);
                                        if (addonIndex !== -1) {
                                          newSelectedAddons.splice(
                                            addonIndex,
                                            1
                                          );
                                        }
                                      }
                                      newCartItems[
                                        selectedPopupIndex
                                      ].selectedAddons = newSelectedAddons;
                                      setCartItems(newCartItems);
                                    }}
                                  />{" "}
                                  {`${addon.name} (+${addon.price})`}
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {cartItems.length === 0 ? (
                      <p className="CO-no-orders f-20">No orders</p>
                    ) : (
                      <div className="CO-side-3-items">
                        <div className="CO-side-3-items-head">
                          <div style={{ float: "left", width: "6.7%" }}>No</div>
                          <div style={{ float: "left", width: "28%" }}>
                            Items
                          </div>
                          <div style={{ float: "left", width: "17.3%" }}>
                            Quantity
                          </div>
                          <div style={{ float: "left", width: "14%" }}>
                            Extras
                          </div>
                          <div style={{ float: "left", width: "10%" }}>
                            Price{" "}
                          </div>
                          <div style={{ float: "left", width: "11%" }}>
                            Amount
                          </div>
                          <div style={{ float: "left", width: "6%" }}>
                            Remove
                          </div>
                        </div>

                        {cartItems.map((item, index) => (
                          <div key={index}>
                            <div
                              style={{
                                fontSize: "12px",
                                marginTop: "40px",
                                marginLeft: "10px",
                              }}
                            >
                              <div
                                className="CO-sde-2-content-left"
                                style={{ width: "100%" }}
                              >
                                <p class="txt-black CO-item-no-spacing">
                                  {index + 1}
                                </p>
                                <p class="txt-black CO-item-name-spacing tooltip">
                                  {item.product}
                                  <div>
                                    {item.selectedAddons.length > 0 && (
                                      <div>
                                        <b>Addons:</b>

                                        {item.selectedAddons.map(
                                          (addonName) => (
                                            <li key={addonName}>
                                              {addonName} (+₹
                                              {
                                                cartAddons.find(
                                                  (addon) =>
                                                    addon.name === addonName
                                                ).price
                                              }
                                              )
                                            </li>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </div>
                                  <div
                                    style={{
                                      width: "350%",
                                      height: "1px",
                                      backgroundColor: "#aeaeae",
                                      marginTop: "20px",
                                      marginRight: "140px",
                                    }}
                                  ></div>
                                </p>
                                <p
                                  className="CO-item-no-spacing"
                                  style={{ width: "5%", textAlign: "center" }}
                                >
                                  {/* <button
                                  className="CO-btn-dec"
                                  type="button"
                                  onClick={() => decrementQuantity(index)}
                                >
                                  -
                                </button> */}
                                  <FontAwesomeIcon
                                    icon={faMinus}
                                    style={{ cursor: "pointer" }}
                                    onClick={() => decrementQuantity(index)}
                                  />
                                </p>
                                <p
                                  className="CO-item-no-spacing"
                                  style={{ width: "5%" }}
                                >
                                  <input
                                    type="text"
                                    class="form-control"
                                    value={item.quantity || 1}
                                    onChange={(e) =>
                                      updateQuantity(
                                        index,
                                        parseInt(e.target.value)
                                      )
                                    }
                                    className="CO-qty-input"
                                  />
                                </p>
                                <p
                                  className="CO-item-no-spacing"
                                  style={{ width: "5%" }}
                                >
                                  <FontAwesomeIcon
                                    icon={faPlus}
                                    style={{
                                      cursor: "pointer",
                                      marginLeft: "15%",
                                    }}
                                    onClick={() => incrementQuantity(index)}
                                  />
                                  {/* <button
                                  className="CO-btn-inc"
                                  type="button"
                                  onClick={() => incrementQuantity(index)}
                                >
                                  +
                                </button> */}
                                </p>
                                <p
                                  class="txt-black CO-item-extras-spacing"
                                  style={{ marginLeft: "5%", width: "1%" }}
                                >
                                  <FontAwesomeIcon
                                    icon={faCopyright}
                                    style={{ fontSize: "120%" }}
                                  />
                                </p>
                                &nbsp; &nbsp;
                                <p
                                  class="txt-black CO-item-extras-spacing"
                                  style={{ marginLeft: "5%", width: "5%" }}
                                >
                                  <FontAwesomeIcon
                                    icon={faPlateWheat}
                                    onClick={() => openPopup(index)}
                                    style={{ fontSize: "120%" }}
                                  />
                                </p>
                                <p
                                  class="txt-black CO-item-extras-spacing"
                                  style={{ marginLeft: "1%" }}
                                >
                                  ₹
                                  {
                                    products.find(
                                      (p) => p.name === item.product
                                    ).price
                                  }{" "}
                                </p>
                                <p
                                  class="txt-black CO-item-extras-spacing"
                                  style={{ marginLeft: "1%" }}
                                >
                                  ₹{item.productTotal}
                                </p>
                                <p
                                  class="txt-dark-grey CO-item-extras-spacing"
                                  style={{ marginLeft: "1%", width: "10%" }}
                                >
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => removeFromCart(index)}
                                    style={{ cursor: "pointer" }}
                                  />
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="CO-side-3-items-billing ">
                          <div
                            className="grid-2"
                            style={{ marginBottom: "10px" }}
                          >
                            <div className="g-left">
                              Discount{" "}
                              <select
                                style={{ width: "30%" }}
                                className="CO-dis-per-textbox"
                                value={selectedDiscountType}
                                onChange={(e) =>
                                  setSelectedDiscountType(e.target.value)
                                }
                              >
                                <option value={null}>Type</option>
                                <option value="PERCENTAGE">Percentage</option>
                                <option value="AMOUNT">Amount</option>
                                <option value="COUPON">Coupon</option>
                              </select>{" "}
                              {selectedDiscountType === "PERCENTAGE" && (
                                <input
                                  style={{ width: "25%" }}
                                  className="CO-dis-per-textbox"
                                  type="number"
                                  placeholder="Percentage"
                                  value={discountPercentage}
                                  onChange={(e) =>
                                    setDiscountPercentage(
                                      parseFloat(e.target.value)
                                    )
                                  }
                                />
                              )}
                              {selectedDiscountType === "AMOUNT" && (
                                <input
                                  style={{ width: "25%" }}
                                  className="CO-dis-per-textbox"
                                  type="number"
                                  placeholder="Amount"
                                  value={discountAmount}
                                  onChange={(e) =>
                                    setDiscountAmount(
                                      parseFloat(e.target.value)
                                    )
                                  }
                                />
                              )}
                              {selectedDiscountType === "COUPON" && (
                                <select
                                  style={{ width: "40%" }}
                                  className="CO-dis-per-textbox"
                                  value={selectedCoupon}
                                  onChange={(e) =>
                                    setSelectedCoupon(e.target.value)
                                  }
                                >
                                  <option value={null}>
                                    Select Coupon Code
                                  </option>
                                  {couponCodes.map((coupon) => (
                                    <option
                                      key={coupon.code}
                                      value={coupon.code}
                                    >
                                      {coupon.code} -{" "}
                                      {coupon.discountPercentage}%
                                    </option>
                                  ))}
                                </select>
                              )}
                            </div>
                            <div className="g-right CO-m-r">
                              - ₹{calculateDiscount().toFixed(2)}
                            </div>
                          </div>
                          <div
                            className="grid-2"
                            style={{ marginBottom: "10px" }}
                          >
                            <div className="g-left">
                              <div>
                                Delivery charges{" "}
                                {deliveryCharges.map((charge) => (
                                  <label key={charge.value}>
                                    <input
                                      type="radio"
                                      name="deliveryCharge"
                                      value={charge.value}
                                      checked={
                                        selectedDeliveryCharge === charge.value
                                      }
                                      onChange={(e) =>
                                        setSelectedDeliveryCharge(
                                          parseFloat(e.target.value)
                                        )
                                      }
                                    />
                                    {charge.label}
                                  </label>
                                ))}
                              </div>
                            </div>

                            <div className="g-right CO-m-r">
                              ₹
                              {selectedDeliveryCharge !== null
                                ? selectedDeliveryCharge.toFixed(2)
                                : "0.00"}
                            </div>
                          </div>
                          <div
                            className="grid-2"
                            style={{ marginBottom: "10px" }}
                          >
                            <div className="g-left">
                              Additional charges{" "}
                              <FontAwesomeIcon
                                icon={faCircleInfo}
                                className="txt-dark-grey"
                              />
                            </div>
                            <div className="g-right CO-m-r">
                              ₹{addCharge().toFixed(2)}
                            </div>
                          </div>
                          <div
                            className="grid-2"
                            style={{ marginBottom: "10px" }}
                          >
                            <div className="g-left t-tip">
                              Tax charges{" "}
                              <FontAwesomeIcon
                                icon={faCircleInfo}
                                className="txt-dark-grey"
                              />
                              <div className="t-tip-text">
                                <p>
                                  CGST (2.5%): ₹{calculateTax().cgst.toFixed(2)}
                                </p>
                                <p>
                                  SGST (2.5%): ₹{calculateTax().sgst.toFixed(2)}
                                </p>
                              </div>
                            </div>
                            <div className="g-right CO-m-r">
                              ₹
                              {(
                                calculateTax().cgst + calculateTax().sgst
                              ).toFixed(2)}
                            </div>
                          </div>
                          <div
                            className="grid-2"
                            style={{ marginBottom: "10px" }}
                          >
                            <div className="g-left">Round off</div>
                            <div className="g-right CO-m-r">
                              (₹{calculateGrandTotal().toFixed(2)}) ₹
                              {Math.round(calculateGrandTotal().toFixed(2))}
                            </div>
                          </div>
                          <div
                            style={{
                              width: "100%",
                              backgroundColor: "#aeaeae",
                              height: "1px",
                            }}
                          ></div>
                          <div className="grid-2" style={{ marginTop: "1%" }}>
                            <div className="g-left">
                              <b>Total</b>
                            </div>
                            <div className="g-right CO-m-r">
                              <b>
                                ₹{Math.round(calculateGrandTotal().toFixed(2))}
                              </b>
                            </div>
                          </div>
                          <div
                            className=""
                            style={{ marginTop: "1%", width: "97%" }}
                          >
                            <textarea
                              className="CO-custom-input"
                              placeholder="Special Request"
                            ></textarea>
                          </div>
                          <div
                            style={{
                              marginTop: "1%",
                              display: "flex",
                              gap: "5%",
                              marginBottom: "1%",
                            }}
                          >
                            <button className="p-outline-button">Cancel</button>
                            <div className="d-flex">
                              <button
                                className="p-button bg-purple"
                                style={{
                                  borderRadius: "30px 0px 0px 30px",
                                  width: "auto",
                                  height:'auto',
                                  padding: "10px 10px 10px 20px ",
                                }}
                                onClick={handleButtonClick}
                              >
                                {selectedItem}
                              </button>
                              <select
                                className="R-droptype"
                                style={{
                                  borderRadius: "0px 30px 30px 0px",
                                  width: "10%",
                                  outline: "none",
                                }}
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                onChange={handleDropdownChange}
                                value={selectedItem}
                              >
                                {dropdownItems.map((item) => (
                                  <option
                                    value={item}
                                    key={item}
                                    className="custom-option"
                                  >
                                    {item}
                                  </option>
                                ))}
                              </select>
                            </div>
                            {submitButtonVisible && (
                              <div className="submit-button">
                                {selectedButtonAction === "placeOrder" ? (
                                  <button
                                    className="p-button bg-purple"
                                    onClick={handleOrderSubmit}
                                  >
                                    Submit
                                  </button>
                                ) : (
                                  <button
                                    className="p-button bg-purple"
                                    onClick={handlePaymentLinkSubmit}
                                  >
                                    Submit
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : activeTab === "pickup" ? (
              <div className="CO-side-3">
                <div
                  className="CO-side-3-content"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <div className="CO-side-3-fields">
                    Enter Customer details
                    <div>
                      <input
                        type="text"
                        className="CO-side-search"
                        placeholder="Enter Phone Number"
                        style={{ marginTop: "15px" }}
                      ></input>
                      <input
                        type="text"
                        className="CO-side-search"
                        placeholder="Enter Name"
                        style={{ marginTop: "15px" }}
                      ></input>
                      <input
                        type="text"
                        className="CO-side-search"
                        placeholder="Enter Alternative Number"
                        style={{ marginTop: "15px" }}
                      ></input>
                      <textarea
                        class="CO-custom-input"
                        placeholder="Enter address"
                        style={{ marginTop: "15px", width: "92%" }}
                      ></textarea>
                      <select
                        class="CO-dropbtn txt-dark-grey"
                        name="languages"
                        id="lang"
                      >
                        <option value="" disabled="">
                          Choose payment method
                        </option>
                        <option value="javascript">Cash</option>
                        <option value="php">Online Payment</option>
                      </select>
                    </div>
                    <div></div>{" "}
                  </div>
                  {isPopupOpen && selectedPopupIndex !== null && (
                    <div
                      className="CO-addons-modal CO-addons-modal-open"
                      onClick={closePopup}
                    >
                      <div className="CO-addons-modal-content">
                        <div className="grid-2"></div>
                        <div className="CO-addons-container">
                          {cartAddons.map((addon, addonIndex) => (
                            <label key={addon.name}>
                              <div className="g-left">
                                <input
                                  type="checkbox"
                                  checked={cartItems[
                                    selectedPopupIndex
                                  ].selectedAddons.includes(addon.name)}
                                  onChange={(e) => {
                                    const newCartItems = [...cartItems];
                                    const newSelectedAddons =
                                      newCartItems[selectedPopupIndex]
                                        .selectedAddons;
                                    if (e.target.checked) {
                                      newSelectedAddons.push(addon.name);
                                    } else {
                                      const addonIndex =
                                        newSelectedAddons.indexOf(addon.name);
                                      if (addonIndex !== -1) {
                                        newSelectedAddons.splice(addonIndex, 1);
                                      }
                                    }
                                    newCartItems[
                                      selectedPopupIndex
                                    ].selectedAddons = newSelectedAddons;
                                    setCartItems(newCartItems);
                                  }}
                                />{" "}
                                {`${addon.name} (+${addon.price})`}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {cartItems.length === 0 ? (
                    <p className="CO-no-orders f-20">No orders</p>
                  ) : (
                    <div className="CO-side-3-items">
                      <div className="CO-side-3-items-billing ">
                        <div
                          className="grid-2"
                          style={{ marginBottom: "10px" }}
                        >
                          <div className="g-left">
                            Discount{" "}
                            <select
                              className="CO-dis-per-textbox"
                              value={selectedDiscountType}
                              onChange={(e) =>
                                setSelectedDiscountType(e.target.value)
                              }
                            >
                              <option value={null}>Select Discount Type</option>
                              <option value="PERCENTAGE">Percentage</option>
                              <option value="AMOUNT">Amount</option>
                              <option value="COUPON">Coupon</option>
                            </select>
                            {selectedDiscountType === "PERCENTAGE" && (
                              <input
                                className="CO-dis-per-textbox"
                                type="number"
                                placeholder="Percentage"
                                value={discountPercentage}
                                onChange={(e) =>
                                  setDiscountPercentage(
                                    parseFloat(e.target.value)
                                  )
                                }
                              />
                            )}
                            {selectedDiscountType === "AMOUNT" && (
                              <input
                                className="CO-dis-per-textbox"
                                type="number"
                                placeholder="Amount"
                                value={discountAmount}
                                onChange={(e) =>
                                  setDiscountAmount(parseFloat(e.target.value))
                                }
                              />
                            )}
                            {selectedDiscountType === "COUPON" && (
                              <select
                                className="CO-dis-per-textbox"
                                value={selectedCoupon}
                                onChange={(e) =>
                                  setSelectedCoupon(e.target.value)
                                }
                              >
                                <option value={null}>Select Coupon Code</option>
                                {couponCodes.map((coupon) => (
                                  <option key={coupon.code} value={coupon.code}>
                                    {coupon.code} - {coupon.discountPercentage}%
                                    Off
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>
                          <div className="g-right CO-m-r">
                            - ₹{calculateDiscount().toFixed(2)}
                          </div>
                        </div>

                        <div
                          className="grid-2"
                          style={{ marginBottom: "10px" }}
                        >
                          <div className="g-left">
                            Aditional charges{" "}
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className="txt-dark-grey"
                            />
                          </div>
                          <div className="g-right CO-m-r">
                            ₹{addCharge().toFixed(2)}
                          </div>
                        </div>
                        <div
                          className="grid-2"
                          style={{ marginBottom: "10px" }}
                        >
                          <div className="g-left t-tip">
                            Tax charges{" "}
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className="txt-dark-grey"
                            />
                            <div className="t-tip-text">
                              <p>
                                CGST (2.5%): ₹{calculateTax().cgst.toFixed(2)}
                              </p>
                              <p>
                                SGST (2.5%): ₹{calculateTax().sgst.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="g-right CO-m-r">
                            ₹
                            {(
                              calculateTax().cgst + calculateTax().sgst
                            ).toFixed(2)}
                          </div>
                        </div>
                        <div
                          className="grid-2"
                          style={{ marginBottom: "10px" }}
                        >
                          <div className="g-left">Round off</div>
                          <div className="g-right CO-m-r">
                            (₹{calculateGrandTotal().toFixed(2)}) ₹
                            {Math.round(calculateGrandTotal().toFixed(2))}
                          </div>
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
                            <b>
                              ₹{Math.round(calculateGrandTotal().toFixed(2))}
                            </b>
                          </div>
                        </div>
                        <div className="grid-2" style={{ marginTop: "7px" }}>
                          <textarea
                            className="CO-custom-input"
                            placeholder="Special Request"
                          ></textarea>
                        </div>
                        <div
                          style={{
                            marginTop: "10px",
                            display: "flex",
                            gap: "10px",
                            bottom: "0",
                          }}
                        >
                          <button className="p-outline-button">Cancel</button>
                          <select
                            className="OR-droptype"
                            style={{ width: "170px" }}
                            id="actions"
                            value={selectedButtonAction}
                            onChange={(e) => handleActionChange(e.target.value)}
                          >
                            <option value="">Select an action</option>
                            <option value="placeOrder">Place Order</option>
                            <option value="sendPaymentLink">
                              Send Payment Link
                            </option>
                          </select>
                          {submitButtonVisible && (
                            <div className="submit-button">
                              {selectedButtonAction === "placeOrder" ? (
                                <button
                                  className="p-button bg-purple"
                                  onClick={handleOrderSubmit}
                                >
                                  Submit
                                </button>
                              ) : (
                                <button
                                  className="p-button bg-purple"
                                  onClick={handlePaymentLinkSubmit}
                                >
                                  Submit
                                </button>
                              )}
                            </div>
                          )}
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
                              marginLeft: "-46px",
                            }}
                          >
                            <div>Addons</div>
                            <div>Price </div>
                            <div>Amount</div>
                            <div>Remove</div>
                          </div>
                        </div>
                      </div>

                      {cartItems.map((item, index) => (
                        <div key={index}>
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
                              <p class="txt-black CO-item-no-spacing">
                                {index + 1}
                              </p>
                              <p class="txt-black CO-item-name-spacing tooltip">
                                {item.product}
                                <div>
                                  {item.selectedAddons.length > 0 && (
                                    <div>
                                      <b>Addons:</b>

                                      {item.selectedAddons.map((addonName) => (
                                        <li key={addonName}>
                                          {addonName} (+₹
                                          {
                                            cartAddons.find(
                                              (addon) =>
                                                addon.name === addonName
                                            ).price
                                          }
                                          )
                                        </li>
                                      ))}
                                    </div>
                                  )}
                                </div>
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
                                  onClick={() => decrementQuantity(index)}
                                >
                                  -
                                </button>
                                <span></span>
                                <input
                                  type="text"
                                  class="form-control"
                                  value={item.quantity || 1}
                                  onChange={(e) =>
                                    updateQuantity(
                                      index,
                                      parseInt(e.target.value)
                                    )
                                  }
                                  className="CO-qty-input"
                                />

                                <button
                                  className="CO-btn-dec"
                                  type="button"
                                  onClick={() => incrementQuantity(index)}
                                >
                                  +
                                </button>
                              </p>
                              <p
                                class="txt-black CO-item-extras-spacing"
                                style={{ marginLeft: "24px" }}
                              >
                                <FontAwesomeIcon
                                  icon={faCopyright}
                                  style={{ fontSize: "18px" }}
                                />
                                &nbsp; &nbsp;
                                <FontAwesomeIcon
                                  icon={faPlateWheat}
                                  onClick={() => openPopup(index)}
                                  style={{ fontSize: "18px" }}
                                />
                              </p>
                              <p
                                class="txt-black CO-item-extras-spacing"
                                style={{ marginLeft: "3px" }}
                              >
                                ₹
                                {
                                  products.find((p) => p.name === item.product)
                                    .price
                                }{" "}
                              </p>
                              <p
                                class="txt-black CO-item-extras-spacing"
                                style={{ marginLeft: "7px" }}
                              >
                                ₹{item.productTotal}
                              </p>
                            </div>
                            <div className="CO-sde-2-content-right">
                              <p
                                class="txt-dark-grey CO-item-extras-spacing"
                                style={{ marginLeft: "-10px" }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  onClick={() => removeFromCart(index)}
                                  style={{ cursor: "pointer" }}
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : activeTab === "table" ? (
              <div className="CO-side-3">
                <div
                  className="CO-side-3-content"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <div className="CO-side-3-fields">
                    Enter Customer details
                    <div>
                      <input
                        type="text"
                        className="CO-side-search"
                        placeholder="Enter Table Number"
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
                        placeholder="Enter Name"
                        style={{ marginTop: "15px" }}
                      ></input>
                      <input
                        type="text"
                        className="CO-side-search"
                        placeholder="Enter Alternative Number"
                        style={{ marginTop: "15px" }}
                      ></input>
                      <textarea
                        class="CO-custom-input"
                        placeholder="Enter address"
                        style={{ marginTop: "15px", width: "92%" }}
                      ></textarea>
                      <select
                        class="CO-dropbtn txt-dark-grey"
                        name="languages"
                        id="lang"
                      >
                        <option value="" disabled="">
                          Choose payment method
                        </option>
                        <option value="javascript">C.O.D</option>
                        <option value="php">Online Payment</option>
                      </select>
                    </div>
                    <div></div>{" "}
                  </div>
                  {isPopupOpen && selectedPopupIndex !== null && (
                    <div
                      className="CO-addons-modal CO-addons-modal-open"
                      onClick={closePopup}
                    >
                      <div className="CO-addons-modal-content">
                        <div className="grid-2"></div>
                        <div className="CO-addons-container">
                          {cartAddons.map((addon, addonIndex) => (
                            <label key={addon.name}>
                              <div className="g-left">
                                <input
                                  type="checkbox"
                                  checked={cartItems[
                                    selectedPopupIndex
                                  ].selectedAddons.includes(addon.name)}
                                  onChange={(e) => {
                                    const newCartItems = [...cartItems];
                                    const newSelectedAddons =
                                      newCartItems[selectedPopupIndex]
                                        .selectedAddons;
                                    if (e.target.checked) {
                                      newSelectedAddons.push(addon.name);
                                    } else {
                                      const addonIndex =
                                        newSelectedAddons.indexOf(addon.name);
                                      if (addonIndex !== -1) {
                                        newSelectedAddons.splice(addonIndex, 1);
                                      }
                                    }
                                    newCartItems[
                                      selectedPopupIndex
                                    ].selectedAddons = newSelectedAddons;
                                    setCartItems(newCartItems);
                                  }}
                                />{" "}
                                {`${addon.name} (+${addon.price})`}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  {cartItems.length === 0 ? (
                    <p className="CO-no-orders f-20">No orders</p>
                  ) : (
                    <div className="CO-side-3-items">
                      <div className="CO-side-3-items-billing ">
                        <div
                          className="grid-2"
                          style={{ marginBottom: "10px" }}
                        >
                          <div className="g-left">
                            Discount{" "}
                            <select
                              className="CO-dis-per-textbox"
                              value={selectedDiscountType}
                              onChange={(e) =>
                                setSelectedDiscountType(e.target.value)
                              }
                            >
                              <option value={null}>Select Discount Type</option>
                              <option value="PERCENTAGE">Percentage</option>
                              <option value="AMOUNT">Amount</option>
                              <option value="COUPON">Coupon</option>
                            </select>
                            {selectedDiscountType === "PERCENTAGE" && (
                              <input
                                className="CO-dis-per-textbox"
                                type="number"
                                placeholder="Percentage"
                                value={discountPercentage}
                                onChange={(e) =>
                                  setDiscountPercentage(
                                    parseFloat(e.target.value)
                                  )
                                }
                              />
                            )}
                            {selectedDiscountType === "AMOUNT" && (
                              <input
                                className="CO-dis-per-textbox"
                                type="number"
                                placeholder="Amount"
                                value={discountAmount}
                                onChange={(e) =>
                                  setDiscountAmount(parseFloat(e.target.value))
                                }
                              />
                            )}
                            {selectedDiscountType === "COUPON" && (
                              <select
                                className="CO-dis-per-textbox"
                                value={selectedCoupon}
                                onChange={(e) =>
                                  setSelectedCoupon(e.target.value)
                                }
                              >
                                <option value={null}>Select Coupon Code</option>
                                {couponCodes.map((coupon) => (
                                  <option key={coupon.code} value={coupon.code}>
                                    {coupon.code} - {coupon.discountPercentage}%
                                    Off
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>
                          <div className="g-right CO-m-r">
                            - ₹{calculateDiscount().toFixed(2)}
                          </div>
                        </div>

                        <div
                          className="grid-2"
                          style={{ marginBottom: "10px" }}
                        >
                          <div className="g-left">
                            Aditional charges{" "}
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className="txt-dark-grey"
                            />
                          </div>
                          <div className="g-right CO-m-r">
                            ₹{addCharge().toFixed(2)}
                          </div>
                        </div>
                        <div
                          className="grid-2"
                          style={{ marginBottom: "10px" }}
                        >
                          <div className="g-left t-tip">
                            Tax charges{" "}
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className="txt-dark-grey"
                            />
                            <div className="t-tip-text">
                              <p>
                                CGST (2.5%): ₹{calculateTax().cgst.toFixed(2)}
                              </p>
                              <p>
                                SGST (2.5%): ₹{calculateTax().sgst.toFixed(2)}
                              </p>
                            </div>
                          </div>
                          <div className="g-right CO-m-r">
                            ₹
                            {(
                              calculateTax().cgst + calculateTax().sgst
                            ).toFixed(2)}
                          </div>
                        </div>
                        <div
                          className="grid-2"
                          style={{ marginBottom: "10px" }}
                        >
                          <div className="g-left">Round off</div>
                          <div className="g-right CO-m-r">
                            (₹{calculateGrandTotal().toFixed(2)}) ₹
                            {Math.round(calculateGrandTotal().toFixed(2))}
                          </div>
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
                            <b>
                              ₹{Math.round(calculateGrandTotal().toFixed(2))}
                            </b>
                          </div>
                        </div>
                        <div className="grid-2" style={{ marginTop: "7px" }}>
                          <textarea
                            className="CO-custom-input"
                            placeholder="Special Request"
                          ></textarea>
                        </div>
                        <div
                          style={{
                            marginTop: "10px",
                            display: "flex",
                            gap: "10px",
                          }}
                        >
                          <button className="p-outline-button">Cancel</button>
                          <select
                            className="OR-droptype"
                            style={{ width: "170px" }}
                            id="actions"
                            value={selectedButtonAction}
                            onChange={(e) => handleActionChange(e.target.value)}
                          >
                            <option value="">Select an action</option>
                            <option value="placeOrder">Place Order</option>
                            <option value="sendPaymentLink">
                              Send Payment Link
                            </option>
                          </select>
                          {submitButtonVisible && (
                            <div className="submit-button">
                              {selectedButtonAction === "placeOrder" ? (
                                <button
                                  className="p-button bg-purple"
                                  onClick={handleOrderSubmit}
                                >
                                  Submit
                                </button>
                              ) : (
                                <button
                                  className="p-button bg-purple"
                                  onClick={handlePaymentLinkSubmit}
                                >
                                  Submit
                                </button>
                              )}
                            </div>
                          )}
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
                              marginLeft: "-46px",
                            }}
                          >
                            <div>Extras</div>
                            <div>Price </div>
                            <div>Amount</div>
                            <div>Remove</div>
                          </div>
                        </div>
                      </div>

                      {cartItems.map((item, index) => (
                        <div key={index}>
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
                              <p class="txt-black CO-item-no-spacing">
                                {index + 1}
                              </p>
                              <p class="txt-black CO-item-name-spacing tooltip">
                                {item.product}
                                <div>
                                  {item.selectedAddons.length > 0 && (
                                    <div>
                                      <b>Addons:</b>

                                      {item.selectedAddons.map((addonName) => (
                                        <li key={addonName}>
                                          {addonName} (+₹
                                          {
                                            cartAddons.find(
                                              (addon) =>
                                                addon.name === addonName
                                            ).price
                                          }
                                          )
                                        </li>
                                      ))}
                                    </div>
                                  )}
                                </div>
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
                                  onClick={() => decrementQuantity(index)}
                                >
                                  -
                                </button>
                                <span></span>
                                <input
                                  type="text"
                                  class="form-control"
                                  value={item.quantity || 1}
                                  onChange={(e) =>
                                    updateQuantity(
                                      index,
                                      parseInt(e.target.value)
                                    )
                                  }
                                  className="CO-qty-input"
                                />

                                <button
                                  className="CO-btn-dec"
                                  type="button"
                                  onClick={() => incrementQuantity(index)}
                                >
                                  +
                                </button>
                              </p>
                              <p
                                class="txt-black CO-item-extras-spacing"
                                style={{ marginLeft: "24px" }}
                              >
                                <FontAwesomeIcon
                                  icon={faCopyright}
                                  style={{ fontSize: "18px" }}
                                />
                                &nbsp; &nbsp;
                                <FontAwesomeIcon
                                  icon={faPlateWheat}
                                  onClick={() => openPopup(index)}
                                  style={{ fontSize: "18px" }}
                                />
                              </p>
                              <p
                                class="txt-black CO-item-extras-spacing"
                                style={{ marginLeft: "3px" }}
                              >
                                ₹
                                {
                                  products.find((p) => p.name === item.product)
                                    .price
                                }{" "}
                              </p>
                              <p
                                class="txt-black CO-item-extras-spacing"
                                style={{ marginLeft: "7px" }}
                              >
                                ₹{item.productTotal}
                              </p>
                            </div>
                            <div className="CO-sde-2-content-right">
                              <p
                                class="txt-dark-grey CO-item-extras-spacing"
                                style={{ marginLeft: "-4px" }}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  onClick={() => removeFromCart(index)}
                                  style={{ cursor: "pointer" }}
                                />
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateNewOrder;
