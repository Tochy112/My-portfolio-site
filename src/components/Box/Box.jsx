import React from 'react'
import './Box.css'
import GitHub from '../../images/github-logo.svg'
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { AvatarGroup } from '@mui/material';


const Box = ({
    logo, content, link, github, header,
    icon1, icon2
  }) => {
  return (
    <div className='project-box-wrapper'>
        <div className='project-box'>
          <div className='logo-div'>
              <img src={logo} alt="logo" />
          </div>

          <div class="child-box" >
            <div className="headers">
              <h2>{header}</h2>
              <p>{content}</p>
            </div>
            
            <div className="stack-parent">
        
             <div className="stack">
              <AvatarGroup max={4}>
                <Avatar alt="icons" className='icons'>
                  <img src={icon1} alt="icon" />  
                </ Avatar>
                <Avatar alt="icons" className='icons'>
                  <img src={icon2} alt="icon" /> 
                </Avatar>
                {/* <Avatar alt="icons" className='icons'>
                  <img src={icon3} alt="icon" /> 
                </Avatar> */}
              </AvatarGroup>
             </div>


             <div className="links">
                <a href={github}>
                  <img src={GitHub} alt="GitHub"  className="git"/>
                </a>
                <a href={link} className="box-link" target="_blank" rel="noreferrer">
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