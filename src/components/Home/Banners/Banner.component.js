import React from 'react'
import Banner1 from './Banner-mobile.component'
import Banner2 from './Banner-full.component'
import './Banner.component.css'

const Banner = (props) => {
  return (props.deviceCode === 1) ? (
     <Banner1 img={props.banner.images[0]}/>
  ) : (<Banner2 imgs={props.banner.images}/>)
}

export default Banner
