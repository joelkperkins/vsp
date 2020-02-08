import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import VCR from '../components/vcr/vcr.component'
import video1 from '../assets/test.mp4'
import video2 from '../assets/test.mp4'
import video3 from '../assets/test.mp4'
import Header from '../components/header/Header.componenet'
import About from '../components/About/About.component'
import Contact from '../components/Contact/Contact.component'
import Gallery from '../components/Gallery/Gallery.component'
import Footer from '../components/Footer/Footer.component'


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
        this.state = {
            isMobile: isMobile(),
            isPortait: orietationCheck(),
            currVideo: video1,
            allVideos: [
                video1,
                // video2,
                // video3
            ],
            currView: initialView()
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
                <VCR 
                  isMobile={this.state.isMobile}
                  currVideo={this.state.currVideo}
                  allVideos={this.state.allVideos}
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
