import React from "react";
import { Carousel } from "react-bootstrap";
import sliderImg from "../../../assets/images/slider/1.png";
import bannerImag from "../Banner/2(3).png";
import "./banner.css";

import { Head, Link, useForm } from '@inertiajs/react';
// Import FontAwesome for icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCalendarAlt,
  faShip,
  faDollarSign,
  faFilter,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

// Banner Component
const Banner = () => {
  return (
    <section className="slider">
      <Carousel variant="white">
        {/* Carousel Item */}
        <Carousel.Item>
          <img src={bannerImag} className="d-block w-100" alt="First slide" />
          <Carousel.Caption>
            {/* Banner Content */}
            <div className="slider_des">
              
              <h2 className="sub_text">Packages That Work for You</h2>
              <p className="heading">
                <span>Design with you in mind our packages bring value and convenience together</span>
              </p>
              {/* <p className="sub_text"></p> */}
            </div>

            {/* Search Bar Section */}
            <div className="search-bar">
              <div className="filter-item">
                {/* <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /> */}
                <div>
                  <p>Location</p>
                  <h4>USA</h4>
                </div>
              </div>

              <div className="divider"></div>

              <div className="filter-item">
                {/* <FontAwesomeIcon icon={faShip} className="icon" /> */}
                <div>
                  <p>Packages</p>
                  <h4>Select Package</h4>
                </div>
              </div>
              <div className="divider"></div>


              <div className="filter-item">
  <div className="date-container">
    <div>
      <p>Date</p>
      <h4>13 May, 2023</h4>
    </div>
    <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
  </div>
</div>


              
             

              <div className="divider"></div>

              {/* <div className="filter-item">
                <FontAwesomeIcon icon={faDollarSign} className="icon" />
                <div>
                  <p>Price Range</p>
                  <h4>$200-$500</h4>
                </div>
              </div> */}

              {/* <div className="divider"></div> */}

              <div className="filter-item">
                {/* <FontAwesomeIcon icon={faFilter} className="icon" /> */}
                <div>
                  <p>Persons</p>
                  <h4>Number of Guests</h4>
                </div>
              </div>

              <button className="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            {/* Book Now Button */}
            {/* <div className="book-now-container">
              <button className="book-now-btn"><Link href={route('booking_index')}>BOOK NOW</Link></button>
            </div> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
