import React, { useState } from "react";
import "./VerifyRegistration.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBoxArchive,
  faPlus,
  faFileLines,
  faSquareCheck,
  faSquareXmark,
  faCircleCheck,
  faCircleXmark,
  faPencil,
  faEyeSlash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const cardData = [
  {
    id: 1,
    name: "Aman",
    username: "kb_aman",
    phoneNumber: "6360061656",
    phoneNumberAlt: "916465089",
    address:
      "2-9, Vigneshara Kripa, Shmabavi Nagara, Palimar, Udupi Dist - 574112",
    bg: "O-",
    email: "aman123@gmail.com",
    emissionExp: "2023-12-31",
    insurance: "817265167",
    insuranceExp: "2023-11-30",
    archive: "0",
    vrc: "727358198",
    vn: "KA20EF5241",
    vm: "Activa",
    ln: "KA20617627",
    lne: "22-10-2026",
  },
  {
    id: 2,
    name: "Gagan",
    username: "kb_gagan",
    phoneNumber: "9164650859",
    phoneNumberAlt: "916465089",
    address:
      "2-9, Vigneshara Kripa, Shmabavi Nagara, Palimar, Udupi Dist - 574112",
    bg: "O-",
    email: "aman123@gmail.com",
    emissionExp: "2023-12-31",
    insurance: "817265167",
    insuranceExp: "2023-11-30",
    archive: "0",
    vrc: "727358198",
    vn: "KA20EF5241",
    vm: "Activa",
    ln: "KA20617627",
    lne: "22-10-2026",
  },
  
 
  // Add more card data objects as needed
];
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",

  // Add more image URLs as needed
];

const directoryPath = "/Images/DeliveyBoyDocuments/";
const VerifyRegistration = () => {
  // Open document modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);

  const openModal = (card) => {
    setSelectedCardData(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCardData(null);
    setIsModalOpen(false);
  };

  // Search result
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(cardData);

  // Function to handle changes in the search input
  const handleSearchInputChange = (e) => {
    const value = e.target.value.toLowerCase(); // Convert search term to lowercase
    setSearchTerm(value);
    // Filter the card data based on the search term
    const filtered = cardData.filter(
      (card) =>
        card.name.toLowerCase().includes(value) || // Check if name includes search term
        card.phoneNumber.includes(value) // Check if phone number includes search term
    );
    setFilteredData(filtered);
  };

  return (
    <div className="DVR-app">
      {/* Desktop top container */}
      <div className="d-top-container f-12">
        <div className="d-flex space-between align-item-center" style={{ padding: "0vw 2vw" }}>
        <div className="f-20">Verify Registration</div>
          <input
            type="text"
            placeholder="Search Delivery Boys"
            className="t-box"
            style={{ width: "28%" }}
            value={searchTerm}
        onChange={handleSearchInputChange}
          />
        </div>
       
        <div className="d-header txt-dark-grey">
          <div style={{ textAlign: "left" }}>ID</div>
          <div style={{ textAlign: "left" }}>Name</div>

          <div style={{ textAlign: "left" }}>Phone</div>
          <div style={{ textAlign: "left" }}>Address</div>
          <div>Documents</div>
          <div>Actions</div>
        </div>
      </div>
      {/* Phone top container */}
      <div className="p-top-container">
        <input type="text" name="" id="" placeholder="Search Delivery Boys"
        value={searchTerm}
        onChange={handleSearchInputChange}
         />
        <br />
        <br />
        <div className="d-flex g-10">
          <button className="p-button bg-purple" >Add Categories</button>
          <button className="p-outline-button" >Archive List</button>
          <button className="p-outline-button">Bulk Action</button>
        </div>
      </div>
      
      {/* Desktop card */}
      <div className="scrollable-container">
      {filteredData.map((card) => (
          <div key={card.id} className="d-card f-12">
            <div style={{ textAlign: "left" }}>{card.id}</div>
            <div style={{ textAlign: "left" }}>{card.name}</div>
            <div className="txt-black" style={{ textAlign: "left" }}>
              {card.phoneNumber}
            </div>
            <div className="txt-black" style={{ textAlign: "left" }}>
              {card.address}
            </div>
            <div className="txt-dark-grey f-18" onClick={() => openModal(card)}>
              <FontAwesomeIcon
                icon={faFileLines}
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="txt-dark-grey f-20 d-flex space-evenly">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="txt-green"
                style={{ cursor: "pointer" }}
              />
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="txt-red"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Phone card */}
      <div className="p-scrollable-container">
      {filteredData.map((card) => (
        <div className="p-card">
          <div className="d-flex">
            <div className="flex-1">
              <div className="txt-grey f-14">ID</div>
              <div className="txt-black f-16">{card.id}</div>
            </div>
            <div className="flex-1">
              <div className="txt-grey f-14">Name</div>
              <div className="txt-green f-16">{card.name}</div>
            </div>
           
          </div>
          <br />
          <div className="d-flex">
            <div className="flex-1">
              <div className="txt-grey f-14">Phone</div>
              <div className="txt-black f-16">{card.phoneNumber}</div>
            </div>
            

          </div>
          <br />
          <div className="d-flex">
            
            <div className="flex-1">
              <div className="txt-grey f-14">Address</div>
              <div className="txt-black f-16">{card.address}</div>
            </div>
           
          </div>
          <br />
        
          <hr />
          <div
            className="d-flex space-between"
            style={{ marginTop: "4vw" }}
          >
            
            <div className="">
              <div>
                <FontAwesomeIcon
                  icon={faFileLines}
                  className="txt-dark-grey f-20"
                  style={{ cursor: "pointer" }}
                  onClick={() => openModal(card)}
                />
              </div>
            </div>
            <div className="">
              
            </div>
            <div className=" d-flex g-30">
              <div>
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  className="txt-green f-20"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="txt-red f-20"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          </div>
        </div>
        ))}
        
        
        
      
  </div>


      {isModalOpen && selectedCardData && (
        <div className="main-modal main-modal-open">
          <div className="main-modal-content dm">
            <div className="d-flex space-between">
              <div className="f-18">Delivery Boy docuemnts</div>
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
              <div className="d-flex g-30">
                <div className="d-flex" style={{ width: "20vw" }}>
                  <img
                    src="/Images/person.png"
                    alt=""
                    style={{ width: "15vw", height: "15vw" }}
                  />
                </div>
                <div style={{ width: "50vw" }}>
                  <h2 className="txt-black">{selectedCardData.name}</h2>
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Phone Number</div>
                      <div className="f-16">{selectedCardData.phoneNumber}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">
                        Alternative Phone Number
                      </div>
                      <div className="f-16">
                        {selectedCardData.phoneNumberAlt}
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Username</div>
                      <div className="f-16">{selectedCardData.username}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Email</div>
                      <div className="f-16">{selectedCardData.email}</div>
                    </div>
                  </div>

                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Address</div>
                      <div className="f-16">{selectedCardData.address}</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Blood Group</div>
                      <div className="f-16">{selectedCardData.bg}</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">License Number</div>
                      <div className="f-16">{selectedCardData.ln}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">License Exp.</div>
                      <div className="f-16">{selectedCardData.lne}</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Insurance Number</div>
                      <div className="f-16">{selectedCardData.insurance}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Insurance Exp.</div>
                      <div className="f-16">
                        {selectedCardData.insuranceExp}
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Vehicle Number</div>
                      <div className="f-16">{selectedCardData.vn}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Vehicle model</div>
                      <div className="f-16">{selectedCardData.vm}</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Vehicle RC number</div>
                      <div className="f-16">{selectedCardData.vrc}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Emission Exp.</div>
                      <div className="f-16">{selectedCardData.emissionExp}</div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <h2>Documents</h2>
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
            <div className="d-flex" style={{ width: "20vw" }}>
                  <img
                    src="/Images/person.png"
                    alt=""
                    style={{ width: "35vw", height: "35vw" }}
                  />
                </div>
              <div className="d-flex g-30">
                
                <div style={{ width: "80vw" }}>
                  <h2 className="txt-black">{selectedCardData.name}</h2>
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Phone Number</div>
                      <div className="f-16">{selectedCardData.phoneNumber}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">
                        Alternative Phone Number
                      </div>
                      <div className="f-16">
                        {selectedCardData.phoneNumberAlt}
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Username</div>
                      <div className="f-16">{selectedCardData.username}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Email</div>
                      <div className="f-16">{selectedCardData.email}</div>
                    </div>
                  </div>

                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Address</div>
                      <div className="f-16">{selectedCardData.address}</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Blood Group</div>
                      <div className="f-16">{selectedCardData.bg}</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">License Number</div>
                      <div className="f-16">{selectedCardData.ln}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">License Exp.</div>
                      <div className="f-16">{selectedCardData.lne}</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Insurance Number</div>
                      <div className="f-16">{selectedCardData.insurance}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Insurance Exp.</div>
                      <div className="f-16">
                        {selectedCardData.insuranceExp}
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Vehicle Number</div>
                      <div className="f-16">{selectedCardData.vn}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Vehicle model</div>
                      <div className="f-16">{selectedCardData.vm}</div>
                    </div>
                  </div>
                  <br />
                  <div className="d-flex">
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Vehicle RC number</div>
                      <div className="f-16">{selectedCardData.vrc}</div>
                    </div>
                    <div className="flex-1">
                      <div className="f-14 txt-grey">Emission Exp.</div>
                      <div className="f-16">{selectedCardData.emissionExp}</div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <hr />
              <h2>Documents</h2>
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
    </div>
  );
};

export default VerifyRegistration;
