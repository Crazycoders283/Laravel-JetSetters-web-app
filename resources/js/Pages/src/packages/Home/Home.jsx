import React from "react";
import Banner from '../components/Banner/Banner'
import Features from "../components/Features/Features";
import { Container, Row, Col } from "react-bootstrap";
import ValuedPartners from "./ValuedPartners";
import CruiseDeals from "./CruiseDeals";
import Cards from "../components/Cards/Cards";
import "./home.css"
import C1 from "../Home/C1.png";

import { Head, Link, useForm } from '@inertiajs/react';
const destinations = [
  {
    id: 1,
    name: "Vancouver BC",
    price: "$64/p",
    image: "https://images.hdqwalls.com/download/vancouver-city-night-3840x2160.jpg",
    rating: "5.0",
  },
  {
    id: 2,
    name: "Texas USA",
    price: "$72/p",
    image: "https://www.tripsavvy.com/thmb/uqNzAoqBIraz1RIKIPklL3H-z5Y=/2270x1321/filters:fill(auto,1)/GettyImages-629829924-5bdb57f74cedfd0026ae431f.jpg",
    rating: "5.0",
  },
  {
    id: 3,
    name: "Florida",
    price: "$85/p",
    image: "https://media.timeout.com/images/105496849/image.jpg",
    rating: "5.0",
  },
  // Add other destination data...
];

const cruises = [
  {
    id: 1,
    name: "Celebrity Cruiseline",
    price: "$96/p",
    image: "https://example.com/image1.jpg", // Replace with the actual URL
    rating: "5.0",
  },
  {
    id: 2,
    name: "Carnival",
    price: "$127/p",
    image: "https://example.com/image2.jpg", // Replace with the actual URL
    rating: "5.0",
  },
  {
    id: 3,
    name: "Disney Cruiseline",
    price: "$77/p",
    image: "https://example.com/image3.jpg", // Replace with the actual URL
    rating: "5.0",
  },
  {
    id: 4,
    name: "Cunard",
    price: "$96/p",
    image: "https://example.com/image4.jpg", // Replace with the actual URL
    rating: "5.0",
  },
  {
    id: 5,
    name: "Norwegian Cruiseline",
    price: "$3127/p",
    image: "https://example.com/image5.jpg", // Replace with the actual URL
    rating: "5.0",
  },
];

const Home = () => {
  return (
    <>
      <Banner />


      {/* Destination Section */}
      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading text-center">
                <h1>Explore By Destination</h1>
                <p className="subtitle">
                  Discover the top destinations curated just for you
                </p>
              </div>
            </Col>
          </Row>
          <Cards data={destinations} />
        </Container>
      </section>
      <div className="explore-more-container">
        <img
          src={C1}
          alt="Decorative"
          className="left-top-image"
        />
        <button className="explore-more-btn">Explore More</button>
      </div>



      {/* Cruise Section */}
      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading text-center">
                <h1>Explore By Cruise Line</h1>
                <p className="subtitle">
                  Find the perfect cruise experience tailored for you
                </p>
              </div>
            </Col>
          </Row>
          <Cards data={cruises} />
        </Container>
      </section>
      <div className="explore-more-container">
        <button className="explore-more-btn">Explore More</button>
      </div>


      {/* Cruise Deals Section */}
      <CruiseDeals />

      {/* Showcase Valued Partners Section */}
      <ValuedPartners />
    </>
  );
};

export default Home;
