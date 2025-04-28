import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../i18n';
import '../App.css';

const Hero: React.FC = () => {
  const { t } = useTranslation();

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
      <div className="hero-content position-relative" style={{ zIndex: 1 }}>
        <Container>
          <Row className="align-items-center min-vh-100">
            <Col lg={12} className="text-center text-lg-start">
              <h1 className="display-4 fw-bold mb-4">
                {t('hero_title')}
              </h1>
              <p className="lead mb-4">
                {t('hero_subtitle')}
              </p>
              <Button variant="primary" size="lg" href="/contact">
                {t('contact_us')}
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Hero; 