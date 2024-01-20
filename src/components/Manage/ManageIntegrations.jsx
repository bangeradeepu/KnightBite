import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faArrowRight,
  faCircleCheck,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import './ManageIntegrations.css'
const ManageIntegrations = () => {
  return (
    <div className='ManageIntegrations r-f-12'>
        <div className="MI-desktop">
            <div className="MI-layer">
            <div>
              <div className="r-f-18 f-w-600">Integrations</div>
              <div className='r-f-10 txt-dark-grey'>You can apply now and get started or request access to any of the integrations, our team will reach out in few hours after requesting.</div>
            </div>
            <div className="d-flex mt-3 space-between">
            <div className="d-flex g-10 MI-search-outer-layer align-item-center">
              <div className="MI-search-icon">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="txt-grey"
                />
              </div>
              <input
                type="text"
                name=""
                id=""
                className="MI-search-filed"
                placeholder="Search any integrations"
              />
            </div>
            <div className="MI-export-btn-large c-pointer">Show All <FontAwesomeIcon icon={faAngleDown} className='txt-dark-grey' /></div>
            </div>
            <div className='mt-1 r-f-8'>You have enabled 2 integrations</div>
            <div className="MI-layer-inside mt-1">
            <div className="d-flex g-30" style={{ flexWrap: "wrap" }}>
            <div className="MI-product-card">
                    <div className="d-flex g-20 align-item-center">
                        <div className='MI-product-image'>
                            <img src="../Images/mainImages/urp.jpg" alt="" />
                        </div>
                        <div className='MI-product-desc'>
                            <div className='r-f-16 f-w-600'>Urbanpiper</div>
                            <div className='r-f-10'>Urbanpiper enables you to directly accept swiggy, zomato orders with MIZA POS</div>
                        </div>
                    </div>
                    <div className="d-flex align-item-center mt-2 space-evenly">
                        <div className='f-w-700 d-flex align-item-center c-pointer'>Learn More &nbsp;<FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className='MT-enabled-button c-pointer r-f-10 d-flex  align-item-center'>Enabled&nbsp;<FontAwesomeIcon icon={faCircleCheck} className='txt-green' />&nbsp;<FontAwesomeIcon icon={faAngleDown} className='txt-dark-grey' /></div>
                    </div>
                </div>
            <div className="MI-product-card">
                    <div className="d-flex g-20 align-item-center">
                        <div className='MI-product-image'>
                            <img src="../Images/mainImages/urp.jpg" alt="" />
                        </div>
                        <div className='MI-product-desc'>
                            <div className='r-f-16 f-w-600'>Urbanpiper</div>
                            <div className='r-f-10'>Urbanpiper enables you to directly accept swiggy, zomato orders with MIZA POS</div>
                        </div>
                    </div>
                    <div className="d-flex align-item-center mt-2 space-evenly">
                        <div className='f-w-700 d-flex align-item-center c-pointer'>Learn More &nbsp;<FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className='MI-apply-button c-pointer r-f-10'>Request Access</div>
                    </div>
                </div>
            {Array.from({ length: 4 }, (_, index) => (
                <div className="MI-product-card">
                    <div className="d-flex g-20 align-item-center">
                        <div className='MI-product-image'>
                            <img src="../Images/mainImages/urp.jpg" alt="" />
                        </div>
                        <div className='MI-product-desc'>
                            <div className='r-f-16 f-w-600'>Urbanpiper</div>
                            <div className='r-f-10'>Urbanpiper enables you to directly accept swiggy, zomato orders with MIZA POS</div>
                        </div>
                    </div>
                    <div className="d-flex align-item-center mt-2 space-evenly">
                        <div className='f-w-700 d-flex align-item-center c-pointer'>Learn More &nbsp;<FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className='MI-apply-button c-pointer r-f-10'>Apply Now</div>
                    </div>
                </div>
            ))}
            </div>
            </div>
            </div>
        </div>
        <div className="MI-mobile">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Integrations</div>
          <div className="MI-export-btn r-f-10">Show All <FontAwesomeIcon icon={faAngleDown} /></div>
          <div> 
          </div>
        </div>
        <div className="ADD-p-position" style={{marginTop:'32vh'}}>
            <div className="ADD-p-container">
            <div className='r-f-10 txt-grey'>You can apply now and get started or request access to any of the integrations, our team will reach out in few hours after requesting.</div>
            <div className="d-flex g-10 MI-search-outer-layer align-item-center mt-1">
              <div className="MI-search-icon">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="txt-grey"
                />
              </div>
              <input
                type="text"
                name=""
                id=""
                className="MI-search-filed"
                placeholder="Search any integrations"
              />
            </div>
           
            <div className='r-f-8 mt-1'>You have enabled 2 integrations</div>
            <div className="MI-product-card mt-2">
                    <div className="d-flex g-20 align-item-center">
                        <div className='MI-product-image'>
                            <img src="../Images/mainImages/urp.jpg" alt="" />
                        </div>
                        <div className='MI-product-desc'>
                            <div className='r-f-20 f-w-600'>Urbanpiper</div>
                            <div className='r-f-10'>Urbanpiper enables you to directly accept swiggy, zomato orders with MIZA POS</div>
                        </div>
                    </div>
                    <div className="d-flex align-item-center mt-2 space-evenly">
                        <div className='f-w-700 d-flex align-item-center c-pointer'>Learn More &nbsp;<FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className='MT-enabled-button c-pointer r-f-10 d-flex  align-item-center'>Enabled&nbsp;<FontAwesomeIcon icon={faCircleCheck} className='txt-green' />&nbsp;<FontAwesomeIcon icon={faAngleDown} className='txt-dark-grey' /></div>
                    </div>
                </div>
                <div className="MI-product-card mt-2">
                    <div className="d-flex g-20 align-item-center">
                        <div className='MI-product-image'>
                            <img src="../Images/mainImages/urp.jpg" alt="" />
                        </div>
                        <div className='MI-product-desc'>
                            <div className='r-f-20 f-w-600'>Urbanpiper</div>
                            <div className='r-f-10'>Urbanpiper enables you to directly accept swiggy, zomato orders with MIZA POS</div>
                        </div>
                    </div>
                    <div className="d-flex align-item-center mt-2 space-evenly">
                        <div className='f-w-700 d-flex align-item-center c-pointer'>Learn More &nbsp;<FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className='MI-apply-button c-pointer r-f-10 d-flex  align-item-center'>Request Access</div>
                    </div>
                </div>
                {Array.from({ length: 4 }, (_, index) => (
                <div className="MI-product-card mt-2">
                    <div className="d-flex g-20 align-item-center">
                        <div className='MI-product-image'>
                            <img src="../Images/mainImages/urp.jpg" alt="" />
                        </div>
                        <div className='MI-product-desc'>
                            <div className='r-f-20 f-w-600'>Urbanpiper</div>
                            <div className='r-f-10'>Urbanpiper enables you to directly accept swiggy, zomato orders with MIZA POS</div>
                        </div>
                    </div>
                    <div className="d-flex align-item-center mt-2 space-evenly">
                        <div className='f-w-700 d-flex align-item-center c-pointer'>Learn More &nbsp;<FontAwesomeIcon icon={faArrowRight} /></div>
                        <div className='MI-apply-button c-pointer r-f-10'>Apply Now</div>
                    </div>
                </div>
            ))}
            </div>
            </div>
        </div>
    </div>
  )
}

export default ManageIntegrations