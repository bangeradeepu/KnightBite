import React, { useState } from 'react';
import axios from 'axios';
import YourComponent from './YourComponent';
import AuthContext from './AuthContext';
import Home from './components/Home/Home';

const Login = ({ setSessionId, setIsLoggedIn }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNumberValidate, setNumberValidate] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [visibleOtp,setVisibleOtp] = useState(false);
  const [pId,setpId] = useState(Math.floor(Math.random() * 1000000));
  const [compIdGen,setCompIdGen] = useState(Math.floor(Math.random() * 1000000));
  const apiUrl = "http://127.0.0.1:8000/user/permissions/user_permissions/";
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(apiUrl);
    const companyData = response.data;
    let phoneNumberFound = false; 
     for (const companies of companyData) {
      
      if (phoneNumber === companies.pno) {
        console.log(companies.pno);
        console.log(companies.comp_id);
        console.log(companies.per_id);
        setCompIdGen(companies.comp_id);
        setpId(companies.per_id);
        console.log('Login successful!');
        setVisibleOtp(true)
        phoneNumberFound = true;  
        break; 
      }
    }
    if (!phoneNumberFound) {
      const apiUrl = "http://127.0.0.1:8000/user/permissions/user_permissions/post/";
     
console.log(pId);
      try {
        const formData = {
          name: "guest",
          per_id: pId,
          pno: phoneNumber,
          role: "guest",
          comp_id: compIdGen,
          invite_accept: 1,
          archive: 0,
          email: 'guest@gmail.com',
          activity: 0,
          password: 123,
        };
  
        const response = await axios.post(apiUrl, formData);
        console.log("Data posted successfully:", response.data);
        // If you want to update the list after posting data, you can refetch the data here
      } catch (error) {
        console.error("Error posting data:", error.response.data);
      }
      console.log('POST the phonenumber ');
      setVisibleOtp(true);
    }
  };

  const handleOnSubmitOtp = async() => {
    let genOtp = "12345";
    console.log(pId);
    if(genOtp == otp){
            const apiUrl =
        "http://127.0.0.1:8000/user/permissions/user_permissions/put/";
      const companyId = compIdGen;

      try {
        const response = await axios.put(
          `${apiUrl}?per_id=${pId}&comp_id=${companyId}&activity=1`
        );
        console.log("Update activty status", response.data);
        // fetchArchiveData();
      } catch (error) {
        console.error("Error updating permissions", error);
      }
      console.log("Successfull");
      setIsLoggedIn(true);
      sessionStorage.setItem('isLoggedIn', 'true');
      sessionStorage.setItem('sessionPhoneNumber', phoneNumber);
      sessionStorage.setItem('sessionpId',pId);
      sessionStorage.setItem('sessionCompId',compIdGen)
     }
    else{
      setError("Wrong OTP");
    }
  };
  
  return (
    <div>
      <h2>Login Page</h2>

        <div>
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Send OTP</button>
        {visibleOtp && ( 
          <div> 
        <div>
          <div>{isNumberValidate}</div>
          <label htmlFor="otp">OTP:</label>
          <input
            type="otp"
            id="otp"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button onClick={handleOnSubmitOtp}>Login</button>
          </div>
        )}
       
        {error && <p style={{ color: 'red' }}>{error}</p>}

    </div>
  );
};

export default Login;

