import React from 'react';
import { Button, Icon } from 'react-materialize';
import EmailForm from '../components/EmailForm';
import LargeModal from '../components/LargeModal';
import CopyEmail from '../components/CopyEmail';

const Contact = () => {

  const trigger =
    <Button
      className="red"
      flat
      tooltip={'click to draft an email'}
      tooltipOptions={{
        position: 'bottom'
      }}
      icon={<Icon>email</Icon>}
      node="button"
    />;

  return (
    <div className='section container'>
      <LargeModal
        header={''}
        trigger={trigger}>
        <EmailForm />
      </LargeModal>
      <CopyEmail />
    </div>
  );
};

export default Contact;