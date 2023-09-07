import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import React, { useState } from "react";



import './Categories.css';


import {Link, Route, BrowserRouter as  Router, Routes, useNavigate } from 'react-router-dom'

// import React from 'react'
import './Items.css';
import LocationFilter from '../../LocationFilter';


const Categories = () => {
  const navigate = useNavigate();
const handleAddItem = () =>{
  navigate("/handleAddItem");
};

  //
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOutsideClick = (event) => {
    if (event.target === modalRef.current) {
      closeModal();
    }
  };

  
    return (
        <div className="cat-menu-page">
          <div className="cat-div">
          <div className='item-top'>
            {/* Drop down filter */}
            
            
            <div className="cat-add-multi-item">
              <button className="p-button bg-purple" onClick={openModal}>
                Create new <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="cat-search-items">
              <i className='search-icon-s'><FontAwesomeIcon icon={faMagnifyingGlass} /></i>
                  <input className="input-field-s" placeholder='Search Items' />
            </div>
            <div className="cat-bulk-actions">
              <button className="p-outline-button">
                <div className="cat-"><FontAwesomeIcon icon={faBars} /> Bulk Actions</div>
              </button>
            </div>
            <div className="cat-text-wrapper-7">Categories</div>
            
            <div className="cat-group">
              <div className="cat-text-wrapper-8">Name</div>
              <div className="cat-text-wrapper-14">Brands</div>
              <div className="cat-text-wrapper-13">Hide</div>
              <div className="cat-text-wrapper-15">Availability</div>
              <div className="cat-text-wrapper-16">Edit</div>
              <div className="cat-text-wrapper-17">Archive</div>
              {/*  */}
              </div>
              </div>
              </div>

              <div className="cat-content-group">
              <div className='cat-i-frame'>
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Combo 1</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg> */}
                    </p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Combo 2</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Combo 3</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              

              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
            
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg></p>
                </div>
              </div>
              
              <br />
              <div className='cat-overlap-6'>
                <div className='cat-item-name-container'>
                  <p className='txt-black cat-item-name-spacing'>Bite of the day</p>
                  <div className='cat-item-tag-container'> 
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;KB&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>
                    <div className='tag-spacing'>
                      <p className='txt-black tag-border'>&nbsp;Pancake&nbsp;</p>
                    </div>
                    <div className='tag-spacing-new'>
                      <p className='txt-black tag-border-new'>Mandarin</p>
                    </div>
                  </div>
                  <p className='txt-dark-grey cat-item-hide-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3h-.17m-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7Z"/></svg></p>
                  <p className='txt-grey cat-item-available-spacing'>Available</p>
                  <p className='txt-dark-grey cat-item-edit-spacing'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Z"/></svg></p>
                  <p className='txt-dark-grey cat-item-arch-spacing'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.413-.588T3 19V6.5q0-.375.125-.675t.325-.575l1.4-1.7q.2-.275.5-.413T6 3h12q.35 0 .65.137t.5.413l1.4 1.7q.2.275.325.575T21 6.5V19q0 .825-.588 1.413T19 21H5Zm.4-15h13.2l-.85-1H6.25L5.4 6ZM12 18l4-4l-1.4-1.4l-1.6 1.6V10h-2v4.2l-1.6-1.6L8 14l4 4Z"/></svg>
                    </p>
                </div>
              </div>
              
              <br />
              
              {modalVisible && (
              <div
                className={`cat-modal ${
                  modalVisible ? "cat-modal-open" : ""
                }`}
              >
               
                <div className="cat-modal-content">
                <span className="cat-modal-close" onClick={closeModal}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#2e2e2e"
                        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                      />
                    </svg>
                  </span>
                  <p className="cat-create-header txt-black">Create new Category</p>
                  <div className="cat-modal-content-inside">

                  <p className="cat-create-name txt-grey">Category Name</p>
                  <input
                    className="custom-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter Category"
                    style={{width:'50%'}}
                  />
                  <p className="cat-create-name txt-grey">Addon Groups</p>
                  <select
                          class="dropbtn txt-dark-grey"
                          name="languages"
                          id="lang"
                          style={{width:'54%'}}
                        >
                          <option value="" disabled="">
                            Choose Addon groups
                          </option>
                          <option value="javascript">C.O.D</option>
                          <option value="php">Online Payment</option>
                        </select>
                  <p className="cat-create-name txt-grey">Brands</p>
                  <LocationFilter />
                     
                  <br /><br />
                                      <button class="add-item-button">Add Category</button>
                    </div>
                  

                </div>
              </div>
            )}
              </div>
            </div>
          
        </div>
      );
}

export default Categories