import React from 'react';
import './style.css';
import Resume from '../Resume/Donato-Jeorge-Resume.docx';

const AboutSocials = () => {
  return (
    <>
      <div className="about-socials">
        <a href="https://github.com/jeorgedonato" target="_blank" rel="noreferrer">
          <span className="tooltip" data-text="Github Link"></span>
          <i className="fa fa-github-square" aria-hidden="true"></i>
        </a><span className="separator"></span>
        <a rel="noreferrer" target="_blank" href={Resume}>
          <span className="tooltip" data-text="Download my Resume"></span>
          <i className="fa fa-file-word-o" aria-hidden="true"></i>
        </a><span className="separator"></span>
        <a href="https://www.linkedin.com/in/jeorgejdonato/" target="_blank" rel="noreferrer">
          <span className="tooltip" data-text="LinkedIn Link"></span>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        </a>
        
      </div>
    </>
  );
};

export default AboutSocials;