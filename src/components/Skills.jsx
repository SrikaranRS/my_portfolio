import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import {
  FaReact,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaCode,
  FaServer,
  FaProjectDiagram,
  FaUsers,
} from 'react-icons/fa';

import {
  SiJavascript,
  SiSpringboot,
  SiOracle,
} from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    icon: <FaReact />,
    items: [
      {
        name: 'React.js',
        icon: <FaReact />,
      },
      {
        name: 'JavaScript (ES6+)',
        icon: <SiJavascript />,
      },
      {
        name: 'ExtJS',
        icon: <FaCode />,
      },
      {
        name: 'HTML5',
        icon: <FaHtml5 />,
      },
      {
        name: 'CSS3',
        icon: <FaCss3Alt />,
      },
    ],
  },

  {
    category: 'Backend',
    icon: <FaJava />,
    items: [
      {
        name: 'Java',
        icon: <FaJava />,
      },
      {
        name: 'Spring Boot',
        icon: <SiSpringboot />,
      },
      {
        name: 'RESTful API Design',
        icon: <FaServer />,
      },
      {
        name: 'Microservices Architecture',
        icon: <FaProjectDiagram />,
      },
    ],
  },

  {
    category: 'Database',
    icon: <FaDatabase />,
    items: [
      {
        name: 'Oracle',
        icon: <SiOracle />,
      },
      {
        name: 'PL/SQL',
        icon: <FaDatabase />,
      },
      {
        name: 'Stored Procedures',
        icon: <FaDatabase />,
      },
      {
        name: 'Data Integrity',
        icon: <FaDatabase />,
      },
    ],
  },

  {
    category: 'Tools & Practices',
   // icon: <FaTools />,
    items: [
      {
        name: 'Git',
        icon: <FaGitAlt />,
      },
      {
        name: 'CRQ / Change Management',
        icon: <FaProjectDiagram />,
      },
      {
        name: 'Production Deployment',
        icon: <FaServer />,
      },
      {
        name: 'Agile / Scrum',
        icon: <FaUsers />,
      },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <h2 className="text-center mb-3">
          Technical Skills
        </h2>

        <p className="text-center text-muted mb-5">
          Technologies and engineering practices I work with
          across full stack and enterprise applications.
        </p>

        <Row className="g-4">
          {skills.map((block, index) => (
            <Col md={6} key={index}>
              <div
                className="skill-block p-4 rounded shadow-sm bg-white text-dark h-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h5 className="d-flex align-items-center gap-2 mb-4 text-primary">
                  <span className="fs-4">
                    {block.icon}
                  </span>

                  {block.category}
                </h5>

                <div className="d-flex flex-wrap gap-2">
                  {block.items.map((skill, idx) => (
                    <Badge
                      key={idx}
                      bg="light"
                      text="dark"
                      className="skill-badge px-3 py-2 border"
                    >
                      {skill.icon && (
                        <span className="me-2">
                          {skill.icon}
                        </span>
                      )}

                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;