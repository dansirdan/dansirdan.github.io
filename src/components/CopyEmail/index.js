import React, { useState } from 'react';
import { Button, Icon } from 'react-materialize';
const copy = require('clipboard-copy');

const CopyEmail = () => {

  // setting delay copy/checkmark icon
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyMessage, setCopyMessage] = useState('click to copy email to clipboard');

  const copyEmail = () => {

    copy('daniel.monteton@gmail.com');
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
    setCopySuccess(true);
    setCopyMessage('You already copied the email (^_^)');

  };

  return (
    <Button
      className='green'
      node="button"
      floating
      tooltip={copyMessage}
      tooltipOptions={{
        position: 'left'
      }}
      onClick={copyEmail}
    >
      <Icon>
        {copySuccess ? 'library_add_check' : 'content_copy'}
      </Icon>
    </Button>
  );
};

export default CopyEmail;