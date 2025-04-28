import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold">{t('about_title')}</h2>
            <p className="lead">{t('about_subtitle')}</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <h3 className="h4 mb-3">{t('about_location_title')}</h3>
                <p className="mb-0">{t('about_location_desc')}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <h3 className="h4 mb-3">{t('about_tech_title')}</h3>
                <p className="mb-0">{t('about_tech_desc')}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <h3 className="h4 mb-3">{t('about_expert_title')}</h3>
                <p className="mb-0">{t('about_expert_desc')}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About; 