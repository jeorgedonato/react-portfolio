import React from 'react';
import './style.css';
import Container from '../Container';
import ProjectsContent from '../ProjectsContent';
import ProjectFlexContainer from '../ProjectFlexContainer';
import Card from '../Card';

const Projects = () => {
  return (
    <>
      <Container className="projects-container">
        <ProjectsContent>
          <h2>Projects</h2>
          <ProjectFlexContainer>
            <Card text="sun" src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg" />
            <Card text="sun" src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg" />
            <Card text="sun" src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg" />
            <Card text="sun" src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg" />
            <Card text="sun" src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg" />
            <Card text="sun" src="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg" />
          </ProjectFlexContainer>
        </ProjectsContent>
      </Container>
    </>
  );
};

export default Projects;