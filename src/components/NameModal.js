import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'

const NameModal = () => {

    const handleClick = () => {
        
    }

    return(
        <div>
            <Modal>
                <ModalHeader>
                    Hello Player, what's your name?
                </ModalHeader>
                <ModalBody>
                    <form>
                        <label>
                            <input type="text" name="name"/>
                        </label>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <span className="modal-button" onClick={handleClick}>Submit</span>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default NameModal