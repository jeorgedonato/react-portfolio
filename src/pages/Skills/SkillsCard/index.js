import React from 'react';
import './style.css';

const SkillsCard = props => {
  return (
    <>
      <div className="skills-card">
        <span>{props.skill}</span>
        <div className="meter">
          <div className="skill-percent">{props.percentage}</div>
          <span style={{width: props.percentage}}></span>
        </div>
      </div>
    </>
  );
};

export default SkillsCard;