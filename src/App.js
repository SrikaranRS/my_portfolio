import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import NavbarComponent from './components/NavbarComponent';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AOS from 'aos';
import Hero from './components/Hero';
import Projects from './components/Project';
import Experience from './components/Experience';
import ProfileHighlights from './components/ProfileHighlights';
import HireMe from './components/HireMe';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <NavbarComponent />
      <Container fluid className="p-0">
     
     <Hero/>
        <About />
        <Experience/>
        <Projects/>
        <ProfileHighlights/>
        <Skills />
        <HireMe/>
      </Container>
    </>
  );
}

export default App;
