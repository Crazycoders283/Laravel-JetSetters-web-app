"use client"

import { useState } from "react"
import "./Booking.css"

const Booking = () => {
  const [priceRange, setPriceRange] = useState([9277, 49558])

  const dateOptions = [
    { date: "Jan 03", price: "₹8927" },
    { date: "Jan 04", price: "₹6352" },
    { date: "Jan 05", price: "₹6352" },
    { date: "Jan 06", price: "₹5499" },
    { date: "Jan 07", price: "₹5460" },
    { date: "Jan 08", price: "₹5498" },
    { date: "Jan 09", price: "₹5184" },
  ]

  const flights = [
    {
      airline: "SpiceJet",
      code: "SG-8183",
      departureTime: "23:30",
      departureCity: "Delhi",
      arrivalTime: "10:20",
      arrivalCity: "Mumbai",
      duration: "10h 50m",
      stops: "1-stop",
      price: "₹9,277",
      discount: "Rs.350",
      seatsLeft: null,
    },
    {
      airline: "Indigo",
      code: "6E-2766",
      departureTime: "18:25",
      departureCity: "Delhi",
      arrivalTime: "01:15",
      arrivalCity: "Mumbai",
      duration: "06h 50m",
      stops: "1-stop",
      price: "₹9,576",
      discount: "Rs.300",
      seatsLeft: null,
    },
    {
      airline: "Air India",
      code: "AI-467",
      departureTime: "18:00",
      departureCity: "Delhi",
      arrivalTime: "21:05",
      arrivalCity: "Mumbai",
      duration: "27h 05m",
      stops: "1-stop",
      price: "₹10,801",
      discount: "Rs.350",
      seatsLeft: 9,
    },
    {
      airline: "Indigo",
      code: "6E-6368",
      departureTime: "18:45",
      departureCity: "Delhi",
      arrivalTime: "00:35",
      arrivalCity: "Mumbai",
      duration: "05h 50m",
      stops: "1-stop",
      price: "₹10,846",
      discount: "Rs.300",
      seatsLeft: null,
    },
    {
      airline: "Air India",
      code: "AI-2671",
      departureTime: "21:20",
      departureCity: "Delhi",
      arrivalTime: "11:25",
      arrivalCity: "Mumbai",
      duration: "14h 05m",
      stops: "1-stop",
      price: "₹11,089",
      discount: "Rs.350",
      seatsLeft: 2,
    },
  ]

  return (
    <div className="flight-booking">
      {/* Filter Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">FILTER</div>

        {/* Popular Filters */}
        <div className="filter-section">
          <h3>Popular Filters</h3>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" defaultChecked /> Nonstop
            </label>
            <label>
              <input type="checkbox" /> Morning Departure
            </label>
            <label>
              <input type="checkbox" defaultChecked /> SpiceJet
            </label>
            <label>
              <input type="checkbox" defaultChecked /> Indigo
            </label>
            <label>
              <input type="checkbox" defaultChecked /> Air India
            </label>
            <label>
              <input type="checkbox" defaultChecked /> Air India Express
            </label>
            <label>
              <input type="checkbox" defaultChecked /> AkasaAir
            </label>
          </div>
        </div>

        {/* Price Range */}
        <div className="filter-section">
          <h3>Price Range</h3>
          <input
            type="range"
            min="9277"
            max="49558"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([9277, Number.parseInt(e.target.value)])}
          />
          <div className="price-range-label">
            Rs. {priceRange[0]} - Rs.{priceRange[1]}
          </div>
        </div>

        {/* Stops */}
        <div className="filter-section">
          <h3>Stops</h3>
          <div className="stops-buttons">
            <button className="stop-button active">
              0<br />
              Nonstop
            </button>
            <button className="stop-button">
              1<br />
              Stop
            </button>
            <button className="stop-button">
              2+
              <br />
              Stop
            </button>
          </div>
        </div>

        {/* Departure from Delhi */}
        <div className="filter-section">
          <h3>Departure from Delhi</h3>
          <div className="time-filter">
            <div className="time-option">
              Before
              <br />6 AM
            </div>
            <div className="time-option">
              6 AM -<br />
              12 PM
            </div>
            <div className="time-option">
              12 PM -<br />6 PM
            </div>
            <div className="time-option">
              After
              <br />6 PM
            </div>
          </div>
        </div>

        {/* Arrival at Mumbai */}
        <div className="filter-section">
          <h3>Arrival at Mumbai</h3>
          <div className="time-filter">
            <div className="time-option">
              Before
              <br />6 AM
            </div>
            <div className="time-option">
              6 AM -<br />
              12 PM
            </div>
            <div className="time-option">
              12 PM -<br />6 PM
            </div>
            <div className="time-option">
              After
              <br />6 PM
            </div>
          </div>
        </div>

        {/* Flight Quality */}
        <div className="filter-section">
          <h3>Flight Quality</h3>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> Show Wi-Fi flights only
            </label>
            <label>
              <input type="checkbox" /> Show Red-Eyes
            </label>
          </div>
        </div>

        {/* Airlines */}
        <div className="filter-section">
          <h3>Airlines</h3>
          <div className="airline-options">
            <div className="airline-option">
              <label>
                <input type="checkbox" defaultChecked />
                <span className="airline-color spicejet"></span>
                SpiceJet
              </label>
              <span className="airline-price">₹ 9277</span>
            </div>
            <div className="airline-option">
              <label>
                <input type="checkbox" defaultChecked />
                <span className="airline-color indigo"></span>
                Indigo
              </label>
              <span className="airline-price">₹ 9576</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="sort-by">Sort By:</div>

        {/* Date Navigation */}
        <div className="date-navigation">
          <button className="nav-button">&lt;</button>
          <div className="date-options">
            {dateOptions.map((option, index) => (
              <div key={index} className={`date-option ${index === 0 ? "active" : ""}`}>
                <div className="date">{option.date}</div>
                <div className="price">{option.price}</div>
              </div>
            ))}
          </div>
          <button className="nav-button">&gt;</button>
          <button className="calendar-button">📅</button>
        </div>

        {/* Column Headers */}
        <div className="column-headers">
          <div>AIRLINES</div>
          <div>DEPARTURE</div>
          <div>DURATION</div>
          <div>ARRIVE</div>
          <div>PRICE</div>
          <div>RECOMMENDED</div>
        </div>

        {/* Flight Listings */}
        <div className="flight-listings">
          {flights.map((flight, index) => (
            <div key={index} className="flight-card">
              <div className="flight-info">
                <div className="airline">
                  <div className={`airline-logo ${flight.airline.toLowerCase().replace(" ", "")}`}></div>
                  <div>
                    <div className="airline-name">{flight.airline}</div>
                    <div className="flight-code">{flight.code}</div>
                  </div>
                </div>
                <div className="departure">
                  <div className="time">{flight.departureTime}</div>
                  <div className="city">{flight.departureCity}</div>
                </div>
                <div className="duration">
                  <div>{flight.duration}</div>
                  <div className="stops">{flight.stops}</div>
                </div>
                <div className="arrival">
                  <div className="time">{flight.arrivalTime}</div>
                  <div className="city">{flight.arrivalCity}</div>
                </div>
                <div className="price-booking">
                  <div className="price">{flight.price}</div>
                  <button className="book-now">BOOK NOW</button>
                  <div className="more-fare">+ More Fare</div>
                  {flight.seatsLeft && <div className="seats-left">{flight.seatsLeft} Seats Left</div>}
                </div>
              </div>
              <div className="flight-details">
                <div className="discount">BOOKNOW: Get extra {flight.discount} instant discount on this flight</div>
                <div className="flight-detail-link">Flight Detail</div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="page-button active">&lt;</button>
          <button className="page-button">1</button>
        </div>
      </div>
    </div>
  )
}

export default Booking

