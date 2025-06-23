import React, { useEffect, useRef, useState } from 'react';
import { Container, Button, Image } from 'react-bootstrap';
import './Hero.css';

const typewriterText = 'Passionate Full Stack Web & Mobile App Developer based in Ethiopia';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [typeIndex, setTypeIndex] = useState(0);
  const intervalRef = useRef(null);

  const startTypewriter = () => {
    setDisplayedText('');
    setTypeIndex(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setTypeIndex((prev) => {
        const nextIndex = prev + 1;
        setDisplayedText(typewriterText.slice(0, nextIndex));
        if (nextIndex >= typewriterText.length) {
          clearInterval(intervalRef.current);
        }
        return nextIndex;
      });
    }, 40);
  };

  useEffect(() => {
    startTypewriter();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line
  }, []);

  return (
    <section className="hero-section d-flex align-items-center min-vh-100" style={{
      background: 'linear-gradient(120deg, #6366f1 0%, #a5b4fc 100%)',
      color: '#fff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Container className="text-center fade-in">
        <Image src="helinapic.jpg" roundedCircle fluid style={{ width: 120, height: 120, objectFit: 'cover', border: '3px solid #6366f1' }} alt="Helina Bikes" />
        <h1 className="display-3 fw-bold mt-3">Helina Bikes</h1>
        <div>
          <p className="lead mb-4 typewriter-text" onMouseEnter={startTypewriter} style={{cursor: 'pointer', marginBottom: 0}}>
            {displayedText}<span className="typewriter-cursor">|</span>
          </p>
        </div>
        <div className="mt-4">
          <Button variant="light" size="lg" href="#contact" className="fw-bold px-4 py-2">Contact Me</Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero; 