import React, { useState } from 'react';
import { Row, Button, Icon } from 'react-materialize';
import LargeModal from '../components/LargeModal';
import Carousel from '../components/Carousel';
import ProjectDetail from '../components/ProjectDetail';
const $ = window.$;

const { projects } = require('./projects.json');
// const projectTitles = ['dsl', 'react-robot', 'kino-training', '', '', ''];
const projectColors = ['red', 'orange', 'amber', 'yellow', 'lime', 'green'];

const Projects = () => {

  const [projectIndx, setProjectIndx] = useState(0);
  const trigger =
    <Button
      className={projectColors[projectIndx]}
      floating
      node="button"
      tooltip="launch the modal for more information"
      icon={<Icon>open_in_browser</Icon>}
      large
      waves="light"
    />;
  const modalActions = [
    <Button flat modal="close" node="button" waves="green">Close</Button>
  ];

  // triggered every carousel scroll
  // dynamically load in project info
  const loadProject = (ele) => {
    // console.log(dragged);
    setProjectIndx($(ele).index());
  };

  return (
    <div className='section container'>
      <Row>
        <div className='center-align'>
          <Carousel
            loadProject={loadProject}
            projects={projects}
            colors={projectColors}
            currentIndx={projectIndx}
          />
          <LargeModal
            actions={modalActions}
            header={projects[projectIndx].title}
            trigger={trigger}>
            {/* custom project div component will go here */}
            <ProjectDetail
              data={projects[projectIndx]}
            />
          </LargeModal>
        </div>
      </Row>
    </div>
  );
};

export default Projects;