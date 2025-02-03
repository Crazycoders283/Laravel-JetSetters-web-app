import React from "react";
import "../Cards/card.css";
import maskImage from "../Cards/image 4.png";
import "../Cards/europe";
import { Head, Link, useForm } from "@inertiajs/react";

const cardsData = [
  {
    id: 1,
    image: maskImage,
    title: "Bruj Khalifa",
    subtitle:"Dubai",
  },
  {
    id: 2,
    image: maskImage,
    title: "Burj al Arab",
    subtitle: "Dubai",
  },
  {
    id: 3,
    image: maskImage,
    title: "Safari",
    subtitle: "Dubai",
  },
  {
    id: 4,
    image: maskImage,
    title: "Safari",
    subtitle: "Dubai",
  },
];

const App = () => {
  return (
    <div className="main-container">
      <div className="card-grid">
        {cardsData.map((card) => (
          <div className="card" key={card.id}>
            <div className="image-container">
              <img src={card.image} alt={card.title} className="card-image" />
              <div className="overlay"></div> {/* Semi-transparent layer */}
              <div className="white-box">
                <h3 className="card-title">{card.title}</h3>
                {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>} {/* Display subtitle if available */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
