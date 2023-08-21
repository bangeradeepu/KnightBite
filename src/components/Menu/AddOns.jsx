import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Select from 'react-select'
import { colourOptions, Option } from './Filter'

import './AddOns.css'


import {Link, Route, BrowserRouter as  Router, Routes, useNavigate } from 'react-router-dom'

// import React from 'react'
import React, { useState } from 'react';
import './Items.css';

const AddOns = () => {
  const navigate = useNavigate();
const CreateAddons = () =>{
  navigate("/CreateAddons");
};




    return (
        <div className="AO-menu-page">
          <div className="AO-div">
          <div className='item-top'>
            {/* Drop down filter */}
            <div className="AO-frame">
           
            </div>
            <div className="AO-stock-control">
              <button className="p-outline-button">
                Stock Control
              </button>
            </div>
            <div className="AO-add-multi-item">
              <button className="p-button bg-purple" onClick={CreateAddons}>
                Create new <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="AO-search-items">
              <i className='search-icon-s'><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                  <input className="input-field-s" placeholder='Search Items' />
            </div>
            <div className="AO-bulk-actions">
              <button className="p-outline-button">
                <div className=""><FontAwesomeIcon icon={faBars} /> Bulk Actions</div>
              </button>
            </div>
            <div className="AO-text-wrapper-7">Addons</div>
            
            <div className="AO-group">
              <div className="AO-text-wrapper-8">Name</div>
              <div className="AO-text-wrapper-11">Sold out</div>
              <div className="AO-text-wrapper-12">Addons groupss</div>
              <div className="AO-text-wrapper-13">Hide</div>
              <div className="AO-text-wrapper-14">Price</div>
              <div className="AO-text-wrapper-15">Availability</div>
              <div className="AO-text-wrapper-16">Edit</div>
              <div className="AO-text-wrapper-17">Archive</div>
              {/*  */}
              </div>
              </div>
              </div>

              <div className="AO-content-group">
              <div className='i-frame'>
              <div className='overlap-6'>
                <div className='item-name-container'>
    
                  <p className='txt-black AO-item-name-spacing'>Chicken burger</p>
                  <p className='txt-dark-grey AO-item-price-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024"><path fill="currentColor" d="M704 288h131.072a32 32 0 0 1 31.808 28.8L886.4 512h-64.384l-16-160H704v96a32 32 0 1 1-64 0v-96H384v96a32 32 0 0 1-64 0v-96H217.92l-51.2 512H512v64H131.328a32 32 0 0 1-31.808-35.2l57.6-576a32 32 0 0 1 31.808-28.8H320v-22.336C320 154.688 405.504 64 512 64s192 90.688 192 201.664v22.4zm-64 0v-22.336C640 189.248 582.272 128 512 128c-70.272 0-128 61.248-128 137.664v22.4h256zm201.408 476.16a32 32 0 1 1 45.248 45.184l-128 128a32 32 0 0 1-45.248 0l-128-128a32 32 0 1 1 45.248-45.248L704 837.504V608a32 32 0 1 1 64 0v229.504l73.408-73.408z"/></svg></p>
                  <p className='txt-green AO-item-type-spacing'>4</p>
                  <p className='txt-dark-grey AO-item-stock-spacing'>₹11</p>
                  <p className='txt-dark-grey AO-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  
                 

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              
              
              
             
              </div>
            </div>
          
        </div>
      );
}

export default AddOns