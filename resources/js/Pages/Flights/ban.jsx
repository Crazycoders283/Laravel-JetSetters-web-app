// import React from "react";
// import { Carousel } from "react-bootstrap";
// import flightBanner from "../src/components/Banner/2.svg";
// import Header from "../src/components/Common/Header/Header";
// import Footer from "../src/components/Common/Footer/Footer";
// import "./landing.css";
// import { Link } from "@inertiajs/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { 
//   faPlaneDeparture, 
//   faCalendarAlt, 
//   faUsers, 
//   faSearch,
//   faCube 
// } from "@fortawesome/free-solid-svg-icons";

// const FlightsLanding = () => {
//   return (
//     <>
//       {/* Header */}
//       <Header />
      
//       {/* Flight Slider Section */}
//       <section className="flight-slider">
//         <Carousel variant="white">
//           <Carousel.Item>
//             <img src={flightBanner} className="d-block w-100" alt="Flight Search" />
//             <Carousel.Caption>
//               <div className="slider-description">
//                 <h2 className="sub-text">Explore and Travel</h2>
//                 <p className="heading">Our Cheapest Flight Search</p>
//               </div>
              
//               {/* Enhanced Search Bar with Cube Icon */}
//               <div className="search-bar">
//                 {/* Cube Icon */}
//                 <div className="cube-icon">
//                   <FontAwesomeIcon icon={faCube} size="lg" />
//                 </div>

//                 <div className="search-item">
//                   <div>
//                     <p>From</p>
//                     <h4>Washington D.C. (Any)</h4>
//                   </div>
//                   <FontAwesomeIcon icon={faPlaneDeparture} className="icon" />
//                 </div>
                
//                 <div className="divider"></div>
                
//                 <div className="search-item">
//                   <div>
//                     <p>To</p>
//                     <h4>Country, city or airport</h4>
//                   </div>
//                   <FontAwesomeIcon icon={faPlaneDeparture} className="icon" style={{ transform: 'rotate(45deg)' }} />
//                 </div>
                
//                 <div className="divider"></div>
                
//                 <div className="search-item">
//                   <div className="date-container">
//                     <div>
//                       <p>Depart</p>
//                       <h4>Add date</h4>
//                     </div>
//                     <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
//                   </div>
//                 </div>
                
//                 <div className="divider"></div>
                
//                 <div className="search-item">
//                   <div className="date-container">
//                     <div>
//                       <p>Return</p>
//                       <h4>Add date</h4>
//                     </div>
//                     <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
//                   </div>
//                 </div>
                
//                 <div className="divider"></div>
                
//                 <div className="search-item">
//                   <div>
//                     <p>Travellers and cabin class</p>
//                     <h4>1 Adult, Economy</h4>
//                   </div>
//                   <FontAwesomeIcon icon={faUsers} className="icon" />
//                 </div>
                
//                 <button className="search-button">
//                   <Link href="">
//                     <FontAwesomeIcon icon={faSearch} /> Search
//                   </Link>
//                 </button>
//               </div>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </section>

//       {/* Footer */}
      
//     </>
//   );
// };

// export default FlightsLanding;import React from "react";import React from 'react';
import { Carousel } from 'react-bootstrap';
import flightBanner from '../src/components/Banner/2.svg'; // Using the same banner image
import Header from '../src/components/Common/Header/Header';
// import Footer from '../src/components/Common/Footer/Footer';
import './landing.css';
import { Link, useForm } from '@inertiajs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneDeparture,
  faCalendarAlt,
  faUsers,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';

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

              {/* Search Bar Section with White Background */}
              <div className="search-bar-container">
                <div
                  className="search-bar"
                  style={{
                    backgroundColor: '#ffffff', // White background
                    padding: '1rem', // Optional padding for spacing
                    borderRadius: '8px', // Optional rounded corners
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional shadow for depth
                  }}
                >
                  <div className="search-row">
                    {/* From Field */}
                    <div className="filter-item">
                      <div>
                        <p>From</p>
                        <h4>Washington D.C. (Any)</h4>
                      </div>
                      <FontAwesomeIcon icon={faPlaneDeparture} className="icon" />
                    </div>

                    {/* To Field */}
                    <div className="filter-item">
                      <div>
                        <p>To</p>
                        <h4>Country, city or airport</h4>
                      </div>
                      <FontAwesomeIcon
                        icon={faPlaneDeparture}
                        className="icon"
                        style={{ transform: 'rotate(45deg)' }}
                      />
                    </div>

                    {/* Depart Field */}
                    <div className="filter-item">
                      <div className="date-container">
                        <div>
                          <p>Depart</p>
                          <h4>Add date</h4>
                        </div>
                        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                      </div>
                    </div>

                    {/* Return Field */}
                    <div className="filter-item">
                      <div className="date-container">
                        <div>
                          <p>Return</p>
                          <h4>Add date</h4>
                        </div>
                        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                      </div>
                    </div>

                    {/* Travellers and Cabin Class Field */}
                    <div className="filter-item">
                      <div>
                        <p>Travellers and cabin class</p>
                        <h4>1 Adult, Economy</h4>
                      </div>
                      <FontAwesomeIcon icon={faUsers} className="icon" />
                    </div>

                    {/* Search Button */}
                    <button className="bg-white px-4 py-2 rounded shadow hover:bg-gray-100 transition">
                      {/* <Link href={route('flight_search')}> Adjust route as needed */}
                        <FontAwesomeIcon icon={faSearch} /> Search
                      {/* </Link> */}
                    </button>
                  </div>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default FlightsLanding;