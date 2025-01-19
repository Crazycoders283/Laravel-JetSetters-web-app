import React from "react";
import "./CruiseDeals.css";

const CruiseDeals = () => {
  return (
    <div className="cruise-deals">
      <div className="cruise-deals-content">
        <h1>Get Cruise Deals Directly in Your Inbox</h1>
        <p>Sign up to get exclusive offers, discounts, and cruise tips straight to your inbox!</p>
        <div className="email-input-container">
          <input
            type="email"
            className="email-input"
            placeholder="Enter Your Email Address"
          />
          <button className="email-submit-btn">
            <img
              src="/path/to/send-icon.png"
              alt="Send"
              className="send-icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CruiseDeals;
