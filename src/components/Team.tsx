import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Team: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="team" className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold">{t('team_title')}</h2>
            <p className="lead">{t('team_subtitle')}</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-4">
                  <i className="fas fa-user-graduate fa-3x text-primary"></i>
                </div>
                <h3 className="h4 mb-3">{t('team_academic_title')}</h3>
                <p className="mb-0">{t('team_academic_desc')}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-4">
                  <i className="fas fa-industry fa-3x text-primary"></i>
                </div>
                <h3 className="h4 mb-3">{t('team_industry_title')}</h3>
                <p className="mb-0">{t('team_industry_desc')}</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body className="text-center">
                <div className="mb-4">
                  <i className="fas fa-lightbulb fa-3x text-primary"></i>
                </div>
                <h3 className="h4 mb-3">{t('team_innovation_title')}</h3>
                <p className="mb-0">{t('team_innovation_desc')}</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Team; 