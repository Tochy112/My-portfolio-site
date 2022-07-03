import React from 'react'
import './Box.css'

const Box = ({logo, name, link}) => {
  return (
    <div className='project-box-wrapper'>
        <a href={link} target="_blank">
        <div className='project-box'>
            <div className='logo-div'>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <p>{name}</p>
            </div>
        </div>
        </a>
        
    </div>
  )
}

export default Box