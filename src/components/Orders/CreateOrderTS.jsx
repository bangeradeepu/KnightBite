import { useState, useEffect } from "react";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { Icon } from "@iconify/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faMapLocationDot,
  faLocationDot,
  faX,
  faTrash,
  faPlus,
  faMinus,
  faCircleInfo,
  faCopyright,
  faPlateWheat,
  faCircleArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./CreateOrderTS.css";
import LocationFilter from "../../LocationFilter";

// filter use style
// Filter
const useStyles = makeStyles({
  root: {},
  icon: {},
  redIcon: {},
  selectedOptionsContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: -59,
    marginLeft: "5px",
  },
  selectedOption: {
    background: "#fffff",
    border: "1px solid #ccc",
    borderRadius: 20,
    padding: "8px 10px",
    marginRight: 5,
    marginLeft: 5,
    display: "flex",
    alignItems: "center",
  },
  closeIcon: {
    marginLeft: 5,
    cursor: "pointer",
  },
  scrollbar: {
    height: "80px", // Adjust the scroll height as needed
    width: "100%", // Adjust the width as needed
    overflowY: "auto",
    scrollbarWidth: "thin", // For Firefox
    "&::-webkit-scrollbar": {
      width: "8px", // For Chrome, Safari, and Opera
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ccc", // Customize the thumb color
      borderRadius: "4px", // Rounder corners for the thumb
    },
  },

  selectedOptionsRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "nowrap", // Set to 'nowrap' initially to prevent wrapping
    marginTop: "10px",
    marginLeft: "10px", // Adjust as needed
  },
});
// ... (import statements and makeStyles definition)

const availableSubcomponents = {
  Mangalore: [
    "Knight Bite",
    "Pancake Bite",
    "Cake Bite",
    "rome Bite",
    "ome Bite",
    "rdfzfzvvvvvvvvvuuuuuuuuuuuuuuuu",
    "fzfzdfzf",
    "jsois",
  ],
  Bangalore: [
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
    "rdfzfz",
    "fzfzdfzf",
    "jsois",
  ],
  Hubli: [
    "Sandwich Bite",
    "Waffle Bite",
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
  ],
  Pune: [
    "Sandwich Bite",
    "Waffle Bite",
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
  ],
  Udupi: [
    "Sandwich Bite",
    "Waffle Bite",
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
  ],
  Manipal: [
    "Sandwich Bite",
    "Waffle Bite",
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
  ],
  Hydrabad: [
    "Sandwich Bite",
    "Waffle Bite",
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
  ],
  Belgum: [
    "Sandwich Bite",
    "Waffle Bite",
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
  ],
  Kerala: [
    "Sandwich Bite",
    "Waffle Bite",
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
  ],
  Mumbai: [
    "Sandwich Bite",
    "Waffle Bite",
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
  ],
  Mysore: [
    "Sandwich Bite",
    "Waffle Bite",
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
  ],
  Madikeri: [
    "Sandwich Bite",
    "Waffle Bite",
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
  ],
  Goa: [
    "Sandwich Bite",
    "Waffle Bite",
    "Chicken Bite",
    "Masala Bite",
    "rome Bite",
    "ome Bite",
  ],
};

const CreateOrderTS = () => {
  // filter
  //filter
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedLocation, setSelectedLocation] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const [extraMenusOpen, setExtraMenusOpen] = React.useState({});
  const [popupDropdownOpen, setPopupDropdownOpen] = useState(false);

  const handleClick = (event) => {
    setPopupDropdownOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setPopupDropdownOpen(false);
    setAnchorEl(null);
  };

  useEffect(() => {
    // Disable main scroll when the popup dropdown is open
    if (popupDropdownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Enable main scroll when the popup dropdown is closed
    }

    // Clean up the effect
    return () => {
      document.body.style.overflow = "auto"; // Make sure to reset the scroll behavior when the component unmounts
    };
  }, [popupDropdownOpen]);

  const handleLocationSelect = (location) => {
    if (location === "Select All") {
      const allLocations = Object.keys(availableSubcomponents);
      if (selectedLocation.length === allLocations.length) {
        setSelectedLocation([]);
        setSelectedOptions({});
      } else {
        setSelectedLocation(allLocations);
        const allOptions = allLocations.reduce((acc, loc) => {
          acc[loc] = availableSubcomponents[loc];
          return acc;
        }, {});
        setSelectedOptions(allOptions);
      }
    } else {
      if (!selectedLocation.includes(location)) {
        setSelectedLocation([...selectedLocation, location]);

        // Automatically select and display the subcomponents of the selected location
        const subcomponents = availableSubcomponents[location];
        setSelectedOptions((prevState) => ({
          ...prevState,
          [location]: subcomponents,
        }));

        handleExtraMenuOpen(location); // Automatically open the extra menu when a location is selected
      } else {
        setSelectedLocation(
          selectedLocation.filter((selected) => selected !== location)
        );
        setSelectedOptions((prevState) => ({
          ...prevState,
          [location]: [], // Clear subcomponents when location is deselected
        }));
        handleExtraMenuClose(location); // Automatically close the extra menu when a location is deselected
      }
      handleClose();
    }
  };

  const handleExtraMenuOpen = (location) => {
    setExtraMenusOpen((prevState) => ({
      ...prevState,
      [location]: true,
    }));
  };

  const handleExtraMenuClose = (location) => {
    setExtraMenusOpen((prevState) => ({
      ...prevState,
      [location]: false,
    }));
  };

  const handleOptionSelect = (location, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [location]: prevState[location]?.includes(option)
        ? prevState[location].filter((selected) => selected !== option)
        : [...(prevState[location] || []), option],
    }));
  };

  const generateLocationLabel = () => {
    const numSelected = selectedLocation.length;
    if (numSelected === 0) {
      return "Location";
    } else if (numSelected === 1) {
      return selectedLocation[0];
    } else {
      return ` ${numSelected} Locations`;
    }
  };

  const handleOptionDeselect = (location, option) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [location]: prevState[location].filter((selected) => selected !== option),
    }));

    const allSubcomponentsDeselected =
      selectedOptions[location]?.length === 1 &&
      option === selectedOptions[location][0];

    if (allSubcomponentsDeselected) {
      setSelectedLocation(
        selectedLocation.filter((selected) => selected !== location)
      );
    }

    // Close the extra menu when deselecting an option
    handleExtraMenuClose(location);
  };

  const handleSelectAll = () => {
    const allLocations = Object.keys(availableSubcomponents);
    if (selectedLocation.length === allLocations.length) {
      setSelectedLocation([]);
      setSelectedOptions({});
    } else {
      setSelectedLocation(allLocations);
      const allOptions = allLocations.reduce((acc, location) => {
        acc[location] = availableSubcomponents[location];
        return acc;
      }, {});
      setSelectedOptions(allOptions);
    }
  };

  React.useEffect(() => {
    const openMenusCopy = { ...extraMenusOpen };
    for (const location of selectedLocation) {
      if (selectedOptions[location]?.length === 0) {
        openMenusCopy[location] = false;
      }
    }
    setExtraMenusOpen(openMenusCopy);
  }, [selectedOptions]);

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

  const goBack = () => {
    window.history.back();
  };
  // Order Type
  const [activeTab, setActiveTab] = useState("online"); // Set 'Items' as the default active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
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
      category: "Combo",
      name: "Product 3",
      price: 20,
      type: "veg",
      discription: "This is product1 2",
    },
    {
      category: "Combo",
      name: "Product 4",
      price: 20,
      type: "veg",
      discription: "This is product1 2",
    },
    {
      category: "Combo",
      name: "Product 5",
      price: 20,
      type: "veg",
      discription: "This is product1 2",
    },
    {
      category: "Combo",
      name: "Product 6",
      price: 20,
      type: "veg",
      discription: "This is product1 2",
    },
    {
      category: "Combo",
      name: "Product 7",
      price: 20,
      type: "veg",
      discription: "This is product1 2",
    },
    {
      category: "Noodles",
      name: "Product 5",
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
  const [locationText, setLocationText] = useState("");
  const [inputText, setInputText] = useState("");
  const [showLocation, setShowLocation] = useState(true);
  const [showTextBox, setShowTextBox] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleLocationSubmit = () => {
    setShowLocation(false);
    setShowTextBox(true);
  };

  const handleTextBoxSubmit = () => {
    setShowResult(true);
    setShowTextBox(false);
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
    <div className="TS-open">
      <div className="TS-top grid-3">
        <div className="d-flex g-40">
          <span>
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              onClick={goBack}
              className="txt-black"
              style={{ fontSize: "30px", marginTop: "5px" }}
            />
          </span>
          <div className="d-flex g-10">
            <img src="kb_logo.png" alt="" width={"45px"} height={"45px"} />

            <p className="f-18" style={{ marginTop: "10px" }}>
              Knight Bite
            </p>
          </div>
        </div>
        <div
          className="d-flex g-10"
          style={{
            marginLeft: "320px",
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

        <div className="d-flex g-10" style={{ marginLeft: "300px" }}>
          {activeTab === "online" ? (
            <div>
              <button
                onClick={handleOpenLocation}
                className="p-button bg-purple"
                style={{ width: "100px", marginRight: "20px" }}
              >
                <FontAwesomeIcon icon={faLocationDot} /> Location
              </button>
              <button
                onClick={handleOpenTextbox}
                className="p-button bg-purple"
                style={{ width: "150px", marginRight: "20px" }}
              >
                Customer Details
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
              <button
                onClick={handleOpenTextbox}
                className="p-button bg-purple"
                style={{ width: "150px", marginRight: "20px" }}
              >
                Customer Details
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
              <button
                onClick={handleOpenTextbox}
                className="p-button bg-purple"
                style={{ width: "150px", marginRight: "20px" }}
              >
                Customer Details
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {showLocation && (
        <div className="TS-location-first-step TS-location-first-step-open">
          <div className="TS-location-first-step-content">
            <div className="grid-2">
              <p className="" style={{ fontSize: "20px", marginLeft: "10px" }}>
                Outlet Filter
              </p>
              <FontAwesomeIcon
                icon={faX}
                onClick={goBack}
                style={{
                  cursor: "pointer",
                  marginTop: "5%",
                  marginLeft: "95%",
                }}
              />
            </div>
            <div className="TS-location-first-step-content-inside">
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

      <div>
        {activeTab === "online" ? (
          <div>
            {showTextBox && (
              <div className="TS-second-step">
                <div>Customer details</div>
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
                  style={{ marginTop: "15px", width: "90%" }}
                ></textarea>
                <select
                  class="CO-dropbtn txt-dark-grey"
                  name="languages"
                  id="lang"
                  style={{ width: "93%" }}
                >
                  <option value="" disabled="">
                    Choose payment method
                  </option>
                  <option value="javascript">C.O.D</option>
                  <option value="php">Online Payment</option>
                </select>
                <button
                  className="p-button bg-purple"
                  onClick={handleTextBoxSubmit}
                  style={{ marginTop: "15px" }}
                >
                  Submit
                </button>
              </div>
            )}
            {showResult && (
              <div>
                <div className="TS-side-1">
                  <div className="TS-side-1-top">
                    <p className="f-16">Categories</p>
                    <input
                      className="TS-side-search"
                      placeholder="Search Category"
                      value={searchCategoryInput}
                      onChange={handleCategorySearchInputChange}
                    ></input>
                  </div>
                  <div
                    className="TS-side-1-content d-flex g-10"
                    style={{ flexWrap: "wrap" }}
                  >
                    {filteredCategories.map((category, index) => (
                      <div
                        key={index}
                        className={`TS-side-1-content-box ${
                          selectedCategory === category
                            ? "bg-purple txt-white"
                            : " "
                        } `}
                        onClick={() => handleCatTabChange(category)}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="TS-side-2-up">
                  <div className="TS-side-2-up-2">
                    <p className="f-16">{selectedCategory}</p>
                    <input
                      className="TS-side-search"
                      placeholder="Search Menu"
                      style={{ width: "96%" }}
                      value={searchMenuInput}
                      onChange={handleMenuSearchInputChange}
                    ></input>
                  </div>
                  <div
                    className="TS-side-2-content d-flex g-10"
                    style={{ flexWrap: "wrap" }}
                  >
                    {filteredProducts.map((product) => (
                      <div
                        className="TS-side-2-content-box"
                        key={product.name}
                        onClick={() => addToCart(product.name)}
                      >
                        <div className="TS-side-2-content-box-up">
                          {product.name}
                        </div>
                        <div className="grid-3" style={{ width: "100%" }}>
                          <div className="t-tip">
                            <FontAwesomeIcon
                              icon={faCircleInfo}
                              className="txt-dark-grey f-16"
                              style={{ fontSize: "16px" }}
                            />
                            <div class="t-tip-text">{product.discription}</div>
                          </div>
                          {product.type === "veg" ? (
                            <div
                              className=" g-left txt-green"
                              style={{ fontSize: "20px" }}
                            >
                              <Icon icon="mdi:lacto-vegetarian" />
                            </div>
                          ) : (
                            <div
                              className="g-left txt-red"
                              style={{ fontSize: "20px" }}
                            >
                              <Icon icon="mdi:lacto-vegetarian" />
                            </div>
                          )}

                          <div className="g-right"> ₹{product.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {isPopupOpen && selectedPopupIndex !== null && (
                  <div
                    className="CO-addons-modal CO-addons-modal-open"
                    onClick={closePopup}
                  >
                    <div
                      className="CO-addons-modal-content"
                      style={{
                        marginTop: "10%",
                        fontSize: "16px",
                        width: "200px",
                        marginLeft: "83%",
                      }}
                    >
                      <div className="grid-2"></div>
                      <div className="CO-addons-container">
                        {cartAddons.map((addon, addonIndex) => (
                          <label key={addon.name}>
                            <div className="g-left">
                              <input
                                style={{
                                  transform: "scale(1.5)",
                                  marginTop: "15px",
                                }}
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
                <div className="TS-side-3">
                  {cartItems.length === 0 ? (
                    <p
                      className="CO-no-orders f-20"
                      style={{ marginTop: "55%", marginLeft: "42%" }}
                    >
                      No orders
                    </p>
                  ) : (
                    <div style={{ height: "90%" }}>
                      <div
                        className="CO-side-3-items TS-slider"
                        style={{ width: "100%", height: "47%" }}
                      >
                        <div
                          className="CO-side-3-items-head"
                          style={{ width: "32%" }}
                        >
                          <div
                            style={{
                              float: "left",
                              width: "6%",
                              marginLeft: "1.5%",
                            }}
                          >
                            No
                          </div>
                          <div style={{ float: "left", width: "33%" }}>
                            Items
                          </div>
                          <div style={{ float: "left", width: "16.5%" }}>
                            Quantity
                          </div>
                          <div style={{ float: "left", width: "16.7%" }}>
                            Extras
                          </div>
                          <div style={{ float: "left", width: "11%" }}>
                            Price{" "}
                          </div>
                          <div style={{ float: "left", width: "14%" }}>
                            Amount
                          </div>
                          <div style={{ float: "left", width: "0%" }}>
                            Remove
                          </div>
                        </div>

                        {cartItems.map((item, index) => (
                          <div key={index}>
                            <div
                              style={{
                                fontSize: "16px",
                                marginTop: "5%",
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
                                <p
                                  class="txt-black CO-item-name-spacing tooltip"
                                  style={{ width: "28%" }}
                                >
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
                                      width: "330%",
                                      height: "1px",
                                      backgroundColor: "#aeaeae",
                                      marginTop: "5%",
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
                                    style={{ fontSize: "16px" }}
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
                                  style={{ marginLeft: "2%" }}
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
                                  style={{ marginLeft: "3%" }}
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
                                  style={{ marginLeft: "2%" }}
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

                      <div
                        className="CO-side-3-items-billing "
                        style={{
                          width: "40%",
                          marginTop: "2%",
                          fontSize: "16px",
                          height: "50%",
                        }}
                      >
                        <div
                          className="grid-2"
                          style={{ marginBottom: "10px" }}
                        >
                          <div className="g-left">
                            Discount{" "}
                            <select
                              style={{ width: "30%", fontSize: "16px" }}
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
                                style={{
                                  width: "25%",
                                  fontSize: "16px",
                                  margin: "0px",
                                }}
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
                                style={{ width: "25%", fontSize: "16px" }}
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
                                style={{ width: "40%", fontSize: "16px" }}
                                className="CO-dis-per-textbox"
                                value={selectedCoupon}
                                onChange={(e) =>
                                  setSelectedCoupon(e.target.value)
                                }
                              >
                                <option value={null}>Select Coupon</option>
                                {couponCodes.map((coupon) => (
                                  <option key={coupon.code} value={coupon.code}>
                                    {coupon.code} - {coupon.discountPercentage}%
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
                                    style={{ transform: "scale(1.5)" }}
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
                                  {charge.label}{" "}
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
                            <div
                              className="t-tip-text"
                              style={{ width: "200px" }}
                            >
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
                        <div className="grid-2" style={{ marginTop: "5%" }}>
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
                          <div className="d-flex">
                            <button
                              className="p-button bg-purple"
                              style={{
                                borderRadius: "30px 0px 0px 30px",
                                width: "auto",
                                padding: "10px 10px 30px 20px ",
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
            )}
          </div>
        ) : activeTab === "pickup" ? (
          <div></div>
        ) : activeTab === "table" ? (
          <div></div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default CreateOrderTS;
