import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DeliveryBoys.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxArchive, faPencil, faEyeSlash, faFileLines, faLocationDot, faPowerOff, faPlus, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const cardData = [
    {
      id: 1,
      name: 'Deepesh',
      username: 'deepu_ban',
      phone: '6360061656',
      optionalPhone: '916465089',
      address: '2-9, Vigneshwara kripa Shambhavi Nagara, Palimar',
      emissionExp: '2023-12-31',
      insuranceExp: '2023-11-30',
      archive:'0',
    },
    {
        id: 2,
        name: 'Sajjad',
        username: 'sjd_mohammad',
        phone: '654153647',
        optionalPhone: '6273647582',
        address: 'Karkala',
        emissionExp: '2023-12-31',
        insuranceExp: '2023-11-30',
        archive:'0',
      },
      {
        id: 3,
        name: 'Sabil',
        username: 'kb_sabil',
        phone: '7415784856',
        optionalPhone: ' ',
        address: 'Mangalore',
        emissionExp: '2023-12-31',
        insuranceExp: '2023-11-30',
        archive:'0',
      },
      {
        id: 4,
        name: 'Faizal',
        username: 'kb_faizal',
        phone: '9564147856',
        optionalPhone: ' ',
        address: 'Mangalore',
        emissionExp: '2023-12-31',
        insuranceExp: '2023-11-30',
        archive:'1',
      },
     
    // Add more data objects here
  ];
const DeliveryBoys = () => {
  // Add Delivery boys
  const navigate = useNavigate();
const addDeliveryBoys = () =>{
  navigate("/addDeliveryBoys");
};
     // Open Archive modal
     const [archiveVisible, setArchiveVisible] = useState(false);

     const openArchive = () => {
       setArchiveVisible(true);
     };
   
     const closeArchive = () => {
       setArchiveVisible(false);
     };

    //  Search
    const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = cardData.filter((data) => {
    return (
      // data.archive === '0' &&
      (data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        data.username.toLowerCase().includes(searchQuery.toLowerCase()) || data.phone.includes(searchQuery))
    );
  });
  return (
    <div className="app">
      <div className="top-container">
        <div className="row">
          <input type="text" placeholder="Search Delivey boys" className="right-align f-16" value={searchQuery}
        onChange={handleSearchChange} />
        </div>
        <div className="row" style={{marginTop:'2rem'}}>
        <div className="left-align f-20" style={{marginLeft:'15rem'}}>Delivery Boys</div>

          <div className="button-container">
            <button className='p-button bg-purple' style={{width:'10rem'}} onClick={addDeliveryBoys}>Add Delivery Boy <FontAwesomeIcon icon={faPlus} /></button>
            <button className='p-outline-button' onClick={openArchive}><FontAwesomeIcon icon={faBoxArchive} /> Archive List</button>
            <button className='p-outline-button'><FontAwesomeIcon icon={faBars} /> Bulk Action</button>

          </div>
        </div>
        <div className="header txt-dark-grey">
          <div>ID No</div>
          <div style={{textAlign:'left'}}>Name</div>
          <div style={{textAlign:'left'}}>Username</div>
          <div>Phone No</div>
          <div>Phone No (Optional)</div>
          <div style={{textAlign:'left'}}>Address</div>
          <div>Login Status</div>
          <div>Track</div>
          <div>Emission Exp.</div>
          <div>Insurance Exp.</div>
          <div>Documents</div>
          <div>Password</div>
          <div>Edit</div>
          <div>Archive</div>
        </div>
      </div>
      <div className="scrollable-container">
      {filteredData.map((data) =>  data.archive === '0' ? (
        <div className="card" key={data.id}>
          <div>{data.id}</div>
            <div style={{textAlign:'left'}}>{data.name}</div>
            <div style={{textAlign:'left'}}>{data.username}</div>
            <div>{data.phone}</div>
            <div>{data.optionalPhone}</div>
            <div style={{textAlign:'left'}}>{data.address}</div>
            <div><FontAwesomeIcon icon={faPowerOff} className='txt-dark-grey f-16' style={{ cursor:'pointer'}}  /></div>
            <div><FontAwesomeIcon icon={faLocationDot} className='txt-dark-grey f-16' style={{ cursor:'pointer'}} /></div>
            <div>{data.emissionExp}</div>
            <div>{data.insuranceExp}</div>
            <div><FontAwesomeIcon icon={faFileLines} className='txt-dark-grey f-16' style={{ cursor:'pointer'}} /></div>
            <div><FontAwesomeIcon icon={faEyeSlash} className='txt-dark-grey f-16' style={{ cursor:'pointer'}}  /></div>
          <div><FontAwesomeIcon icon={faPencil} className='txt-dark-grey f-16' style={{ cursor:'pointer'}} /></div>
          <div><FontAwesomeIcon icon={faBoxArchive} className='txt-dark-grey f-16' style={{cursor:'pointer'}}  /></div>
        </div>
        ) : null
        )}  
      </div>
      {archiveVisible && (
        <div
          className={`DB-archive ${
            archiveVisible ? "DB-archive-open" : ""
          }`}
        >
          <div className="DB-archive-content">
            <div className="DB-archive-content-inside">
            <div className="grid-2">
              <p className="" style={{fontSize:'20px',marginLeft:'10px'}}>Archive List</p>
              <span
                className=""
                style={{ textAlign: "right", marginTop: "14px" }}
                onClick={closeArchive}
              >
                <FontAwesomeIcon icon={faXmark} className='f-20' />
              </span>
            </div>
            <div className="row">
          <input type="text" placeholder="Search Delivey boys" className="right-align" value={searchQuery}
        onChange={handleSearchChange} />
        </div>
        <div className="header txt-dark-grey" style={{marginLeft:'0rem',marginRight:'1.6rem'}}>
          <div>ID No</div>
          <div style={{textAlign:'left'}}>Name</div>
          <div style={{textAlign:'left'}}>Username</div>
          <div>Phone No</div>
          <div>Phone No (Optional)</div>
          <div style={{textAlign:'left'}}>Address</div>
          <div>Login Status</div>
          <div>Track</div>
          <div>Emission Exp.</div>
          <div>Insurance Exp.</div>
          <div>Documents</div>
          <div>Password</div>
          <div>Edit</div>
          <div>Archive</div>
        </div>
      <div className="scrollable-container">
      {filteredData.map((data) =>  data.archive === '1' ? (
        <div className="card" style={{marginLeft:'0rem'}} key={data.id}>
          <div>{data.id}</div>
            <div style={{textAlign:'left'}}>{data.name}</div>
            <div style={{textAlign:'left'}}>{data.username}</div>
            <div>{data.phone}</div>
            <div>{data.optionalPhone}</div>
            <div style={{textAlign:'left'}}>{data.address}</div>
            <div><FontAwesomeIcon icon={faPowerOff} className='txt-dark-grey f-16' style={{ cursor:'pointer'}}  /></div>
            <div><FontAwesomeIcon icon={faLocationDot} className='txt-dark-grey f-16' style={{ cursor:'pointer'}} /></div>
            <div>{data.emissionExp}</div>
            <div>{data.insuranceExp}</div>
            <div><FontAwesomeIcon icon={faFileLines} className='txt-dark-grey f-16' style={{ cursor:'pointer'}} /></div>
            <div><FontAwesomeIcon icon={faEyeSlash} className='txt-dark-grey f-16' style={{ cursor:'pointer'}}  /></div>
          <div><FontAwesomeIcon icon={faPencil} className='txt-dark-grey f-16' style={{ cursor:'pointer'}} /></div>
          <div><FontAwesomeIcon icon={faBoxArchive} className='txt-dark-grey f-16' style={{cursor:'pointer'}}  /></div>
        </div>
        ) : null
        )}  
      </div>
           


          </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DeliveryBoys