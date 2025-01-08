import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCalendarAlt, faFilter, faSearch, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './CruiseSearchPage.css';

const CruiseSearchPage = () => {
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [priceRange, setPriceRange] = useState(500); // Default price range
  const [filters, setFilters] = useState(['Luxury', 'Family', 'Ocean View']);

  const handleSearch = () => {
    console.log('Destination:', destination);
    console.log('Date:', date);
    console.log('Price Range:', priceRange);
    console.log('Filters:', filters);
  };

  return (
    <div className="cruise-search-page">
      {/* Header Section */}
      <div className="search-header">
        <h1>Find Your Perfect Cruise</h1>
        <p>Explore the world's top cruise destinations</p>
      </div>

      {/* Search Bar Section */}
      <div className="search-bar-container">
        <div className="search-bar">
          {/* Destination */}
          <div className="filter-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
            <p>Destination</p>
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">Select Destination</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Caribbean">Caribbean</option>
              <option value="Mediterranean">Mediterranean</option>
            </select>
          </div>

          <div className="divider"></div>

          {/* Departure Date */}
          <div className="filter-item">
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            <p>Departure Date</p>
            <input
              type="text"
              placeholder="DD/MM/YYYY"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="divider"></div>

          {/* Price Range */}
          <div className="price-range">
            <FontAwesomeIcon icon={faDollarSign} className="icon" />
            <p>Price Range</p>
            <input
              type="range"
              min="200"
              max="850"
              step="50"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
            <p>${priceRange}</p>
          </div>

          <div className="divider"></div>

          {/* Filters */}
          <div className="filter-item">
            <FontAwesomeIcon icon={faFilter} className="icon" />
            <p>Filters</p>
            <h4>More Filters</h4>
          </div>

          {/* Search Button */}
          <button className="search-btn" onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CruiseSearchPage;
