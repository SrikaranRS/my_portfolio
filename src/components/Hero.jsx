import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => (
  <section id="home" className="text-center d-flex align-items-center justify-content-center flex-column vh-100 bg-primary text-white" data-aos="fade-up">
    <Container>
      <h1>Hello, I'm <span className="text-warning">Srikaran R S</span></h1>
      <p className="lead">Software Developer | React Js | Java</p>
      
      <div className="mt-4 d-flex justify-content-center gap-3">
        <a href="https://www.linkedin.com/in/srikaran-r-s-0054141b4" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
          <FaLinkedin />
        </a>
        <a href="https://github.com/SrikaranRS" target="_blank" rel="noopener noreferrer" className="text-white fs-3">
          <FaGithub />
        </a>
      </div>
    </Container>
  </section>
);

export default Hero;
