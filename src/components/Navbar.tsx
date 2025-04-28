import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import '../i18n';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand href="#home">{t('navbar_brand')}</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#about">{t('navbar_about')}</Nav.Link>
            <Nav.Link href="#products">{t('navbar_products')}</Nav.Link>
            <Nav.Link href="#team">{t('navbar_team')}</Nav.Link>
            <Nav.Link href="#contact">{t('navbar_contact')}</Nav.Link>
            <div className="d-flex align-items-center ms-3">
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
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar; 