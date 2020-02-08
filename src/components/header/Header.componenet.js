import React from 'react';
import './Header.css'
import MobileTitle from './Titles/Mobile-title.component'
import DesktopTitle from './Titles/Desktop-title.component'
// import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
// import NavItem from 'react-bootstrap/NavItem';
// import NavLink from 'react-bootstrap/NavLink';
// import Dropdown from 'react-bootstrap/Dropdown';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap'

export default function Header (props) {
  const Title = (props.isMobile) ? MobileTitle : DesktopTitle
  const mobileNav = (props.isMobile) ? 'mobile-nav' : 'nav'
  return (
    <div className='header-box'>
      <Accordion>
    <Card>
      <Accordion.Toggle as={Card.Header} eventKey="0">
        <div className='header'>
            <Title />
            <i className="material-icons md-48">unfold_more</i>
        </div>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey="0">
        <Nav className="flex-column" fill="true" justify="true">
          <div className={mobileNav}>
            <LinkContainer to="/home">
              <Nav.Link onClick={() => props.getCurrentView('home')}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/info">
              <Nav.Link onClick={() => props.getCurrentView('info')}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/dashboard">
              <Nav.Link onClick={() => props.getCurrentView('dashboard')}>Gallery</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/email">
              <Nav.Link onClick={() => props.getCurrentView('email')}>Contact</Nav.Link>
            </LinkContainer>
          </div>
        </Nav>
      </Accordion.Collapse>
      </Card>
    </Accordion>
    </div>
    
  )
}
