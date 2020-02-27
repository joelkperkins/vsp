import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home.component'
import video1 from '../assets/test.mp4'
import video2 from '../assets/test.mp4'
import video3 from '../assets/test.mp4'
import Header from '../components/header/Header.componenet'
import About from '../components/About/About.component'
import Contact from '../components/Contact/Contact.component'
import Gallery from '../components/Gallery/Gallery.component'
import Footer from '../components/Footer/Footer.component'

import bannerImg1 from '../assets/default_2.jpg'

import './Control.css';

class Control extends Component {
    constructor() {
        super();
        function isMobile() {
            try{ document.createEvent("TouchEvent"); 
            return true; }
            catch(e){ return false; }
        }
        function orietationCheck() {
            const orientation = document.createElement('div') 
            orientation.className="orietation";
        }
        function initialView() {
          const view = window.location.pathname
          return (view === '/') ? 'home' : view.slice(1)
        }
        function getWindowDimensions() {
          return {
            x: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            y: window.innerHeight || document.documentElement.clientHeight|| document.body.clientHeight
          }
        }
        function deviceMap(window) {
          const {x, y} = window
          if (x >= 768 && y >= 1024) return 2 //not mobile
          else return 1
        }
        this.state = {
            isMobile: isMobile(),
            isPortait: orietationCheck(),
            deviceCode: deviceMap(getWindowDimensions()),
            videos: [
              {
                title: 'Lorem Ipsum',
                video: video1
              },
              {
                title: 'Lorem Ipsum',
                video: video2
              },
              {
                title: 'Lorem Ipsum',
                video: video3
              }
            ],
            currView: initialView(),
            home: {
              banner: {
                images: [
                  bannerImg1,
                  bannerImg1,
                  bannerImg1,
                  bannerImg1,
                  bannerImg1,
                  bannerImg1,
                  bannerImg1,
                  bannerImg1,
                ]
              }
            }

        }
    }

    getCurrentView(view) {
      return this.setState({currView: view})
    }

    render() {
        return(
            <div className='control'>
              <Header 
                isMobile={this.state.isMobile}
                getCurrentView={(view) => {this.getCurrentView(view)}}
              />
              <Route exact path='/'>
                <Redirect to="/home" />
              </Route>
              <Route path="/home" render={ () => 
                <Home 
                  isMobile={this.state.isMobile}
                  videos={this.state.videos}
                  deviceCode={this.state.deviceCode}
                  home={this.state.home}
                />
              }/>
              <Route path='/info' render={ () => 
                <About 
                  isMobile={this.state.isMobile}
                />
              }/>
              <Route path='/email' render={ () => 
                <Contact 
                  isMobile={this.state.isMobile}
                  deviceCode={this.state.deviceCode}
                />
              }/>
              <Route path='/dashboard' render={ () => 
                <Gallery 
                  isMobile={this.state.isMobile}
                />
              }/>
          
              <Footer 
                currView={this.state.currView}
                getCurrentView={(view) => {this.getCurrentView(view)}}
                />
            </div>
        )
    }
}

export default Control;
