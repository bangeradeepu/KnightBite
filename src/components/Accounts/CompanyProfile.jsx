import React, { useState, useEffect } from "react";
import "./CompanyProfile.css";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Icon } from "@iconify/react";
import { AiOutlinePaperClip } from "react-icons/ai";
import { GoPencil } from "react-icons/go";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
  faChevronDown,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
const CompanyProfile = ({
  setSessionCompId,
  setSessionphoneNumber,
  setSessionpId,
}) => {
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
  const [fileUploadedCL, setFileUploadedCL] = useState(false);

  const handleFileChangeCL = (e) => {
    if (e.target.files.length > 0) {
      setFileUploadedCL(true);
    } else {
      setFileUploadedCL(false);
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

  const [isCCVisible, setIsCCVisible] = useState(false);
  const toggleCC = () => {
    setIsCCVisible(!isCCVisible);
  };

  const [isAddressVisible, setIsAddressVisible] = useState(false);
  const toggleAddress = () => {
    setIsAddressVisible(!isAddressVisible);
  };

  const [isComplienceVisible, setIsComplienceVisible] = useState(false);
  const toggleComplience = () => {
    setIsComplienceVisible(!isComplienceVisible);
  };

  const [isBDVisible, setIsBDVisible] = useState(false);
  const toggleBD = () => {
    setIsBDVisible(!isBDVisible);
  };
  const [isODVisible, setIsODVisible] = useState(false);
  const toggleOD = () => {
    setIsODVisible(!isODVisible);
  };
  const [genPerId, setGenPerId] = useState(Math.floor(Math.random() * 1000000));
  const [genBrandId, setGenBrandId] = useState(
    Math.floor(Math.random() * 1000000)
  );
  const [genOutletId, setGenOutletId] = useState(
    Math.floor(Math.random() * 1000000)
  );
  const [buttonUpdateSave, setButtonUpdateSave] = useState(false);
  const [buttonTurnIntoUpdate, setButtonTurnIntoUpdate] = useState(false);
  const [gg, setGg] = useState(false);
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState("");
  const [companyName, setCompanyName] = useState(" ");
  const [brandName, setBrandName] = useState(" ");
  const [outletName, setOutletName] = useState(" ");
  const [completeAddress, setCompleteAddress] = useState(" ");
  const [country, setCountry] = useState(" ");
  const [state, setState] = useState(" ");
  const [city, setCity] = useState(" ");
  const [coOrdinate, setCoOrdinate] = useState(" ");
  const [gstin, setGstin] = useState("");
  const [fssai, setFssai] = useState("");
  const [trade, setTrade] = useState("");
  const [bankAccountName, setBankAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [ownershipType, setOwnershipType] = useState("");
  const [loadCompleteFetchBrandId, setLoadCompleteFetchBrandId] =
    useState(false);
  const [mainOwnerContact, setMainOwnerContact] = useState(
    setSessionphoneNumber
  );
  const [mainOwnerName, setmainOwnerName] = useState("");

  // GET user permission data and check is it guest or not
  useEffect(() => {
    const fetchUserPermi = async () => {
      const userPermiApi = `http://127.0.0.1:8000/user/permissions/user_permissions/get/?comp_id=${setSessionCompId}&per_id=${setSessionpId}`;

      try {
        const response = await axios.get(userPermiApi);
        const responseData = response.data;

        if (responseData.length > 0) {
          const userName = responseData[0].role;

          if (userName === "guest") {
            setLoadCompleteFetchBrandId(true);
            setmainOwnerName("");
          } else if (userName === "owner_main" || userName === "owner_main_p") {
            setLoadCompleteFetchBrandId(false);
          }

          if (userName === "owner_main") {
            setmainOwnerName(responseData[0].name);
          }
        } else {
          console.error("No data found in the response array");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUserPermi();
  }, []);

  // Check the Brand ID Outlet it existing if not generate new ID's
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `http://127.0.0.1:8000/company/outlets/company_outlets/?comp_id=${setSessionCompId}`;
      try {
        const response = await axios.get(apiUrl);
        const responseData = response.data;

        if (Array.isArray(responseData.data)) {
          const fetchedOutletData = responseData.data;
          for (const outlet of fetchedOutletData) {
            if (outlet.outlet_flag === "main") {
              setOutletName(outlet.outlet_name);
              setGenOutletId(outlet.outlet_id);
              const BrandApiUrl = `http://127.0.0.1:8000/company/brands/brands/?outlet_id=${outlet.outlet_id}&comp_id=${setSessionCompId}`;
              const BrandResponse = await axios.get(BrandApiUrl);
              const BrandResponseData = BrandResponse.data;
              if (Array.isArray(BrandResponseData.brands)) {
                const fetchedBrandData = BrandResponseData.brands;
                for (const brand of fetchedBrandData) {
                  if (brand.brand_flag === "main") {
                    setBrandName(brand.name);
                    setGenBrandId(brand.brand_id);
                    setLoadCompleteFetchBrandId(true);
                  }
                }
              } else {
                console.error(
                  "API response does not contain an array:",
                  responseData
                );
              }
            }
          }
        } else {
          console.error(
            "API response does not contain an array:",
            responseData
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // GET company Data
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `http://127.0.0.1:8000/company/outlets/Comp_main/?comp_id=${setSessionCompId}`;

      try {
        const response = await axios.get(apiUrl);
        const responseData = response.data;

        if (
          Array.isArray(responseData.data) &&
          responseData.data.length === 0
        ) {
          setLoading(false);
        }
        if (Array.isArray(responseData.data) && responseData.data.length > 0) {
          const companyNameData = responseData.data[0];
          setCompanyName(companyNameData.comp_name);
          setCompleteAddress(companyNameData.comp_address);
          setCountry(companyNameData.country);
          setState(companyNameData.state);
          setCity(companyNameData.city);
          setCoOrdinate(companyNameData.co_ordinates);
          setGstin(companyNameData.gstin);
          setFssai(companyNameData.fssai);
          setTrade(companyNameData.trade_license);
          setBankAccountName(companyNameData.bank_ac_name);
          setBankName(companyNameData.bank_name);
          setAccountNumber(companyNameData.ac_number);
          setIfsc(companyNameData.ifsc_code);
          setOwnershipType(companyNameData.ownership_type)
          if (setSessionCompId == companyNameData.comp_id) {
            setButtonUpdateSave(true);
            setGg(true);
            setLoading(false);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleOnClickEdit = () => {
    setButtonUpdateSave(false);
    setButtonTurnIntoUpdate(true);
  };
  const handleUpdateCancle = () => {
    setButtonTurnIntoUpdate(false);
    setButtonUpdateSave(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="primary" size="small" onClick={handleClose}>
        <div className="txt-red r-f-14">
          <FontAwesomeIcon icon={faCircleXmark} />
        </div>
      </Button>
    </React.Fragment>
  );
  const [openUpdateUpload, setUpdateUpload] = React.useState(false);

  const handleUpdateUploadOpen = () => {
    setUpdateUpload(true);
  };

  const handleUpdateUploadClose = () => {
    setUpdateUpload(false);
  };
  const [UploadUpdateText, setUploadUpdateText] = useState("");

  const [open, setOpen] = React.useState(false);
  const [copyIds, setCopyIds] = useState("");
  const handlePopupClick = () => {
    setOpen(true);
  };

  const handleCopyCompanyId = () => {
    const input = document.createElement("input");
    input.value = setSessionCompId;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    setCopyIds("Company ID Copied");
    handlePopupClick();
  };
  const handleCopyBarndId = () => {
    const input = document.createElement("input");
    input.value = genBrandId;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    setCopyIds("Brand ID Copied");
    handlePopupClick();
  };
  const handleCopyOutletId = () => {
    const input = document.createElement("input");
    input.value = genOutletId;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    setCopyIds("Outlet ID Copied");

    handlePopupClick();
  };

  const [numOwners, setNumOwners] = useState(0);
  const [ownerData, setOwnerData] = useState([]);

  const handleNumOwnersChange = (e) => {
    const count = parseInt(e.target.value, 10) || 0;
    setNumOwners(count);
    setOwnerData(Array.from({ length: count }, () => ({ name: "", pno: "" })));
  };

  const handleOwnerNameChange = (e, index) => {
    const updatedOwnerData = [...ownerData];
    updatedOwnerData[index].name = e.target.value;
    setOwnerData(updatedOwnerData);
  };

  const handleOwnerContactChange = (e, index) => {
    const updatedOwnerData = [...ownerData];
    updatedOwnerData[index].pno = e.target.value;
    setOwnerData(updatedOwnerData);
  };
  // GET partner owner info on loop
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/user/permissions/user_permissions_role/get/?comp_id=${setSessionCompId}&role=owner_main_p`
        ); //i want condition here on companyId and role=main_owner_p
        const fetchedData = response.data;
        setOwnerData(fetchedData);
        setNumOwners(fetchedData.length || 1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleClikTestSubmit = async () => {
    handleUpdateUploadOpen();
    setUploadUpdateText("Uploading Company Profile");
    // POST company_main
    {
      const apiUrl = "http://127.0.0.1:8000/company/outlets/Comp_main/create/";
      try {
        const formData = {
          comp_id: setSessionCompId,
          comp_name: companyName,
          owner_name: mainOwnerName,
          no_of_owners: numOwners,
          ownership_type: "Private",
          phone_no: mainOwnerContact,
          comp_address: completeAddress,
          country: country,
          state: state,
          city: city,
          co_ordinates: coOrdinate,
          comp_logo: "https://example.com/logo.jpg",
          email: "john.doe@example.com",
          fssai: fssai,
          gstin: gstin,
          trade_license: trade,
          fssai_path: "FSSAI123456",
          gstin_path: "GSTIN123456",
          trade_license_path: "TRADE123456",
          bank_ac_name: bankAccountName,
          bank_name: bankName,
          ac_number: accountNumber,
          ifsc_code: ifsc,
          mail: "john.doe@mail.com",
          password: "securepassword",
        };

        const response = await axios.post(apiUrl, formData);
        console.log("Company Created successfully:", response.data);
        // If you want to update the list after posting data, you can refetch the data here
      } catch (error) {
        console.error("Error posting data:", error.response.data);
      }
    }
    // POST outlet as main
    {
      const apiUrl =
        "http://127.0.0.1:8000/company/outlets/company_outlets/create/";
      try {
        const formData = {
          comp_id: setSessionCompId,
          outlet_id: genOutletId,
          outlet_name: outletName,
          outlet_flag: "main",
          lat: 30.521458,
          lng: -20.53652,
          deleted: 0,
        };

        const response = await axios.post(apiUrl, formData);
        console.log("Data posted successfully:", response.data);
        // If you want to update the list after posting data, you can refetch the data here
      } catch (error) {
        console.error("Error posting data:", error.response.data);
      }
    }
    // POST brands to brands table
    {
      const apiUrl = "http://127.0.0.1:8000/company/brands/brands/create/";

      try {
        const formData = new FormData();
        formData.append("comp_id", setSessionCompId);
        formData.append("outlet_id", genOutletId);
        formData.append("brand_id", genBrandId);
        formData.append("name", outletName);
        formData.append("brand_logo", "url/url/url.jpeg");
        formData.append("brand_flag", "main");
        formData.append("deleted", "1");

        const response = await axios.post(apiUrl, formData);
        console.log("Data posted successfully:", response.data);
        // If you want to update the list after posting data, you can refetch the data here
      } catch (error) {
        console.error("Error posting data:", error.response.data);
      }
    }
    //POST partner owner info to owner table
    {
      try {
        const apiUrl = "http://127.0.0.1:8000/user/owners-post/";

        // Loop through ownerData array and make a POST request for each owner
        for (const owner of ownerData) {
          // Only submit data if both owner_name and owner_contact are present
          if (owner.name && owner.pno) {
            const formData = new FormData();
            formData.append("owner_name", owner.name);
            formData.append("owner_contact", owner.pno);
            formData.append("comp_id", setSessionCompId);

            // Make axios POST request with FormData for each owner
            await axios.post(apiUrl, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
          }
        }

        console.log("Data submitted successfully!");
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
    // POST partner owner data to user_permisson table
    {
      try {
        const apiUrl =
          "http://127.0.0.1:8000/user/permissions/user_permissions/post/";

        for (const owner of ownerData) {
          if (owner.name && owner.pno) {
            setGenPerId(Math.floor(Math.random() * 1000000));
            const formData = new FormData();
            formData.append("name", owner.name);
            formData.append("pno", owner.pno);
            formData.append("comp_id", setSessionCompId);
            formData.append("per_id", Math.floor(Math.random() * 1000000));
            formData.append("invite_accept", 1);
            formData.append("role", "owner_main_p");
            formData.append("archive", 0);
            formData.append("email", 'exe@gmail.com');
            formData.append("password", 123);
            formData.append("activity", 0);



            await axios.post(apiUrl, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
          }
        }

        console.log("Partenr Owners Added successfully!");
      } catch (error) {
        console.error("Error submitting data:", error);
      }
    }
    // POST founding  ownername and owner_contact to owner database
    {
      const apiUrl = "http://127.0.0.1:8000/user/owners-post/";

      try {
        const formData = new FormData();
        formData.append("comp_id", setSessionCompId);
        formData.append("owner_name", mainOwnerName);
        formData.append("owner_contact", mainOwnerContact);

        const response = await axios.post(apiUrl, formData);
        console.log("Data posted successfully:", response.data);
        // If you want to update the list after posting data, you can refetch the data here
      } catch (error) {
        console.error("Error posting data:", error.response.data);
      }
    }
    // PUT founding owner name and change the role of foudning owner from guest to owner_main
    { 
      const apiUrl =
        "http://127.0.0.1:8000/user/permissions/user_permissions/put/";
      const permissionId = setSessionpId;
      const companyId = setSessionCompId;
      const oM = "owner_main";

      try {
        const response = await axios.put(
          `${apiUrl}?per_id=${permissionId}&comp_id=${companyId}&name=${mainOwnerName}&role=${oM}`
        );
        console.log("Update successful", response.data);
      } catch (error) {
        console.error("Error updating permissions", error);
      }
    }
    setButtonUpdateSave(true);
    handleUpdateUploadClose();
  };

  const hanndleClickUpdate = async () => {
    handleUpdateUploadOpen();
    setUploadUpdateText("Updating Company Profile");
    // PUT company_main owner data and phone number
    {
      const apiUrl =
        "http://127.0.0.1:8000/user/permissions/user_permissions/put/";
      const personId = setSessionpId;
      const companyId = setSessionCompId;

      try {
        const response = await axios.put(
          `${apiUrl}?per_id=${personId}
          &comp_id=${companyId}
          &name=${mainOwnerName}
          &pno=${mainOwnerContact}`
        );
        console.log("Update User Permission successful", response.data);
      } catch (error) {
        console.error("Error updating permissions", error);
      }
    }
    // PUT company data
    {
      const apiUrl = "http://127.0.0.1:8000/company/outlets/Comp_main/update/";
      const companyId = setSessionCompId;

      try {
        const response = await axios.put(
          `${apiUrl}?comp_id=${companyId}
          &comp_name=${companyName}
          &owner_name=${mainOwnerName}
          &no_of_owners=${numOwners}
          &ownership_type=${ownershipType}
          &phone_no=${mainOwnerContact}
          &comp_address=${completeAddress}
          &country=${country}
          &state=${state}
          &city=${city}
          &co_ordinates=${coOrdinate}
          &comp_logo="https://example.com/logo.jpg"
          &email="john.doe@example.com"
          &fssai=${fssai}
          &gstin=${gstin}
          &trade_license=${trade}
          &bank_ac_name=${bankAccountName}
          &bank_name=${bankName}
          &ac_number=${accountNumber}
          &ifsc_code=${ifsc}`
        );
        console.log("Update Company successful", response.data);
      } catch (error) {
        console.error("Error updating permissions", error);
      }
    }
    // PUT brnad data to database
    {
      const apiUrl =
      "http://127.0.0.1:8000/company/brands/update/";
    const companyId = setSessionCompId;
  
    try {
      const response = await axios.put(
        `${apiUrl}?brand_id=${genBrandId}&comp_id=${companyId}&outlet_id=${genOutletId}&name=${brandName}`
      );
      console.log("Update brands Successfull", response.data);
    } catch (error) {
      console.error("Error updating permissions", error);
    }
    }
    // PUT outlet data to databse
    {
      const apiUrl =
      "http://127.0.0.1:8000/company/outlets/company_outlets/update/";
    const companyId = setSessionCompId;
  
    try {
      const response = await axios.put(
        `${apiUrl}?outlet_id=${genOutletId}&comp_id=${companyId}&outlet_name=${outletName}`
      );
      console.log("Update Outlet Successfull", response.data);
    } catch (error) {
      console.error("Error updating permissions", error);
    }
    }
    // PUT partner owner data to user_permi
    {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/user/permissions/user_permissions_role/get/?comp_id=${setSessionCompId}&role=owner_main_p`
        );
      
        const fetchedData = response.data;
        const apiUrl = "http://127.0.0.1:8000/user/permissions/user_permissions/put/";
        const companyId = setSessionCompId;
      
        try {
          for (let i = 0; i < fetchedData.length && i < ownerData.length; i++) {
            const partnerOwner = fetchedData[i];
            const owner = ownerData[i];
      
            try {
              const response = await axios.put(
                `${apiUrl}?per_id=${partnerOwner.per_id}&comp_id=${companyId}&name=${owner.name}&pno=${owner.pno}`
              );
              console.log("Update User Permission successful", response.data);
            } catch (error) {
              console.error("Error updating partner permissions", error);
            }
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      
      
    }
    setButtonTurnIntoUpdate(false);
    setButtonUpdateSave(true);
    handleUpdateUploadClose();
  };

  const companyConfiguration =
    companyName === "" || outletName === "" || brandName === "";
  const AddressStatus =
    completeAddress === "" ||
    country === "" ||
    state === "" ||
    city === "" ||
    coOrdinate === "";

  return (
    <div className="CompanyProfile">
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={copyIds}
        action={action}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
      <Dialog open={openUpdateUpload} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <div className="d-flex space-evenly">{UploadUpdateText}</div>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        </DialogContent>
      </Dialog>
      <div className="CP-desktop">
        <div className="CP-layer">
          <div className="d-flex space-evenly">
            <div className="CP-step-completed d-flex align-item-center g-10">
              <div className="txt-purple f-w-600 r-f-12">
                Make your Offline Store Ready
              </div>
              <div className="align-text-center CP-st r-f-8 txt-purple">
                <div>Steps 5/5</div>
                <div>Completed</div>
              </div>
              <Icon
                icon="teenyicons:tick-circle-solid"
                className="txt-green r-f-20"
              />
            </div>
            <div className="CP-step-completed d-flex align-item-center g-10">
              <div className="txt-purple f-w-600 r-f-12">
                Make your Online Store Ready
              </div>
              <div className="align-text-center CP-st r-f-8 txt-purple">
                <div>Steps 1/5</div>
                <div>20% Completed</div>
              </div>
              <Icon
                icon="teenyicons:tick-circle-solid"
                className="txt-green r-f-20"
              />
            </div>
          </div>
          <div className="d-flex space-between align-item-center mt-2">
            <div className="r-f-18">Company Profile {setSessionCompId}</div>
            <div></div>
            <div className="d-flex g-10">
              {loading ? (
                <div className="p-outline-button c-pointer d-flex align-item-center g-10">
                  Loading...
                </div>
              ) : (
                <div>
                  {gg ? (
                    <div>
                      {buttonTurnIntoUpdate ? (
                        <div className="d-flex g-10">
                          <div
                            className="p-outline-button c-pointer d-flex align-item-center g-10"
                            onClick={handleUpdateCancle}
                          >
                            Cancle
                          </div>
                          <div
                            className="p-button bg-purple c-pointer d-flex align-item-center g-10"
                            onClick={hanndleClickUpdate}
                          >
                            Update Profile
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={handleOnClickEdit}
                          className="p-outline-button c-pointer d-flex align-item-center g-10"
                        >
                          Edit Profile
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className="p-button bg-purple c-pointer d-flex align-item-center g-10"
                      onClick={handleClikTestSubmit}
                    >
                      Upload Data
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="CP-comp-config mt-2">
            <div
              onClick={toggleCC}
              className={`CP-comp-config-header ${
                isCCVisible ? "CP-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleCC} className="c-pointer">
                      {isCCVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Company Configuration</div>
                    <div className="r-f-10 txt-dark-grey">
                      Baisc Settings of your company
                    </div>
                  </div>
                </div>
                <div>
                  {companyConfiguration ? (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="r-f-18 txt-grey"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="r-f-18 txt-green"
                    />
                  )}
                </div>
              </div>
            </div>
            {isCCVisible && (
              <div>
                {loadCompleteFetchBrandId ? (
                  <div className="CP-comp-config-content">
                    <div className="d-flex space-between">
                      <div>
                        <div className="d-flex g-30">
                          <div>
                            <div>
                              <div className="r-f-8 txt-grey">
                                Company Name <span className="txt-red">*</span>
                                &nbsp;
                                <span className="CP-textfield-title-role r-f-6">
                                  Used for billing
                                </span>
                                &nbsp;
                                <span>
                                  <Icon icon="bi:info-circle" />
                                </span>
                              </div>
                              <input
                                type="text"
                                name="companyName"
                                id="companyName"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                className="CP-textfield mt-1"
                                disabled={buttonUpdateSave}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="r-f-8 txt-grey">Company ID</div>
                            <div className="CP-textfield-s d-flex space-between mt-1">
                              <input
                                type="text"
                                name=""
                                id=""
                                value={setSessionCompId}
                                style={{
                                  width: "5vw",
                                  border: "none",
                                  outline: "none",
                                }}
                                readOnly
                              />
                              <div
                                className="c-pointer CP-idcopy txt-grey d-flex align-item-center r-f-14"
                                onClick={handleCopyCompanyId}
                              >
                                <Icon icon="ph:copy" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="r-f-8 txt-grey">Company Logo</div>
                            <div className="d-flex g-10">
                              <div className="mt-1">
                                <label className="CP-custom-file-upload-logo">
                                  <input
                                    type="file"
                                    name=""
                                    id="fileInput"
                                    className="CP-file-input"
                                    onChange={handleFileChangeCL}
                                  />
                                  {fileUploadedCL ? (
                                    <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center">
                                      Replace File <AiOutlinePaperClip />
                                    </span>
                                  ) : (
                                    <span className="r-f-12 d-flex align-item-center align-text-center justify-content-center txt-dark-grey">
                                      Browse File <AiOutlinePaperClip />
                                    </span>
                                  )}
                                </label>
                              </div>
                              <div>
                                <div className="logo-eclipse">
                                  <div className="logo-image-eclipse">
                                    <img
                                      src="./Images/DeliveyBoyDocuments/1.jpg"
                                      alt="No File"
                                      className="logo-image-eclipse r-f-8"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex g-30 mt-2">
                          <div>
                            <div>
                              <div className="r-f-8 txt-grey">
                                Brand Name <span className="txt-red">*</span>
                                &nbsp;
                                <span className="CP-textfield-title-role r-f-6">
                                  Customers see this
                                </span>
                                &nbsp;
                                <span>
                                  <Icon icon="bi:info-circle" />
                                </span>
                              </div>
                              <input
                                type="text"
                                name="brandName"
                                id="brandName"
                                value={brandName}
                                onChange={(e) => setBrandName(e.target.value)}
                                className="CP-textfield mt-1"
                                disabled={buttonUpdateSave}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="r-f-8 txt-grey">Brand ID</div>
                            <div className="CP-textfield-s d-flex space-between mt-1">
                              <input
                                type="text"
                                name=""
                                id=""
                                value={genBrandId}
                                style={{
                                  width: "5vw",
                                  border: "none",
                                  outline: "none",
                                }}
                                readOnly
                              />
                              <div
                                className="c-pointer CP-idcopy txt-grey d-flex align-item-center r-f-14"
                                onClick={handleCopyBarndId}
                              >
                                <Icon icon="ph:copy" />
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="r-f-8 txt-grey">Brand Logo</div>
                            <div className="d-flex g-10">
                              <div className="mt-1">
                                <label className="CP-custom-file-upload-logo">
                                  <input
                                    type="file"
                                    name=""
                                    id="fileInput"
                                    className="CP-file-input"
                                    onChange={handleFileChangeBL}
                                  />
                                  {fileUploadedBL ? (
                                    <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center">
                                      Replace File <AiOutlinePaperClip />
                                    </span>
                                  ) : (
                                    <span className="r-f-12 d-flex align-item-center align-text-center justify-content-center txt-dark-grey">
                                      Browse File <AiOutlinePaperClip />
                                    </span>
                                  )}
                                </label>
                              </div>
                              <div>
                                <div className="logo-eclipse">
                                  <div className="logo-image-eclipse">
                                    <img
                                      src="./Images/DeliveyBoyDocuments/12.jpg"
                                      alt="No File"
                                      className="logo-image-eclipse r-f-8"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="d-flex g-30 mt-2">
                          <div>
                            <div>
                              <div className="r-f-8 txt-grey">
                                Outlet Name<span className="txt-red">*</span>
                                &nbsp;
                                <span className="CP-textfield-title-role r-f-6">
                                  For internal use
                                </span>
                                &nbsp;
                                <span>
                                  <Icon icon="bi:info-circle" />
                                </span>
                              </div>
                              <input
                                type="text"
                                name="outletName"
                                id="outletName"
                                value={outletName}
                                onChange={(e) => setOutletName(e.target.value)}
                                className="CP-textfield mt-1"
                                disabled={buttonUpdateSave}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="r-f-8 txt-grey">Outlet ID</div>
                            <div className="CP-textfield-s d-flex space-between mt-1">
                              <input
                                type="text"
                                name=""
                                id=""
                                value={genOutletId}
                                style={{
                                  width: "5vw",
                                  border: "none",
                                  outline: "none",
                                }}
                                readOnly
                              />
                              <div
                                className="c-pointer CP-idcopy txt-grey d-flex align-item-center r-f-14"
                                onClick={handleCopyOutletId}
                              >
                                <Icon icon="ph:copy" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="d-flex g-30">
                          <div className="align-text-center">
                            <div className="r-f-10 f-w-500">Outlet 1</div>
                            <div className="r-f-8">(Outlet Name)</div>
                            <div className="CP-outlet-rect f-w-500">
                              <div className="CP-outlet-circle d-flex justify-content-center align-item-center">
                                <div>
                                  <div>Brand 1</div>
                                  <div>(Brand Name)</div>
                                </div>
                              </div>
                              <div className="CP-outlet-circle mt-1 d-flex justify-content-center align-item-center">
                                <div>
                                  <div>Brand 2</div>
                                  <div>(Brand Name)</div>
                                </div>
                              </div>
                              <div className="CP-outlet-circle mt-1 d-flex justify-content-center align-item-center">
                                <div>
                                  <div>Brand 3</div>
                                  <div>(Brand Name)</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="align-text-center">
                              <div className="r-f-10 f-w-500">Outlet 2</div>
                              <div className="r-f-8">(Outlet Name)</div>
                              <div className="CP-outlet-rect f-w-500">
                                <div className="CP-outlet-circle d-flex justify-content-center align-item-center">
                                  <div>
                                    <div>Brand 1</div>
                                    <div>(Brand Name)</div>
                                  </div>
                                </div>
                                <div className="CP-outlet-circle mt-1 d-flex justify-content-center align-item-center">
                                  <div>
                                    <div>Brand 2</div>
                                    <div>(Brand Name)</div>
                                  </div>
                                </div>
                                <div className="CP-outlet-circle mt-1 d-flex justify-content-center align-item-center">
                                  <div>
                                    <div>Brand 3</div>
                                    <div>(Brand Name)</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="r-f-8 mt-1">
                          <div>
                            <span className="f-w-500">Example:</span> Incase of
                            a restaurant chain having 3{" "}
                          </div>
                          <div>brands under each of its 2 outlets</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="d-flex space-evenly mt-5 mb-5">
                    <div>Loading...</div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="CP-comp-config mt-3">
            <div
              onClick={toggleAddress}
              className={`CP-comp-config-header ${
                isAddressVisible ? "CP-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleAddress} className="c-pointer">
                      {isAddressVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Address</div>
                    <div className="r-f-10 txt-dark-grey">Outlet Address</div>
                  </div>
                </div>
                <div>
                  {AddressStatus ? (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="r-f-18 txt-grey"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="r-f-18 txt-green"
                    />
                  )}
                </div>
              </div>
            </div>
            {isAddressVisible && (
              <div className="CP-comp-config-content">
                <div>
                  <div className="r-f-8 txt-grey">
                    Complete address <span className="txt-red">*</span>
                  </div>
                  <input
                    type="text"
                    name="completeAddress"
                    id="completeAddress"
                    value={completeAddress}
                    onChange={(e) => setCompleteAddress(e.target.value)}
                    disabled={buttonUpdateSave}
                    className="CP-textfield mt-1"
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
                      name="country"
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="CP-textfield mt-1"
                      disabled={buttonUpdateSave}
                    />
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      State <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="CP-textfield mt-1"
                      disabled={buttonUpdateSave}
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
                      name="city"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="CP-textfield mt-1"
                      disabled={buttonUpdateSave}
                    />
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      Co-ordinate <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name="coOrdinate"
                      id="coOrdinate"
                      value={coOrdinate}
                      onChange={(e) => setCoOrdinate(e.target.value)}
                      className="CP-textfield mt-1"
                      disabled={buttonUpdateSave}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="CP-comp-config mt-3">
            <div
              onClick={toggleComplience}
              className={`CP-comp-config-header ${
                isComplienceVisible ? "CP-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleComplience} className="c-pointer">
                      {isComplienceVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Compliance</div>
                    <div className="r-f-10 txt-dark-grey">
                      Manage info related to tax, legal & regulatory agencies
                    </div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-18 txt-green"
                  />
                </div>
              </div>
            </div>
            {isComplienceVisible && (
              <div className="CP-comp-config-content">
                <div className="d-flex g-30">
                  <div>
                    <div className="r-f-8 txt-grey">
                      GSTIN <span className="txt-red">*</span>
                    </div>
                    <div className="CP-textfield d-flex g-10 align-item-center mt-1">
                      <input
                        type="text"
                        name="gstin"
                        id="gstin"
                        value={gstin}
                        onChange={(e) => setGstin(e.target.value)}
                        style={{
                          border: "none",
                          outline: "none",
                          width: "9vw",
                          fontSize: "1vw",
                        }}
                        disabled={buttonUpdateSave}
                      />
                      <label className="CP-custom-file-upload">
                        <input
                          type="file"
                          name=""
                          id="fileInput"
                          className="CP-file-input"
                          onChange={handleFileChangeGSTIN}
                        />
                        {fileUploadedGSTIN ? (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            File Uploaded
                          </span>
                        ) : (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            Browse File
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      FSSAI <span className="txt-red">*</span>
                    </div>
                    <div className="CP-textfield d-flex g-10 align-item-center mt-1">
                      <input
                        type="text"
                        name="fssai"
                        id="fssai"
                        value={fssai}
                        onChange={(e) => setFssai(e.target.value)}
                        disabled={buttonUpdateSave}
                        style={{
                          border: "none",
                          outline: "none",
                          width: "9vw",
                          fontSize: "1vw",
                        }}
                      />
                      <label className="CP-custom-file-upload">
                        <input
                          type="file"
                          name=""
                          id="fileInput"
                          className="CP-file-input"
                          onChange={handleFileChangeFSSAI}
                        />
                        {fileUploadedFSSAI ? (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            File Uploaded
                          </span>
                        ) : (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            Browse File
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
                <div className="d-flex g-30 mt-2">
                  <div>
                    <div className="r-f-8 txt-grey">
                      Trade License <span className="txt-red">*</span>
                    </div>
                    <div className="CP-textfield d-flex g-10 align-item-center mt-1">
                      <input
                        type="text"
                        name="trade"
                        id="trade"
                        value={trade}
                        onChange={(e) => setTrade(e.target.value)}
                        disabled={buttonUpdateSave}
                        style={{
                          border: "none",
                          outline: "none",
                          width: "9vw",
                          fontSize: "1vw",
                        }}
                      />
                      <label className="CP-custom-file-upload">
                        <input
                          type="file"
                          name=""
                          id="fileInput"
                          className="CP-file-input"
                          onChange={handleFileChangeTL}
                        />
                        {fileUploadedTL ? (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            File Uploaded
                          </span>
                        ) : (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            Browse File
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="CP-comp-config mt-3">
            <div
              onClick={toggleBD}
              className={`CP-comp-config-header ${
                isBDVisible ? "CP-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleBD} className="c-pointer">
                      {isBDVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Bank Details</div>
                    <div className="r-f-10 txt-dark-grey">
                      Configure Bank Info
                    </div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-18 txt-green"
                  />
                </div>
              </div>
            </div>
            {isBDVisible && (
              <div className="CP-comp-config-content">
                <div className="d-flex g-30">
                  <div>
                    <div className="r-f-8 txt-grey">
                      Bank Account Name <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name="bankAccountName"
                      id="bankAccountName"
                      value={bankAccountName}
                      onChange={(e) => setBankAccountName(e.target.value)}
                      className="CP-textfield mt-1"
                      disabled={buttonUpdateSave}
                    />
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      Bank Name <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name="bankname"
                      id="bankName"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="CP-textfield mt-1"
                      disabled={buttonUpdateSave}
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
                      name="accountNumber"
                      id="accountNumber"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                      className="CP-textfield mt-1"
                      disabled={buttonUpdateSave}
                    />
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      IFSC Code <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name="ifsc"
                      id="ifsc"
                      value={ifsc}
                      onChange={(e) => setIfsc(e.target.value)}
                      className="CP-textfield mt-1"
                      disabled={buttonUpdateSave}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="CP-comp-config mt-3">
            <div
              onClick={toggleOD}
              className={`CP-comp-config-header ${
                isODVisible ? "CP-grey" : ""
              }`}
            >
              <div className="d-flex space-between align-item-center">
                <div className="d-flex align-item-center g-20">
                  <div>
                    <div onClick={toggleOD} className="c-pointer">
                      {isODVisible ? (
                        <FontAwesomeIcon icon={faChevronUp} />
                      ) : (
                        <FontAwesomeIcon icon={faChevronDown} />
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="r-f-14">Owner Details</div>
                    <div className="r-f-10 txt-dark-grey">
                      Configure Contact Info
                    </div>
                  </div>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faCircleCheck}
                    className="r-f-18 txt-green"
                  />
                </div>
              </div>
            </div>
            {isODVisible && (
              <div className="CP-comp-config-content">
                <div className="d-flex g-30">
                  <div>
                    <div className="r-f-8 txt-grey">
                      Your Name <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      className="CP-textfield mt-1"
                      name="mainOwnerName"
                      id="mainOwnerName"
                      value={mainOwnerName}
                      onChange={(e) => setmainOwnerName(e.target.value)}
                    />
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      Your Phone Number<span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name="mainOwnerContact"
                      id="mainOwnerContact"
                      value={mainOwnerContact}
                      onChange={(e) => setMainOwnerContact(e.target.value)}
                      className="CP-textfield mt-1"
                      disabled={buttonUpdateSave}
                    />
                  </div>
                  <div>
                    <div className="r-f-8 txt-grey">
                      Ownership Type/Term <span className="txt-red">*</span>
                    </div>
                    <select name="ownershipType" id="ownershipType" onChange={(e) => setOwnershipType(e.target.value)} className="CP-textfield mt-1">
                      <option value="Private">Private</option>
                      <option value="Public">Public</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex g-30 mt-2">
                  <div>
                    <div className="r-f-8 txt-grey">
                      Number of Owners <span className="txt-red">*</span>
                    </div>
                    <input
                      type="text"
                      name="numOwners"
                      id="numOwners"
                      className="CP-textfield mt-1"
                      onChange={handleNumOwnersChange}
                      value={numOwners}
                    />
                  </div>
                </div>
                {ownerData.map((owner, index) => (
                  <div key={index} className="d-flex g-30 mt-2">
                    <div>
                      <div className="r-f-8 txt-grey">
                        Owner's name ({index + 1})
                        <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        value={owner.name}
                        onChange={(e) => handleOwnerNameChange(e, index)}
                        className="CP-textfield CP-textfield-p-2 mt-1"
                      />
                    </div>
                    <div>
                      <div className="r-f-8 txt-grey">
                        Owner's Contact Number ({index + 1})
                        <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        value={owner.pno}
                        onChange={(e) => handleOwnerContactChange(e, index)}
                        className="CP-textfield CP-textfield-p-2 mt-1"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="d-flex g-10 space-evenly mt-3">
              {loading ? (
                <div className="p-outline-button c-pointer d-flex align-item-center g-10">
                  Loading...
                </div>
              ) : (
                <div>
                  {gg ? (
                    <div>
                      {buttonTurnIntoUpdate ? (
                        <div className="d-flex g-10">
                          <div
                            className="p-outline-button c-pointer d-flex align-item-center g-10"
                            onClick={handleUpdateCancle}
                          >
                            Cancle
                          </div>
                          <div
                            className="p-button bg-purple c-pointer d-flex align-item-center g-10"
                            onClick={hanndleClickUpdate}
                          >
                            Update Profile
                          </div>
                        </div>
                      ) : (
                        <div>

                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className="p-button bg-purple c-pointer d-flex align-item-center g-10"
                      onClick={handleClikTestSubmit}
                    >
                      Upload Data
                    </div>
                  )}
                </div>
              )}
            </div>
        </div>
        
      </div>
      <div className="CP-mobile">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Company Profile</div>
          <div
            className="p-outline-button d-flex justify-content-center align-item-center align-text-center"
            style={{ width: "70px", padding: "10px" }}
          >
            <div>Edit Profile</div>
          </div>
        </div>

        <div className="ADD-p-position" style={{ marginTop: "32vh" }}>
          <div className="ADD-p-container">
            <div className="CP-comp-config-p">
              <div
                onClick={toggleCC}
                className={`CP-comp-config-header-p ${
                  isCCVisible ? "CP-grey" : ""
                }`}
              >
                <div className="d-flex space-between align-item-center">
                  <div className="d-flex align-item-center g-20">
                    <div>
                      <div onClick={toggleCC} className="c-pointer">
                        {isCCVisible ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="r-f-14">Company Configuration</div>
                      <div className="r-f-10 txt-dark-grey">
                        Baisc Settings of your company
                      </div>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="r-f-20 txt-green"
                    />
                  </div>
                </div>
              </div>
              {isCCVisible && (
                <div className="CP-comp-config-content-p">
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      Company name &nbsp;<span className="txt-red">*</span>
                      &nbsp;
                      <span className="field-role-p r-f-6">
                        Used For Billing
                      </span>
                      &nbsp;
                      <Icon icon="bi:info-circle" className="txt-dark-grey" />
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="d-flex g-30">
                    <div className="mt-2">
                      <div className="r-f-10 txt-dark-grey">Company ID</div>
                      <div className="CP-textfield-s-p">
                        <div className="d-flex space-between align-item-center">
                          <div>
                            <input
                              type="text"
                              name=""
                              id=""
                              style={{
                                padding: "2vw",
                                width: "25vw",
                                border: "none",
                                borderRight: "1.5px solid #cbcbce",
                                outline: "none",
                                borderRadius: "2vw 0vw 0vw 2vw",
                              }}
                            />
                          </div>
                          <div className="d-flex align-text-center">
                            <div className="d-flex align-text-center">
                              <Icon
                                icon="ph:copy"
                                style={{ marginLeft: "2vw" }}
                                className="txt-grey"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <div className="r-f-10 txt-dark-grey">Company Logo</div>
                      <div className="d-flex g-10">
                        <div className="mt-1">
                          <label className="CP-custom-file-upload-logo">
                            <input
                              type="file"
                              name=""
                              id="fileInput"
                              className="CP-file-input"
                              onChange={handleFileChangeCL}
                            />
                            {fileUploadedCL ? (
                              <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center">
                                Replace File <AiOutlinePaperClip />
                              </span>
                            ) : (
                              <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center txt-dark-grey">
                                Browse File <AiOutlinePaperClip />
                              </span>
                            )}
                          </label>
                        </div>
                        <div>
                          <div className="logo-eclipse-p">
                            <div className="logo-image-eclipse-p">
                              <img
                                src="./Images/DeliveyBoyDocuments/1.jpg"
                                alt="No File"
                                className="logo-image-eclipse-p r-f-8"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      Brand name &nbsp;<span className="txt-red">*</span>&nbsp;
                      <span className="field-role-p r-f-6">
                        Customers see this
                      </span>
                      &nbsp;
                      <Icon icon="bi:info-circle" className="txt-dark-grey" />
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="d-flex g-30">
                    <div className="mt-2">
                      <div className="r-f-10 txt-dark-grey">Brand ID</div>
                      <div className="CP-textfield-s-p">
                        <div className="d-flex space-between align-item-center">
                          <div>
                            <input
                              type="text"
                              name=""
                              id=""
                              style={{
                                padding: "2vw",
                                width: "25vw",
                                border: "none",
                                borderRight: "1.5px solid #cbcbce",
                                outline: "none",
                                borderRadius: "2vw 0vw 0vw 2vw",
                              }}
                            />
                          </div>
                          <div className="d-flex align-text-center">
                            <div className="d-flex align-text-center">
                              <Icon
                                icon="ph:copy"
                                style={{ marginLeft: "2vw" }}
                                className="txt-grey"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <div className="r-f-10 txt-dark-grey">Brand Logo</div>
                      <div className="d-flex g-10">
                        <div className="mt-1">
                          <label className="CP-custom-file-upload-logo">
                            <input
                              type="file"
                              name=""
                              id="fileInput"
                              className="CP-file-input"
                              onChange={handleFileChangeBL}
                            />
                            {fileUploadedBL ? (
                              <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center">
                                Replace File <AiOutlinePaperClip />
                              </span>
                            ) : (
                              <span className="r-f-10 d-flex align-item-center align-text-center justify-content-center txt-dark-grey">
                                Browse File <AiOutlinePaperClip />
                              </span>
                            )}
                          </label>
                        </div>
                        <div>
                          <div className="logo-eclipse-p">
                            <div className="logo-image-eclipse-p">
                              <img
                                src="./Images/DeliveyBoyDocuments/10.jpg"
                                alt="No File"
                                className="logo-image-eclipse-p r-f-8"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      Outlet name &nbsp;<span className="txt-red">*</span>&nbsp;
                      <span className="field-role-p r-f-6">
                        For Internal use
                      </span>
                      &nbsp;
                      <Icon icon="bi:info-circle" className="txt-dark-grey" />
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="d-flex g-30">
                    <div className="mt-2">
                      <div className="r-f-10 txt-dark-grey">Outlet ID</div>
                      <div className="CP-textfield-s-p">
                        <div className="d-flex space-between align-item-center">
                          <div>
                            <input
                              type="text"
                              name=""
                              id=""
                              style={{
                                padding: "2vw",
                                width: "25vw",
                                border: "none",
                                borderRight: "1.5px solid #cbcbce",
                                outline: "none",
                                borderRadius: "2vw 0vw 0vw 2vw",
                              }}
                            />
                          </div>
                          <div className="d-flex align-text-center">
                            <div className="d-flex align-text-center">
                              <Icon
                                icon="ph:copy"
                                style={{ marginLeft: "2vw" }}
                                className="txt-grey"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              )}
            </div>
            <div className="CP-comp-config-p mt-3">
              <div
                onClick={toggleAddress}
                className={`CP-comp-config-header-p ${
                  isAddressVisible ? "CP-grey" : ""
                }`}
              >
                <div className="d-flex space-between align-item-center">
                  <div className="d-flex align-item-center g-20">
                    <div>
                      <div onClick={toggleAddress} className="c-pointer">
                        {isAddressVisible ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="r-f-14">Address</div>
                      <div className="r-f-10 txt-dark-grey">Outlet Address</div>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="r-f-20 txt-green"
                    />
                  </div>
                </div>
              </div>
              {isAddressVisible && (
                <div className=" CP-comp-config-content-p">
                  <div className="r-f-12">Address</div>
                  <div className="r-f-8 txt-grey">Outlet Address</div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      Complete Address<span className="txt-red">*</span>
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      Country<span className="txt-red">*</span>
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      State<span className="txt-red">*</span>
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      City<span className="txt-red">*</span>
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      Co-ordinates<span className="txt-red">*</span>
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="CP-comp-config-p mt-3">
              <div
                onClick={toggleComplience}
                className={`CP-comp-config-header-p ${
                  isComplienceVisible ? "CP-grey" : ""
                }`}
              >
                <div className="d-flex space-between align-item-center">
                  <div className="d-flex align-item-center g-20">
                    <div>
                      <div onClick={toggleComplience} className="c-pointer">
                        {isComplienceVisible ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="r-f-14">Compliance</div>
                      <div className="r-f-10 txt-dark-grey">
                        Manage info related to tax, legal & regulatory agencies
                      </div>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="r-f-20 txt-green"
                    />
                  </div>
                </div>
              </div>
              {isComplienceVisible && (
                <div className="CP-comp-config-content">
                  <div className="mt-2">
                    <div className="r-f-8 txt-grey">
                      GSTIN <span className="txt-red">*</span>
                    </div>
                    <div className="CP-textfield-p d-flex g-10 align-item-center mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          border: "none",
                          outline: "none",
                          width: "60vw",
                        }}
                      />
                      <label className="CP-custom-file-upload-p">
                        <input
                          type="file"
                          name=""
                          id="fileInput"
                          className="CP-file-input-p"
                          onChange={handleFileChangeGSTIN}
                        />
                        {fileUploadedGSTIN ? (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            File Uploaded
                          </span>
                        ) : (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            Browse File
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="r-f-8 txt-grey">
                      FSSAI <span className="txt-red">*</span>
                    </div>
                    <div className="CP-textfield-p d-flex g-10 align-item-center mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          border: "none",
                          outline: "none",
                          width: "60vw",
                        }}
                      />
                      <label className="CP-custom-file-upload-p">
                        <input
                          type="file"
                          name=""
                          id="fileInput"
                          className="CP-file-input-p"
                          onChange={handleFileChangeFSSAI}
                        />
                        {fileUploadedFSSAI ? (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            File Uploaded
                          </span>
                        ) : (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            Browse File
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="r-f-8 txt-grey">
                      Trade License <span className="txt-red">*</span>
                    </div>
                    <div className="CP-textfield-p d-flex g-10 align-item-center mt-1">
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{
                          border: "none",
                          outline: "none",
                          width: "60vw",
                        }}
                      />
                      <label className="CP-custom-file-upload-p">
                        <input
                          type="file"
                          name=""
                          id="fileInput"
                          className="CP-file-input-p"
                          onChange={handleFileChangeTL}
                        />
                        {fileUploadedTL ? (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            File Uploaded
                          </span>
                        ) : (
                          <span className="r-f-6 d-flex align-item-center align-text-center justify-content-center">
                            Browse File
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="CP-comp-config-p mt-3">
              <div
                onClick={toggleBD}
                className={`CP-comp-config-header-p ${
                  isBDVisible ? "CP-grey" : ""
                }`}
              >
                <div className="d-flex space-between align-item-center">
                  <div className="d-flex align-item-center g-20">
                    <div>
                      <div onClick={toggleBD} className="c-pointer">
                        {isBDVisible ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="r-f-14">Bank Details</div>
                      <div className="r-f-10 txt-dark-grey">
                        Configure Bank Info
                      </div>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="r-f-20 txt-green"
                    />
                  </div>
                </div>
              </div>
              {isBDVisible && (
                <div className="CP-comp-config-content-p">
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      Bank Account Name<span className="txt-red">*</span>
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      Bank name<span className="txt-red">*</span>
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      Account Number<span className="txt-red">*</span>
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="mt-2">
                    <div className="r-f-10 txt-dark-grey d-flex align-item-center mb-1">
                      IFSC Code<span className="txt-red">*</span>
                    </div>
                    <input
                      className="CP-textfield-p"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="CP-comp-config-p mt-3">
              <div
                onClick={toggleOD}
                className={`CP-comp-config-header-p ${
                  isODVisible ? "CP-grey" : ""
                }`}
              >
                <div className="d-flex space-between align-item-center">
                  <div className="d-flex align-item-center g-20">
                    <div>
                      <div onClick={toggleOD} className="c-pointer">
                        {isODVisible ? (
                          <FontAwesomeIcon icon={faChevronUp} />
                        ) : (
                          <FontAwesomeIcon icon={faChevronDown} />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="r-f-14">Owner Details</div>
                      <div className="r-f-10 txt-dark-grey">
                        Configure Contact Info
                      </div>
                    </div>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="r-f-20 txt-green"
                    />
                  </div>
                </div>
              </div>
              {isODVisible && (
                <div className="CP-comp-config-content-p">
                  <div className="d-flex g-30">
                    <div>
                      <div className="r-f-8 txt-grey">
                        Number of Owners <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        name="numOwners"
                        id="numOwners"
                        className="CP-textfield-p-2 mt-1"
                        onChange={handleNumOwnersChange}
                        value={numOwners}
                      />
                    </div>
                    <div>
                      <div className="r-f-8 txt-grey">
                        Ownership Type/Term <span className="txt-red">*</span>
                      </div>
                      <input
                        type="text"
                        name=""
                        id=""
                        className="CP-textfield-p-2 mt-1"
                      />
                    </div>
                  </div>
                  {/* Data  will come here  */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
