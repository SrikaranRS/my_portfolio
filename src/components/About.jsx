import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about" className="py-5 bg-light" data-aos="fade-right">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>

        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="shadow-lg border-0">
              <Card.Body>
                <h4 className="text-center text-primary mb-4">Who Am I?</h4>

                <p className="text-center fs-5" data-aos="fade-up" data-aos-delay="100">
                  I’m a passionate and detail-oriented <strong>Web Developer</strong> who thrives on building robust backend systems and crafting smooth, responsive frontend interfaces.
                  With strong expertise in <strong>React.js</strong> and <strong>Java (Spring Boot)</strong>, I specialize in creating dynamic web applications that are not only functional but also intuitive and user-centric.
                </p>

                <p className="text-center fs-5" data-aos="fade-up" data-aos-delay="200">
                  I love transforming complex business requirements into scalable digital products. Whether it’s designing seamless UI with React or implementing secure APIs and logic on the backend,
                  I believe in writing clean, maintainable code that stands the test of time.
                </p>

                <p className="text-center fs-5" data-aos="fade-up" data-aos-delay="300">
                  Beyond code, I value collaboration, continuous learning, and pushing the limits of what’s possible in modern web development.
                </p>

                <hr />

                <Row className="text-center mt-4">
                  <Col md={6} lg={3} className="mb-3" data-aos="fade-up" data-aos-delay="400">
                    <h6 className="fw-bold mb-1">Full Name</h6>
                    <p className="text-muted">Srikaran R S</p>
                  </Col>
                  <Col md={6} lg={3} className="mb-3" data-aos="fade-up" data-aos-delay="500">
                    <h6 className="fw-bold mb-1">Phone</h6>
                    <p className="text-muted">+91 6382563589</p>
                  </Col>
                  <Col md={6} lg={3} className="mb-3" data-aos="fade-up" data-aos-delay="600">
                    <h6 className="fw-bold mb-1">Email</h6>
                    <p className="text-muted">srikaranarr0601@gmail.com</p>
                  </Col>
                  <Col md={6} lg={3} className="mb-3" data-aos="fade-up" data-aos-delay="700">
                    <h6 className="fw-bold mb-1">Location</h6>
                    <p className="text-muted">Madurai, India</p>
                  </Col>
                </Row>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
