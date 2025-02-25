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
                  <button className="col-span-5 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
                    <Link href="#">
                      <FontAwesomeIcon icon={faSearch} className="mr-2" />
                      Search
                    </Link>
                  </button>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
    </>
  );
};

export default FlightsLanding;
