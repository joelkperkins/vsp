import React from 'react';
import './cassette.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tabs';


export default function Cassette (props) {
    return (
      <Tabs defaultActiveKey='1' id="uncontrolled-tab-example">
        <Tab className='' eventKey="1" title="Lorem Ipsum">
          <video className='video' src={props.video} type="video/mp4" controls/>
        </Tab>
        <Tab eventKey="2" title="Lorem Ipsum">
          <video className='video' src={props.video} type="video/mp4" controls/>
        </Tab>
        <Tab eventKey="3" title="Lorem Ipsum">
          <video className='video' src={props.video} type="video/mp4" controls/>
        </Tab>
      </Tabs>
    );
}
