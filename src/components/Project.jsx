import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const projects = [
  {
    title: 'Ahli Bank Oman (Netlink)',
    date: 'May 2022 – Jan 2023',
    details: [
      'Built responsive and accessible user interfaces from scratch, improving page load performance and mobile usability by 30%.',
      'Refactored legacy codebase to production standards, reducing technical debt and improving maintainability by 40%.'
    ]
  },
  {
    title: 'Practice AI (Claritrics)',
    date: 'Jan 2024 – Present',
    details: [
      'Led UI redesign for the ComplyIndia Portal, improving usability and modernizing components to elevate user engagement.',
      'Integrated REST APIs with ReactJS for real-time data, reducing latency by 20% and boosting accuracy.',
      'Collaborated with backend teams to define and consume APIs for frontend modules.'
    ]
  },
  {
    title: 'Dictate AI (Claritrics)',
    date: 'Nov 2024 – Present',
    details: [
      'Designed and scaled modules for patient and insurance data, increasing data handling efficiency by 30%.',
      'Improved page responsiveness and data entry efficiency by 25%.',
      'Implemented secure API communication using token-based auth and best practices for data privacy.',
      'Managed 10+ REST APIs for auth, data visualization, and content delivery, increasing system integration reliability by 40%.'
    ]
  },
  {
    title: 'E-Commerce Website (Full Stack)',
    date: 'Personal Project',
    details: [
      'Built a complete e-commerce web app with user authentication, product listing, cart, checkout, and admin dashboard.',
      'Frontend with React and Bootstrap for responsive UI and UX.',
      'Backend with Java (Spring Boot), including secure REST APIs, payment gateway integration, and MySQL database.'
    ]
  }
];

const Projects = () => {
  return (
  <section id="projects" className="py-5 bg-primary">

      <Container>
        <h2 style={{color:"white"}} className="text-center mb-5 fw-bold">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={6} className="mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body>
                  <Card.Title className="text-primary">{project.title}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">{project.date}</Card.Subtitle>
                  <ul className="ps-3">
                    {project.details.map((point, idx) => (
                      <li key={idx} className="mb-2">{point}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
