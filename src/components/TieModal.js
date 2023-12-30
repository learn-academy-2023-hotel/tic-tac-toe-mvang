import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const TieModal = ({ showTieModal, resetGame, toggle, ...props }) => {
  const handleReset = () => {
    resetGame();
    toggle();
  };

  return (
    <div>
      <Modal isOpen={showTieModal} toggle={toggle} {...props} className="modal">
        <ModalHeader className="modal-title">TIED GAME</ModalHeader>
        <ModalBody className="modal-center">
          No Players won.
          <br />
          Do you want to play again?
        </ModalBody>
        <ModalFooter className="modal-center">
        <span className="modal-button" onClick={handleReset}>
            Yes
          </span>{" "}
          <span className="modal-button" onClick={toggle}>
            No
          </span>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TieModal;
