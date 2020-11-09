import React,{useRef, useState, useEffect} from 'react';
import './style.css';
import Banner from '../Images/portfolio-banner.jpg';
import Listlinks from '../Listlinks';
  
const Navbar = () => {
  const ulNav = useRef(null);
  const navRef = useRef(null);
  let initialNavClass = ["nav-links"];
  const [navClass,setNavClass] = useState("nav-active");
  const [navClassNames,setNavClassNames] = useState(initialNavClass);
  // const [scrollVert,setScrollVert] = useState(null);
  
  const scrollCheck = () => {
    if(window.scrollY < 100){
     navRef.current.classList.toggle("transparent-nav");
    }
  };

  

  const navSlide = (e) => {
    setNavClass(!navClass ? "nav-active nav-links-active" : "");
    setNavClassNames([...initialNavClass, navClass]);
    ulNav.current.classList.toggle("asasd")
    // console.log(ulNav.current.classList)
    const navLinks = ulNav.current.children;

    let navI = 0;
    for (let nl of navLinks) {
      if(nl.style.animation){
        nl.style.animation = "";
      }else{
        nl.style.animation = `navLinkFade 0.5s ease forwards ${navI /7 + .5}s`;
      }
        navI++;
    }
    //Burger animation
    e.currentTarget.classList.toggle("toggle");
    // if( navRef.current.classList.contains("transparent-nav")){
      // console.log(navRef.current.classList)
    scrollCheck();
    // }
  };

  useEffect(() => {
    // scrollCheck();
    window.addEventListener("scroll", () => {
      if(window.scrollY >= 100){
        navRef.current.classList.remove("transparent-nav");
      }else{
        navRef.current.classList.add("transparent-nav");
      }
    });
  });

  

  return (
    <>
      <nav className="transparent-nav" ref={navRef}>
        <div className="logo">
          <h4>Jeorge Donato</h4>
          </div>
          <ul className={navClassNames.join(" ")} ref={ulNav}>
            <Listlinks title="Home" />
            <Listlinks title="About" />
            <Listlinks title="Projects" />
            <Listlinks title="About" />
          </ul>
          <div className="burger" onClick={e=> navSlide(e)}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
