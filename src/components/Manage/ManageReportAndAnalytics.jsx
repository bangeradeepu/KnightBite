import React, { useState,useEffect } from "react";
import "./ManageReportAndAnalytics.css";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const ManageReportAndAnalytics = () => {
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
    const startMinuteFormatted = startMinuteWithinHour
      .toString()
      .padStart(2, "0");
    const endMinuteFormatted = endMinuteWithinHour.toString().padStart(2, "0");

    // Determine AM or PM
    const ampm =
      parseInt(startHour) + Math.floor(startMinuteWithinHour / 60) < 12
        ? "AM"
        : "PM";

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

  // Donut chart
  // Sample data
  const data = [
    { name: "Completed Orders", value: 40, color: "green" },
    { name: "Canceled Orders", value: 20, color: "red" },
    { name: "NCKOT Orders", value: 10, color: "orange" },
    { name: "Completed order W/O Discount", value: 30, color: "blue" },
  ];
  const data2 = [
    { name: "Completed Orders", value: 40, color: "green" },
    { name: "Canceled Orders", value: 60, color: "red" },

  ];

const a1 = 250;
const b1 = 500;
// To make graph responsive
const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [innerRadius, setInnerRadius] = useState('60'); 
  const [outerRadius, setOuterRadius] = useState('100'); 
  const [cy, setCy] = useState('20%');

  // Function to update window width
  const updateWindowWidth = () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);

    if (newWidth < 1010) {
      setCy('14%');   
      setInnerRadius(30);    
      setOuterRadius(60);        
    } else if (newWidth < 1117) {
      setCy('15%');          
      setInnerRadius(40);    
      setOuterRadius(70);    
    } else if (newWidth < 1285) {
      setCy('16%');     
      setInnerRadius(50);    
      setOuterRadius(80);     
    } else if (newWidth < 1295) {
      setCy('18%');     
      setInnerRadius(60);    
      setOuterRadius(90);     
    } else {
      setCy('20%');     
      setInnerRadius(60);    
      setOuterRadius(100);     
    }
  };

  // Add event listener to update window width when the window is resized
  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);
  // Custom colors
  const colors = ["#589067", "#ED6F6F", "#EDAE75", "#6EA6B8"];
  return (
    <div className="ManageReportAndAnalytics">
      <div className="MRAA-desktop r-f-12">
        <div className="MRAA-layer">
          <div className="d-flex space-between align-item-center">
            <div className="r-f-18 f-w-600">Report / Ananlytics</div>
            <div className="d-flex g-20 align-item-center">
              <div className="MRAA-fetch-date-out-layer d-flex align-item-center">
                <div className="MRAA-fetch-date-title">From</div>
                <input type="date" name="" id="" className="MRAA-fetch-date" />
              </div>
              <div className="MRAA-fetch-date-out-layer d-flex align-item-center">
                <div className="MRAA-fetch-date-title">To</div>
                <input type="date" name="" id="" className="MRAA-fetch-date" />
              </div>
              <div className="MRAA-fetch-btn r-f-10 c-pointer">Fetch</div>
              <div></div>
              <div className="MRAA-export-btn r-f-10 c-pointer">Export</div>
            </div>
          </div>
          <div className="d-flex space-between mt-5">
            <div>
              <div className="d-flex g-10">
                <div className="MRAA-shape MRAA-green-bg d-flex space-between flex-column">
                  <div className="MRAA-green-txt r-f-12 f-w-600">
                    Reveue on Completed Orders
                  </div>
                  <div className="MRAA-green-txt r-f-20 f-w-800">
                    ₹39,000.00
                  </div>
                </div>
                <div className="MRAA-shape MRAA-blue-bg d-flex space-between flex-column">
                  <div className="MRAA-blue-txt r-f-12 f-w-600">
                    Reveue on Completed Orders W/O Discount
                  </div>
                  <div className="MRAA-blue-txt r-f-20 f-w-800">₹39,000.00</div>
                </div>
              </div>
              <div className="d-flex g-10 mt-1">
                <div className="MRAA-shape MRAA-red-bg d-flex space-between flex-column">
                  <div className="MRAA-red-txt r-f-12 f-w-600">
                    Canceled Revenue
                  </div>
                  <div className="MRAA-red-txt r-f-20 f-w-800">₹39,000.00</div>
                </div>
                <div className="MRAA-shape MRAA-orange-bg d-flex space-between flex-column">
                  <div className="MRAA-orange-txt r-f-12 f-w-600">
                    NCKOT Revenue
                  </div>
                  <div className="MRAA-orange-txt r-f-20 f-w-800">
                    ₹39,000.00
                  </div>
                </div>
              </div>
            </div>

            <div className="MRAA-shape-large MRAA-lightBrowm-bg">
              <div className="d-flex">
                <div className="mt-1">
                  <PieChart width={a1} height={b1}>
                    <Pie
                      data={data}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy={cy}
                      innerRadius={innerRadius}
                      outerRadius={outerRadius}
                      fill="#8884d8"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % colors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>

                <div>
                  {data.map((item, index) => (
                    <div className="d-flex g-10 mt-1" key={index}>
                      <div
                        className={`MRAA-circel-shape MRAA-${item.color}-lable mt-1`}
                      ></div>
                      <div>
                        <div className="r-f-16">{item.value}%</div>
                        <div className="r-f-8 txt-dark-grey">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 d-flex space-between">
            <div className="MRAA-shape-large-4 bg-white">
              <div className="d-flex flex-end">
                <div className="MRAA-export-small-btn r-f-8 c-pointer">
                  Export
                </div>
              </div>
              <div className="d-flex flex-column mt-2">
                <div className="d-flex space-between">
                  <div className="flex-1">
                    <div className="r-f-12">Orders Handled</div>
                    <div className="r-f-24 f-w-700">36</div>
                  </div>
                  <div className="flex-1 MRAA-green-txt">
                    <div className="r-f-12">Orders Completed</div>
                    <div className="r-f-24 f-w-700">36</div>
                  </div>
                </div>
                <div className="d-flex space-between mt-5">
                  <div className="flex-1 MRAA-red-txt">
                    <div className="r-f-12">Orders Canceled</div>
                    <div className="r-f-24 f-w-700">36</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="MRAA-shape-large-4 bg-white">
              <div className="d-flex flex-end">
              <div className="MRAA-export-small-btn r-f-8 c-pointer">Export</div>
              </div>
            <div className="d-flex">
                <div className="">
                  <PieChart width={a1} height={b1}>
                    <Pie
                      data={data2}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy={cy}
                      innerRadius={innerRadius}
                      outerRadius={outerRadius}
                      fill="#8884d8"
                    >
                      {data2.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % colors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>

                <div className="mt-6">
                  {data2.map((item, index) => (
                    <div className="d-flex g-10 mt-1" key={index}>
                      <div
                        className={`MRAA-circel-shape MRAA-${item.color}-lable mt-1`}
                      ></div>
                      <div>
                        <div className="r-f-16">{item.value}%</div>
                        <div className="r-f-8 txt-dark-grey">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex space-between">
            <div className="MRAA-graph-box mt-5">
              <div className="d-flex space-between align-item-center">
                <div className="r-f-16">Store View</div>
                <div className="MRAA-export-small-btn r-f-8 c-pointer">
                  Export
                </div>
              </div>
              <div className="d-flex space-between mt-1">
                <div>
                  <div className="r-f-8 txt-grey">Orders Today</div>
                  <div className="r-f-14">78</div>
                </div>
                <div>
                  <div className="r-f-8 txt-grey">Orders Yesterday</div>
                  <div className="r-f-14">78</div>
                </div>

                <div>
                  {/* Dropdown to select location */}
                  <select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="MRAA-grapg-dd"
                  >
                    {Object.keys(chartDataMap).map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="d-flex MRAA-graph-tooltip">
                {tooltip.visible ? (
                  <div className="MRAA-graph-tooltip-card">
                    <div className="r-f-10">{tooltip.value} Orders</div>
                    <div className="r-f-10">{tooltip.time}</div>
                  </div>
                ) : (
                  <div>&nbsp;</div>
                )}
              </div>

              <svg width="100%" height="250" className="mb-1">
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
                  <div className="r-f-8 txt-grey vxz-1">
                    Total Revenue Today
                  </div>
                  <div className="r-f-14">₹15,578</div>
                </div>
                <div>
                  <div className="r-f-8 txt-grey vxz-1">
                    Total Revenue Yesterday
                  </div>
                  <div className="r-f-14">₹17,200</div>
                </div>
                <div>
                  {/* Dropdown to select time interval */}
                  <select
                    value={selectedInterval}
                    onChange={handleIntervalChange}
                    className="MRAA-grapg-dd"
                  >
                    {timeIntervals.map((interval, index) => (
                      <option key={index} value={interval}>
                        {interval}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="MRAA-graph-box mt-5">
              <div className="d-flex space-between align-item-center">
                <div className="r-f-16">Store View</div>
                <div className="MRAA-export-small-btn r-f-8 c-pointer">
                  Export
                </div>
              </div>
              <div className="d-flex space-between mt-1">
                <div>
                  <div className="r-f-8 txt-grey">Orders Today</div>
                  <div className="r-f-14">78</div>
                </div>
                <div>
                  <div className="r-f-8 txt-grey">Orders Yesterday</div>
                  <div className="r-f-14">78</div>
                </div>

                <div>
                  {/* Dropdown to select location */}
                  <select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="MRAA-grapg-dd"
                  >
                    {Object.keys(chartDataMap).map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="d-flex MRAA-graph-tooltip">
                {tooltip.visible ? (
                  <div className="MRAA-graph-tooltip-card">
                    <div className="r-f-10">{tooltip.value} Orders</div>
                    <div className="r-f-10">{tooltip.time}</div>
                  </div>
                ) : (
                  <div>&nbsp;</div>
                )}
              </div>

              <svg width="100%" height="250" className="mb-1">
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
                  <div className="r-f-8 txt-grey vxz-1">
                    Total Revenue Today
                  </div>
                  <div className="r-f-14">₹15,578</div>
                </div>
                <div>
                  <div className="r-f-8 txt-grey vxz-1">
                    Total Revenue Yesterday
                  </div>
                  <div className="r-f-14">₹17,200</div>
                </div>
                <div>
                  {/* Dropdown to select time interval */}
                  <select
                    value={selectedInterval}
                    onChange={handleIntervalChange}
                    className="MRAA-grapg-dd"
                  >
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
        </div>
      </div>
      <div className="MRAA-mobile r-f-12">
      <div className="p-top-container">
          <div className="mt-1 mb-1 f-w-600">Report / Ananlytics</div>
        </div>
        <div className="ADD-p-position">
          <div className="ADD-p-container">
            <div className="d-flex flex-end">
                <div className="MRAA-export-btn r-f-10">Export</div>
            </div>
            <div className="d-flex g-10">
            <div className="MRAA-fetch-date-out-layer d-flex align-item-center mt-2">
                <div className="MRAA-fetch-date-title-left">
                  <div className="r-f-8">From</div>
                  <div><input type="date" name="" id="" className="MRAA-fetch-date" /></div>
                </div>
                <div className="MRAA-fetch-date-title-right">
                  <div className="r-f-8">From</div>
                  <div><input type="date" name="" id="" className="MRAA-fetch-date" /></div>
                </div>
                <div className="MRAA-fetch-btn-p r-f-10 c-pointer">Fetch</div>
              </div>
            </div>
            <div className="d-flex">
           
            </div>
            <div className="MRAA-shape MRAA-green-bg d-flex space-between flex-column mt-2">
                  <div className="MRAA-green-txt r-f-12 f-w-600">
                    Reveue on Completed Orders
                  </div>
                  <div className="MRAA-green-txt r-f-20-p f-w-800">
                    ₹39,000.00
                  </div>
                </div>
                <div className="MRAA-shape MRAA-blue-bg d-flex space-between flex-column mt-2">
                  <div className="MRAA-blue-txt r-f-12 f-w-600">
                    Reveue on Completed Orders W/O Discount
                  </div>
                  <div className="MRAA-blue-txt r-f-20-p f-w-800">₹39,000.00</div>
                </div>
                <div className="MRAA-shape MRAA-red-bg d-flex space-between flex-column mt-2">
                  <div className="MRAA-red-txt r-f-12 f-w-600">
                    Canceled Revenue
                  </div>
                  <div className="MRAA-red-txt r-f-20-p f-w-800">₹39,000.00</div>
                </div>
                <div className="MRAA-shape MRAA-orange-bg d-flex space-between flex-column mt-2">
                  <div className="MRAA-orange-txt r-f-12 f-w-600">
                    NCKOT Revenue
                  </div>
                  <div className="MRAA-orange-txt r-f-20-p f-w-800">
                    ₹39,000.00
                  </div>
                </div>
                
            <div className="MRAA-shape-large MRAA-lightBrowm-bg mt-2">
              <div className="d-flex" style={{height:'33vh'}}>
                <div className="mt-1">
                <PieChart width={330} height={b1}>
                    <Pie
                      data={data}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="25%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % colors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>

                <div>
                
                </div>
              </div>
              <div>
                  {data.map((item, index) => (
                    <div className="d-flex g-10 mt-1" style={{padding:'0vw 3vw'}} key={index}>
                      <div
                        className={`MRAA-circel-shape MRAA-${item.color}-lable mt-1`}
                      ></div>
                      <div>
                        <div className="r-f-20">{item.value}%</div>
                        <div className="r-f-10 txt-dark-grey">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <br />
            </div>
            <div className="MRAA-shape-large bg-white mt-2">
              <div className="d-flex flex-end">
                <div className="MRAA-export-btn r-f-8 c-pointer">
                  Export
                </div>
              </div>
              <div className="d-flex flex-column mt-2">
                <div className="d-flex space-between">
                  <div className="flex-1">
                    <div className="r-f-12">Orders Handled</div>
                    <div className="r-f-20-p f-w-700">36</div>
                  </div>
                  <div className="flex-1 MRAA-green-txt">
                    <div className="r-f-12">Orders Completed</div>
                    <div className="r-f-20-p f-w-700">36</div>
                  </div>
                </div>
                <div className="d-flex space-between mt-5">
                  <div className="flex-1 MRAA-red-txt">
                    <div className="r-f-12">Orders Canceled</div>
                    <div className="r-f-20-p f-w-700">36</div>
                  </div>
                </div>
                <br />
              </div>
            </div>
            <div className="MRAA-shape-large bg-white mt-2">
              <div className="d-flex" style={{height:'33vh'}}>
                <div className="mt-1">
                <PieChart width={330} height={b1}>
                    <Pie
                      data={data2}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="25%"
                      innerRadius={60}
                      outerRadius={100}
                      fill="#8884d8"
                    >
                      {data2.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={colors[index % colors.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </div>

                <div>
                
                </div>
              </div>
              <div>
                  {data2.map((item, index) => (
                    <div className="d-flex g-10 mt-1" style={{padding:'0vw 3vw'}} key={index}>
                      <div
                        className={`MRAA-circel-shape MRAA-${item.color}-lable mt-1`}
                      ></div>
                      <div>
                        <div className="r-f-20">{item.value}%</div>
                        <div className="r-f-10 txt-dark-grey">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <br />
            </div>
            <div className="MRAA-graph-box mt-3">
              <div className="d-flex space-between align-item-center">
                <div className="r-f-20">Store View</div>
                <div className="MRAA-export-btn r-f-8 c-pointer">
                  Export
                </div>
              </div>
              <div className="d-flex space-between mt-1">
                <div>
                  <div className="r-f-8 txt-grey">Orders Today</div>
                  <div className="r-f-14">78</div>
                </div>
                <div>
                  <div className="r-f-8 txt-grey">Orders Yesterday</div>
                  <div className="r-f-14">78</div>
                </div>

                <div>
                  {/* Dropdown to select location */}
                  <select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="MRAA-grapg-dd"
                  >
                    {Object.keys(chartDataMap).map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="d-flex MRAA-graph-tooltip">
                {tooltip.visible ? (
                  <div className="MRAA-graph-tooltip-card">
                    <div className="r-f-10">{tooltip.value} Orders</div>
                    <div className="r-f-10">{tooltip.time}</div>
                  </div>
                ) : (
                  <div>&nbsp;</div>
                )}
              </div>

              <svg width="100%" height="250" className="mb-1">
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
                  <div className="r-f-8 txt-grey vxz-1">
                    Total Revenue Today
                  </div>
                  <div className="r-f-14">₹15,578</div>
                </div>
                <div>
                  <div className="r-f-8 txt-grey vxz-1">
                    Total Revenue Yesterday
                  </div>
                  <div className="r-f-14">₹17,200</div>
                </div>
                <div>
                  {/* Dropdown to select time interval */}
                  <select
                    value={selectedInterval}
                    onChange={handleIntervalChange}
                    className="MRAA-grapg-dd"
                  >
                    {timeIntervals.map((interval, index) => (
                      <option key={index} value={interval}>
                        {interval}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="MRAA-graph-box mt-3">
              <div className="d-flex space-between align-item-center">
                <div className="r-f-20">Store View</div>
                <div className="MRAA-export-btn r-f-8 c-pointer">
                  Export
                </div>
              </div>
              <div className="d-flex space-between mt-1">
                <div>
                  <div className="r-f-8 txt-grey">Orders Today</div>
                  <div className="r-f-14">78</div>
                </div>
                <div>
                  <div className="r-f-8 txt-grey">Orders Yesterday</div>
                  <div className="r-f-14">78</div>
                </div>

                <div>
                  {/* Dropdown to select location */}
                  <select
                    value={selectedLocation}
                    onChange={handleLocationChange}
                    className="MRAA-grapg-dd"
                  >
                    {Object.keys(chartDataMap).map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="d-flex MRAA-graph-tooltip">
                {tooltip.visible ? (
                  <div className="MRAA-graph-tooltip-card">
                    <div className="r-f-10">{tooltip.value} Orders</div>
                    <div className="r-f-10">{tooltip.time}</div>
                  </div>
                ) : (
                  <div>&nbsp;</div>
                )}
              </div>

              <svg width="100%" height="250" className="mb-1">
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
                  <div className="r-f-8 txt-grey vxz-1">
                    Total Revenue Today
                  </div>
                  <div className="r-f-14">₹15,578</div>
                </div>
                <div>
                  <div className="r-f-8 txt-grey vxz-1">
                    Total Revenue Yesterday
                  </div>
                  <div className="r-f-14">₹17,200</div>
                </div>
                <div>
                  {/* Dropdown to select time interval */}
                  <select
                    value={selectedInterval}
                    onChange={handleIntervalChange}
                    className="MRAA-grapg-dd"
                  >
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
            </div>
      </div>
    </div>
  );
};

export default ManageReportAndAnalytics;
