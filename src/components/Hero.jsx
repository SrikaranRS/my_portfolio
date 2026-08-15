import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa';

const Hero = () => (
  <section
    id="home"
    className="text-center d-flex align-items-center justify-content-center flex-column vh-100 bg-primary text-white"
    data-aos="fade-up"
  >
    <Container>
      <p className="text-uppercase fw-semibold mb-2">
        Senior Software Engineer
      </p>

      <h1 className="display-3 fw-bold">
        Hello, I'm{' '}
        <span className="text-warning">
          Srikaran R S
        </span>
      </h1>

      <p className="lead mt-3">
        Full Stack Developer | React.js | Java | Spring Boot
      </p>

      <p className="mx-auto mt-3" style={{ maxWidth: '750px' }}>
        Full Stack Developer with 4+ years of experience building
        scalable web applications across the BFSI domain, with
        expertise in React.js, Java, Spring Boot, ExtJS, REST APIs
        and Microservices.
      </p>

      <div className="mt-4 d-flex justify-content-center gap-4">
        <a
          href="https://www.linkedin.com/in/srikaran-r-s-0054141b4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white fs-2"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/SrikaranRS"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white fs-2"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      <div className="mt-5">
        <a
          href="#profile-highlights"
          className="text-white"
          aria-label="Scroll down"
        >
          <FaArrowDown className="fs-4" />
        </a>
      </div>
    </Container>
  </section>
);

export default Hero;