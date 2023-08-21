import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

import Select from 'react-select'
import { colourOptions, Option } from './Filter'

import React, { useState } from 'react';
import './CreateNewAddonGroups.css'
const CreateNewAddonGroups = () => {
    // code for filter dropdown
  const [selectedOptions, setSelectedOptions] = useState([])
  const [selectedCity, setSelectedCity] = useState('')

  const handleChange = (selected) => {
    setSelectedOptions(selected)
  }

  const handleChangeCity = (selected) => {
    setSelectedCity(selected?.value || '')
    setSelectedOptions([])
  }

  const containerStyle = {
    padding: '20px',
    height: '30px',
    position: 'relative',
    width: '400px',
    marginLeft: '-20px',
    marginTop: '0px',
  }

  const selectedOptionsStyle = {
    marginTop: '8px',
  }


  // Options for the city dropdown
  const cityOptions = [
    { value: 'Mangalore', label: 'Mangalore' },
    { value: 'Bangalore', label: 'Bangalore' },
  ]

  // Filter the options based on the selected city
  const filteredOptions =
    colourOptions.find((option) => option.label === selectedCity)?.options || []

  // Check if there are selected options for the selected city
  const hasSelectedOptionsForCity =
    selectedOptions.filter((option) => option.label === selectedCity).length > 0



// Code for tags drop down





  return (
    <div>
      <div className='addons-group-margin'>
        <div className='addons-group-filter'>
        
              <br />
              <br />
        <div className="addons-group-left-section">
          <div className="addons-group-heading">Create Addon Groups</div>
          <p className="addons-group-name txt-grey">Addon Group name</p>
          <div className="addons-group-name-position">
            <input className="custom-input" type="text" name="" id="" placeholder='Enter Addon group name' />
          </div>

          <p className="addons-group-soldout txt-grey">Associate Item</p>
          <div className="addons-group-soldout-position">
            <div class="dropdown">
              <select class="dropbtn" name="languages" id="lang">
                <option value="" disabled="">
                  Select Associate item
                </option>
                <option value="javascript">JavaScript</option>
                <option value="php">PHP</option>
                <option value="java">Java</option>
                <option value="golang">Golang</option>
                <option value="python">Python</option>
                <option value="c#">C#</option>
                <option value="C++">C++</option>
                <option value="erlang">Erlang</option>
              </select>
            </div>
          </div>

          

          
          <div className='addons-group-price-right'>
            <p className='addons-group-type txt-grey'>Type</p>
            <div className="addons-group-type-position">
            <div class="dropdown">
              <select class="dropbtn" name="languages" id="lang">
                <option value="" disabled="">
                  Select Addon Type
                </option>
                <option value="javascript">Veg</option>
                <option value="php">Non veg</option>
                
              </select>
            </div>
          </div>
          <div className='addons-group-submit'>
             <button class="add-item-button">Add Group</button>
          </div>
          <div className='addons-group-line-position'>
            <img src="Images/line.svg" alt="" />
          </div>
          </div>
        </div>
            <div className='addons-group-preview-posiiton'>
                <p className='addons-group-preview txt-dark-grey'>Preview</p>
            </div>
            <div className='addons-group-preview-position'>
                <div className='addons-group-body-preview'>
                  <p className='txt-grey'>Addon Name</p>
                  <p className='txt-black weight'>White Chocolate Sauce</p>
                </div>
            </div>
            <br />
            <div className='addons-group-preview-position'>
                <div className='addons-group-body-preview'>
                  <p className='txt-grey'>Addon Group</p>
                  <p className='txt-black weight'>5</p>
                </div>
            </div>
            <br />
            <div className='addons-group-preview-position'>
                <div className='addons-group-body-preview'>
                  <p className='txt-grey'>Price</p>
                  <p className='txt-black weight'>None</p>
                </div>
            </div>
            <div className='addons-group-type-header-preview-position'>
                <div className='addons-group-body-preview'>
                  <p className='txt-grey'>Addon Type</p>
                  <p className='txt-green addons-group-type-preview-position'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg>

                  </p>
                </div>
            </div>
      </div>
      </div>
    </div>
  );
}

export default CreateNewAddonGroups

