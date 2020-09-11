import React from 'react';
import { Row, Col } from 'react-materialize';

const About = () => {

  return (
    <div className='section container'>
      <div className='hide-on-small-only flow-text'>
        <h4>Full Stack Engineer</h4>
        <div className='divider' />
        <br />
      </div>
      <Row>
        <Col
          l={4}
          m={4}
          s={12}
          xl={4}
        >
          <img
            src='images/profile2.jpg'
            alt='Dan Mont-Eton'
            className='circle responsive-img z-depth-2'
          />
        </Col>
        <Col
          l={8}
          m={8}
          s={12}
          xl={8}>
          <div className='hide-on-small-only flow-text'>
            <blockquote>
              I am deeply passionate about people and technology. My previous experience from the dance world
              has given me a generous base that I hope will continue to shape me into becoming a highly creative, collaborative, and adaptive engineer.
            </blockquote>
          </div>
          <div className='hide-on-med-and-up center-align flow-text'>
            <h4>Full Stack Engineer</h4>
            <div className='divider' />
            <br />
            I am deeply passionate about people and technology. My previous experience from the dance world
            has given me a generous base that I hope will continue to shape me into becoming a highly creative, collaborative, and adaptive engineer.
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
