import React from "react";
import "../Cards/bhutan.css";
import maskImage from "../Cards/image 4.png";

const bhutanData = [
  { id: 1, image: maskImage, title: "Tiger’s Nest", subtitle: "Paro" },
  { id: 2, image: maskImage, title: "Punakha Dzong", subtitle: "Punakha" },
  { id: 3, image: maskImage, title: "Buddha Dordenma", subtitle: "Thimphu" },
  { id: 4, image: maskImage, title: "Dochula Pass", subtitle: "Thimphu" },
];

const Bhutan = () => {
  return (
    <div className="bhutan-main-container">
      <h2 className="bhutan-heading">Explore Bhutan</h2>
      <h3 className="bhutan-subhead">Explore Our Packages of Bhutan</h3>
      <div className="bhutan-card-grid">
        {bhutanData.map((card) => (
          <div className="bhutan-card" key={card.id}>
            <div className="bhutan-image-container">
              <img src={card.image} alt={card.title} className="bhutan-card-image" />
              <div className="bhutan-overlay"></div>
              <div className="bhutan-white-box">
                <h3 className="bhutan-card-title">{card.title}</h3>
                {card.subtitle && <p className="bhutan-card-subtitle">{card.subtitle}</p>}
              </div>
            </div>
            <p className="bhutan-kumar-text">Explore More</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bhutan;
