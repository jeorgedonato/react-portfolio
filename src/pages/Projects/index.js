import React from 'react';
import './style.css';
import Container from '../../components/Container';
import ProjectsContent from './ProjectsContent';
import ProjectFlexContainer from './ProjectFlexContainer';
import Card from '../../components/Card';
// import Logo from '../Images/bootstocks.png';

const Projects = () => {
  return (
    <>
      <Container className="projects-container">
        <ProjectsContent>
          <h2>Projects</h2>
          <ProjectFlexContainer>
            <Card 
              text="Spent Smart" 
              repo="https://github.com/jeorgedonato/spent-smart" 
              demo="https://spentsmart.herokuapp.com/" 
              desc="Spent Smart allows users to input their monthly income and expense breakdown (along with their associated category options, such as paycheck, food, transportation, etc.)."
              src={'/ProjectImages/burger-express.png'} />
            <Card 
              text="BootStocks" 
              repo="https://github.com/jeorgedonato/BootStocks" 
              demo="https://bootstocks.herokuapp.com/" 
              desc="A Fullstack Web Application that allowing users to create their mock stock portfolio."
              src={'/ProjectImages/bootstocks.png'} />
            <Card 
              text="To Make or To Go" 
              repo="https://github.com/jeorgedonato/to-make-or-to-go" 
              demo="https://raytieu.github.io/to-make-or-to-go/" 
              desc="A Web Application that utilizes Yelp Api and Google Maps Api that allowing users to search for recipes or a restaurant."
              src={'/ProjectImages/tomake-togo.png'} />
            <Card 
              text="PWA Budget Tracker" 
              repo="https://github.com/jeorgedonato/pwa-budget-tracker" 
              desc="A Full Stack Web Application that can be use either online or offline backed up with indexed DB so the users won't worry about their internet connections."
              demo="https://cryptic-journey-32780.herokuapp.com/" 
              src={'/ProjectImages/budget-tracker.png'} />
            <Card 
              text="Fitness Tracker" 
              repo="https://github.com/jeorgedonato/fitness-tracker" 
              demo="https://fathomless-dawn-59155.herokuapp.com/" 
              desc="A Full Stack Web Application that allow users to create their own workout regime along with a useful charts."
              src={'/ProjectImages/fitness-tracker.png'} />
            <Card 
              text="Note Taker" 
              repo="https://github.com/jeorgedonato/note-taker" 
              demo="https://letmetakenotes.herokuapp.com/" 
              desc="A Full Stack Web App that can retrieve, add, update, delete user's notes."
              src={'/ProjectImages/note-taker.png'} />
          </ProjectFlexContainer>
        </ProjectsContent>
      </Container>
    </>
  );
};

export default Projects;