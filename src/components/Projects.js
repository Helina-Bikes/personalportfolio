import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  { title: 'Asset Management System', description: 'A comprehensive platform for tracking and managing assets efficiently. [Deployed here](https://artseb.studio/asset_mgt/login)', link: 'https://github.com/Helina-Bikes/asset-management-system', deployed: 'https://artseb.studio/asset_mgt/login' },
  { title: 'Fleet Management System', description: 'A solution for managing vehicle fleets, including tracking, maintenance, and reporting.', link: 'https://github.com/Helina-Bikes/fleet-management-system' },
  { title: 'Cinema Automation Mobile App', description: 'A mobile app to automate cinema operations, from ticketing to scheduling.', link: 'https://github.com/Helina-Bikes/cinema-automation-app' },
  { title: 'Resource Management System', description: 'A web app for managing resources and allocations in organizations.', link: 'https://github.com/Helina-Bikes/resource-management-system' },
  { title: 'Movie Management Web App', description: 'A web application for managing movie data, schedules, and reviews.', link: 'https://github.com/Helina-Bikes/movie-management-web-app' },
  { title: 'Painting Company Website (Kenya)', description: 'A modern, responsive website built for a painting company based in Kenya. Features company profile, services, and contact form.', link: 'https://github.com/Helina-Bikes/HellenaPainting' }
];

const Projects = () => (
  <section id="projects" className="py-5 bg-transparent">
    <Container>
      <h2 className="text-center mb-5 fw-bold">Projects</h2>
      <Row className="g-4">
        {projects.map((project, idx) => (
          <Col md={6} lg={4} key={project.title}>
            <Card className="glass shadow-soft project-card h-100 border-0">
              <Card.Body>
                <Card.Title className="fw-bold mb-2">{project.title}</Card.Title>
                <Card.Text className="mb-3">{project.description}
                  {project.deployed && (
                    <>
                      <br />
                      <a href={project.deployed} target="_blank" rel="noopener noreferrer" style={{ color: '#6366f1', fontWeight: 'bold' }}>
                        Deployed App <FaExternalLinkAlt style={{ marginLeft: 4 }} />
                      </a>
                    </>
                  )}
                </Card.Text>
                {project.link && (
                  <Button variant="outline-primary" href={project.link} target="_blank" className="fw-bold">
                    View Repository <FaExternalLinkAlt className="ms-2" />
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Projects; 