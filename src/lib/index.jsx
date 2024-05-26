import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types'; // Importer PropTypes

function MyModal({
  open,
  containerObject,
  messageObject,
  buttonObject,
  modalMessage,
  buttonMessage,
}) {
  const [isOpen, setIsOpen] = useState(open); // Initialiser isOpen avec la prop open

  useEffect(() => {
    setIsOpen(open); // Mettre à jour isOpen avec la prop open
  }, [open]);

  const ModalContainer = styled.div`
    position: absolute;
    width: 30%;
    height: 30%;
    color: black;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: solid black;

    ${containerObject}
  `;

  const Modal = styled.div`
    display: flex;
    justify-content: center;
    ${messageObject}
  `;

  const ModalButton = styled.button`
    display: flex;
    justify-content: center;
    width: 30%;
    height: auto;
    ${buttonObject}
  `;

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ModalContainer
      className="modalContainer"
      style={isOpen ? { display: 'flex' } : { display: 'none' }}
    >
      <Modal className="modalMessage">{modalMessage || 'opération validée'}</Modal>
      <ModalButton onClick={closeModal} className="modalButton">
        {buttonMessage || 'ok'}
      </ModalButton>
    </ModalContainer>
  );
}

// Ajoutez la validation des props
MyModal.propTypes = {
  open: PropTypes.bool.isRequired,
  containerObject: PropTypes.object.isRequired,
  messageObject: PropTypes.object.isRequired,
  buttonObject: PropTypes.object.isRequired,
  modalMessage: PropTypes.string, // Facultatif
  buttonMessage: PropTypes.string, // Facultatif
};

export default MyModal;