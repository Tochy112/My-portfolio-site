import React from 'react'
import './Box.css'
import GitHub from '../../images/github-logo.svg'

const Box = ({logo, name, link, github}) => {
  return (
    <div className='project-box-wrapper'>
        <a href={link} className="box-link">
        <div className='project-box'>
            <div className='logo-div'>
                <img src={logo} alt="logo" />
            </div>
            <div className="git-div">
                <p>{name}</p>
                
                <a href={github}>
                 <img src={GitHub} alt="GitHub"  className="git"/>
                </a>
            </div>
        </div>
        </a>

        
    </div>
  )
}

export default Box