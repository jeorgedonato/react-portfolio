import React,{useRef, useState} from 'react';
import './style.css';
import Banner from '../Images/portfolio-banner.jpg';
  
const Navbar = () => {
  const nav = useRef(null);
  const [navClass,setNavClass] = useState("");
  let navClassnames = ["nav-links"];

  const navSlide = () => {
    setNavClass(navClass ? "" : "nav-active");
    navClassnames.push(navClass);
    console.log(navClassnames.join(" "))
  };
  return (
    <>
      <nav >
        <div className="logo">
          <h4>The Nav</h4>
          </div>
          <ul className={navClassnames.join(" ")} ref={nav}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Work</a>
            </li>
            <li>
              <a href="/">Projects</a>
            </li>
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
