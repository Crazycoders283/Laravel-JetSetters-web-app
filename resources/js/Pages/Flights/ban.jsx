// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import flightBanner from '../src/components/Banner/2.svg';
// import Header from '../src/components/Common/Header/Header';
// import { Link } from '@inertiajs/react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faPlaneDeparture,
//   faCalendarAlt,
//   faUsers,
//   faSearch,
// } from '@fortawesome/free-solid-svg-icons';
// import './landing.css';

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
//               {/* Slider Description */}
//               <div className="slider_des">
//                 <h2 className="sub_text">Explore and Travel</h2>
//                 <p className="heading">
//                   <span>Our Cheapest Flight Search</span>
//                 </p>
//               </div>

//               {/* Search Bar Section */}
//               <div className="bg-white p-4 rounded-lg shadow-md">
//                 <div className="grid grid-cols-5 gap-4 items-center">
//                   {/* From Field */}
//                   <div className="search-item">
//                     <p>From</p>
//                     <h4>Washington D.C. (Any)</h4>
//                     <FontAwesomeIcon icon={faPlaneDeparture} className="icon" />
//                   </div>

//                   {/* To Field */}
//                   <div className="search-item">
//                     <p>To</p>
//                     <h4>Country, city, or airport</h4>
//                     <FontAwesomeIcon icon={faPlaneDeparture} className="icon rotate-45" />
//                   </div>

//                   {/* Depart Field */}
//                   <div className="search-item">
//                     <p>Depart</p>
//                     <h4>Add date</h4>
//                     <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
//                   </div>

//                   {/* Return Field */}
//                   <div className="search-item">
//                     <p>Return</p>
//                     <h4>Add date</h4>
//                     <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
//                   </div>

//                   {/* Travellers & Cabin Class Field */}
//                   <div className="search-item">
//                     <p>Travellers & Cabin</p>
//                     <h4>1 Adult, Economy</h4>
//                     <FontAwesomeIcon icon={faUsers} className="icon" />
//                   </div>

//                   {/* Search Button */}
//                   <button className="flightsearch">
//                     <Link href={route('flights_booking')}>
//                       <FontAwesomeIcon icon={faSearch} className="mr-2" />
//                       Search
//                     </Link>
//                   </button>
//                 </div>
//               </div>
//             </Carousel.Caption>
//           </Carousel.Item>
//         </Carousel>
//       </section>
//     </>
//   );
// };

// export default FlightsLanding;




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
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import './landing.css';

const FlightsLanding= () => {
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
              <div className="bg-white p-4 rounded-lg shadow-md" style={{ borderRadius: '10px' }}>
                {/* Trip Type Toggle */}
                <div className="flex space-x-2 mb-4">
                  <button
                    style={{
                      backgroundColor: '#007bff',
                      color: 'white',
                      padding: '8px 16px',
                      border: 'none',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    One Way
                  </button>
                  <button
                    style={{
                      backgroundColor: '#f8f9fa',
                      color: '#6c757d',
                      padding: '8px 16px',
                      border: '1px solid #ced4da',
                      borderRadius: '20px',
                      fontSize: '14px',
                      fontWeight: 'bold',
                    }}
                  >
                    Round Trip
                  </button>
                </div>

                {/* Search Fields */}
                <div className="grid grid-cols-5 gap-2 items-center">
                  {/* From Field */}
                  <div
                    className="search-item p-3 rounded-lg relative"
                    style={{ border: '1px solid #ced4da' }}
                  >
                    <p style={{ fontSize: '12px', color: '#6c757d' }}>From</p>
                    <h4 style={{ fontSize: '16px', color: '#212529' }}>Washington D.C. (Any)</h4>
                    <FontAwesomeIcon
                      icon={faPlaneDeparture}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                      style={{ fontSize: '14px' }}
                    />
                  </div>

                  {/* Swap Icon */}
                  <FontAwesomeIcon
                    icon={faExchangeAlt}
                    className="text-gray-400"
                    style={{ fontSize: '20px', margin: '0 5px' }}
                  />

                  {/* To Field */}
                  <div
                    className="search-item p-3 rounded-lg relative"
                    style={{ border: '1px solid #ced4da' }}
                  >
                    <p style={{ fontSize: '12px', color: '#6c757d' }}>To</p>
                    <h4 style={{ fontSize: '16px', color: '#6c757d' }}>Country, city or airport</h4>
                    <FontAwesomeIcon
                      icon={faPlaneDeparture}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 rotate-45"
                      style={{ fontSize: '14px' }}
                    />
                  </div>

                  {/* Depart Field */}
                  <div
                    className="search-item p-3 rounded-lg relative"
                    style={{ border: '1px solid #ced4da' }}
                  >
                    <p style={{ fontSize: '12px', color: '#6c757d' }}>Depart</p>
                    <h4 style={{ fontSize: '16px', color: '#6c757d' }}>Add date</h4>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                      style={{ fontSize: '14px' }}
                    />
                  </div>

                  {/* Return Field */}
                  <div
                    className="search-item p-3 rounded-lg relative"
                    style={{ border: '1px solid #ced4da' }}
                  >
                    <p style={{ fontSize: '12px', color: '#6c757d' }}>Return</p>
                    <h4 style={{ fontSize: '16px', color: '#6c757d' }}>Add date</h4>
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                      style={{ fontSize: '14px' }}
                    />
                  </div>

                  {/* Travellers & Cabin Class Field */}
                  <div
                    className="search-item p-3 rounded-lg relative"
                    style={{ border: '1px solid #ced4da' }}
                  >
                    <p style={{ fontSize: '12px', color: '#6c757d' }}>Travellers & cabin class</p>
                    <h4 style={{ fontSize: '16px', color: '#212529' }}>1 Adult, Economy</h4>
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                      style={{ fontSize: '14px' }}
                    />
                  </div>

                  {/* Search Button */}
                  <button
                    className="flightsearch p-3 rounded-lg"
                    style={{
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '100%',
                    }}
                  >
                    <Link href={route('flights_booking')} style={{ color: 'white', textDecoration: 'none' }}>
                      <FontAwesomeIcon icon={faSearch} className="mr-2" />
                      Search
                    </Link>
                  </button>
                </div>

                {/* Special Fares */}
                <div className="mt-4">
                  <p style={{ fontSize: '12px', color: '#6c757d', marginBottom: '8px' }}>
                    SPECIAL FARES (OPTIONAL):
                  </p>
                  <div className="flex space-x-2">
                    <button
                      style={{
                        backgroundColor: '#f8f9fa',
                        color: '#007bff',
                        padding: '6px 12px',
                        border: '1px solid #007bff',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                      }}
                    >
                      Student
                    </button>
                    <button
                      style={{
                        backgroundColor: '#f8f9fa',
                        color: '#007bff',
                        padding: '6px 12px',
                        border: '1px solid #007bff',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                      }}
                    >
                      Senior Citizen
                    </button>
                    <button
                      style={{
                        backgroundColor: '#f8f9fa',
                        color: '#007bff',
                        padding: '6px 12px',
                        border: '1px solid #007bff',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                      }}
                    >
                      Armed Forces
                    </button>
                  </div>
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