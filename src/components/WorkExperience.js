import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const experiences = [
  {
    company: 'Gebeyax (South Africa)',
    role: 'Flutter Mobile App Debugger',
    location: 'Remote',
    period: '2023',
    description: 'Contributed to debugging and improving the Gebeyax mobile app using Flutter.'
  },
  {
    company: 'Omishitu Joy Agtech company',
    role: 'Full Stack Developer As intern',
    location: 'Addis Ababa, Ethiopia',
    period: '2024-2025',
    description: 'Worked on laravel projects.'
  },
  {
    company: 'Zemen Bank',
    role: 'It Officer',
    location: 'Addis Ababa, Ethiopia',
    period: '2025-now',
    
  },
  {
    company: 'ACSO Company',
    role: 'Full Stack Web Developer',
    location: 'Addis Ababa, Ethiopia',
    period: '2022-2023',
    description: 'Worked as a full stack web developer, building and maintaining web applications.'
  }
];

const WorkExperience = () => (
  <section id="work-experience" className="py-5 bg-transparent">
    <Container>
      <h2 className="text-center mb-5 fw-bold">Work Experience</h2>
      <Row className="g-4 justify-content-center">
        {experiences.map((exp, idx) => (
          <Col xs={12} md={10} lg={8} key={exp.company + idx}>
            <Card className="glass shadow-soft border-0 p-4 mb-3">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="fw-bold mb-0">{exp.role}</h5>
                  <span className="text-muted small">{exp.period}</span>
                </div>
                <h6 className="mb-1">{exp.company}</h6>
                <div className="text-muted mb-2" style={{ fontSize: '0.95em' }}>{exp.location}</div>
                <Card.Text>{exp.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default WorkExperience; 