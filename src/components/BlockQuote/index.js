import React from 'react';
import { Row, Col } from 'react-materialize';

const BlockQuote = () => {
  return (
    <div className='container'>
      <Row>
        <Col className='lieft-align'>
          <blockquote className='flow-text'>
            <p>"The performance is the practice; the practice is the performance."</p>
            <p>- Joanna Kotze</p>
          </blockquote>
        </Col>
      </Row>
    </div>
  );
};

export default BlockQuote;