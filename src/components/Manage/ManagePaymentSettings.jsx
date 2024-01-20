import React, { useState, useEffect } from "react";
import "./ManagePaymentSettings.css";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faCircleCheck,
  faPen,
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

const ManagePaymentSettings = () => {
  const [isOnlineVisible, setIsOnlineVisible] = useState(false);
  const toggleOnline = () => {
    setIsOnlineVisible(!isOnlineVisible);
  };
  const [isCodVisible, setIsCodVisible] = useState(false);
  const toggleCod = () => {
    setIsCodVisible(!isCodVisible);
  };

  // Switch
  const [onlineChecked, setOnlineChecked] = React.useState(false);

  const handleOnlineChange = (event) => {
    setOnlineChecked(event.target.checked);
  };

  const [codChecked, setcodChecked] = React.useState(false);

  const handlecodChange = (event) => {
    setcodChecked(event.target.checked);
  };
  return (
    <div className="ManagePaymentSettings">
      <div className="MPS-desktop r-f-12">
        <div className="MPS-layer">
          <div className="d-flex space-between align-item-center">
            <div>
              <div className="r-f-18 f-w-600">Payment Settings</div>
            </div>
          </div>
          <div className="MPS-comp-config mt-2">
            <div
              onClick={toggleOnline}
              className={`MPS-comp-config-header ${
                isOnlineVisible ? "MPS-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleOnline} className="c-pointer">
                      {isOnlineVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Online Payment</div>
                  </div>
                </div>
                <div>
                  <GreenSwitch
                    checked={onlineChecked}
                    onChange={handleOnlineChange}
                    name="customSwitch"
                  />
                </div>
              </div>
            </div>
            {isOnlineVisible && (
              <div className="MPS-comp-config-content">
                <div>
                  <div className="txt-grey">Message When unavailable:</div>
                  <div className="d-flex space-between mt-1 align-item-center">
                    <div>Temporarily unavailable, please cooperate</div>
                    <div>
                      <FontAwesomeIcon
                        icon={faPen}
                        className="txt-dark-grey c-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="txt-grey">Cap Amount:</div>
                  <div className="d-flex space-between mt-1 align-item-center">
                    <div>Unlimited</div>
                    <div>
                      <FontAwesomeIcon
                        icon={faPen}
                        className="txt-dark-grey c-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="MPS-comp-config mt-2">
            <div
              onClick={toggleCod}
              className={`MPS-comp-config-header ${
                isCodVisible ? "MPS-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleCod} className="c-pointer">
                      {isOnlineVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">C.O.D</div>
                  </div>
                </div>
                <div>
                  <GreenSwitch
                    checked={codChecked}
                    onChange={handlecodChange}
                    name="customSwitch"
                  />
                </div>
              </div>
            </div>
            {isCodVisible && (
              <div className="MPS-comp-config-content">
                <div>
                  <div className="txt-grey">Message When unavailable:</div>
                  <div className="d-flex space-between mt-1 align-item-center">
                    <div>Temporarily unavailable, please cooperate</div>
                    <div>
                      <FontAwesomeIcon
                        icon={faPen}
                        className="txt-dark-grey c-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="txt-grey">Cap Amount:</div>
                  <div className="d-flex space-between mt-1 align-item-center">
                    <div>700</div>
                    <div>
                      <FontAwesomeIcon
                        icon={faPen}
                        className="txt-dark-grey c-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="MPS-mobile">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Payment Settings</div>
        </div>
        <div className="ADD-p-position">
          <div className="ADD-p-container">
            <div className="MPS-comp-config mt-2">
              <div
                onClick={toggleOnline}
                className={`MPS-comp-config-header ${
                  isOnlineVisible ? "MPS-grey" : ""
                }`}
              >
                <div className="d-flex space-between align-item-center">
                  <div className="d-flex align-item-center g-20">
                    <div>
                      <div onClick={toggleOnline} className="c-pointer">
                        {isOnlineVisible ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="r-f-14">Online Payment</div>
                    </div>
                  </div>
                  <div>
                    <GreenSwitch
                      checked={onlineChecked}
                      onChange={handleOnlineChange}
                      name="customSwitch"
                    />
                  </div>
                </div>
              </div>
              {isOnlineVisible && (
                <div className="MPS-comp-config-content">
                  <div className="mt-2">
                    <div className="txt-grey">Message When unavailable:</div>
                    <div className="d-flex space-between mt-1 align-item-center">
                      <div>Temporarily unavailable, please cooperate</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faPen}
                          className="txt-dark-grey c-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="txt-grey">Cap Amount:</div>
                    <div className="d-flex space-between mt-1 align-item-center">
                      <div>Unlimited</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faPen}
                          className="txt-dark-grey c-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="MPS-comp-config mt-2">
              <div
                onClick={toggleCod}
                className={`MPS-comp-config-header ${
                  isCodVisible ? "MPS-grey" : ""
                }`}
              >
                <div className="d-flex space-between align-item-center">
                  <div className="d-flex align-item-center g-20">
                    <div>
                      <div onClick={toggleCod} className="c-pointer">
                        {isOnlineVisible ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="r-f-14">C.O.D</div>
                    </div>
                  </div>
                  <div>
                    <GreenSwitch
                      checked={codChecked}
                      onChange={handlecodChange}
                      name="customSwitch"
                    />
                  </div>
                </div>
              </div>
              {isCodVisible && (
                <div className="MPS-comp-config-content">
                  <div>
                    <div className="txt-grey">Message When unavailable:</div>
                    <div className="d-flex space-between mt-1 align-item-center">
                      <div>Temporarily unavailable, please cooperate</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faPen}
                          className="txt-dark-grey c-pointer"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="txt-grey">Cap Amount:</div>
                    <div className="d-flex space-between mt-1 align-item-center">
                      <div>700</div>
                      <div>
                        <FontAwesomeIcon
                          icon={faPen}
                          className="txt-dark-grey c-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagePaymentSettings;
