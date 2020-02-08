import React from 'react';
import img from '../../assets/m.jpg'
import Card from 'react-bootstrap/Card';

import './About.component.css'

export default function About () {
    return (
      <div className='about'>
        <div className='top-box'>
          <div className='name'>
            <h1>Marcus</h1>
            <h1>Nelson</h1>
          </div>
          <img className='about-img' src={img} alt='' />
        </div>
        <div className='bot-box'>
          <Card className="text-light" style={{ width: '24rem' }}>
            <Card.Body>
              <Card.Title>Owner / Performer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Visionary Slackline Productions, LLC</Card.Subtitle>
              <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        
      </div>
    )
}
