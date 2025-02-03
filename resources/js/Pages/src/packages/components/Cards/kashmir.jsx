import React from "react";
import "../Cards/kashmir.css";  // Make sure to use the updated Kashmir CSS
import maskImage from "../Cards/image 4.png"; // Use the appropriate image path for Kashmir

const kashmirData = [
  { id: 1, image: maskImage, title: "Dal Lake", subtitle: "Srinagar" },
  { id: 2, image: maskImage, title: "Gulmarg", subtitle: "Kashmir" },
  { id: 3, image: maskImage, title: "Sonamarg", subtitle: "Kashmir" },
  { id: 4, image: maskImage, title: "Pahalgam", subtitle: "Kashmir" },
  { id: 5, image: maskImage, title: "Hemis Monastery", subtitle: "Kashmir" },
];

const Kashmir = () => {
  return (
    <div className="kashmir-main-container">
      <h3 className="kashmir-heading">Most Popular Kashmir Destinations</h3>
      <h2 className="kashmir-subhead">Explore Kashmir Packages</h2>
      <div className="kashmir-card-grid">
        {kashmirData.map((card) => (
          <div className="kashmir-card" key={card.id}>
            <div className="kashmir-image-container">
              <img src={card.image} alt={card.title} className="kashmir-card-image" />
              <div className="kashmir-overlay"></div>
              {/* <div className="kashmir-white-box"> */}
                <h3 className="kashmir-card-title">{card.title}</h3>
                {card.subtitle && <p className="kashmir-card-subtitle">{card.subtitle}</p>}
                
            
            </div>

        //   </div>
        ))}
        <h2 className="kashmir-footer">sahith</h2>
        <h2 className="kashmir-footer">sahith</h2>
        <h2 className="kashmir-footer">sahith</h2>
        <h2 className="kashmir-footer">sahith</h2>
        <h2 className="kashmir-footer">sahith</h2>
      </div>
    </div>
  );
};

export default Kashmir;
