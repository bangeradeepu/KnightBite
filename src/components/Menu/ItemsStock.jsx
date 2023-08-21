import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, Menu, MenuItem, MenuButton } from "@mui/base";
import Checkbox from '@mui/material/Checkbox'
import { menuItemClasses } from '@mui/base/MenuItem'
import { styled } from '@mui/system'
import {
  faMapLocationDot,
  faChevronDown,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons' 


import "./ItemsStock.css";

import {
  Link,
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";

import React, { useState } from "react";
import "./Items.css";




const blue = {
  100: '#DAECFF',
  200: '#99CCF3',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
}

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#2e2e2e',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
}




// const StyledListbox = styled('ul')(
//   ({ theme }) => `
//   font-family: IBM Plex Sans, sans-serif;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   padding: 6px;
//   margin: 12px 0;
//   min-width: 160px;
//   border-radius: 20px;
//   overflow: auto;
//   outline: 0px;
//   zIndex: 2;
//   height: '40px';
//   margin-top:47px;
//   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
//   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
//   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

//   `
// )

const StyledMenuItem = styled(MenuItem)(
  ({ theme }) => `
  list-style: none;
  padding: 15px 0px 0px 5px;
  border-radius: 8px;
  cursor: default;
  user-select: none;
  zIndex: 2;

  &:last-of-type {
    border-bottom: none;
  }

  &.${menuItemClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  }

  &.${menuItemClasses.disabled} {
    color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
  }

  
  }
  `
)

const TriggerButton = styled(MenuButton)(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  border-radius: 30px;
  top:0px;
  padding: 8px 14px;
  line-height: 1.5;
  width:150px;
  zIndex: 2;

  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
  }

  &:focus-visible {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
  }
  `
)



const LocationDropdown = ({
  selectedLocation,
  availableLocations,
  handleLocationChange,
}) => {
  return (
    <div style={{ margin: '20px', position: 'relative', zIndex: 3}}>
      <Dropdown>
      <TriggerButton style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: 2 }}>
          <span style={{ marginRight: '10px' }}>
          <FontAwesomeIcon
  icon={faMapLocationDot}
  style={{
    color: '#ff7800',
    width: '20px',
    height:'20px', // Set your primary color
  
  }}
/>
          </span>
          <span style={{ marginRight: '14px' }}>Locations</span>
          <FontAwesomeIcon
            icon={faChevronDown} 
            style={{ color: '#000' }}
          />
        </TriggerButton>
        <Menu
  style={{
    position: 'relative',
    zIndex: 2,
    borderRadius: '20px',
    boxSizing: 'border-box',
    border: '1px solid',
    background: '#fff',
    height: '200px',
    marginTop: '250px',
    width: '210px', // Adjust the width as needed
    fontSize: '0.875rem',
    flexDirection: 'column', 
    alignItems:'center',
    padding: '6px 16px 6px 16px',
    display:'flex',

  
    // Adjust the flexDirection value as needed
  }}
>
  {availableLocations.map((location) => (
    <StyledMenuItem
      key={location}
      disabled={location === selectedLocation}
    >
      <label
        style={{
          display: 'flex',
          alignItems: 'center',
          marginRight:'60px',
          paddingRight: '0px', // Adjust the padding to remove space on the left
        }}
      >
        <Checkbox
          onChange={() => handleLocationChange(location)}
          style={{ marginRight: '10px' }}
        />
        {location}
      </label>
    </StyledMenuItem>
  ))}
</Menu>
      </Dropdown>
    </div>
  )
}


const ComponentDropdown = ({
  selectedLocation,
  selectedComponents,
  handleComponentCheckboxChange,
  handleRemoveComponent,
}) => {
  const handleComponentRemove = (component) => {
    handleRemoveComponent(component)
  }

  return (
    <div style={{ display: 'flex', height: '40px'}}>
      <Dropdown>
        <TriggerButton style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: '2'}}>
          <span style={{ marginRight: '30px', marginLeft: '10px'}}>
            {selectedLocation}
          </span>
          <FontAwesomeIcon icon={faChevronDown} />
        </TriggerButton>
        <Menu
  style={{
    zIndex: 2,
    borderRadius: '20px',
    boxSizing: 'border-box',
    border: '1px solid',
    background: '#fff',
    height: '200px',
    marginTop: '20px',
    width: '260px', // Adjust the width as needed
    fontSize: '0.875rem',
    padding: '1px 1px 1px 1px',
    overflow:'scroll',
    
    // Adjust the flexDirection value as needed
  }}
>
          <div style={{
            marginRight:'20px',
            width:'150px',
        
          }}>
          {selectedLocation === 'Mangalore' && (
            <>
          
              <StyledMenuItem>
                <label
        style={{
          // Adjust the padding to remove space on the left
        }}
      >
                <Checkbox
                  checked={selectedComponents.includes('Chicken Bite')}
                  onChange={() => handleComponentCheckboxChange('Chicken Bite')}
                    
                />
                Chicken Bite
                </label>
              </StyledMenuItem>
              
              <StyledMenuItem>
                <Checkbox
                  checked={selectedComponents.includes('Masala Bite')}
                  onChange={() => handleComponentCheckboxChange('Masala Bite')}
                />
                Masala Bite
              </StyledMenuItem>
            </>
          )}
          {selectedLocation === 'Bangalore' && (
            <>
              <StyledMenuItem>
                <Checkbox
                  checked={selectedComponents.includes('Knight Bite')}
                  onChange={() => handleComponentCheckboxChange('Knight Bite')}
                />
                Knight Bite
              </StyledMenuItem>
              <StyledMenuItem>
                <Checkbox
                  checked={selectedComponents.includes('Bite')}
                  onChange={() => handleComponentCheckboxChange('Bite')}
                />
              Bite
              </StyledMenuItem>
              
              <StyledMenuItem>
                <Checkbox
                  checked={selectedComponents.includes('KB')}
                  onChange={() => handleComponentCheckboxChange('KB')}
                />
                KB
              </StyledMenuItem>
              <StyledMenuItem>
                <Checkbox
                  checked={selectedComponents.includes('Sandwich Bite')}
                  onChange={() =>
                    handleComponentCheckboxChange('Sandwich Bite')
                  }
                />
                Sandwich Bite
              </StyledMenuItem>
              <StyledMenuItem>
                <Checkbox
                  checked={selectedComponents.includes('Sandwich ')}
                  onChange={() =>
                    handleComponentCheckboxChange('Sandwich ')
                  }
                />
                Sandwich
              </StyledMenuItem>
              <StyledMenuItem>
                <Checkbox
                  checked={selectedComponents.includes('Sand ')}
                  onChange={() =>
                    handleComponentCheckboxChange('Sand ')
                  }
                />
                Sand
              </StyledMenuItem>
              <StyledMenuItem>
                <Checkbox
                  checked={selectedComponents.includes('wich ')}
                  onChange={() =>
                    handleComponentCheckboxChange('wich ')
                  }
                />
                wich
              </StyledMenuItem>
              <StyledMenuItem>
                <Checkbox
                  checked={selectedComponents.includes('lich ')}
                  onChange={() =>
                    handleComponentCheckboxChange('lich ')
                  }
                />
                lich
              </StyledMenuItem>
              <StyledMenuItem>
                <Checkbox
                  checked={selectedComponents.includes('cake ')}
                  onChange={() =>
                    handleComponentCheckboxChange('cake ')
                  }
                />
                cake
              </StyledMenuItem>
            </>
          )}
          </div>
        </Menu>
      </Dropdown>

      <div style={{ marginLeft: '20px' }}>
        <SelectedSubComponents
          selectedComponents={selectedComponents}
          handleRemoveComponent={handleRemoveComponent} // Pass the handler here
        />
      </div>
    </div>
  )
}

const SelectedSubComponents = ({
  selectedComponents,
  handleRemoveComponent,
}) => {
  const componentsRows = [];
  for (let i = 0; i < selectedComponents.length; i += 8) {
    const row = selectedComponents.slice(i, i + 8);
    componentsRows.push(row);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      {componentsRows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((component) => (
            <div
              key={component}
              style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #ccc',
                height: '40px',
                borderRadius: '20px',
                paddingLeft: '6px',
                paddingRight: '6px',
                marginBottom: '8px',
                marginRight: '8px', // Add margin between components
              }}
            >
              <span style={{ flex: 1 }}>{component}</span>
              <button
                style={{
                  marginLeft: '8px',
                  border: 'none',
                  height: '40px',
                  background: 'none',
                  cursor: 'pointer',
                  color: '#000',
                  transition: 'color 0.5s',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onClick={() => handleRemoveComponent(component)}
                onMouseOver={(e) => (e.target.style.color = 'red')}
                onMouseOut={(e) => (e.target.style.color = '#000')}
              >
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  style={{ color: '#000', fontSize: '18px' }}
                />
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default function ItemsStock() {
  const [filter, setFilter] = useState('all') // Filter state: 'all', 'inStock', 'outStock'
  // Function to handle filter clicks
  const handleFilterClick = (filterType) => {
    setFilter(filterType)
  }
  
  const navigate = useNavigate();
  const CreateAddons = () => {
    navigate("/CreateAddons");
  };

  // Location filter
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const [selectedComponents, setSelectedComponents] = React.useState([]);

  const availableLocations = ['Mangalore', 'Bangalore']; // Add more locations as needed

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
    setSelectedComponents([]);
  };

  const handleComponentCheckboxChange = (component) => {
    if (selectedComponents.includes(component)) {
      setSelectedComponents(
        selectedComponents.filter(
          (selectedComponent) => selectedComponent !== component
        )
      )
    } else {
      setSelectedComponents([...selectedComponents, component])
    }
  }

  const handleRemoveComponent = (component) => {
    setSelectedComponents(
      selectedComponents.filter(
        (selectedComponent) => selectedComponent !== component
      )
    )
  }
  return (
    <div className="IS-menu-page">
      <div className="IS-div">
        <div className="IS-item-top">
          {/* Drop down filter */}
          <div className="IS-frame">
          <div style={{ display: 'flex', alignItems: 'center', position: 'relative', zIndex: '2'}}>
            
      <LocationDropdown
        selectedLocation={selectedLocation}
        availableLocations={availableLocations}
        handleLocationChange={handleLocationChange}
      />
      
      {selectedLocation && (
        <ComponentDropdown
          selectedLocation={selectedLocation}
          selectedComponents={selectedComponents}
          handleComponentCheckboxChange={handleComponentCheckboxChange}
          handleRemoveComponent={handleRemoveComponent}
        />
      )}
    </div>
          </div>

          <div className="IS-add-multi-item">
  <div className="filter-buttons-container">
    <button
      className={filter === 'all' ? 'active-filter' : 'filter-button'}
      onClick={() => handleFilterClick('all')}
    >
      All
    </button>
    <button
      className={filter === 'inStock' ? 'active-filter' : 'filter-button'}
      onClick={() => handleFilterClick('inStock')}
    >
      In Stock
    </button>
    <button
      className={filter === 'outStock' ? 'active-filter' : 'filter-button'}
      onClick={() => handleFilterClick('outStock')}
    >
      Out of Stock
    </button>
  </div>
</div>

          <div className="IS-search-name">
            <i className="search-icon-s">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
            <input className="input-field-s" placeholder="Search Name" />
          </div>
          <div className="IS-search-items">
            <i className="search-icon-s">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </i>
            <input className="input-field-s" placeholder="Search Category" />
          </div>
        
          <div className="IS-text-wrapper-7">Items Stock Control</div>

          <div className="IS-group">
            <div className="IS-text-wrapper-8">Name</div>
            <div className="IS-text-wrapper-14">Type</div>
            <div className="IS-text-wrapper-15">Category</div>
            <div className="IS-text-wrapper-16">Price</div>
            <div className="IS-text-wrapper-17">Availability</div>
            {/*  */}
          </div>
        </div>

        <div className="IS-content-group">
          <div className="IS-i-frame">
            <div className="IS-overlap-6">
              <div className="IS-item-name-container">
                <p className="txt-black IS-item-name-spacing">Chicken burger</p>
                <p className="txt-green IS-item-hide-spacing">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg>

                </p>

                <p className="txt-grey IS-item-available-spacing">
                  super saver meal box
                </p>

                <p className="txt-dark-grey IS-item-edit-spacing">₹200</p>
                <p className="txt-dark-grey IS-item-arch-spacing">
                  <label className="switch">
                    <input type="checkbox"></input>
                    <span className="slider round"></span>
                  </label>
                </p>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
