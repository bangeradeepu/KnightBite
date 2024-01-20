import React, { useState, useEffect } from "react";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import './ManagePosSettings.css'

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
  
const ManagePosSettings = () => {
  return (
    <div className='ManagePosSettings r-f-12'>
        <div className="MPOSS-desktop">
            <div className="MPOSS-layer">
            <div className="d-flex space-between align-item-center">
            <div>
              <div className="r-f-18 f-w-600">POS Settings</div>
            </div>
          </div>
          <div className="d-flex mt-5 g-20 align-item-center">
            <div className='MPOSS-left-side-w'>
            <div className='r-f-14'>POS Switch</div>
            <div className='r-f-10 txt-dark-grey'>(Turning OFF will make the POS inaccessable for the outlet owner)</div>
            </div>
            <div>
            <GreenSwitch
                        name=""
                      />
            </div>
          </div>
          <div className="d-flex mt-4 g-20 align-item-center">
            <div className='MPOSS-left-side-w'>
            <div className='r-f-14'>Pop up Message</div>
            <div className='r-f-10 txt-dark-grey'>(Displayed only when Turned OFF)</div>
            </div>
            <div>
            <textarea name="" id="" cols="50" rows="4" className="MPOSS-textarea"></textarea>
            </div>
          </div>
            </div>
        </div>
        <div className="MPOSS-mobile">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">POS Settings</div>
        </div>
        <div className="ADD-p-position">
          <div className="ADD-p-container">
          <div className="d-flex g-20 align-item-center">
            <div className='MPOSS-left-side-w'>
            <div className='r-f-18'>POS Switch</div>
            <div className='r-f-10 txt-dark-grey'>(Turning OFF will make the POS inaccessable for the outlet owner)</div>
            </div>
            <div>
            <GreenSwitch
                        name=""
                      />
            </div>
          </div>
          <div>
          <div className='mt-4'>
            <div className='r-f-18'>Pop up Message</div>
            <div className='r-f-10 txt-dark-grey'>(Displayed only when Turned OFF)</div>
            </div>
            <textarea name="" id="" cols="38" rows="4" className="MPOSS-textarea mt-1"></textarea>
          </div>
            </div></div>
        </div>
    </div>
  )
}

export default ManagePosSettings