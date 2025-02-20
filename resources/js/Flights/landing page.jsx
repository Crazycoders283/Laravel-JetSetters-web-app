import React from "react";
import { Carousel } from "react-bootstrap";
import flightBanner from "../../../assets/images/slider/flight-banner.png";
import "./flights.css";
import { Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneDeparture, faCalendarAlt, faUsers, faSearch } from "@fortawesome/free-solid-svg-icons";

const FlightsLanding = () => {
  return (
    <section className="flight-slider">
      <Carousel variant="white">
        <Carousel.Item>
          <img src={flightBanner} className="d-block w-100" alt="Flight Search" style={{ filter: "none" }} />
          <Carousel.Caption style={{ backgroundColor: "transparent", color: "#000" }}>
            <div className="slider-description">
              <h2 className="sub-text">Explore and Travel</h2>
              <p className="heading">Our Cheapest Flight Search</p>
            </div>

            <div className="search-bar">
              <div className="search-item">
                <div>
                  <p>From</p>
                  <h4>Washington D.C. (Any)</h4>
                </div>
              </div>

              <div className="divider"></div>

              <div className="search-item">
                <div>
                  <p>To</p>
                  <h4>Country, city or airport</h4>
                </div>
              </div>
              
              <div className="divider"></div>

              <div className="search-item">
                <div className="date-container">
                  <div>
                    <p>Depart</p>
                    <h4>Add date</h4>
                  </div>
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                </div>
              </div>

              <div className="divider"></div>

              <div className="search-item">
                <div className="date-container">
                  <div>
                    <p>Return</p>
                    <h4>Add date</h4>
                  </div>
                  <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                </div>
              </div>

              <div className="divider"></div>

              <div className="search-item">
                <div>
                  <p>Travellers and cabin class</p>
                  <h4>1 Adult, Economy</h4>
                </div>
                <FontAwesomeIcon icon={faUsers} className="icon" />
              </div>

              <button className="search-button">
                <Link href={route('flight_search')}>
                  <FontAwesomeIcon icon={faSearch} /> Search
                </Link>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default FlightsLanding;
