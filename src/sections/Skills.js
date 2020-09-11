import React from 'react'
import { Row, Col } from 'react-materialize';
import Chips from '../components/Chips';

const Skills = () => {
  return (
    <div className='section container'>
      <Row>
        <Col>
          <div className='center-align'>
            <div className='divider' />
            <br />
            <Chips />
            <br />
            <br />
            <div className='divider' />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Skills;
