import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DeliveryBoys.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faPencil,
  faEyeSlash,
  faFileLines,
  faLocationDot,
  faPowerOff,
  faPlus,
  faBars,
  faXmark,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  // Add more image URLs as needed
];

const directoryPath = "/Images/DeliveyBoyDocuments/";

const cardData = [
  {
    id: 1,
    name: "allen",
    username: "kb_allen",
    phone: "6360061656",
    optionalPhone: "916465089",
    address: "2-9, Vigneshwara kripa Shambhavi Nagara, Palimar",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "0",
  },
  {
    id: 2,
    name: "Thomas",
    username: "kb_thomas",
    phone: "654153647",
    optionalPhone: "6273647582",
    address: "Karkala",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "0",
  },
  {
    id: 3,
    name: "Sabil",
    username: "kb_sabil",
    phone: "7415784856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "0",
  },
  {
    id: 4,
    name: "Faisal",
    username: "kb_faisal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "0",
  },
  {
    id: 5,
    name: "Faisal",
    username: "kb_faisal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "0",
  },
  {
    id: 6,
    name: "Faisal",
    username: "kb_faisal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "0",
  },
  {
    id: 7,
    name: "Faizal",
    username: "kb_faizal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "0",
  },
  {
    id: 8,
    name: "Faizal",
    username: "kb_faizal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "1",
  },
  {
    id: 9,
    name: "Faizal",
    username: "kb_faizal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "1",
  },
  {
    id: 10,
    name: "Faizal",
    username: "kb_faizal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "1",
  },
  {
    id: 11,
    name: "Faizal",
    username: "kb_faizal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "1",
  },
  {
    id: 12,
    name: "Faizal",
    username: "kb_faizal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "1",
  },

  {
    id: 13,
    name: "Faizal",
    username: "kb_faizal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "1",
  },
  {
    id: 14,
    name: "Faizal",
    username: "kb_faizal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "1",
  },
  {
    id: 15,
    name: "Faizal",
    username: "kb_faizal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "1",
  },
  {
    id: 16,
    name: "Faizal",
    username: "kb_faizal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "1",
  },
  {
    id: 17,
    name: "Faizal",
    username: "kb_faizal",
    phone: "9564147856",
    optionalPhone: " ",
    address: "Mangalore",
    emissionExp: "2023-12-31",
    insuranceExp: "2023-11-30",
    archive: "1",
  },



  // Add more data objects here
];
const DeliveryBoys = () => {
  // Add Delivery boys
  const navigate = useNavigate();
  const addDeliveryBoys = () => {
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
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = cardData.filter((data) => {
    return (
      // data.archive === '0' &&
      data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.phone.includes(searchQuery)
    );
  });
  // Date filter

  // Open document
  const [selectDbDocumentId, setSelectedDBDocumentId] = useState(null);

  const handleDocumentClick = (id) => {
    setSelectedDBDocumentId(id);
  };
  const handleDocumentClose = () => {
    setSelectedDBDocumentId(null);
  };

  // Image open
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [modalImageOpen, setModalImageOpen] = useState(false);

  const openModalImage = (index) => {
    setSelectedImageIndex(index);
    setModalImageOpen(true);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
    setModalImageOpen(false);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="DB-app">
      {/* Desktop top container */}
      <div className="d-top-container">
        <div className="d-flex flex-end" style={{padding:'0vw 2vw'}}>
          <input
            type="text"
            placeholder="Search Delivey boys"
            value={searchQuery}
            onChange={handleSearchChange}
            className="t-box"
            style={{width:'28%'}}
          />
        </div>
        <div className="d-flex space-between align-item-center" style={{ marginTop: "2vw",padding:'0vw 2vw' }}>
          <div className="f-20">
            Delivery Boys
          </div>

          <div className="d-flex g-10">
            <button
              className="p-button bg-purple"
              style={{}}
              onClick={addDeliveryBoys}
            >
              Add Delivery Boy <FontAwesomeIcon icon={faPlus} />
            </button>
            <button className="p-outline-button" onClick={openArchive}>
              <FontAwesomeIcon icon={faBoxArchive} /> Archive List
            </button>
            <button className="p-outline-button">
              <FontAwesomeIcon icon={faBars} /> Bulk Action
            </button>
          </div>
        </div>
        <div className="DB-header txt-dark-grey">
          <div>ID No</div>
          <div style={{ textAlign: "left" }}>Name</div>
          <div style={{ textAlign: "left" }}>Username</div>
          <div>Phone No</div>
          <div>Phone No (Optional)</div>
          <div style={{ textAlign: "left" }}>Address</div>
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
      {/* Phone top container */}
      <div className="p-top-container">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search Delivery Boys"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <br />
        <br />
        <div className="d-flex g-10">
          <button className="p-button bg-purple" onClick={addDeliveryBoys}>
            Add Delivery Boys
          </button>
          <button className="p-outline-button" onClick={openArchive}>
            Archive List
          </button>
          <button className="p-outline-button">Bulk Action</button>
        </div>
      </div>
      {/* Phone card */}
      <div className="p-scrollable-container">
        {filteredData.map((data) =>
          data.archive === "0" ? (
            <div className="p-card">
              <div className="d-flex">
                <div className="flex-1">
                  <div className="txt-grey f-14">ID no</div>
                  <div className="txt-black f-16">{data.id} </div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Name</div>
                  <div className="txt-black f-16">{data.name}</div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Username</div>
                  <div className="txt-black f-16">{data.username}</div>
                </div>
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="txt-grey f-14">Address</div>
                  <div className="txt-black f-16">{data.address}</div>
                </div>
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="txt-grey f-14">Phone no</div>
                  <div className="txt-black f-16">{data.phone}</div>
                </div>
                <div className="flex-1">
                  <div></div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Alternate no</div>
                  <div className="txt-black f-16">{data.optionalPhone}</div>
                </div>
              </div>
              <br />
              <div className="d-flex">
                <div className="flex-1">
                  <div className="txt-grey f-14">Emission Exp.</div>
                  <div className="txt-black f-16">{data.emissionExp}</div>
                </div>
                <div className="flex-1">
                  <div></div>
                </div>
                <div className="flex-1">
                  <div className="txt-grey f-14">Insurance Exp.</div>
                  <div className="txt-black f-16">{data.insuranceExp}</div>
                </div>
              </div>
              <hr />
              <div
                className="d-flex space-between"
                style={{ marginTop: "4vw" }}
              >
                <div className="">
                  <div>
                    <FontAwesomeIcon
                      icon={faPowerOff}
                      className="txt-dark-grey f-16 ff1"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <FontAwesomeIcon
                      icon={faLocationDot}
                      className="txt-dark-grey f-16"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <FontAwesomeIcon
                      icon={faFileLines}
                      className="txt-dark-grey f-16"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDocumentClick(data.id)}
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="txt-dark-grey f-16"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <FontAwesomeIcon
                      icon={faPencil}
                      className="txt-dark-grey f-16"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
                <div className="">
                  <div>
                    <FontAwesomeIcon
                      icon={faBoxArchive}
                      className="txt-dark-grey f-16"
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
      {/* Desktop card */}
      <div className="scrollable-container">
        {filteredData.map((data) =>
          data.archive === "0" ? (
            <div className="d-card" key={data.id} style={{alignItems:'center'}}>
              <div>{data.id}</div>
              <div style={{ textAlign: "left" }}>{data.name}</div>
              <div style={{ textAlign: "left" }}>{data.username}</div>
              <div>{data.phone}</div>
              <div>{data.optionalPhone}</div>
              <div style={{ textAlign: "left" }}>{data.address}</div>
              <div>
                <FontAwesomeIcon
                  icon={faPowerOff}
                  className="txt-dark-grey f-16 ffl"
                  style={{ cursor: "pointer",padding:'0.7vw 0.8vw' }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="txt-dark-grey f-16 ffl"
                  style={{ cursor: "pointer",padding:'0.7vw 0.8vw' }}
                />
              </div>
              <div>{data.emissionExp}</div>
              <div>{data.insuranceExp}</div>
              <div>
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="txt-dark-grey f-16 ffl"
                  style={{ cursor: "pointer",padding:'0.7vw 0.8vw'}}
                  onClick={() => handleDocumentClick(data.id)}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className="txt-dark-grey f-16 ffl"
                  style={{ cursor: "pointer",padding:'0.7vw 0.8vw' }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faPencil}
                  className="txt-dark-grey f-16 ffl"
                  style={{ cursor: "pointer",padding:'0.7vw 0.8vw' }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faBoxArchive}
                  className="txt-dark-grey f-16 ffl"
                  style={{ cursor: "pointer",padding:'0.7vw 0.8vw' }}
                />
              </div>
            </div>
          ) : null
        )}
      </div>

      {archiveVisible && (
        <div className="d-modal">
        <div
          className={`main-modal ${archiveVisible ? "main-modal-open" : ""}`}
        >
          <div className="main-modal-content">
          <div className="grid-2">
                <p
                  className=""
                  style={{ fontSize: "20px", marginLeft: "10px" }}
                >
                  Archive List
                </p>
                <span
                  className=""
                  style={{ textAlign: "right", marginTop: "14px",cursor:'pointer' }}
                  onClick={closeArchive}
                >
                  <FontAwesomeIcon icon={faXmark} className="f-20" />
                </span>
              </div>
              <div className="d-flex flex-end">
                <input
                  type="text"
                  placeholder="Search Delivey boys"
                  className="t-box"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  
                />
              </div>
              <div
                className="DB-header txt-dark-grey"
                style={{paddingRight:'1.5vw',marginLeft:'0vw'}}
              >
                <div>ID No</div>
                <div style={{ textAlign: "left" }}>Name</div>
                <div style={{ textAlign: "left" }}>Username</div>
                <div>Phone No</div>
                <div>Phone No (Optional)</div>
                <div style={{ textAlign: "left" }}>Address</div>
                <div>Login Status</div>
                <div>Track</div>
                <div>Emission Exp.</div>
                <div>Insurance Exp.</div>
                <div>Documents</div>
                <div>Password</div>
                <div>Edit</div>
                <div>Archive</div>
              </div>
           
              
              <div className="main-modal-content-inside">
                {filteredData.map((data) =>
                  data.archive === "1" ? (
                    <div
                      className="d-card-archive"
                      style={{ marginLeft: "0rem",alignItems:'center',minHeight:'4vw' }}
                      key={data.id}
                      
                    >
                      <div>{data.id}</div>
                      <div style={{ textAlign: "left" }}>{data.name}</div>
                      <div style={{ textAlign: "left" }}>{data.username}</div>
                      <div>{data.phone}</div>
                      <div>{data.optionalPhone}</div>
                      <div style={{ textAlign: "left" }}>{data.address}</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faPowerOff}
                          className="txt-dark-grey f-16"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="txt-dark-grey f-16"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <div>{data.emissionExp}</div>
                      <div>{data.insuranceExp}</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faFileLines}
                          className="txt-dark-grey f-16"
                          style={{ cursor: "pointer" }}
                          onClick={() => handleDocumentClick(data.id)}
                        />
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          className="txt-dark-grey f-16"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faPencil}
                          className="txt-dark-grey f-16"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                      <div>
                        <FontAwesomeIcon
                          icon={faBoxArchive}
                          className="txt-dark-grey f-16"
                          style={{ cursor: "pointer" }}
                        />
                      </div>
                    </div>
                  ) : null
                )}
              </div>
              {/* Phone card */}
              <div className="p-main-modal-content-inside">
                {filteredData.map((data) =>
                  data.archive === "0" ? (
                    <div className="p-card-archive" key={data.id}>
                      <div className="d-flex">
                        <div className="flex-1">
                          <div className="txt-grey f-14">ID no</div>
                          <div className="txt-black f-16">{data.id} </div>
                        </div>
                        <div className="flex-1">
                          <div className="txt-grey f-14">Name</div>
                          <div className="txt-black f-16">{data.name}</div>
                        </div>
                        <div className="flex-1">
                          <div className="txt-grey f-14">Username</div>
                          <div className="txt-black f-16">{data.username}</div>
                        </div>
                      </div>
                      <br />
                      <div className="d-flex">
                        <div className="flex-1">
                          <div className="txt-grey f-14">Address</div>
                          <div className="txt-black f-16">{data.address}</div>
                        </div>
                      </div>
                      <br />
                      <div className="d-flex">
                        <div className="flex-1">
                          <div className="txt-grey f-14">Phone no</div>
                          <div className="txt-black f-16">{data.phone}</div>
                        </div>
                        <div className="flex-1">
                          <div></div>
                        </div>
                        <div className="flex-1">
                          <div className="txt-grey f-14">Alternate no</div>
                          <div className="txt-black f-16">
                            {data.optionalPhone}
                          </div>
                        </div>
                      </div>
                      <br />
                      <div className="d-flex">
                        <div className="flex-1">
                          <div className="txt-grey f-14">Emission Exp.</div>
                          <div className="txt-black f-16">
                            {data.emissionExp}
                          </div>
                        </div>
                        <div className="flex-1">
                          <div></div>
                        </div>
                        <div className="flex-1">
                          <div className="txt-grey f-14">Insurance Exp.</div>
                          <div className="txt-black f-16">
                            {data.insuranceExp}
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div
                        className="d-flex space-between"
                        style={{ marginTop: "4vw" }}
                      >
                        <div className="">
                          <div>
                            <FontAwesomeIcon
                              icon={faPowerOff}
                              className="txt-dark-grey f-16"
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>
                        <div className="">
                          <div>
                            <FontAwesomeIcon
                              icon={faLocationDot}
                              className="txt-dark-grey f-16"
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>
                        <div className="">
                          <div>
                            <FontAwesomeIcon
                              icon={faFileLines}
                              className="txt-dark-grey f-16"
                              style={{ cursor: "pointer" }}
                              onClick={() => handleDocumentClick(data.id)}
                            />
                          </div>
                        </div>
                        <div className="">
                          <div>
                            <FontAwesomeIcon
                              icon={faEyeSlash}
                              className="txt-dark-grey f-16"
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>
                        <div className="">
                          <div>
                            <FontAwesomeIcon
                              icon={faPencil}
                              className="txt-dark-grey f-16"
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>
                        <div className="">
                          <div>
                            <FontAwesomeIcon
                              icon={faBoxArchive}
                              className="txt-dark-grey f-16"
                              style={{ cursor: "pointer" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null
                )}
              </div>
            
          </div>
        </div>
        </div>
      )}
      {selectDbDocumentId !== null && (
        <div className="main-modal main-modal-open">
          <div className="main-modal-content" style={{margin:'3vw auto'}}>
            <div className="d-flex space-between">
              <div className="f-18">Delivery Boy docuemnts</div>
              <div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="f-24"
                  onClick={handleDocumentClose}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="main-modal-content-inside" style={{height:'35vw'}}>
              {/* {filteredData
            .filter((data) => data.id === selectDbDocumentId)
            .map((selectedDbData) => (
              <div key={selectedDbData.id}>
                <p>Name: {selectedDbData.name}</p>
                <p>Username: {selectedDbData.username}</p>
              </div>
            ))} */}
          
              <div className="d-flex" style={{ flexWrap: "wrap" }}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="thumbnail"
                    onClick={() => openModalImage(index)}
                  >
                    <div className="DB-image-container">
                      <img
                        className="DB-image"
                        src={`${directoryPath}${image}`}
                        alt={`Image ${index + 1}`}
                      />
                      <div style={{ textAlign: "center" }}>{image}</div>
                    </div>
                  </div>
                ))}
              </div>
              
            </div>
            <div className="p-main-modal-content-inside">
              <div className="d-flex" style={{ flexWrap: "wrap" }}>
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="thumbnail"
                    onClick={() => openModalImage(index)}
                  >
                    <div className="DB-image-container">
                      <img
                        className="DB-image"
                        src={`${directoryPath}${image}`}
                        alt={`Image ${index + 1}`}
                      />
                      <div style={{ textAlign: "center" }}>{image}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {modalImageOpen && (
        <div className="main-modal main-modal-open IM-view">
          <div className="main-modal-content">
            <div className="d-flex space-between">
              <div className="f-18">{images[selectedImageIndex]}</div>
              <div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="f-24"
                  onClick={closeModal}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="main-modal-content-inside">
              <img
                src={`${directoryPath}${images[selectedImageIndex]}`}
                alt={`Image ${selectedImageIndex + 1}`}
                className="modal-image"
              />
            </div>
            <div className="p-main-modal-content-inside">
              <img
                src={`${directoryPath}${images[selectedImageIndex]}`}
                alt={`Image ${selectedImageIndex + 1}`}
                className="modal-image"
              />
            </div>
            <div
              className="f-24 d-flex space-evenly"
              style={{ padding: "2vw" }}
            >
              <FontAwesomeIcon icon={faChevronLeft} onClick={prevImage} />

              <FontAwesomeIcon icon={faChevronRight} onClick={nextImage} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeliveryBoys;
