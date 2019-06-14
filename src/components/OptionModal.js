import React from 'react';
import Modal from 'react-modal';

// As a stateless functional component
const OptionModal = (props) => {
  return (
    <Modal
      isOpen={!!props.selectedOption}
      contentLabel="Selected Option"
      onRequestClose={props.clearSelectedOption}
      closeTimeoutMS={200}
      className="modal"
    >
      <h3 className="modal__title">Selected option</h3>
      {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.clearSelectedOption}>OK</button>
    </Modal>
  )
}

export default OptionModal;
