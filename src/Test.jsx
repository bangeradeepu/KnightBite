import React from "react";
import "./Test.css";

function Test() {
  return (
    <div className="ADB-app">
      <div className="ADB-left-box">
        <div className="ADB-container">
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Name</label>
              <input type="text" className="ADB-input" />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Username</label>
              <input type="text" className="ADB-input" />
            </div>
          </div>
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Phone number</label>
              <input type="text" className="ADB-input" />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Alternative Phone number</label>
              <input type="text" className="ADB-input" />
            </div>
          </div>
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Email</label>
              <input type="text" className="ADB-input" />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Alternative Phone number</label>
              <select name="" id="" className="ADB-dropdown">
                <option value="">O-</option>
                <option value="">O+</option>
              </select>
            </div>
          </div>
          <div className="ADB-row-left-right-align">
            <div className="f-12">
              <div>
                <input type="checkbox" name="" id="" />
                Kannada
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                English
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                Hindi
              </div>
              <div>
                <input type="checkbox" name="" id="" />
                Tulu
              </div>
            </div>
            <button className="p-outline-button" style={{marginBottom:'2rem'}}>Upload</button>
          </div>
          <div
            className="row"
            style={{ width: "100%", backgroundColor: "#dadada", height: "1px",marginTop:'1rem', marginBottom:'1rem' }}
          ></div>
          <div className="">Vehicle Details</div>
          <br />
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Vehicle RC number</label>
              <input type="text" className="ADB-input" />
            </div>
            
          </div>
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Vehicle Number</label>
              <input type="text" className="ADB-input" />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Vehicle modal</label>
              <input type="text" className="ADB-input" />
            </div>
          </div>
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Licence number</label>
              <input type="text" className="ADB-input" />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Licence Exp date</label>
              <input type="text" className="ADB-input" />
            </div>
          </div>
          <div className="d-flex g-10">
            <div className="ADB-textbox">
              <label className="f-12">Insurance number</label>
              <input type="text" className="ADB-input" />
            </div>
            <div className="ADB-textbox">
              <label className="f-12">Insurance Exp date</label>
              <input type="text" className="ADB-input" />
            </div>
          </div>
          <div
            className="row"
            style={{ width: "100%", backgroundColor: "#dadada", height: "1px", marginTop:'1rem', marginBottom:'1rem' }}
          ></div>
          <div style={{display:'flex',flex:'wrap', gap:'50px'}}>
          <button className="p-outline-button">Upload</button>
          <button className="p-outline-button">Upload</button>
          <button className="p-outline-button">Upload</button>
          <button className="p-outline-button">Upload</button>
          </div>


        </div>
      </div>
      <div className="ADB-right-box">
        {/* Content for the right-side box */}
      </div>
    </div>
  );
}

export default Test;

// import React from 'react';
// import './Test.css';

// function Test() {
//   return (
//     <div className="ADB-TST-app">
//       <div className="ADB-TST-top-container">
//         <div className="ADB-TST-row">
//           <input type="text" placeholder="Search" className="ADB-TST-right-align" />
//         </div>
//         <div className="ADB-TST-row">
//           <div className="ADB-TST-button-container">
//             <button className='p-button bg-purple'>Button 1</button>
//             <button className='p-button bg-purple'>Button 2</button>
//           </div>
//         </div>
//         <div className="ADB-TST-row">
//         <div className="ADB-TST-header">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         </div>
//       </div>
//       <div className="ADB-TST-scrollable-container">
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>

//         <div className="ADB-TST-card">
//           {/* Add more data here */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;

// import React from "react";
// import "./Test.css"; // You can define your styles in this CSS file

// function Test() {
//   return (
//     <div className="ADB-TST-app-container">
//       <div className="ADB-TST-top-fixed">Top Fixed Container with Left-Aligned Text</div>
//       <div className="ADB-TST-box-container">
//         <div className="ADB-TST-box">
//           <div className="ADB-TST-inputs">
//             <input type="text" placeholder="Textbox 1" />
//             <input type="text" placeholder="Textbox 2" />
//             <input type="text" placeholder="Textbox 3" />
//             <input type="text" placeholder="Textbox 4" />
//           </div>
//           <div className="ADB-TST-buttons">
//             <button>Button 1</button>
//             <button>Button 2</button>
//             <button>Button 3</button>
//           </div>
//         </div>
//         <div className="ADB-TST-box">
//           {/* Repeat the same structure for the second box */}
//         </div>
//         <div className="ADB-TST-box">
//           {/* Repeat the same structure for the third box */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;

// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// import './Test.css'; // Import your CSS file here

// function Test() {
//   return (
//     <div className="ADB-TST-container-head">
//       {/* First Row */}
//       <div className="ADB-TST-row">
//         <div className="ADB-TST-column">
//           <img src="kb_logo.png" alt="Logo" style={{width:'40px'}} />
//           <span> Knight Bite</span>
//         </div>
//         <div className="ADB-TST-column">
//           <button className="ADB-TST-o-button bg-orange txt-orange">Complete your KYC</button>
//         </div>
//         <div className="ADB-TST-column">
//         <i className="ADB-TST-search-icon">
//               <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
//             </i>
//           <input type="text" placeholder="Search" className="ADB-TST-input-field" />
//         </div>
//         <div className="ADB-TST-column">
//           <div className="ADB-TST-button-group">
//             <img src="kb_logo.png" alt="" style={{width:'40px'}}  />
//             <img src="kb_logo.png" alt="" style={{width:'40px'}}  />
//             <span>
//               <div>Sabil Bakhar</div>
//               <div>Admin</div>
//             </span>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Test;

// import React from 'react';
// import './Test.css';

// const Test = () => {
//   return (
//     <div className="ADB-TST-container">
//       <div className="ADB-TST-sidebar">
//         <ul>
//           <li>Verify Registration</li>
//           <li>Analytics</li>
//           <li>Track</li>
//         </ul>
//       </div>
//       <div className="ADB-TST-main-content">
//         <div className="ADB-TST-fixed-top-container">
//           <button className="ADB-TST-search-button">Search</button>
//           <div className="ADB-TST-action-buttons">
//             <button className="ADB-TST-action-button">Add Delivery Boys</button>
//             <button className="ADB-TST-action-button">Bulk Action</button>
//           </div>
//         </div>
//         <div className="ADB-TST-scrollable-container">
//           {/* Render row-sized cards here */}
//           <div className="ADB-TST-card">
//             <div>1</div>
//             <div>Deepeshhhhhhh</div>
//             <div>kb001</div>
//             <div>6360062656</div>
//             <div>Mangalore</div>
//             <div>X</div>
//             <div>X</div>
//             <div>Not Set</div>
//           </div>
//           <div className="ADB-TST-card">
//             <div>1</div>
//             <div>Deepesh</div>
//             <div>kb001</div>
//             <div>6360062656</div>
//             <div>Mangalore</div>
//             <div>X</div>
//             <div>X</div>
//             <div>Not Set</div>
//           </div>
//           {/* Add more cards as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;

// import React from 'react';
// import './Test.css';

// const Test = () => {
//   return (
//     <div className="ADB-TST-container">
//       <div className="ADB-TST-red-box">
//         <div className="ADB-TST-textbox-container">
//           <input type="text" placeholder="Textbox 1" />
//           <input type="text" placeholder="Textbox 2" />
//           <input type="text" placeholder="Textbox 3" />
//         </div>
//         <div className="ADB-TST-button-container">
//           <button>Button 1</button>
//           <button>Button 2</button>
//           <button>Button 3</button>
//         </div>
//       </div>
//       <div className="ADB-TST-blue-box">
//         <div className="ADB-TST-grid-container">
//           <div className="ADB-TST-left-grid">
//             <input type="text" placeholder="Left Grid Textbox 1" />
//             <input type="text" placeholder="Left Grid Textbox 2" />
//             <button>Left Grid Button</button>
//           </div>
//           <div className="ADB-TST-right-grid">
//             <input type="text" placeholder="Right Grid Textbox 1" />
//             <input type="text" placeholder="Right Grid Textbox 2" />
//             <button>Right Grid Button</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;

// import React, { useState } from 'react';
// import './Test.css'; // Import your CSS file for styling

// const Test = () => {
//   const [selectedItem, setSelectedItem] = useState('Place An Order');
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const dropdownItems = ['Place An Order', 'Send Payment Link'];

//   const handleDropdownChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedItem(selectedValue);
//   };

//   const handleButtonClick = () => {
//     if (selectedItem) {
//       // Perform an action with the selected item, e.g., send it to an API
//       console.log(`Selected Item: ${selectedItem}`);
//     }
//   };

//   return (

//       <div className="ADB-TST-d-flex">
//       <button className="ADB-TST-p-button bg-purple" style={{borderRadius:'30px 0px 0px 30px', width: 'auto',padding:'10px 10px 30px 20px '}} onClick={handleButtonClick}>
//       {selectedItem}
//       </button>
//       <select
//           className="ADB-TST-R-droptype"
//           style={{ borderRadius: '0px 30px 30px 0px', width: '2%', outline: 'none' }}
//           onClick={() => setDropdownOpen(!dropdownOpen)}
//           onChange={handleDropdownChange}
//           value={selectedItem }
//         >
//           {dropdownItems.map((item) => (
//             <option value={item} key={item} className="ADB-TST-custom-option">
//               {item}
//             </option>
//           ))}
//         </select>
//       </div>

//   );
// };

// export default Test;

// {dropdownOpen && (
//   <ul className="ADB-TST-dropdown-menu">
//     {dropdownItems.map((item) => (
//       <li key={item} onClick={() => handleDropdownClick(item)}>
//         {item}
//       </li>
//     ))}
//   </ul>
// )}

// import React, { useState } from 'react';

// function Test() {
//   const [locationText, setLocationText] = useState('');
//   const [inputText, setInputText] = useState('');
//   const [showLocation, setShowLocation] = useState(true);
//   const [showTextBox, setShowTextBox] = useState(false);
//   const [showResult, setShowResult] = useState(false);

//   const handleLocationSubmit = () => {
//     setShowLocation(false);
//     setShowTextBox(true);
//   };

//   const handleTextBoxSubmit = () => {
//     if (inputText.trim() !== '') {
//       setShowResult(true);
//       setShowTextBox(false);
//     }
//   };

//   const handleOpenLocation = () => {
//     setShowLocation(true);
//     setShowTextBox(false);
//     setShowResult(false);
//     setLocationText('');
//   };
//   const handleOpenTextbox = () => {
//     setShowTextBox(true);
//     setShowResult(false);
//   };

//   return (
//     <div className="ADB-TST-container">
//       {showLocation && (
//         <div className="ADB-TST-box">
//           <h2>Enter Location</h2>
//           <input
//             type="text"
//             value={locationText}
//             onChange={(e) => setLocationText(e.target.value)}
//           />
//           <button onClick={handleLocationSubmit}>Submit</button>
//         </div>
//       )}
//       {showTextBox && (
//         <div className="ADB-TST-box">
//           <h2>Enter Text</h2>
//           <input
//             type="text"
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//           />
//           <button onClick={handleTextBoxSubmit}>Submit</button>
//         </div>
//       )}
//       {showResult && (
//         <div className="ADB-TST-result-box">
//           <h2>Result</h2>
//           <p>Location entered: {locationText}</p>
//           <p>Text entered: {inputText}</p>
//           <button onClick={handleOpenLocation}>Open Location</button>
//           <button onClick={handleOpenTextbox}>Open Textbox</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Test;

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
//     <div className="ADB-TST-container">
//       {showInput && (
//         <div className="ADB-TST-box">
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
//         <div className="ADB-TST-result-box">
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
//     <div className="ADB-TST-button-container">
//       <button
//         className="ADB-TST-hoverable-button"
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
//     <div className="ADB-TST-dropdown-container">
//       <div
//         className="ADB-TST-dropdown-button"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         Hover Me for Dropdown
//       </div>
//       {isDropdownOpen && (
//         <div className="ADB-TST-dropdown-modal">
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
//     <div className="ADB-TST-Test">
//       <h1>Product List</h1>
//       <ul className="ADB-TST-product-list">
//         {products.map((product) => (
//           <li key={product.name}>
//             {product.name} (${product.price}){" "}
//             <button onClick={() => addToCart(product.name)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//       <h2>Cart</h2>
//       <ul className="ADB-TST-cart">
//         {cartItems.map((item, index) => (
//           <div key={index}>
//             <div className="ADB-TST-cart-item">
//               <div className="ADB-TST-cart-item-addons">
//                 <div className="ADB-TST-addon-dropdown">
//                   <div className="ADB-TST-addon-dropdown-toggle">Select Add-ons</div>
//                   <div className="ADB-TST-addon-dropdown-content">
//                     <button onClick={() => openAddonPopup(item.product)}>
//                       Open
//                     </button>
//                     {selectedAddonPopup !== null && (
//                       <div className="ADB-TST-popup">
//                         <div className="ADB-TST-popup-content">
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
//               <div className="ADB-TST-cart-item-details">
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
//                 <div className="ADB-TST-delivery-charge-section">
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
//                 <div className="ADB-TST-discount-section">
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
//   <div className="ADB-TST-CO-cat-gap">
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
//       <div className="ADB-TST-w3-container">
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
//         <div className="ADB-TST-OR-container-2-left  g-left txt-grey">
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
//             <div className="ADB-TST-OR-container-2-actions">
//               <p className="ADB-TST-OR-container-2-tabs">
//                 <FontAwesomeIcon icon={faMagnifyingGlass} />
//               </p>
//               <p className="ADB-TST-OR-container-2-tabs">
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
