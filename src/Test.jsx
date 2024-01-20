import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
    const [data, setData] = useState([]);
    const [visibleLink, setVisisbleLink] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
try {
  const responseUserPermission = await axios.get('http://127.0.0.1:8000/user/permissions/user_permissions/get/?comp_id=898588&per_id=311214');
  const checkOwner = responseUserPermission.data.some(item => item.role === 'owner_main' || item.role === 'owner_main_p');
  if(checkOwner){
    setVisisbleLink(true);
  }else{
    try {
      const response = await axios.get('http://127.0.0.1:8000/user/permissions/permissions/get/?per_id=510705&comp_id=898588');
      setData(response.data);
      const hasStartAddingItems = response.data.some(item => item.permissions === 'startAddingItems');
      if (hasStartAddingItems) {
        setVisisbleLink(true);
      } else {
        setVisisbleLink(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
} catch (error) {
  
}


        
      };
  
      fetchData();
    }, []); 
  return (
    <div>
       <ul>
        {data.map(item => (
          <li key={item.id}>
            {`Permission ID: ${item.per_id}, Component ID: ${item.comp_id}, Permission: ${item.permissions}`}
          </li>
        ))}
      </ul>
      {visibleLink &&(
        <h1>Its me</h1>
      )}
      
    </div>
    
  )
}

export default Test











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
//   const [numOwners, setNumOwners] = useState(1);
//   const [ownerData, setOwnerData] = useState([]);

//   const handleNumOwnersChange = (e) => {
//     const count = parseInt(e.target.value, 10) || 1;
//     setNumOwners(count);
//     setOwnerData(Array.from({ length: count }, () => ({ name: '', pno: '' })));
//   };

//   const handleOwnerNameChange = (e, index) => {
//     const updatedOwnerData = [...ownerData];
//     updatedOwnerData[index].name = e.target.value;
//     setOwnerData(updatedOwnerData);
//   };

//   const handleOwnerContactChange = (e, index) => {
//     const updatedOwnerData = [...ownerData];
//     updatedOwnerData[index].pno = e.target.value;
//     setOwnerData(updatedOwnerData);
//   };

//   const handleSubmit = async () => {
//     try {
//       const apiUrl = 'http://127.0.0.1:8000/user/permissions/user_permissions/post/';

//       for (const owner of ownerData) {
//         if (owner.name && owner.pno) {
//           const formData = new FormData();
//           formData.append('name', owner.name);
//           formData.append('pno', owner.pno);
//           formData.append('comp_id', 11221);
//           formData.append('per_id', 225522);
//           formData.append('invite_accept', 1);
//           formData.append('role', 'owner_main');

//           await axios.post(apiUrl, formData, {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//             },
//           });
//         }
//       }

//       console.log('Data submitted successfully!');
//     } catch (error) {
//       console.error('Error submitting data:', error);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:8000/user/permissions/user_permissions/`
//         );

//         // Extract data from the response and update the state
//         const fetchedData = response.data;
//         setOwnerData(fetchedData);
//         console.log(fetchedData[1]);
//         setNumOwners(fetchedData.length || 1);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); // Fetch data when the component mounts
//   }, []);

//   return (
//     <div>
//       <div>
//         <label htmlFor="numOwners">Number of Owners:</label>
//         <input
//           type="number"
//           id="numOwners"
//           name="numOwners"
//           value={numOwners}
//           onChange={handleNumOwnersChange}
//         />
//       </div>

//       {ownerData.map((owner, index) => (
//         <div key={index} className="d-flex g-30 mt-2">
//           <div>
//             <div className="r-f-8 txt-grey">
//               Owner's name ({index + 1})<span className="txt-red">*</span>
//             </div>
//             <input
//               type="text"
//               value={owner.name}
//               onChange={(e) => handleOwnerNameChange(e, index)}
//               className="CP-textfield CP-textfield-p-2 mt-1"
//             />
//           </div>
//           <div>
//             <div className="r-f-8 txt-grey">
//               Owner's Contact Number ({index + 1})<span className="txt-red">*</span>
//             </div>
//             <input
//               type="text"
//               value={owner.pno}
//               onChange={(e) => handleOwnerContactChange(e, index)}
//               className="CP-textfield CP-textfield-p-2 mt-1"
//             />
//           </div>
//         </div>
//       ))}

//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default Test;









// import React, { useState } from 'react';

// const Test = () => {
//   const [textBox1, setTextBox1] = useState('');
//   const [textBox2, setTextBox2] = useState('');
//   const [textBox3, setTextBox3] = useState('');

//   const areAllTextboxesEmpty = textBox1 === '' || textBox2 === '' || textBox3 === '';

//   return (
//     <div>
//       <input
//         type="text"
//         value={textBox1}
//         onChange={(e) => setTextBox1(e.target.value)}
//         placeholder="Textbox 1"
//       />
//       <input
//         type="text"
//         value={textBox2}
//         onChange={(e) => setTextBox2(e.target.value)}
//         placeholder="Textbox 2"
//       />
//       <input
//         type="text"
//         value={55}
//         onChange={(e) => setTextBox3(e.target.value)}
//         placeholder="Textbox 3"
//       />

//       {areAllTextboxesEmpty ? (
//         <p>All textboxes are empty</p>
//       ) : (
//         <p>There is text in the textboxes</p>
//       )}
//     </div>
//   );
// };

// export default Test;


// import React, { useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
//   useEffect(() => {
//     const updateRole = async () => {
//       const getURL = `http://127.0.0.1:8000/user/permissions/user_permissions/get/?comp_id=2255&per_id=1`;
//       const putURL = `http://127.0.0.1:8000/user/permissions/user_permissions/put/?per_id=1&comp_id=2255`;

//       try {
//         // Fetch the existing data
//         const existingDataResponse = await axios.get(getURL);
//         const existingData = existingDataResponse.data;
//         console.log('Existing Data:', existingData);

//         // Update the role property to "main_owner"
//         const updatedData = {
//           ...existingData,
//           role: "main_owner",
//         };
//         console.log('Updated Data:', updatedData);

//         // Perform the PUT request to update the data
//         const response = await axios.put(putURL, updatedData);
//         console.log('Response Data:', response.data);
//         console.log('User permission updated successfully');
//       } catch (error) {
//         console.error('Error updating role:', error);
//       }
//     };

//     updateRole(); // Trigger the update when the component mounts
//   }, []);

//   return (
//     <div>
//       <h1>Updating User Role...</h1>
//       {/* You can add additional UI elements or loading indicators if needed */}
//     </div>
//   );
// };

// export default Test;




// import React from "react";
// import axios from "axios";



// const Test = () => {
//   const handleButtonClick = async () => {
//     const apiUrl = "http://127.0.0.1:8000/company/brands/brands/create/";
//     try {
//       const formData = {
//         comp_id: 984523,
//         outlet_id: 562315,
//         brand_id: 213254,
//         name: "Chicken Wings",
//         brand_logp: "url/url/url.jpeg",
//         brand_flag:"main",
//         deleted: 0
//       };
    
//       const response = await axios.post(apiUrl, formData);
//       console.log("Data posted successfully:", response.data);
//       // If you want to update the list after posting data, you can refetch the data here
//     } catch (error) {
//       console.error("Error posting data:", error.response.data);
//     }
//   };

//   return (
//     <div>
//       <h1>Create New Category</h1>
//       <button onClick={handleButtonClick}>Submit</button>
//     </div>
//   );
// };

// export default Test;

// import React, { useState } from "react";
// import axios from "axios";

// const apiUrl = "http://127.0.0.1:8000/user/permissions/user_permissions/post/";

// const Test = () => {
//   const [formData, setFormData] = useState({
//       name: "",
//       per_id: " ",
//       pno: " ",
//       role: " ",
//       comp_id: " ",
//       invite_accept: " ",
    
//     // Add initial values for other fields
//   });
//   // console.log("Form Data:", formData);
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });


//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(apiUrl, formData);
//       console.log("Category created successfully:", response.data);
//       // If you want to update the list after creating a new category, you can refetch the data here
//     } catch (error) {
//       console.error("Error creating category:", error.response.data);
//     }
//   };

//   return (
//     <div>
//       <h1>Create New Category</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           pno
//           <input
//             type="text"
//             name="pno"
//             value={formData.pno}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           role
//           <input
//             type="text"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           com id:
//           <input
//             type="text"
//             name="comp_id"
//             value={formData.comp_id}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Invite accept:
//           <input
//             type="text"
//             name="invite_accept"
//             value={formData.invite_accept}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           per id:
//           <input
//             type="text"
//             name="per_id"
//             value={formData.per_id}
//             onChange={handleChange}
//           />
//         </label>
        

//         {/* Add other input fields here */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Test;

// import React, { useState } from "react";
// import axios from "axios";

// const apiUrl = "http://127.0.0.1:8000/user/permissions/user_permissions/post/";

// const Test = () => {
//   const [postData, setPostData] = useState({
//     name: "Noodles",
//     pno: 6354251546,
//     role: "guesyt",
//     comp_id: 2255, // Set a default or dynamically retrieve a comp_id
//     invite_accept: "1"
//   });
//   console.log("postData before request:", postData);

//   const handleChange = (e) => {
//     setPostData({
//       ...postData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Ensure that comp_id is not null or empty before making the POST request
//       if (!postData.comp_id) {
//         console.error("comp_id cannot be null or empty");
//         return;
//       }
  
//       console.log("postData before request:", postData);
  
//       // Send POST request with the provided data
//       const response = await axios.post(apiUrl, postData);
//       console.log("Data posted successfully:", response.data);
//       // You can handle the response as needed
//     } catch (error) {
//       console.error("Error posting data:", error.response.data);
//       // Handle error, display a message, etc.
//     }
//   };
  

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {/* Your input fields for posting data */}
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={postData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Phone Number:
//           <input
//             type="text"
//             name="pno"
//             value={postData.pno}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Role:
//           <input
//             type="text"
//             name="role"
//             value={postData.role}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         {/* comp_id is set as a default value */}
//         <label>
//           Company ID:
//           <input
//             type="text"
//             name="comp_id"
//             value={postData.comp_id}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Invite Accept:
//           <input
//             type="text"
//             name="invite_accept"
//             value={postData.invite_accept}
//             onChange={handleChange}
//           />
//         </label>
//         <br />
//         <button type="submit">Submit Data</button>
//       </form>
//     </div>
//   );
// };

// export default Test;



// import React, { useState } from 'react';
// import Dialog from "@mui/material/Dialog";
// import DialogContent from "@mui/material/DialogContent";
// import DialogTitle from '@mui/material/DialogTitle';
// import Test from './Test';

// const Test = ({sessionId, setIsLoggedIn}) => {
  
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('sessionId');
//   };
//   const [open, setOpen] = React.useState(false);
//   const [selectedLocations, setSelectedLocations] = useState([]);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleCheckboxChange = (location) => {
//     const updatedLocations = [...selectedLocations];

//     if (updatedLocations.includes(location)) {
//       updatedLocations.splice(updatedLocations.indexOf(location), 1);
//     } else {
//       updatedLocations.push(location);
//     }

//     setSelectedLocations(updatedLocations);
//   };

//   return (
//     <div>
//        {sessionId}
//           <button onClick={handleLogout}>Logout</button>
//       <h1>Test Component</h1>
//       <button onClick={handleClickOpen}>Open</button>
//       <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//           Select Outlets
//         </DialogTitle>
//         <DialogContent>
//           <Test
//             selectedLocations={selectedLocations}
//             onCheckboxChange={handleCheckboxChange}
//             sessionId={sessionId}
//           />
//         </DialogContent>
//       </Dialog>

//       <div>
//         <h2>Selected Locations:</h2>
//         <ul>
//           {selectedLocations.map((location) => (
//             <li key={location}>{location}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Test;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Test = ({ sessionId, setIsLoggedIn }) => {
//   const [companyData, setCompanyData] = useState(null);

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     sessionStorage.removeItem('isLoggedIn');
//     sessionStorage.removeItem('sessionId');
//   };

//   useEffect(() => {
//     const apiUrl = `http://127.0.0.1:8000/company/outlets/comp_main_all/`;

//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiUrl);

//         const filteredCompany = response.data.companies.find(
//           (company) => company.comp_id === parseInt(sessionId)
//         );

//         if (filteredCompany) {
//           setCompanyData(filteredCompany);
//         } else {
//           // Handle the case where comp_id doesn't match sessionId
//           console.error('Company not found for sessionId:', sessionId);
//         }
//       } catch (error) {
//         console.error('Error fetching company data:', error);
//         // Handle error as needed
//       }
//     };

//     fetchData(); // Call the fetchData function when the component mounts

//   }, [sessionId]); // The useEffect hook will re-run when sessionId changes

//   return (
//     <div>
//       {companyData ? (
//         <>
//           <h2>{companyData.comp_name}</h2>
//           <p>Owner: {companyData.name}</p>
//           {/* Add other details as needed */}
//         </>
//       ) : (
//         <p>Loading company data...</p>
//       )}
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Test;






// import React, { useState, useEffect } from "react";
// import axios from "axios";

// // import Test from './Test'
// // import Test from './Test'
// const Test = () => <p>Your Component</p>;
// const Test = () => <p>Location Filter</p>;

// const apiUrl = "http://127.0.0.1:8000/company/outlets/comp_main_all/";

// const fetchCompanyData = async () => {
//   try {
//     const response = await axios.get(apiUrl);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching company data:", error);
//     throw error;
//   }
// };

// const Test = () => {
//   const [companyData, setCompanyData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [companyId, setCompanyId] = useState("");
//   const [password, setPassword] = useState("");
//   const [loginStatus, setLoginStatus] = useState(null);

//   const fetchData = async () => {
//     try {
//       const data = await fetchCompanyData();

//       // Ensure that data.companies is an array before setting state
//       if (data && Array.isArray(data.companies)) {
//         setCompanyData(data.companies);
//       } else {
//         console.error("Invalid data format:", data);
//       }

//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Fetch data initially
//     fetchData();

//     // Fetch data every 5 seconds (adjust the interval as needed)
//     const intervalId = setInterval(() => {
//       fetchData();
//     }, 5000);

//     // Cleanup the interval when the component is unmounted
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array means this effect runs once after the initial render

//   const handleSubmit = () => {
//     // Convert companyId to string for comparison
//     const companyIdString = companyId.toString();

//     const matchingCompany = companyData.find(
//       (company) => company.comp_id.toString() === companyIdString && company.password === password
//     );

//     if (matchingCompany) {
//       setLoginStatus("Successful");
//     } else {
//       setLoginStatus("Wrong credentials");
//     }
//   };

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h1>Company Data:</h1>
//           <ul>
//             {companyData.map((company) => (
//               <li key={company.id}>
//                 <strong>Company ID:</strong> {company.comp_id}<br />
//                 <strong>Password:</strong> {company.password}<br />
//                 <br />
//               </li>
//             ))}
//           </ul>
//           <div>
//             <label>
//               Company ID:
//               <input
//                 type="text"
//                 value={companyId}
//                 onChange={(e) => setCompanyId(e.target.value)}
//               />
//             </label>
//             <br />
//             <label>
//               Password:
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </label>
//             <br />
//             <button onClick={handleSubmit}>Submit</button>
//             {loginStatus === "Successful" ? (
//               <Test />
//             ) : (
//               <Test />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;






// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const apiUrl = "http://127.0.0.1:8000/company/outlets/comp_main_all/";

// const fetchCompanyData = async () => {
//   try {
//     const response = await axios.get(apiUrl);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching company data:", error);
//     throw error;
//   }
// };

// const Test = () => {
//   const [companyData, setCompanyData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const data = await fetchCompanyData();
      
//       // Ensure that data.companies is an array before setting state
//       if (data && Array.isArray(data.companies)) {
//         setCompanyData(data.companies);
//       } else {
//         console.error("Invalid data format:", data);
//       }

//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Fetch data initially
//     fetchData();

//     // Fetch data every 5 seconds (adjust the interval as needed)
//     const intervalId = setInterval(() => {
//       fetchData();
//     }, 5000);

//     // Cleanup the interval when the component is unmounted
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array means this effect runs once after the initial render

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h1>Company Data:</h1>
//           <ul>
//             {companyData.map((company) => (
//               <li key={company.id}>
//                 <strong>Company ID:</strong> {company.comp_id}<br />
//                 <strong>password:</strong> {company.password}<br />
//                 <br />
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;






// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Test = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           `http://127.0.0.1:8000/menu/categories/categories/?count=1&comp_id=2`
//         );

//         // Extract data from the response and update the state
//         const fetchedData = response.data;
//         setCategories(fetchedData.categories);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData(); // Call the fetchData function when the component mounts
//   }, []); // Empty dependency array to ensure it runs only once when the component mounts

//   const handleUpdateDeletedStatus = async (categoryId, deletedStatus) => {
//     try {
//       const apiUrl = `http://127.0.0.1:8000/menu/categories/categories-update-delete/${categoryId}/`;

//       // Update the deleted status using the API
//       await axios.patch(apiUrl, { deleted: deletedStatus });

//       // Update the state to reflect the change
//       setCategories((prevCategories) =>
//         prevCategories.map((category) =>
//           category.id === categoryId ? { ...category, deleted: deletedStatus } : category
//         )
//       );

//       console.log('Deleted status updated successfully!');
//     } catch (error) {
//       console.error('Error updating deleted status:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Category List</h1>
//       <ul>
//         {categories.map((category) => (
//           <li key={category.id}>
//             {category.name} - Deleted: {category.deleted ? 'Yes' : 'No'}{' '}
//             <button onClick={() => handleUpdateDeletedStatus(category.id, !category.deleted)}>
//               Toggle Deleted
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Test;



// import React, { useState } from "react";
// import axios from "axios";

// const apiUrl = "http://127.0.0.1:8000/menu/categories/categories/create/";

// const Test = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     cat_id: "", // Add other fields
//     display_in: "", // Add other fields
//     visible: "", // Add other fields
//     comp_id: "", // Add other fields
//     available: "", // Add other fields
//     mrp_items: "true", 
//     // Add initial values for other fields
//   });
//   // console.log("Form Data:", formData);
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });


//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(apiUrl, formData);
//       console.log("Category created successfully:", response.data);
//       // If you want to update the list after creating a new category, you can refetch the data here
//     } catch (error) {
//       console.error("Error creating category:", error.response.data);
//     }
//   };

//   return (
//     <div>
//       <h1>Create New Category</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Category ID:
//           <input
//             type="text"
//             name="cat_id"
//             value={formData.cat_id}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Display In:
//           <input
//             type="text"
//             name="display_in"
//             value={formData.display_in}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Visible:
//           <input
//             type="text"
//             name="visible"
//             value={formData.visible}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Company ID:
//           <input
//             type="text"
//             name="comp_id"
//             value={formData.comp_id}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Available:
//           <input
//             type="text"
//             name="available"
//             value={formData.available}
//             onChange={handleChange}
//           />
//         </label>

//         {/* Add other input fields here */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Test;


// To add multiple data to database using checkbox

// import React, { useState } from "react";
// import axios from "axios";

// const apiUrl = "http://127.0.0.1:8000/menu/categories/categories/create/";

// const Test = () => {
//   const [formData, setFormData] = useState({
//     fruits: [], // Use an array to store selected fruits
//     cat_id: "",
//     display_in: "",
//     visible: "",
//     comp_id: "",
//     available: "",
//     mrp_items: "true",
//   });

//   const availableFruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

//   const handleChange = (e) => {
//     const { name, value, checked } = e.target;

//     if (name === "fruits") {
//       // Handle checkboxes separately
//       const updatedFruits = checked
//         ? [...formData.fruits, value]
//         : formData.fruits.filter((fruit) => fruit !== value);

//       setFormData({
//         ...formData,
//         fruits: updatedFruits,
//       });
//     } else {
//       // Handle other input fields
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Iterate over selected fruits and send a request for each
//       for (const fruit of formData.fruits) {
//         const response = await axios.post(apiUrl, {
//           ...formData,
//           name: fruit,
//         });
  
//         console.log(`Category created successfully for ${fruit}:`, response.data);
//         // If you want to update the list after creating a new category, you can refetch the data here
//       }
//     } catch (error) {
//       console.error("Error creating category:", error.response.data);
//     }
//   };
  
  

//   return (
//     <div>
//       <h1>Create New Category</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Fruits:
//           {availableFruits.map((fruit) => (
//             <div key={fruit}>
//               <label>
//                 <input
//                   type="checkbox"
//                   name="fruits"
//                   value={fruit}
//                   checked={formData.fruits.includes(fruit)}
//                   onChange={handleChange}
//                 />
//                 {fruit}
//               </label>
//             </div>
//           ))}
//         </label>

//         <label>
//           Category ID:
//           <input
//             type="text"
//             name="cat_id"
//             value={formData.cat_id}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Display In:
//           <input
//             type="text"
//             name="display_in"
//             value={formData.display_in}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Visible:
//           <input
//             type="text"
//             name="visible"
//             value={formData.visible}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Company ID:
//           <input
//             type="text"
//             name="comp_id"
//             value={formData.comp_id}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Available:
//           <input
//             type="text"
//             name="available"
//             value={formData.available}
//             onChange={handleChange}
//           />
//         </label>

//         {/* Add other input fields here */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Test;




// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const apiUrl = "http://127.0.0.1:8000/menu/categories/categories/?count=1&comp_id=2";

// const fetchMenuItems = async () => {
//   try {
//     const response = await axios.get(apiUrl);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching menu items:", error);
//     throw error;
//   }
// };

// const Test = () => {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchData = async () => {
//     try {
//       const data = await fetchMenuItems();
//       setCategories(data.categories);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     // Fetch data initially
//     fetchData();

//     // Fetch data every 5 seconds (adjust the interval as needed)
//     const intervalId = setInterval(() => {
//       fetchData();
//     }, 5000);

//     // Cleanup the interval when the component is unmounted
//     return () => clearInterval(intervalId);
//   }, []); // Empty dependency array means this effect runs once after the initial render

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div>
//           <h1>Categories:</h1>
//           <ul>
//           {categories.slice().reverse().map((category) => (
//               <li key={category.id}>
//                 <strong>ID:</strong> {category.id}<br />
//                 <strong>Name:</strong> {category.name}<br />
//                 <strong>Category ID:</strong> {category.cat_id}<br />
//                 <strong>Display In:</strong> {category.display_in}<br />
//                 <strong>Created On:</strong> {category.created_on}<br />
//                 <strong>Modified On:</strong> {category.modified_on}<br />
//                 <strong>Visible :</strong> {category.visible}<br />
//                 <strong>Comapny ID:</strong> {category.comp_id}<br />
//                 <strong>Available :</strong> {category.available}<br />
//                 <strong>Deleted:</strong> {category.deleted}<br />
//                 <br />
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Test;




// import React, { useState } from "react";
// import './Test.css'

// const Test = () => {
//   const CustomerData = [
    
//     { name: "Mango", quantity: 5 },
//     { name: "Apple", quantity: 3 },
//     { name: "Orange", quantity: 2 },
//     { name: "Banana", quantity: 4 },
//     { name: "Strawberry", quantity: 6 },
//     { name: "Grapes", quantity: 7 },
//     { name: "Watermelon", quantity: 2 },
//     { name: "Pineapple", quantity: 3 },
//     { name: "Cherry", quantity: 8 },
//     { name: "Kiwi", quantity: 5 },
//     { name: "Blueberry", quantity: 4 },
//     { name: "Peach", quantity: 3 },
//     { name: "Pear", quantity: 6 },
//     { name: "Lemon", quantity: 7 },
//     { name: "Lime", quantity: 4 },
//     { name: "Avocado", quantity: 3 },
//     { name: "Pomegranate", quantity: 5 },
//     { name: "Cantaloupe", quantity: 3 },
//     { name: "Papaya", quantity: 4 },
//     { name: "Blackberry", quantity: 6 },
//     { name: "Raspberry", quantity: 7 },
//     { name: "Cranberry", quantity: 8 },
//     { name: "Apricot", quantity: 5 },
//     { name: "Plum", quantity: 3 },
//     { name: "Fig", quantity: 4 },
//     { name: "Nectarine", quantity: 6 },
//     { name: "Coconut", quantity: 2 },
//     { name: "Guava", quantity: 5 },
//     { name: "Mandarin", quantity: 4 },
//     { name: "Lychee", quantity: 6 },
//     { name: "Passion Fruit", quantity: 3 },
//     { name: "Dragon Fruit", quantity: 2 },
//     { name: "Star Fruit", quantity: 4 },
//     { name: "Honeydew", quantity: 3 },
//     { name: "Cucumber", quantity: 5 },
//     { name: "Elderberry", quantity: 8 },
//     { name: "Gooseberry", quantity: 6 },
//     { name: "Guanabana", quantity: 4 },
//     { name: "JackCustomers", quantity: 5 },
//     { name: "Kumquat", quantity: 7 },
//     { name: "Mangosteen", quantity: 2 },
//   ];

//   const itemsPerPage = 10;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [startPage, setStartPage] = useState(1);

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const CurrentCustomerPage = CustomerData.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const goBackward = () => {
//     if (startPage > 1) {
//       setStartPage(startPage - 5);
//       setCurrentPage(startPage - 5);
//     }
//   };

//   const goForward = () => {
//     if (startPage + 5 <= Math.ceil(CustomerData.length / itemsPerPage)) {
//       setStartPage(startPage + 5);
//       setCurrentPage(startPage + 1);
//     }
//   };

//   return (
//     <div>
//       <h2>List of Customers</h2>
//       <ul>
//         {CurrentCustomerPage.map((Customers, index) => (
//           <li key={index}>
//             {Customers.name} - Quantity: {Customers.quantity}
//           </li>
//         ))}
//       </ul>
//       <ul className="pagination">
//         <button onClick={goBackward}>Backward</button>
//         {Array(Math.min(5, Math.ceil(CustomerData.length / itemsPerPage)))
//           .fill()
//           .map((_, i) => (
//             <li key={i}>
//               <button
//                 className={(startPage + i) === currentPage ? "active" : ""}
//                 onClick={() => paginate(startPage + i)}
//               >
//                 {startPage + i}
//               </button>
//             </li>
//           ))}
//         <button onClick={goForward}>Forward</button>
//       </ul>
//     </div>
//   );
// };

// export default Test;








// import React, { useState, useEffect } from "react";
// import "./Test.css";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";

// const data = [
//   { name: "Category 1", value: 30 },
//   { name: "Category 2", value: 45 },
//   { name: "Category 3", value: 25 },
// ];

// const colors = ["#0088FE", "#00C49F", "#FFBB28"];

// const Test = () => {
//   const [containerDimensions, setContainerDimensions] = useState({
//     width: 300, // Adjust the width as needed
//     height: 300, // Adjust the height as needed
//   });

//   const updateContainerDimensions = () => {
//     const width = document.getElementById("chart-container").offsetWidth;
//     setContainerDimensions({ width, height: width });
//   };

//   useEffect(() => {
//     updateContainerDimensions();
//     window.addEventListener("resize", updateContainerDimensions);
//     return () => {
//       window.removeEventListener("resize", updateContainerDimensions);
//     };
//   }, []);

//   return (
//     <div className="chart-container" id="chart-container">
//       <PieChart width={containerDimensions.width} height={containerDimensions.height}>
//         <Pie
//           data={data}
//           dataKey="value"
//           nameKey="name"
//           cx="30%" // Adjust the x-coordinate to position in the top-left corner
//           cy="30%" // Adjust the y-coordinate to position in the top-left corner
//           innerRadius={containerDimensions.width * 0.15} // Responsive inner radius
//           outerRadius={containerDimensions.width * 0.2} // Responsive outer radius
//           fill="#8884d8"
//         >
//           {data.map((entry, index) => (
//             <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//           ))}
//         </Pie>
//         <Tooltip />
//       </PieChart>
//     </div>
//   );
// };

// export default Test;













// import React, { useState } from 'react';
// import './Test.css';

// function Test() {
//   const [items, setItems] = useState([
//     { name: 'Orange', id: 1 },
//     { name: 'Mango', id: 2 },
//     { name: 'Banana', id: 3 },
//     { name: 'Testle', id: 4 },
//   ]);
//   const [sortedItems, setSortedItems] = useState([...items]); // New state for sorted items
//   const [draggedIndex, setDraggedIndex] = useState(null);

//   const handleDragStart = (e, index) => {
//     e.dataTransfer.setData('index', index);
//     setDraggedIndex(index);
//   };

//   const handleDragOver = (e, index) => {
//     e.preventDefault();
//   };

//   const handleDragEnter = (e, index) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, newIndex) => {
//     e.preventDefault();
//     if (draggedIndex === null) return;

//     const updatedItems = [...items];
//     const [draggedItem] = updatedItems.splice(draggedIndex, 1);
//     updatedItems.splice(newIndex, 0, draggedItem);

//     // Update serial numbers for both items and sorted items
//     for (let i = 0; i < updatedItems.length; i++) {
//       updatedItems[i].id = i + 1;
//     }

//     setItems(updatedItems);
//     setSortedItems(updatedItems); // Update the sorted items
//     setDraggedIndex(null);
//   };

//   return (
//     <div className="Test">
//       <h1>Drag and Drop to Sort Items</h1>
//       <div className="item-container">
//         {items.map((item, index) => (
//           <div
//             key={item.id}
//             className="item c-pointer"
//             draggable
//             onDragStart={(e) => handleDragStart(e, index)}
//             onDragOver={(e) => handleDragOver(e, index)}
//             onDragEnter={(e) => handleDragEnter(e, index)}
//             onDrop={(e) => handleDrop(e, index)}
//           >
//             <span className="serial-number">{item.id}</span> {item.name}
//           </div>
//         ))}
//       </div>

//       <div className="sorted-container">
//         <h2>Sorted Order</h2>
//         {sortedItems.map((item, index) => (
//           <div key={item.id} className="sorted-item">
//             <span className="serial-number">{item.id}</span> {item.name}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Test;





// import React, { useState, useEffect, useRef } from "react";
// import { Icon } from "@iconify/react";
// import "./Test.css";

// const Test = () => {
//   const options = [
//     { label: "Mangalore", value: "Mangalore" },
//     { label: "Udupi", value: "Udupi" },
//     { label: "Bangalore", value: "Bangalore" },
//     { label: "Shivmogga", value: "Shivmogga" },
//     { label: "Mumbai", value: "Mumbai" },
//     { label: "Kerala", value: "Kerala" },
//     { label: "Tamilnadu", value: "Tamilnadu" },
//     { label: "Delhi", value: "Delhi" },
//   ];

//   const subOptionsMap = {
//     Mangalore: [
//       { label: "SnackKnight Bite", value: "SnackKnight Bite" },
//       { label: "FlavorFrenzy Bite", value: "FlavorFrenzy Bite" },
//       { label: "SpiceDelight Bite", value: "SpiceDelight Bite" },
//       { label: "CrunchyWave Bite", value: "CrunchyWave Bite" },
//       { label: "TasteSensation Bite", value: "TasteSensation Bite" },
//       { label: "SavorySlice Bite", value: "SavorySlice Bite" },
//       { label: "PepperPunch Bite", value: "PepperPunch Bite" },
//       { label: "CrispyCraze Bite", value: "CrispyCraze Bite" },
//       { label: "YumFusion Bite", value: "YumFusion Bite" },
//       { label: "MunchyMosaic Bite", value: "MunchyMosaic Bite" },
//       ],
//     Udupi: [
//       { label: "SnackKnight Bite", value: "SnackKnight Bite" },
//       { label: "FlavorFrenzy Bite", value: "FlavorFrenzy Bite" },
//       { label: "SpiceDelight Bite", value: "SpiceDelight Bite" },
//       ],
//       Bangalore: [
//       { label: "CrunchyWave Bite", value: "CrunchyWave Bite" },
//       { label: "TasteSensation Bite", value: "TasteSensation Bite" },
//       { label: "SavorySlice Bite", value: "SavorySlice Bite" },
//       ],
//       Shivmogga: [
//       { label: "PepperPunch Bite", value: "PepperPunch Bite" },
//       { label: "CrispyCraze Bite", value: "CrispyCraze Bite" },
//       { label: "YumFusion Bite", value: "YumFusion Bite" },
//       ],
//       Tamilnadu: [
//       { label: "MunchyMosaic Bite", value: "MunchyMosaic Bite" },
//       { label: "ZestZing Bite", value: "ZestZing Bite" },
//       { label: "BakedBliss Bite", value: "BakedBliss Bite" },
//       ],
//       Delhi: [
//       { label: "FieryFlavor Bite", value: "FieryFlavor Bite" },
//       { label: "GourmetGusto Bite", value: "GourmetGusto Bite" },
//       { label: "TangyTwist Bite", value: "TangyTwist Bite" },
//       ],
//       Mumbai: [
//       { label: "CrunchCastle Bite", value: "CrunchCastle Bite" },
//       { label: "DeliciousDive Bite", value: "DeliciousDive Bite" },
//       { label: "BiteFiesta", value: "BiteFiesta" },
//       ],
//       Kerala: [
//       { label: "BistroBite", value: "BistroBite" },
//       { label: "SnackSizzle Bite", value: "SnackSizzle Bite" },
//       ]
//   };

//   const [selectedOptions, setSelectedOptions] = useState([]);
//   const [mainDropdownOpen, setMainDropdownOpen] = useState(false);
//   const [selectedSubOptions, setSelectedSubOptions] = useState({});
//   const [subOptionsVisible, setSubOptionsVisible] = useState({});
//   const [currentOpenSubOption, setCurrentOpenSubOption] = useState(null);
//   const [selectAllChecked, setSelectAllChecked] = useState(false); // New state for "Select All" checkbox
//   const dropdownRef = useRef(null);
//   const subdropdownRef = useRef(null);

//   // Function to handle the "Select All" checkbox change event
//   const handleSelectAllChange = () => {
//     if (selectAllChecked) {
//       setSelectedOptions([]); // Uncheck all options
//       setSelectedSubOptions({}); // Unselect all sub-options
//     } else {
//       setSelectedOptions(options.map((option) => option.value)); // Check all options
//       const allSubOptions = {};
//       for (const option of options) {
//         allSubOptions[option.value] = subOptionsMap[option.value].map(
//           (subOption) => subOption.value
//         );
//       }
//       setSelectedSubOptions(allSubOptions); // Select all sub-options
//     }
//     setSelectAllChecked(!selectAllChecked); // Toggle the "Select All" checkbox
//   };

//   const toggleDropdown = () => {
//     setMainDropdownOpen(!mainDropdownOpen);
//   };

//   const toggleSubOptions = (option) => {
//     if (currentOpenSubOption !== option) {
//       // Close any previously open sub-dropdown
//       setCurrentOpenSubOption(option);
//       setSubOptionsVisible({ [option]: true });
//       setMainDropdownOpen(false); // Close the main dropdown
//     } else {
//       // Toggle the currently open sub-dropdown
//       setSubOptionsVisible({ [option]: !subOptionsVisible[option] });
//     }
//   };

//   // Updated handleSubOptionClick function
//   const handleSubOptionClick = (mainOption, value) => {
//     const updatedSubOptions = selectedSubOptions[mainOption]
//       ? [...selectedSubOptions[mainOption]]
//       : [];

//     if (updatedSubOptions.includes(value)) {
//       updatedSubOptions.splice(updatedSubOptions.indexOf(value), 1);
//     } else {
//       updatedSubOptions.push(value);
//     }

//     setSelectedSubOptions({
//       ...selectedSubOptions,
//       [mainOption]: updatedSubOptions,
//     });

//     // Check if all sub-options for the main location are unchecked
//     if (updatedSubOptions.length === 0) {
//       // Uncheck the main location in the main dropdown
//       handleOptionClick(mainOption);
//     }
//   };

//   // Updated handleOptionClick function
//   const handleOptionClick = (value) => {
//     if (selectedOptions.includes(value)) {
//       setSelectedOptions(selectedOptions.filter((item) => item !== value));
//       const updatedSelectedSubOptions = { ...selectedSubOptions };
//       delete updatedSelectedSubOptions[value];
//       setSelectedSubOptions(updatedSelectedSubOptions);
//     } else {
//       setSelectedOptions([...selectedOptions, value]);
//       // Check all checkboxes in the sub-dropdown for the selected main location
//       setSelectedSubOptions({
//         ...selectedSubOptions,
//         [value]: subOptionsMap[value].map((subOption) => subOption.value),
//       });
//     }
//   };

//   // Filter selected sub-options to exclude those present in the main options
//   const selectedSubOptionsOnly = Object.keys(selectedSubOptions).reduce(
//     (result, mainOption) => {
//       result[mainOption] = selectedSubOptions[mainOption].filter(
//         (subOption) => !selectedOptions.includes(subOption)
//       );
//       return result;
//     },
//     {}
//   );

//   // Function to handle the removal of a sub-option
//   const removeSubOption = (mainOption, subOptionValue) => {
//     const updatedSubOptions = selectedSubOptions[mainOption].filter(
//       (subOption) => subOption !== subOptionValue
//     );

//     setSelectedSubOptions({
//       ...selectedSubOptions,
//       [mainOption]: updatedSubOptions,
//     });

//     // Check if all sub-options for the main location are unchecked
//     if (updatedSubOptions.length === 0) {
//       // Uncheck the main location in the main dropdown
//       handleOptionClick(mainOption);
//     }
//   };


//   // UseEffect to add event listener for clicks outside the dropdown
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setMainDropdownOpen(false);
//       }
//       if (subdropdownRef.current && !subdropdownRef.current.contains(event.target)) {
//         setSubOptionsVisible(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);

//     // Cleanup the event listener when the component unmounts
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownRef], [subdropdownRef]);

//   return (
//     <div className="TEST-dropdown">
      
//       {/* Main Dropdown */} 
//       <button
//         className={`dropdown-header ${mainDropdownOpen ? "open" : ""}`}
//         onClick={toggleDropdown}
//       >
//         <div className="d-flex align-item-center">Outlets &nbsp;&nbsp;<Icon icon="uiw:down" /></div>
        
//       </button>
//       {mainDropdownOpen && (
//         <div className="dropdown-options"  ref={dropdownRef}>
//           {/* "Select All" checkbox */}
//           <div className="option dropdown-color">
//             <label>
//               <input
//                 type="checkbox"
//                 checked={selectAllChecked}
//                 onChange={handleSelectAllChange}
//               />
//               Select All
//             </label>
//           </div>
//           {options.map((option) => (
//             <div key={option.value} className="option dropdown-color">
//               <label>
//                 <input
//                   type="checkbox"
//                   value={option.value}
//                   checked={selectedOptions.includes(option.value)}
//                   onChange={() => handleOptionClick(option.value)}
//                 />
//                 {option.label}
//               </label>
//             </div>
//           ))}
//         </div>
//       )}
//       <br />
//       <br />
//       {/* Sub Drop down */}
//       <div className="d-flex g-20" style={{ flexWrap: "wrap" }}>
//         {selectedOptions.map((selectedOption) => (
//           <div key={selectedOption} className="second-dropdown" >
//             <button
//               className="dropdown-header"
//               onClick={() => toggleSubOptions(selectedOption)}
//             >
//                <div className="d-flex align-item-center">{selectedOption} &nbsp; <Icon icon="uiw:down" /></div>
              
//             </button>
//             {subOptionsVisible[selectedOption] && (
//               <div className="dropdown-sub-options" ref={subdropdownRef} style={{zIndex:'10'}}>
//                 {/* Add checkboxes and options for the second dropdown here */}
//                 {subOptionsMap[selectedOption] &&
//                   subOptionsMap[selectedOption].map((subOption) => (
//                     <div key={subOption.value} className="option dropdown-color">
//                       <label>
//                         <input
//                           type="checkbox"
//                           value={subOption.value}
//                           checked={
//                             selectedSubOptionsOnly[selectedOption] &&
//                             selectedSubOptionsOnly[selectedOption].includes(
//                               subOption.value
//                             )
//                           }
//                           onChange={() =>
//                             handleSubOptionClick(
//                               selectedOption,
//                               subOption.value
//                             )
//                           }
//                         />
//                         {subOption.label}
//                       </label>
//                     </div>
//                   ))}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//       {/* Display selected options */}
//       <div className="selected-options">
//         <h3>Selected Options</h3>
//         <div>
//           {selectedOptions.map((option) => (
//             <div key={option}>
//               {option}

//               <div
//                 className="d-flex g-10 align-item-center"
//                 style={{ flexWrap: "wrap",marginTop:'1vw' }}
//               >
//                 {selectedSubOptionsOnly[option] &&
//                   selectedSubOptionsOnly[option].map((subOption) => (
//                     <div
//                       className="brand-buttons d-flex space-between "
//                       key={subOption}
//                     >
//                       <div>{subOption}</div>
//                       &nbsp;
//                       <Icon
//                         icon="icon-park-solid:close-one"
//                         className="f-20 close-btn c-pointer txt-dark-grey"
//                         onClick={() => removeSubOption(option, subOption)}
//                       />
//                     </div>
//                   ))}
//               </div>

//               <hr />
//               <br />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;

// import React, { useState } from "react";
// import "./Test.css"; // Import your CSS file for styling

// function Test() {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleCard = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <div className={`card ${isExpanded ? "expanded" : ""}`}>
//       <div className="top-content">
//         {/* Content at the top */}
//         <p>This is the top content of the card.</p>
//       </div>
//       <button onClick={toggleCard} className="expand-button">
//         {isExpanded ? (
//           <div>
//             up
//           </div>
//         )  : (
//           <div>
//             down
//           </div>
//         )}
//       </button>
//       {isExpanded && (
//         <div className="middle-content">
//           {/* Content in the middle */}
//           <p>This is the expanded content in the middle of the card.</p>
//         </div>
//       )}
//       <div className="bottom-content">
//         {/* Content at the bottom */}
//         <p>This is the bottom content of the card.</p>
//       </div>
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from "react";

// const Test = () => {
//   // Define chart data for different locations
//   const chartDataMap = {
//     mangalore: [
//       {
//         interval: "00:00 AM - 01:00 AM",
//         values: [100, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
//       },
//       {
//         interval: "01:00 AM - 02:00 AM",
//         values: [45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
//       },
//       {
//         interval: "02:00 AM - 03:00 AM",
//         values: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115],
//       },
//       // Add more time intervals and data points here
//     ],
//     bangalore: [
//       {
//         interval: "00:00 AM - 01:00 AM",
//         values: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
//       },
//       {
//         interval: "01:00 AM - 02:00 AM",
//         values: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
//       },
//       {
//         interval: "02:00 AM - 03:00 AM",
//         values: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
//       },
//       // Add more time intervals and data points here
//     ],
//     udupi: [
//       {
//         interval: "00:00 AM - 01:00 AM",
//         values: [78, 83, 88, 93, 98, 103, 108, 113, 118, 123, 128, 133],
//       },
//       {
//         interval: "01:00 AM - 02:00 AM",
//         values: [57, 62, 67, 72, 77, 82, 87, 92, 97, 102, 107, 112],
//       },
//       {
//         interval: "02:00 AM - 03:00 AM",
//         values: [87, 92, 97, 102, 107, 112, 117, 122, 127, 132, 137, 142],
//       },
//       // Add more time intervals and data points here
//     ],
//   };

//   // Generate an array of time intervals (from 12:00 AM to 11:59 PM in 1-hour intervals)
//   const timeIntervals = Array.from({ length: 24 }, (_, index) => {
//     const startHour = index.toString().padStart(2, "0");
//     const endHour = (index + 1).toString().padStart(2, "0");
//     return `${startHour}:00 AM - ${endHour}:00 AM`;
//   });

//   // Initialize state for the selected location, selected time interval, and start/end times
//   const [selectedLocation, setSelectedLocation] = useState("mangalore");
//   const [selectedInterval, setSelectedInterval] = useState(timeIntervals[0]);
//   const [tooltip, setTooltip] = useState({
//     visible: false,
//     x: 0,
//     y: 0,
//     value: 0,
//     time: "",
//   });
//   const [startTime, setStartTime] = useState("00:00 AM");
//   const [endTime, setEndTime] = useState("01:00 AM");

//   // Event handler for showing tooltip with time
//   const handleMouseOver = (event, value, index) => {
//     const svg = event.target.closest("svg");
//     const svgRect = svg.getBoundingClientRect();
//     const x = event.clientX - svgRect.left + 60; // Calculate the mouse cursor's x position relative to the SVG
//     const y = event.target.getAttribute("y") - -115; // Adjusted to show tooltip above the bar

//     // Calculate the time based on the selected interval and the index of the bar
//     const [startHour, startMinute] = startTime.split(":");
//     const intervalMinutes = index * 5; // Each bar represents 5 minutes
//     const startMinuteWithinHour = parseInt(startMinute) + intervalMinutes;
//     const endMinuteWithinHour = startMinuteWithinHour + 5;
//     const startHourFormatted = startHour.toString().padStart(2, "0");
//     const startMinuteFormatted = startMinuteWithinHour.toString().padStart(2, "0");
//     const endMinuteFormatted = endMinuteWithinHour.toString().padStart(2, "0");

//     // Determine AM or PM
//     const ampm = parseInt(startHour) + Math.floor(startMinuteWithinHour / 60) < 12 ? "AM" : "PM";

//     // Format the time
//     const formattedTime = `${startHourFormatted}:${startMinuteFormatted} - ${startHourFormatted}:${endMinuteFormatted} ${ampm}`;

//     setTooltip({ visible: true, x, y, value, time: formattedTime });
//   };

//   // Event handlers for hiding tooltip
//   const handleMouseOut = () => {
//     setTooltip({ visible: false, x: 0, y: 0, value: 0, time: "" });
//   };

//   // Get chart data based on the selected location and interval
//   const selectedData = chartDataMap[selectedLocation].find(
//     (data) => data.interval === selectedInterval
//   );
//   const chartData = selectedData ? selectedData.values : [];

//   // Calculate the maximum value for scaling
//   const maxValue = Math.max(...chartData);
//   const scaleY = (value) => (value / maxValue) * 200; // Adjust the scaling factor

//   // Reduce the width of the bars
//   const barWidth = 50; // Adjust the width as needed

//   // Event handlers for dropdown changes
//   const handleLocationChange = (event) => {
//     const location = event.target.value;
//     setSelectedLocation(location);
//     setSelectedInterval(timeIntervals[0]); // Reset the selected interval
//   };

//   const handleIntervalChange = (event) => {
//     const interval = event.target.value;
//     setSelectedInterval(interval);

//     // Split the interval to get start and end times
//     const [start, end] = interval.split(" - ");
//     setStartTime(start);
//     setEndTime(end);
//   };

//   return (
//     <div className="bar-chart" style={{ padding: "5vw" }}>
//       <div
//         style={{
//           backgroundColor: "white",
//           padding: "4vw",
//           width: "100%",
//           maxWidth: "600px",
//           borderRadius: "2vw",
//         }}
//       >
//         <div className="d-flex space-between">
//           <div>
//             <div className="f-12 txt-grey">Orders Today</div>
//             <div className="f-20">78</div>
//           </div>
//           <div>
//             <div className="f-12 txt-grey">Orders Yesterday</div>
//             <div className="f-20">78</div>
//           </div>
//           <div>
//             {/* Dropdown to select location */}
//             <select value={selectedLocation} onChange={handleLocationChange}>
//               {Object.keys(chartDataMap).map((location) => (
//                 <option key={location} value={location}>
//                   {location}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//         <svg width="100%" height="250">
//           {/* Draw the horizontal grid lines */}
//           {Array.from({ length: 5 }).map((_, index) => (
//             <line
//               key={index}
//               x1="5%"
//               y1={index * 50 + 20}
//               x2="100%"
//               y2={index * 50 + 20}
//               stroke="gray"
//               strokeWidth="0.5"
//             />
//           ))}
//           {/* Draw the bars */}
//           {chartData.map((value, index) => (
//             <rect
//               key={index}
//               x={`${5 + (index * 100) / chartData.length}%`}
//               y={220 - scaleY(value)}
//               width={`${(barWidth / chartData.length) * 0.8}%`}
//               height={scaleY(value)}
//               fill="#8d4ac2"
//               onMouseOver={(e) => handleMouseOver(e, value, index)}
//               onMouseOut={handleMouseOut}
//             />
//           ))}
//           {/* Draw the time labels on the x-axis */}
//           {timeIntervals.map((label, index) => {
//            const startLabelX = "1%"; // Adjust the percentage as needed
//            const endLabelX = "100%";   // Adjust the percentage as needed

//            return (
//              <g className="d-flex space-between">
//                <text
//                  x={startLabelX}
//                  y="240"
//                  fontSize="12"
//                  textAnchor="start"
//                  fill="grey"
//                >
//                  {startTime}
//                </text>
//                <text
//                  x={endLabelX}
//                  y="240"
//                  fontSize="12"
//                  textAnchor="end"
//                  fill="grey"
//                >
//                  {endTime}
//                </text>
//              </g>
//            );

//           })}
//         </svg>

//         {/* Tooltip */}
//         {tooltip.visible && (
//           <div
//           className="f-12"
//             style={{
//               position: "absolute",
//               left: `${tooltip.x}px`,
//               top: `${tooltip.y}px`,
//               background: "rgba(0, 0, 0, 0.7)",
//               color: "white",
//               padding: "4px",
//               borderRadius: "4px",
//             }}
//           >
//             <div>{tooltip.value} Orders</div>
//             <div>{tooltip.time}</div> {/* Display the time in the tooltip */}
//           </div>
//         )}
//         <br />
//         <div className="d-flex space-between">
//           <div>
//             <div className="f-12 txt-grey">Total Revenue Today</div>
//             <div className="f-20">₹15,578</div>
//           </div>
//           <div>
//             <div className="f-12 txt-grey">Total Revenue Yesterday</div>
//             <div className="f-20">₹17,200</div>
//           </div>
//           <div>
//             {/* Dropdown to select time interval */}
//             <select value={selectedInterval} onChange={handleIntervalChange}>
//               {timeIntervals.map((interval, index) => (
//                 <option key={index} value={interval}>
//                   {interval}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;

// import React from "react";
// import "./Test.css";

// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import IconButton from "@mui/material/IconButton";
// import Tooltip from "@mui/material/Tooltip";

// const Test = () => {
//   // To copy link
//   const handleCopyClick = () => {
//     const urlToCopy = "https://knightbite.kitchenos.com";
//     if (navigator.clipboard && navigator.clipboard.writeText) {
//       // Use the Clipboard API if available
//       navigator.clipboard
//         .writeText(urlToCopy)
//         .then(() => {
//           console.log("URL copied to clipboard:", urlToCopy);
//         })
//         .catch((error) => {
//           console.error("Copy failed:", error);
//         });
//     } else {
//       // Fallback method for browsers that don't support Clipboard API
//       const textArea = document.createElement("textarea");
//       textArea.value = urlToCopy;
//       textArea.style.position = "fixed"; // Avoid scrolling to bottom
//       document.body.appendChild(textArea);
//       textArea.focus();
//       textArea.select();
//       try {
//         document.execCommand("copy");
//         console.log("URL copied to clipboard:", urlToCopy);
//       } catch (error) {
//         console.error("Copy failed:", error);
//       } finally {
//         document.body.removeChild(textArea);
//       }
//     }
//   };
//   return (
//     <div>
//       <div className="Test">
//         <Tooltip title="Copy" placement="right-start">
//           <span>
//             {"https://knightbite.kitchens.com"}
//             <IconButton onClick={handleCopyClick}>
//               <FileCopyIcon style={{ color: "#229753", fontSize: "18px" }} />
//             </IconButton>
//           </span>
//         </Tooltip>
//       </div>
//       <div className="animatedrec-container">
//         <div className="animatedrec-group">
//           <div className="animatedrec-overlap-group">
//             <div className="animatedrec-div">
//               <div className="animatedrec-rectangle" />
//               <div className="animatedrec-ellipse" />
//               <article class="principle twelve">
//                 <div class="shape">
//                   <div class="container">
//                     <span class="item one"></span>
//                     <span class="item two"></span>
//                     <span class="item three"></span>
//                     {/* <span class='item four'></span> */}
//                   </div>
//                 </div>
//               </article>
//               <div className="animatedrec-rectangle-2" />
//               <div className="animatedrec-rectangle-3" />
//               <div className="animatedrec-rectangle-4" />
//               <div className="animatedrec-rectangle-5" />
//               <div className="animatedrec-rectangle-6" />
//               <div className="animatedrec-rectangle-7" />
//               <div className="animatedrec-rectangle-8" />
//               <div className="animatedrec-rectangle-9" />
//               <div className="animatedrec-rectangle-10" />
//               <div className="animatedrec-rectangle-11" />
//               <div className="animatedrec-div"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="right-animatedrec-container">
//         <div className="right-animatedrec-group">
//           <div className="right-animatedrec-overlap-group">
//             <div className="right-animatedrec-div">
//               <div className="right-animatedrec-rectangle" />
//               <div className="right-animatedrec-rectangle-3" />
//               <div className="right-animatedrec-rectangle-4" />
//               <div className="right-animatedrec-rectangle-5" />
//               <div className="right-animatedrec-rectangle-6" />
//               <div className="right-animatedrec-rectangle-7" />
//               <div className="right-animatedrec-rectangle-8" />
//               <div className="right-animatedrec-rectangle-9" />
//               <div className="right-animatedrec-rectangle-10" />
//               <div className="right-animatedrec-rectangle-11" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;

// import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPencil, faBoxArchive } from '@fortawesome/free-solid-svg-icons';
// import { Icon } from '@iconify/react';
// import axios from 'axios';

// function Test() {
//   const apiUrl = "http://127.0.0.1:8000/menu/get/";

//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true); // Add a loading state

//   useEffect(() => {
//     async function fetchMenuItems() {
//       try {
//         const response = await axios.get(apiUrl);
//         setMenuItems(response.data);
//         setLoading(false); // Set loading to false when data is fetched
//       } catch (error) {
//         console.error("Error fetching menu items:", error);
//         // Handle the error, e.g., set an error state or show an error message
//       }
//     }

//     fetchMenuItems();
//   }, []);

//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value);
//   };

//   const filteredData = menuItems.filter((item) => {
//     return item.name.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   return (
//     <div>
//       {loading ? (
//         // Display a loading animation or message while data is being fetched
//         <div className="loading-animation">Loading...</div>
//       ) : menuItems.length > 0 ? (
//         <div>
//           {filteredData.map((item) => (
//             <div className="ITM-card" key={item.id} style={{ marginLeft: '0rem' }}>
//               {/* Rest of your code for rendering items */}
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No menu items available.</p>
//       )}
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from 'react';
// import './Test.css'; // Import your CSS for styling

// const images = [
//   '1.jpg',
//   '2.jpg',
//   '3.jpg',
//   '4.jpg',
//   '5.jpg',
//   '6.jpg',
//   // Add more image URLs as needed
// ];
// const directoryPath = '/Images/DeliveyBoyDocuments/';
// function Test() {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(null);
//   const [modalImageOpen, setModalImageOpen] = useState(false);

//   const openModalImage = (index) => {
//     setSelectedImageIndex(index);
//     setModalImageOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedImageIndex(null);
//     setModalImageOpen(false);
//   };

//   const nextImage = () => {
//     setSelectedImageIndex((prevIndex) =>
//       prevIndex === images.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevImage = () => {
//     setSelectedImageIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div className="photo-gallery">
//       <div className="d-flex" style={{flexWrap:'wrap',}}>
//       {images.map((image, index) => (
//         <div
//           key={index}
//           className="thumbnail"
//           onClick={() => openModalImage(index)}
//         >
//           <div style={{margin:'1vw'}}>
//           <img style={{width:'10vw',height:'10vw'}} src={`${directoryPath}${image}`}alt={`Image ${index + 1}`} />
//           <div style={{textAlign:'center'}}>{`${index + 1}`}</div>
//           </div>

//         </div>
//       ))}
//       </div>

//       {modalImageOpen && (
//         <div className="modal">
//           <span className="close" onClick={closeModal}>
//             &times;
//           </span>
//           <img
//             src={`${directoryPath}${images[selectedImageIndex]}`}
//             alt={`Image ${selectedImageIndex + 1}`}
//             className="modal-image"
//           />
//           <span className="prev" onClick={prevImage}>
//             &#10094;
//           </span>
//           <span className="next" onClick={nextImage}>
//             &#10095;
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Test;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const apiUrl = 'http://127.0.0.1:8000/menu/get/';

// const fetchMenuItems = async () => {
//   try {
//     const response = await axios.get(apiUrl);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching menu items:', error);
//     throw error;
//   }
// };

// const Test = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [loading, setLoading] = useState(true); // Add loading state

//   useEffect(() => {
//     fetchMenuItems()
//       .then((response) => {
//         setMenuItems(response.data);
//         setLoading(false); // Set loading to false when data is fetched
//       })
//       .catch((error) => {
//         console.error('Error fetching menu items:', error);
//         // Handle the error, e.g., set an error state or show an error message
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Menu Items</h1>
//       {loading ? ( // Display loading animation or message when loading is true
//         <div>Loading...</div>
//       ) : menuItems.length > 0 ? (
//         <ul>
//           {menuItems.map((item) => (
//             <div key={item.id}>
//               <li>
//                 <h2>{item.name}</h2>
//                 <p>Price: ${item.price}</p>
//                 <img src={item.images} alt={item.name} />
//               </li>
//               <div>
//                 {item.visible ? <div>hi</div> : <div>hello</div>}
//               </div>
//             </div>
//           ))}
//         </ul>
//       ) : (
//         <p>No menu items available.</p>
//       )}
//     </div>
//   );
// };

// export default Test;

// import React from "react";
// import "./Test.css";

// function Test() {
//   return (
//     <div className="ADB-app">
//       <div className="ADB-left-box">
//         <div className="ADB-container">
//           <div className="d-flex g-10">
//             <div className="ADB-textbox">
//               <label className="f-12">Name</label>
//               <input type="text" className="ADB-input" />
//             </div>
//             <div className="ADB-textbox">
//               <label className="f-12">Username</label>
//               <input type="text" className="ADB-input" />
//             </div>
//           </div>
//           <div className="d-flex g-10">
//             <div className="ADB-textbox">
//               <label className="f-12">Phone number</label>
//               <input type="text" className="ADB-input" />
//             </div>
//             <div className="ADB-textbox">
//               <label className="f-12">Alternative Phone number</label>
//               <input type="text" className="ADB-input" />
//             </div>
//           </div>
//           <div className="d-flex g-10">
//             <div className="ADB-textbox">
//               <label className="f-12">Email</label>
//               <input type="text" className="ADB-input" />
//             </div>
//             <div className="ADB-textbox">
//               <label className="f-12">Alternative Phone number</label>
//               <select name="" id="" className="ADB-dropdown">
//                 <option value="">O-</option>
//                 <option value="">O+</option>
//               </select>
//             </div>
//           </div>
//           <div className="ADB-row-left-right-align">
//             <div className="f-12">
//               <div>
//                 <input type="checkbox" name="" id="" />
//                 Kannada
//               </div>
//               <div>
//                 <input type="checkbox" name="" id="" />
//                 English
//               </div>
//               <div>
//                 <input type="checkbox" name="" id="" />
//                 Hindi
//               </div>
//               <div>
//                 <input type="checkbox" name="" id="" />
//                 Tulu
//               </div>
//             </div>
//             <button className="p-outline-button" style={{marginBottom:'2rem'}}>Upload</button>
//           </div>
//           <div
//             className="row"
//             style={{ width: "100%", backgroundColor: "#dadada", height: "1px",marginTop:'1rem', marginBottom:'1rem' }}
//           ></div>
//           <div className="">Vehicle Details</div>
//           <br />
//           <div className="d-flex g-10">
//             <div className="ADB-textbox">
//               <label className="f-12">Vehicle RC number</label>
//               <input type="text" className="ADB-input" />
//             </div>

//           </div>
//           <div className="d-flex g-10">
//             <div className="ADB-textbox">
//               <label className="f-12">Vehicle Number</label>
//               <input type="text" className="ADB-input" />
//             </div>
//             <div className="ADB-textbox">
//               <label className="f-12">Vehicle modal</label>
//               <input type="text" className="ADB-input" />
//             </div>
//           </div>
//           <div className="d-flex g-10">
//             <div className="ADB-textbox">
//               <label className="f-12">Licence number</label>
//               <input type="text" className="ADB-input" />
//             </div>
//             <div className="ADB-textbox">
//               <label className="f-12">Licence Exp date</label>
//               <input type="text" className="ADB-input" />
//             </div>
//           </div>
//           <div className="d-flex g-10">
//             <div className="ADB-textbox">
//               <label className="f-12">Insurance number</label>
//               <input type="text" className="ADB-input" />
//             </div>
//             <div className="ADB-textbox">
//               <label className="f-12">Insurance Exp date</label>
//               <input type="text" className="ADB-input" />
//             </div>
//           </div>
//           <div
//             className="row"
//             style={{ width: "100%", backgroundColor: "#dadada", height: "1px", marginTop:'1rem', marginBottom:'1rem' }}
//           ></div>
//           <div style={{display:'flex',flex:'wrap', gap:'50px'}}>
//           <button className="p-outline-button">Upload</button>
//           <button className="p-outline-button">Upload</button>
//           <button className="p-outline-button">Upload</button>
//           <button className="p-outline-button">Upload</button>
//           </div>

//         </div>
//       </div>
//       <div className="ADB-right-box">
//         {/* Content for the right-side box */}
//       </div>
//     </div>
//   );
// }

// export default Test;

// import React from 'react';
// import './Test.css';

// function Test() {
//   return (
//     <div className="ADB-TST-app">
//       <div className="ADB-TST-top-container">
//         <div className="ADB-TST-row">
//           <input type="text" placeholder="Search" className="ADB-TST-right-align" />
//         </div>
//         <div className="ADB-TST-row">
//           <div className="ADB-TST-button-container">
//             <button className='p-button bg-purple'>Button 1</button>
//             <button className='p-button bg-purple'>Button 2</button>
//           </div>
//         </div>
//         <div className="ADB-TST-row">
//         <div className="ADB-TST-header">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         </div>
//       </div>
//       <div className="ADB-TST-scrollable-container">
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>
//         <div className="ADB-TST-card">
//           <div>ID No</div>
//           <div>Name</div>
//           <div>Username</div>
//           <div>Phone No</div>
//           <div>Phone No (Optional)</div>
//           <div>Address</div>
//           <div>Login Status</div>
//           <div>Track</div>
//           <div>Emission Exp.</div>
//           <div>Insurance Exp.</div>
//           <div>Documents</div>
//           <div>Password</div>
//           <div>Edit</div>
//           <div>Delete</div>
//         </div>

//         <div className="ADB-TST-card">
//           {/* Add more data here */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;

// import React from "react";
// import "./Test.css"; // You can define your styles in this CSS file

// function Test() {
//   return (
//     <div className="ADB-TST-app-container">
//       <div className="ADB-TST-top-fixed">Top Fixed Container with Left-Aligned Text</div>
//       <div className="ADB-TST-box-container">
//         <div className="ADB-TST-box">
//           <div className="ADB-TST-inputs">
//             <input type="text" placeholder="Textbox 1" />
//             <input type="text" placeholder="Textbox 2" />
//             <input type="text" placeholder="Textbox 3" />
//             <input type="text" placeholder="Textbox 4" />
//           </div>
//           <div className="ADB-TST-buttons">
//             <button>Button 1</button>
//             <button>Button 2</button>
//             <button>Button 3</button>
//           </div>
//         </div>
//         <div className="ADB-TST-box">
//           {/* Repeat the same structure for the second box */}
//         </div>
//         <div className="ADB-TST-box">
//           {/* Repeat the same structure for the third box */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Test;

// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// import './Test.css'; // Import your CSS file here

// function Test() {
//   return (
//     <div className="ADB-TST-container-head">
//       {/* First Row */}
//       <div className="ADB-TST-row">
//         <div className="ADB-TST-column">
//           <img src="kb_logo.png" alt="Logo" style={{width:'40px'}} />
//           <span> Knight Bite</span>
//         </div>
//         <div className="ADB-TST-column">
//           <button className="ADB-TST-o-button bg-orange txt-orange">Complete your KYC</button>
//         </div>
//         <div className="ADB-TST-column">
//         <i className="ADB-TST-search-icon">
//               <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
//             </i>
//           <input type="text" placeholder="Search" className="ADB-TST-input-field" />
//         </div>
//         <div className="ADB-TST-column">
//           <div className="ADB-TST-button-group">
//             <img src="kb_logo.png" alt="" style={{width:'40px'}}  />
//             <img src="kb_logo.png" alt="" style={{width:'40px'}}  />
//             <span>
//               <div>Sabil Bakhar</div>
//               <div>Admin</div>
//             </span>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// }

// export default Test;

// import React from 'react';
// import './Test.css';

// const Test = () => {
//   return (
//     <div className="ADB-TST-container">
//       <div className="ADB-TST-sidebar">
//         <ul>
//           <li>Verify Registration</li>
//           <li>Analytics</li>
//           <li>Track</li>
//         </ul>
//       </div>
//       <div className="ADB-TST-main-content">
//         <div className="ADB-TST-fixed-top-container">
//           <button className="ADB-TST-search-button">Search</button>
//           <div className="ADB-TST-action-buttons">
//             <button className="ADB-TST-action-button">Add Delivery Boys</button>
//             <button className="ADB-TST-action-button">Bulk Action</button>
//           </div>
//         </div>
//         <div className="ADB-TST-scrollable-container">
//           {/* Render row-sized cards here */}
//           <div className="ADB-TST-card">
//             <div>1</div>
//             <div>Deepeshhhhhhh</div>
//             <div>kb001</div>
//             <div>6360062656</div>
//             <div>Mangalore</div>
//             <div>X</div>
//             <div>X</div>
//             <div>Not Set</div>
//           </div>
//           <div className="ADB-TST-card">
//             <div>1</div>
//             <div>Deepesh</div>
//             <div>kb001</div>
//             <div>6360062656</div>
//             <div>Mangalore</div>
//             <div>X</div>
//             <div>X</div>
//             <div>Not Set</div>
//           </div>
//           {/* Add more cards as needed */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;

// import React from 'react';
// import './Test.css';

// const Test = () => {
//   return (
//     <div className="ADB-TST-container">
//       <div className="ADB-TST-red-box">
//         <div className="ADB-TST-textbox-container">
//           <input type="text" placeholder="Textbox 1" />
//           <input type="text" placeholder="Textbox 2" />
//           <input type="text" placeholder="Textbox 3" />
//         </div>
//         <div className="ADB-TST-button-container">
//           <button>Button 1</button>
//           <button>Button 2</button>
//           <button>Button 3</button>
//         </div>
//       </div>
//       <div className="ADB-TST-blue-box">
//         <div className="ADB-TST-grid-container">
//           <div className="ADB-TST-left-grid">
//             <input type="text" placeholder="Left Grid Textbox 1" />
//             <input type="text" placeholder="Left Grid Textbox 2" />
//             <button>Left Grid Button</button>
//           </div>
//           <div className="ADB-TST-right-grid">
//             <input type="text" placeholder="Right Grid Textbox 1" />
//             <input type="text" placeholder="Right Grid Textbox 2" />
//             <button>Right Grid Button</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Test;

// import React, { useState } from 'react';
// import './Test.css'; // Import your CSS file for styling

// const Test = () => {
//   const [selectedItem, setSelectedItem] = useState('Place An Order');
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const dropdownItems = ['Place An Order', 'Send Payment Link'];

//   const handleDropdownChange = (event) => {
//     const selectedValue = event.target.value;
//     setSelectedItem(selectedValue);
//   };

//   const handleButtonClick = () => {
//     if (selectedItem) {
//       // Perform an action with the selected item, e.g., send it to an API
//       console.log(`Selected Item: ${selectedItem}`);
//     }
//   };

//   return (

//       <div className="ADB-TST-d-flex">
//       <button className="ADB-TST-p-button bg-purple" style={{borderRadius:'30px 0px 0px 30px', width: 'auto',padding:'10px 10px 30px 20px '}} onClick={handleButtonClick}>
//       {selectedItem}
//       </button>
//       <select
//           className="ADB-TST-R-droptype"
//           style={{ borderRadius: '0px 30px 30px 0px', width: '2%', outline: 'none' }}
//           onClick={() => setDropdownOpen(!dropdownOpen)}
//           onChange={handleDropdownChange}
//           value={selectedItem }
//         >
//           {dropdownItems.map((item) => (
//             <option value={item} key={item} className="ADB-TST-custom-option">
//               {item}
//             </option>
//           ))}
//         </select>
//       </div>

//   );
// };

// export default Test;

// {dropdownOpen && (
//   <ul className="ADB-TST-dropdown-menu">
//     {dropdownItems.map((item) => (
//       <li key={item} onClick={() => handleDropdownClick(item)}>
//         {item}
//       </li>
//     ))}
//   </ul>
// )}

// import React, { useState } from 'react';

// function Test() {
//   const [locationText, setLocationText] = useState('');
//   const [inputText, setInputText] = useState('');
//   const [showLocation, setShowLocation] = useState(true);
//   const [showTextBox, setShowTextBox] = useState(false);
//   const [showResult, setShowResult] = useState(false);

//   const handleLocationSubmit = () => {
//     setShowLocation(false);
//     setShowTextBox(true);
//   };

//   const handleTextBoxSubmit = () => {
//     if (inputText.trim() !== '') {
//       setShowResult(true);
//       setShowTextBox(false);
//     }
//   };

//   const handleOpenLocation = () => {
//     setShowLocation(true);
//     setShowTextBox(false);
//     setShowResult(false);
//     setLocationText('');
//   };
//   const handleOpenTextbox = () => {
//     setShowTextBox(true);
//     setShowResult(false);
//   };

//   return (
//     <div className="ADB-TST-container">
//       {showLocation && (
//         <div className="ADB-TST-box">
//           <h2>Enter Location</h2>
//           <input
//             type="text"
//             value={locationText}
//             onChange={(e) => setLocationText(e.target.value)}
//           />
//           <button onClick={handleLocationSubmit}>Submit</button>
//         </div>
//       )}
//       {showTextBox && (
//         <div className="ADB-TST-box">
//           <h2>Enter Text</h2>
//           <input
//             type="text"
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//           />
//           <button onClick={handleTextBoxSubmit}>Submit</button>
//         </div>
//       )}
//       {showResult && (
//         <div className="ADB-TST-result-box">
//           <h2>Result</h2>
//           <p>Location entered: {locationText}</p>
//           <p>Text entered: {inputText}</p>
//           <button onClick={handleOpenLocation}>Open Location</button>
//           <button onClick={handleOpenTextbox}>Open Textbox</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from 'react';

// function Test() {
//   const [inputText, setInputText] = useState('');
//   const [showInput, setShowInput] = useState(true);
//   const [showResult, setShowResult] = useState(false);

//   const handleSubmit = () => {
//     if (inputText.trim() !== '') {
//       setShowInput(false);
//       setShowResult(true);
//     }
//   };

//   const handleOpenTextbox = () => {
//     setShowInput(true);
//     setShowResult(false);
//     setInputText(''); // Clear the input text when opening the textbox again
//   };

//   return (
//     <div className="ADB-TST-container">
//       {showInput && (
//         <div className="ADB-TST-box">
//           <h2>Enter Text</h2>
//           <input
//             type="text"
//             value={inputText}
//             onChange={(e) => setInputText(e.target.value)}
//           />
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       )}
//       {showResult && (
//         <div className="ADB-TST-result-box">
//           <h2>Result</h2>
//           <p>You entered: {inputText}</p>
//         </div>
//       )}
//       {showResult && (
//         <div>
//          <button onClick={handleOpenTextbox}>Open Textbox</button>
//         </div>
//         )}
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from 'react';

// function Test() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   return (
//     <div className="ADB-TST-button-container">
//       <button
//         className="ADB-TST-hoverable-button"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         Hover Me
//       </button>
//       {isHovered &&
//       <div>hi</div>
//       }{/* Render the modal when isHovered is true */}
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from 'react';

// function Test() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const handleMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div className="ADB-TST-dropdown-container">
//       <div
//         className="ADB-TST-dropdown-button"
//         onMouseEnter={handleMouseEnter}
//         onMouseLeave={handleMouseLeave}
//       >
//         Hover Me for Dropdown
//       </div>
//       {isDropdownOpen && (
//         <div className="ADB-TST-dropdown-modal">
//           {/* Your dropdown content */}
//           <p>Dropdown Content</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from "react";

// const Test = () => {
//   const [submitVisible, setSubmitVisible] = useState(false);

//   const openSubmit = () => {
//     setSubmitVisible(true);
//   };
//   const closeSubmit = () => {
//     setSubmitVisible(false);
//   };
//   const [cartItems, setCartItems] = useState([]);
//   const [selectedDeliveryCharge, setSelectedDeliveryCharge] = useState(null);
//   const [selectedDiscountType, setSelectedDiscountType] = useState("PERCENTAGE");
//   const [discountAmount, setDiscountAmount] = useState(0);
//   const [selectedCoupon, setSelectedCoupon] = useState(null);
//   const [discountPercentage, setDiscountPercentage] = useState(0);

//   const deliveryCharges = [
//     { label: "Free", value: 0 },
//     { label: "+$35 Delivery Charge", value: 35 },
//     { label: "+$45 Delivery Charge", value: 45 },
//   ];

//   const couponCodes = [
//     { code: "ALLBITE", discountPercentage: 40 },
//     { code: "SMOOTHIE", discountPercentage: 50 },
//   ];

//   const cartAddons = [
//     { name: "Cart Addon 1", price: 5 },
//     { name: "Cart Addon 2", price: 10 },
//     { name: "Cart Addon 3", price: 15 },
//   ];

//   const products = [
//     { name: "Product 1", price: 10 },
//     { name: "Product 2", price: 20 },
//     { name: "Product 3", price: 30 },
//   ];

//   const addToCart = (productName, selectedAddons) => {
//     const existingItemIndex = cartItems.findIndex(
//       (item) =>
//         item.product === productName &&
//         JSON.stringify(item.selectedAddons) === JSON.stringify(selectedAddons)
//     );
  
//     if (existingItemIndex !== -1) {
//       const newCartItems = [...cartItems];
//       newCartItems[existingItemIndex].quantity += 1;
//       setCartItems(newCartItems);
//     } else {
//       setCartItems([
//         ...cartItems,
//         {
//           product: productName,
//           quantity: 1,
//           selectedAddons: [...selectedAddons],
//         },
//       ]);
//     }
//   };
  

//   const removeFromCart = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems.splice(index, 1);
//     setCartItems(newCartItems);
//   };

//   const updateQuantity = (index, quantity) => {
//     const newCartItems = [...cartItems];
//     newCartItems[index] = { ...newCartItems[index], quantity };
//     setCartItems(newCartItems);
//   };

//   const incrementQuantity = (index) => {
//     const newCartItems = [...cartItems];
//     newCartItems[index] = {
//       ...newCartItems[index],
//       quantity: newCartItems[index].quantity + 1,
//     };
//     setCartItems(newCartItems);
//   };

//   const decrementQuantity = (index) => {
//     const newCartItems = [...cartItems];
//     if (newCartItems[index].quantity > 1) {
//       newCartItems[index] = {
//         ...newCartItems[index],
//         quantity: newCartItems[index].quantity - 1,
//       };
//       setCartItems(newCartItems);
//     }
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     cartItems.forEach((item) => {
//       const product = products.find((p) => p.name === item.product);
//       const addonsTotal = item.selectedAddons.reduce((acc, addonName) => {
//         const addon = cartAddons.find((a) => a.name === addonName);
//         return acc + addon.price;
//       }, 0);
//       const productTotal = (product.price + addonsTotal) * item.quantity;
//       total += productTotal;
//       item.productTotal = productTotal;
//     });
//     return total;
//   };

//   const getCouponDetails = (code) => {
//     return couponCodes.find((coupon) => coupon.code === code);
//   };

//   const calculateDiscount = () => {
//     const total = calculateTotal();

//     if (selectedDiscountType === "PERCENTAGE") {
//       const discount = total * (discountPercentage / 100);
//       return discount;
//     } else if (selectedDiscountType === "AMOUNT") {
//       return discountAmount;
//     } else if (selectedDiscountType === "COUPON") {
//       const couponDetails = getCouponDetails(selectedCoupon);
//       if (couponDetails) {
//         const couponDiscount = total * (couponDetails.discountPercentage / 100);
//         return couponDiscount;
//       } else {
//         return 0;
//       }
//     } else {
//       return 0;
//     }
//   };

//   const tax = 0.025;

//   const calculateTax = () => {
//     const total = calculateTotal();
//     const cgst = total * tax; // CGST at 2.5%
//     const sgst = total * tax; // SGST at 2.5%
//     return { cgst, sgst };
//   };

//   const addCharge = () => {
//     const add = 10;
//     return add;
//   };

//   const calculateGrandTotal = () => {
//     const total = calculateTotal() - calculateDiscount();
//     const deliveryCharge = selectedDeliveryCharge || 0;
//     const taxCharges = calculateTax();
//     const totalTax = taxCharges.cgst + taxCharges.sgst;
//     return Math.max(total + deliveryCharge + totalTax + addCharge(), 0);
//   };

//   const getAddonPrice = (addonName) => {
//     const selectedAddon = cartAddons.find((addon) => addon.name === addonName);
//     return selectedAddon ? selectedAddon.price : 0;
//   };

//   const [selectedAddonPopup, setSelectedAddonPopup] = useState(null);

//   const openAddonPopup = (addonName) => {
//     setSelectedAddonPopup(addonName);
//   };

//   const closeAddonPopup = () => {
//     setSelectedAddonPopup(null);
//   };

//   return (
//     <div className="ADB-TST-Test">
//       <h1>Product List</h1>
//       <ul className="ADB-TST-product-list">
//         {products.map((product) => (
//           <li key={product.name}>
//             {product.name} (${product.price}){" "}
            
// <button onClick={() => addToCart(product.name, [])}>Add to Cart</button>

//           </li>
//         ))}
//       </ul>
//       <h2>Cart</h2>
//       <ul className="ADB-TST-cart">
//         {cartItems.map((item, index) => (
//           <div key={index}>
//             <div className="ADB-TST-cart-item">
//               <div className="ADB-TST-cart-item-addons">
//                 <div className="ADB-TST-addon-dropdown">
//                   <div className="ADB-TST-addon-dropdown-toggle">Select Add-ons</div>
//                   <div className="ADB-TST-addon-dropdown-content">
//                     <button onClick={() => openAddonPopup(item.product)}>
//                       Open
//                     </button>
//                     {selectedAddonPopup !== null && (
//                       <div className="ADB-TST-popup">
//                         <div className="ADB-TST-popup-content">
//                           <h3>Add-ons</h3>
//                           <ul>
//                             {cartAddons.map((addon) => (
//                               <label key={addon.name}>
//                                 <input
//                                   type="checkbox"
//                                   checked={item.selectedAddons.includes(
//                                     addon.name
//                                   )}
//                                   onChange={(e) => {
//                                     const newCartItems = [...cartItems];
//                                     const newSelectedAddons =
//                                       newCartItems[index].selectedAddons;
//                                     if (e.target.checked) {
//                                       newSelectedAddons.push(addon.name);
//                                     } else {
//                                       const addonIndex =
//                                         newSelectedAddons.indexOf(addon.name);
//                                       if (addonIndex !== -1) {
//                                         newSelectedAddons.splice(addonIndex, 1);
//                                       }
//                                     }
//                                     newCartItems[index].selectedAddons =
//                                       newSelectedAddons;
//                                     setCartItems(newCartItems);
//                                   }}
//                                 />{" "}
//                                 {`${addon.name} (+$${addon.price})`}
//                               </label>
//                             ))}
//                           </ul>
//                           <button onClick={closeAddonPopup}>Close</button>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//                 <button onClick={() => removeFromCart(index)}>Remove</button>
//               </div>
//               <div className="ADB-TST-cart-item-details">
//                 {item.product} (Price: $
//                 {products.find((p) => p.name === item.product).price}) ,
//                 Quantity: {item.quantity}{" "}
//                 {item.selectedAddons.length > 0 && (
//                   <div>
//                     Selected Add-ons:
//                     <ul>
//                       {item.selectedAddons.map((addonName) => (
//                         <li key={addonName}>
//                           {addonName} (+$
//                           {
//                             cartAddons.find((addon) => addon.name === addonName)
//                               .price
//                           }
//                           )
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//                 <button onClick={() => decrementQuantity(index)}>-</button>
//                 <input
//                   type="number"
//                   min="1"
//                   value={item.quantity || 1}
//                   onChange={(e) =>
//                     updateQuantity(index, parseInt(e.target.value))
//                   }
//                 />
//                 <button onClick={() => incrementQuantity(index)}>+</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </ul>
//       <p>Additional charges ${addCharge().toFixed(2)}</p>
//       <p>CGST (2.5%): ${calculateTax().cgst.toFixed(2)}</p>
//       <p>SGST (2.5%): ${calculateTax().sgst.toFixed(2)}</p>
//       <p>Tax ${(calculateTax().cgst + calculateTax().sgst).toFixed(2)}</p>
//       <h2>Discounts</h2>
//       <div className="ADB-TST-discount-section">
//         <select
//           value={selectedDiscountType}
//           onChange={(e) => setSelectedDiscountType(e.target.value)}
//         >
//           <option value={null}>Select Discount Type</option>
//           <option value="PERCENTAGE">Percentage</option>
//           <option value="AMOUNT">Amount</option>
//           <option value="COUPON">Coupon</option>
//         </select>

//         {selectedDiscountType === "PERCENTAGE" && (
//           <input
//             type="number"
//             placeholder="Percentage"
//             value={discountPercentage}
//             onChange={(e) =>
//               setDiscountPercentage(parseFloat(e.target.value))
//             }
//           />
//         )}

//         {selectedDiscountType === "AMOUNT" && (
//           <input
//             type="number"
//             placeholder="Amount"
//             value={discountAmount}
//             onChange={(e) => setDiscountAmount(parseFloat(e.target.value))}
//           />
//         )}

//         {selectedDiscountType === "COUPON" && (
//           <select
//             value={selectedCoupon}
//             onChange={(e) => setSelectedCoupon(e.target.value)}
//           >
//             <option value={null}>Select Coupon Code</option>
//             {couponCodes.map((coupon) => (
//               <option key={coupon.code} value={coupon.code}>
//                 {coupon.code} - {coupon.discountPercentage}% Off
//               </option>
//             ))}
//           </select>
//         )}
//       </div>
//       <p>Discount: ${calculateDiscount().toFixed(2)}</p>
//       <h2>Delivery Charges</h2>
//       <div className="ADB-TST-delivery-charge-section">
//         {deliveryCharges.map((charge) => (
//           <label key={charge.value}>
//             <input
//               type="radio"
//               name="deliveryCharge"
//               value={charge.value}
//               checked={selectedDeliveryCharge === charge.value}
//               onChange={(e) =>
//                 setSelectedDeliveryCharge(parseFloat(e.target.value))
//               }
//             />
//             {charge.label}
//           </label>
//         ))}
//       </div>
//       <p>Total Price:${calculateGrandTotal().toFixed(2)}</p>
//     </div>
//   );
// };

// export default Test;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const categories = [
//   "Combo",
//   "Combo meal",
//   "Ice Cream",
//   // ...other categories
// ];

// const categoryMessages = {
//   "Combo": "hi",
//   "Combo meal": "hello",
//   "Ice Cream": "hey",
//   // Add messages for other categories
// };

// const CategoryLink = ({ category, isSelected, onClick }) => (
//   <div className="ADB-TST-CO-cat-gap">
//     <Link
//       to={`/category/${category}`} // Adjust the route path as needed
//       className={`CO-cat-dec ${isSelected ? "txt-purple" : ""}`}
//       onClick={() => onClick(category)}
//     >
//       {category}
//     </Link>
//   </div>
// );

// const CategoryMessage = ({ message }) => (
//   <div>
//     {message && <div>{message}</div>}
//   </div>
// );

// function Test() {
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   const handleCatTabChange = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <div>
//       {categories.map((category, index) => (
//         <CategoryLink
//           key={index}
//           category={category}
//           isSelected={selectedCategory === category}
//           onClick={handleCatTabChange}
//         />
//       ))}
//       <CategoryMessage message={categoryMessages[selectedCategory]} />
//     </div>
//   );
// }

// export default Test;

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import { faFilter, faBars } from "@fortawesome/free-solid-svg-icons";

// function Test() {
//   const [stockTab, setStockTab] = useState("all");

//   const handleStock = (tab) => {
//     setStockTab(tab);
//   };

//   return (
//     <div>
//       <div className="ADB-TST-w3-container">
//         <h2>Tabs and Filters</h2>
//         <p>Click on the tabs and use filters below.</p>
//       </div>

//         <button
//           className={stockTab === 'all' ? "active-filter" : "filter-button"}
//           onClick={() => handleStock('all')}
//         >
//           All
//         </button>
//         <button
//           className={stockTab === 'inStock' ? "active-filter" : "filter-button"}
//           onClick={() => handleStock('inStock')}
//         >
//           In Stock
//         </button>
//         <button
//           className={stockTab === 'outStock' ? "active-filter" : "filter-button"}
//           onClick={() => handleStock('outStock')}
//         >
//           Out of Stock
//         </button>
//         <div className="ADB-TST-OR-container-2-left  g-left txt-grey">
//             <p
//               className={`OR-container-2-tabs ${
//                 stockTab === "In Progress" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("In Progress")}
//             >
//               In Progress
//             </p>
//             <p
//               className={`OR-container-2-tabs  ${
//                 stockTab === "Ready and Packed" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("Ready and Packed")}
//             >
//               Ready and Packed
//             </p>
//             <p
//               className={`OR-container-2-tabs ${
//                 stockTab === "Dispatched" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("Dispatched")}
//             >
//               Dispatched
//             </p>
//             <p
//               className={`OR-container-2-tabs  ${
//                 stockTab === "Delivered Orders" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("Delivered Orders")}
//             >
//               Delivered Orders
//             </p>
//             <p
//               className={`OR-container-2-tabs  ${
//                 stockTab === "Live Orders" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("Live Orders")}
//             >
//               Live Orders
//             </p>
//             <p
//               className={`OR-container-2-tabs ${
//                 stockTab === "Cancelled Orders" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("Cancelled Orders")}
//             >
//               Cancelled Orders
//             </p>
//             <p
//               className={`OR-container-2-tabs  ${
//                 stockTab === "On hold" ? "txt-purple" : "txt-grey"
//               }`}
//               onClick={() => handleTabClick("On hold")}
//             >
//               On Hold
//             </p>
//             <div className="ADB-TST-OR-container-2-actions">
//               <p className="ADB-TST-OR-container-2-tabs">
//                 <FontAwesomeIcon icon={faMagnifyingGlass} />
//               </p>
//               <p className="ADB-TST-OR-container-2-tabs">
//                 <FontAwesomeIcon icon={faFilter} />
//               </p>
//             </div>
//           </div>

//       {stockTab === 'all' && (
//         <div id="London">
//           {/* Content for London tab */}
//            <p>All items</p>
//         </div>
//       )}

//       {stockTab === 'inStock' && (
//         <div id="Paris">
//           {/* Content for Paris tab */}
//           <p>instock</p>
//         </div>
//       )}
//       {stockTab === 'outStock' && (
//         <div id="Paris">
//           {/* Content for Paris tab */}
//           <p>outstocks</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Test;

// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

// export default function Test() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Item One" {...a11yProps(0)} />
//           <Tab label="Item Two" {...a11yProps(1)} />
//           <Tab label="Item Three" {...a11yProps(2)} />
//         </Tabs>
//       </Box>

//       <CustomTabPanel value={value} index={0}>
//         Item One
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         Item Three
//       </CustomTabPanel>
//     </Box>

//   );
// }
