import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Products: React.FC = () => {
  const { t } = useTranslation();
  const products = [
    {
      title: t('product_freeze_title'),
      description: t('product_freeze_desc'),
      applications: [t('product_freeze_app1'), t('product_freeze_app2'), t('product_freeze_app3')],
      appsLabel: t('product_freeze_apps'),
    },
    {
      title: t('product_dried_title'),
      description: t('product_dried_desc'),
      applications: [t('product_dried_app1'), t('product_dried_app2'), t('product_dried_app3')],
      appsLabel: t('product_dried_apps'),
    },
    {
      title: t('product_based_title'),
      description: t('product_based_desc'),
      applications: [t('product_based_app1'), t('product_based_app2'), t('product_based_app3')],
      appsLabel: t('product_based_apps'),
    }
  ];

  return (
    <section id="products" className="py-5">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold">{t('products_title')}</h2>
            <p className="lead">{t('products_subtitle')}</p>
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
                    <h4 className="h6 mb-3">{product.appsLabel}</h4>
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