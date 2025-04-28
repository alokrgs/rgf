import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Team: React.FC = () => {
  return (
    <section id="team" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold">Our Team</h2>
            <p className="lead">Experts in Mozuku Processing and Research</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-4">
                  <i className="fas fa-user-graduate fa-3x text-primary"></i>
                </div>
                <h3 className="h4 mb-3">Academic Excellence</h3>
                <p className="mb-0">
                  Our team includes associate professors from Ryukyu University,
                  bringing cutting-edge research and academic expertise to our
                  operations.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-4">
                  <i className="fas fa-industry fa-3x text-primary"></i>
                </div>
                <h3 className="h4 mb-3">Industry Experience</h3>
                <p className="mb-0">
                  Seasoned professionals with decades of experience in mozuku
                  processing and product development.
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-4">
                  <i className="fas fa-lightbulb fa-3x text-primary"></i>
                </div>
                <h3 className="h4 mb-3">Innovation</h3>
                <p className="mb-0">
                  Our patented freeze-drying technology is the result of
                  collaborative research and development between academia and
                  industry.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team; 