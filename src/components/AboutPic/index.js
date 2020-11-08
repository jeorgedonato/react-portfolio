import React from 'react';
import ProfilePic from '../Images/profilepic.jpg';
import './style.css';


const AboutPic = () => {
  return (
    <>
      <img className="about-pic" src={ProfilePic} alt="Jeorge Donato Pic" />
    </>
  );
};

export default AboutPic;