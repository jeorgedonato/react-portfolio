import React from 'react';
import Container from '../../components/Container';
import SkillsCard from './SkillsCard';
import './style.css';

const Skills = () => {
  return (
    <>
      <Container className="skills-container">
        <div className="skills-content-container">
          <h2>Skills</h2>
          <div className="skills-flex-container">
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
        </div>
      </Container>
    </>
  );
};

export default Skills;