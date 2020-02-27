import React from 'react';
import VideoPlayer from './VideoPlayer/VideoPlayer.component';
import Banner from './Banners/Banner.component'
import './Home.component.css'

export default function Home (props) {
    return (
      <div className='home'>
          <Banner banner={props.home.banner} deviceCode={props.deviceCode}/>
        <div className="vcr">
          <VideoPlayer videos={props.videos} />
        </div>
      </div>
    );
}
