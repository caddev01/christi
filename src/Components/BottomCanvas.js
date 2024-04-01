import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AnswersCarousel from './AnswersCarousel';

function BottomCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Attempt
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement='bottom' className='text-bg-dark'>
        {/* <Offcanvas.Header className='mx-auto' closeButton>
          <Offcanvas.Title>Pick an Answer</Offcanvas.Title>
        </Offcanvas.Header> */}
        <Offcanvas.Body>
          <AnswersCarousel />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default BottomCanvas;