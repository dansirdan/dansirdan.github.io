import React from 'react';
import { Carousel, Card, CardTitle } from 'react-materialize';
import './style.css';

const ProjectCarousel = (props) => {

  const { loadProject, projects } = props;

  return (

    <Carousel
      options={{
        dist: -40,
        duration: 300,
        fullWidth: false,
        indicators: false,
        noWrap: false,
        numVisible: 5,
        onCycleTo: loadProject,
        padding: 20,
        shift: 0
      }}>
      {projects.map((projectSM, index) => {

        return (
          <Card key={index} className={`${projectSM.color} lighten-5`} header={
            <CardTitle image='' className={`card-panel ${projectSM.color} lighten-2`}>
              {projectSM.title}
            </CardTitle>
          }>
            {projectSM.description}
          </Card>
        )
      })}
    </Carousel>
  );
};

export default ProjectCarousel;