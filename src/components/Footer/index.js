import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <>
      <footer>
         <p>
            <a href="tel:7144682863" >
              <i className="fa fa-phone-square" aria-hidden="true"></i>
            </a>
            <a href="mailto:jeorgekhenr@gmail.com">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
            <a href="https://www.linkedin.com/in/jeorgejdonato/" target="_blank" rel="noreferrer">
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            </a>
            <a href="https://github.com/jeorgedonato" target="_blank" rel="noreferrer">
              <i className="fa fa-github-square" aria-hidden="true"></i>
            </a>
          </p>
        <h3>© Jeorge Janil Donato 2020</h3>
      </footer>
    </>
  )
};

export default Footer;