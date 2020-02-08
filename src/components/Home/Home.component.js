import React from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer.component';
import './Home.component.css'
import img1 from '../../assets/default_2.jpg'

export default function Home (props) {
    return (
      <div className='home'>
        <div className='top'>
          <img className='img-1' src={img1} alt='' />
          <div className='side-text-box'>
            <h1 className='side-text'>MIND</h1>
            <h1 className='side-text'>EXPAN</h1>
            <h1 className='side-text'>- DING</h1>
            <h1 className='side-text'>EVENTS!</h1>
          </div>
        </div>
        <div className="vcr">
          <VideoPlayer videos={props.videos} />
        </div>
      </div>
    );
}
