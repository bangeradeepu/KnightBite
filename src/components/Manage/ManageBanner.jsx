import React, { useState, useEffect } from "react";
import "./ManageBanner.css";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faGrip,
  faPencil,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

// Material UI switch edits to color greeen
const GreenSwitch = withStyles({
  switchBase: {
    color: "##E0E0E0",
    "&$checked": {
      color: "#229753",
    },
    "&$checked + $track": {
      backgroundColor: "#229753",
    },
  },
  checked: {},
  track: {},
})(Switch);

const ManageBanner = () => {
  //   Preview for Recommended
  const [inputRecommended, setRecommended] = useState(false); // State to store the input text

  const handleRecommended = (event) => {
    setRecommended(event.target.checked);
    setIsAnyInput(true);
  };

  const [items, setItems] = useState([
    { imgSrc: '1.jpg', id: 1 },
    { imgSrc: '2.jpg', id: 2 },
    { imgSrc: '3.jpg', id: 3 },
    { imgSrc: '4.jpg', id: 4 },
    { imgSrc: '5.jpg', id: 5 },
  ]);
  const baseSrc = '/Images/DeliveyBoyDocuments/';
  const [sortedItems, setSortedItems] = useState([...items]); // New state for sorted items
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
    setDraggedIndex(index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDragEnter = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    e.preventDefault();
    if (draggedIndex === null) return;

    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(newIndex, 0, draggedItem);

    // Update serial numbers for both items and sorted items
    for (let i = 0; i < updatedItems.length; i++) {
      updatedItems[i].id = i + 1;
    }

    setItems(updatedItems);
    setSortedItems(updatedItems); // Update the sorted items
    setDraggedIndex(null);
  };
  const touchEvents = {
    onTouchStart: (e, index) => handleDragStart(e, index),
    onTouchMove: (e) => e.preventDefault(), // Prevent default touchmove behavior
    onTouchEnd: (e, newIndex) => handleDrop(e, newIndex),
  };
  return (
    <div className="ManageBanner">
      <div className="MB-desktop r-f-12">
        <div className="MB-layer">
          <div className="r-f-18 f-w-600">Banner Carousel</div>
          <div className="d-flex g-20 mt-2" style={{ flexWrap: "wrap" }}>
          {items.map((item, index) => (
            <div className="MB-carousel-card"
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            {...touchEvents}
            >
              <div className="MB-carousel-card-top">
                <img
                  src={`${baseSrc}${item.imgSrc}`}
                  className="MB-image"
                  alt=""
                />
                <div className="MB-carousel-card-top-transparent-layer">
                  <div className="d-flex space-between align-item-center mt-1">
                    <div className="MB-back-white">
                      <FontAwesomeIcon
                        icon={faGrip}
                        className="r-f-14 txt-white c-drag"
                        style={{zIndex:'5'}}
                      />
                    </div>
                    <div className="MB-back-white">
                      <FontAwesomeIcon
                        icon={faPencil}
                        className="r-f-14 c-pointer txt-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="MB-carousel-card-bottom d-flex space-between align-item-center">
                <div className="r-f-12">{item.id}</div>
                <div className="d-flex g-10 align-item-center">
                  <div>
                    <GreenSwitch
                        checked={item.inputRecommended}
                        onChange={() => handleRecommended(index)}
                      />
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="txt-dark-grey r-f-14 c-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="MB-add-carousel c-pointer">
            <div className="align-text-center justify-content-center">
            <div className="r-f-14 txt-dark-grey d-flex align-item-center space-evenly">
                <div className="d-flex g-10">
                <div>Add New Banner</div>
                    <div><FontAwesomeIcon icon={faPlus} /></div>
                </div>
                    
                </div>
                <div className="txt-dark-grey">(Required dimension: 400px X 200px )</div>
            </div>
                
          </div>
          </div>
        </div>
      </div>
      <div className="MB-mobile r-f-12">
      <div className="p-top-container">
      <div className="mt-1 mb-1 f-w-600">Banner Carousel</div>
        </div>
        <div className="ADD-p-position">
          <div className="ADD-p-container">
          {items.map((item, index) => (
            <div className="MB-carousel-card mt-2"
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            
            >
              <div className="MB-carousel-card-top">
                <img
                  src={`${baseSrc}${item.imgSrc}`}
                  className="MB-image"
                  alt=""
                />
                <div className="MB-carousel-card-top-transparent-layer">
                  <div className="d-flex space-between align-item-center mt-1">
                    <div className="MB-back-white" {...touchEvents}>
                      <FontAwesomeIcon
                        icon={faGrip}
                        className="r-f-14 txt-dark-grey c-drag"
                      />
                    </div>
                    <div className="MB-back-white">
                      <FontAwesomeIcon
                        icon={faPencil}
                        className="r-f-14 txt-dark-grey c-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="MB-carousel-card-bottom d-flex space-between align-item-center">
                <div className="r-f-12">{item.id}</div>
                <div className="d-flex g-10 align-item-center">
                  <div>
                    <label className="switch">
                      <input
                        type="checkbox"
                        checked={item.inputRecommended}
                        onChange={() => handleRecommended(index)}
                      ></input>
                      <span className="slider"></span>
                    </label>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="txt-dark-grey r-f-14 c-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="MB-add-carousel c-pointer mt-2">
            <div className="align-text-center justify-content-center">
            <div className="r-f-14 txt-dark-grey d-flex align-item-center space-evenly">
                <div className="d-flex g-10">
                <div>Add New Banner</div>
                    <div><FontAwesomeIcon icon={faPlus} /></div>
                </div>
                    
                </div>
                <div className="txt-dark-grey">(Required dimension: 400px X 200px )</div>
            </div>
                
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageBanner;
