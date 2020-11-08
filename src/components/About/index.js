import React from 'react';
import './style.css';
import AboutPic from '../AboutPic';
import Container from '../Container';
import AboutContent from '../AboutContent';
import AboutSocials from '../AboutSocials';
import AboutParagraph from '../AboutParagraph';

const About = () => {
  return (
    <>
    <Container className="about-container">
      <AboutContent>
       <AboutPic />
       <AboutSocials />
       <AboutParagraph />
      </AboutContent>
      
    </Container>
    </>
  )
};

export default About;