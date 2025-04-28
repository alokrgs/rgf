import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About: React.FC = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold">About Us</h2>
            <p className="lead">Innovating Mozuku Processing in Okinawa</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <h3 className="h4 mb-3">Our Location</h3>
                <p className="mb-0">
                  Based in Okinawa-shi, we're at the heart of mozuku production,
                  ensuring the freshest and highest quality seaweed for our products.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <h3 className="h4 mb-3">Our Technology</h3>
                <p className="mb-0">
                  We've developed a patented freeze-drying technology that preserves
                  the nutritional value and quality of mozuku like never before.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <h3 className="h4 mb-3">Our Expertise</h3>
                <p className="mb-0">
                  Our team includes Ryukyu University associate professors and
                  industry experts, combining academic research with practical
                  applications.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 