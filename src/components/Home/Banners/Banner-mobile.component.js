import React from 'react'

const BannerMobile = (props) => {
  return (
    <div className='top'>
      <img className='img-1' src={props.img} alt='' />
      <div className='side-text-box'>
        <h1 className='banner-text'>MIND</h1>
        <h1 className='banner-text'>EXPAN</h1>
        <h1 className='banner-text'>- DING</h1>
        <h1 className='banner-text'>EVENTS!</h1>
      </div>
    </div>
  )
}

export default BannerMobile
