import React from 'react';
import { Container, Row, Col, ProgressBar, Badge } from 'react-bootstrap';
import {
  FaReact, FaJava, FaHtml5, FaCss3Alt, FaGitAlt,
  FaNodeJs, FaDatabase, FaBootstrap, FaTools
} from 'react-icons/fa';
import { SiJavascript, SiSpringboot, SiMysql, SiMongodb } from 'react-icons/si';

const skills = [
  {
    category: 'Frontend',
    icon: <FaReact />,
    items: [
      { name: 'ReactJS', level: 90 },
      { name: 'JavaScript', level: 85, icon: <SiJavascript /> },
      { name: 'HTML5', level: 95, icon: <FaHtml5 /> },
      { name: 'CSS3', level: 90, icon: <FaCss3Alt /> },
      { name: 'Bootstrap', level: 80, icon: <FaBootstrap /> },
    ],
  },
  {
    category: 'Backend',
    icon: <FaJava />,
    items: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 80, icon: <SiSpringboot /> },
      { name: 'REST APIs', level: 90 },
      { name: 'Node.js', level: 60, icon: <FaNodeJs /> },
    ],
  },
  {
    category: 'Database',
    icon: <FaDatabase />,
    items: [
      { name: 'MySQL', level: 85, icon: <SiMysql /> },
      { name: 'MongoDB', level: 65, icon: <SiMongodb /> },
    ],
  },
  {
    category: 'Tools & Others',
    icon: <FaTools />,
    items: [
      { name: 'Git & GitHub', level: 90, icon: <FaGitAlt /> },
      { name: 'Postman', level: 85 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section py-5">
      <Container>
        <h2 className="text-center mb-5">My Skills</h2>
        <Row className="g-4">
          {skills.map((block, index) => (
            <Col md={6} key={index}>
              <div className="skill-block p-4 rounded shadow-sm bg-white text-dark">
                <h5 className="d-flex align-items-center gap-2 mb-4 text-primary">
                  {block.icon} {block.category}
                </h5>
                {block.items.map((skill, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="d-flex justify-content-between align-items-center mb-1">
                      <span className="fw-semibold">
                        {skill.icon && <span className="me-2">{skill.icon}</span>}
                        {skill.name}
                      </span>
                      <Badge bg="primary">{skill.level}%</Badge>
                    </div>
                    <ProgressBar now={skill.level} variant="primary" animated />
                  </div>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
