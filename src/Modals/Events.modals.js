import React, { useState } from 'react'
import ContactForm from '../Forms/Contact.form'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const EventsModal = ({show, handleClose, title, emailForm, smsForm}) => {
  const [method, setMethod] = useState(null);

  const selectMethod = () => (
    <div className="w-100 h-50 d-flex flex-column justify-content-evenly">
      <Button className="m-1 p-2" onClick={() => setMethod('email')}>Click here to contact via @email.</Button>
      <Button variant="success" className="m-1 p-2" onClick={() => setMethod('sms')}>Click here to contact via SMS.</Button>
    </div>
  )

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex justify-content-center">
        {method === 'email' ? <ContactForm /> : method === 'sms' ? smsForm() : selectMethod()}
      </Modal.Body>
    </Modal>
  )
}

export default EventsModal
