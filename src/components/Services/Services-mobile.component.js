import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const Services = (props) => {
  return (
    <ListGroup variant={props.variant ? 'flush' : null}>
      <ListGroup.Item>Lorem ipsum dolor sit amet.</ListGroup.Item>
      <ListGroup.Item>Lorem ipsum dolor sit amet, consectetur.</ListGroup.Item>
      <ListGroup.Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</ListGroup.Item>
    </ListGroup>
  )
}

export default Services