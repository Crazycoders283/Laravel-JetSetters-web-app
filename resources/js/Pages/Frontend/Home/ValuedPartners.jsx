import React from "react";
import "./ValuedPartners.css";

const ValuedPartners = () => {
  return (
    <div className="outer-container">
      <h2 className="header">Valued Partners</h2>
      <div className="inner-container">
        <div className="partners">
          <img
            src="https://via.placeholder.com/150x50?text=Diners+Club"
            alt="Diners Club"
            className="partner-logo"
          />
          <img
            src="https://via.placeholder.com/150x50?text=American+Express"
            alt="American Express"
            className="partner-logo"
          />
          <img
            src="https://via.placeholder.com/150x50?text=Discover"
            alt="Discover"
            className="partner-logo"
          />
          <img
            src="https://via.placeholder.com/150x50?text=ARC"
            alt="ARC"
            className="partner-logo"
          />
          <img
            src="https://via.placeholder.com/150x50?text=UATP"
            alt="UATP"
            className="partner-logo"
          />
          <img
            src="https://via.placeholder.com/150x50?text=Mastercard"
            alt="Mastercard"
            className="partner-logo"
          />
          <img
            src="https://via.placeholder.com/150x50?text=VISA"
            alt="VISA"
            className="partner-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default ValuedPartners;
