import React from 'react';
import Cassette from '../cassette/cassette.component';
import './vcr.css'
import img1 from '../../assets/default_2.jpg'

export default function VCR (props) {
    const desktopVideo = <video className='video' src={props.currVideo} type="video/mp4" controls/>
    const videoArray = (props.isMobile) ? makeMobileVideoArray(props.allVideos) : desktopVideo;

    function makeMobileVideoArray (allVideos) {
        return allVideos.map((video, index) => <Cassette key={index} video={video} />)
    }

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
            {videoArray}
        </div>
      </div>
    );
}
