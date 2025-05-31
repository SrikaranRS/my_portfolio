import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsFileEarmarkText } from 'react-icons/bs';

const HireMe = () => {
  return (
    <section className="py-5 text-white" style={{ backgroundColor: '#0d6efd' }}>
      <Container className="text-center">
        <BsFileEarmarkText size={60} className="mb-4" />

        <h2 className="mb-3 fw-bold">Let’s Work Together</h2>
        <p className="lead mb-4">
          I’m a React developer with a strong foundation in both frontend and backend technologies. Let’s collaborate to build something impactful and efficient.
        </p>

        <Row className="justify-content-center">
          <Col xs="auto">
            <a href={`${process.env.PUBLIC_URL}/SrikaranS_Resume.pdf`} target="_blank" rel="noopener noreferrer">
              <Button variant="light" className="me-3 px-4">
                View Resume
              </Button>
            </a>
            <a href={`${process.env.PUBLIC_URL}/SrikaranS_Resume.pdf`} download>
              <Button variant="outline-light" className="px-4">
                Download Resume
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HireMe;
