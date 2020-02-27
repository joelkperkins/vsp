import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import img from '../../assets/d3.jpg'

const Services = (props) => {
  return (
    <ListGroup className='p-1' variant={props.variant ? 'flush' : null}>
      <ListGroup.Item className='d-flex justify-content-space-between'>
        <Image className='w-100' src={img} thumbnail fluid/>
        <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </ListGroup.Item>
      <ListGroup.Item className='d-flex justify-content-between'>
        <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <Image className='w-100' src={img} thumbnail fluid/>
      </ListGroup.Item>
      <ListGroup.Item className='d-flex justify-content-between'>
        <Image className='w-100' src={img} thumbnail fluid/>
        <p className='p-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </ListGroup.Item>
    </ListGroup>
  )
}

export default Services