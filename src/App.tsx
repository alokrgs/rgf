import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import TeamSection from './components/Team';
import Team from './components/ExecutiveTeam';
import Hero from './components/Hero';
import { useTranslation } from 'react-i18next';

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Hero />
      <section className="homepage-section text-center">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">{t('home_about_title')}</h1>
          <h2 className="h3 mb-4">{t('home_about_subtitle')}</h2>
        </div>
      </section>
      <section className="homepage-section-alt">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="homepage-summary-box h-100">
                <h4 className="fw-bold mb-2">{t('home_location_title')}</h4>
                <p className="mb-0">{t('home_location_desc')}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="homepage-summary-box h-100">
                <h4 className="fw-bold mb-2">{t('home_technology_title')}</h4>
                <p className="mb-0">{t('home_technology_desc')}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="homepage-summary-box h-100">
                <h4 className="fw-bold mb-2">{t('home_expertise_title')}</h4>
                <p className="mb-0">{t('home_expertise_desc')}</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="homepage-summary-box h-100">
                <h4 className="fw-bold mb-2">{t('home_products_title')}</h4>
                <p className="mb-0">{t('home_products_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homepage-section">
        <div className="container">
          <h2 className="fw-bold mb-2 text-center">{t('home_products_title')}</h2>
          <p className="lead text-center mb-5">{t('home_products_desc')}</p>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="homepage-summary-box h-100">
                <h3 className="fw-bold mb-2">{t('home_freeze_title')}</h3>
                <p>{t('home_freeze_desc')}</p>
                <div className="fw-bold mb-1">{t('home_applications_title')}</div>
                <ul className="list-unstyled mb-0">
                  <li>{t('home_freeze_app1')}</li>
                  <li>{t('home_freeze_app2')}</li>
                  <li>{t('home_freeze_app3')}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="homepage-summary-box h-100">
                <h3 className="fw-bold mb-2">{t('home_traditional_title')}</h3>
                <p>{t('home_traditional_desc')}</p>
                <div className="fw-bold mb-1">{t('home_applications_title')}</div>
                <ul className="list-unstyled mb-0">
                  <li>{t('home_traditional_app1')}</li>
                  <li>{t('home_traditional_app2')}</li>
                  <li>{t('home_traditional_app3')}</li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="homepage-summary-box h-100">
                <h3 className="fw-bold mb-2">{t('home_based_title')}</h3>
                <p>{t('home_based_desc')}</p>
                <div className="fw-bold mb-1">{t('home_applications_title')}</div>
                <ul className="list-unstyled mb-0">
                  <li>{t('home_based_app1')}</li>
                  <li>{t('home_based_app2')}</li>
                  <li>{t('home_based_app3')}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homepage-section-alt">
        <div className="container">
          <h2 className="fw-bold mb-4 text-center">{t('home_team_title')}</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="homepage-summary-box h-100">
                <h4 className="fw-bold mb-2">{t('home_team_academic_title')}</h4>
                <p className="mb-0">{t('home_team_academic_desc')}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="homepage-summary-box h-100">
                <h4 className="fw-bold mb-2">{t('home_team_industry_title')}</h4>
                <p className="mb-0">{t('home_team_industry_desc')}</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="homepage-summary-box h-100">
                <h4 className="fw-bold mb-2">{t('home_team_innovation_title')}</h4>
                <p className="mb-0">{t('home_team_innovation_desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div className="main-content"><About /></div>} />
        <Route path="/products" element={<div className="main-content"><Products /></div>} />
        <Route path="/contact" element={<div className="main-content"><Contact /></div>} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App; 