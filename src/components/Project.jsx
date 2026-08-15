import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import {
  FaBuilding,
  FaCode,
  FaServer,
  FaDatabase,
  FaProjectDiagram,
} from 'react-icons/fa';

const projects = [
  {
    title: 'Nordea Bank – HCLTech',
    date: 'July 2025 – Present',
    type: 'Professional Project',
    icon: <FaBuilding />,
    technologies: [
      'ExtJS',
      'Java',
      'Spring Boot',
      'React.js',
      'Oracle PL/SQL',
      'REST APIs',
    ],
    details: [
      'Working on enterprise banking applications within the IOWEB platform, covering 23 applications.',
      'Delivered full stack features using ExtJS, Java and Spring Boot.',
      'Executed around 20 CRQ deployments across BAR and the wider IOWEB platform with no critical production incidents.',
      'Resolved backend and data-related issues using Oracle PL/SQL.',
      'Introduced React and Spring Boot into a legacy ExtJS/Java technology stack.',
      'Collaborated directly with Denmark-based stakeholders to gather requirements and align delivery priorities.',
      'Took technical ownership and led a dedicated team for BAR.',
    ],
  },

  {
    title: 'Practice AI – Claritrics',
    date: 'January 2024 – July 2025',
    type: 'Professional Project',
    icon: <FaCode />,
    technologies: [
      'React.js',
      'Java',
      'Spring Boot',
      'REST APIs',
      'Microservices',
    ],
    details: [
      'Developed enterprise applications using ReactJS and integrated REST APIs for real-time data and functionality.',
      'Contributed to a 20% reduction in interface latency through frontend improvements and API integration.',
      'Built 4 microservices to improve backend capabilities and application workflows.',
      'Developed approximately 40 RESTful APIs using Java and Spring Boot.',
      'Collaborated with backend teams to design and consume APIs for frontend modules.',
    ],
  },

  {
    title: 'Dictate AI – Claritrics',
    date: '2024 – 2025',
    type: 'Professional Project',
    icon: <FaServer />,
    technologies: [
      'React.js',
      'Java',
      'Spring Boot',
      'REST APIs',
    ],
    details: [
      'Worked on enterprise application modules using ReactJS and backend services.',
      'Integrated REST APIs to support application functionality and real-time data.',
      'Contributed to backend solutions and microservices development using Java and Spring Boot.',
      'Worked across frontend and backend components as part of full stack application development.',
    ],
  },

  {
    title: 'Ahli Bank Oman – Xebia',
    date: 'November 2021 – May 2023',
    type: 'Professional Project',
    icon: <FaDatabase />,
    technologies: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Web UI',
    ],
    details: [
      'Built responsive, mobile-first web interfaces for banking clients.',
      'Started as an intern and progressed to a full-time UI Developer role.',
      'Worked on enterprise banking applications and gained hands-on experience in frontend development.',
    ],
  },

  {
    title: 'Full Stack E-Commerce Application',
    date: 'Personal Project',
    type: 'Personal Project',
    icon: <FaProjectDiagram />,
    technologies: [
      'React.js',
      'Java',
      'Spring Boot',
      'REST APIs',
      'MySQL',
    ],
    details: [
      'Built a full stack e-commerce application with frontend and backend components.',
      'Implemented user authentication, product listing, cart and checkout functionality.',
      'Developed responsive user interfaces using React.js.',
      'Implemented backend REST APIs using Java and Spring Boot.',
    ],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-5 bg-primary">
      <Container>
        <h2 className="text-white text-center mb-3 fw-bold">
          Projects
        </h2>

        <p className="text-white text-center mb-5">
          Selected professional and personal projects across banking,
          enterprise applications and full stack development.
        </p>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col
              md={6}
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="p-4">

                  {/* Project Icon */}
                  <div className="text-primary fs-2 mb-3">
                    {project.icon}
                  </div>

                  {/* Title */}
                  <Card.Title className="text-primary fw-bold">
                    {project.title}
                  </Card.Title>

                  {/* Date */}
                  <Card.Subtitle className="mb-3 text-muted">
                    {project.date}
                  </Card.Subtitle>

                  {/* Project Type */}
                  <Badge
                    bg={
                      project.type === 'Professional Project'
                        ? 'primary'
                        : 'success'
                    }
                    className="mb-3"
                  >
                    {project.type}
                  </Badge>

                  {/* Technologies */}
                  <div className="mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        bg="light"
                        text="dark"
                        className="me-2 mb-2 border"
                        key={idx}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Details */}
                  <ul className="ps-3">
                    {project.details.map((point, idx) => (
                      <li key={idx} className="mb-2">
                        {point}
                      </li>
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