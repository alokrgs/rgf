import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="main-content py-5 bg-light">
      <Container>
        {/* Company Introduction */}
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="section-title">{t('about_title')}</h2>
            <p className="about-intro">{t('about_company_intro')}</p>
          </Col>
        </Row>
        {/* Top Message */}
        <Row className="mb-5 align-items-center justify-content-center">
          <Col md={8} className="mx-auto">
            <h3 className="section-title mb-3">{t('about_top_message_title')}</h3>
            <h5 className="text-center text-secondary mb-3">{t('about_top_message_subtitle')}</h5>
            <Card className="p-0 shadow-sm overflow-hidden">
              <Row className="g-0 align-items-stretch">
                <Col md={4} className="d-flex">
                  <div className="ceo-photo-rect w-100 h-100">
                    <img
                      src="/images/ceo.webp"
                      alt="CEO"
                      className="w-100 h-100"
                      style={{ objectFit: 'cover', minHeight: '220px', display: 'block' }}
                    />
                  </div>
                </Col>
                <Col md={8} className="d-flex align-items-center">
                  <Card.Body className="w-100">
                    <p className="mb-2">{t('about_ceo_message')}</p>
                    <div className="text-end mt-4">
                      <strong>{t('about_ceo_name')}</strong><br />
                      {t('about_ceo_title')}
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        {/* Company Profile */}
        <div className="company-profile-table-wrapper">
          <h3 className="section-title mb-4">{t('about_profile_title')}</h3>
          <Table bordered hover responsive className="company-profile-table bg-white">
            <tbody>
              <tr>
                <th>{t('about_profile_company')}</th>
                <td>{t('about_profile_company_value')}</td>
              </tr>
              <tr>
                <th>{t('about_profile_address')}</th>
                <td>{t('about_profile_address_value')}</td>
              </tr>
              <tr>
                <th>{t('about_profile_established')}</th>
                <td>{t('about_profile_established_value')}</td>
              </tr>
              <tr>
                <th>{t('about_profile_business')}</th>
                <td>{t('about_profile_business_value')}</td>
              </tr>
              <tr>
                <th>{t('about_profile_ceo')}</th>
                <td>{t('about_profile_ceo_value')}</td>
              </tr>
              <tr>
                <th>{t('about_profile_capital')}</th>
                <td>{t('about_profile_capital_value')}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </section>
  );
};

export default About; 