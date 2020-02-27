import React from 'react'

const BannerFull = (props) => {
  const images = props.imgs.map((img, i) => (i < 4) 
    ? ( <img key={'banner-img-' + i} className={'banner-full-img-' + (i % 2 === 0)} src={img} alt='' /> )
    : ( <img key={'banner-img-' + i} className={'banner-full-img-' + (i % 2 > 0)} src={img} alt='' /> )
  )
  const top = images.slice(0, 4)
  const bot = images.slice(4)
  return (
    <div className = 'banner-full'>
      <div className='banner-full-top'>
        {top}
      </div>
      <div className='banner-full-mid'>
        <h1 className='banner-text-full'>MIND </h1>
        <h1 className='banner-text-full'>EXPANDING</h1>
        <h1 className='banner-text-full'> EVENTS!</h1>
      </div>
      <div className='banner-full-bot'>
        {bot}
      </div>
    </div>
  )
}

export default BannerFull
