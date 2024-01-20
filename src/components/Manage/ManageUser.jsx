import React, { useState, useEffect } from "react";
import "./ManageUser.css";
import io from 'socket.io-client';
import { GoDotFill } from "react-icons/go";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
  import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faBoxArchive,
  faStarOfLife,
  faXmark,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
const ManageUser = (
  {
    setSessionCompId,
    setSessionphoneNumber,
    setSessionpId,
  }
) => {
  const [activeTab, setActiveTab] = useState("Users"); // Set the default active tab

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  const UserData = [
    {
      id: 1,
      role: "Brand Owner",
      name: "Firoz",
      phoneNumber: "8452145635",
      outletType: "Multiple Outlets",
      email: "abscd345@gmail.com",
      password: "5411254785",
      status: "Not logged In",
    },
    {
      id: 2,
      role: "Brand Owner",
      name: "Firoz",
      phoneNumber: "8452145635",
      outletType: "Multiple Outlets",
      email: "abscd345@gmail.com",
      password: "5411254785",
      status: "Not logged In",
    },
    // Add more data objects as needed
  ];
  const InviteData = [
    {
      id: 1,
      role: "Brand Owner",
      name: "Firoz",
      phoneNumber: "8452145635",
      email: "abscd345@gmail.com",
      sentDate: "22-11-2011",
      status: "Awaiting Reply",
    },

    // Add more data objects as needed
  ];
  function convertToAsterisks(password) {
    const icons = Array(10).fill(<FontAwesomeIcon icon={faStarOfLife} />);
    return icons;
  }

  // Open Invite User modal
  const [inviteUserVisible, setInviteUserVisible] = useState(false);

  const openInviteUser = () => {
    setInviteUserVisible(true);
  };

  const closeInviteUser = () => {
    setInviteUserVisible(false);
  };

  // Open Archive modal
  const [archiveVisible, setArchiveVisible] = useState(false);

  const openArchive = () => {
    setArchiveVisible(true);
  };

  const closeArchive = () => {
    setArchiveVisible(false);
  };

  // Checkbox logic for Online Ordering
  const [parentChecked, setParentChecked] = useState(false);
  const [childCheckboxes, setChildCheckboxes] = useState({
    paymentSettings: false,
    deliverySettings: false,
    orderPauseMessage: false,
    reviews: false,
    carBanner: false,
    couponOffers: false,
    AppNotifications: false,
  });

  const onlineOrdering = ['paymentSettings', 'deliverySettings', 'orderPauseMessage', 'reviews', 'carBanner','couponOffers','AppNotifications'];

  // Function to handle parent checkbox change
  const handleParentCheckboxChange = () => {
    const updatedState = !parentChecked;
    setParentChecked(updatedState);
    setChildCheckboxes((prevCheckboxes) => {
      const updatedCheckboxes = { ...prevCheckboxes };
      for (const key in updatedCheckboxes) {
        updatedCheckboxes[key] = updatedState;
      }
      return updatedCheckboxes;
    });  
   
  };  
const handleOnlineOrdering = () => {
  for (const online of onlineOrdering) {
    handleCheckboxChange(online);
    }
}
  // Function to handle child checkbox change
  const handleChildCheckboxChange = (checkboxName) => {
    setChildCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  // Use useEffect to monitor child checkbox changes
  useEffect(() => {
    const allChildrenChecked = Object.values(childCheckboxes).every(
      (isChecked) => isChecked
    );
    setParentChecked(allChildrenChecked);
  }, [childCheckboxes]);

  // Checkbox logic for Outlets
  const [outletsParentChecked, setOutletsParentChecked] = useState(false);
  const [configureOutletsChecked, setConfigureOutletsChecked] = useState(false);

  // Function to handle parent checkbox change for "Outlets"
  const handleOutletsParentCheckboxChange = () => {
    const updatedState = !outletsParentChecked;
    setOutletsParentChecked(updatedState);
    setConfigureOutletsChecked(updatedState);
  };
  const handelOutlets = () => {
    handleCheckboxChange('configureOutlets');

  }

  // Function to handle child checkbox change for "Configure Outlets"
  const handleConfigureOutletsCheckboxChange = () => {
    setConfigureOutletsChecked(!configureOutletsChecked);
    setOutletsParentChecked(false);
  };

  // Use useEffect to monitor changes in "Configure Outlets" checkbox
  useEffect(() => {
    if (configureOutletsChecked) {
      setOutletsParentChecked(true);
    }
  }, [configureOutletsChecked]);

  // Advance settings logic
  const [showHiMessage, setShowHiMessage] = useState(false);
  const [isDownButton, setIsDownButton] = useState(true);

  const toggleHiMessage = () => {
    setShowHiMessage(!showHiMessage);
    setIsDownButton(!isDownButton);
  };




  const [genPerId, setGenPerId] = useState(Math.floor(Math.random() * 1000000));
  const [outlets, setOutlets] = useState([]);
  const [selectedOutlet, setSelectedOutlet] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedOutlets, setSelectedOutlets] = useState([]);
  const [newUserName, setNewUserName] = useState('');
  const [newUserMail, setNewUserMail] = useState('');
  const [newUserPhone, setNewUserPhone] = useState('');

  // GET outlets from outlet database
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/company/outlets/company_outlets/?comp_id=${setSessionCompId}`
        );
        const outletData = response.data.data; // Access the nested array
  
        // Ensure outletData is an array before setting the state
        if (Array.isArray(outletData)) {
          setOutlets(outletData);
        } else {
          console.error('Invalid outlet data format:', outletData);
        }
      } catch (error) {
        console.error('Error fetching outlet data:', error);
      }
    };
  
    fetchData();
  }, []);

  const handleOutletsCheckBoxChange = (outletId) => {
    setSelectedOutlets((prevSelectedOutlets) => {
      const updatedOutlets = prevSelectedOutlets.includes(outletId)
        ? prevSelectedOutlets.filter((id) => id !== outletId)
        : [...prevSelectedOutlets, outletId];

      return updatedOutlets;
    });
  };
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({});

  const handleCheckboxChange = (permission) => {
    setSelectedCheckboxes((prevSelectedCheckboxes) => ({
      ...prevSelectedCheckboxes,
      [permission]: !prevSelectedCheckboxes[permission],
    }));
  };


  const [openUpdateUpload, setUpdateUpload] = React.useState(false);

  const handleUpdateUploadOpen = () => {
    setUpdateUpload(true);
  };

  const handleUpdateUploadClose = () => {
    setUpdateUpload(false);
  };

const handleSendInvite = async () => {

  setUpdateUpload(true);
  console.log(newUserName) ;
  console.log(newUserPhone);
  console.log(newUserMail);
  console.log(selectedRole);
  console.log('Selected Outlets:', selectedOutlets);
  const selectedPermissions = Object.keys(selectedCheckboxes).filter(
    (permission) => selectedCheckboxes[permission]
  );
  console.log('Selected Permissions:', selectedPermissions);


// POST user name,pno,mail,role to user_permission
{
  const apiUrl = "http://127.0.0.1:8000/user/permissions/user_permissions/post/";

  try {
    const formData = new FormData();
    formData.append("comp_id", setSessionCompId);
    formData.append("name", newUserName);
    formData.append("pno", newUserPhone);
    formData.append("role", selectedRole);
    formData.append("invite_accept", 0);
    formData.append("per_id", genPerId);
    formData.append("email", newUserMail);
    formData.append("activity", 0);
    formData.append("password",123);
    formData.append("archive",0);

    const response = await axios.post(apiUrl, formData);
    console.log("Data posted successfully:", response.data);
    // If you want to update the list after posting data, you can refetch the data here
  } catch (error) {
    console.error("Error posting data:", error.response.data);
  }
}

// POST selected outlet id to assigned outlet
{
  const apiUrl = "http://127.0.0.1:8000/user/permissions/assigned_outlet/create/";

  try {
    for (const outletId of selectedOutlets) {
      const formData = new FormData();
      formData.append("comp_id", setSessionCompId);
      formData.append("per_id", genPerId);
      formData.append("outlet_id", outletId);
  
      const response = await axios.post(apiUrl, formData);
      console.log(`Data posted successfully for outlet ID ${outletId}:`, response.data);
      // If you want to update the list after posting data, you can refetch the data here
    }
  } catch (error) {
    console.error("Error posting data:", error.response.data);
  }
  
}
// POST permissions to permission table
{
  const apiUrl = "http://127.0.0.1:8000/user/permissions/permissions/post/";
  const selectedPermissions = Object.keys(selectedCheckboxes).filter(
    (permission) => selectedCheckboxes[permission]
  );
  try {
    for (const setPermission of selectedPermissions) {
      const formData = new FormData();
      formData.append("comp_id", setSessionCompId);
      formData.append("per_id", genPerId);
      formData.append("permissions", setPermission);
  
      const response = await axios.post(apiUrl, formData);
      console.log(`Data posted successfully for outlet ID ${setPermission}:`, response.data);
      // If you want to update the list after posting data, you can refetch the data here
    }
  } catch (error) {
    console.error("Error posting data:", error.response.data);
  }
}
setSelectedCheckboxes([]);
setSelectedOutlets([]);
setNewUserName('');
setNewUserPhone('');
setNewUserMail('');
setSelectedRole('');
setParentChecked({});
setChildCheckboxes({});
setSelectedCheckboxes({});
setGenPerId(Math.floor(Math.random() * 1000000));
setUpdateUpload(false);
window.location.reload();
}

// GET user data whose invite is accepted
const [users, setUsers] = useState([]);
const [dataLoading, setDataLoading] = useState(true)
const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage] = useState(5);
const fetchData = () => {
  axios.get(`http://127.0.0.1:8000/user/permissions/user_permissions_invite/get/?invite_accept=1&comp_id=${setSessionCompId}&archive=0`)
    .then(response => {
      const sortedData = response.data.sort((a, b) => new Date(a.created_on) - new Date(b.created_on));
      setUsers(sortedData);
      setDataLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
};

useEffect(() => {
  // Fetch data initially
  fetchData();

  // Fetch data every 5 seconds (adjust the interval as needed)
  const intervalId = setInterval(() => {
    fetchData();
  }, 1000);

  // Cleanup the interval when the component is unmounted
  return () => {
    clearInterval(intervalId);
  };
}, []);
// Calculate pagination
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);


 //GET user data whose invite is not accepted
 const [userspending, setUsersPending] = useState([]);
 const [dataLoadingPending, setDataLoadingPending] = useState(true)
 const [currentPagePending, setCurrentPagePending] = useState(1);
 const[noDataFound,setNoDataFound] = useState('');
  const [itemsPerPagePending] = useState(5);
  const fetchDataPending = async () => {
     try {
      const response = await axios.get(
        `http://127.0.0.1:8000/user/permissions/user_permissions_compid/get/?comp_id=${setSessionCompId}`
      );
  
      const filteredData = response.data.filter((item) =>
        [item.invite_accept === 0, item.archive === 0].every(Boolean)
      );

  
        setUsersPending(filteredData);
        setDataLoadingPending(false);
        setNoDataFound('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  
  useEffect(() => {
    // Fetch data initially
    fetchDataPending();

    // Fetch data every 5 seconds (adjust the interval as needed)
    const intervalIdPending = setInterval(() => {
      fetchDataPending();
    }, 1000);

    // Cleanup the interval when the component is unmounted
    return () => {
      clearInterval(intervalIdPending);
    };
  }, []);
 // Calculate pagination
 const indexOfLastItemPending = currentPagePending * itemsPerPagePending;
 const indexOfPendingFirstItem = indexOfLastItemPending - itemsPerPagePending;
 const currentItemsPending = userspending.slice(indexOfPendingFirstItem, indexOfLastItemPending);


   // Function to format the date
   const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

// GET archived Data
const [archiveData, setArchiveData] = useState([]);
const compId = setSessionCompId;
useEffect(() => {
  const fetchArchiveData = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/user/permissions/user_permissions_compid/get/?comp_id=${setSessionCompId}`
      );
  
const filteredData = response.data.filter((item) =>
  [item.invite_accept === 1, item.archive === 1].every(Boolean)
);

  
      setArchiveData(filteredData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchArchiveData(); // Initial fetch

  // Set up interval for refreshing every 5 seconds
  const intervalId = setInterval(() => {
    fetchArchiveData();
  }, 1000);

  // Clean up the interval on component unmount
  return () => clearInterval(intervalId);
}, [setSessionCompId]);

// Handle Archive
const handleArchive = async (userId) => {
  const apiUrl =
  "http://127.0.0.1:8000/user/permissions/user_permissions/put/";
const companyId = setSessionCompId;

try {
  const response = await axios.put(
    `${apiUrl}?per_id=${userId}&comp_id=${companyId}&archive=1`
  );
  console.log("Update successful", response.data);
} catch (error) {
  console.error("Error updating permissions", error);
}
}
const handleUnArchive = async (userId) => {
  const apiUrl =
  "http://127.0.0.1:8000/user/permissions/user_permissions/put/";
const companyId = setSessionCompId;

try {
  const response = await axios.put(
    `${apiUrl}?per_id=${userId}&comp_id=${companyId}&archive=0`
  );
  console.log("Update successful", response.data);
  // fetchArchiveData();
} catch (error) {
  console.error("Error updating permissions", error);
}
}
const handleResendPendingInvites = async(userId) => {
  console.log(userId);

}
const handleCancelPendingInvites = async(userId) => {
  console.log(userId);
  const userPermissionUrl = `http://127.0.0.1:8000/user/permissions/user_permissions/delete/${userId}/${setSessionCompId}/`;
  axios.delete(userPermissionUrl)
    .then(response => {
      console.log('Deleted successfully from User permission:', response.data);
    })
    .catch(error => {
      console.error('Error deleting data:', error);
    });


    const assignedOutletUrl = `http://127.0.0.1:8000/user/permissions/assigned_outlet/delete/${userId}/${setSessionCompId}/`;
  axios.delete(assignedOutletUrl)
    .then(response => {
      console.log('Deleted successfully from Assigned Outlets:', response.data);
    })
    .catch(error => {
      console.error('Error deleting data:', error);
    });
}
  return (
    <div className="ManageUser">
            <Dialog open={openUpdateUpload} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <div className="d-flex space-evenly">Sending Invite to new User</div>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        </DialogContent>
      </Dialog>
      <div className="MU-desktop">
        <div className="MU-layer">
          <div className="d-flex space-between align-item-center">
            <div className="MU-tab d-flex align-item-center g-10 r-f-12">
              <div className="MU-tab-content">
                <div
                  className={`${
                    activeTab === "Users"
                      ? "MU-tab-content-active f-w-700"
                      : "MU-tab-content-inactive"
                  }`}
                  onClick={() => handleTabClick("Users")}
                >
                  Users
                </div>
              </div>
              <div className="MU-tab-content">
                <div
                  className={`${
                    activeTab === "Pending Invites"
                      ? "MU-tab-content-active f-w-700"
                      : "MU-tab-content-inactive"
                  }`}
                  onClick={() => handleTabClick("Pending Invites")}
                >
                  Pending Invites
                </div>
              </div>
              <div className="MU-tab-content">
                <div
                  className={`${
                    activeTab === "Activity Log"
                      ? "MU-tab-content-active f-w-700"
                      : "MU-tab-content-inactive"
                  }`}
                  onClick={() => handleTabClick("Activity Log")}
                >
                  Activity Log
                </div>
              </div>
            </div>
            <div className="d-flex g-20">
              <div
                className="MU-archive-button r-f-10 c-pointer"
                onClick={openArchive}
              >
                Archive List
              </div>
              <div
                className="MU-invite-button r-f-10 c-pointer"
                onClick={openInviteUser}
              >
                Invite User
              </div>
            </div>
          </div>
          <div className="MU-content">
            {activeTab === "Users" && (
              <div>
                {dataLoading ? (
  <div className="MU-loading-center">  <LinearProgress /></div>
) : (
  <div>

<div className="MU-content-scrollable">

    <table
     
      className="MU-content-card r-f-8 align-item-center"
    >
                        <thead className="MU-content-header r-f-8 f-w-800">
<tr>
<td className="align-text-left">SL.No</td>
  <td className="align-text-left">Levels</td>
  <td className="align-text-left">Name</td>
  <td className="align-text-left">Phone Number</td>
  <td className="align-text-center">Associated Outlet</td>
  <td className="align-text-center">Email</td>
  <td className="align-text-center">Password</td>
  <td className="align-text-center">Status</td>
  <td className="align-text-center">Edit</td>
  <td className="align-text-center">Archive</td>
</tr>
  </thead>
      <tbody>
      {currentItems.map(user => (
        <tr  key={user.per_id}>
        <td className="align-text-left">{user.per_id}</td>
      <td className="align-text-left">
      {user.role === 'owner_main_p' || user.role === 'owner_main'
? 'Owner'
: user.role.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
return str.toUpperCase();
})}
      </td>
      <td className="align-text-left">{user.name}</td>
      <td className="align-text-left">{user.pno}</td>
      <td className="align-text-center">Multi</td>
      <td className="align-text-center">{user.email}</td>
      <td className="r-f-5 txt-dark-grey align-text-center">
        {convertToAsterisks()}
      </td>
      <td className="d-flex align-item-center justify-content-center align-text-center">
        
        {user.activity === 1 ? (<button className=" MU-logged-in txt-green d-flex align-item-center justify-content-center align-text-center"><GoDotFill />Active</button>) : (<button  className="MU-not-logged-in txt-red d-flex align-item-center justify-content-center align-text-center"><GoDotFill />Inactive</button>)}
      </td>
      <td className="align-text-center">
        <FontAwesomeIcon
          icon={faPencil}
          className="r-f-12 txt-dark-grey"
        />
      </td>
      <td className="align-text-center">
        <FontAwesomeIcon
          icon={faBoxArchive}
          className="r-f-12 txt-dark-grey c-pointer"
          onClick={() => handleArchive(user.per_id)}
        />
      </td>
        </tr>
           ))}
      </tbody>
     
    </table>
    
</div>
<div className="d-flex space-between">
<button  className={`c-pointer ${currentPage === 1 ? 'MU-next-previous-disabled' : 'MU-next-previous-btn '}`} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button className={`c-pointer ${indexOfLastItem >= users.length ? 'MU-next-previous-disabled' : 'MU-next-previous-btn '}`} onClick={() => setCurrentPage(currentPage + 1)} disabled={indexOfLastItem >= users.length}>
          Next Page
        </button>
</div>
</div>
)}
              </div>
              
            )}
            {activeTab === "Pending Invites" && (
              <div>
              {dataLoadingPending ? (
                <div className="MU-loading-center">  <LinearProgress /></div>
              ) : (
              <div className="MU-content-scrollable">
                <table className="MU-content-card r-f-8 align-item-center">
                  <thead className="MU-content-header r-f-8 f-w-800">
                    <tr>
                    <td className="align-text-left">SL.No</td>
                  <td className="align-text-left">Levels</td>
                  <td className="align-text-left">Name</td>
                  <td className="align-text-left">Phone Number</td>
                  <td className="align-text-left">Email</td>
                  <td className="align-text-left">Sent date</td>
                  <td className="align-text-center">Status</td>
                  <td></td>
                  <td></td>
                    </tr>
                 
                  </thead>
                  <tbody>
                    {noDataFound}
                  {currentItemsPending.map(user => (
                    <tr
                      key={user.per_id}
                      className="MU-content-card r-f-8 align-item-center"
                    >
                      <td className="align-text-left">{user.per_id}</td>
                      <td className="align-text-left">
                      {user.role === 'owner_main_p' || user.role === 'owner_main'
? 'Owner'
: user.role.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
return str.toUpperCase();
})}
                      </td>
                      <td className="align-text-left">{user.name}</td>
                      <td className="align-text-left">{user.pno}</td>
                      <td className="align-text-left">{user.email}</td>
                      <td className="align-text-left">{formatDate(user.created_on)}</td>
                      <td className="">
                      <button  className="MU-not-logged-in txt-red d-flex align-item-center justify-content-center align-text-center">Awaiting Reply</button>
                      </td>
                      <td className="txt-orange c-pointer" onClick={() => handleResendPendingInvites(user.per_id)}>Resend Invite</td>
                      <td className="txt-red c-pointer" onClick={() => handleCancelPendingInvites(user.per_id)}>Cancel</td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
              )}
              <div className="d-flex space-between">
        <button  className={`c-pointer ${currentPagePending === 1 ? 'MU-next-previous-disabled' : 'MU-next-previous-btn '}`} onClick={() => setCurrentPagePending(currentPagePending - 1)} disabled={currentPagePending === 1}>
          Previous Page
        </button>
        <button className={`c-pointer ${indexOfLastItemPending >= userspending.length ? 'MU-next-previous-disabled' : 'MU-next-previous-btn '}`} onClick={() => setCurrentPagePending(currentPagePending + 1)} disabled={indexOfLastItemPending >= userspending.length}>
          Next Page
        </button>
      </div>
              </div>
            )}
            {activeTab === "Activity Log" && (
              <div>
                <div className="MU-content-header r-f-10">
                  <div className="align-text-left">SL.No</div>
                  <div className="align-text-left">Levels</div>
                  <div className="align-text-left">Name</div>
                  <div className="align-text-left">Phone Number</div>
                  <div className="align-text-left">Associated Outlet</div>
                  <div>Email</div>
                  <div>Password</div>
                  <div>Status</div>
                  <div>Edit</div>
                  <div>Archive</div>
                </div>
                <div className="MU-content-scrollable">
                  <div className="MU-content-card r-f-10">
                    <div className="align-text-left">SL.No</div>
                    <div className="align-text-left">Levels</div>
                    <div className="align-text-left">Name</div>
                    <div className="align-text-left">Phone Number</div>
                    <div className="align-text-left">Associated Outlet</div>
                    <div>Email</div>
                    <div>Password</div>
                    <div>Status</div>
                    <div>Edit</div>
                    <div>Archive</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {inviteUserVisible && (
        <div className="main-modal main-modal-open invt">
          <div className="main-modal-content">
            <div className="d-flex space-between">
              <div></div>
              <div className="align-text-center">
                <div className="r-f-20">Invite New User</div>
                <div className="r-f-12">
                  (Invite will be sent to SMS and email of Users)
                </div>
              </div>

              <div onClick={closeInviteUser}>
                <FontAwesomeIcon icon={faXmark} className="r-f-20 c-pointer" />
              </div>
            </div>
            <div className="main-modal-content-inside">
              <div className="">
                <div className="d-flex space-evenly mt-3">
                  <div>
                    <div className="r-f-12">
                      Name <span className="txt-red">*</span>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="newUserName"
                        id="newUserName"
                        value={newUserName}
                        onChange={(e) => setNewUserName(e.target.value)}
                        className="MU-invite-use-tb"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="r-f-12">
                      Phone Number <span className="txt-red">*</span>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="newUserPhone"
                        id="newUserPhone"
                        value={newUserPhone}
                        onChange={(e) => setNewUserPhone(e.target.value)}
                        className="MU-invite-use-tb"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="r-f-12">
                      Email ID <span className="txt-red">*</span>
                    </div>
                    <div>
                      <input
                        type="text"
                        name="newUserMail"
                        id="newUserMail"
                        value={newUserMail}
                        onChange={(e) => setNewUserMail(e.target.value)}
                        className="MU-invite-use-tb"
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex space-evenly mt-5">
                  <div className="">
                    <div className="r-f-12">
                      Role <span className="txt-red">*</span>
                    </div>
                    <div>
                      <select
        name="selectRole"
        id="selectRole"
        onChange={(e) => setSelectedRole(e.target.value)}
        className="MU-invite-use-dd"
        value={selectedRole}
      >
        <option value="" disabled>
          Select any one
        </option>
        <option value="franchiseOwner">Franchise owner</option>
        <option value="manager">Manager</option>
        <option value="packingPersonnel">Packing Personnel</option>
        <option value="kitchenUser">Kitchen User</option>
        <option value="cashierBilling">Cashier/Billing</option>
        <option value="accountant">Accountant</option>
        <option value="socialMediaManager">Social Media Manager</option>
        <option value="customerSupportExecutive">Customer Support Executive</option>
        <option value="admin">Admin (Admin Panel)</option>
        <option value="supportRep">Support Rep (Admin panel)</option>
      </select>

                    </div>
                  </div>
                  <div className="">
                    <div className="r-f-12">
                      Assign Outlets <span className="txt-red">*</span>
                    </div>
                    <div>
                    {/* <select
        id="outletSelect"
        className="MU-invite-use-dd"
        value={selectedOutlet}
        onChange={(e) => setSelectedOutlet(e.target.value)}
      >
        <option value="" disabled>
          Select at least one
        </option>
          {outlets.map((outlet) => (
            <option key={outlet.id} value={outlet.outlet_id}>
              {outlet.outlet_name}
            </option>
          ))}
      </select> */}
      {/* {selectedOutlet} */}
      {outlets.map((outlet) => (
        <label key={outlet.outlet_id}>
          <input
            type="checkbox"
            value={outlet.outlet_id}
            onChange={() => handleOutletsCheckBoxChange(outlet.outlet_id)}
            checked={selectedOutlets.includes(outlet.outlet_id)}
          />
          {outlet.outlet_name}
        </label>
      ))}
      <div>
        Selected Outlets:
        {selectedOutlets.map((selectedOutlet) => (
          <div key={selectedOutlet}>{selectedOutlet}</div>
        ))}
      </div>
                    </div>
                  </div>
                  <div className="d-flex" style={{ width: "12vw" }}></div>
                </div>
              </div>

              <div className="d-flex txt-grey space-evenly MU-dotted-lines mt-10"></div>
              <div className="mt-3 MU-permissions">
                <div className="r-f-14 txt-purple">See Permissions</div>
                <div className="d-flex space-between mt-1">
                  <div>
                    <div className="r-f-12 f-w-700">Home</div>
                    <div style={{ lineHeight: "2vw" }}>
                        <div className="d-flex space-between align-item-center">
        <div className="MU-permisson-ch-txt-width r-f-12">Restaurant Link</div>
        <input
          type="checkbox"
          name="restaurantLink"
          id="restaurantLinkCheckbox"
          onChange={() => handleCheckboxChange('restaurantLink')}
        />
      </div>
      <div className="d-flex space-between align-item-center">
        <div className="MU-permisson-ch-txt-width r-f-12">Start adding Items</div>
        <input
          type="checkbox"
          name="startAddingItems"
          id="startAddingItemsCheckbox"
          onChange={() => handleCheckboxChange('startAddingItems')}
        />
      </div>
      <div className="d-flex space-between align-item-center">
        <div className="MU-permisson-ch-txt-width r-f-12">Add on order</div>
        <input
          type="checkbox"
          name="addOnOrder"
          id="addOnOrderCheckbox"
          onChange={() => handleCheckboxChange('addOnOrder')}
        />
      </div>
      <div className="d-flex space-between align-item-center">
        <div className="MU-permisson-ch-txt-width r-f-12">Add Users</div>
        <input
          type="checkbox"
          name="addUsers"
          id="addUsersCheckbox"
          onChange={() => handleCheckboxChange('addUsers')}
        />
      </div>
      <div className="d-flex space-between align-item-center">
        <div className="MU-permisson-ch-txt-width r-f-12">View all orders</div>
        <input
          type="checkbox"
          name="viewAllOrders"
          id="viewAllOrdersCheckbox"
          onChange={() => handleCheckboxChange('viewAllOrders')}
        />
      </div>
      <div className="d-flex space-between align-item-center">
        <div className="MU-permisson-ch-txt-width r-f-12">View all Items</div>
        <input
          type="checkbox"
          name="viewAllItems"
          id="viewAllItemsCheckbox"
          onChange={() => handleCheckboxChange('viewAllItems')}
        />
      </div>
                    </div>
                  </div>
                  <div>
                    <div className="r-f-12 f-w-700">Menu</div>
                    <div style={{ lineHeight: "2vw" }}>
                      <div className="d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Edit Categories
                        </div>
                        <input type="checkbox" name="EditCategories" id="EditCategories" onChange={() => handleCheckboxChange('EditCategories')} />
                      </div>
                      <div className="d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Edit Items
                        </div>
                        <input type="checkbox" name="EditItems" id="EditItems" onChange={() => handleCheckboxChange('EditItems')}/>
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Edit Add on Groups
                        </div>
                        <input type="checkbox" name="EditAddOnGroups" id="EditAddOnGroups"  onChange={() => handleCheckboxChange('EditAddOnGroups')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Edit Add on
                        </div>
                        <input type="checkbox" name="EditAddOn" id="EditAddOn" onChange={() => handleCheckboxChange('EditAddOn')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Edit Tags
                        </div>
                        <input type="checkbox" name="EditTags" id="EditTags" onChange={() => handleCheckboxChange('EditTags')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Stock Control
                        </div>
                        <input type="checkbox" name="stockControl" id="stockControl" onChange={() => handleCheckboxChange('stockControl')} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="r-f-12 f-w-700">Orders</div>
                    <div style={{ lineHeight: "2vw" }}>
                      <div className="d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Add new order
                        </div>
                        <input type="checkbox" name="AddNewOrder" id="AddNewOrder" onChange={() => handleCheckboxChange('AddNewOrder')} />
                      </div>
                      <div className="d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Edit Order
                        </div>
                        <input type="checkbox" name="EditOrder" id="EditOrder" onChange={() => handleCheckboxChange('EditOrder')}/>
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          View Order
                        </div>
                        <input type="checkbox" name="viewOrder" id="viewOrder" onChange={() => handleCheckboxChange('viewOrder')}/>
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Apply Discount on Order
                        </div>
                        <input type="checkbox" name="applyDiscountOnOrder" id="applyDiscountOnOrder" onChange={() => handleCheckboxChange('applyDiscountOnOrder')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Store Settings
                        </div>
                        <input type="checkbox" name="storeSettings" id="storeSettings" onChange={() => handleCheckboxChange('storeSettings')}/>
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          View Orders History
                        </div>
                        <input type="checkbox" name="viewOrdersHistory" id="viewOrdersHistory" onChange={() => handleCheckboxChange('viewOrdersHistory')}/>
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Assign Delivery Person
                        </div>
                        <input type="checkbox" name="assignDeliveryPerson" id="assignDeliveryPerson" onChange={() => handleCheckboxChange('assignDeliveryPerson')}/>
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Send Payement Link
                        </div>
                        <input type="checkbox" name="sendPaymentLink" id="sendPaymentLink" onChange={() => handleCheckboxChange('sendPaymentLink')}/>
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Change Order Status
                        </div>
                        <input type="checkbox" name="changeOrderStatus" id="changeOrderStatus" onChange={() => handleCheckboxChange('changeOrderStatus')}/>
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Stock Control
                        </div>
                        <input type="checkbox" name="OrdersStockControl" id="OrdersStockControl" onChange={() => handleCheckboxChange('OrdersStockControl')}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex space-between mt-5">
                  <div>
                    <div className="r-f-12 f-w-700">Delivery Boys</div>
                    <div style={{ lineHeight: "2vw" }}>
                      <div className="d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Add new Delivery Person
                        </div>
                        <input type="checkbox" name="addNewDeliveryPerson" id="addNewDeliveryPerson" onChange={() => handleCheckboxChange('addNewDeliveryPerson')} />
                      </div>
                      <div className="d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Verify New Requests
                        </div>
                        <input type="checkbox" name="verifyNewRequest" id="verifyNewRequest" onChange={() => handleCheckboxChange('verifyNewRequest')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Edit Delivery Person Det.
                        </div>
                        <input type="checkbox" name="editDeliveryPersonDet" id="editDeliveryPersonDet" onChange={() => handleCheckboxChange('editDeliveryPersonDet')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          View Analytics
                        </div>
                        <input type="checkbox" name="viewAnalytics" id="viewAnalytics" onChange={() => handleCheckboxChange('viewAnalytics')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Track
                        </div>
                        <input type="checkbox" name="track" id="track" onChange={() => handleCheckboxChange('track')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Archive Delivery Person
                        </div>
                        <input type="checkbox" name="archiveDeliveryPerson" id="archiveDeliveryPerson" onChange={() => handleCheckboxChange('archiveDeliveryPerson')} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="r-f-12 f-w-700">Manage</div>
                    <div style={{ lineHeight: "2vw" }}>
                      <div className="d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Users
                        </div>
                        <input type="checkbox" name="users" id="users" onChange={() => handleCheckboxChange('users')}  />
                      </div>
                      <div className="d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Order Notifications
                        </div>
                        <input type="checkbox" name="orderNotifications" id="orderNotifications" onChange={() => handleCheckboxChange('orderNotifications')}  />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Timing Settingss
                        </div>
                        <input type="checkbox" name="timingSettings" id="timingSettings" onChange={() => handleCheckboxChange('timingSettings')}  />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Outlets
                        </div>
                        <input
                          type="checkbox"
                          name="outletsParentCheckbox"
                          id="outletsParentCheckbox"
                          checked={outletsParentChecked}
                          onChange={() => {
                            handleOutletsParentCheckboxChange()
                            handelOutlets('configureOutlets');
                          }}
                        />
                      </div>
                      <div className="MU-sub-permissions d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          -Configure Outlets
                        </div>
                        <input
                          type="checkbox"
                          name="configureOutletsCheckbox"
                          id="configureOutletsCheckbox"
                          checked={configureOutletsChecked}
                          onChange={() => {
                            handleConfigureOutletsCheckboxChange()
                            handleCheckboxChange('configureOutlets');
                          }}
                        />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Customer Data
                        </div>
                        <input type="checkbox" name="customerData" id="customerData" onChange={() => handleCheckboxChange('customerData')}/>
                      </div>
                      <div className="d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Online Ordering
                        </div>
                        <input
                          type="checkbox"
                          name="parentCheckbox"
                          id="parentCheckbox"
                          checked={parentChecked}
                          onChange={() => {
                            handleParentCheckboxChange()
                            handleOnlineOrdering();
                          }}
                        />
                      </div>
                      {Object.keys(childCheckboxes).map((checkboxName) => (
                        <div
                          key={checkboxName}
                          className="MU-sub-permissions d-flex space-between align-item-center"
                        >
                          <div className="MU-permisson-ch-txt-width r-f-12">
                            -
                            {checkboxName.charAt(0).toUpperCase() +
                              checkboxName.slice(1)}
                          </div>
                          <input
                            type="checkbox"
                            name={checkboxName}
                            id={checkboxName}
                            checked={childCheckboxes[checkboxName]}
                            onChange={() => {
                              handleChildCheckboxChange(checkboxName)
                              handleCheckboxChange(checkboxName);
                            }}
                          />
                        </div>
                      ))}
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Table Ordering
                        </div>
                        <input type="checkbox" name="" id="" onChange={() => handleCheckboxChange('tableOrdering')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Report and Analytics
                        </div>
                        <input type="checkbox" name="reportAndAnalytics" id="reportAndAnalytics" onChange={() => handleCheckboxChange('reportAndAnalytics')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Integrations
                        </div>
                        <input type="checkbox" name="integration" id="integration" onChange={() => handleCheckboxChange('integration')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          POS Settings
                        </div>
                        <input type="checkbox" name="posSettings" id="posSettings" onChange={() => handleCheckboxChange('posSettings')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Billing / Invoices
                        </div>
                        <input type="checkbox" name="billingInvoices" id="billingInvoices" onChange={() => handleCheckboxChange('billingInvoices')} />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="r-f-12 f-w-700">Account</div>
                    <div style={{ lineHeight: "2vw" }}>
                      <div className="d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Company Profile
                        </div>
                        <input type="checkbox" name="companyProfile" id="companyProfile" onChange={() => handleCheckboxChange('companyProfile')} />
                      </div>
                      <div className="d-flex space-between align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Help Centre
                        </div>
                        <input type="checkbox" name="helpCenter" id="helpCenter" onChange={() => handleCheckboxChange('helpCenter')} />
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Subscription Plan
                        </div>
                        <input type="checkbox" name="subscriptionPlan" id="subscriptionPlan" onChange={() => handleCheckboxChange('subscriptionPlan')}/>
                      </div>
                      <div className="d-flex space-between  align-item-center">
                        <div className="MU-permisson-ch-txt-width r-f-12">
                          Privacy Policy
                        </div>
                        <input type="checkbox" name="privacyPolicy" id="privacyPolicy" onChange={() => handleCheckboxChange('privacyPolicy')} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 MU-advance-settings">
                <div className="r-f-14 txt-purple">
                  Advance Settings &nbsp;
                  {isDownButton ? (
                    <span onClick={toggleHiMessage}>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="c-pointer"
                      />
                    </span>
                  ) : (
                    <span onClick={toggleHiMessage}>
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className="c-pointer"
                      />
                    </span>
                  )}
                </div>
                {showHiMessage && (
                  <div>
                    <div className="d-flex g-20 align-item-center mt-2">
                      <div className="r-f-12">
                        Restrict discount applied to customers in % for this
                        user:
                      </div>
                      <div>
                        <input type="text" name="" id="" className="MU-RDAC" />
                      </div>
                    </div>
                    <div className="d-flex g-20 mt-2">
                      <div className="r-f-12">
                        Restict Order Status Access to only:
                      </div>
                      <div className="MU-ROSA">
                        <div style={{ lineHeight: "2vw" }}>
                          <div className="d-flex space-between align-item-center">
                            <div className="MU-permisson-ch-txt-width r-f-10">
                              Ready
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="d-flex space-between align-item-center">
                            <div className="MU-permisson-ch-txt-width r-f-10">
                              Packed
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="d-flex space-between  align-item-center">
                            <div className="MU-permisson-ch-txt-width r-f-10">
                              Dispatched
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="d-flex space-between  align-item-center">
                            <div className="MU-permisson-ch-txt-width r-f-10">
                              Deivered
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="d-flex space-between  align-item-center">
                            <div className="MU-permisson-ch-txt-width r-f-10">
                              Cancelled
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="d-flex space-between  align-item-center">
                            <div className="MU-permisson-ch-txt-width r-f-10">
                              On-Hold
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="d-flex space-evenly mt-5">
                  <button
                    className="p-button bg-purple"
                    style={{ padding: "1vw 3vw" }}
                    onClick={handleSendInvite}
                  >
                    Send Invite
                  </button>
                </div>
              </div>
            </div>
            <div
              className="main-modal-content-inside-p MU-mv"
              style={{ overflowY: "scroll", height: "63vh" }}
            >
              <div className="">
                <div className="r-f-10 txt-grey">
                  Name <span className="txt-red">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="MU-invite-txtbox-p"
                  />
                </div>
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-grey">
                  Phone Number <span className="txt-red">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="MU-invite-txtbox-p"
                  />
                </div>
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-grey">
                  Email ID <span className="txt-red">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="MU-invite-txtbox-p"
                  />
                </div>
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-grey">
                  Role <span className="txt-red">*</span>
                </div>
                <div>
                  <select name="" id="" className="MU-invite-drpdwn-p">
                    <option value="" selected disabled>
                      Select any one
                    </option>
                  </select>
                </div>
              </div>
              <div className="mt-2">
                <div className="r-f-10 txt-grey">
                  Assign Outlets <span className="txt-red">*</span>
                </div>
                <div>
                  <select name="" id="" className="MU-invite-drpdwn-p">
                    <option value="" selected disabled>
                      Select atleast one
                    </option>
                  </select>
                </div>
              </div>
              <div className="d-flex txt-grey space-evenly MU-dotted-lines mt-3"></div>
              <div className="mt-2 txt-purple r-f-14">See Permissions</div>
              <div>
                <div className="r-f-12 f-w-700">Home</div>
                <div style={{ lineHeight: "3vh" }}>
                  <div className="d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Restaurant Link
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Start addding Items
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Add on order
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Add Users
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      View all orders
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      View all Items
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="r-f-12 f-w-700 mt-3">Menu</div>
                <div style={{ lineHeight: "3vh" }}>
                  <div className="d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Edit Categories
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Edit Items
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Edit Add on Groups
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Edit Add on
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Edit Tags
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Stock Control
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="r-f-12 f-w-700 mt-3">Others</div>
                <div style={{ lineHeight: "3vh" }}>
                  <div className="d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Add new order
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Edit Order
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      View Order
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Apply Discount on Order
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Store Settings
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      View Orders History
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Assign Delivery Person
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Send Payement Link
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Change Order Status
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Stock Control
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="r-f-12 f-w-700 mt-3">Delivery Boys</div>
                <div style={{ lineHeight: "3vh" }}>
                  <div className="d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Add new Delivery Person
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Verify New Requests
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Edit Delivery Person Det.
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      View Analytics
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Track
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Archive Delivery Person
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="r-f-12 f-w-700 mt-3">Manage</div>
                <div style={{ lineHeight: "3vh" }}>
                  <div className="d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width r-f-12">
                      Users
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Order Notifications
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Timing Settingss
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Outlets
                    </div>
                    <input
                      type="checkbox"
                      name="outletsParentCheckbox"
                      id="outletsParentCheckbox"
                      checked={outletsParentChecked}
                      onChange={handleOutletsParentCheckboxChange}
                    />
                  </div>
                  <div className="MU-sub-permissions d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      -Configure Outlets
                    </div>
                    <input
                      type="checkbox"
                      name="configureOutletsCheckbox"
                      id="configureOutletsCheckbox"
                      checked={configureOutletsChecked}
                      onChange={handleConfigureOutletsCheckboxChange}
                    />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Customer Data
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Online Ordering
                    </div>
                    <input
                      type="checkbox"
                      name="parentCheckbox"
                      id="parentCheckbox"
                      checked={parentChecked}
                      onChange={handleParentCheckboxChange}
                    />
                  </div>
                  <div className="MU-sub-permissions d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      -Payment Settings
                    </div>
                    <input
                      type="checkbox"
                      name="paymentSettings"
                      id="paymentSettings"
                      checked={childCheckboxes.paymentSettings}
                      onChange={() =>
                        handleChildCheckboxChange("paymentSettings")
                      }
                    />
                  </div>
                  <div className="MU-sub-permissions d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      -Delivery Settings
                    </div>
                    <input
                      type="checkbox"
                      name="deliverySettings"
                      id="deliverySettings"
                      checked={childCheckboxes.deliverySettings}
                      onChange={() =>
                        handleChildCheckboxChange("deliverySettings")
                      }
                    />
                  </div>
                  <div className="MU-sub-permissions d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      -Order Pause Message
                    </div>
                    <input
                      type="checkbox"
                      name="orderPauseMessage"
                      id="orderPauseMessage"
                      checked={childCheckboxes.orderPauseMessage}
                      onChange={() =>
                        handleChildCheckboxChange("orderPauseMessage")
                      }
                    />
                  </div>
                  <div className="MU-sub-permissions d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      -Reviews
                    </div>
                    <input
                      type="checkbox"
                      name="reviews"
                      id="reviews"
                      checked={childCheckboxes.reviews}
                      onChange={() => handleChildCheckboxChange("reviews")}
                    />
                  </div>
                  <div className="MU-sub-permissions d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      -Carousel/Banner
                    </div>
                    <input
                      type="checkbox"
                      name="carBanner"
                      id="carBanner"
                      checked={childCheckboxes.reviews}
                      onChange={() => handleChildCheckboxChange("carBanner")}
                    />
                  </div>
                  <div className="MU-sub-permissions d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      -Coupons and Offers
                    </div>
                    <input
                      type="checkbox"
                      name="couponOffers"
                      id="couponOffers"
                      checked={childCheckboxes.reviews}
                      onChange={() => handleChildCheckboxChange("couponOffers")}
                    />
                  </div>
                  <div className="MU-sub-permissions d-flex space-between align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      -App Notifications
                    </div>
                    <input
                      type="checkbox"
                      name="AppNotifications"
                      id="AppNotifications"
                      checked={childCheckboxes.reviews}
                      onChange={() =>
                        handleChildCheckboxChange("AppNotifications")
                      }
                    />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Table Ordering
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Report and Analytics
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Integrations
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      POS Settings
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                  <div className="d-flex space-between  align-item-center">
                    <div className="MU-permisson-ch-txt-width-p r-f-12">
                      Billing / Invoices
                    </div>
                    <input type="checkbox" name="" id="" />
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <div className="r-f-14 txt-purple">
                  Advance Settings &nbsp;
                  {isDownButton ? (
                    <span onClick={toggleHiMessage}>
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="c-pointer"
                      />
                    </span>
                  ) : (
                    <span onClick={toggleHiMessage}>
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        className="c-pointer"
                      />
                    </span>
                  )}
                </div>
                {showHiMessage && (
                  <div>
                    <div className="d-flex g-20 align-item-center mt-2">
                      <div className="r-f-12">
                        Restrict discount applied to customers in % for this
                        user:
                      </div>
                      <div>
                        <input type="text" name="" id="" className="MU-RDAC" />
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="r-f-12">
                        Restict Order Status Access to only:
                      </div>
                      <div className="MU-ROSA">
                        <div style={{ lineHeight: "3vh" }}>
                          <div className="d-flex space-between align-item-center">
                            <div className="MU-permisson-ch-txt-width-p r-f-10">
                              Ready
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="d-flex space-between align-item-center">
                            <div className="MU-permisson-ch-txt-width-p r-f-10">
                              Packed
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="d-flex space-between  align-item-center">
                            <div className="MU-permisson-ch-txt-width-p r-f-10">
                              Dispatched
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="d-flex space-between  align-item-center">
                            <div className="MU-permisson-ch-txt-width-p r-f-10">
                              Deivered
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="d-flex space-between  align-item-center">
                            <div className="MU-permisson-ch-txt-width-p r-f-10">
                              Cancelled
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="d-flex space-between  align-item-center">
                            <div className="MU-permisson-ch-txt-width-p r-f-10">
                              On-Hold
                            </div>
                            <input type="checkbox" name="" id="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="d-flex space-evenly mt-5">
                  <button
                    className="p-button bg-purple r-f-10"
                    style={{ padding: "3vw 8vw" }}
                  >
                    Send Invite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Dialog open={archiveVisible} onClose={closeArchive} maxWidth="lg" fullWidth>
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Archives
        </DialogTitle>
        <DialogContent>
        <table
     
     className="MU-content-card-arch r-f-8 align-item-center"
   >
                       <thead className="MU-content-header r-f-8 f-w-800">
<tr>
<td className="align-text-left">SL.No</td>
 <td className="align-text-left">Levels</td>
 <td className="align-text-left">Name</td>
 <td className="align-text-left">Phone Number</td>
 <td className="align-text-center">Associated Outlet</td>
 <td className="align-text-center">Email</td>
 <td className="align-text-center">Password</td>
 <td className="align-text-center">Status</td>
 <td className="align-text-center">Edit</td>
 <td className="align-text-center">Archive</td>
</tr>
 </thead>
     <tbody>
     {archiveData.map((user) => (
       <tr  key={user.per_id}>
       <td className="align-text-left">{user.per_id}</td>
     <td className="align-text-left">
     {user.role === 'owner_main_p' || user.role === 'owner_main'
? 'Owner'
: user.role.replace(/([A-Z])/g, ' $1').replace(/^./, function (str) {
return str.toUpperCase();
})}
     </td>
     <td className="align-text-left">{user.name}</td>
     <td className="align-text-left">{user.pno}</td>
     <td className="align-text-center">Multi</td>
     <td className="align-text-center">{user.email}</td>
     <td className="r-f-5 txt-dark-grey align-text-center">
       {convertToAsterisks()}
     </td>
     <td className="d-flex align-item-center justify-content-center align-text-center">
       
       {user.activity === 1 ? (<button className=" MU-logged-in txt-green d-flex align-item-center justify-content-center align-text-center"><GoDotFill />Active</button>) : (<button  className="MU-not-logged-in txt-red d-flex align-item-center justify-content-center align-text-center"><GoDotFill />Inactive</button>)}
     </td>
     <td className="align-text-center">
       <FontAwesomeIcon
         icon={faPencil}
         className="r-f-12 txt-dark-grey"
       />
     </td>
     <td className="align-text-center">
       <FontAwesomeIcon
         icon={faBoxArchive}
         className="r-f-12 txt-dark-grey c-pointer"
         onClick={() => handleUnArchive(user.per_id)}
       />
     </td>
       </tr>
          ))}
     </tbody>
    
   </table>
        </DialogContent>

      </Dialog>
      <div className="MU-mobile">
        <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Users</div>
          <div className="d-flex g-10">
            <div
              className="p-outline-button d-flex justify-content-center align-item-center align-text-center"
              style={{ width: "70px", padding: "10px" }}
              onClick={openArchive}
            >
              <div>Archive List</div>
            </div>
            <div
              className="p-button bg-purple d-flex justify-content-center align-item-center align-text-center"
              style={{ width: "70px", padding: "10px" }}
              onClick={openInviteUser}
            >
              <div>Invite User</div>
            </div>
          </div>
        </div>
        <div className="ADD-p-position" style={{ marginTop: "32vh" }}>
          <div className="ADD-p-container" style={{ padding: "4vw" }}>
            <div className="d-flex space-evenly r-f-12">
              <div
                className={`${
                  activeTab === "Users"
                    ? "MU-tab-button-active-p f-w-700"
                    : "MU-tab-button-p"
                }`}
                onClick={() => handleTabClick("Users")}
              >
                Users
              </div>
              <div
                className={`${
                  activeTab === "Pending Invites"
                    ? "MU-tab-button-active-p f-w-700"
                    : "MU-tab-button-p"
                }`}
                onClick={() => handleTabClick("Pending Invites")}
              >
                Pending Invites
              </div>
              <div
                className={`${
                  activeTab === "Activity Log"
                    ? "MU-tab-button-active-p f-w-700"
                    : "MU-tab-button-p"
                }`}
                onClick={() => handleTabClick("Activity Log")}
              >
                Activity Log
              </div>
            </div>
            <div className="mt-2">
              {activeTab === "Users" && (
                <div>
                  {UserData.map((item) => (
                    <div key={item.id}>
                      <div className="d-flex">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">SL.No</div>
                          <div className="r-f-12">{item.id}</div>
                        </div>
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Levels</div>
                          <div className="r-f-12">{item.role}</div>
                        </div>
                      </div>
                      <div className="d-flex mt-1">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Name</div>
                          <div className="r-f-12">{item.name}</div>
                        </div>
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Phone Number</div>
                          <div className="r-f-12">{item.phoneNumber}</div>
                        </div>
                      </div>
                      <div className="d-flex mt-1">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">
                            Associated Outlet
                          </div>
                          <div className="r-f-12">{item.outletType}</div>
                        </div>
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Password</div>
                          <div className="r-f-4 txt-dark-grey">
                            {convertToAsterisks()}
                          </div>
                        </div>
                      </div>
                      <div className="d-flex mt-1">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Email</div>
                          <div className="r-f-12">{item.email}</div>
                        </div>
                      </div>
                      <div className="d-flex mt-2 space-between">
                        <div className="MU-not-logged-in-p r-f-8 d-flex align-item-center justify-content-center">
                          <GoDotFill />
                          {item.status}
                        </div>
                        <div className="d-flex g-20">
                          <div>
                            <FontAwesomeIcon
                              icon={faPencil}
                              className="r-f-12 txt-dark-grey"
                            />
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faBoxArchive}
                              className="r-f-12 txt-dark-grey"
                            />
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "Pending Invites" && (
                <div>
                  {InviteData.map((item) => (
                    <div key={item.id}>
                      <div className="d-flex">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">SL.No</div>
                          <div className="r-f-12">{item.id}</div>
                        </div>
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Levels</div>
                          <div className="r-f-12">{item.role}</div>
                        </div>
                      </div>
                      <div className="d-flex mt-1">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Name</div>
                          <div className="r-f-12">{item.name}</div>
                        </div>
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Phone Number</div>
                          <div className="r-f-12">{item.phoneNumber}</div>
                        </div>
                      </div>
                      <div className="d-flex mt-1">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Sent Date</div>
                          <div className="r-f-12">{item.sentDate}</div>
                        </div>
                      </div>
                      <div className="d-flex mt-1">
                        <div className="flex-1">
                          <div className="r-f-8 txt-grey">Email</div>
                          <div className="r-f-12">{item.email}</div>
                        </div>
                      </div>
                      <div className="d-flex mt-2 space-between align-item-center">
                        <div className="MU-not-logged-in-p r-f-8 d-flex align-item-center justify-content-center">
                          <GoDotFill />
                          {item.status}
                        </div>
                        <div className="d-flex g-20">
                          <div className="txt-orange r-f-10">Resend Invite</div>
                          <div className="txt-red r-f-10">Cancel</div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "Activity Log" && <div>Pending</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
