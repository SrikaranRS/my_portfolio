import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => (
  <section id="contact" className="py-5" data-aos="fade-left">
    <Container>
      <h2 className="text-center mb-4">Contact</h2>
      <Form className="mx-auto" style={{ maxWidth: '600px' }}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Your message" />
        </Form.Group>
        <Button variant="primary" type="submit">Send</Button>
      </Form>
    </Container>
  </section>
);

export default Contact;
