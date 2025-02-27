import React, { useState } from "react";
import { FaCreditCard, FaUniversity, FaWallet, FaPaypal, FaMobileAlt, FaChevronRight } from "react-icons/fa";
import "./PaymentPage.css";

const dummyData = {
  fareAmount: "5,615",
  feeInfo: "₹150 Convenience fee included",
  discountMessage: "🤩Yay! You saved ₹150 on this booking",
  flightDetails: "Wed, 08 Jan - Akasa Air - QP1405 | 20:30 VTZ → 23:00 DEL (Non-Stop)",
  paypalInfo: "Starting from $50/month",
  paymentOptions: [
    { icon: <FaMobileAlt />, title: "UPI Options", description: "Pay directly from your bank account" },
    { icon: <FaWallet />, title: "My Wallets", description: "AmazonPay, Mobikwik" },
    { icon: <FaUniversity />, title: "Net Banking", description: "Pay directly from your bank account" },
    { icon: <FaCreditCard />, title: "Credit/Debit/ATM cards", description: "Visa, Mastercard, Amex, Rupay and more" },
    { icon: <FaPaypal />, title: "PayPal", description: "Pay with PayPal" },
  ],
};

const PaymentPage = () => {
  const [selectedEMI, setSelectedEMI] = useState("credit");

  return (
    <div className="payment-container">
      {/* Fare Summary */}
      <div className="fare-summary">
        <h2>Fare Summary</h2>
        <div className="fare-amount-container">
          <span>Amount To Be Paid</span>
          <span className="fare-amount">₹{dummyData.fareAmount}</span>
        </div>
        <p className="discount">{dummyData.discountMessage}</p>
        <h3>Your Flight</h3>
        <div className="flight-details-container">
          <img src="https://storage.googleapis.com/a1aa/image/AraC2XLIMRv8DWuqguZhejNEOzUqJ5D8rJWCbtT1ARE.jpg" alt="Airline Logo" className="airline-logo" />
          <div>
            <p className="flight-details">{dummyData.flightDetails}</p>
          </div>
        </div>
        <h3>Travellers</h3>
        <p className="traveller-details">1. Mr Chaitanya Seepana</p>
        <h3>100% Safe Payment Process</h3>
        <div className="payment-logos">
          <img src="https://storage.googleapis.com/a1aa/image/12Z6ExuHbVLw9-ukB1U3jwhKumJm5L75PevuBaEbhpo.jpg" alt="Visa Logo" className="payment-logo" />
          <img src="https://storage.googleapis.com/a1aa/image/8V7IUSMquw-kpXF5KA3Q4QSWdjfEpYHPVQ64KMpYUNk.jpg" alt="Safe Key Logo" className="payment-logo" />
          <img src="https://storage.googleapis.com/a1aa/image/mAJaFptogQ7aWgXfrD0eIpqm-gvrsoz3pnQ0oNnfE88.jpg" alt="MasterCard Logo" className="payment-logo" />
          <img src="https://storage.googleapis.com/a1aa/image/sKfsxrlz1UwbZst19QBvcS2yyMcJS85ahJ8dlPLW27I.jpg" alt="RuPay Logo" className="payment-logo" />
          <img src="https://storage.googleapis.com/a1aa/image/W3-JMy2ULwFARcVSFBf9veqNzY9eVmfcZmBe4LpHRZA.jpg" alt="PayPal Logo" className="payment-logo" />
        </div>
      </div>

      {/* Popular EMI Plans */}
      <div className="emi-plans">
        <h2>Popular EMI Plans</h2>
        <div className="emi-options">
          <button className={selectedEMI === "credit" ? "selected" : ""} onClick={() => setSelectedEMI("credit")}>Credit Card</button>
          <button className={selectedEMI === "debit" ? "selected" : ""} onClick={() => setSelectedEMI("debit")}>Debit Card</button>
        </div>
        <p className="paypal"><FaPaypal /> {dummyData.paypalInfo}</p>
      </div>

      {/* Other Payment Options */}
      <div className="payment-options">
        <h2>Other Payment Options</h2>
        <div className="options-list">
          {dummyData.paymentOptions.map((option, index) => (
            <PaymentOption key={index} icon={option.icon} title={option.title} description={option.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PaymentOption = ({ icon, title, description }) => {
  return (
    <div className="payment-option">
      <div className="icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <FaChevronRight className="chevron-icon" />
    </div>
  );
};

export default function FlightExploreMore() {
  return <PaymentPage />;
}