import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const WinnerModal = ({
  winner,
  showWinnerModal,
  resetGame,
  toggle,
  ...props
}) => {
  const handleReset = () => {
    resetGame();
  };

  return (
    <div>
      <Modal
        isOpen={showWinnerModal}
        toggle={toggle}
        {...props}
        className="modal"
      >
        <ModalHeader className="modal-title">Congratulations</ModalHeader>
        <ModalBody className="modal-center">
          {`Player ${winner} wins!`}
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

export default WinnerModal;
