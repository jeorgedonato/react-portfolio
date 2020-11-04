import React,{useRef, useState} from 'react';
import './style.css';
import Banner from '../Images/portfolio-banner.jpg';
import Listlinks from '../Listlinks';
  
const Navbar = () => {
  const ulNav = useRef(null);
  let initialNavClass = ["nav-links"];
  const [navClass,setNavClass] = useState("nav-active");
  const [navClassNames,setNavClassNames] = useState(initialNavClass);
  

  const navSlide = () => {
    setNavClass(!navClass ? "nav-active" : "");
    setNavClassNames([...initialNavClass, navClass]);
    // console.log(navClassNames.join(" "));
    // const navLinks = document.querySelectorAll('.nav-links li');
    const navLinks = ulNav.current.children;
    let navI = 0;
    for (let nl of navLinks) {
        nl.style.animation = `navLinkFade 0.5s ease forwards ${navI /2.5}s`;
        navI++;
    }
   
  };
  return (
    <>
      <nav >
        <div className="logo">
          <h4>Jeorge Donato</h4>
          </div>
          <ul className={navClassNames.join(" ")} ref={ulNav}>
            <Listlinks title="Home" />
            <Listlinks title="About" />
            <Listlinks title="Projects" />
            <Listlinks title="About" />
          </ul>
          <div className="burger" onClick={()=> navSlide()}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
