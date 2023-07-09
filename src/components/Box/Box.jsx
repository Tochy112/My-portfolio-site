import React from 'react'
import './Box.css'
import GitHub from '../../images/github-logo.svg'
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { AvatarGroup } from '@mui/material';


const Box = ({
    project
  }) => {
  return (
    <div className='project-box-wrapper'>
        <div className='project-box'>
          <div className='logo-div'>
              <img src={project.logo} alt="logo" />
          </div>

          <div class="child-box" >
            <div className="headers">
              <h2 className='header'>{project.header}</h2>
              <p>{project.content}</p>
            </div>
            
            <div className="stack-parent">
        
             <div className="stack">
              <AvatarGroup max={4}>
                <Avatar alt="icons" className='icons'>
                  <img src={project.icon1} alt="icon" />  
                </ Avatar>
                <Avatar alt="icons" className='icons'>
                  <img src={project.icon2} alt="icon" /> 
                </Avatar>
                <Avatar alt="icons" className='icons'>
                  <img src={project.icon3} alt="icon" /> 
                </Avatar>
              </AvatarGroup>
             </div>


             <div className="links">
                <a href={project.github}>
                  <img src={GitHub} alt="GitHub"  className="git"/>
                </a>
                <a href={project.link} className="box-link" target="_blank" rel="noreferrer">
                  <Chip label="DEMO" 
                  variant="outlined"
                  className='chip' 
                  />
                </a>
      
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Box