import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function UserCanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Attempt
      </Button> */}
      <svg xmlns="http://www.w3.org/2000/svg" onClick={handleShow} width="35" height="35" fill="#e85a4f" className="bi bi-person-circle" viewBox="0 0 16 16">
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
      </svg>

      <Offcanvas show={show} onHide={handleClose} placement='end' className='text-bg-dark'>
        <Offcanvas.Header className='text-align-right' closeButton>
          <Offcanvas.Title className='mx-auto'>Ulu Osi</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='mx-auto'>
          <div className='text-center'>
            <img src="https://i.pinimg.com/474x/7b/8d/3e/7b8d3e8cf9f26fcfb7034daf6c8b2761.jpg" class="rounded-circle" alt="..." style={{height:'200px'}} />
            <hr />
            <div class="btn-group" role="group" aria-label="Basic outlined example">
              <button type="button" class="btn btn-outline-danger">Convert</button>
              <button type="button" class="btn btn-outline-danger active">Saint</button>
              <button type="button" class="btn btn-outline-danger">Leader</button>
              <button type="button" class="btn btn-outline-danger">Anointed</button>
            </div>
            <div class="card text-bg-danger mt-4 mx-auto" style={{width:'60%'}}>
                <div class="card-body">
                  <p className='fs-1 fst-italic'>7.5</p>
                </div>
                <div class="card-footer">Spirituality</div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default UserCanvas;