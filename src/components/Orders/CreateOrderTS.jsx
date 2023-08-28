import React, { useState } from "react";
import "./CreateOrderTS.css";
const CreateOrderTS = () => {
  const goBack = () => {
    window.history.back();
  };
    // Order Type
    const [activeTab, setActiveTab] = useState("online"); // Set 'Items' as the default active tab

    const handleTabClick = (tab) => {
      setActiveTab(tab);
    };
  
  return (
    <div className="TS-open">
      <div className="TS-top grid-2">
        <div className="d-flex g-40">
        <button onClick={goBack}>Go Back</button>
        <div className="d-flex g-10">
          <img src="kb_logo.png" alt="" width={"45px"} height={"45px"} />

          <p className="f-18" style={{marginTop: "10px" }}>Knight Bite</p>
        </div>
      </div>
      <div
                style={{
                  display: "flex",
                  gap: "10px",
                  marginLeft: "20px",
                }}
              >
                <button
                  className={
                    activeTab === "online" ? "active-filter" : "filter-button"
                  }
                  onClick={() => handleTabClick("online")}
                >
                  Online
                </button>
                <button
                  className={
                    activeTab === "pickup" ? "active-filter" : "filter-button"
                  }
                  onClick={() => handleTabClick("pickup")}
                >
                  Pickup
                </button>
                <button
                  className={
                    activeTab === "table" ? "active-filter" : "filter-button"
                  }
                  onClick={() => handleTabClick("table")}
                >
                  Table
                </button>
              </div>
      </div>
    </div>
  );
};

export default CreateOrderTS;
