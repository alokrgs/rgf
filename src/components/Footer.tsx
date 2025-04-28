import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <h3 className="h5 mb-3">Ryukyu GLOCAL Factory</h3>
            <p className="mb-0">
              Innovating mozuku processing with patented freeze-drying technology
              in Okinawa, Japan.
            </p>
          </Col>
          <Col md={6} lg={4}>
            <h3 className="h5 mb-3">Quick Links</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#products" className="text-light text-decoration-none">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#team" className="text-light text-decoration-none">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={4}>
            <h3 className="h5 mb-3">Contact</h3>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt me-2"></i>
              Okinawa-shi, Okinawa, Japan
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope me-2"></i>
              info@ryukyu-glocal-factory.com
            </p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {currentYear} Ryukyu GLOCAL Factory. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 