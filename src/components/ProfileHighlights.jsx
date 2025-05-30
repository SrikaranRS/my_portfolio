import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaUserTie,
  FaCode,
  FaDatabase,
  FaProjectDiagram,
  FaGlobeAsia,
  FaLaptopCode,
} from 'react-icons/fa';
import './ProfileHighlights.css';

const highlights = [
  {
    icon: <FaUserTie />,
    title: 'Professional Identity',
    description: 'Full Stack Developer with 3+ years of experience in React, Java, and REST API development.',
  },
  {
    icon: <FaCode />,
    title: 'Frontend Mastery',
    description: 'Expert in building dynamic user interfaces with ReactJS, Redux, Bootstrap, and animation libraries.',
  },
  {
    icon: <FaDatabase />,
    title: 'Backend Expertise',
    description: 'Strong experience in Spring Boot, REST APIs, JWT, and database integrations (MySQL/MongoDB).',
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Project Ownership',
    description: 'Worked on end-to-end delivery of enterprise apps in banking and healthcare domains.',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Clean Code Advocate',
    description: 'Follows modular design, component reusability, and code reviews for robust development.',
  },
  {
    icon: <FaGlobeAsia />,
    title: 'Global Client Exposure',
    description: 'Contributed to international projects, collaborating with cross-functional teams.',
  },
];

const ProfileHighlights = () => {
  return (
    <section id="profile-highlights" className="profile-section py-5">
      <Container>
        <h2 className="text-center mb-5">My Professional Highlights</h2>
        <Row className="g-4 text-center">
          {highlights.map((item, idx) => (
            <Col md={4} sm={6} key={idx}>
              <div className="profile-box p-4 rounded shadow-sm h-100">
                <div className="profile-icon mb-3 fs-1">{item.icon}</div>
                <h5 className="fw-bold">{item.title}</h5>
                <p className="small">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ProfileHighlights;
