import React, {useRef, useState} from 'react';
import './style.css';
import VisibilitySensor from 'react-visibility-sensor';
import {useSpring, animated ,config} from 'react-spring'

const SkillsCard = props => {
  const curCard = useRef(null);
  const [inView, setInView] = useState(false);
  const onChange = isVisible => {
    setInView( isVisible ? true : false);
  }

  const springProps = useSpring({ width: inView ? `${props.percentage}` : '0%', config : config.stiff })

  return (
    <>
      <div className="skills-card">
        <span>{props.skill}</span>
        <VisibilitySensor onChange={onChange} partialVisibility delayedCall>
          <div className="meter" ref={curCard}>
            <div className="skill-percent">{props.percentage}</div>
            {/* <span style={{width: props.percentage}}></span> */}
            <animated.span style={springProps} />
          </div>
        </VisibilitySensor>
      </div>
    </>
  );
};

export default SkillsCard;