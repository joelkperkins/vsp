import React, { useState } from 'react'
import Services from '../Services/Services.component'
import EventsModal from '../../Modals/Events.modals'
import ContactForm from '../../Forms/Contact.form'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import profileImg from '../../assets/default.png'


import './Contact.component.css'


export default function Contact(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  const generateEmailForm = () => <ContactForm submit={(e) => handleSubmit(e)} validated={validated} />

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className='contact'>
        <div className='contact-top'>
          <img className='contact-img' src={profileImg} alt=''/>
        </div>
        <Card bg='light' text='dark' style={props.deviceCode === 1 ? { width: '18rem' } : {width: '75%'}}>
          <Card.Body>
            <div className='d-flex flex-column justify-content-center'>
            <Card.Title>Book an Event with VSP!</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Services offered include: </Card.Subtitle>
            <Services deviceCode={props.deviceCode}/>
            <Button onClick={() => handleShow()}>Contact Now</Button>
            </div>
          </Card.Body>
        </Card>
        <EventsModal 
          handleClose={() => handleClose()} 
          show={show} 
          emailForm={() => generateEmailForm()}
          title='Contact Today and Book an Amazing Show with VSP!'
        />
    </div>
  )
}