import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import './VideoPlayer.component.css'

export default (props) => (
  <Tab.Container className='w-100' id="left-tabs-example" defaultActiveKey="first">
    <Row>
      <Tabs className='w-100 d-flex justify-content-center' defaultActiveKey='0' id="uncontrolled-tab-example">
      {
        props.videos.map((v, i) => (
          <Tab key={'tab' + i} eventKey={i} title={v.title}>
            <div className='video-box'>
              <video className='video' src={v.video} type="video/mp4" controls />
            </div>
          </Tab>
          )
        )
      }
      </Tabs>
    </Row>
  </Tab.Container>
)
