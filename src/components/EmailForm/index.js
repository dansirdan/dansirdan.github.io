import React, { useState } from 'react';
import { TextInput, Textarea, Button, Icon, Row, Col } from 'react-materialize';

const EmailForm = () => {

  // setting formObj state
  const [formObj, setFormObj] = useState({
    subject: '',
    message: '',
    isSending: false
  });

  const handleInputChange = (e) => {
    // destructuring the event.target object
    // using the rest operator to change the specific key/value pair
    const { name, value } = e.target;
    setFormObj({ ...formObj, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    // initializing our form submission with a loading circle
    setFormObj({ ...formObj, isSending: true });
    console.log(formObj);
    window.open(`mailto:daniel.monteton@gmail.com?subject=${formObj.subject}&body=${formObj.message}`)
  };

  return (
    <div>
      <h6>
        Draft your email below and click submit to send the contents to your default emailing app*.
      </h6>
      <Row>
        <Col className='container'>
          <TextInput
            l={12}
            m={12}
            s={12}
            xl={12}
            label='Message Subject'
            name='subject'
            onChange={handleInputChange}
            data-length={35}
            validate
            error='please enter a subject of 35 characters or less'
          />
          <Textarea
            l={12}
            m={12}
            s={12}
            xl={12}
            label='Message Body'
            name='message'
            onChange={handleInputChange}
            data-length={250}
            validate
            error='please enter a message of 250 characters or less'
          />
          <Button
            node="button"
            onClick={submitForm}
            disabled={
              formObj.subject.length >= 1 && formObj.message.length >= 1
                ? false : true}>
            Submit
          <Icon right>
              send
          </Icon>
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default EmailForm;