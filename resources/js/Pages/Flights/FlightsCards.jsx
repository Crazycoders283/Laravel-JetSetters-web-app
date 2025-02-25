import React from "react";
import "../Flights/Flightcard.css";
import maskImage from "resources\js\Pages\src\packages\components\Cards\image4.png";
import "../Cards/europe";
import { Head, Link, useForm } from "@inertiajs/react";
import ValuedPartners from "resources\js\Pages\src\pages\Home\ValuedPartners.jsx";
import Header from "resources\js\Pages\src\components\Common\Footer";
import Footer from "resources\js\Pages\src\components\Common\Header";
// >>>>>>> 32aa14a77559668a6dead586f7df4d111f575ca3

const cardsData = [
  {
    id: 1,
    image: maskImage,
    title: "Burj Khalifa",
    subtitle: "Dubai",
  },
  {
    id: 2,
    image: maskImage,
    title: "Burj Al Arab",
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
                {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>

        
    </div>
  );
};

export default App;
