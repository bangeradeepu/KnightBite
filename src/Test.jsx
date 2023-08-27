import React, { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  "Combo",
  "Combo meal",
  "Ice Cream",
  // ...other categories
];

const categoryMessages = {
  "Combo": "hi",
  "Combo meal": "hello",
  "Ice Cream": "hey",
  // Add messages for other categories
};

const CategoryLink = ({ category, isSelected, onClick }) => (
  <div className="CO-cat-gap">
    <Link
      to={`/category/${category}`} // Adjust the route path as needed
      className={`CO-cat-dec ${isSelected ? "txt-purple" : ""}`}
      onClick={() => onClick(category)}
    >
      {category}
    </Link>
  </div>
);

const CategoryMessage = ({ message }) => (
  <div>
    {message && <div>{message}</div>}
  </div>
);

function Test() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCatTabChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      {categories.map((category, index) => (
        <CategoryLink
          key={index}
          category={category}
          isSelected={selectedCategory === category}
          onClick={handleCatTabChange}
        />
      ))}
      <CategoryMessage message={categoryMessages[selectedCategory]} />
    </div>
  );
}

export default Test;

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




