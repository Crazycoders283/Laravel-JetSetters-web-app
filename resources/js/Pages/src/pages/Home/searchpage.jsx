import React, { useState, useEffect } from "react";

import { Head, Link, useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { Ship } from "lucide-react";
import "../Home/searchpage.css";
import Search from "../Home/search"; // Corrected import for the search component

// Dummy data with five cruise packages

// Cruise Package Card Component
const CruisePackageCard = ({ cruise }) => {
  return (
    <div className="cruise-card">
      <Head title="Search" />
      <div className="cruise-card-image">
        <img src={cruise.image} alt={cruise.title} className="image" />
      </div>
      <div className="cruise-card-content">
        <h1 className="cruise-title">{cruise.title}</h1>
        <h2 className="cruise-ship">{cruise.ship}</h2>
        <p className="cruise-info">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>Departing: </span>
          {cruise.departure}
        </p>
        <p className="cruise-info">
          <Ship className="icon" /> <span>Ports of call: </span>
          {cruise.ports}
        </p>
        <p className="cruise-info">
          <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          <span>Sailing Dates: </span>
          {cruise.dates}
        </p>
        <button className="view-itinerary-btn"><Link href={route('itinerary_view', { id: cruise.id })}>View Itinerary</Link></button>
      </div>
    </div>
  );
};

// Main App Component
const App = ({booking_data}) => {
  const [cruises, setCruises] = useState(booking_data || []);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/cruises")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch cruises");
        }
        return response.json();
      })
      .then((data) => {
        setCruises(data);
      })
      .catch((error) => {
        console.error(error);
        setCruises(booking_data); // Fallback to dummy data
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="app">
      {/* Render the search component */}
      <div className="search-section">
        <Search />
      </div>
      {/* Display cruise cards */}
      <div className="cruise-container">
        {cruises.map((cruise) => (
          <CruisePackageCard key={cruise.id} cruise={cruise} />
        ))}
      </div>
    </div>
  );
};

export default App;
