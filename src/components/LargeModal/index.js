import React from 'react';
import { Modal } from 'react-materialize';

const LargetModal = (props) => {

  return (
    <Modal
      actions={props.actions}
      bottomSheet={false}
      fixedFooter
      header={props.header}
      id="modal-0"
      options={{
        dismissible: true,
        endingTop: '10%',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        opacity: 0.5,
        outDuration: 250,
        preventScrolling: true,
        startingTop: '4%'
      }}
      trigger={props.trigger}>
      {props.children}
    </Modal>
  )
}

export default LargetModal;