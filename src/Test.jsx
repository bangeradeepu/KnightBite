import React, { useState } from 'react';

function Test() {
  const [locationText, setLocationText] = useState('');
  const [inputText, setInputText] = useState('');
  const [showLocation, setShowLocation] = useState(true);
  const [showTextBox, setShowTextBox] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleLocationSubmit = () => {
    setShowLocation(false);
    setShowTextBox(true);
  };

  const handleTextBoxSubmit = () => {
    if (inputText.trim() !== '') {
      setShowResult(true);
      setShowTextBox(false);
    }
  };

  const handleOpenLocation = () => {
    setShowLocation(true);
    setShowTextBox(false);
    setShowResult(false);
    setLocationText('');
  };
  const handleOpenTextbox = () => {
    setShowTextBox(true);
    setShowResult(false);
  };

  return (
    <div className="container">
      {showLocation && (
        <div className="box">
          <h2>Enter Location</h2>
          <input
            type="text"
            value={locationText}
            onChange={(e) => setLocationText(e.target.value)}
          />
          <button onClick={handleLocationSubmit}>Submit</button>
        </div>
      )}
      {showTextBox && (
        <div className="box">
          <h2>Enter Text</h2>
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button onClick={handleTextBoxSubmit}>Submit</button>
        </div>
      )}
      {showResult && (
        <div className="result-box">
          <h2>Result</h2>
          <p>Location entered: {locationText}</p>
          <p>Text entered: {inputText}</p>
          <button onClick={handleOpenLocation}>Open Location</button>
          <button onClick={handleOpenTextbox}>Open Textbox</button>
        </div>
      )}
    </div>
  );
}

export default Test;


// import React, { useState } from 'react';

// function Test() {
//   const [inputText, setInputText] = useState('');
//   const [showInput, setShowInput] = useState(true);
//   const [showResult, setShowResult] = useState(false);

//   const handleSubmit = () => {
//     if (inputText.trim() !== '') {
//       setShowInput(false);
//       setShowResult(true);
//     }
//   };

//   const handleOpenTextbox = () => {
//     setShowInput(true);
//     setShowResult(false);
//     setInputText(''); // Clear the input text when opening the textbox again
//   };

//   return (
//     <div className="container">
//       {showInput && (
//         <div className="box">
//           <h2>Enter Text</h2>
//           <input
//             type="text"
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//           />
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       )}
//       {showResult && (
//         <div className="result-box">
//           <h2>Result</h2>
//           <p>You entered: {inputText}</p>
//         </div>
//       )}
//       {showResult && (
//         <div>
//          <button onClick={handleOpenTextbox}>Open Textbox</button>
//         </div>
//         )}
//     </div>
//   );
// }

// export default Test;


// import React, { useState } from 'react';

// function Test() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div className="button-container">
//       <button
//         className="hoverable-button"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         Hover Me
//       </button>
//       {isHovered &&
//       <div>hi</div>
//       }{/* Render the modal when isHovered is true */}
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from 'react';

// function Test() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div className="dropdown-container">
//       <div
//         className="dropdown-button"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         Hover Me for Dropdown
//       </div>
//       {isDropdownOpen && (
//         <div className="dropdown-modal">
//           {/* Your dropdown content */}
//           <p>Dropdown Content</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from "react";

// const Test = () => {
//   const [submitVisible, setSubmitVisible] = useState(false);

//   const openSubmit = () => {
//     setSubmitVisible(true);
//   };
//   const closeSubmit = () => {
//     setSubmitVisible(false);
//   };
//   const [cartItems, setCartItems] = useState([]);
//   //edited
//   const [selectedDeliveryCharge, setSelectedDeliveryCharge] = useState(null);
//   const [selectedDiscountType, setSelectedDiscountType] =
//     useState("PERCENTAGE");
//   const [discountAmount, setDiscountAmount] = useState(0);
//   const [selectedCoupon, setSelectedCoupon] = useState(null);
//   const [discountPercentage, setDiscountPercentage] = useState(0);

//   const deliveryCharges = [
//     { label: "Free", value: 0 },
//     { label: "+$35 Delivery Charge", value: 35 },
//     { label: "+$45 Delivery Charge", value: 45 },
//   ];
//   const couponCodes = [
//     { code: "ALLBITE", discountPercentage: 40 },
//     { code: "SMOOTHIE", discountPercentage: 50 },
//   ];
//   //edited end
//   const cartAddons = [
//     { name: "Cart Addon 1", price: 5 },
//     { name: "Cart Addon 2", price: 10 },
//     { name: "Cart Addon 3", price: 15 },
//   ];

//   const products = [
//     { name: "Product 1", price: 10 },
//     { name: "Product 2", price: 20 },
//     { name: "Product 3", price: 30 },
//   ];

//   const addToCart = (productName) => {
//     const existingItemIndex = cartItems.findIndex(
//       (item) => item.product === productName
//     );

//     if (existingItemIndex !== -1) {
//       const newCartItems = [...cartItems];
//       newCartItems[existingItemIndex].quantity += 1;
//       setCartItems(newCartItems);
//     } else {
//       setCartItems([
//         ...cartItems,
//         { product: productName, quantity: 1, selectedAddons: [] },
//       ]);
//     }
//   };

//   const removeFromCart = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems.splice(index, 1);
//     setCartItems(newCartItems);
//   };

//   const updateQuantity = (index, quantity) => {
//     const newCartItems = [...cartItems];
//     newCartItems[index] = { ...newCartItems[index], quantity };
//     setCartItems(newCartItems);
//   };

//   const incrementQuantity = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems[index] = {
//       ...newCartItems[index],
//       quantity: newCartItems[index].quantity + 1,
//     };
//     setCartItems(newCartItems);
//   };

//   const decrementQuantity = (index) => {
//     const newCartItems = [...cartItems];
//     if (newCartItems[index].quantity > 1) {
//       newCartItems[index] = {
//         ...newCartItems[index],
//         quantity: newCartItems[index].quantity - 1,
//       };
//       setCartItems(newCartItems);
//     }
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       const product = products.find((p) => p.name === item.product);
//       const addonsTotal = item.selectedAddons.reduce((acc, addonName) => {
//         const addon = cartAddons.find((a) => a.name === addonName);
//         return acc + addon.price;
//       }, 0);
//       const productTotal = (product.price + addonsTotal) * item.quantity;
//       total += productTotal;
//       item.productTotal = productTotal;
//     });
//     return total;
//   };
//   //edited
//   const getCouponDetails = (code) => {
//     return couponCodes.find((coupon) => coupon.code === code);
//   };
//   const calculateDiscount = () => {
//     const total = calculateTotal();

//     if (selectedDiscountType === "PERCENTAGE") {
//       const discount = total * (discountPercentage / 100);
//       return discount;
//     } else if (selectedDiscountType === "AMOUNT") {
//       return discountAmount;
//     } else if (selectedDiscountType === "COUPON") {
//       const couponDetails = getCouponDetails(selectedCoupon);
//       if (couponDetails) {
//         const couponDiscount = total * (couponDetails.discountPercentage / 100);
//         return couponDiscount;
//       } else {
//         return 0;
//       }
//     } else {
//       return 0;
//     }
//   };

//   var tax = 0.025;

//   const calculateTax = () => {
//     const total = calculateTotal();
//     const cgst = total * tax; // CGST at 2.5%
//     const sgst = total * tax; // SGST at 2.5%
//     return { cgst, sgst };
//   };

//   const addCharge = () => {
//     const add = 10;
//     return add;
//   };

//   const calculateGrandTotal = () => {
//     const total = calculateTotal() - calculateDiscount();
//     const deliveryCharge = selectedDeliveryCharge || 0;
//     const taxCharges = calculateTax();
//     const totalTax = taxCharges.cgst + taxCharges.sgst;
//     return Math.max(total + deliveryCharge + totalTax + addCharge(), 0);
//   };
//   //edit end

//   const getAddonPrice = (addonName) => {
//     const selectedAddon = cartAddons.find((addon) => addon.name === addonName);
//     return selectedAddon ? selectedAddon.price : 0;
//   };

//   const [selectedAddonPopup, setSelectedAddonPopup] = useState(null);

//   const openAddonPopup = (addonName) => {
//     setSelectedAddonPopup(addonName);
//   };

//   const closeAddonPopup = () => {
//     setSelectedAddonPopup(null);
//   };

//   return (
//     <div className="App">
//       <h1>Product List</h1>
//       <ul className="product-list">
//         {products.map((product) => (
//           <li key={product.name}>
//             {product.name} (${product.price}){" "}
//             <button onClick={() => addToCart(product.name)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//       <h2>Cart</h2>
//       <ul className="cart">
//         {cartItems.map((item, index) => (
//           <div key={index}>
//             <div className="cart-item">
//               <div className="cart-item-addons">
//                 <div className="addon-dropdown">
//                   <div className="addon-dropdown-toggle">Select Add-ons</div>
//                   <div className="addon-dropdown-content">
//                     <button onClick={() => openAddonPopup(item.product)}>
//                       Open
//                     </button>
//                     {selectedAddonPopup !== null && (
//                       <div className="popup">
//                         <div className="popup-content">
//                           <h3>Add-ons</h3>
//                           <ul>
//                             {cartAddons.map((addon) => (
//                               <label key={addon.name}>
//                                 <input
//                                   type="checkbox"
//                                   checked={item.selectedAddons.includes(
//                                     addon.name
//                                   )}
//                                   onChange={(e) => {
//                                     const newCartItems = [...cartItems];
//                                     const newSelectedAddons =
//                                       newCartItems[index].selectedAddons;
//                                     if (e.target.checked) {
//                                       newSelectedAddons.push(addon.name);
//                                     } else {
//                                       const addonIndex =
//                                         newSelectedAddons.indexOf(addon.name);
//                                       if (addonIndex !== -1) {
//                                         newSelectedAddons.splice(addonIndex, 1);
//                                       }
//                                     }
//                                     newCartItems[index].selectedAddons =
//                                       newSelectedAddons;
//                                     setCartItems(newCartItems);
//                                   }}
//                                 />{" "}
//                                 {`${addon.name} (+$${addon.price})`}
//                               </label>
//                             ))}
//                           </ul>
//                           <button onClick={closeAddonPopup}>Close</button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <button onClick={() => removeFromCart(index)}>Remove</button>
//               </div>
//               <div className="cart-item-details">
//                 {item.product} (Price: $
//                 {products.find((p) => p.name === item.product).price}) ,
//                 Quantity: {item.quantity}{" "}
//                 {item.selectedAddons.length > 0 && (
//                   <div>
//                     Selected Add-ons:
//                     <ul>
//                       {item.selectedAddons.map((addonName) => (
//                         <li key={addonName}>
//                           {addonName} (+$
//                           {
//                             cartAddons.find((addon) => addon.name === addonName)
//                               .price
//                           }
//                           )
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//                 <button onClick={() => decrementQuantity(index)}>-</button>
//                 <input
//                   type="number"
//                   min="1"
//                   value={item.quantity || 1}
//                   onChange={(e) =>
//                     updateQuantity(index, parseInt(e.target.value))
//                   }
//                 />
//                 <button onClick={() => incrementQuantity(index)}>+</button>
//                 {/* delivery charger */}
//                 <h2>Delivery Charges</h2>
//                 <div className="delivery-charge-section">
//                   {deliveryCharges.map((charge) => (
//                     <label key={charge.value}>
//                       <input
//                         type="radio"
//                         name="deliveryCharge"
//                         value={charge.value}
//                         checked={selectedDeliveryCharge === charge.value}
//                         onChange={(e) =>
//                           setSelectedDeliveryCharge(parseFloat(e.target.value))
//                         }
//                       />
//                       {charge.label}
//                     </label>
//                   ))}
//                 </div>
//                 {/* Discound */}
//                 <h2>Discounts</h2>
//                 <div className="discount-section">
//                   <select
//                     value={selectedDiscountType}
//                     onChange={(e) => setSelectedDiscountType(e.target.value)}
//                   >
//                     <option value={null}>Select Discount Type</option>
//                     <option value="PERCENTAGE">Percentage</option>
//                     <option value="AMOUNT">Amount</option>
//                     <option value="COUPON">Coupon</option>
//                   </select>

//                   {selectedDiscountType === "PERCENTAGE" && (
//                     <input
//                       type="number"
//                       placeholder="Percentage"
//                       value={discountPercentage}
//                       onChange={(e) =>
//                         setDiscountPercentage(parseFloat(e.target.value))
//                       }
//                     />
//                   )}

//                   {selectedDiscountType === "AMOUNT" && (
//                     <input
//                       type="number"
//                       placeholder="Amount"
//                       value={discountAmount}
//                       onChange={(e) =>
//                         setDiscountAmount(parseFloat(e.target.value))
//                       }
//                     />
//                   )}

//                   {selectedDiscountType === "COUPON" && (
//                     <select
//                       value={selectedCoupon}
//                       onChange={(e) => setSelectedCoupon(e.target.value)}
//                     >
//                       <option value={null}>Select Coupon Code</option>
//                       {couponCodes.map((coupon) => (
//                         <option key={coupon.code} value={coupon.code}>
//                           {coupon.code} - {coupon.discountPercentage}% Off
//                         </option>
//                       ))}
//                     </select>
//                   )}
//                 </div>
//                 <p>Product Total: ${item.productTotal}</p>
//                 <p>Total Quantity: {item.quantity}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </ul>
//       <p>Additional charges ${addCharge().toFixed(2)}</p>
//       <p>CGST (2.5%): ${calculateTax().cgst.toFixed(2)}</p>
//       <p>SGST (2.5%): ${calculateTax().sgst.toFixed(2)}</p>
//       <p>Tax ${(calculateTax().cgst + calculateTax().sgst).toFixed(2)}</p>
//       <p>Discount: ${calculateDiscount().toFixed(2)}</p>
//       <p>Dlivery Charges </p>
//       <p>Total Price:${calculateGrandTotal().toFixed(2)}</p>
//     </div>
//   );
// };

// export default Test;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const categories = [
//   "Combo",
//   "Combo meal",
//   "Ice Cream",
//   // ...other categories
// ];

// const categoryMessages = {
//   "Combo": "hi",
//   "Combo meal": "hello",
//   "Ice Cream": "hey",
//   // Add messages for other categories
// };

// const CategoryLink = ({ category, isSelected, onClick }) => (
//   <div className="CO-cat-gap">
//     <Link
//       to={`/category/${category}`} // Adjust the route path as needed
//       className={`CO-cat-dec ${isSelected ? "txt-purple" : ""}`}
//       onClick={() => onClick(category)}
//     >
//       {category}
//     </Link>
//   </div>
// );

// const CategoryMessage = ({ message }) => (
//   <div>
//     {message && <div>{message}</div>}
//   </div>
// );

// function Test() {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCatTabChange = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       {categories.map((category, index) => (
//         <CategoryLink
//           key={index}
//           category={category}
//           isSelected={selectedCategory === category}
//           onClick={handleCatTabChange}
//         />
//       ))}
//       <CategoryMessage message={categoryMessages[selectedCategory]} />
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faFilter, faBars } from "@fortawesome/free-solid-svg-icons";

// function Test() {
//   const [stockTab, setStockTab] = useState("all");

//   const handleStock = (tab) => {
//     setStockTab(tab);
//   };

//   return (
//     <div>
//       <div className="w3-container">
//         <h2>Tabs and Filters</h2>
//         <p>Click on the tabs and use filters below.</p>
//       </div>

//         <button
//           className={stockTab === 'all' ? "active-filter" : "filter-button"}
//           onClick={() => handleStock('all')}
//         >
//           All
//         </button>
//         <button
//           className={stockTab === 'inStock' ? "active-filter" : "filter-button"}
//           onClick={() => handleStock('inStock')}
//         >
//           In Stock
//         </button>
//         <button
//           className={stockTab === 'outStock' ? "active-filter" : "filter-button"}
//           onClick={() => handleStock('outStock')}
//         >
//           Out of Stock
//         </button>
//         <div className="OR-container-2-left  g-left txt-grey">
//             <p
//               className={`OR-container-2-tabs ${
//                 stockTab === "In Progress" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("In Progress")}
//             >
//               In Progress
//             </p>
//             <p
//               className={`OR-container-2-tabs  ${
//                 stockTab === "Ready and Packed" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("Ready and Packed")}
//             >
//               Ready and Packed
//             </p>
//             <p
//               className={`OR-container-2-tabs ${
//                 stockTab === "Dispatched" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("Dispatched")}
//             >
//               Dispatched
//             </p>
//             <p
//               className={`OR-container-2-tabs  ${
//                 stockTab === "Delivered Orders" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("Delivered Orders")}
//             >
//               Delivered Orders
//             </p>
//             <p
//               className={`OR-container-2-tabs  ${
//                 stockTab === "Live Orders" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("Live Orders")}
//             >
//               Live Orders
//             </p>
//             <p
//               className={`OR-container-2-tabs ${
//                 stockTab === "Cancelled Orders" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("Cancelled Orders")}
//             >
//               Cancelled Orders
//             </p>
//             <p
//               className={`OR-container-2-tabs  ${
//                 stockTab === "On hold" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("On hold")}
//             >
//               On Hold
//             </p>
//             <div className="OR-container-2-actions">
//               <p className="OR-container-2-tabs">
//                 <FontAwesomeIcon icon={faMagnifyingGlass} />
//               </p>
//               <p className="OR-container-2-tabs">
//                 <FontAwesomeIcon icon={faFilter} />
//               </p>
//             </div>
//           </div>

//       {stockTab === 'all' && (
//         <div id="London">
//           {/* Content for London tab */}
//            <p>All items</p>
//         </div>
//       )}

//       {stockTab === 'inStock' && (
//         <div id="Paris">
//           {/* Content for Paris tab */}
//           <p>instock</p>
//         </div>
//       )}
//       {stockTab === 'outStock' && (
//         <div id="Paris">
//           {/* Content for Paris tab */}
//           <p>outstocks</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Test;

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function Test() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>

//       <CustomTabPanel value={value} index={0}>
//         Item One
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         Item Three
//       </CustomTabPanel>
//     </Box>

//   );
// }
