import React from 'react'
import Services1 from './Services-mobile.component'
import Services2 from './Services-full.component'

const Services = (props) => {
  return props.deviceCode === 1 
  ? <Services1 variant={true}/>
  : <Services2 variant={true}/>
}

export default Services