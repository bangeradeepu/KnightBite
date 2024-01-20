import React, { useState, useEffect } from "react";
import "./ManageOrderNotification.css";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faCircleCheck,
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

const ManageOrderNotification = () => {
  const OwnerData = [
    {
      id: 1,
      OwnerName: "Sabil",
      phoneNumber: "8452456985",
      whatsApp: "84521458756",
      eMail: "sabil@gmail.com",
    },
    {
      id: 2,
      OwnerName: "Sajjad",
      phoneNumber: "8452456985",
      whatsApp: "7845215469",
      eMail: "sajjad@gmail.com",
    },
  ];
  // Expand, Collapse Card
  const [openCardId, setOpenCardId] = useState(null);
  const [checked, setChecked] = useState({});

  const toggleChildSwitch = (ownerId, type, value) => {
    const updatedChecked = { ...checked[ownerId] } || {};

    if (type === "parent") {
      // When the parent switch is toggled, set all child switches to the same value
      updatedChecked.parent = value;
      updatedChecked.SMS = value;
      updatedChecked.WhatsApp = value;
      updatedChecked.Email = value;
    } else {
      updatedChecked[type] = value;
      const allChildSwitchesOn =
        updatedChecked.SMS && updatedChecked.WhatsApp && updatedChecked.Email;
      if (allChildSwitchesOn) {
        updatedChecked.parent = true;
      }
      const allChildSwitchesOff =
        !updatedChecked.SMS &&
        !updatedChecked.WhatsApp &&
        !updatedChecked.Email;
      if (allChildSwitchesOff) {
        updatedChecked.parent = false;
      }
    }

    setChecked((prevChecked) => ({
      ...prevChecked,
      [ownerId]: updatedChecked,
    }));
  };

  const toggleBrandOwner = (id) => {
    setOpenCardId(openCardId === id ? null : id);
  };


  
  return (
    <div className="ManageOrderNotification">
      <div className="MON-desktop r-f-12">
        <div className="MON-layer">
          <div className="d-flex space-between align-item-center">
            <div>
              <div className="r-f-18 f-w-600">Order Notification</div>
              <div className="r-f-10 txt-dark-grey">
                Disclaimer: If you wish to edit the details of any user level,
                you can do it under "User" page
              </div>
            </div>
          </div>
          {OwnerData.map((owner) => (
            <div key={owner.id} className="MON-comp-config mt-2">
              <div
                onClick={() => toggleBrandOwner(owner.id)}
                className={`MON-comp-config-header ${
                  openCardId === owner.id ? "MON-grey" : ""
                }`}
              >
                <div className="d-flex space-between align-item-center">
                  <div className="d-flex align-item-center g-20">
                    <div>
                      <div
                        onClick={() => toggleBrandOwner(owner.id)}
                        className="c-pointer"
                      >
                        {openCardId === owner.id ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="r-f-14">
                        Brand Owner ({owner.OwnerName})
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-item-center g-10">
                    <div className="r-f-14">Notification</div>
                    <div>
                      <GreenSwitch
                        checked={checked[owner.id]?.parent || false}
                        onChange={(event) =>
                          toggleChildSwitch(
                            owner.id,
                            "parent",
                            event.target.checked
                          )
                        }
                        name={`customSwitch_${owner.id}_parent`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {openCardId === owner.id && (
                <div className="MON-comp-config-content r-f-12">
                  <div className="d-flex space-between">
                    <div>{owner.phoneNumber}</div>
                    <div className="d-flex align-item-center g-10">
                      <div>SMS</div>
                      <div>
                        <GreenSwitch
                          checked={checked[owner.id]?.SMS || false}
                          onChange={(event) =>
                            toggleChildSwitch(
                              owner.id,
                              "SMS",
                              event.target.checked
                            )
                          }
                          name={`customSwitch_${owner.id}_SMS`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex space-between mt-4">
                    <div>{owner.whatsApp}</div>
                    <div className="d-flex align-item-center g-10">
                      <div>WhatsApp</div>
                      <div>
                        <GreenSwitch
                          checked={checked[owner.id]?.WhatsApp || false}
                          onChange={(event) =>
                            toggleChildSwitch(
                              owner.id,
                              "WhatsApp",
                              event.target.checked
                            )
                          }
                          name={`customSwitch_${owner.id}_WhatsApp`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex space-between mt-4">
                    <div>{owner.eMail}</div>
                    <div className="d-flex align-item-center g-10">
                      <div>Email</div>
                      <div>
                        <GreenSwitch
                          checked={checked[owner.id]?.Email || false}
                          onChange={(event) =>
                            toggleChildSwitch(
                              owner.id,
                              "Email",
                              event.target.checked
                            )
                          }
                          name={`customSwitch_${owner.id}_Email`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
        </div>
      </div>
      <div className="MON-mobile r-f-12">
      <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Order Notification</div>
        </div>
        <div className="ADD-p-position">
          <div className="ADD-p-container">
            <div className="r-f-10 txt-grey">Disclaimer: If you wish to edit the details of any user level, you can do it under "User" page.</div>
            {OwnerData.map((owner) => (
            <div key={owner.id} className="MON-comp-config mt-2">
              <div
                onClick={() => toggleBrandOwner(owner.id)}
                className={`MON-comp-config-header ${
                  openCardId === owner.id ? "MON-grey" : ""
                }`}
              >
                <div className="d-flex space-between align-item-center">
                  <div className="d-flex align-item-center g-20">
                    <div>
                      <div
                        onClick={() => toggleBrandOwner(owner.id)}
                        className="c-pointer"
                      >
                        {openCardId === owner.id ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="r-f-12">
                        Brand Owner ({owner.OwnerName})
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-item-center g-10">
                    <div className="r-f-12">Notification</div>
                    <div>
                      <GreenSwitch
                        checked={checked[owner.id]?.parent || false}
                        onChange={(event) =>
                          toggleChildSwitch(
                            owner.id,
                            "parent",
                            event.target.checked
                          )
                        }
                        name={`customSwitch_${owner.id}_parent`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {openCardId === owner.id && (
                <div className="MON-comp-config-content r-f-12">
                  <div className="d-flex space-between">
                    <div>{owner.phoneNumber}</div>
                    <div className="d-flex align-item-center g-10">
                      <div>SMS</div>
                      <div>
                        <GreenSwitch
                          checked={checked[owner.id]?.SMS || false}
                          onChange={(event) =>
                            toggleChildSwitch(
                              owner.id,
                              "SMS",
                              event.target.checked
                            )
                          }
                          name={`customSwitch_${owner.id}_SMS`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex space-between mt-2">
                    <div>{owner.whatsApp}</div>
                    <div className="d-flex align-item-center g-10">
                      <div>WhatsApp</div>
                      <div>
                        <GreenSwitch
                          checked={checked[owner.id]?.WhatsApp || false}
                          onChange={(event) =>
                            toggleChildSwitch(
                              owner.id,
                              "WhatsApp",
                              event.target.checked
                            )
                          }
                          name={`customSwitch_${owner.id}_WhatsApp`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex space-between mt-2">
                    <div>{owner.eMail}</div>
                    <div className="d-flex align-item-center g-10">
                      <div>Email</div>
                      <div>
                        <GreenSwitch
                          checked={checked[owner.id]?.Email || false}
                          onChange={(event) =>
                            toggleChildSwitch(
                              owner.id,
                              "Email",
                              event.target.checked
                            )
                          }
                          name={`customSwitch_${owner.id}_Email`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
            </div>
            </div>
      </div>
    </div>
  );
};

export default ManageOrderNotification;
