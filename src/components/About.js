import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './About.css';

const About = () => (
  <section id="about" className="py-5 bg-transparent">
    <Container>
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <Card className="glass shadow-soft about-card border-0 p-4">
            <Row className="align-items-center g-4">
              <Col xs={12} md={4} className="text-center">
                <Image src="helinapic.jpg" roundedCircle fluid style={{ width: 120, height: 120, objectFit: 'cover', border: '3px solid #6366f1' }} alt="Helina Bikes" />
              </Col>
              <Col xs={12} md={8}>
                <h2 className="fw-bold mb-3">About Me</h2>
                <p className="mb-2">
                  Hi! I'm Helina Bikes, a passionate full stack web and mobile app developer based in Ethiopia. I am a Computer Science graduate from Addis Ababa University. I love building impactful digital solutions and have experience in both frontend and backend development.
                </p>
                <p className="mb-2">
                  My projects include asset management systems, fleet management systems, cinema automation mobile apps, resource management systems, movie management web apps, and more.
                </p>
                <p className="mb-0">
                  <a href="https://github.com/Helina-Bikes" target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', fontWeight: 'bold' }}>View my GitHub &rarr;</a>
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>
);

export default About; 