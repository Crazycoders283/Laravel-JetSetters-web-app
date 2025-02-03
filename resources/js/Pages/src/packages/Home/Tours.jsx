/*import React, { useState, useEffect } from "react";
import ItineraryReviewsPage from "./ItineraryReviewsPage"; // Import your existing component
import "../styles/Tour.css"; // Existing CSS for the Tours page

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyData = [
    {
      departure: "Miami",
      destination: "Florida",
      duration: "2N/3D",
      embarkation: "Jan 13th, 4:30 PM",
      disembarkation: "Jan 17th, 7:30 PM",
      ports: ["Miami", "Florida"],
      price: 200,
      days: [
        {
          dayNumber: 1,
          title: "Miami Port",
          subtitle: "WELCOME ONBOARD",
          description:
            "Just as you step aboard the Empress—the top cruise in India—also known as 'A City on the Sea,' you'll be greeted with a warm welcome. Once settled, dive right in and explore the many offerings lined up for you aboard our cruise ship.",
        },
        {
          dayNumber: 2,
          title: "At Sea",
          subtitle: "DAY AT SEA",
          description:
            "Enjoy the day with luxurious amenities and endless ocean views as you sail to your destination.",
        },
        {
          dayNumber: 3,
          title: "Florida Port",
          subtitle: "ARRIVED IN FLORIDA",
          description:
            "Dock at Florida Port and explore beautiful beaches, unique attractions, and vibrant culture.",
        },
      ],
    },
  ];

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("https://api.example.com/tours");
        if (!response.ok) throw new Error("Failed to fetch tours data");
        const data = await response.json();
        setTours(data);
      } catch (error) {
        setError(error.message);
        setTours(dummyData);
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="tours-page">
      <h1 className="page-title">Our Tours</h1>
      {error && <p className="error">Error: {error}</p>}
      {tours.map((tour, index) => (
        <div key={index} className="tour-container">
          <div className="details-container">
            <div className="details">
              <h2 className="title">
                {tour.departure} &raquo; {tour.destination}{" "}
                <span className="duration">{tour.duration}</span>
              </h2>
              <p className="details-text">
                <strong>🛳 Embarkation:</strong> {tour.embarkation}
              </p>
              <p className="details-text">
                <strong>⛴ Disembarkation:</strong> {tour.disembarkation}
              </p>
              <p className="details-text">
                <strong>Visiting Ports:</strong> {tour.ports.join(" | ")}
              </p>
            </div>
            <div className="pricing">
              <p className="price-label">Starting from</p>
              <p className="price">${tour.price}</p>
              <p className="tax-info">
                Excl. Tax Per Person in Double Occupancy
              </p>
              <button className="book-now-btn">BOOK NOW</button>
            </div>
          </div>
          <div className="itinerary-container">
            <h3 className="itinerary-title">Itinerary</h3>
            <p className="itinerary-description">Day wise details of your package</p>
            {tour.days.map((day, i) => (
              <div key={i} className="day-card">
                <div className="day-number">Day {day.dayNumber}</div>
                <div className="day-details">
                  <h4 className="day-title">{day.title}</h4>
                  <p className="day-subtitle">{day.subtitle}</p>
                  <p className="day-description">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Render the Itinerary Reviews Component 
      <ItineraryReviewsPage />
    </div>
  );
};

export default Tours;
*/
/*import React, { useState, useEffect } from "react";
import Itinerary from "./Itinerary";
import ItineraryReviewspage from "./ItineraryReviewsPage"; // Import the file
import "../styles/Tour.css"; // Optional CSS file for styling

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyData = [
    {
      departure: "Miami",
      destination: "Florida",
      duration: "2N/3D",
      embarkation: "Jan 13th, 4:30 PM",
      disembarkation: "Jan 17th, 7:30 PM",
      ports: ["Miami", "Florida"],
      price: 200,
      days: [
        {
          dayNumber: 1,
          title: "Miami Port",
          subtitle: "WELCOME ONBOARD",
          description:
            "Just as you step aboard the Empress—the top cruise in India—also known as 'A City on the Sea,' you'll be greeted with a warm welcome. Once settled, dive right in and explore the many offerings lined up for you aboard our cruise ship.",
        },
        {
          dayNumber: 2,
          title: "At Sea",
          subtitle: "DAY AT SEA",
          description:
            "Enjoy the day with luxurious amenities and endless ocean views as you sail to your destination.",
        },
        {
          dayNumber: 3,
          title: "Florida Port",
          subtitle: "ARRIVED IN FLORIDA",
          description:
            "Dock at Florida Port and explore beautiful beaches, unique attractions, and vibrant culture.",
        },
      ],
    },
  ];

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("https://api.example.com/tours");
        if (!response.ok) throw new Error("Failed to fetch tours data");
        const data = await response.json();
        setTours(data);
      } catch (error) {
        setError(error.message);
        setTours(dummyData); // Fallback to dummy data
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  const handleBookNow = (id) => {
    alert(`Booking tour with ID: ${id}`);
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="tours-page">
      <h1 className="page-title">Our Tours</h1>
      {error && <p className="error">Error: {error}</p>}
      {tours.map((tour, index) => (
        <div key={index} className="tour-section">
          {/* Details Section 
          <div className="details-section shadow">
            <div className="details-content">
              {/* Left Side: Tour Details 
              <div className="details-left">
                <div className="tour-info">
                  <h2>
                    {tour.departure} <span className="arrow">&gt;&gt;</span>{" "}
                    {tour.destination} <span className="tour-duration">{tour.duration}</span>
                  </h2>
                </div>
                <div className="embarkation-disembarkation">
                  <p className="tour-info">
                    <span className="icon">🛳 </span>Embarkation:{" "}
                    <span className="time">{tour.embarkation}</span>
                  </p>
                  <p className="tour-info">
                    <span className="icon">⛴ </span>Disembarkation:{" "}
                    <span className="time">{tour.disembarkation}</span>
                  </p>
                </div>
                <p className="tour-info">
                  <strong>Visiting Ports:</strong>{" "}
                  {tour.ports?.length > 0
                    ? tour.ports.join(" | ")
                    : "No ports specified"}
                </p>
              </div>

              {/* Vertical Divider 
              <div className="divider"></div>

              {/* Right Side: Price and Booking 
              <div className="details-right">
                <div className="details-right-content">
                  <div className="pricing-box">
                    <p className="price-label">Starting from</p>
                    <p className="price-value">${tour.price?.toLocaleString() || "N/A"}</p>
                    <p className="tax-info">Excl. Tax Per Person in Double Occupancy</p>
                  </div>
                  <button
                    className="book-now-btn"
                    onClick={() => handleBookNow(index)}
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary Section 
          <Itinerary days={tour.days} />

          {/* Itinerary Reviews Section 
          <ItineraryReviewspage /> {/* Render Itinerary Reviews 
        </div>
      ))}
    </div>
  );
};

export default Tours;*/

//for Api fecthing css styles


import React, { useState, useEffect } from "react";
import Itinerary from "./Itinerary";
import ItineraryReviewsPage from "./ItineraryReviewsPage"; // Import the file
import "./Tour.css"; // CSS file for styling
import { Head, Link, useForm } from '@inertiajs/react';
import Header from "../../components/Common/Header/Header"; // Importing Header component
import Footer from "../../components/Common/Footer/Footer";

const Tours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const dummyData = [
    {
      departure: "Miami",
      destination: "Florida",
      duration: "2N/3D",
      embarkation: "Jan 13th, 4:30 PM",
      disembarkation: "Jan 17th, 7:30 PM",
      ports: ["Miami", "Florida"],
      price: 200,
      days: [
        {
          dayNumber: 1,
          title: "Miami Port",
          subtitle: "WELCOME ONBOARD",
          description:
            "Just as you step aboard the Empress—the top cruise in India—also known as 'A City on the Sea,' you'll be greeted with a warm welcome. Once settled, dive right in and explore the many offerings lined up for you aboard our cruise ship.",
        },
        {
          dayNumber: 2,
          title: "At Sea",
          subtitle: "DAY AT SEA",
          description:
            "Enjoy the day with luxurious amenities and endless ocean views as you sail to your destination.",
        },
        {
          dayNumber: 3,
          title: "Florida Port",
          subtitle: "ARRIVED IN FLORIDA",
          description:
            "Dock at Florida Port and explore beautiful beaches, unique attractions, and vibrant culture.",
        },
      ],
    },
  ];

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("https://api.example.com/tours");
        if (!response.ok) throw new Error("Failed to fetch tours data");
        const data = await response.json();

        // Map API data to match dummy data structure
        const formattedData = data.map((tour) => ({
          departure: tour.departure || "Unknown Departure",
          destination: tour.destination || "Unknown Destination",
          duration: tour.duration || "N/A",
          embarkation: tour.embarkation || "N/A",
          disembarkation: tour.disembarkation || "N/A",
          ports: tour.ports || [],
          price: tour.price || 0,
          days: tour.days?.map((day, index) => ({
            dayNumber: day.dayNumber || index + 1,
            title: day.title || "Untitled",
            subtitle: day.subtitle || "No Subtitle",
            description: day.description || "No Description",
          })) || [],
        }));

        setTours(formattedData);
      } catch (error) {
        setError(error.message);
        setTours(dummyData); // Fallback to dummy data
      } finally {
        setLoading(false);
      }
    };
    fetchTours();
  }, []);

  const handleBookNow = (id) => {
    alert(`Booking tour with ID: ${id}`);
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div>
      <div className="tours-page">
        <Header /> {/* Include the Header component */}
        <h1 className="page-title">Our Tours------------------------------------</h1>
        {error && <p className="error">Error: {error}</p>}
        {tours.map((tour, index) => (
          <div key={index} className="tour-section">
            {/* Details Section */}
            <div className="details-section shadow">
              <div className="details-content">
                {/* Left Side: Tour Details */}
                <div className="details-left">
                  <div className="tour-info">
                    <h2>
                      {tour.departure} <span className="arrow">&gt;&gt;</span>{" "}
                      {tour.destination} <span className="tour-duration">{tour.duration}</span>
                    </h2>
                  </div>
                  <div className="embarkation-disembarkation">
                    <p className="tour-info">
                      <span className="icon">🛳 </span>Embarkation:{" "}
                      <span className="time">{tour.embarkation}</span>
                    </p>
                    <p className="tour-info">
                      <span className="icon">⛴ </span>Disembarkation:{" "}
                      <span className="time">{tour.disembarkation}</span>
                    </p>
                  </div>
                  <p className="tour-info">
                    <strong>Visiting Ports:</strong>{" "}
                    {tour.ports?.length > 0
                      ? tour.ports.join(" | ")
                      : "No ports specified"}
                  </p>
                </div>

                {/* Vertical Divider */}
                <div className="divider"></div>

                {/* Right Side: Price and Booking */}
                <div className="details-right">
                  <div className="details-right-content">
                    <div className="pricing-box">
                      <p className="price-label">Starting from</p>
                      <p className="price-value">${tour.price?.toLocaleString() || "N/A"}</p>
                      <p className="tax-info">Excl. Tax Per Person in Double Occupancy</p>
                    </div>
                    <button
                      className="book-now-btn"

                    >
                      <Link href={route('booking_now')}></Link>
                      BOOK NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Itinerary Section */}
            <Itinerary days={tour.days} />

            {/* Itinerary Reviews Section */}
            <ItineraryReviewsPage />

          </div>
        ))}
      </div>
      <div><Footer /></div>
    </div>


  );
};

export default Tours;
