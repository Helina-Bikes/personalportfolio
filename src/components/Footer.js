import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="py-3 bg-dark text-light mt-auto">
    <Container className="text-center">
      <small>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</small>
    </Container>
  </footer>
);

export default Footer; 