import React from 'react';
import Container from '../Container';
import Overlay from '../Overlay';
import LandingText from '../LandingText';
import './style.css';


const Landing = () => {

  return (
    <>
      <Container className="landing-container">
        <Overlay />
        <LandingText />
      </Container>
    </>
  );

};

export default Landing;