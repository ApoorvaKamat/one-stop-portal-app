import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Shake, ShakeLittle, ShakeSlow, ShakeHorizontal } from 'reshake'


export function UserGuideModal(props) {
    const [projHelpModalShow, setProjHelpModalShow] = React.useState(false);
    const [mainModalShow, setMainModalShow] = React.useState(true);
    const handleShow = () => {
        setProjHelpModalShow(true);
        setMainModalShow(false);
    }
    const handleBack = () => {
        setProjHelpModalShow(false);
        setMainModalShow(true);
    }
  return (
    <>
    {mainModalShow ?
    <Modal
    {...props}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Body className='bg-dark text-white'>
      <h4>Wondering what to do ?</h4>
    <div className='d-flex flex-column'>
      <h4 className='p-3'>Login with your email id to view your tasks</h4>
      <ShakeSlow style={{ marginLeft: "40%" }}
      fixed={true}
      fixedStop={false}
      freez={false}>
          <span>
                  <h1>👇🏻</h1>
              </span>
      </ShakeSlow>
    </div>
    </Modal.Body>
    <Modal.Footer className='bg-dark text-white'>
      <Button onClick={handleShow}>Next</Button>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>:<></>}
    
    {projHelpModalShow?
        <Modal
        {...props}
        size='sm'
        aria-labelledby="contained-modal-title"
        className='mt-4'
      >
        <Modal.Body className='bg-dark text-white'>
        <div className='d-flex justify-content-center'>
        <ShakeSlow
          fixed={true}
          fixedStop={false}
          freez={false}>
              <span>
                  <h1>👆</h1>
              </span>
          </ShakeSlow>
        </div>
        <div className='d-flex flex-column'>
          <h4>Stuck?</h4>
          <h5>Check our  <i>Support Documentation</i></h5>
        </div>
        </Modal.Body>
        <Modal.Footer className='bg-dark text-white'>
          <Button onClick={handleBack}>Back</Button>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal> : <></>}
    </>
  );
}
