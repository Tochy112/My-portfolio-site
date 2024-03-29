import React from 'react'
import {Container} from 'react-bootstrap'
import Twitter from '../../images/twitter-icon.svg'
import Linkedln from '../../images/linkedin-icon.svg'
import WhatSapp from '../../images/whatsapp-icon.svg'
import Email from '../../images/mail-icon.png'
import GitHub from '../../images/github-logo.svg'
// import FavouriteIcon from "@mui/icons-material/Favourite"
import './Footer.css'

const Footer = () => {
    const current = new Date();
    const date = current.getFullYear()
    
  return (
    <div className="footer">
        <Container>
        <div className='Email-icon-div'>
            <p>SAY HELLO</p>
            <a href='mailto:ukwuomatochi112@gmail.com'>
                <img src={Email} alt="Email" id='email'/>
            </a>
        </div>
        <div className='line' /> <hr/>

        <div className="footer-icons">

            <p> &copy; {date}</p>
            <div className='icon-div'>
                <a href="https://twitter.com/tochy_codes">
                    <img src={Twitter} alt="Twitter" />
                </a>
                <a href="https://www.linkedin.com/in/ukwuoma-tochukwu/">
                    <img src={Linkedln} alt="Linkedln" />
                </a> 
                
                <a href="https://wa.me/message/4MFGQ25SOXAID1">
                 <img src={WhatSapp} alt="WhatSapp" />
                </a>

                <a href="https://github.com/Tochy112">
                 <img src={GitHub} alt="GitHub"  className="git"/>
                </a>
               
            </div>
            
        </div>
        </Container>
    </div>
  )
}

export default Footer