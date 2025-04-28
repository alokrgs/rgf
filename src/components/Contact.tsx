import React from 'react';
import { Container, Row, Col, Button, Alert, Form } from 'react-bootstrap';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("mdkgkvlj"); // Replace with your real Formspree form ID

  return (
    <section id="contact" className="py-5">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold">{t('contact_title')}</h2>
            <p className="lead">{t('contact_subtitle')}</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={6}>
            <div className="contact-info">
              <h3 className="h4 mb-4">{t('contact_info_title')}</h3>
              <p className="mb-3">
                <i className="fas fa-map-marker-alt me-2"></i>
                {t('contact_address')}
              </p>
              <p className="mb-3">
                <i className="fas fa-envelope me-2"></i>
                {t('contact_email')}
              </p>
              <p className="mb-0">
                <i className="fas fa-phone me-2"></i>
                {t('contact_phone')}
              </p>
            </div>
          </Col>
          <Col lg={6}>
            {state.succeeded ? (
              <Alert variant="success">{t('contact_form_success')}</Alert>
            ) : (
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="email">{t('contact_form_email')}</Form.Label>
                  <Form.Control
                    id="email"
                    type="email"
                    name="email"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="message">{t('contact_form_message')}</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="message"
                    name="message"
                    rows={4}
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={state.submitting}>
                  {t('contact_form_send')}
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact; 