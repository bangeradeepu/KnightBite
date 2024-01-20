import React, { useState, useEffect } from "react";
import "./ManageConfigureOutlets.css";
import { Icon } from "@iconify/react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faMagnifyingGlass,
  faPlus,
  faGripLines,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
const ManageConfigureOutlets = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Hampankatta",
      subLocations: [
        { name: "Knight Bite" },
        { name: "Pancakes by Knight Bite" },
        { name: "Mandarni Eats" },
        // Add more sub-locations as needed
      ],
    },
    {
      id: 2,
      name: "Derlakatte",
      subLocations: [
        { name: "Knight Bite" },
        { name: "Pancakes by Knight Bite" },
        { name: "Mandarni Eats" },
        // Add more sub-locations as needed
      ],
    },

    // Add more sub-branches as needed
  ]);

  // Open Outlets Edit  modal
  const [outletsEditVisible, setOutletsEditVisible] = useState(false);
  const [outletsEditData, setOutletsEditData] = useState(null);

  const openOutletsEdit = (subBranch) => {
    setOutletsEditData(subBranch);
    setOutletsEditVisible(true);
  };

  const closeOutletsEdit = () => {
    setOutletsEditVisible(false);
  };
  
    // Open OAssociated Brands
  const [ABrandVisible, setABrandVisible] = useState(false);
  const [ABrandData, setABrandData] = useState(null);

  const openABrand = (subBranch, subLocation) => {
    setABrandData({ subBranch, subLocation });
    setABrandVisible(true);
  };
  
  const closeABrand = () => {
    setABrandVisible(false);
  };
//   File handle
  const [fileUploadedGSTIN, setFileUploadedGSTIN] = useState(false);

  const handleFileChangeGSTIN = (e) => {
    if (e.target.files.length > 0) {
      setFileUploadedGSTIN(true);
    } else {
      setFileUploadedGSTIN(false);
    }
  };
  const [fileUploadedFSSAI, setFileUploadedFSSAI] = useState(false);

  const handleFileChangeFSSAI = (e) => {
    if (e.target.files.length > 0) {
      setFileUploadedFSSAI(true);
    } else {
      setFileUploadedFSSAI(false);
    }
  };
  const [fileUploadedTL, setFileUploadedTL] = useState(false);

  const handleFileChangeTL = (e) => {
    if (e.target.files.length > 0) {
      setFileUploadedTL(true);
    } else {
      setFileUploadedTL(false);
    }
  };
  const [fileUploadedBL, setFileUploadedBL] = useState(false);

  const handleFileChangeBL = (e) => {
    if (e.target.files.length > 0) {
      setFileUploadedBL(true);
    } else {
      setFileUploadedBL(false);
    }
  };


// Num of owners inc
  const [numOwners, setNumOwners] = useState();
  const [ownerFields, setOwnerFields] = useState([]);

  useEffect(() => {
    generateOwnerFields(numOwners);
  }, [numOwners]);

  const handleNumOwnersChange = (e) => {
    const count = parseInt(e.target.value) || '';
    setNumOwners(count);
  };

  const generateOwnerFields = (count) => {
    const fields = [];
    for (let i = 1; i <= count; i++) {
      fields.push(
        <div className="d-flex g-30 mt-2" key={i}>
          <div>
            <div className='r-f-8 txt-grey'>Owner's name ({i})<span className='txt-red'>*</span></div>
            <input type="text" name={`ownerName${i}`} id={`ownerName${i}`} className='MCONFIG-textfield MCONFIG-textfield-p-2 mt-1' />
          </div>
          <div>
            <div className='r-f-8 txt-grey'>Owner's Contact Number ({i})<span className='txt-red'>*</span></div>
            <input type="text" name={`ownerContact${i}`} id={`ownerContact${i}`} className='MCONFIG-textfield MCONFIG-textfield-p-2 mt-1' />
          </div>
        </div>
      );
    }
    setOwnerFields(fields);
  };

  return (
    <div className="ManageConfigureOutlets">
      <div className="MCONFIG-desktop r-f-12">
        <div className="MCONFIG-layer">
          <div className="r-f-18 f-w-600">Configure Outlets</div>
          <div className="d-flex space-evenly mt-2">
            <div className="d-flex g-20 MCONFIG-search-outer-layer align-item-center">
              <div className="MCONFIG-search-icon">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="txt-grey"
                />
              </div>
              <input
                type="text"
                name=""
                id=""
                className="MCONFIG-search-filed"
                placeholder="Search Outlet/Brand"
              />
            </div>
          </div>
          <table className="custom-table">
            <thead>
              <tr>
                <th style={{ textAlign: "center" }}>SL.No</th>
                <th style={{ textAlign: "center" }}>Outlets</th>
                <th style={{ textAlign: "center" }}>Associated Brands</th>
              </tr>
            </thead>

            <tbody>
              {items.map((subBranch, index) => (
                <tr key={subBranch.index}>
                  <td style={{ textAlign: "center" }}>{subBranch.id}</td>
                  <td style={{ textAlign: "center" }}>
                    <div>
                      <div className="mt-1 d-flex space-evenly align-item-center">
                        <div className="d-flex aign-item-center">
                          <div className="MCONFIG-underline">
                            {subBranch.name}
                          </div>
                          &nbsp;
                          <div>
                            <FontAwesomeIcon
                              icon={faPencil}
                              className="r-f-10 c-pointer"
                              onClick={() => openOutletsEdit(subBranch)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>
                      {subBranch.subLocations.map((subLocation, i) => (
                        <div className="mt-1" key={i}>
                          <div className="mt-1 d-flex space-evenly align-item-center">
                            <div className="d-flex aign-item-center">
                              <div className="d-flex space-between aign-item-center" style={{width:'15vw'}}>
                              <div className="MCONFIG-underline">
                                {subLocation.name}
                              </div>
                              <div className="d-flex
                              ">
                              <div>
                                <FontAwesomeIcon icon={faGripLines} />
                              </div>
                              &nbsp;&nbsp;&nbsp;
                              <div>
                                <FontAwesomeIcon
                                  icon={faPencil}
                                  className="r-f-10 c-pointer"
                                  onClick={() => openABrand(subBranch, subLocation)}
                                />
                              </div>
                              </div>
                              </div>
                              
        
                              
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="d-flex space-evenly">
                        <div className="MCONFIG-addb-addo-btn mt-3 mb-3 d-flex align-item-center r-f-10 justify-content-center c-pointer">
                          <div>Add Brand</div>&nbsp;
                          <div>
                            <FontAwesomeIcon icon={faPlus} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>
                  <div className="d-flex space-evenly">
                    <div className="MCONFIG-addb-addo-btn mt-3 mb-3 d-flex align-item-center r-f-10 justify-content-center c-pointer">
                      <div>Add Outlet</div>&nbsp;
                      <div>
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="d-flex space-evenly">
                    <div className="MCONFIG-addb-addo-btn mt-3 mb-3 d-flex align-item-center r-f-10 justify-content-center c-pointer">
                      <div>Add Brand</div>&nbsp;
                      <div>
                        <FontAwesomeIcon icon={faPlus} />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
      {outletsEditVisible && (
        <div className="main-modal main-modal-open r-f-12 oEv">
          <div className="main-modal-content">
            <div className="d-flex space-between">
              <div></div>
              <div className="r-f-14 align-text-center">
                <div className="r-f-12">You are editing:</div>
                <div className="f-w-700">{outletsEditData.name}</div>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="r-f-18 c-pointer"
                  onClick={closeOutletsEdit}
                />
              </div>
            </div>
            <div className="main-modal-content-inside">
              <div className="MCONFIG-comp-config">
                <div className="MCONFIG-comp-config">
                  <div className="d-flex g-30 mt-2">
                    <div>
                      <div>
                        <div className="r-f-8 txt-grey">
                          Outlet Name<span className="txt-red">*</span>&nbsp;
                          <span className="MCONFIG-textfield-title-role r-f-6">
                            For internal use
                          </span>
                          &nbsp;
                          <span>
                            <Icon icon="bi:info-circle" />
                          </span>
                        </div>
                        <input
                          type="text"
                          name=""
                          id=""
                          className="MCONFIG-textfield mt-1"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="r-f-8 txt-grey">Outlet ID</div>
                      <div className="MCONFIG-textfield-s d-flex space-between mt-1">
                        <input
                          type="text"
                          name=""
                          id=""
                          value={"7897897465"}
                          style={{
                            width: "5vw",
                            border: "none",
                            outline: "none",
                            backgroundColor: "#dadada",
                            color: "#aeaeae",
                          }}
                          readOnly
                        />
                        <div className="c-pointer MCONFIG-idcopy txt-grey d-flex align-item-center r-f-14">
                          <Icon icon="ph:copy" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MCONFIG-comp-config">
                <div className="r-f-14">Address</div>
                <div className="r-f-8 txt-grey">Outlet Address</div>
                <div className="MCONFIG-comp-config">
                  <div>
                    <div className="r-f-8 txt-grey">
                      Complete address <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name=""
                      id=""
                      className="MCONFIG-textfield mt-1"
                      style={{ width: "33.5vw" }}
                    />
                  </div>
                  <div className="d-flex g-30 mt-2">
                    <div>
                      <div className="r-f-8 txt-grey">
                        Country <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCONFIG-textfield mt-1"
                      />
                    </div>
                    <div>
                      <div className="r-f-8 txt-grey">
                        State <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCONFIG-textfield mt-1"
                      />
                    </div>
                  </div>
                  <div className="d-flex g-30 mt-2">
                    <div>
                      <div className="r-f-8 txt-grey">
                        City <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCONFIG-textfield mt-1"
                      />
                    </div>
                    <div>
                      <div className="r-f-8 txt-grey">
                        Co-ordinate <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCONFIG-textfield mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex txt-grey space-evenly MCONFIG-dotted-lines"></div>
              <div className="MCONFIG-comp-config">
                <div className="r-f-14">Bank Details</div>
                <div className="r-f-8 txt-grey">Configure Bank Info</div>
                <div className="MCONFIG-comp-config">
                  <div className="d-flex g-30">
                    <div>
                      <div className="r-f-8 txt-grey">
                        Bank Account Name <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCONFIG-textfield mt-1"
                      />
                    </div>
                    <div>
                      <div className="r-f-8 txt-grey">
                        Bank Name <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCONFIG-textfield mt-1"
                      />
                    </div>
                  </div>
                  <div className="d-flex g-30 mt-2">
                    <div>
                      <div className="r-f-8 txt-grey">
                        Account Number <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCONFIG-textfield mt-1"
                      />
                    </div>
                    <div>
                      <div className="r-f-8 txt-grey">
                        IFSC Code <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="MCONFIG-textfield mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {ABrandVisible && (
        <div
        className="main-modal main-modal-open r-f-12 oEv"
      >
        <div className="main-modal-content">
        <div className="d-flex space-between">
              <div></div>
              <div className="r-f-14 align-text-center">
                <div className="r-f-12">You are editing:</div>
                <div className="d-flex">
                <div>{ABrandData && ABrandData.subBranch.name}&nbsp;{">"}&nbsp;</div>
                <div className="f-w-700">{ABrandData && ABrandData.subLocation.name}</div>
                </div>
               
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="r-f-18 c-pointer"
                  onClick={closeABrand}
                />
              </div>
            </div>
          <div className="main-modal-content-inside">
          <div className="MCONFIG-comp-config">
          <div className="MCONFIG-comp-config">
          <div className='d-flex g-30 mt-2'>
                        <div>
                          <div>
                             <div className='r-f-8 txt-grey'>Brand Name <span className='txt-red'>*</span>&nbsp;<span className='MCONFIG-textfield-title-role r-f-6'>Customers see this</span>&nbsp;<span><Icon icon="bi:info-circle" /></span></div>
                             <input type="text" name="" id="" className='MCONFIG-textfield mt-1' />
                          </div>
                        </div>
                        <div>
                          <div className='r-f-8 txt-grey'>Brand ID</div>
                          <div className='MCONFIG-textfield-s d-flex space-between mt-1'>
                            <input type="text" name="" id="" value={'7897897465'} style={{width:'5vw',border:'none', outline:'none'}} readOnly/>
                            <div className='c-pointer MCONFIG-idcopy txt-grey d-flex align-item-center r-f-14'><Icon icon="ph:copy" /></div>
                          </div>
                        </div>
                        <div>
                        <div className='r-f-8 txt-grey'>Brand Logo</div>
                        <div className="d-flex g-10">
                        <div className='mt-1' >
                          <label className='MCONFIG-custom-file-upload-logo'>
                            <input
                              type="file"
                              name=""
                              id="fileInput"
                              className='MCONFIG-file-input'
                              onChange={handleFileChangeBL}
                            />
                            {fileUploadedBL ? (
                              <span className='r-f-10 d-flex align-item-center align-text-center justify-content-center'>Replace File <AiOutlinePaperClip /></span>
                            ) : (
                              <span className='r-f-12 d-flex align-item-center align-text-center justify-content-center txt-dark-grey'>Browse File <AiOutlinePaperClip /></span>
                            )}
                          </label>
                        </div>
                        <div>
                        <div className="MCONFIG-logo-eclipse">
                        <div className="MCONFIG-logo-image-eclipse">
                          <img
                            src='./Images/DeliveyBoyDocuments/12.jpg'
                            alt="No File"
                            className="logo-image-eclipse r-f-8"
                          />
                        </div>
                      </div>
                        </div>
                        </div>
                        </div>
                      </div>
                      </div>
                      </div>
          <div className='d-flex txt-grey space-evenly MCONFIG-dotted-lines'></div>
          <div className="MCONFIG-comp-config">
                <div className='r-f-14'>Compliance</div>
                  <div className='r-f-8 txt-grey'>Manage info related to tax, legal & regulatory agencies
</div>
                  <div className="MCONFIG-comp-config">
                    <div className="d-flex g-30">
                      <div>
                      <div className='r-f-8 txt-grey'>GSTIN <span className='txt-red'>*</span></div>
                      <div className='MCONFIG-textfield d-flex g-10 align-item-center mt-1' >
                          <input type="text" name="" id="" style={{border:'none', outline:'none',width:'9vw',fontSize:'1vw'}} />
                          <label className='MCONFIG-custom-file-upload'>
                            <input
                              type="file"
                              name=""
                              id="fileInput"
                              className='MCONFIG-file-input'
                              onChange={handleFileChangeGSTIN}
                            />
                            {fileUploadedGSTIN ? (
                              <span className='r-f-6 d-flex align-item-center align-text-center justify-content-center'>File Uploaded</span>
                            ) : (
                              <span className='r-f-6 d-flex align-item-center align-text-center justify-content-center'>Browse File</span>
                            )}
                          </label>
                        </div>
                        
                      </div>
                      <div>
                      <div className='r-f-8 txt-grey'>FSSAI <span className='txt-red'>*</span></div>
                      <div className='MCONFIG-textfield d-flex g-10 align-item-center mt-1' >
                          <input type="text" name="" id="" style={{border:'none', outline:'none',width:'9vw',fontSize:'1vw'}} />
                          <label className='MCONFIG-custom-file-upload'>
                            <input
                              type="file"
                              name=""
                              id="fileInput"
                              className='MCONFIG-file-input'
                              onChange={handleFileChangeFSSAI}
                            />
                            {fileUploadedFSSAI ? (
                              <span className='r-f-6 d-flex align-item-center align-text-center justify-content-center'>File Uploaded</span>
                            ) : (
                              <span className='r-f-6 d-flex align-item-center align-text-center justify-content-center'>Browse File</span>
                            )}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex g-30 mt-2">
                      <div>
                      <div className='r-f-8 txt-grey'>Trade License <span className='txt-red'>*</span></div>
                      <div className='MCONFIG-textfield d-flex g-10 align-item-center mt-1' >
                          <input type="text" name="" id="" style={{border:'none', outline:'none',width:'9vw',fontSize:'1vw'}} />
                          <label className='MCONFIG-custom-file-upload'>
                            <input
                              type="file"
                              name=""
                              id="fileInput"
                              className='MCONFIG-file-input'
                              onChange={handleFileChangeTL}
                            />
                            {fileUploadedTL ? (
                              <span className='r-f-6 d-flex align-item-center align-text-center justify-content-center'>File Uploaded</span>
                            ) : (
                              <span className='r-f-6 d-flex align-item-center align-text-center justify-content-center'>Browse File</span>
                            )}
                          </label>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
          <div className='d-flex txt-grey space-evenly MCONFIG-dotted-lines'></div>
                <div className="MCONFIG-comp-config">
                <div className='r-f-14'>Owner Details</div>
                  <div className='r-f-8 txt-grey'>Configure Contact Info</div>
                  <div className="MCONFIG-comp-config">
                      <div className="d-flex g-30">
                      <div>
                      <div className='r-f-8 txt-grey'>Number of Owners <span className='txt-red'>*</span></div>
                      <input type="text" name="numOwners" id="numOwners" className='MCONFIG-textfield mt-1' onChange={handleNumOwnersChange} value={numOwners} />
                          </div>
                          <div>
                             <div className='r-f-8 txt-grey'>Ownership Type/Term <span className='txt-red'>*</span></div>
                             <input type="text" name="" id="" className='MCONFIG-textfield mt-1' />
                          </div>
                      </div>
                      {ownerFields}
                  </div>
                </div>
          </div>
        </div>
      </div>

      )}
    </div>
  );
};

export default ManageConfigureOutlets;
