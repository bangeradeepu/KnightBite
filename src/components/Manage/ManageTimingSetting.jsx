import React, { useState, useEffect } from "react";
import './ManageTimingSetting.css'
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faPen,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

// Material UI switch edits to color greeen
const GreenSwitch = withStyles({
    switchBase: {
      color: "#E53935",
      "&$checked": {
        color: "#229753",
      },
      "&$checked + $track": {
        backgroundColor: "#229753",
      },
    },
    checked: {},
    track: {
      backgroundColor: "#E53935", // Red background when off
    },
  })(Switch);


const ManageTimingSetting = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Expand and Collapse logic
    const [isCCVisible, setIsCCVisible] = useState({});
    const toggleCC = (day) => {
      setIsCCVisible((prev) => ({ ...prev, [day]: !prev[day] }));
    };

//   Switch logic
    const [switches, setSwitches] = useState(
        days.reduce((acc, day) => {
          acc[day] = true;
          return acc;
        }, {})
      );
    
      const handleChange = (day, event) => {
        setSwitches((prev) => ({ ...prev, [day]: event.target.checked }));
      };

// Open Add Slot
  const [addSlotVisible, setaddSlotVisible] = useState(false);

  const openAddSlot = () => {
    setaddSlotVisible(true);
  };

  const closeAddSlot= () => {
    setaddSlotVisible(false);
  };

  return (
    <div className='ManageTimingSetting'>
        <div className="MTS-desktop r-f-12">
            <div className="MTS-layer">
            <div className="d-flex space-between align-item-center">
            <div>
              <div className="r-f-18 f-w-600">Timing Settings</div>
              
            </div>
          </div>
          {days.map((day, index) => (
          <div key={index} className="MTS-comp-config mt-2">
            <div
            className={`MTS-comp-config-header ${isCCVisible[day] ? 'MTS-grey' : ''}`}
          >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                  <div onClick={() => toggleCC(day)} className="c-pointer">
                    {isCCVisible[day] ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </div>
                  </div>
                  <div>
                    <div className="r-f-14">{day}</div>
                  </div>
                </div>
                <div className="d-flex g-10 align-item-center">
                <div>{switches[day] ? 'Open' : 'Close'}</div>
                 <div>
                 <GreenSwitch
                    checked={switches[day] || false}
                    onChange={(event) => handleChange(day, event)}
                    name={`customSwitch-${day}`}
                  />
                 </div>
                 <div><FontAwesomeIcon icon={faPen} className="txt-dark-grey" /></div>
                </div>
              </div>
            </div>
            {isCCVisible[day] && (
              <div className="MTS-comp-config-content">
                <div>
                    <div className="r-f-10 txt-grey">Slot 1</div>
                    <div className="d-flex space-between">
                    <div className="r-f-12">7:00AM to 11:00PM</div>
                    <div className="r-f-12 txt-grey">4 hrs</div>
                    </div>
                </div>
                <div className="mt-2"></div>
                <div>
                    <div className="r-f-10 txt-grey">Slot 2</div>
                    <div className="d-flex space-between">
                    <div className="r-f-12">1:00PM to 3:00PM</div>
                    <div className="r-f-12 txt-grey">3 hrs</div>
                    </div>
                </div>
                <div className="mt-2 d-flex space-between align-item-center">
                    <div className="txt-blue f-w-700 c-pointer" onClick={openAddSlot}>+ Add Slot</div>
                    <div className="MTS-Copy-time-btn c-pointer">Copy Above timing to all days</div>
                </div>
                
              </div>
            )}
          </div>
          ))}
            </div>
        </div>
        {addSlotVisible && (
            <div
            className="main-modal main-modal-open r-f-12 mTSaS"
          >
            <div className="main-modal-content">
            <div className="d-flex space-between">
              <div className="r-f-14">Add Slot</div>
              <div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="r-f-20 c-pointer"
                  onClick={closeAddSlot}
                />
              </div>
            </div>
              <div className="main-modal-content-inside">
                <div className="mt-3 d-flex space-evenly">
                    <div>
                    <div className="txt-grey f-w-600">Add Slot 3</div>
                    <div className="d-flex g-30 ">
                        <div className="MTS-time-from">
                            <div className="r-f-10 txt-grey">Open Time</div>
                            <div><input type="time" name="" id="" className="MTS-outline-select-time" /></div>
                        </div>
                        <div className="MTS-time-close">
                            <div className="r-f-10 txt-grey">Close Time</div>
                            <div><input type="time" name="" id="" className="MTS-outline-select-time" /></div>
                        </div>
                    </div>
                    <div className="d-flex space-evenly mt-4">
                        <button className="MTS-addslot-btn c-pointer">Add</button>
                    </div>
                    </div>
                </div>
              </div>
              <div className="p-main-modal-content-inside">
              <div className="mt-3 d-flex space-evenly">
                    <div>
                    <div className="txt-grey f-w-600">Add Slot 3</div>
                    <div className="">
                        <div className="MTS-time-from">
                            <div className="r-f-10 txt-grey">Open Time</div>
                            <div><input type="time" name="" id="" className="MTS-outline-select-time" /></div>
                        </div>
                        <div className="MTS-time-close mt-2">
                            <div className="r-f-10 txt-grey">Close Time</div>
                            <div><input type="time" name="" id="" className="MTS-outline-select-time" /></div>
                        </div>
                    </div>
                    <div className="d-flex space-evenly mt-4">
                        <button className="MTS-addslot-btn c-pointer">Add</button>
                    </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="MTS-mobile r-f-12">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Timing Settings</div>
        </div>
        <div className="ADD-p-position">
          <div className="ADD-p-container">
          {days.map((day, index) => (
          <div key={index} className="MTS-comp-config mt-2">
            <div
            className={`MTS-comp-config-header ${isCCVisible[day] ? 'MTS-grey' : ''}`}
          >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                  <div onClick={() => toggleCC(day)} className="c-pointer">
                    {isCCVisible[day] ? (
                      <FontAwesomeIcon icon={faChevronUp} />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} />
                    )}
                  </div>
                  </div>
                  <div>
                    <div className="r-f-14">{day}</div>
                  </div>
                </div>
                <div className="d-flex g-10 align-item-center">
                <div>{switches[day] ? 'Open' : 'Close'}</div>
                 <div>
                 <GreenSwitch
                    checked={switches[day] || false}
                    onChange={(event) => handleChange(day, event)}
                    name={`customSwitch-${day}`}
                  />
                 </div>
                 <div><FontAwesomeIcon icon={faPen} className="txt-dark-grey" /></div>
                </div>
              </div>
            </div>
            {isCCVisible[day] && (
              <div className="MTS-comp-config-content">
                <div>
                    <div className="r-f-10 txt-grey">Slot 1</div>
                    <div className="d-flex space-between">
                    <div className="r-f-12">7:00AM to 11:00PM</div>
                    <div className="r-f-12 txt-grey">4 hrs</div>
                    </div>
                </div>
                <div className="mt-2"></div>
                <div>
                    <div className="r-f-10 txt-grey">Slot 2</div>
                    <div className="d-flex space-between">
                    <div className="r-f-12">1:00PM to 3:00PM</div>
                    <div className="r-f-12 txt-grey">3 hrs</div>
                    </div>
                </div>
                <div className="mt-2 d-flex space-between align-item-center">
                    <div className="txt-blue f-w-700 c-pointer" onClick={openAddSlot}>+ Add Slot</div>
                    <div className="MTS-Copy-time-btn r-f-10 c-pointer">Copy Above timing to all days</div>
                </div>
                
              </div>
            )}
          </div>
          ))}
          </div>
          </div>
        </div>
    </div>
  )
}

export default ManageTimingSetting