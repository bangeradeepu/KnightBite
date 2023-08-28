import { useState } from "react";
import React from "react";
import { makeStyles } from '@mui/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Checkbox from '@mui/material/Checkbox'

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedLocation, setSelectedLocation] = React.useState([]);
  const [selectedOptions, setSelectedOptions] = React.useState({});
  const [extraMenusOpen, setExtraMenusOpen] = React.useState({});

const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
      return 'Location';
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

  export {selectedOptions,selectedLocation,handleSelectAll, handleLocationSelect, handleClick, handleClose, availableSubcomponents, handleExtraMenuOpen, handleExtraMenuClose, handleOptionSelect, generateLocationLabel, handleOptionDeselect}
  