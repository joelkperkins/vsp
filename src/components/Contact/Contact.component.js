import React, { useState } from 'react'
import profileImg from '../../assets/default.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import './Contact.component.css'


export default function Contact() {

  const [validated, setValidated] = useState(false);

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
        <img className='contact-img' src={profileImg} alt=''/>
        <p className='contact-text'>Lorem ipsum dolor sit amet.</p>
        <Form style={{width: '20rem'}}validated={validated} onSubmit={handleSubmit}>
          <Form.Row style={{margin: '.2rem'}}>
            <Form.Control
              required
              type="text"
              placeholder="Your name"
            />
          </Form.Row>
          <Form.Row style={{margin: '.2rem'}}>
            <Form.Control
              required
              type="email"
              placeholder="Your @email"
            />
          </Form.Row>
          <Form.Row style={{margin: '.2rem'}}>
            <Form.Control required as="textarea" rows="5" placeholder="Your message..."/>
          </Form.Row>
          <Form.Row style={{margin: '.2rem'}}>
            <Button block variant="primary" type="submit">Send</Button>
          </Form.Row>
        </Form>
    </div>
  )
}