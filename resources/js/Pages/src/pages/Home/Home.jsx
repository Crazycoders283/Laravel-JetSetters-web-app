import React from "react";
import Banner from "../../components/Banner/Banner";
import Features from "../../components/Features/Features";
import { Container, Row, Col } from "react-bootstrap";
import ValuedPartners from "./ValuedPartners";
import CruiseDeals from "./CruiseDeals";
import Cards from "../../components/Cards/Cards";
import "./home.css";

const destinations = [
  {
    id: 1,
    name: "Vancouver BC",
    price: "$64/p",
    image: "https://images.hdqwalls.com/download/vancouver-city-night-3840x2160.jpg", // Replace with actual image URLs
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
  {
    id: 4,
    name: "San Diego",
    price: "$77/p",
    image: "https://media.timeout.com/images/105496849/image.jpg",
    rating: "5.0",
  },
  {
    id: 5,
    name: "New York",
    price: "$96/p",
    image: "https://vancouver.ca/images/cov/feature/about-vancouver-facebook-size.jpg",
    rating: "5.0",
  },
  {
    id: 6,
    name: "Los Angeles",
    price: "$127/p",
    image: "https://vancouver.ca/images/cov/feature/about-vancouver-facebook-size.jpg",
    rating: "5.0",
  },
];

const Home = () => {
  return (
    <>
      <Banner />
      <Features />

      {/* Tour Section */}
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
          <Cards destinations={destinations} />
        </Container>
      </section>
      

      {/* Cruise Deals Section */}
      <CruiseDeals />

      {/* Showcase Valued Partners Section */}
      <ValuedPartners />
    </>
  );
};

export default Home;