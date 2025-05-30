import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const workExperience = [
    {
      icon: <FaBriefcase />,
      title: 'React JS Developer',
      subtitle: 'CLARITRICS INDIA PRIVATE LIMITED',
      date: 'April 2024 – Present',
      description: 'Developing websites with ReactJS and apps. Crafting engaging cross-platform web & mobile applications.',
    },
    {
      icon: <FaBriefcase />,
      title: 'Intern - React JS Developer',
      subtitle: 'CLARITRICS INDIA PRIVATE LIMITED',
      date: 'Jan 2024 – Mar 2024',
      description: 'Enhanced feature-rich web applications using ReactJS and modern JavaScript frameworks.',
    },
    {
      icon: <FaBriefcase />,
      title: 'Web Application Developer',
      subtitle: 'Netlink Digital Solutions',
      date: 'Feb 2022 – May 2023',
      description: 'Developed secure and high-performance banking web applications, achieving 100% compliance with standards and reducing response time by 25%.',
    },
    {
      icon: <FaBriefcase />,
      title: 'Intern - Web Application Developer',
      subtitle: 'Netlink Digital Solutions',
      date: 'Nov 2021 – Jan 2022',
      description: 'Worked collaboratively with team members using Git for version control and code management.',
    },
  ];

  const education = [
    {
      icon: <FaGraduationCap />,
      title: 'Bachelor of Engineering',
      subtitle: 'Sri Eshwar College of Engineering',
      date: '2018 – 2022',
      description: 'Degree equipped with comprehensive knowledge in computer applications, preparing for versatile roles in the Software industry.',
    },
  ];

  return (
    <section id="experience-education" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-5 fw-bold">Experience & Education</h2>
        <Row>
          <Col md={6} data-aos="fade-right">
            <h4 className="mb-4 text-primary">💼 Work Experience</h4>
            <div className="timeline-modern">
              {workExperience.map((item, index) => (
                <div className="timeline-card left" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="p-2 marker bg-primary text-white">
                    {item.icon}
                  </div>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{item.subtitle} — <small>{item.date}</small></h6>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col md={6} data-aos="fade-left">
            <h4 className="mb-4 text-success">🎓 Education</h4>
            <div className="timeline-modern">
              {education.map((item, index) => (
                <div className="timeline-card right" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="p-2 marker bg-success text-white">
                    {item.icon}
                  </div>
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{item.subtitle} — <small>{item.date}</small></h6>
                      <p className="card-text">{item.description}</p>
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
