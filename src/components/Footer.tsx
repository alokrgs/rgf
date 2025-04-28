import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="g-4">
          <Col md={6} lg={4}>
            <h3 className="h5 mb-3">{t('footer_brand')}</h3>
            <p className="mb-0">
              {t('footer_desc')}
            </p>
          </Col>
          <Col md={6} lg={4}>
            <h3 className="h5 mb-3">{t('footer_quick_links')}</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#about" className="text-light text-decoration-none">
                  {t('footer_about')}
                </a>
              </li>
              <li className="mb-2">
                <a href="#products" className="text-light text-decoration-none">
                  {t('footer_products')}
                </a>
              </li>
              <li className="mb-2">
                <a href="#team" className="text-light text-decoration-none">
                  {t('footer_team')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  {t('footer_contact')}
                </a>
              </li>
            </ul>
          </Col>
          <Col md={6} lg={4}>
            <h3 className="h5 mb-3">{t('footer_contact_title')}</h3>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt me-2"></i>
              {t('footer_address')}
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope me-2"></i>
              {t('footer_email')}
            </p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {currentYear} {t('footer_brand')}. {t('footer_copyright')}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 