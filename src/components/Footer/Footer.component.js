import React from 'react'
import './Footer.css'
import FooterButton from './Footer-Buttons/Footer-Button.component'


export default function Footer(props) {

  const buttonNames = {
    home: ['email', 'dashboard', 'info'],
    email: ['home', 'dashboard', 'info'],
    dashboard: ['email', 'home', 'info'],
    info: ['email', 'dashboard', 'home'],
  }

  const buttons = buttonNames[props.currView].map((button, index) => <FooterButton key={index} buttonName={button} getCurrentView={(view) => {props.getCurrentView(view)}}/>)

  return (
    <div className='buttons'>
        {buttons}
    </div>
  );
}