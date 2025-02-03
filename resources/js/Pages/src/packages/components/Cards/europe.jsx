import React from "react";
import "../Cards/europe.css";
import maskImage from "../Cards/image 4.png";

const europeData = [
  { id: 1, image: maskImage, title: "Burj Khalifa", subtitle: "Dubai" },
  { id: 2, image: maskImage, title: "Burj al Arab", subtitle: "Dubai" },
  { id: 3, image: maskImage, title: "Safari", subtitle: "Dubai" },
  { id: 4, image: maskImage, title: "Sahith", subtitle: "Dubai" },
  { id: 4, image: maskImage, title: "Sahith", subtitle: "Dubai" },
  
];

const Europe = () => {
  return (
    <div className="europe-main-container">
      <h3 className="europe-heading">Most Popular Choices for favourites</h3>
      <h2 className="europe-subhead">Europe  packages</h2>
      <div className="europe-card-grid">
        {europeData.map((card) => (
          <div className="europe-card" key={card.id}>
            <div className="europe-image-container">
              <img src={card.image} alt={card.title} className="europe-card-image" />
              <div className="europe-overlay"></div>
              <div className="europe-white-box">
                <h3 className="europe-card-title">{card.title}</h3>
                {card.subtitle && <p className="europe-card-subtitle">{card.subtitle}</p>}
              </div>
            </div>
           
          </div>
          
        ))}
        <h2 className="europe-footer">Europe</h2>
        <h2 className="europe-footer">Italy</h2>
        <h2 className="europe-footer">London</h2>
        <h2 className="europe-footer">Spain</h2>
        <h2 className="europe-footer">Paris</h2>

      </div>
    </div>
  );
};

export default Europe;
