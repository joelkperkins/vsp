import React from 'react';
import './cassette.css'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';

export default function Cassette (props) {
    return (
      <Tab.Container className='w-100' id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Tabs className='w-95' defaultActiveKey='1' id="uncontrolled-tab-example">
            <Tab eventKey="1" title="Lorem Ipsum">
              <div className='video-box'>
                <video className='video' src={props.video} type="video/mp4" controls/>
              </div>
            </Tab>
            <Tab eventKey="2" title="Lorem Ipsum">
              <div className='video-box'>
                <video className='video' src={props.video} type="video/mp4" controls/>
              </div>
            </Tab>
            <Tab eventKey="3" title="Lorem Ipsum">
              <div className='video-box'>
                <video className='video' src={props.video} type="video/mp4" controls/>
              </div>
            </Tab>
          </Tabs>
        </Row>
      </Tab.Container>
    );
}
