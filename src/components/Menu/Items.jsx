import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Select from 'react-select'
import { colourOptions, Option } from './Filter'
import './Items.css'


import {Link, Route, BrowserRouter as  Router, Routes, useNavigate } from 'react-router-dom'

// import React from 'react'
import React, { useState } from 'react';
import './Items.css';

const Items = () => {
  const navigate = useNavigate();
const handleAddItem = () =>{
  navigate("/handleAddItem");
};
const handleStock = () =>{
  navigate("/handleStock");
};


    
    return (
        <div className="menu-page">
          <div className="div">
          <div className='item-top'>
            
            <div className="stock-control">
              <button className="p-outline-button" onClick={handleStock}>
                Stock Control
              </button>
            </div>
            <div className="add-multi-item">
              <button className="p-button bg-purple" onClick={handleAddItem}>
                Add item <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="search-items">
              <i className='search-icon-s'><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                  <input className="input-field-s" placeholder='Search Items' />
            </div>
            <div className="bulk-actions">
              <button className="p-outline-button">
                <div className=""><FontAwesomeIcon icon={faBars} /> Bulk Actions</div>
              </button>
            </div>
            <div className="text-wrapper-7">Items</div>
            
            <div className="group">
              <div className="text-wrapper-8">Name</div>
              <div className="text-wrapper-9">Category</div>
              <div className="text-wrapper-10">Price</div>
              <div className="text-wrapper-11">Type</div>
              <div className="text-wrapper-14">Tags</div>
              <div className="text-wrapper-15">Availability</div>
              <div className="text-wrapper-16">Edit</div>
              <div className="text-wrapper-17">Archive</div>
              </div>
              </div>
              {/* <p>Name</p>
              <p>Category</p>
              <p>Price</p>
              <p>Type</p>
              <p>Stock</p>
              <p>Hide</p>
              <p>Tags</p>
              <p>Availability</p>
              <p>Edit</p>
              <p>Archive</p> */}

              </div>

              <div className="content-group">
              <div className='i-frame'>
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger + Pepsi + Fries</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg>
                    </p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

                  <p className='txt-grey item-available-spacing'>Available</p>

                  <p className='txt-dark-grey item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
               <div className='overlap-6'>
                <div className='item-name-container'>
                  <p className='item-image' ><svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="17.5" cy="17.5" r="17.5" fill="#FFF3CA"/>
                  </svg>
                  </p>
                  <p className='txt-black item-name-spacing'>Chicken burger</p>
                  <p className='txt-orange item-cat-spacing'>Bite of the day</p>
                  <p className='txt-black item-price-spacing'>₹112</p>
                  <p className='txt-green item-type-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M20 4v16H4V4h16m2-2H2v20h20V2M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6Z"/></svg></p>
                                    
                  <div className='item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Best seller</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>Must Try</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>New</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border-spicy'>Spicy</p>
                    </div>
                  </div>

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

export default Items