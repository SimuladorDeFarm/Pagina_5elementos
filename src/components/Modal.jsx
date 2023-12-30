//modulos
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const ModalServicios = ({text, show, handleClose}) => {

  return (
    <>
        <Modal show={show} onHide={handleClose}>
            
            <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>

            <Modal.Body>{text}</Modal.Body>

            <Modal.Footer>

                <Button variant="secondary" onClick={handleClose}>
                    Cerrar
                </Button>

            </Modal.Footer>
            
        </Modal>
    </>

  )
}
