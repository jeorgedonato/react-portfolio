import React from 'react';
import './style.css';
import Container from '../Container';
import ProjectsContent from '../ProjectsContent';
import ProjectFlexContainer from '../ProjectFlexContainer';
import Card from '../Card';
// import Logo from '../Images/bootstocks.png';

const Projects = () => {
  return (
    <>
      <Container className="projects-container">
        <ProjectsContent>
          <h2>Projects</h2>
          <ProjectFlexContainer>
            <Card text="BootStocks" repo="https://github.com/jeorgedonato/BootStocks" demo="https://bootstocks.herokuapp.com/" src={'/ProjectImages/bootstocks.png'} />
            <Card text="To Make or To Go" repo="https://github.com/jeorgedonato/to-make-or-to-go" demo="https://raytieu.github.io/to-make-or-to-go/" src={'/ProjectImages/tomake-togo.png'} />
            <Card text="PWA Budget Tracker" repo="https://github.com/jeorgedonato/pwa-budget-tracker" demo="https://cryptic-journey-32780.herokuapp.com/" src={'/ProjectImages/budget-tracker.png'} />
            <Card text="Fitness Tracker" repo="https://github.com/jeorgedonato/fitness-tracker" demo="https://fathomless-dawn-59155.herokuapp.com/" src={'/ProjectImages/fitness-tracker.png'} />
            <Card text="Burger Express" repo="https://github.com/jeorgedonato/burger-express" demo="https://hidden-beach-50994.herokuapp.com/" src={'/ProjectImages/burger-express.png'} />
            <Card text="Note Taker" repo="https://github.com/jeorgedonato/note-taker" demo="https://letmetakenotes.herokuapp.com/" src={'/ProjectImages/note-taker.png'} />
          </ProjectFlexContainer>
        </ProjectsContent>
      </Container>
    </>
  );
};

export default Projects;