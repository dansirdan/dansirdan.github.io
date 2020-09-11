import React from 'react';
import { Button, Icon } from 'react-materialize';
import EmailForm from '../EmailForm';
import LargeModal from '../LargeModal';
import CopyEmail from '../CopyEmail';
import './style.css';

const CustomFAB = () => {
  const tooltipOptions = { position: 'left' }
  const trigger =
    <Button
      className="red"
      floating
      tooltip={'click to draft an email'}
      tooltipOptions={tooltipOptions}
      node="button"
    ><Icon>email</Icon></Button>;
  const modalActions = [
    <Button flat modal="close" node="button" waves="green">Close</Button>
  ];

  return (
    <div className='container'>
      <Button
        className="red"
        fab
        floating
        large
        node="button"
      >
        <LargeModal
          actions={modalActions}
          header={''}
          trigger={trigger}>
          {/* custom email component will go here */}
          <EmailForm />
        </LargeModal>
        <CopyEmail />
        <Button
          className="blue"
          floating
          disabled={true}
          node="button"
        ><Icon>star</Icon></Button>
      </Button>
    </div>
  );
};

export default CustomFAB;