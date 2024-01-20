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
  faArrowLeft,
  faBars,
  faXmark,
  faAddressCard,
  faTriangleExclamation,
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
      name: "Chicken burger + Coke +Fries + Cheese",
      price: 10,
      type: "nonveg",
      discription: "This is product1 1",
    },
    {
      category: "Combo",
      name: "Chicken burger + Sprite + Fries + Cheese",
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

  const addToCart = (productName, selectedAddons) => {
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.product === productName &&
        JSON.stringify(item.selectedAddons) === JSON.stringify(selectedAddons)
    );

    if (existingItemIndex !== -1) {
      // If the item is already in the cart, increment its quantity
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      // If the item is not in the cart, add it with quantity 1
      setCartItems([
        ...cartItems,
        {
          product: productName,
          quantity: 1,
          selectedAddons: [...selectedAddons],
        },
      ]);
    }
  };
  const clearCart = () => {
    // Clear the cart by setting it to an empty array
    setCartItems([]);
  };
  const removeFromCart = (productName, selectedAddons) => {
    // Find the item in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.product === productName &&
        JSON.stringify(item.selectedAddons) === JSON.stringify(selectedAddons)
    );

    if (existingItemIndex !== -1) {
      // If the item is in the cart and its quantity is greater than 1, decrement the quantity
      const newCartItems = [...cartItems];
      if (newCartItems[existingItemIndex].quantity > 1) {
        newCartItems[existingItemIndex].quantity -= 1;
        setCartItems(newCartItems);
      } else {
        // If the quantity is 1 or less, remove the item from the cart
        newCartItems.splice(existingItemIndex, 1);
        setCartItems(newCartItems);
      }
    }
  };

  // Determine whether the item is in the cart
  const isItemInCart = (productName, selectedAddons) => {
    return cartItems.some(
      (item) =>
        item.product === productName &&
        JSON.stringify(item.selectedAddons) === JSON.stringify(selectedAddons)
    );
  };

  // Get the quantity of the item in the cart
  const getQuantityInCart = (productName, selectedAddons) => {
    const item = cartItems.find(
      (item) =>
        item.product === productName &&
        JSON.stringify(item.selectedAddons) === JSON.stringify(selectedAddons)
    );

    return item ? item.quantity : 0;
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
    } else {
      newCartItems.splice(index, 1); // Remove the item from the cart
    }
    setCartItems(newCartItems);
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

  // const getAddonPrice = (addonName) => {
  //   const selectedAddon = cartAddons.find((addon) => addon.name === addonName);
  //   return selectedAddon ? selectedAddon.price : 0;
  // };

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

  // location and customer details step
  const [showLocation, setShowLocation] = useState(true);
  const [showTextBox, setShowTextBox] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleLocationSubmit = () => {
    setShowLocation(false);
    setShowResult(true);
  };
  const handleTextBoxSubmit = () => {
    setShowResult(true);
    setShowTextBox(false);
    setShowLocation(false);
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

  //phone location and customer details step
  const [pshowLocation, setpShowLocation] = useState(true);
  const [pshowTextBox, setpShowTextBox] = useState(false);
  const [pshowResult, setpShowResult] = useState(false);

  const phandleLocationSubmit = () => {
    setpShowLocation(false);
    setpShowResult(false);
    setpShowTextBox(true);
  };
  const phandleTextBoxSubmit = () => {
    setpShowResult(true);
    setpShowTextBox(false);
    setpShowLocation(false);
  };
  const phandleOpenLocation = () => {
    setpShowLocation(true);
    setpShowTextBox(false);
    setpShowResult(false);
    setLocationText("");
  };
  const phandleOpenTextbox = () => {
    setpShowTextBox(true);
    setpShowResult(false);
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

//  Compliment checked
  const [checkedItems, setCheckedItems] = useState([]); 
  const handleToggleItem = (index) => {
    const updatedCheckedItems = [...checkedItems];
    if (updatedCheckedItems.includes(index)) {
      updatedCheckedItems.splice(updatedCheckedItems.indexOf(index), 1);
    } else {
      updatedCheckedItems.push(index);
    }
    setCheckedItems(updatedCheckedItems);
  };


  // Go back to orders
  const navigate = useNavigate();
  const backToOrders = () => {
    navigate("/orders");
  };

  // Open cart view
  const [cartView, setcartView] = useState(false);

  const opencartView = () => {
    setcartView(true);
  };

  const closecartView = () => {
    setcartView(false);
  };

   // Open cat modal
   const [catmodal, setcatmodal] = useState(false);

   const opencatmodal = () => {
    setcatmodal(true);
   };
 
   const closecatmodal = () => {
    setcatmodal(false);
   };

  //  Temp store phone customer details
  const [formData, setFormData] = useState({
    phoneNumber: "",
    customerName: "",
    alternativePhoneNumber: "",
    customerAddress: "",
    paymentMethod: "",
    specialRequest: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (
    <div>
      <div className="CO-page">
        <div className="CO-desktop-view">
        <div className="CO-container-1 d-flex space-between align-item-center">
        <div className="r-f-14">
            <span>
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                onClick={goBack}
                className="txt-black"
              />
            </span>{" "}
            Create Order
            </div>
            <div className="d-flex g-10">
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
              <div className="CO-background d-flex">
                <div className="CO-side-1">
                  <input
                    className="CO-side-search"
                    placeholder="Search Category"
                    value={searchCategoryInput}
                    onChange={handleCategorySearchInputChange}
                  ></input>
                  <div className="CO-side-1-content c-f-12">
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
                  <div className="txt-purple c-f-12" style={{marginTop:'1.5vw'}}>{selectedCategory}</div>
                  <div className="CO-side-2-content c-f-12">
                  {filteredProducts.map((product) => (
                    <div className="CO-item-card d-flex space-between align-item-center">
                    <div>
                    {product.name} {" "}
                    <div className="t-tip">
                                <FontAwesomeIcon
                                  icon={faCircleInfo}
                                  className="txt-dark-grey r-f-12"
                                />
                                <div class="t-tip-text r-f-10">
                                  {product.discription}
                                </div>
                              </div>
                    </div>
                    <div className="d-flex g-10">
                    
                              <div>

                            
                              ₹{product.price}
                              </div>
                              <div>
                              {product.type === "veg" ? (
                                <div
                                  className="txt-green"
                                 
                                >
                                  <Icon icon="mdi:lacto-vegetarian" />
                                </div>
                              ) : (
                                <div
                                  className="txt-red"
                                
                                >
                                  <Icon icon="mdi:lacto-vegetarian" />
                                </div>
                              )}
                              </div>
                              <div>
                              <FontAwesomeIcon
                                  icon={faPlus}
                                  className="c-pointer txt-dark-grey r-f-14"
                                  onClick={() => addToCart(product.name, [])}
                                />
                              </div>
                    </div>
                    </div>
                  ))}
                  </div>
                </div>
                <div className="CO-side-3 d-flex g-10">
                  
                  <div className="CO-side-3-left-box">
                      <div className="d-flex r-f-14">
                        Customer Details
                      </div>
                      <div className="CO-side-3-left-box-scroll">
                      <br />
                      <input type="text" name="" className="t-box" id="" placeholder="Enter Phone number" />
                      <br />
                      <br />
                      <input type="text" name="" className="t-box" id="" placeholder="Enter Name" />
                      <br />
                      <br />
                      <input type="text" name="" className="t-box" id="" placeholder="Enter Alternative number" />
                      <br />
                      <br />
                      <textarea name="" id="" cols="0" rows="0" className="CO-custom-input"placeholder="Enter address"></textarea>
                      
                      <br />
                      <br />
                      <select name="" className="t-box" id="" style={{width:'98%'}}>
                        <option value="" selected disabled>Choose payment method</option>
                        <option value="COD">COD</option>
                        <option value="online">Online</option>
                      </select>
                      <br />
                      <br />
                      <textarea name="" id="" cols="0" rows="0" className="CO-custom-input"placeholder="Enter Special request"></textarea>
                      </div>
                      

                  </div>
                  {cartItems.length === 0 ? (
                    <div className="CO-side-3-right-box-no-orders">
                      <div>No Orders</div>
                    </div>
                    ) : (
                  <div className="CO-side-3-right-box">
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
                    <div className="CO-side-3-right-box-cart-header">
                    <div className="d-header r-f-10">
                      <div style={{textAlign:'left'}}>No</div>
                      <div style={{textAlign:'left'}}>Items</div>
                      <div>Quantity</div>
                      <div>Extras</div>
                      <div>Price</div>
                      <div>Amount</div>
                      <div>Remove</div>
                    </div>
                    </div>
                    
                    <div className="CO-side-3-right-box-cart">
                    {cartItems.map((item, index) => (
                      <div className="d-header r-f-8" style={{fontWeight:'200'}}>
                      <div style={{textAlign:'left'}}> {index + 1}</div>
                      <div style={{textAlign:'left'}}>{item.product}
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
                      </div>
                      <div className="d-flex align-item-center">
                      <FontAwesomeIcon
                                  icon={faMinus}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => decrementQuantity(index)}
                                  className="r-f-12 CO-btn-dec"
                                />
                                 <input
                                  type="text"
                                  value={item.quantity || 1}
                                  onChange={(e) =>
                                    updateQuantity(
                                      index,
                                      parseInt(e.target.value)
                                    )
                                  }
                                  className="CO-qty-input r-f-12"
                                  disabled
                                />
                                 <FontAwesomeIcon
                                  icon={faPlus}
                                  style={{
                                    cursor: "pointer",
                                    
                                  }}
                                  className="r-f-12 CO-btn-inc"
                                  onClick={() => incrementQuantity(index)}
                                />
                      </div>
                      <div className="d-flex space-evenly align-item-center">
                                  <FontAwesomeIcon
                                    key={index}
                                    icon={faCopyright}
                                    className={`c-pointer r-f-12 ${checkedItems.includes(index) ? 'txt-orange' : 'txt-black'}`}
                                    onClick={() => handleToggleItem(index)}
                                  />
                                 <FontAwesomeIcon
                                  icon={faPlateWheat}
                                  onClick={() => openPopup(index)}
                                  className="c-pointer CO-addons-btn r-f-12"
                                /></div>
                      <div className="d-flex space-evenly align-item-center">₹ {
                                  products.find(
                                    (p) => p.name === item.product
                                  ).price
                                }{" "}</div>
                      <div className="d-flex space-evenly align-item-center">
                      ₹{item.productTotal}
                      </div>
                      <div className="d-flex space-evenly align-item-center">
                      <FontAwesomeIcon
                                  icon={faTrash}
                                  onClick={() => removeFromCart(index)}
                                  className="c-pointer CO-trash r-f-12"
                                />
                      </div>
                      </div>
                    ))}
                    </div>
                    <div className="CO-side-3-right-box-calc r-f-12">
                        <div className="d-flex space-between">
                          <div>
                            <div className="d-flex g-20">
                              <div>Discount</div>
                              <div className="d-flex g-10">
                              <select
                                style={{ width: "35%" }}
                                className="CO-dis-per-textbox"
                                value={selectedDiscountType}
                                onChange={(e) =>
                                  setSelectedDiscountType(e.target.value)
                                }
                              >
                                <option value={null} disabled>Select Type</option>
                                <option value="PERCENTAGE">Percentage</option>
                                <option value="AMOUNT">Amount</option>
                                <option value="COUPON">Coupon</option>
                              </select>
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
                                    setDiscountAmount(parseFloat(e.target.value))
                                  }
                                />
                              )}
                              {selectedDiscountType === "COUPON" && (
                                <select
                                  style={{ width: "50%" }}
                                  className="CO-dis-per-textbox"
                                  value={selectedCoupon}
                                  onChange={(e) =>
                                    setSelectedCoupon(e.target.value)
                                  }
                                >
                                  <option value={null} disabled>Select Coupon Code</option>
                                  {couponCodes.map((coupon) => (
                                    <option key={coupon.code} value={coupon.code}>
                                      {coupon.code} - {coupon.discountPercentage}%
                                    </option>
                                  ))}
                                </select>
                              )}
                              </div>
                            </div>
                          </div>
                          <div></div>
                          <div>
                            <div>
                            - ₹{calculateDiscount().toFixed(2)}
                            </div>
                          </div>
                        </div>
                        <div className="d-flex space-between" style={{marginTop:'0.5vw'}}>
                          <div className="d-flex g-10">
                            <div>Delivery Charges</div>
                            <div>
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
                          <div>
                          ₹
                              {selectedDeliveryCharge !== null
                                ? selectedDeliveryCharge.toFixed(2)
                                : "0.00"}
                          </div>
                        </div>
                        <div className="d-flex space-between" style={{marginTop:'0.5vw'}}>
                          <div className="d-flex">
                            <div>Aditional Charges  <FontAwesomeIcon
                                icon={faCircleInfo}
                                className="txt-dark-grey"
                              />
                              </div>
                          </div>
                          <div>
                          ₹{addCharge().toFixed(2)}
                          </div>
                        </div>
                        <div className="d-flex space-between" style={{marginTop:'0.5vw'}}>
                        <div className="d-flex t-tip">
                            <div>Tax Charges  <FontAwesomeIcon
                                icon={faCircleInfo}
                                className="txt-dark-grey"
                              />
                              <div className="t-tip-text r-f-8">
                                <p>
                                  CGST (2.5%): ₹{calculateTax().cgst.toFixed(2)}
                                </p>
                                <p>
                                  SGST (2.5%): ₹{calculateTax().sgst.toFixed(2)}
                                </p>
                              </div>
                              </div>
                          </div>
                          <div>
                          ₹
                              {(calculateTax().cgst + calculateTax().sgst).toFixed(
                                2
                              )}
                          </div>
                        </div>
                        <div className="d-flex space-between" style={{marginTop:'0.5vw'}}>
                        <div className="d-flex">
                            <div>Round off</div>
                          </div>
                          <div>
                          (₹{calculateGrandTotal().toFixed(2)}) ₹
                              {Math.round(calculateGrandTotal().toFixed(2))}
                          </div>
                        </div>
                        <hr />
                        <div className="d-flex space-between" style={{marginTop:'0.5vw'}}>
                        <div className="d-flex">
                            <div><b>Total</b></div>
                          </div>
                          <div>
                          <b>₹{Math.round(calculateGrandTotal().toFixed(2))}</b>
                          </div>
                        </div>

                    </div>
                    <div className="d-flex g-30">
                    <button className="p-outline-button" style={{padding:'0.6vw 2vw'}}>Cancel</button>
                    <div>
                    <button
                              className="multi-btn"
                              onClick={handleButtonClick}
                            >
                              {selectedItem}
                            </button>
                            <select
                              className="multi-btn-drpdown"
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
                    
                    </div>
                  </div>
                  )}
                </div>
              </div>
            ) : activeTab === "pickup" ? (
              <div>

              </div>
            ) : activeTab === "table" ? (
              <div></div>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
      
      <div className="CO-phone-view">
      {pshowLocation && (
        <div>
          <div
                className="main-modal main-modal-open"
              >
                <div className="main-modal-content">
                <div className="d-flex">
                  <div>Outlet Filter</div>
                </div>
                <button onClick={phandleLocationSubmit}>Next</button>
                  <div className="main-modal-content-inside">
                  </div>
                </div>
              </div>
          
        </div>
      )}
        {activeTab === "online" ? (
          <div>
                <div className="CO-phone-view-items">
                <div className="r-f-20 d-flex align-item-center space-between">
                  <div className="d-flex align-item-center">
                  <FontAwesomeIcon icon={faArrowLeft} onClick={backToOrders} /> &nbsp;Create Orders
                  </div>
                </div>
                <br />
                <div className="d-flex space-between align-item-center">
                <div className="d-flex g-10">
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
                  <div className="d-flex g-20 r-f-20 align-item-center">
                  <FontAwesomeIcon icon={faLocationDot} className="txt-purple" onClick={phandleOpenLocation}/>
                  <FontAwesomeIcon icon={faAddressCard} className="txt-purple" onClick={phandleOpenTextbox} />
                  </div>
                </div>
                <hr />
                {pshowTextBox && (
              <div>
                <div className="r-f-14">Customer details</div>
                <br />
                <input
                  type="text"
                  name="phoneNumber"
                  className="t-box"
                  placeholder="Enter Customer Phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                <br />
                <br />
                <input type="text" name="customerName" className="t-box" id="" placeholder="Enter Customer name" value={formData.customerName}
               onChange={handleInputChange} />
                <br />
                <br />
                <input type="text" name="" className="t-box" id="" placeholder="Enter Alternative phone number" />
                <br />
                <br />
                <textarea name="" id="" cols="30" rows="3" className="t-box" style={{borderRadius:'5vw'}} placeholder="Enter customer address"></textarea>
                <br />
                <br />
                <select name="" id="" className="t-box" style={{width:'100%',backgroundColor:'white'}}>
                  <option value="" selected disabled>Select payment method</option>
                  <option value="COD">COD</option>
                  <option value="online">Online</option>
                </select>
                <br />
                <br />
                <textarea name="" id="" cols="30" rows="3" className="t-box" style={{borderRadius:'5vw'}} placeholder="Enter Special request"></textarea>
                <br />
                <br />
                <div className="d-flex space-evenly">
                <button onClick={phandleTextBoxSubmit} className="p-button bg-purple" style={{padding:'3vw 8vw'}}>Next</button>
                </div>
              </div>
             )}
                  
                  {pshowResult && (
                  <div>
                <div className="d-flex space-between align-item-center">
                  <div className="r-f-14">{selectedCategory}</div>
                  <button className="CO-phone-cart-btn" onClick={opencatmodal}>Categories</button>
                </div>
                <br />
                <input type="text" name="" className="t-box" placeholder="Search Items" id="" 
                value={searchMenuInput}
                onChange={handleMenuSearchInputChange}
                />
                <br />
                <br />
                <div className="CO-scroll r-f-12">
                {filteredProducts.map((product) => (
                  <div className="i-card">
                    <div className="d-flex space-between">
                    <div className="i-card-left">
                    <div className="d-flex" style={{gap:'1vw'}}><div>
                    {product.type === "veg" ? (
                      <div>
                        <Icon icon="mdi:lacto-vegetarian" className="txt-green" />
                      </div>
                      ) : (
                        <div>
                          <Icon icon="mdi:lacto-vegetarian" className="txt-red" />
                        </div>
                         )}

                      </div><div>{product.name} </div></div>
                    <div className="d-flex" style={{gap:'3vw'}}>
                    <div>
                        &nbsp;&nbsp;
                      </div>
                    <div className="">₹{product.price}</div>
                    </div>
                    
                    </div>
                    <div>
                    {isItemInCart(product.name, []) ? (
                      <div className="d-flex align-item-center">
                        <button
                          className="CO-plusminus"
                          onClick={() => removeFromCart(product.name, [])}
                        >
                          -
                        </button>
                        <span className="CO-plusminus-qty">{getQuantityInCart(product.name, [])}</span>
                        <button
                          className="CO-plusminus"
                          onClick={() => addToCart(product.name, [])}
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        className="CO-phone-add-btn"
                        onClick={() => addToCart(product.name, [])}
                      >
                        ADD 
                      </button>
      )}
                    </div>
                    </div>
                    <br />
                    <div className="d-flex" style={{gap:'3vw'}}>
                      <div>
                        &nbsp;&nbsp;
                      </div>
                    <div className="txt-grey r-f-10">{product.discription}</div>
                    </div>
                  
                  </div>
                  ))}
                
                  
                </div>
                {cartItems.length === 0 ? (
                <div>

                </div>
                  ) : (
                    <div className="CO-phone-bottom d-flex space-between r-f-14 align-item-center" onClick={opencartView}>
                  <div>
                  <b>{cartItems.length}</b> Items
                  </div>
                  <div>
                  <button className="CO-phone-cart-btn" onClick={opencartView}>View cart</button>
                  </div>
                  </div>
                  )}
                  
                    
                  {cartView && (
                    <div>
                     {cartItems.length === 0 ? (
                     <div className="CO-cart-view-no-orders">
                      <div style={{textAlign:'center'}}>
                        <div style={{fontSize:'30vw'}}className="txt-red">
                        <FontAwesomeIcon icon={faTriangleExclamation} />
                        </div>
                      <div className="r-f-20">
                      No orders
                      </div>
                      <br />
                      <br />
                      <button className="CO-phone-add-btn" onClick={closecartView}>Add Items</button>
                      </div>
                     
                      
                     </div>
                    ) : (
                    <div className="CO-cart-view">
                    {isPopupOpen && selectedPopupIndex !== null && (
                      <div
                      className="main-modal main-modal-open"
                      onClick={closePopup}
                    >
                      <div className="main-modal-content" style={{width:'70vw',marginTop:'30vw',height:'50vh'}}>
                        <div className="d-flex r-f-14">
                        Addons
                        </div>
                       
                        <div className="p-main-modal-content-inside" style={{height:'45vh'}}>
                        {cartAddons.map((addon, addonIndex) => (
                              <label key={addon.name}>
                                <div className="">
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
                      <div className="d-flex space-between align-item-center">
                      <div className="d-flex align-item-center r-f-20">
                    <FontAwesomeIcon icon={faArrowLeft} onClick={closecartView} /> &nbsp;Orders
                    </div>
                      <div className="d-flex g-20 r-f-20 align-item-center">
                    <FontAwesomeIcon icon={faLocationDot} className="txt-purple" onClick={phandleOpenLocation}/>
                    <FontAwesomeIcon icon={faAddressCard} className="txt-purple" onClick={phandleOpenTextbox} />
                    </div>
                      </div>
                      <hr />
                      <div className="p-main-modal-content-inside">
                      {cartItems.map((item, index) => (
                      <div className="i-card">
                      <div className="d-flex space-between">
                      <div className="i-card-left r-f-12">
                      <div className="d-flex"><div></div><div>{item.product}
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
                                   </div></div>
                      <br />
                      
                      </div>
                      <div className="r-f-12">
                      ₹{item.productTotal}
                      </div>
                      </div>
                      
                      <div className="d-flex space-between align-item-center">
                      <div className="d-flex align-item-center" style={{gap:'3vw'}}>

                        <div className="d-flex align-item-center">
                        <button
                          className="CO-plusminus"
                          onClick={() => decrementQuantity(index)}
                        >
                          -
                        </button>
                        <span className="CO-plusminus-qty" style={{padding:'0.451vw 2.5vw'}}>{item.quantity || 1}</span>
                        <button
                          className="CO-plusminus"
                          onClick={() => incrementQuantity(index)}
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="r-f-12"><FontAwesomeIcon icon={faXmark} />&nbsp;₹{
                                  products.find(
                                    (p) => p.name === item.product
                                  ).price
                                }</div>
                      </div>
                      <div className="r-f-14 d-flex g-20">
                      <FontAwesomeIcon icon={faCopyright} 
                      className={`c-pointer ${checkedItems.includes(index) ? 'txt-orange' : 'txt-black'}`}
                                    onClick={() => handleToggleItem(index)}
                      />
                      <FontAwesomeIcon icon={faPlateWheat} onClick={() => openPopup(index)}
                      />
                      </div>
                      </div>
                    </div>
                    ))}
                    <br />
                    <div className="CO-phone-billing">
                    <div className="d-flex space-between">
                    <div>
                    <div className="r-f-10 txt-grey">Discount</div>
                    <div className="d-flex g-10">
                    <select
                                style={{ width: "35%" }}
                                className="CO-dis-per-textbox"
                                value={selectedDiscountType}
                                onChange={(e) =>
                                  setSelectedDiscountType(e.target.value)
                                }
                              >
                                <option value={null} disabled>Select Type</option>
                                <option value="PERCENTAGE">Percentage</option>
                                <option value="AMOUNT">Amount</option>
                                <option value="COUPON">Coupon</option>
                    </select>
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
                                    setDiscountAmount(parseFloat(e.target.value))
                                  }
                                />
                              )}
                              {selectedDiscountType === "COUPON" && (
                                <select
                                  style={{ width: "50%" }}
                                  className="CO-dis-per-textbox"
                                  value={selectedCoupon}
                                  onChange={(e) =>
                                    setSelectedCoupon(e.target.value)
                                  }
                                >
                                  <option value={null} disabled>Select Coupon Code</option>
                                  {couponCodes.map((coupon) => (
                                    <option key={coupon.code} value={coupon.code}>
                                      {coupon.code} - {coupon.discountPercentage}%
                                    </option>
                                  ))}
                                </select>
                              )}
                    </div>
                    </div>
                    <div className="r-f-12">- ₹{calculateDiscount().toFixed(2)}</div>
                    </div>
                  
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Delivery Charges</div>
                    <div className="">
                    {deliveryCharges.map((charge) => (
                    <div className="d-flex align-item-center">
                    <div key={charge.value}>
                    <input type="radio" name="" id=""
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
                    </div>
                    <div className="r-f-12">
                    {charge.label}
                    </div>
                    </div>
                     ))}
                    </div>
                    </div>
                    <div className="r-f-12">₹{selectedDeliveryCharge !== null
                                ? selectedDeliveryCharge.toFixed(2)
                                : "0.00"}</div>
                    </div>
                    
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Aditional Charges</div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12">₹{addCharge().toFixed(2)}</div>
                    </div>
                    
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Tax Charges</div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12">₹{(calculateTax().cgst + calculateTax().sgst).toFixed(
                                2
                              )}</div>
                    </div>
                    
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Round Off</div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12">(₹{calculateGrandTotal().toFixed(2)}) ₹
                              {Math.round(calculateGrandTotal().toFixed(2))}</div>
                    </div>
                    <hr />
                    <div className="d-flex space-between">
                    <div>
                    <div className="r-f-12 txt-dark-grey"><b>Total</b></div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12"><b>₹{Math.round(calculateGrandTotal().toFixed(2))}</b></div>
                    </div>
                    </div>
                    <br />
                    <br />
                    <div className="d-flex space-evenly">
                    <button className="CO-cart-cancle-btn" onClick={clearCart }>Cancel</button>
                    <div className="d-flex align-item-center">
                    <button
                                        className="multi-btn"
                                        onClick={handleButtonClick}
                                      >
                                        {selectedItem}
                                      </button>
                                      <select
                                        className="multi-btn-drpdown"
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
                    </div>
                    
                      </div>
                    
                    </div>
                    )}
                    </div>
                    )}
  
                   {catmodal &&(
                    <div
                    className="main-modal main-modal-open cat-m"
                  >
                    <div className="main-modal-content"
                    
                    >
                      <div className="CO-phone-modal-top">
                      <div className="d-flex space-between r-f-14 align-item-center">
                        <div>Categories</div>
                        <div onClick={closecatmodal}><FontAwesomeIcon icon={faXmark} /></div>
                      </div>
                      <br />
                      <div>
                        <input type="text" name="" className="t-box" placeholder="Search Categories"  id="" 
                        value={searchCategoryInput}
                        onChange={handleCategorySearchInputChange}
                        />
                      </div>
                      </div>
                      <div className="p-main-modal-content-inside r-f-14">
                      {filteredCategories.map((category, index) => (
                        <div style={{padding:'2vw 2vw'}} key={index} onClick={closecatmodal}>
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
                  </div>
                )}
                </div>
                  )}
                </div>
                

                  
             
           
          </div>
           ) : activeTab === "pickup" ? (
            <div>
                <div className="CO-phone-view-items">
                <div className="r-f-20 d-flex align-item-center space-between">
                  <div className="d-flex align-item-center">
                  <FontAwesomeIcon icon={faArrowLeft} onClick={backToOrders} /> &nbsp;Create Orders
                  </div>
                </div>
                <br />
                <div className="d-flex space-between align-item-center">
                <div className="d-flex g-10">
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
                  <div className="d-flex g-20 r-f-20 align-item-center">
                  <FontAwesomeIcon icon={faLocationDot} className="txt-purple" onClick={phandleOpenLocation}/>
                  <FontAwesomeIcon icon={faAddressCard} className="txt-purple" onClick={phandleOpenTextbox} />
                  </div>
                </div>
                <hr />
                {pshowTextBox && (
              <div>
                <div className="r-f-14">Customer details</div>
                <br />
                <input type="text" name="" className="t-box" id="" placeholder="Enter Customer Phone number" />
                <br />
                <br />
                <input type="text" name="" className="t-box" id="" placeholder="Enter Customer name" />
                <br />
                <br />
                <input type="text" name="" className="t-box" id="" placeholder="Enter Alternative phone number" />
                <br />
                <br />
                <textarea name="" id="" cols="30" rows="3" className="t-box" style={{borderRadius:'5vw'}} placeholder="Enter customer address"></textarea>
                <br />
                <br />
                <select name="" id="" className="t-box" style={{width:'100%',backgroundColor:'white'}}>
                  <option value="" selected disabled>Select payment method</option>
                  <option value="COD">COD</option>
                  <option value="online">Online</option>
                </select>
                <br />
                <br />
                <textarea name="" id="" cols="30" rows="3" className="t-box" style={{borderRadius:'5vw'}} placeholder="Enter Special request"></textarea>
                <br />
                <br />
                <div className="d-flex space-evenly">
                <button onClick={phandleTextBoxSubmit} className="p-button bg-purple" style={{padding:'3vw 8vw'}}>Next</button>
                </div>
              </div>
             )}
                  
                  {pshowResult && (
                  <div>
                <div className="d-flex space-between align-item-center">
                  <div className="r-f-14">Combo1</div>
                  <button className="CO-phone-cart-btn" onClick={opencatmodal}>Categories</button>
                </div>
                <br />
                <input type="text" name="" className="t-box" placeholder="Search Items" id="" />
                <br />
                <br />
                <div className="CO-scroll r-f-12">
                  <div className="i-card">
                    <div className="d-flex space-between">
                    <div className="i-card-left">
                    <div className="d-flex" style={{gap:'1vw'}}><div><Icon icon="mdi:lacto-vegetarian" className="txt-green" /></div><div>Chicken Burger Chicken Burger Chicken Burger </div></div>
                    <div className="d-flex" style={{gap:'3vw'}}>
                    <div>
                        &nbsp;&nbsp;
                      </div>
                    <div className="">₹150</div>
                    </div>
                    
                    </div>
                    <div>
                      <button className="CO-phone-add-btn">ADD</button>
                    </div>
                    </div>
                    <br />
                    <div className="d-flex" style={{gap:'3vw'}}>
                      <div>
                        &nbsp;&nbsp;
                      </div>
                    <div className="txt-grey r-f-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum vel velit in vero iure reiciendis earum numquam accusantium expedita!</div>
                    </div>
                  
                  </div>
                  <div className="i-card">
                    <div className="d-flex space-between">
                    <div className="i-card-left">
                    <div className="d-flex" style={{gap:'1vw'}}><div><Icon icon="mdi:lacto-vegetarian" className="txt-green" /></div><div>Chicken Burger Chicken Burger Chicken Burger </div></div>
                    <div className="d-flex" style={{gap:'3vw'}}>
                    <div>
                        &nbsp;&nbsp;
                      </div>
                    <div className="">₹150</div>
                    </div>
                    
                    </div>
                    <div>
                      <button className="CO-phone-add-btn">ADD</button>
                    </div>
                    </div>
                    <br />
                    <div className="d-flex" style={{gap:'3vw'}}>
                      <div>
                        &nbsp;&nbsp;
                      </div>
                    <div className="txt-grey r-f-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum vel velit in vero iure reiciendis earum numquam accusantium expedita!</div>
                    </div>
                  
                  </div>
                
                  
                </div>
                <div className="CO-phone-bottom d-flex space-between r-f-14 align-item-center">
                  <div>
                  <b>5</b> Orders
                  </div>
                  <div>
                  <button className="CO-phone-cart-btn" onClick={opencartView}>View cart</button>
                  </div>
                  </div>
                  {cartView && (
                    <div className="CO-cart-view">
                      <div className="d-flex space-between align-item-center">
                      <div className="d-flex align-item-center r-f-20">
                    <FontAwesomeIcon icon={faArrowLeft} onClick={closecartView} /> &nbsp;Orders
                    </div>
                      <div className="d-flex g-20 r-f-20 align-item-center">
                    <FontAwesomeIcon icon={faLocationDot} className="txt-purple"/>
                    <FontAwesomeIcon icon={faAddressCard} className="txt-purple" />
                    </div>
                      </div>
                      <hr />
                      <div className="p-main-modal-content-inside">
                      <div className="i-card">
                      <div className="d-flex space-between">
                      <div className="i-card-left r-f-12">
                      <div className="d-flex" style={{gap:'1vw'}}><div><Icon icon="mdi:lacto-vegetarian" className="txt-green" /></div><div>Chicken Burger Chicken Burger Chicken Burger </div></div>
                      <br />
                      
                      </div>
                      <div className="r-f-12">
                      ₹100.00
                      </div>
                      </div>
                      
                      <div className="d-flex space-between align-item-center">
                      <div className="d-flex align-item-center" style={{gap:'3vw'}}>
                        <div>
                          &nbsp;&nbsp;
                        </div>
                      <div className="">
                        <div className="d-flex">
                          <button className="CO-plusminus">-</button>
                          <input type="text" name="" className="CO-qty-textbox" id="" />
                          <button className="CO-plusminus">+</button>
                        </div>
                      </div>
                      <div className="r-f-12"><FontAwesomeIcon icon={faXmark} />&nbsp;₹100.00</div>
                      </div>
                      <div className="r-f-14 d-flex g-20">
                      <FontAwesomeIcon icon={faCopyright} />
                      <FontAwesomeIcon icon={faPlateWheat} />
                      </div>
                      </div>
                    </div>
                    <br />
                    <div className="CO-phone-billing">
                    <div className="d-flex space-between">
                    <div>
                    <div className="r-f-10 txt-grey">Discount</div>
                    <div className="d-flex g-10">
                    <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    </select>
                    <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    </select>
                    </div>
                    </div>
                    <div className="r-f-12">₹100.00</div>
                    </div>
                  
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Delivery Charges</div>
                    <div className="">
                    <div className="d-flex align-item-center">
                    <div>
                    <input type="radio" name="" id="" />
                    </div>
                    <div  className="r-f-12">
                    Free
                    </div>
                      
                    </div>
                    <div className="d-flex align-item-center">
                    <div>
                    <input type="radio" name="" id="" />
                    </div>
                    <div className="r-f-12">
                    ₹35
                    </div>
                      
                    </div>
                    <div className="d-flex align-item-center">
                    <div>
                    <input type="radio" name="" id="" />
                    </div>
                    <div  className="r-f-12">
                    ₹45
                    </div>
                      
                    </div>
                    </div>
                    </div>
                    <div className="r-f-12">₹100.00</div>
                    </div>
                    
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Aditional Charges</div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12">₹100.00</div>
                    </div>
                    
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Tax Charges</div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12">₹100.00</div>
                    </div>
                    
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Round Off</div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12">(₹31.00) ₹31</div>
                    </div>
                    <hr />
                    <div className="d-flex space-between">
                    <div>
                    <div className="r-f-12 txt-dark-grey"><b>Total</b></div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12"><b>₹100.00</b></div>
                    </div>
                    </div>
                    <br />
                    <br />
                    <div className="d-flex space-evenly">
                    <button className="CO-cart-cancle-btn">Cancel</button>
                    <div className="d-flex align-item-center">
                    <button
                                        className="multi-btn"
                                        onClick={handleButtonClick}
                                      >
                                        {selectedItem}
                                      </button>
                                      <select
                                        className="multi-btn-drpdown"
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
                    </div>
                    
                      </div>
                    
                    </div>
                    )}
  
                {catmodal &&(
                    <div
                    className="main-modal main-modal-open cat-m"
                  >
                    <div className="main-modal-content">
                      <div className="CO-phone-modal-top">
                      <div className="d-flex space-between r-f-14 align-item-center">
                        <div>Categories</div>
                        <div onClick={closecatmodal}><FontAwesomeIcon icon={faXmark} /></div>
                      </div>
                      <br />
                      <div>
                        <input type="text" name="" className="t-box" placeholder="Search Categories"  id="" />
                      </div>
                      </div>
                      <div className="p-main-modal-content-inside r-f-14">
                        <div style={{padding:'2vw 2vw'}}>
                          Noodles
                        </div>
                        
                      </div>
                    </div>
                  </div>
                )}
                </div>
                  )}
                </div>
                

                  
             
           
          </div>
          ) : activeTab === "table" ? (
            <div>
                <div className="CO-phone-view-items">
                <div className="r-f-20 d-flex align-item-center space-between">
                  <div className="d-flex align-item-center">
                  <FontAwesomeIcon icon={faArrowLeft} onClick={backToOrders} /> &nbsp;Create Orders
                  </div>
                </div>
                <br />
                <div className="d-flex space-between align-item-center">
                <div className="d-flex g-10">
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
                  <div className="d-flex g-20 r-f-20 align-item-center">
                  <FontAwesomeIcon icon={faLocationDot} className="txt-purple" onClick={phandleOpenLocation}/>
                  </div>
                </div>
                <hr />

                  <div>
                <div className="d-flex space-between align-item-center">
                  <div className="r-f-14">Combo1</div>
                  <button className="CO-phone-cart-btn" onClick={opencatmodal}>Categories</button>
                </div>
                <br />
                <input type="text" name="" className="t-box" placeholder="Search Items" 
                id="" />
                <br />
                <br />
                <div className="CO-scroll r-f-12">
                  <div className="i-card">
                    <div className="d-flex space-between">
                    <div className="i-card-left">
                    <div className="d-flex" style={{gap:'1vw'}}><div><Icon icon="mdi:lacto-vegetarian" className="txt-green" /></div><div>Chicken Burger Chicken Burger Chicken Burger </div></div>
                    <div className="d-flex" style={{gap:'3vw'}}>
                    <div>
                        &nbsp;&nbsp;
                      </div>
                    <div className="">₹150</div>
                    </div>
                    
                    </div>
                    <div>
                      <button className="CO-phone-add-btn">ADD</button>
                    </div>
                    </div>
                    <br />
                    <div className="d-flex" style={{gap:'3vw'}}>
                      <div>
                        &nbsp;&nbsp;
                      </div>
                    <div className="txt-grey r-f-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum vel velit in vero iure reiciendis earum numquam accusantium expedita!</div>
                    </div>
                  
                  </div>
                  <div className="i-card">
                    <div className="d-flex space-between">
                    <div className="i-card-left">
                    <div className="d-flex" style={{gap:'1vw'}}><div><Icon icon="mdi:lacto-vegetarian" className="txt-green" /></div><div>Chicken Burger Chicken Burger Chicken Burger </div></div>
                    <div className="d-flex" style={{gap:'3vw'}}>
                    <div>
                        &nbsp;&nbsp;
                      </div>
                    <div className="">₹150</div>
                    </div>
                    
                    </div>
                    <div>
                      <button className="CO-phone-add-btn">ADD</button>
                    </div>
                    </div>
                    <br />
                    <div className="d-flex" style={{gap:'3vw'}}>
                      <div>
                        &nbsp;&nbsp;
                      </div>
                    <div className="txt-grey r-f-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatum vel velit in vero iure reiciendis earum numquam accusantium expedita!</div>
                    </div>
                  
                  </div>
                
                  
                </div>
                <div className="CO-phone-bottom d-flex space-between r-f-14 align-item-center">
                  <div>
                  <b>5</b> Orders
                  </div>
                  <div>
                  <button className="CO-phone-cart-btn" onClick={opencartView}>View cart</button>
                  </div>
                  </div>
                  {cartView && (
                    <div className="CO-cart-view">
                      <div className="d-flex space-between align-item-center">
                      <div className="d-flex align-item-center r-f-20">
                    <FontAwesomeIcon icon={faArrowLeft} onClick={closecartView} /> &nbsp;Orders
                    </div>
                      <div className="d-flex g-20 r-f-20 align-item-center">
                    <FontAwesomeIcon icon={faLocationDot} className="txt-purple"/>
                    <FontAwesomeIcon icon={faAddressCard} className="txt-purple" />
                    </div>
                      </div>
                      <hr />
                      <div className="p-main-modal-content-inside">
                      <div className="i-card">
                      <div className="d-flex space-between">
                      <div className="i-card-left r-f-12">
                      <div className="d-flex" style={{gap:'1vw'}}><div><Icon icon="mdi:lacto-vegetarian" className="txt-green" /></div><div>Chicken Burger Chicken Burger Chicken Burger </div></div>
                      <br />
                      
                      </div>
                      <div className="r-f-12">
                      ₹100.00
                      </div>
                      </div>
                      
                      <div className="d-flex space-between align-item-center">
                      <div className="d-flex align-item-center" style={{gap:'3vw'}}>
                        <div>
                          &nbsp;&nbsp;
                        </div>
                      <div className="">
                        <div className="d-flex">
                          <button className="CO-plusminus">-</button>
                          <input type="text" name="" className="CO-qty-textbox" id="" />
                          <button className="CO-plusminus">+</button>
                        </div>
                      </div>
                      <div className="r-f-12"><FontAwesomeIcon icon={faXmark} />&nbsp;₹100.00</div>
                      </div>
                      <div className="r-f-14 d-flex g-20">
                      <FontAwesomeIcon icon={faCopyright} />
                      <FontAwesomeIcon icon={faPlateWheat} />
                      </div>
                      </div>
                    </div>
                    <br />
                    <div className="CO-phone-billing">
                    <div className="d-flex space-between">
                    <div>
                    <div className="r-f-10 txt-grey">Discount</div>
                    <div className="d-flex g-10">
                    <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    </select>
                    <select name="" id="">
                    <option value=""></option>
                    <option value=""></option>
                    </select>
                    </div>
                    </div>
                    <div className="r-f-12">₹100.00</div>
                    </div>
                  
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Delivery Charges</div>
                    <div className="">
                    <div className="d-flex align-item-center">
                    <div>
                    <input type="radio" name="" id="" />
                    </div>
                    <div  className="r-f-12">
                    Free
                    </div>
                      
                    </div>
                    <div className="d-flex align-item-center">
                    <div>
                    <input type="radio" name="" id="" />
                    </div>
                    <div className="r-f-12">
                    ₹35
                    </div>
                      
                    </div>
                    <div className="d-flex align-item-center">
                    <div>
                    <input type="radio" name="" id="" />
                    </div>
                    <div  className="r-f-12">
                    ₹45
                    </div>
                      
                    </div>
                    </div>
                    </div>
                    <div className="r-f-12">₹100.00</div>
                    </div>
                    
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Aditional Charges</div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12">₹100.00</div>
                    </div>
                    
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Tax Charges</div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12">₹100.00</div>
                    </div>
                    
                    <div className="d-flex space-between" style={{marginTop:'3vw'}}>
                    <div>
                    <div className="r-f-10 txt-grey">Round Off</div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12">(₹31.00) ₹31</div>
                    </div>
                    <hr />
                    <div className="d-flex space-between">
                    <div>
                    <div className="r-f-12 txt-dark-grey"><b>Total</b></div>
                    <div className="d-flex g-10">
                    </div>
                    </div>
                    <div className="r-f-12"><b>₹100.00</b></div>
                    </div>
                    </div>
                    <br />
                    <br />
                    <div className="d-flex space-evenly">
                    <button className="CO-cart-cancle-btn">Cancel</button>
                    <div className="d-flex align-item-center">
                    <button
                                        className="multi-btn"
                                        onClick={handleButtonClick}
                                      >
                                        {selectedItem}
                                      </button>
                                      <select
                                        className="multi-btn-drpdown"
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
                    </div>
                    
                      </div>
                    
                    </div>
                    )}
  
                {catmodal &&(
                    <div
                    className="main-modal main-modal-open cat-m"
                  >
                    <div className="main-modal-content">
                      <div className="CO-phone-modal-top">
                      <div className="d-flex space-between r-f-14 align-item-center">
                        <div>Categories</div>
                        <div onClick={closecatmodal}><FontAwesomeIcon icon={faXmark} /></div>
                      </div>
                      <br />
                      <div>
                        <input type="text" name="" className="t-box" placeholder="Search Categories"  id="" 
                        value={searchCategoryInput}
                        onChange={handleCategorySearchInputChange}
                        />
                      </div>
                      </div>
                      <div className="p-main-modal-content-inside r-f-14">
                      {filteredCategories.map((category, index) => (
                        <div style={{padding:'2vw 2vw'}} key={index}>
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
                  </div>
                )}
                </div>
                  
                </div>

          </div>
          ) : (
            <div></div>
          )}
       
      </div>
      </div>
    </div>
  );
};

export default CreateNewOrder;
