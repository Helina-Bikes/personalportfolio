import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaJs, FaReact, FaBootstrap, FaCss3Alt, FaJava, FaLaravel, FaPython } from 'react-icons/fa';
import { SiSpringboot, SiFlutter, SiNumpy, SiPandas } from 'react-icons/si';
import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: <FaJs color="#f7df1e" />, level: 'Advanced' },
  { name: 'React', icon: <FaReact color="#61dafb" />, level: 'Advanced' },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952b3" />, level: 'Intermediate' },
  { name: 'CSS', icon: <FaCss3Alt color="#264de4" />, level: 'Intermediate' },
  { name: 'Spring Boot', icon: <SiSpringboot color="#6DB33F" />, level: 'Intermediate' },
  { name: 'Flutter', icon: <SiFlutter color="#02569B" />, level: 'Intermediate' },
  { name: 'Laravel', icon: <FaLaravel color="#FF2D20" />, level: 'Intermediate' },
  { name: 'Pandas', icon: <SiPandas color="#150458" />, level: 'Beginner' },
  { name: 'NumPy', icon: <SiNumpy color="#013243" />, level: 'Beginner' },
];

const Skills = () => (
  <section id="skills" className="py-5 bg-transparent">
    <Container>
      <h2 className="text-center mb-5 fw-bold">Skills</h2>
      <Row className="g-4 justify-content-center">
        {skills.map((skill, idx) => (
          <Col xs={10} sm={6} md={4} lg={3} key={skill.name}>
            <Card className="glass shadow-soft skill-card text-center border-0 p-4">
              <div className="mb-3" style={{ fontSize: 48 }}>{skill.icon}</div>
              <Card.Title className="fw-bold mb-1">{skill.name}</Card.Title>
              <Card.Text className="text-muted">{skill.level}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Skills; 