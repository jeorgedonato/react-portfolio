import React,{Suspense,lazy} from 'react'
// import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet';
import WebIcon from './components/Images/webicon.png';
import './App.css';

const About  = lazy(() => import('./pages/About'));
const Landing  = lazy(() => import('./components/Landing'));
const Projects  = lazy(() => import('./pages/Projects'));
const Skills  = lazy(() => import('./pages/Skills'));
const Navbar  = lazy(() => import('./components/Navbar'));
const Footer  = lazy(() => import('./components/Footer'));

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
    <Suspense fallback={<h3>Loading…</h3>}>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </Suspense>
    
   </div>
  );
}

export default App;
