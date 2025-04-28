import React from 'react';
import { Navbar as BootstrapNavbar, Nav, Container, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import '../i18n';

const scrollToSection = (id: string) => {
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, 100);
};

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (section: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => scrollToSection(section), 200);
    } else {
      scrollToSection(section);
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" fixed="top" className="shadow-sm">
      <Container>
        <BootstrapNavbar.Brand as={NavLink} to="/">
          {t('navbar_brand')}
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavLink to="/about" className="nav-link">
              {t('navbar_about')}
            </NavLink>
            <NavLink to="/team" className="nav-link">
              {t('navbar_team_page')}
            </NavLink>
            <NavLink to="/products" className="nav-link">
              {t('navbar_products')}
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              {t('navbar_contact')}
            </NavLink>
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