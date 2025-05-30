import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
    <Container>
      <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="ms-auto">
          {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
            <Nav.Link key={section}>
              <Link to={section} smooth duration={500} offset={-70}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
