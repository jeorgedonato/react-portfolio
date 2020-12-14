import React, {useRef} from 'react';
import './style.scss';
import AboutPic from './AboutPic';
import Container from '../../components/Container';
import AboutContent from './AboutContent';
import AboutSocials from './AboutSocials';
import AboutParagraph from './AboutParagraph';
import VisibilitySensor from 'react-visibility-sensor';

const About = () => {
  const aboutDivAnimate = useRef(null);
  const onChange = isVisible => {
    if(isVisible){
      aboutDivAnimate.current.style.animation = `fadeInLeft 0.8s ease-in-out`;
    }else{
      aboutDivAnimate.current.style.animation = "";
    }
  }

  return (
    <>
      <Container className="about-container">
        <VisibilitySensor onChange={onChange} partialVisibility delayedCall>
          <div ref={aboutDivAnimate}>
            <AboutContent >
              <AboutPic />
              <AboutSocials />
              <AboutParagraph />
            </AboutContent>
          </div>
        </VisibilitySensor>
      </Container>
    </>
  )
};

export default About;