import React from 'react';
import { Row, Col, Chip } from 'react-materialize';
import './style.css';

const ProjectDetail = (props) => {

  const {
    color,
    description,
    userStory,
    tech,
    appLink,
    repoLink,
    modalImage
  } = props.data;

  return (
    <div className='container'>
      <Row>
        <p>{description}</p>
        <Col
          l={8}
          m={8}
          s={12}
          xl={8}
        >
          <img className="responsive-img" src={modalImage.src} alt={modalImage.alt} />
        </Col>
        <Col
          l={4}
          m={4}
          s={12}
          xl={4}
        >
          <ul className="collection" style={{ marginTop: 0 }}>
            <a href={appLink} target="_blank" rel='noopener noreferrer' className="collection-item">Deployed App</a>
            <a href={repoLink} target="_blank" rel='noopener noreferrer' className="collection-item">Repository</a>
          </ul>
        </Col>
      </Row>
      <Row>
        <h6>User Story</h6>
        <div className='divider' />
        <p>{userStory}</p>
      </Row>
      <Row>
        {tech.map((badge, index) => (
          <Chip
            className={`${color} lighten-${index}`}
            key={index}
            close={false}
            options={null}
          >
            {badge}
          </Chip>
        ))}
      </Row>
    </div>
  );
};

export default ProjectDetail;