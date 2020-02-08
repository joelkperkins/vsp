import React from 'react'
import picture from '../../assets/d3.jpg'
import './Gallery.component.css'

export default function Gallery () {
  return (
    <div className='dashboard'>
      <div className='row'>
        <img className='g1' src={picture} alt='' />
        <img className='g1' src={picture} alt='' />
      </div>
      <div className='row'>
        <img className='g1' src={picture} alt='' />
        <img className='g1' src={picture} alt='' />
      </div>
      <div className='row'>
        <img className='g1' src={picture} alt='' />
        <img className='g1' src={picture} alt='' />
      </div>
      <div className='row'>
        <img className='g1' src={picture} alt='' />
        <img className='g1' src={picture} alt='' />
      </div>
      <div className='row'>
        <img className='g1' src={picture} alt='' />
        <img className='g1' src={picture} alt='' />
      </div>
      <div className='row'>
        <img className='g1' src={picture} alt='' />
        <img className='g1' src={picture} alt='' />
      </div>
    </div>
  )
}