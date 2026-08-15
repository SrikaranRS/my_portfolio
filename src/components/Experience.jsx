import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const workExperience = [
    {
      icon: <FaBriefcase />,
      title: 'Senior Software Engineer',
      subtitle: 'HCLTech',
      date: 'July 2025 – Present',
      description:
        'Delivering full stack features using ExtJS, Java and Spring Boot across the BAR and IOWEB platform covering 23 applications. Executed around 20 CRQ deployments with no critical production incidents. Working with Oracle PL/SQL to resolve backend and data issues, while introducing React and Spring Boot into a legacy ExtJS/Java stack. Also leading a dedicated BAR team and collaborating with Denmark-based stakeholders.',
    },
    {
      icon: <FaBriefcase />,
      title: 'Software Engineer',
      subtitle: 'Claritrics India Private Limited',
      date: 'January 2024 – July 2025',
      description:
        'Developed enterprise applications using ReactJS and REST APIs, contributing to a 20% reduction in interface latency. Built 4 microservices and approximately 40 RESTful APIs using Java and Spring Boot to improve application workflows and backend capabilities.',
    },
    {
      icon: <FaBriefcase />,
      title: 'Web Application Developer',
      subtitle: 'Xebia (formerly Netlink Digital Solutions)',
      date: 'November 2021 – May 2023',
      description:
        'Started as an intern and progressed to a full-time UI Developer. Built responsive, mobile-first web interfaces for banking clients while gaining hands-on experience in enterprise web application development.',
    },
  ];

  const education = [
    {
      icon: <FaGraduationCap />,
      title: 'B.E. in Computer Science & Engineering',
      subtitle: 'Sri Eshwar College of Engineering',
      date: 'August 2018 – May 2022',
      description:
        'Completed a Bachelor of Engineering in Computer Science and Engineering with a CGPA of 8.3/10.',
    },
  ];

  return (
    <section id="experience-education" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 fw-bold">
          Experience & Education
        </h2>

        <Row>
          {/* Work Experience */}
          <Col md={7} data-aos="fade-right">
            <h4 className="mb-4 text-primary">
              💼 Work Experience
            </h4>

            <div className="timeline-modern">
              {workExperience.map((item, index) => (
                <div
                  className="timeline-card left"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-2 marker bg-primary text-white">
                    {item.icon}
                  </div>

                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">
                        {item.title}
                      </h5>

                      <h6 className="card-subtitle mb-2 text-muted">
                        {item.subtitle}
                      </h6>

                      <small className="text-primary fw-semibold">
                        {item.date}
                      </small>

                      <p className="card-text mt-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* Education */}
          <Col md={5} data-aos="fade-left">
            <h4 className="mb-4 text-success">
              🎓 Education
            </h4>

            <div className="timeline-modern">
              {education.map((item, index) => (
                <div
                  className="timeline-card right"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="p-2 marker bg-success text-white">
                    {item.icon}
                  </div>

                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title fw-bold">
                        {item.title}
                      </h5>

                      <h6 className="card-subtitle mb-2 text-muted">
                        {item.subtitle}
                      </h6>

                      <small className="text-success fw-semibold">
                        {item.date}
                      </small>

                      <p className="card-text mt-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;