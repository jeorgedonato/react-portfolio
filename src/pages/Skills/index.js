import React, { useRef } from 'react';
import Container from '../../components/Container';
import SkillsCard from './SkillsCard';
import './style.css';
import VisibilitySensor from 'react-visibility-sensor';

const Skills = () => {

  const skillFlex = useRef(null);

  const onChange = isVisible => {
    // const skillCards = skillFlex.current.children;
    // if (isVisible) {
    //   let navI = 0;
    //   for (let sc of skillCards) {
    //       sc.style.animation = `fadeInRight 0.5s ease forwards ${navI / 5 + .5}s`;
    //     navI++;
    //   }
    // } else {
    //   for (let sc of skillCards) {
    //       sc.style.animation = "";
    //   }
    // }
  }


  return (
    <>
      <Container className="skills-container">
        <div className="skills-content-container">
          <h2>Skills</h2>
          <VisibilitySensor onChange={onChange} partialVisibility delayedCall>
            <div className="skills-flex-container" ref={skillFlex}>
              <SkillsCard skill="HTML" percentage="97%" />
              <SkillsCard skill="Javascript" percentage="97%" />
              <SkillsCard skill="PHP" percentage="75%" />
              <SkillsCard skill="CSS3" percentage="90%" />
              <SkillsCard skill="React JS" percentage="85%" />
              <SkillsCard skill="Redux" percentage="80%" />
              <SkillsCard skill="MongoDB" percentage="95%" />
              <SkillsCard skill="MySQL" percentage="98%" />
              <SkillsCard skill="Node JS" percentage="93%" />
              <SkillsCard skill="JQuery" percentage="94%" />
            </div>
          </VisibilitySensor>
        </div>
      </Container>
    </>
  );
};

export default Skills;