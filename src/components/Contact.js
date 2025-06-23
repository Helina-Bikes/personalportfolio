import React from 'react';
import { Container, Button, Card, Row, Col, Form } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => (
  <section id="contact" className="py-5 d-flex align-items-center justify-content-center" style={{ minHeight: '60vh', background: 'linear-gradient(120deg, #e0e7ff 0%, #f8fafc 100%)' }}>
    <Container>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="glass shadow-soft p-4 border-0">
            <Card.Body>
              <h2 className="text-center mb-4">Contact</h2>
              <div className="d-flex justify-content-center mb-3 gap-3">
                <a href="mailto:helinabikes0@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size={28} color="#6366f1" /></a>
                <a href="https://www.linkedin.com/in/helina-bikes-43a3a4259/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} color="#6366f1" /></a>
                <a href="https://github.com/Helina-Bikes" target="_blank" rel="noopener noreferrer"><FaGithub size={28} color="#6366f1" /></a>
              </div>
              <form action="https://formspree.io/f/xnnvgvjr" method="POST">
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter your email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" name="message" rows={3} placeholder="Your message" required />
                </Form.Group>
                <div className="d-grid">
                  <Button variant="primary" type="submit" className="fw-bold py-2">Send</Button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Contact; 