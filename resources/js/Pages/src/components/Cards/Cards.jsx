import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../Cards/card.css";

const Cards = ({ data }) => {
  return (
    <Row>
      {data.map((item) => (
        <Col key={item.id} sm={12} md={6} lg={4} className="mb-4">
          <Card className="custom-card">
            <Card.Img variant="top" src={item.image} alt={item.name} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Starts from {item.price}</Card.Text>
              <div className="rating">⭐ {item.rating}</div>
              <Button variant="primary">Book Now</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;
