import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const executives = [
  {
    key: 'yamamoto',
    name: '山元',
    title: '代表取締役会長',
    introKey: 'exec_yamamoto_intro',
    socials: {
      facebook: '#',
      x: '#',
      linkedin: '#',
    },
  },
  {
    key: 'nakamura',
    name: '中村',
    title: '代表取締役社長',
    introKey: 'exec_nakamura_intro',
    socials: {
      facebook: '#',
      x: '#',
      linkedin: '#',
    },
  },
  {
    key: 'yamashiro',
    name: '山城',
    title: '取締役 COO',
    introKey: 'exec_yamashiro_intro',
    socials: {
      facebook: '#',
      x: '#',
      linkedin: '#',
    },
  },
  {
    key: 'alok',
    name: 'アロック',
    title: 'CTO',
    introKey: 'exec_alok_intro',
    socials: {
      facebook: '#',
      x: '#',
      linkedin: '#',
    },
  },
  {
    key: 'akamine',
    name: '赤嶺',
    title: 'CTO',
    introKey: 'exec_akamine_intro',
    socials: {
      facebook: '#',
      x: '#',
      linkedin: '#',
    },
  },
  {
    key: 'miyagi',
    name: '宮城',
    title: 'CFO',
    introKey: 'exec_miyagi_intro',
    socials: {
      facebook: '#',
      x: '#',
      linkedin: '#',
    },
  },
  {
    key: 'nakamura_chro',
    name: '中村（兼任）',
    title: 'CHRO',
    introKey: 'exec_nakamura_chro_intro',
    socials: {
      facebook: '#',
      x: '#',
      linkedin: '#',
    },
  },
];

const ExecutiveTeam: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="main-content py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h2 className="display-5 fw-bold">{t('exec_title')}</h2>
            <p className="lead">{t('exec_desc')}</p>
          </Col>
        </Row>
        <Row className="g-4">
          {executives.map((member) => (
            <Col key={member.key} md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm text-center">
                <div style={{ width: '120px', height: '120px', margin: '2rem auto 1rem', borderRadius: '50%', background: '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', color: '#bbb' }}>
                  <img
                    src={`/images/executive_${member.key}.jpg`}
                    alt={member.name}
                    className="team-avatar"
                  />
                </div>
                <Card.Body>
                  <h3 className="h5 fw-bold mb-1">{member.name}</h3>
                  <div className="text-primary mb-2">{member.title}</div>
                  <p className="mb-3">{t(member.introKey)}</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
                    <a href={member.socials.x} target="_blank" rel="noopener noreferrer" aria-label="X"><FaTwitter /></a>
                    <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ExecutiveTeam; 