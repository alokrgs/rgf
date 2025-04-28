import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section py-5">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-4">
              Innovating Mozuku Processing in Okinawa
            </h1>
            <p className="lead mb-4">
              Pioneering freeze-dried mozuku products with our patented technology,
              bringing the benefits of Okinawan seaweed to the world.
            </p>
            <Button variant="primary" size="lg" href="#contact">
              Contact Us
            </Button>
          </Col>
          <Col lg={6} className="d-none d-lg-block">
            {/* Placeholder for hero image */}
            <div className="hero-image-placeholder">
              {/* Add your hero image here */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero; 