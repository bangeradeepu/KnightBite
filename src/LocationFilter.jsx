import { useState, useEffect  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'

import {
  faFilter,
  faBars,
  faUser,
  faCalendarDays,
  faLocationDot,
  faChevronDown,
  faMapLocationDot,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";

import zIndex from "@mui/material/styles/zIndex";

// Filter
const useStyles = makeStyles({
  root: {},
  icon: {},
  redIcon: {},
  selectedOptionsContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: -59,
    marginLeft: '5px',
  },
  selectedOption: {
    background: '#fffff',
    border: '1px solid #ccc',
    borderRadius: 20,
    padding: '8px 10px',
    marginRight: 5,
    marginLeft: 5,
    display: 'flex',
    alignItems: 'center',
  },
  closeIcon: {
    marginLeft: 5,
    cursor: 'pointer',
  },
  scrollbar: {
    height: '80px', // Adjust the scroll height as needed
    width: '100%', // Adjust the width as needed
    overflowY: 'auto',
    scrollbarWidth: 'thin', // For Firefox
    '&::-webkit-scrollbar': {
      width: '8px', // For Chrome, Safari, and Opera
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#ccc', // Customize the thumb color
      borderRadius: '4px', // Rounder corners for the thumb
    },
  },

  selectedOptionsRow: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'nowrap', // Set to 'nowrap' initially to prevent wrapping
    marginTop: '10px',
    marginLeft: '10px', // Adjust as needed
  },
})
// ... (import statements and makeStyles definition)

const availableSubcomponents = {
    Mangalore: ['Knight Bite', 'Pancake Bite', 'Cake Bite', 'rome Bite', 'ome Bite','rdfzfzvvvvvvvvvuuuuuuuuuuuuuuuu','fzfzdfzf','jsois'],
    Bangalore: ['Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite','rdfzfz','fzfzdfzf','jsois'],
    Hubli: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Pune: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Udupi: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Manipal: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Hydrabad: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Belgum: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Kerala: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Mumbai: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Mysore: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Madikeri: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],
    Goa: ['Sandwich Bite', 'Waffle Bite','Chicken Bite', 'Masala Bite','rome Bite', 'ome Bite'],

  } 

const LocationFilter = () => {
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
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto'; // Enable main scroll when the popup dropdown is closed
  }

  // Clean up the effect
  return () => {
    document.body.style.overflow = 'auto'; // Make sure to reset the scroll behavior when the component unmounts
  };
}, [popupDropdownOpen]);

 

   const handleLocationSelect = (location) => {
  if (location === 'Select All') {
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
      setSelectedLocation(selectedLocation.filter((selected) => selected !== location));
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
      return 'Outlet';
    } else if (numSelected === 1) {
      return selectedLocation[0];
    } else {
      return ` ${numSelected} Outlets`;
    }
  };

 const handleOptionDeselect = (location, option) => {
  setSelectedOptions((prevState) => ({
    ...prevState,
    [location]: prevState[location].filter((selected) => selected !== option),
  }));

  const allSubcomponentsDeselected =
    selectedOptions[location]?.length === 1 && option === selectedOptions[location][0];

  if (allSubcomponentsDeselected) {
    setSelectedLocation(selectedLocation.filter((selected) => selected !== location));
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

  return (
    <div>
       <Button
        style={{
          border: '1px solid black',
          borderRadius: '30px',
          color: 'black',
          top: '10px',
          marginLeft: '10px',
        }}
        className={classes.root}
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faMapLocationDot} style={{marginRight:'10px',color:'#ED8382',fontSize:'18px'}}/>
        {generateLocationLabel()}
        <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:'10px'}} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          className: classes.scrollbar,
          style: {
            marginTop: '10px',
            width: '250px',
            border: '1px solid',
            borderRadius: '5px',
            outline: 'none',
            overflow: 'auto',
            height:'200px',
          },
        }}
      >
        <MenuItem key="Select All" onClick={() => handleLocationSelect('Select All')}>
          <Checkbox
            checked={selectedLocation.length === Object.keys(availableSubcomponents).length}
            indeterminate={selectedLocation.length > 0 && selectedLocation.length < Object.keys(availableSubcomponents).length}
          />
          Select All
        </MenuItem>
        
        {Object.keys(availableSubcomponents).map((location) => (
          <MenuItem key={location} onClick={() => handleLocationSelect(location)}>
            <Checkbox checked={selectedLocation.includes(location)} />
            {location}
          </MenuItem>
        ))}
      </Menu>
       {selectedLocation.length > 0 && (
    <div className={classes.selectedOptionsContainer} style={{display: 'flex', flexWrap: 'wrap'}}>
      {selectedLocation.map((location) => (
        <div key={location} style={{ marginRight: '10px', marginTop:'10px'}}>
          <Button
            style={{
              border: '1px solid black',
              borderRadius: '30px',
              color: 'black',
              top: '80px',
              left: '4px',
              marginRight: '10px',
              display: 'flex',
            }}
            onClick={() => handleExtraMenuOpen(location)}
          >
            {location}
            <FontAwesomeIcon icon={faChevronDown} style={{marginLeft:'10px'}} />
          </Button>
          {extraMenusOpen[location] && (
            <Menu
              anchorEl={anchorEl}
              open={extraMenusOpen[location]}
              onClose={() => handleExtraMenuClose(location)}
              PaperProps={{
                className: classes.scrollbar,
                style: {
                  position: 'absolute',
                  top: '40px',
                  left: '0',
                  marginTop: '-350px',
                  borderRadius: '5px',
                  border: '1px solid',
                  width: '250px',
                  height: '200px',
                  overflow: 'auto',
                  marginLeft:'375px'
                },
              }}
            >
              {availableSubcomponents[location]?.map((option, index) => (
  <MenuItem key={option}>
    <Checkbox
      checked={selectedOptions[location]?.includes(option)}
      onChange={() => handleOptionSelect(location, option)}
      disabled={
        selectedOptions[location]?.length === 1 &&
        selectedOptions[location]?.includes(option)
      }
    />
    {option}
  </MenuItem>
))}

            </Menu>
          )}
        </div>
      ))}
    </div>
  )}

{selectedLocation.length > 0 && (
  <div style={{ marginTop: '100px' }}>
    {selectedLocation.map((location) => (
      <div style={{marginLeft:'10px'}}><b>{location}</b>
      <div key={location} style={{ marginTop: '0px', marginLeft: '0px', display: 'flex', flexWrap: 'wrap' }}>
        
        {selectedOptions[location]?.map((option) => (
          <div key={option} className={classes.selectedOption} style={{ marginTop: '10px', boxSizing: 'border-box', paddingRight: '10px' }}>
            <div className="grid-2">
              <div style={{ marginTop: '5px', width: 'auto' }}>
                {option}
              </div>
              <div>
                <FontAwesomeIcon className="location-close-btn"
                  icon={faCircleXmark}
                  style={{
                    // color: '#d11f1f',
                    fontSize: '20px',
                    marginLeft: '10px',
                    marginTop: '3px'
                  }}
                  onClick={() => handleOptionDeselect(location, option)}
                />
              </div>
            </div>
            
          </div>
          
        ))}
        <div style={{width:'100%',height:'1px',backgroundColor:'#aeaeae',marginTop:'10px',marginBottom:'10px'}}></div>
      </div>
      </div>
    ))}
  </div>
)}
    </div>
  )
}

export default LocationFilter