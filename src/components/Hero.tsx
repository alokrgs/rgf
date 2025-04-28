import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../i18n';
import '../App.css';

const Hero: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section id="home" className="hero-section py-5 position-relative overflow-hidden">
      {/* Ocean video background */}
      <video
        className="hero-bg-video"
        src="/videos/ocean.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.6,
        }}
      />
      {/* Language Switcher */}
      <div style={{ position: 'absolute', top: 20, right: 20, zIndex: 2 }}>
        <Button
          variant={i18n.language === 'ja' ? 'primary' : 'outline-primary'}
          size="sm"
          onClick={() => changeLanguage('ja')}
          className="me-2"
        >
          日本語
        </Button>
        <Button
          variant={i18n.language === 'en' ? 'primary' : 'outline-primary'}
          size="sm"
          onClick={() => changeLanguage('en')}
        >
          English
        </Button>
      </div>
      <div className="hero-content position-relative" style={{ zIndex: 1 }}>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4">
                {t('hero_title')}
              </h1>
              <p className="lead mb-4">
                {t('hero_subtitle')}
              </p>
              <Button variant="primary" size="lg" href="#contact">
                {t('contact_us')}
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
      </div>
    </section>
  );
};

export default Hero; 