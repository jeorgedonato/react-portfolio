import React from 'react'
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet';
import WebIcon from './components/Images/webicon.png';
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
   <div>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:title" content="Jeorge Donato" />
        <meta name="author" content="Jeorge Donato" />
        <meta property="og:locale" content="en_US" />
        <meta name="description" content="Full Stack Web Developer" />
        <meta property="og:description" content="Full Stack Web Developer" />
        <title>Jeorge Donato | Full Stack Web Developer</title>
        <link rel="icon" href={WebIcon}></link>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"></link>
    </Helmet>
    <Navbar />
    <Landing />
    <About />
    <Projects />
   </div>
  );
}

export default App;
