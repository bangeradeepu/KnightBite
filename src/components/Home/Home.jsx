import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./Home.css";
import "./HomeAnimation.css"

import FileCopyIcon from "@mui/icons-material/FileCopy";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "@iconify/react";
import { faShare, faArrowRight,faCircle } from "@fortawesome/free-solid-svg-icons";

const Home = (
  {
    setSessionCompId,
    setSessionphoneNumber,
    setSessionpId,
    selectedLocations,
    selectedBrands,
  }
) => {
  // To copy link
  const handleCopyClick = () => {
    const urlToCopy = "https://knightbite.kitchenos.com";
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Use the Clipboard API if available
      navigator.clipboard
        .writeText(urlToCopy)
        .then(() => {
          console.log("URL copied to clipboard:", urlToCopy);
        })
        .catch((error) => {
          console.error("Copy failed:", error);
        });
    } else {
      // Fallback method for browsers that don't support Clipboard API
      const textArea = document.createElement("textarea");
      textArea.value = urlToCopy;
      textArea.style.position = "fixed"; // Avoid scrolling to bottom
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        console.log("URL copied to clipboard:", urlToCopy);
      } catch (error) {
        console.error("Copy failed:", error);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };
  // Store View Data
    // Define chart data for different locations
    const chartDataMap = {
      mangalore: [
        {
          interval: "00:00 AM - 01:00 AM",
          values: [100, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
        },
        {
          interval: "01:00 AM - 02:00 AM",
          values: [45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
        },
        {
          interval: "02:00 AM - 03:00 AM",
          values: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115],
        },
        // Add more time intervals and data points here
      ],
      bangalore: [
        {
          interval: "00:00 AM - 01:00 AM",
          values: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
        },
        {
          interval: "01:00 AM - 02:00 AM",
          values: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
        },
        {
          interval: "02:00 AM - 03:00 AM",
          values: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
        },
        // Add more time intervals and data points here
      ],
      udupi: [
        {
          interval: "00:00 AM - 01:00 AM",
          values: [78, 83, 88, 93, 98, 103, 108, 113, 118, 123, 128, 133],
        },
        {
          interval: "01:00 AM - 02:00 AM",
          values: [57, 62, 67, 72, 77, 82, 87, 92, 97, 102, 107, 112],
        },
        {
          interval: "02:00 AM - 03:00 AM",
          values: [87, 92, 97, 102, 107, 112, 117, 122, 127, 132, 137, 142],
        },
        // Add more time intervals and data points here
      ],
    };
  
    // Generate an array of time intervals (from 12:00 AM to 11:59 PM in 1-hour intervals)
    const timeIntervals = Array.from({ length: 24 }, (_, index) => {
      const startHour = index.toString().padStart(2, "0");
      const endHour = (index + 1).toString().padStart(2, "0");
      return `${startHour}:00 AM - ${endHour}:00 AM`;
    });
  
    // Initialize state for the selected location, selected time interval, and start/end times
    const [selectedLocation, setSelectedLocation] = useState("mangalore");
    const [selectedInterval, setSelectedInterval] = useState(timeIntervals[0]);
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0,
      value: 0,
      time: "",
    });
    const [startTime, setStartTime] = useState("00:00 AM");
    const [endTime, setEndTime] = useState("01:00 AM");
  
    // Event handler for showing tooltip with time
    const handleMouseOver = (event, value, index) => {  
      const svg = event.target.closest("svg");
      const svgRect = svg.getBoundingClientRect();
      const x = event.clientX - svgRect.left + 820; // Calculate the mouse cursor's x position relative to the SVG
      const y = event.target.getAttribute("y") - -555; // Adjusted to show tooltip above the bar
    
      // Calculate the time based on the selected interval and the index of the bar
      const [startHour, startMinute] = startTime.split(":");
      const intervalMinutes = index * 5; // Each bar represents 5 minutes
      const startMinuteWithinHour = parseInt(startMinute) + intervalMinutes;
      const endMinuteWithinHour = startMinuteWithinHour + 5;
      const startHourFormatted = startHour.toString().padStart(2, "0");
      const startMinuteFormatted = startMinuteWithinHour.toString().padStart(2, "0");
      const endMinuteFormatted = endMinuteWithinHour.toString().padStart(2, "0");
    
      // Determine AM or PM
      const ampm = parseInt(startHour) + Math.floor(startMinuteWithinHour / 60) < 12 ? "AM" : "PM";
    
      // Format the time
      const formattedTime = `${startHourFormatted}:${startMinuteFormatted} - ${startHourFormatted}:${endMinuteFormatted} ${ampm}`;
    
      setTooltip({ visible: true, x, y, value, time: formattedTime });
    };
    
  
    // Event handlers for hiding tooltip
    const handleMouseOut = () => {
      setTooltip({ visible: false, x: 0, y: 0, value: 0, time: "" });
    };
  
    // Get chart data based on the selected location and interval
    const selectedData = chartDataMap[selectedLocation].find(
      (data) => data.interval === selectedInterval
    );
    const chartData = selectedData ? selectedData.values : [];
  
    // Calculate the maximum value for scaling
    const maxValue = Math.max(...chartData);
    const scaleY = (value) => (value / maxValue) * 200; // Adjust the scaling factor
  
    // Reduce the width of the bars
    const barWidth = 50; // Adjust the width as needed
  
    // Event handlers for dropdown changes
    const handleLocationChange = (event) => {
      const location = event.target.value;
      setSelectedLocation(location);
      setSelectedInterval(timeIntervals[0]); // Reset the selected interval
    };
  
    const handleIntervalChange = (event) => {
      const interval = event.target.value;
      setSelectedInterval(interval);
  
      // Split the interval to get start and end times
      const [start, end] = interval.split(" - ");
      setStartTime(start);
      setEndTime(end);
    };

// Sales
// Define chart data for different locations
const salesChartDataMap = {
  mangalore: [
    {
      interval: "00:00 AM - 01:00 AM",
      values: [100, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
    },
    {
      interval: "01:00 AM - 02:00 AM",
      values: [45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
    },
    {
      interval: "02:00 AM - 03:00 AM",
      values: [60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115],
    },
    // Add more time intervals and data points here
  ],
  bangalore: [
    {
      interval: "00:00 AM - 01:00 AM",
      values: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65],
    },
    {
      interval: "01:00 AM - 02:00 AM",
      values: [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75],
    },
    {
      interval: "02:00 AM - 03:00 AM",
      values: [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85],
    },
    // Add more time intervals and data points here
  ],
  udupi: [
    {
      interval: "00:00 AM - 01:00 AM",
      values: [78, 83, 88, 93, 98, 103, 108, 113, 118, 123, 128, 133],
    },
    {
      interval: "01:00 AM - 02:00 AM",
      values: [57, 62, 67, 72, 77, 82, 87, 92, 97, 102, 107, 112],
    },
    {
      interval: "02:00 AM - 03:00 AM",
      values: [87, 92, 97, 102, 107, 112, 117, 122, 127, 132, 137, 142],
    },
    // Add more time intervals and data points here
  ],
};

// Generate an array of time intervals (from 12:00 AM to 11:59 PM in 1-hour intervals)
const salesTimeIntervals = Array.from({ length: 24 }, (_, index) => {
  const startHour = index.toString().padStart(2, "0");
  const endHour = (index + 1).toString().padStart(2, "0");
  return `${startHour}:00 AM - ${endHour}:00 AM`;
});

// Initialize state for the selected location, selected time interval, and start/end times
const [selectedSalesLocation, setSelectedSalesLocation] = useState("mangalore");
const [selectedSalesInterval, setSelectedSalesInterval] = useState(
  salesTimeIntervals[0]
);
const [salesTooltip, setSalesTooltip] = useState({
  visible: false,
  x: 0,
  y: 0,
  value: 0,
  time: "",
});
const [salesStartTime, setSalesStartTime] = useState("00:00 AM");
const [salesEndTime, setSalesEndTime] = useState("01:00 AM");

// Event handler for showing tooltip with time
const handleSalesMouseOver = (event, value, index) => {
  const svg = event.target.closest("svg");
  const svgRect = svg.getBoundingClientRect();
  const x = event.clientX - svgRect.left + 820; // Calculate the mouse cursor's x position relative to the SVG
  const y = event.target.getAttribute("y") - -555; // Adjusted to show tooltip above the bar

  // Calculate the time based on the selected interval and the index of the bar
  const [startHour, startMinute] = salesStartTime.split(":");
  const intervalMinutes = index * 5; // Each bar represents 5 minutes
  const startMinuteWithinHour = parseInt(startMinute) + intervalMinutes;
  const endMinuteWithinHour = startMinuteWithinHour + 5;
  const startHourFormatted = startHour.toString().padStart(2, "0");
  const startMinuteFormatted = startMinuteWithinHour.toString().padStart(2, "0");
  const endMinuteFormatted = endMinuteWithinHour.toString().padStart(2, "0");

  // Determine AM or PM
  const ampm =
    parseInt(startHour) + Math.floor(startMinuteWithinHour / 60) < 12
      ? "AM"
      : "PM";

  // Format the time
  const formattedTime = `${startHourFormatted}:${startMinuteFormatted} - ${startHourFormatted}:${endMinuteFormatted} ${ampm}`;

  setSalesTooltip({ visible: true, x, y, value, time: formattedTime });
};

// Event handlers for hiding tooltip
const handleSalesMouseOut = () => {
  setSalesTooltip({ visible: false, x: 0, y: 0, value: 0, time: "" });
};

// Get chart data based on the selected location and interval
const selectedSalesData = salesChartDataMap[selectedSalesLocation].find(
  (data) => data.interval === selectedSalesInterval
);
const salesChartData = selectedSalesData ? selectedSalesData.values : [];

// Calculate the maximum value for scaling
const maxSalesValue = Math.max(...salesChartData);
const scaleYSales = (value) => (value / maxSalesValue) * 200; // Adjust the scaling factor

// Reduce the width of the bars
const salesBarWidth = 50; // Adjust the width as needed

// Event handlers for dropdown changes
const handleSalesLocationChange = (event) => {
  const location = event.target.value;
  setSelectedSalesLocation(location);
  setSelectedSalesInterval(salesTimeIntervals[0]); // Reset the selected interval
};

const handleSalesIntervalChange = (event) => {
  const interval = event.target.value;
  setSelectedSalesInterval(interval);

  // Split the interval to get start and end times
  const [start, end] = interval.split(" - ");
  setSalesStartTime(start);
  setSalesEndTime(end);
};







const [data, setData] = useState([]);
const [visibleLink, setVisisbleLink] = useState(false);
const [visibleStatAdd, setVisibleStartAdd] = useState(false);
const [VisibleAddOrder,setVisibleAddOrder] = useState(false);
const [viewAllOrders,setViewAllOrders] = useState(false);
const [viewAllItems,setViewAllItems] = useState(false);

useEffect(() => {
  const fetchData = async () => {
try {
const responseUserPermission = await axios.get(`http://127.0.0.1:8000/user/permissions/user_permissions/get/?comp_id=${setSessionCompId}&per_id=${setSessionpId}`);
const checkOwner = responseUserPermission.data.some(item => item.role === 'owner_main' || item.role === 'owner_main_p');
if(checkOwner){
setVisisbleLink(true);
setVisibleStartAdd(true);
setVisibleAddOrder(true);
setViewAllItems(true);
setViewAllOrders(true);
}else{
try {
  const response = await axios.get(`http://127.0.0.1:8000/user/permissions/permissions/get/?per_id=${setSessionpId}&comp_id=${setSessionCompId}`);
  setData(response.data);
  const hasRestLink = response.data.some(item => item.permissions === 'restaurantLink');
  if (hasRestLink) {
    setVisisbleLink(true);
  } else {
    setVisisbleLink(false);
  }
  const hasStartAddingItems = response.data.some(item => item.permissions === 'startAddingItems');
  if (hasStartAddingItems) {
    setVisibleStartAdd(true);
  } else {
    setVisibleStartAdd(false);
  }
  const hasAddOrder = response.data.some(item => item.permissions === 'addOnOrder');
  if (hasAddOrder) {
    setVisibleAddOrder(true);
  } else {
    setVisibleAddOrder(false);
  }
  const hasViewAllItems = response.data.some(item => item.permissions === 'viewAllItems');
  if (hasViewAllItems) {
    setViewAllItems(true);
  } else {
    setViewAllItems(false);
  }
  const hasViewAllOrders = response.data.some(item => item.permissions === 'viewAllOrders');
  if (hasViewAllOrders) {
    setViewAllOrders(true);
  } else {
    setViewAllOrders(false);
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
    <div className="HOME-app">
      <div className="HOME-container-1">
        <div className="HOME-welcome fw txt-black">
          Welcome, get started with these steps to power up your restaurant!{selectedLocations.map((location) => (
            <li key={location}>{location}</li>
          ))}
          {selectedBrands.map((brands) => (
            <li key={brands}>{brands}</li>
          ))}
        </div>
        <div className="HOME-container-1-1">
          <div className="HOME-container-1-1-box">
            <div className="HOME-container-1-1-box-left">
              <div className="f-24 fw txt-black">
                Share your restaurant details with customers
              </div>
              <br />
              <div className="f-16">
                Your customer can now view your restaurant website and start
                ordering online
              </div>
              <br />
              <div className="App">
              {visibleLink &&(
                <Tooltip title="Copy" placement="right-start">
                  <span
                    className="txt-green HOME-linker-btn"
                    style={{ fontWeight: "600" }}
                  >
                    {"https://knightbite.kitchens.com"}
                    <IconButton onClick={handleCopyClick}>
                      <FileCopyIcon
                        style={{ color: "#229753", fontSize: "18px" }}
                      />
                    </IconButton>
                  </span>
                </Tooltip>
              )}
              </div>
              <br />
              <div>
              {visibleLink &&(
                <button className="p-button bg-green">
                  Share restaurant link <FontAwesomeIcon icon={faShare} />
                </button>
              )}
              </div>
            </div>
            <div>
              <div className="animatedrec-container">
                <div className="animatedrec-group">
                  <div className="animatedrec-overlap-group">
                    <div className="animatedrec-div">
                      <div className="animatedrec-rectangle" />
                      <div className="animatedrec-ellipse" />
                      
                      <div className="animatedrec-rectangle-2" />
                      <div className="animatedrec-rectangle-3" />
                      <div className="animatedrec-rectangle-4" />
                      <div className="animatedrec-rectangle-5" />
                      <div className="animatedrec-rectangle-6" />
                      <div className="animatedrec-rectangle-7" />
                      <div className="animatedrec-rectangle-8" />
                      <div className="animatedrec-rectangle-9" />
                      <div className="animatedrec-rectangle-10" />
                      <div className="animatedrec-rectangle-11" />
                      <div className="animatedrec-div"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="HOME-container-1-2-box">
            <div className="HOME-container-1-2-box-left">
              <div className="f-24 fw txt-black">Create your menu by adding items</div>
              <br />
       
              <div className="f-16 txt-black">
                Quick add items on your menu. You can also modify items once
                added.
              </div>
              <br />
          
              <div className="txt-green f-16" style={{ fontWeight: "600" }}>
                {visibleStatAdd && (
                  <span>Stat Adding Items <FontAwesomeIcon icon={faArrowRight} /></span>
                )}
                
              </div>
            </div>
            <div>
              <div className="right-animatedrec-container">
                <div className="right-animatedrec-group">
                  <div className="right-animatedrec-overlap-group">
                    <div className="right-animatedrec-div">
                      <div className="right-animatedrec-rectangle" />
                      <div className="right-animatedrec-rectangle-3" />
                      <div className="right-animatedrec-rectangle-4" />
                      <div className="right-animatedrec-rectangle-5" />
                      <div className="right-animatedrec-rectangle-6" />
                      <div className="right-animatedrec-rectangle-7" />
                      <div className="right-animatedrec-rectangle-8" />
                      <div className="right-animatedrec-rectangle-9" />
                      <div className="right-animatedrec-rectangle-10" />
                      <div className="right-animatedrec-rectangle-11" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="HOME-container-1-3-box">
            <div className="f-20 fw txt-black">Start adding orders Manually</div>
            <br />
            <div className="f-16">
              Add offline orders such as Dine-in or WhatsApp orders manually
            </div>
            <br />
            <div className="txt-green f-16" style={{ fontWeight: "600" }}>
              {VisibleAddOrder &&(
                  <span>Add an order <FontAwesomeIcon icon={faArrowRight} /></span>
              )}
            </div>
            <br />
            <div className="f-20 fw txt-black">Kitchen Display Settings</div>
            <br />
            <div className="f-16">
              Add Kitchen staff as your team member to handle orders from
              Kitchen display
            </div>
            <br />
            <div className="txt-green f-16" style={{ fontWeight: "600" }}>
              <span>Show Team Settings <FontAwesomeIcon icon={faArrowRight} /></span>
            </div>
          </div>
        </div>
      </div>
      <div className="HOME-container-2">
        <div className="HOME-container-2-box-left">
          <div className="d-flex space-between align-item-center">
          <div className="f-24">Latest orders</div>
          <div className="f-16 txt-green">{viewAllOrders &&(<span>View All</span>)}</div>
          </div>
          {/* Desktop card */}
          <div className="d-card space-between align-item-center">
          <div>
            <div className="txt-blue text-align-left f-14">#176254</div>
            <div>15Min ago</div>
          </div>
          <div>
            <div className="txt-grey f-14">Dine In</div>
            <div>Table-14</div>
          </div>
          <div>
            4 Items
          </div>
          <div>
            <button className="p-button bg-orange txt-orange">In Progress</button>
          </div>
          <div><button className="p-button bg-orange txt-orange">Payemnt Pending</button></div>
          </div>
          <div className="d-card space-between align-item-center">
          <div>
            <div className="txt-blue text-align-left f-14">#176254</div>
            <div>15Min ago</div>
          </div>
          <div>
            <div className="txt-grey f-14">Dine In</div>
            <div>Table-14</div>
          </div>
          <div>
            4 Items
          </div>
          <div>
            <button className="p-button bg-orange txt-orange">In Progress</button>
          </div>
          <div><button className="p-button bg-orange txt-orange">Payemnt Pending</button></div>
          </div>
          <div className="d-card space-between align-item-center">
          <div>
            <div className="txt-blue text-align-left f-14">#176254</div>
            <div>15Min ago</div>
          </div>
          <div>
            <div className="txt-grey f-14">Dine In</div>
            <div>Table-14</div>
          </div>
          <div>
            4 Items
          </div>
          <div>
            <button className="p-button bg-orange txt-orange">In Progress</button>
          </div>
          <div><button className="p-button bg-orange txt-orange">Payemnt Pending</button></div>
          </div>
          <div className="d-card space-between align-item-center">
          <div>
            <div className="txt-blue text-align-left f-14">#176254</div>
            <div>15Min ago</div>
          </div>
          <div>
            <div className="txt-grey f-14">Dine In</div>
            <div>Table-14</div>
          </div>
          <div>
            4 Items
          </div>
          <div>
            <button className="p-button bg-orange txt-orange">In Progress</button>
          </div>
          <div><button className="p-button bg-orange txt-orange">Payemnt Pending</button></div>
          </div>
          <div className="d-card space-between align-item-center">
          <div>
            <div className="txt-blue text-align-left f-14">#176254</div>
            <div>15Min ago</div>
          </div>
          <div>
            <div className="txt-grey f-14">Dine In</div>
            <div>Table-14</div>
          </div>
          <div>
            4 Items
          </div>
          <div>
            <button className="p-button bg-orange txt-orange">In Progress</button>
          </div>
          <div><button className="p-button bg-orange txt-orange">Payemnt Pending</button></div>
          </div>

          {/* Phone Card */}
          <div className="p-card">
            <div className="d-flex">
              <div className="flex-1">
                <div className="f-14 txt-blue">#162880</div>
                <div className="txt-black">15 Min ago</div>
              </div>
              <div className="flex-1">
                <div className="f-14 txt-grey">Dine In</div>
                <div className="txt-black">Table-12</div>
              </div>
            </div>
            <br />
            <div className="d-flex">
              <div className="flex-1">4 Items</div>
            </div>
            <br />
            <div className="d-flex g-20">
              <button className="p-button bg-orange txt-orange">In Progress</button>
              <button className="p-button bg-orange txt-orange">Payment pending</button>
            </div>
          </div>
          <div className="p-card">
            <div className="d-flex">
              <div className="flex-1">
                <div className="f-14 txt-blue">#162880</div>
                <div className="txt-black">15 Min ago</div>
              </div>
              <div className="flex-1">
                <div className="f-14 txt-grey">Dine In</div>
                <div className="txt-black">Table-12</div>
              </div>
            </div>
            <br />
            <div className="d-flex">
              <div className="flex-1">4 Items</div>
            </div>
            <br />
            <div className="d-flex g-20">
              <button className="p-button bg-orange txt-orange">In Progress</button>
              <button className="p-button bg-orange txt-orange">Payment pending</button>
            </div>
          </div>
          <div className="p-card">
            <div className="d-flex">
              <div className="flex-1">
                <div className="f-14 txt-blue">#162880</div>
                <div className="txt-black">15 Min ago</div>
              </div>
              <div className="flex-1">
                <div className="f-14 txt-grey">Dine In</div>
                <div className="txt-black">Table-12</div>
              </div>
            </div>
            <br />
            <div className="d-flex">
              <div className="flex-1">4 Items</div>
            </div>
            <br />
            <div className="d-flex g-20">
              <button className="p-button bg-orange txt-orange">In Progress</button>
              <button className="p-button bg-orange txt-orange">Payment pending</button>
            </div>
          </div>
          <div className="p-card">
            <div className="d-flex">
              <div className="flex-1">
                <div className="f-14 txt-blue">#162880</div>
                <div className="txt-black">15 Min ago</div>
              </div>
              <div className="flex-1">
                <div className="f-14 txt-grey">Dine In</div>
                <div className="txt-black">Table-12</div>
              </div>
            </div>
            <br />
            <div className="d-flex">
              <div className="flex-1">4 Items</div>
            </div>
            <br />
            <div className="d-flex g-20">
              <button className="p-button bg-orange txt-orange">In Progress</button>
              <button className="p-button bg-orange txt-orange">Payment pending</button>
            </div>
          </div>

        </div>
        <div className="HOME-container-2-box-right">
        <div className="d-flex space-between align-item-center">
          <div className="f-24">Store View</div>
          </div>
          <br />
          <br />
        <div className="d-flex space-between">
          <div>
            <div className="f-12 txt-grey">Orders Today</div>
            <div className="f-20">78</div>
          </div>
          <div>
            <div className="f-12 txt-grey">Orders Yesterday</div>
            <div className="f-20">78</div>
          </div>
          

          <div>
            {/* Dropdown to select location */}
            <select value={selectedLocation} onChange={handleLocationChange} className="t-box">
              {Object.keys(chartDataMap).map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="d-flex HOME-graph-tooltip">
        {tooltip.visible ? (
  <div className="HOME-graph-tooltip-card">
    <div className="f-16">{tooltip.value} Orders</div>
    <div className="f-16">{tooltip.time}</div>
  </div>
) : (
  <div>&nbsp;</div>
)}
        </div>
  
        <svg width="100%" height="250">
          {/* Draw the horizontal grid lines */}
          {Array.from({ length: 5 }).map((_, index) => (
            <line
              key={index}
              x1="5%"
              y1={index * 50 + 20}
              x2="100%"
              y2={index * 50 + 20}
              stroke="gray"
              strokeWidth="0.5"
            />
          ))}
          {/* Draw the bars */}
          {chartData.map((value, index) => (
            <rect
              key={index}
              x={`${5 + (index * 100) / chartData.length}%`}
              y={220 - scaleY(value)}
              width={`${(barWidth / chartData.length) * 0.8}%`}
              height={scaleY(value)}
              fill="#8d4ac2"
              onMouseOver={(e) => handleMouseOver(e, value, index)}
              onMouseOut={handleMouseOut}
            />
          ))}
          {/* Draw the time labels on the x-axis */}
          {timeIntervals.map((label, index) => {
           const startLabelX = "1%"; // Adjust the percentage as needed
           const endLabelX = "100%";   // Adjust the percentage as needed
           
           return (
             <g className="d-flex space-between">
               <text
                 x={startLabelX}
                 y="240"
                 fontSize="12"
                 textAnchor="start"
                 fill="grey"
               >
                 {startTime}
               </text>
               <text
                 x={endLabelX}
                 y="240"
                 fontSize="12"
                 textAnchor="end"
                 fill="grey"
               >
                 {endTime}
               </text>
             </g>
           );
           
          })}
        </svg>
          
        {/* Tooltip */}
        {/* {tooltip.visible && (
          <div 
          className="f-12"
            style={{
              position: "absolute",
              // left: `${tooltip.x}px`,
              // top: `${tooltip.y}px`, 
              left:'60vw',
              top:'40vw',
              background: "rgba(0, 0, 0, 0.7)",
              color: "white",
              padding: "4px",
              borderRadius: "4px",
            }}
          >
            <div>{tooltip.value} Orders</div>
            <div>{tooltip.time}</div> 
          </div>
        )} */}
        <br />
        <div className="d-flex space-between vxz">
          <div>
            <div className="f-12 txt-grey vxz-1">Total Revenue Today</div>
            <div className="f-20">₹15,578</div>
          </div>
          <div>
            <div className="f-12 txt-grey vxz-1">Total Revenue Yesterday</div>
            <div className="f-20">₹17,200</div>
          </div>
          <div>
            {/* Dropdown to select time interval */}
            <select value={selectedInterval} onChange={handleIntervalChange} className="t-box">
              {timeIntervals.map((interval, index) => (
                <option key={index} value={interval}>
                  {interval}
                </option>
              ))}
            </select>
          </div>
        </div>
        </div>
      </div>
      <div className="HOME-container-3">
        <div className="HOME-container-3-box-left">
        <div className="d-flex space-between align-item-center">
          <div className="f-24">Trending Items</div>
          <div className="f-16 txt-green">{viewAllItems && (<span>View All</span>)}</div>
          </div>
          <br />
          <div className="d-flex space-between HOME-vr">
            <div className="d-flex g-10 align-item-center HOME-cr">
                <div className="HOME-eclipse">
                  <div className="HOME-image-eclipse">
                  <img src="./Images/DeliveyBoyDocuments/2.jpg" alt="Your Image" className="HOME-image-eclipse" />
                  </div>
                </div>
                <div>
                  <div className="d-flex f-16 HOME-ht">Double Cheese Burger Burger Burger Burger Burger Burger Burger Burger  </div>
                  <div className="d-flex f-14 align-item-center"><div className="txt-grey">Order </div><div className="f-8 txt-grey">&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;</div><div className="txt-orange f-14">90</div></div>
                </div>
            </div>
            <div className="d-flex g-10 align-item-center HOME-cr">
                <div className="HOME-eclipse">
                  <div className="HOME-image-eclipse">
                  <img src="./Images/DeliveyBoyDocuments/2.jpg" alt="Your Image" className="HOME-image-eclipse" />
                  </div>
                </div>
                <div>
                  <div className="d-flex f-16 HOME-ht">Double Cheese Burger Double Cheese Burger Burger  </div>
                  <div className="d-flex f-14 align-item-center"><div className="txt-grey">Order </div><div className="f-8 txt-grey">&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;</div><div className="txt-orange f-14">90</div></div>
                </div>
            </div>
          </div>
          <br />
          <div className="d-flex space-between HOME-vr">
            <div className="d-flex g-10 align-item-center HOME-cr">
                <div className="HOME-eclipse">
                  <div className="HOME-image-eclipse">
                  <img src="./Images/DeliveyBoyDocuments/2.jpg" alt="Your Image" className="HOME-image-eclipse" />
                  </div>
                </div>
                <div>
                  <div className="d-flex f-16 HOME-ht">Double Cheese Burger </div>
                  <div className="d-flex f-14 align-item-center"><div className="txt-grey">Order </div><div className="f-8 txt-grey">&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;</div><div className="txt-orange f-14">90</div></div>
                </div>
            </div>
            <div className="d-flex g-10 align-item-center HOME-cr">
                <div className="HOME-eclipse">
                  <div className="HOME-image-eclipse">
                  <img src="./Images/DeliveyBoyDocuments/2.jpg" alt="Your Image" className="HOME-image-eclipse" />
                  </div>
                </div>
                <div>
                  <div className="d-flex f-16 HOME-ht">Double Cheese Burger </div>
                  <div className="d-flex f-14 align-item-center"><div className="txt-grey">Order </div><div className="f-8 txt-grey">&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;</div><div className="txt-orange f-14">90</div></div>
                </div>
            </div>
          </div>
          <br />
          <div className="d-flex space-between HOME-vr">
            <div className="d-flex g-10 align-item-center HOME-cr">
                <div className="HOME-eclipse">
                  <div className="HOME-image-eclipse">
                  <img src="./Images/DeliveyBoyDocuments/2.jpg" alt="Your Image" className="HOME-image-eclipse" />
                  </div>
                </div>
                <div>
                  <div className="d-flex f-16 HOME-ht">Double Cheese Burger </div>
                  <div className="d-flex f-14 align-item-center"><div className="txt-grey">Order </div><div className="f-8 txt-grey">&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;</div><div className="txt-orange f-14">90</div></div>
                </div>
            </div>
            <div className="d-flex g-10 align-item-center HOME-cr">
                <div className="HOME-eclipse">
                  <div className="HOME-image-eclipse">
                  <img src="./Images/DeliveyBoyDocuments/2.jpg" alt="Your Image" className="HOME-image-eclipse" />
                  </div>
                </div>
                <div>
                  <div className="d-flex f-16 HOME-ht">Double Cheese Burger </div>
                  <div className="d-flex f-14 align-item-center"><div className="txt-grey">Order </div><div className="f-8 txt-grey">&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;</div><div className="txt-orange f-14">90</div></div>
                </div>
            </div>
          </div>
          <br />
          <div className="d-flex space-between HOME-vr">
            <div className="d-flex g-10 align-item-center HOME-cr">
                <div className="HOME-eclipse">
                  <div className="HOME-image-eclipse">
                  <img src="./Images/DeliveyBoyDocuments/2.jpg" alt="Your Image" className="HOME-image-eclipse" />
                  </div>
                </div>
                <div>
                  <div className="d-flex f-16 HOME-ht">Double Cheese Burger </div>
                  <div className="d-flex f-14 align-item-center"><div className="txt-grey">Order </div><div className="f-8 txt-grey">&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;</div><div className="txt-orange f-14">90</div></div>
                </div>
            </div>
            <div className="d-flex g-10 align-item-center HOME-cr">
                <div className="HOME-eclipse">
                  <div className="HOME-image-eclipse">
                  <img src="./Images/DeliveyBoyDocuments/2.jpg" alt="Your Image" className="HOME-image-eclipse" />
                  </div>
                </div>
                <div>
                  <div className="d-flex f-16 HOME-ht">Double Cheese Burger </div>
                  <div className="d-flex f-14 align-item-center"><div className="txt-grey">Order </div><div className="f-8 txt-grey">&nbsp;&nbsp;<FontAwesomeIcon icon={faCircle} />&nbsp;&nbsp;</div><div className="txt-orange f-14">90</div></div>
                </div>
            </div>
          </div>
          <br />
          
          
          
          
        </div>
        <div className="HOME-container-3-box-right">
        <div className="d-flex space-between align-item-center">
      <div className="f-24">Sales View</div>
    </div>
    <br />
    <br />
    <div className="d-flex space-between">
      
      <div>
        {/* Dropdown to select location */}
        <select
          value={selectedSalesLocation}
          onChange={handleSalesLocationChange}
          className="t-box"
        >
          {Object.keys(salesChartDataMap).map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
    </div>
    <div className="d-flex HOME-graph-tooltip">
      {salesTooltip.visible ? (
        <div className="HOME-graph-tooltip-card">
          <div className="f-16">{salesTooltip.value} Orders</div>
          <div className="f-16">{salesTooltip.time}</div>
        </div>
      ) : (
        <div>&nbsp;</div>
      )}
    </div>

    <svg width="100%" height="250">
      {/* Draw the horizontal grid lines */}
      {Array.from({ length: 5 }).map((_, index) => (
        <line
          key={index}
          x1="5%"
          y1={index * 50 + 20}
          x2="100%"
          y2={index * 50 + 20}
          stroke="gray"
          strokeWidth="0.5"
        />
      ))}
      {/* Draw the bars */}
      {salesChartData.map((value, index) => (
        <rect
          key={index}
          x={`${5 + (index * 100) / salesChartData.length}%`}
          y={220 - scaleYSales(value)}
          width={`${(salesBarWidth / salesChartData.length) * 0.8}%`}
          height={scaleYSales(value)}
          fill="#8d4ac2"
          onMouseOver={(e) => handleSalesMouseOver(e, value, index)}
          onMouseOut={handleSalesMouseOut}
        />
      ))}
      {/* Draw the time labels on the x-axis */}
      {salesTimeIntervals.map((label, index) => {
        const startLabelX = "1%"; // Adjust the percentage as needed
        const endLabelX = "100%"; // Adjust the percentage as needed

        return (
          <g className="d-flex space-between">
            <text
              x={startLabelX}
              y="240"
              fontSize="12"
              textAnchor="start"
              fill="grey"
            >
              {salesStartTime}
            </text>
            <text
              x={endLabelX}
              y="240"
              fontSize="12"
              textAnchor="end"
              fill="grey"
            >
              {salesEndTime}
            </text>
          </g>
        );
      })}
    </svg>

    <br />
    <div className="d-flex space-between vxz">
      <div>
        <div className="f-12 txt-grey vxz-1">Sales Today</div>
        <div className="f-20">582</div>
      </div>
      <div>
        <div className="f-12 txt-grey vxz-1">Sales Yesterday</div>
        <div className="f-20">789</div>
      </div>
      <div>
        {/* Dropdown to select time interval */}
        <select
          value={selectedSalesInterval}
          onChange={handleSalesIntervalChange}
          className="t-box"
        >
          {salesTimeIntervals.map((interval, index) => (
            <option key={index} value={interval}>
              {interval}
            </option>
          ))}
        </select>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
