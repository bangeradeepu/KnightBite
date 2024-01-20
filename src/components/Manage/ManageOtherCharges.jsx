import React, { useState, useEffect } from "react";
import './ManageOtherCharges.css'
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faLock,
  faTrash,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
const ManageOtherCharges = () => {
  const TaxList = [
    {
      id: 1,
      Name: "Delivery Charges",
      value: "Custom",
      applicableOn: "System Set",
    },
    {
      id: 2,
      Name: " Packaging Charges",
      value: "3",
      applicableOn: "Items Total",
    },
    {
      id: 3,
      Name: "Service fees",
      value: "10",
      applicableOn: null,
    },
  ];



  const [checkboxes, setCheckboxes] = useState({
    itemsTotal: false,
    deliveryCharge: false,
  });

  const checkboxDisplayNames = {
    itemsTotal: 'Items Total',
    deliveryCharge: 'Delivery Charge',
    // Add more mappings as needed
  };

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const selectedCheckboxes = Object.keys(checkboxes).filter(
    (checkboxName) => checkboxes[checkboxName]
  );

  const selectedCheckboxDisplayNames = selectedCheckboxes.map(
    (checkboxName) => checkboxDisplayNames[checkboxName]
  );

  
  //   Open create new
  const [createOpen, setCreateOpen] = React.useState(false);

  const handleClickCreateOpen = () => {
    setCreateOpen(true);
  };

  const handleCreateClose = () => {
    setCreateOpen(false);
  };
  //   Open Applicable on
  const [applicableOpen, setApplicableOpen] = React.useState(false);

  const handleClickApplicableOpen = () => {
    setApplicableOpen(true);
  };

  const handleApplicableClose = () => {
    setApplicableOpen(false);
  };
  return (
    <div className='ManageOtherCharges r-f-12'>
        <div className="MOC-desktop">
            <div className="MOC-layer">
            <div className="d-flex space-between align-item-center">
            <div>
              <div className="r-f-18 f-w-600">Other Charges</div>
            </div>
            <div>
              <button
                className="p-button bg-purple"
                onClick={handleClickCreateOpen}
              >
                Create new
              </button>
            </div>
          </div>
          <table className="MOC-borderless-table mt-5">
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>
                <div>Value</div>
                <div>(Percentage / Amount)</div>
              </th>
              <th>Applicable on</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {TaxList.map((tax) => (
              <tr>
                <td>{tax.id}</td>
                <td>{tax.Name}</td>
                <td>{tax.Name !== 'Service fees' && tax.Name !== 'Delivery Charges' ? `${tax.value}%` : tax.value}</td>
                <td>{tax.applicableOn !== null ? tax.applicableOn : '-'}</td>
                <td>
                {tax.applicableOn === 'System Set' ? (
            <div className="r-f-8">
              <div>Edit under</div>
              <div>delivery settings</div>
            </div>
          ) : (
            <FontAwesomeIcon icon={faPen} className="txt-dark-grey c-pointer" />
          )}
                </td>
                <td>
                  {tax.applicableOn === "System Set" ? (
                    <FontAwesomeIcon
                      icon={faLock}
                      className="txt-dark-grey c-pointer"
                    />
                  ) : tax.applicableOn === "Items Total" || tax.applicableOn === null  ? (
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="txt-dark-grey c-pointer"
                    />
                  ) : null}
                </td>
              </tr>
            ))}
          </table>
            </div>
        </div>
        <Dialog
        open={createOpen}
        onClose={handleCreateClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className="d-flex space-evenly">
            <div className="d-flex g-10 align-item-center">
              <div className="f-w-700">Create a "Other Charge"</div>
            </div>
          </div>
          <div className="d-flex g-10 mt-2 align-item-center">
            <div>Name:</div>
            <div>
              <input type="text" name="" id="" className="MOC-input-field" />
            </div>
          </div>
          <div className="d-flex g-10 mt-2 align-item-center">
            <div>Value (Percentage or Amount):</div>
            <div>
              <input type="text" name="" id="" className="MOC-input-field" />
            </div>
          </div>
          <div className="d-flex g-10 mt-2 align-item-center">
            <div>Applicable On:</div>
            <div
              className="MOC-input-fiel-dd d-flex flex-end c-pointer align-item-center"
              onClick={handleClickApplicableOpen}
            >
              {selectedCheckboxDisplayNames.join(', ')}
              <FontAwesomeIcon icon={faChevronDown} className="txt-dark-grey" />
            </div>
          </div>
          <div className="d-flex space-evenly mt-5">
            <button
              className="p-button bg-purple"
            >
             &nbsp;&nbsp; Create &nbsp;&nbsp;
            </button>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog
        open={applicableOpen}
        onClose={handleApplicableClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogContent>
          <DialogContentText></DialogContentText>
          <div className="d-flex space-evenly justify-content-center align-text-center">
            <div>
              <div className="f-w-700">Applicable On</div>
              <div className="mt-2">Select one or multiple options</div>
            </div>
          </div>
          <div className="MOC-applicable-scrollbox">
           <div className="d-flex align-item-center g-10">
        <input
          type="checkbox"
          className="MOC-cb"
          checked={checkboxes.itemsTotal}
          onChange={() => handleCheckboxChange('itemsTotal')}
        />
        <div>Items Total</div>
      </div>
      <div className="d-flex align-item-center g-10 MOC-l1-1">
        <input
          type="checkbox"
          className="MOC-cb"
          checked={checkboxes.deliveryCharge}
          onChange={() => handleCheckboxChange('deliveryCharge')}
        />
        <div>Delivery Charge</div>
      </div>
          </div>
          <div className="d-flex space-evenly justify-content-center align-text-center mt-3">
            <div>
              <div className="">You have selected </div>
              <div className="">Sum of :</div>
              <div>
              {selectedCheckboxDisplayNames.join(', ')}
              </div>
            </div>
          </div>
         
          <div className="d-flex space-evenly mt-5">
            <button
              className="p-button bg-purple"
              onClick={handleApplicableClose}
            >
              &nbsp;&nbsp; Done &nbsp;&nbsp;
            </button>
          </div>
        </DialogContent>
      </Dialog>
      <div className="MOC-mobile">
      <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Tax</div>
          <div>
            <button className="p-button bg-purple" onClick={handleClickCreateOpen}>Create New</button>
          </div>
        </div>
        <div className="ADD-p-position" style={{marginTop:'32vh'}}>
          <div className="ADD-p-container">
          {TaxList.map((tax) => (
            <div className="MOC-mobile-card mt-2">
              <div className="d-flex">
                <div className="flex-1">
                <div className="r-f-8 txt-grey">Sl.No</div>
                <div className="r-f-10">{tax.id}</div>
                </div>
                <div className="flex-1">
                <div className="r-f-8 txt-grey">Name</div>
                <div className="r-f-10">{tax.Name}</div>
                </div>
              </div>
              <div className="d-flex mt-2">
                <div className="flex-1">
                <div className="r-f-8 txt-grey">Value (Percentage / Amount)</div>
                <div className="r-f-10">{tax.Name !== 'Service fees' && tax.Name !== 'Delivery Charges' ? `${tax.value}%` : tax.value}</div>
                </div>
               
              </div>
              <div className="d-flex mt-2 space-between align-item-center g-20">
              <div className="flex-1">
                <div className="r-f-8 txt-grey">Applicable On</div>
                <div className="r-f-10">{tax.applicableOn !== null ? tax.applicableOn : '-'}</div>
                </div>
                <div className="d-flex g-20">
                <div>
                {tax.applicableOn === 'System Set' ? (
            <div className="r-f-8">
              <div>Edit under</div>
              <div>delivery settings</div>
            </div>
          ) : (
            <FontAwesomeIcon icon={faPen} className="txt-dark-grey c-pointer" />
          )}
                </div>
                <div>
                {tax.applicableOn === "System Set" ? (
                    <FontAwesomeIcon
                      icon={faLock}
                      className="txt-dark-grey c-pointer"
                    />
                  ) : tax.applicableOn === "Items Total" || tax.applicableOn === null  ? (
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="txt-dark-grey c-pointer"
                    />
                  ) : null}
                </div>
                </div>
             
              </div>
            </div>
          ))}
            </div></div>
      </div>
    </div>
  )
}

export default ManageOtherCharges