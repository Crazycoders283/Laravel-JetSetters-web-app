import { useState } from "react";
import { FaCreditCard, FaUniversity, FaWallet, FaPaypal } from "react-icons/fa";
import "./PaymentPage.css";

const dummyData = {
  fareAmount: "5,615",
  feeInfo: "₹150 Convenience fee included",
  discountMessage: "You saved ₹150 on this booking",
  flightDetails: "Wed, 08 Jan - Akasa Air - QP1405 | 20:30 VTZ → 23:00 DEL (Non-Stop)",
  paypalInfo: "Starting from $50/month",
  paymentOptions: [
    { icon: <FaUniversity />, title: "UPI Options", description: "Pay directly from your bank account" },
    { icon: <FaWallet />, title: "My Wallets", description: "AmazonPay, Mobikwik" },
    { icon: <FaUniversity />, title: "Net Banking", description: "Pay directly from your bank account" },
    { icon: <FaCreditCard />, title: "Credit/Debit/ATM cards", description: "Visa, Mastercard, Amex, Rupay and more" },
    { icon: <FaPaypal />, title: "PayPal", description: "Pay with PayPal" },
  ],
};

const PaymentPage = () => {
  const [selectedEMI, setSelectedEMI] = useState("credit");

  return (
    <div className="container">
      {/* Fare Summary */}
      <div className="card">
        <h2>Fare Summary</h2>
        <p className="price">₹{dummyData.fareAmount}</p>
        <p className="info">({dummyData.feeInfo})</p>
        <div className="discount">✅ {dummyData.discountMessage}</div>
        <hr />
        <h3>Your Flight</h3>
        <p>{dummyData.flightDetails}</p>
      </div>

      {/* Popular EMI Plans */}
      <div className="card">
        <h2>Popular EMI Plans</h2>
        <div className="buttons">
          <button className={selectedEMI === "credit" ? "active" : ""} onClick={() => setSelectedEMI("credit")}>Credit Card</button>
          <button className={selectedEMI === "debit" ? "active" : ""} onClick={() => setSelectedEMI("debit")}>Debit Card</button>
        </div>
        <p className="paypal"><FaPaypal /> {dummyData.paypalInfo}</p>
      </div>

      {/* Other Payment Options */}
      <div className="card">
        <h2>Other Payment Options</h2>
        <div className="options">
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
    <div className="option">
      <div className="icon">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PaymentPage;
