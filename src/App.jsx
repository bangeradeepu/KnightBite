// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Login';
import './Button.css';
import YourComponent from './YourComponent';
import Test from './Test';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(sessionStorage.getItem('isLoggedIn')));
  const [sessionphoneNumber, setSessionphoneNumber] = useState(sessionStorage.getItem('sessionPhoneNumber'));
  const [sessionpId, setSessionpId] = useState(sessionStorage.getItem('sessionpId'));
  const [sessionCompId, setSessionCompId] = useState(sessionStorage.getItem('sessionCompId'));


  useEffect(() => {
    if (isLoggedIn) {
      const storedSessionPhoneNumber = sessionStorage.getItem('sessionPhoneNumber');
      setSessionphoneNumber(storedSessionPhoneNumber);
    }
  }, [isLoggedIn]);


  return (
    <div>
      {isLoggedIn ? (
        <div>
        <YourComponent setSessionphoneNumber={sessionStorage.getItem('sessionPhoneNumber')} setIsLoggedIn={setIsLoggedIn}  setSessionpId={sessionStorage.getItem('sessionpId')} setSessionCompId={sessionStorage.getItem('sessionCompId')}/>
        </div>
        
      ) : (
        <Login setSessionId={setIsLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}
      {/* {isLoggedIn ? (
      <Test sessionId={sessionStorage.getItem('sessionId')} setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login setSessionId={setIsLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      )}  */}
    </div>
  );
};

export default App;





// import React from 'react'

// import YourComponent from './YourComponent'
// import Responsive from './Responsive'
// // import Mobile from './components/Home/Mobile'  

// import M_Sidebar from './M_Sidebar'
// import Button from './Button'
// import Test from './Test'
// import LocationFilter from './LocationFilter'
// import Login from './Login'






// function App() {
//   return (
//     <div>
      
//         {/* <YourComponent />  */}
//         <Test />
//         {/* <TagDropdown /> */}
//         {/* <Responsive /> */}
//         {/* <Test /> */}
//         {/* <Button /> */}
//         {/* <Mobile /> */}
//         {/* <M_Sidebar /> */}
//         {/* <YoC /> */} 
//         {/* <Mobile /> */}
//         {/* <Animatedrec /> */}
//         {/* <LocationFilter /> */}
//         {/* <Login /> */}

//     </div>
//   )
// }

// export default App