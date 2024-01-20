import React, { useState, useEffect } from "react";
import "./ManageTax.css";
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
const ManageTax = () => {
  const TaxList = [
    {
      id: 1,
      taxName: " SGST",
      value: "2.5",
      applicableOn: "Custom",
    },
    {
      id: 2,
      taxName: " CGST",
      value: "2.5",
      applicableOn: "Custom",
    },
    {
      id: 3,
      taxName: "GST on Service fees",
      value: "18",
      applicableOn: "Service Fees",
    },
  ];

  const [checkboxes, setCheckboxes] = useState({
    itemsTotal: false,
    otherChargesTotal: false,
    deliveryCharge: false,
    packagingCharge: false,
    serviceFees: false,
  });

  const checkboxDisplayNames = {
    itemsTotal: 'Item Total',
    otherChargesTotal: 'Other Charges Total',
    deliveryCharge: 'Delivery Charge',
    packagingCharge: 'Packaging Charge (newly added)',
    serviceFees: 'Service Fees (newly added)',
  };

  useEffect(() => {
    // Check if all child checkboxes are checked
    const allChildCheckboxesChecked = Object.keys(checkboxes)
      .filter((key) => key !== 'itemsTotal' && key !== 'otherChargesTotal')
      .every((key) => checkboxes[key]);

    // Update the parent checkbox accordingly
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      otherChargesTotal: allChildCheckboxesChecked,
    }));
  }, [checkboxes]);

  const handleCheckboxChange = (checkboxName) => {
    if (checkboxName === 'otherChargesTotal') {
      // Update the state for the parent checkbox and all child checkboxes
      setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        otherChargesTotal: !prevCheckboxes.otherChargesTotal,
        deliveryCharge: !prevCheckboxes.otherChargesTotal,
        packagingCharge: !prevCheckboxes.otherChargesTotal,
        serviceFees: !prevCheckboxes.otherChargesTotal,
      }));
    } else {
      // Update the state based on the checkbox name
      setCheckboxes((prevCheckboxes) => ({
        ...prevCheckboxes,
        [checkboxName]: !prevCheckboxes[checkboxName],
      }));
    }
  };

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
    <div className="ManageTax r-f-12">
      <div className="MAT-desktop">
        <div className="MAT-layer">
          <div className="d-flex space-between align-item-center">
            <div>
              <div className="r-f-18 f-w-600">Tax</div>
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
          <table className="MAT-borderless-table mt-5">
            <tr>
              <th>Sl.No</th>
              <th>Tax Name</th>
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
                <td>{tax.taxName}</td>
                <td>{tax.taxName !== 'GST on Service fees' ? `${tax.value}%` : tax.value}</td>

                <td>{tax.applicableOn}</td>
                <td>
                  <FontAwesomeIcon
                    icon={faPen}
                    className="txt-dark-grey c-pointer"
                  />
                </td>
                <td>
                  {tax.applicableOn === "Custom" ? (
                    <FontAwesomeIcon
                      icon={faLock}
                      className="txt-dark-grey c-pointer"
                    />
                  ) : tax.applicableOn === "Service Fees" ? (
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
              <div className="f-w-700">Create New Tax</div>
            </div>
          </div>
          <div className="d-flex g-10 mt-2 align-item-center">
            <div>Tax Name:</div>
            <div>
              <input type="text" name="" id="" className="MAT-input-field" />
            </div>
          </div>
          <div className="d-flex g-10 mt-2 align-item-center">
            <div>Value (Percentage or Amount):</div>
            <div>
              <input type="text" name="" id="" className="MAT-input-field" />
            </div>
          </div>
          <div className="d-flex g-10 mt-2 align-item-center">
            <div>Applicable On:</div>
            <div
              className="MAT-input-fiel-dd d-flex flex-end c-pointer align-item-center"
              onClick={handleClickApplicableOpen}
            >
               {Object.keys(checkboxes)
          .filter((key) => checkboxes[key])
          .map((key) => checkboxDisplayNames[key] + ', ')}
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
          <div className="MAT-applicable-scrollbox">
            <div className="d-flex align-item-center g-10">
              <input
                type="checkbox"
                checked={checkboxes.itemsTotal}
                onChange={() => handleCheckboxChange("itemsTotal")}
                className="MAT-cb"
              />
              <div>Items Total</div>
            </div>

            {/* Parent Checkbox */}
            <div className="d-flex align-item-center g-10 MAT-l1-1">
              <input
                type="checkbox"
                checked={checkboxes.otherChargesTotal}
                onChange={() => handleCheckboxChange("otherChargesTotal")}
                className="MAT-cb"
              />
              <div>Other Charges Total</div>
            </div>

            {/* Child Checkboxes */}
            <div className="d-flex align-item-center g-10 MAT-pd mt-1">
              <input
                type="checkbox"
                checked={checkboxes.deliveryCharge}
                onChange={() => handleCheckboxChange("deliveryCharge")}
                className="MAT-cb"
              />
              <div>Delivery Charge</div>
            </div>

            <div className="d-flex align-item-center g-10 MAT-pd">
              <input
                type="checkbox"
                checked={checkboxes.packagingCharge}
                onChange={() => handleCheckboxChange("packagingCharge")}
                className="MAT-cb"
              />
              <div>Packaging Charge (newly added)</div>
            </div>

            <div className="d-flex align-item-center g-10 MAT-pd">
              <input
                type="checkbox"
                checked={checkboxes.serviceFees}
                onChange={() => handleCheckboxChange("serviceFees")}
                className="MAT-cb"
              />
              <div>Service Fees (newly added)</div>
            </div>
          </div>
          <div className="d-flex space-evenly justify-content-center align-text-center mt-3">
            <div>
              <div className="">You have selected </div>
              <div className="">Sum of :</div>
              <div>
              {Object.keys(checkboxes)
          .filter((key) => checkboxes[key])
          .map((key) => checkboxDisplayNames[key] + ', ')}
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
      <div className="MAT-mobile">
      <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Tax</div>
          <div>
            <button className="p-button bg-purple" onClick={handleClickCreateOpen}>Create New</button>
          </div>
        </div>
        <div className="ADD-p-position" style={{marginTop:'32vh'}}>
          <div className="ADD-p-container">
          {TaxList.map((tax) => (
            <div className="MAT-mobile-card mt-2">
              <div className="d-flex">
                <div className="flex-1">
                <div className="r-f-8 txt-grey">Sl.No</div>
                <div className="r-f-10">{tax.id}</div>
                </div>
                <div className="flex-1">
                <div className="r-f-8 txt-grey">Tax Name</div>
                <div className="r-f-10">{tax.taxName}</div>
                </div>
              </div>
              <div className="d-flex mt-2">
                <div className="flex-1">
                <div className="r-f-8 txt-grey">Value (Percentage / Amount)</div>
                <div className="r-f-10">{tax.value}</div>
                </div>
               
              </div>
              <div className="d-flex mt-2 space-between align-item-center g-20">
              <div className="flex-1">
                <div className="r-f-8 txt-grey">Applicable On</div>
                <div className="r-f-10">{tax.applicableOn}</div>
                </div>
                <div className="d-flex g-20">
                <div>
                <FontAwesomeIcon
                    icon={faPen}
                    className="txt-dark-grey c-pointer"
                  />
                </div>
                <div>
                {tax.applicableOn === "Custom" ? (
                    <FontAwesomeIcon
                      icon={faLock}
                      className="txt-dark-grey c-pointer"
                    />
                  ) : tax.applicableOn === "Service Fees" ? (
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
  );
};

export default ManageTax;
