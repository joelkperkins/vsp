import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

const ContactForm = (props) => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('mailgun', 'template_tg7gYxC9', e.target, 'user_NfKzPDZQiRyofPv6vKZvD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <Form style={{width: '20rem'}}validated={props.validated} onSubmit={sendEmail}>
      <Form.Row style={{margin: '.2rem'}}>
        <Form.Control
          required
          type="text"
          placeholder="Your name"
          name="from_name"
        />
      </Form.Row>
      <Form.Row style={{margin: '.2rem'}}>
        <Form.Control
          required
          type="email"
          placeholder="Your @email"
          name="reply_to"
        />
      </Form.Row>
      <Form.Row style={{margin: '.2rem'}}>
        <Form.Control required as="textarea" rows="5" placeholder="Your message..." name="message_html"/>
      </Form.Row>
      <Form.Row style={{margin: '.2rem'}}>
        <Button block variant="primary" type="submit">Send</Button>
      </Form.Row>
    </Form>
  )
}

export default ContactForm
