import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaUserTie,
  FaReact,
  FaJava,
  FaServer,
  FaDatabase,
  FaProjectDiagram,
} from 'react-icons/fa';

import './ProfileHighlights.css';

const highlights = [
  {
    icon: <FaUserTie />,
    title: 'Senior Software Engineer',
    description:
      'Full Stack Developer with 4+ years of experience building scalable web applications, primarily in the BFSI domain.',
  },
  {
    icon: <FaReact />,
    title: 'Frontend Development',
    description:
      'Experienced in building enterprise applications and responsive interfaces using React.js, JavaScript and ExtJS.',
  },
  {
    icon: <FaJava />,
    title: 'Java & Spring Boot',
    description:
      'Hands-on experience developing backend solutions with Java and Spring Boot, including approximately 40 RESTful APIs.',
  },
  {
    icon: <FaServer />,
    title: 'REST APIs & Microservices',
    description:
      'Experienced in RESTful API design and microservices architecture, including development of 4 microservices.',
  },
  {
    icon: <FaDatabase />,
    title: 'Oracle & PL/SQL',
    description:
      'Experience working with Oracle databases, PL/SQL, stored procedures and data-related backend issues.',
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Enterprise Delivery',
    description:
      'Experience with CRQ deployments, production support, Agile/Scrum practices and enterprise applications across BFSI projects.',
  },
];

const ProfileHighlights = () => {
  return (
    <section
      id="profile-highlights"
      className="profile-section py-5"
    >
      <Container>
        <h2 className="text-center mb-3">
          Professional Highlights
        </h2>

        <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: '750px' }}>
          A combination of frontend, backend and enterprise application
          development experience across modern and legacy technology stacks.
        </p>

        <Row className="g-4 text-center">
          {highlights.map((item, idx) => (
            <Col md={4} sm={6} key={idx}>
              <div
                className="profile-box p-4 rounded shadow-sm h-100"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="profile-icon mb-3 fs-1">
                  {item.icon}
                </div>

                <h5 className="fw-bold">
                  {item.title}
                </h5>

                <p className="small text-muted">
                  {item.description}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProfileHighlights;