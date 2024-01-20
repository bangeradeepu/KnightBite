import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationFilter = ({ setSessionCompId, selectedLocations,selectBrands, onCheckboxChange, onBrandIdChange, sessionPid}) => {
  const [outlets, setOutlets] = useState([]);
  const [brands, setBrands] = useState({});
  const [checkedBrandIds, setCheckedBrandIds] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const checkUserRole = await axios.get(`http://127.0.0.1:8000/user/permissions/user_permissions/get/?comp_id=${setSessionCompId}&per_id=${sessionPid}`);
        const checkOwner = checkUserRole.data.some(item => item.role === 'owner_main' || item.role === 'owner_main_p');
        if(checkOwner){
          try {
            const response = await axios.get(`http://127.0.0.1:8000/company/outlets/company_outlets/?comp_id=${setSessionCompId}`);
            setOutlets(response.data.data);
          } catch (error) {
            console.error('Error fetching outlets:', error);
          }
        }else{
            try {
              const response = await axios.get(`http://127.0.0.1:8000/user/permissions/assigned_outlet/`);
              setOutlets(response.data);
              const outletIds = response.data.map(item => item.outlet_id);
            console.log(outletIds);

            } catch (error) {
              console.error('Error fetching outlets:', error);
            }
        }
      } catch (error) {
        console.error('Error fetching outlets:', error);
      }

    
    };

    fetchData();
  }, [setSessionCompId]);

  
  const fetchBrandsData = async (outletId) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/company/brands/brands/?outlet_id=${outletId}&comp_id=${setSessionCompId}`);
      setBrands({...brands,[outletId]:response.data.brands});
      console.log(Object.values(brands).reduce((a,b) => {
        return a.concat(b)
      },[]))

    } catch (error) {
      console.error('Error fetching brands:', error);
    }
  };


  const handleCheckboxChange = async (outletId, { checked }) => {
    onCheckboxChange(outletId);
  
    if (checked) {
      await fetchBrandsData(outletId);
    } else {
      // If outlet is unchecked, remove its entry from the brands state
       setBrands((prevBrands) => {
        const { [outletId]: omittedOutlet, ...remainingBrands } = prevBrands;
        return remainingBrands;
      });
    }
  };
  
  const handleCheckBoxBrandsChange = (brandId, brandName, { checked }) => {
    // console.log("Brand ID: ", brandId);
    // console.log("Brand Name: ", brandName);
    // console.log("Brands Checked:", checked);
    onBrandIdChange(brandId);
    setCheckedBrandIds((prevCheckedBrandIds) =>
      checked
        ? [...prevCheckedBrandIds, { brandId, brandName }]
        : prevCheckedBrandIds.filter((brand) => brand.brandId !== brandId)
    );
  };
  
  return (
    <div>
      {outlets.map((outlet) => (
        <label key={outlet.id}>
          <input
            type="checkbox"
            value={outlet.id}
            checked={selectedLocations.includes(outlet.outlet_id)}
            onChange={(event) => handleCheckboxChange(outlet.outlet_id,event.target)}
          />
          {outlet.outlet_name}
        </label>
      ))}

      <div>
        {Object.values(brands).reduce((a,b) => {
          return a.concat(b)
        },[]).map((brand) => (
          <div key={brand.id}>
            {brand.name}
            <input type="checkbox" name="" id="" value={brand.brand_id}
            onChange={(event)=> handleCheckBoxBrandsChange(brand.brand_id,brand.name,event.target)}
            
             />

          </div>
        ))}
      </div>
      <div>
  <strong>Checked Brands:</strong>
  {checkedBrandIds.map(({ brandId, brandName }) => (
    <div key={brandId}>
      Brand ID: {brandId}, Brand Name: {brandName}
    </div>
  ))}
</div>

    </div>
  );
};

export default LocationFilter;





// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const LocationFilter = ({ sessionId, setIsLoggedIn, onOutletsSelected }) => {
//   const [outlets, setOutlets] = useState([]);
//   const [selectedOutlets, setSelectedOutlets] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:8000/company/outlets/company_outlets/?start_date=2023-01-01&end_date=2023-12-31&comp_id=${sessionId}&order_field=id&count=5&offset=0`
//         );

//         // Assuming the response data structure is { data: [{ id, name, outlet_id }, ...] }
//         const outletData = response.data.data;

//         setOutlets(outletData);
//       } catch (error) {
//         console.error('Error fetching outlet data:', error);
//       }
//     };

//     fetchData();
//   }, [sessionId]);

//   const handleCheckboxChange = (outletId) => {
//     // Toggle the selected outlet
//     setSelectedOutlets((prevSelected) =>
//       prevSelected.includes(outletId)
//         ? prevSelected.filter((id) => id !== outletId)
//         : [...prevSelected, outletId]
//     );
//   };

//   const handlePassSelectedOutlets = () => {
//     // Pass the selected outlet IDs to the parent component
//     onOutletsSelected(selectedOutlets);
//   };

//   return (
//     <div>
//       <h2>Outlet List</h2>
//       <ul>
//         {outlets.map((outlet) => (
//           <li key={outlet.id}>
//             <input
//               type="checkbox"
//               onChange={() => handleCheckboxChange(outlet.outlet_id)}
//               checked={selectedOutlets.includes(outlet.outlet_id)}
//             />
//             <strong>Name:</strong> {outlet.name}, <strong>Outlet ID:</strong> {outlet.outlet_id}
//           </li>
//         ))}
//       </ul>
//       <button onClick={handlePassSelectedOutlets}>Pass Selected Outlets</button>
//     </div>
//   );
// };

// export default LocationFilter;



// import React, { useState, useEffect, useRef } from "react";
// import { Icon } from "@iconify/react";
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import "./LocationFilter.css";

// const LocationFilter = ({sessionId, setIsLoggedIn}) => {
//   const options = [
//     { label: "Mangalore", value: "Mangalore" },
//     { label: "Udupi", value: "Udupi" },
//     { label: "Bangalore", value: "Bangalore" },
//     { label: "Shivmogga", value: "Shivmogga" },
//     { label: "Mumbai", value: "Mumbai" },
//     { label: "Kerala", value: "Kerala" },
//     { label: "Tamilnadu", value: "Tamilnadu" },
//     { label: "Delhi", value: "Delhi" },
//   ];

//   const subOptionsMap = {
//     Mangalore: [
//       { label: "SnackKnight Bite", value: "SnackKnight Bite" },
//       { label: "FlavorFrenzy Bite", value: "FlavorFrenzy Bite" },
//       { label: "SpiceDelight Bite", value: "SpiceDelight Bite" },
//       { label: "CrunchyWave Bite", value: "CrunchyWave Bite" },
//       { label: "TasteSensation Bite", value: "TasteSensation Bite" },
//       { label: "SavorySlice Bite", value: "SavorySlice Bite" },
//       { label: "PepperPunch Bite", value: "PepperPunch Bite" },
//       { label: "CrispyCraze Bite", value: "CrispyCraze Bite" },
//       { label: "YumFusion Bite", value: "YumFusion Bite" },
//       { label: "MunchyMosaic Bite", value: "MunchyMosaic Bite" },
//       ],
//     Udupi: [
//       { label: "SnackKnight Bite", value: "SnackKnight Bite" },
//       { label: "FlavorFrenzy Bite", value: "FlavorFrenzy Bite" },
//       { label: "SpiceDelight Bite", value: "SpiceDelight Bite" },
//       ],
//       Bangalore: [
//       { label: "CrunchyWave Bite", value: "CrunchyWave Bite" },
//       { label: "TasteSensation Bite", value: "TasteSensation Bite" },
//       { label: "SavorySlice Bite", value: "SavorySlice Bite" },
//       ],
//       Shivmogga: [
//       { label: "PepperPunch Bite", value: "PepperPunch Bite" },
//       { label: "CrispyCraze Bite", value: "CrispyCraze Bite" },
//       { label: "YumFusion Bite", value: "YumFusion Bite" },
//       ],
//       Tamilnadu: [
//       { label: "MunchyMosaic Bite", value: "MunchyMosaic Bite" },
//       { label: "ZestZing Bite", value: "ZestZing Bite" },
//       { label: "BakedBliss Bite", value: "BakedBliss Bite" },
//       ],
//       Delhi: [
//       { label: "FieryFlavor Bite", value: "FieryFlavor Bite" },
//       { label: "GourmetGusto Bite", value: "GourmetGusto Bite" },
//       { label: "TangyTwist Bite", value: "TangyTwist Bite" },
//       ],
//       Mumbai: [
//       { label: "CrunchCastle Bite", value: "CrunchCastle Bite" },
//       { label: "DeliciousDive Bite", value: "DeliciousDive Bite" },
//       { label: "BiteFiesta", value: "BiteFiesta" },
//       ],
//       Kerala: [
//       { label: "BistroBite", value: "BistroBite" },
//       { label: "SnackSizzle Bite", value: "SnackSizzle Bite" },
//       ]
//   };

//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [mainDropdownOpen, setMainDropdownOpen] = useState(false);
//   const [selectedSubOptions, setSelectedSubOptions] = useState({});
//   const [subOptionsVisible, setSubOptionsVisible] = useState({});
//   const [currentOpenSubOption, setCurrentOpenSubOption] = useState(null);
//   const [selectAllChecked, setSelectAllChecked] = useState(false); // New state for "Select All" checkbox
//   const dropdownRef = useRef(null);
//   const subdropdownRef = useRef(null);

//   // Function to handle the "Select All" checkbox change event
//   const handleSelectAllChange = () => {
//     if (selectAllChecked) {
//       setSelectedOptions([]); // Uncheck all options
//       setSelectedSubOptions({}); // Unselect all sub-options
//     } else {
//       setSelectedOptions(options.map((option) => option.value)); // Check all options
//       const allSubOptions = {};
//       for (const option of options) {
//         allSubOptions[option.value] = subOptionsMap[option.value].map(
//           (subOption) => subOption.value
//         );
//       }
//       setSelectedSubOptions(allSubOptions); // Select all sub-options
//     }
//     setSelectAllChecked(!selectAllChecked); // Toggle the "Select All" checkbox
//   };

//   const toggleDropdown = () => {
//     setMainDropdownOpen(!mainDropdownOpen);
//   };

//   const toggleSubOptions = (option) => {
//     if (currentOpenSubOption !== option) {
//       // Close any previously open sub-dropdown
//       setCurrentOpenSubOption(option);
//       setSubOptionsVisible({ [option]: true });
//       setMainDropdownOpen(false); // Close the main dropdown
//     } else {
//       // Toggle the currently open sub-dropdown
//       setSubOptionsVisible({ [option]: !subOptionsVisible[option] });
//     }
//   };

//   // Updated handleSubOptionClick function
//   const handleSubOptionClick = (mainOption, value) => {
//     const updatedSubOptions = selectedSubOptions[mainOption]
//       ? [...selectedSubOptions[mainOption]]
//       : [];

//     if (updatedSubOptions.includes(value)) {
//       updatedSubOptions.splice(updatedSubOptions.indexOf(value), 1);
//     } else {
//       updatedSubOptions.push(value);
//     }

//     setSelectedSubOptions({
//       ...selectedSubOptions,
//       [mainOption]: updatedSubOptions,
//     });

//     // Check if all sub-options for the main location are unchecked
//     if (updatedSubOptions.length === 0) {
//       // Uncheck the main location in the main dropdown
//       handleOptionClick(mainOption);
//     }
//   };

//   // Updated handleOptionClick function
//   const handleOptionClick = (value) => {
//     if (selectedOptions.includes(value)) {
//       setSelectedOptions(selectedOptions.filter((item) => item !== value));
//       const updatedSelectedSubOptions = { ...selectedSubOptions };
//       delete updatedSelectedSubOptions[value];
//       setSelectedSubOptions(updatedSelectedSubOptions);
//     } else {
//       setSelectedOptions([...selectedOptions, value]);
//       // Check all checkboxes in the sub-dropdown for the selected main location
//       setSelectedSubOptions({
//         ...selectedSubOptions,
//         [value]: subOptionsMap[value].map((subOption) => subOption.value),
//       });
//     }
//   };

//   // Filter selected sub-options to exclude those present in the main options
//   const selectedSubOptionsOnly = Object.keys(selectedSubOptions).reduce(
//     (result, mainOption) => {
//       result[mainOption] = selectedSubOptions[mainOption].filter(
//         (subOption) => !selectedOptions.includes(subOption)
//       );
//       return result;
//     },
//     {}
//   );

//   // Function to handle the removal of a sub-option
//   const removeSubOption = (mainOption, subOptionValue) => {
//     const updatedSubOptions = selectedSubOptions[mainOption].filter(
//       (subOption) => subOption !== subOptionValue
//     );

//     setSelectedSubOptions({
//       ...selectedSubOptions,
//       [mainOption]: updatedSubOptions,
//     });

//     // Check if all sub-options for the main location are unchecked
//     if (updatedSubOptions.length === 0) {
//       // Uncheck the main location in the main dropdown
//       handleOptionClick(mainOption);
//     }
//   };


//   // UseEffect to add event listener for clicks outside the dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setMainDropdownOpen(false);
//       }
//       if (subdropdownRef.current && !subdropdownRef.current.contains(event.target)) {
//         setSubOptionsVisible(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef], [subdropdownRef]);

//   return (
//     <div className="TEST-dropdown">
//       <p>{sessionId}</p>
//       {/* Main Dropdown */} 
//       <button
//         className={`dropdown-header c-pointer ${mainDropdownOpen ? "open" : ""}`}
//         onClick={toggleDropdown}
//       >
//         {/* <div className="d-flex align-item-center">Outlets &nbsp;&nbsp;<Icon icon="uiw:down" /></div> */}
//         <div className="d-flex space-between">
//                 <div>
//                 Outlets 
//                 </div>
//                 <div>
//                 <Icon icon="uiw:down" />
//                 </div>
//               </div>
        
//       </button>
//       {mainDropdownOpen && (
//         <div className="dropdown-options"  ref={dropdownRef}>
//           {/* "Select All" checkbox */}
//           <div className="option dropdown-color">

//           <FormControlLabel control={<Checkbox defaultChecked size="small" />} label="Select All"  checked={selectAllChecked}
//                 onChange={handleSelectAllChange} />
  
//           </div>
//           {options.map((option) => (
//             <div key={option.value} className="option dropdown-color">
//               <FormControlLabel control={<Checkbox defaultChecked size="small"  />} label={option.label}  value={option.value}
//                   checked={selectedOptions.includes(option.value)}
//                   onChange={() => handleOptionClick(option.value)}/>
           
//             </div>
//           ))}
//         </div>
//       )}
//       <br />
//       <br />
//       {/* Sub Drop down */}
//       <div className="d-flex g-20" style={{ flexWrap: "wrap" }}>
//         {selectedOptions.map((selectedOption) => (
//           <div key={selectedOption} className="second-dropdown" >
//             <button
//               className="dropdown-header c-pointer"
//               onClick={() => toggleSubOptions(selectedOption)}
//             >
//               <div className="d-flex space-between">
//                 <div>
//                 {selectedOption} 
//                 </div>
//                 <div>
//                 <Icon icon="uiw:down" />
//                 </div>
//               </div>
//                {/* <div className="d-flex align-item-center">{selectedOption} &nbsp; <Icon icon="uiw:down" /></div> */}
              
//             </button>
//             {subOptionsVisible[selectedOption] && (
//               <div className="dropdown-sub-options" ref={subdropdownRef} >
//                 {/* Add checkboxes and options for the second dropdown here */}
//                 {subOptionsMap[selectedOption] &&
//                   subOptionsMap[selectedOption].map((subOption) => (
//                     <div key={subOption.value} className="option dropdown-color">
//                       <FormControlLabel control={<Checkbox defaultChecked size="small" />} label={subOption.label}   value={subOption.value}
//                           checked={
//                             selectedSubOptionsOnly[selectedOption] &&
//                             selectedSubOptionsOnly[selectedOption].includes(
//                               subOption.value
//                             )
//                           }
//                           onChange={() =>
//                             handleSubOptionClick(
//                               selectedOption,
//                               subOption.value
//                             )
//                           }/>
                   
//                     </div>
//                   ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       {/* Display selected options */}
//       <div className="selected-options">
//         <div className="mt-2">
//           {selectedOptions.map((option) => (
//             <div key={option}>
//               {option}

//               <div
//                 className="d-flex g-10 align-item-center"
//                 style={{ flexWrap: "wrap",marginTop:'1vw' }}
//               >
//                 {selectedSubOptionsOnly[option] &&
//                   selectedSubOptionsOnly[option].map((subOption) => (
//                     <div
//                       className="brand-buttons d-flex space-between "
//                       key={subOption}
//                     >
//                       <div>{subOption}</div>
//                       &nbsp;
//                       <Icon
//                         icon="icon-park-solid:close-one"
//                         className="f-20 close-btn c-pointer txt-dark-grey"
//                         onClick={() => removeSubOption(option, subOption)}
//                       />
//                     </div>
//                   ))}
//               </div>
// <br />
//               <hr />
//               <br />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LocationFilter;