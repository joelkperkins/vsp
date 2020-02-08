import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'

export default function Button (props) {
  const pathName = `/${props.buttonName}`
  return (
    <LinkContainer to={pathName}>
      <button className={(props.buttonName === 'home') ? 'home-button' : 'footer-button'} onClick={() => props.getCurrentView(props.buttonName)}> 
        <div className='button-info'>
          <i className="material-icons">{props.buttonName}</i>
        </div>
      </button>
    </LinkContainer>
  )
}
