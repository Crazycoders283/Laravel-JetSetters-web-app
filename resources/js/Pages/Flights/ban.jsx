import React from 'react';
import { Carousel } from 'react-bootstrap';
import flightBanner from '../src/components/Banner/2.svg';
import Header from '../src/components/Common/Header/Header';
import { Link } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneDeparture,
  faCalendarAlt,
  faUsers,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import './landing.css';

const FlightsLanding = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Flight Slider Section */}
      <section className="flight-slider">
        <Carousel variant="white">
          <Carousel.Item>
            <img src={flightBanner} className="d-block w-100" alt="Flight Search" />
            <Carousel.Caption>
              {/* Slider Description */}
              <div className="slider_des">
                <h2 className="sub_text">Explore and Travel</h2>
                <p className="heading">
                  <span>Our Cheapest Flight Search</span>
                </p>
              </div>

<<<<<<< HEAD
              {/* Search Bar Section */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="grid grid-cols-5 gap-4 items-center">
                  {/* From Field */}
                  <div className="search-item">
                    <p>From</p>
                    <h4>Washington D.C. (Any)</h4>
                    <FontAwesomeIcon icon={faPlaneDeparture} className="icon" />
                  </div>

                  {/* To Field */}
                  <div className="search-item">
                    <p>To</p>
                    <h4>Country, city, or airport</h4>
                    <FontAwesomeIcon icon={faPlaneDeparture} className="icon rotate-45" />
                  </div>

                  {/* Depart Field */}
                  <div className="search-item">
                    <p>Depart</p>
                    <h4>Add date</h4>
                    <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                  </div>

                  {/* Return Field */}
                  <div className="search-item">
                    <p>Return</p>
                    <h4>Add date</h4>
                    <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                  </div>

                  {/* Travellers & Cabin Class Field */}
                  <div className="search-item">
                    <p>Travellers & Cabin</p>
                    <h4>1 Adult, Economy</h4>
                    <FontAwesomeIcon icon={faUsers} className="icon" />
                  </div>

                  {/* Search Button */}
                  <button className="flightsearch">
                    <Link href="#">
                      <FontAwesomeIcon icon={faSearch} className="mr-2" />
                      Search
                    </Link>
                  </button>
                </div>
              </div>
=======
              {/* Search Bar Section with White Background */}
              <div class="d-flex flex-row">
              <div className="search-bar-container">
      <div className="search-bar">
        <div className="search-row">
          {/* From Field */}
          <div class="d-flex flex-row">
          <div className="search-item">
            <p>From</p>
            <h4>Washington D.C. (Any)</h4>
            <FontAwesomeIcon icon={faPlaneDeparture} className="icon" />
          </div>
          </div>
          {/* To Field */}
          <div class="d-flex flex-row">
          <div className="search-item">
            <p>To</p>
            <h4>Country, city or airport</h4>
            <FontAwesomeIcon icon={faPlaneDeparture} className="icon rotate" />
          </div>

          {/* Depart Field */}
          <div className="search-item">
            <p>Depart</p>
            <h4>Add date</h4>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          </div>

          {/* Return Field */}
          <div className="search-item">
            <p>Return</p>
            <h4>Add date</h4>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
          </div>

          {/* Travelers and Cabin Class */}
          <div className="search-item">
            <p>Travellers and cabin class</p>
            <h4>1 Adult, Economy</h4>
            <FontAwesomeIcon icon={faUsers} className="icon" />
          </div>

          {/* Search Button */}
          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} /> Search
          </button>
        </div>
        </div>
      </div>
    </div>
    </div>

>>>>>>> f84d9855e2bff35787cbdf4f7ced0261f418a010
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default FlightsLanding;
