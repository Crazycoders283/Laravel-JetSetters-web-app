import React, { useState, useEffect } from "react";
import "./Itinerary.css";

const Itinerary = () => {
  const [itineraryData, setItineraryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Dummy data (fallback)
  const dummyData = [
    {
      day: 1,
      title: "Miami Port",
      subtitle: "WELCOME ONBOARD",
      description:
        "Just as you step aboard the Empress—the top cruise in India—also known as 'A City on the Sea,' you'll be greeted with a warm welcome. Once settled, dive right in and explore the many offerings lined up for you aboard our cruise ship.",
    },
    {
      day: 2,
      title: "At Sea",
      subtitle: "DAY AT SEA",
      description:
        "Just as you step aboard the Empress—the top cruise in India—also known as 'A City on the Sea,' you'll be greeted with a warm welcome. Once settled, dive right in and explore the many offerings lined up for you aboard our cruise ship.",
    },
    {
      day: 3,
      title: "Florida Port",
      subtitle: "ARRIVED IN FLORIDA",
      description:
        "Just as you step aboard the Empress—the top cruise in India—also known as 'A City on the Sea,' you'll be greeted with a warm welcome. Once settled, dive right in and explore the many offerings lined up for you aboard our cruise ship.",
    },
  ];

  // Fetch data from API
  useEffect(() => {
    const fetchItinerary = async () => {
      try {
        const response = await fetch("https://api.example.com/itinerary"); // Replace with your API URL
        if (!response.ok) {
          throw new Error("Failed to fetch itinerary data");
        }
        const data = await response.json();
        setItineraryData(data);
      } catch (err) {
        setError(err.message);
        setItineraryData(dummyData); // Fallback to dummy data on error
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, []);

  if (loading) {
    return <div className="itinerary-wrapper">Loading...</div>;
  }

  if (error) {
    console.error("Error fetching itinerary data:", error);
  }

  return (
    <div className="itinerary-wrapper">
      {/* Header */}
      <div className="itinerary-header">
        <h3 className="itinerary-title">Itinerary</h3>
        <p className="itinerary-description">Day-wise details of your package</p>
        <hr className="header-separator" />
      </div>




      {/* Content */}
      <div className="itinerary-content">
        {itineraryData.map((item) => (
          <div key={item.day} className="itinerary-day">
            <div className="day-icon">Day {item.day}</div>
            <div className="day-content">
              <h3 className="day-title">{item.title}</h3>
              <p className="day-subtitle">{item.subtitle}</p>
              <p className="day-description">{item.description}</p>
            </div>
            <hr className="day-separator" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="itinerary-footer">
        <a href="#" className="view-full-itinerary">
          View Full Itinerary &raquo;
        </a>
      </div>
    </div>
  );
};

export default Itinerary;
