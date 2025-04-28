import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Products: React.FC = () => {
  const products = [
    {
      title: 'Freeze-Dried Mozuku',
      description: 'Our patented freeze-drying technology preserves the nutritional value and quality of mozuku.',
      applications: ['Cup Noodles', 'Salads', 'Food Products']
    },
    {
      title: 'Traditional Dried Mozuku',
      description: 'High-quality traditionally dried mozuku for various culinary applications.',
      applications: ['Tempura', 'Traditional Dishes', 'Seasoning']
    },
    {
      title: 'Mozuku-Based Products',
      description: 'Innovative products derived from our premium mozuku processing.',
      applications: ['Soap', 'Cosmetics', 'Health Supplements']
    }
  ];

  return (
    <section id="products" className="py-5">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold">Our Products</h2>
            <p className="lead">Innovative Mozuku-Based Solutions</p>
          </Col>
        </Row>
        <Row className="g-4">
          {products.map((product, index) => (
            <Col key={index} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body>
                  <h3 className="h4 mb-3">{product.title}</h3>
                  <p className="mb-4">{product.description}</p>
                  <div>
                    <h4 className="h6 mb-3">Applications:</h4>
                    <ul className="list-unstyled">
                      {product.applications.map((app, i) => (
                        <li key={i} className="mb-2">
                          <i className="fas fa-check text-primary me-2"></i>
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Products; 