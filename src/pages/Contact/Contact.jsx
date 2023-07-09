import React from 'react'
import Twitter from '../../images/twitter-icon.svg'
import Linkedln from '../../images/linkedin-icon.svg'
import WhatSapp from '../../images/whatsapp-icon.svg'
import Email from '../../images/mail-icon.png'
import contactLogo from '../../images/contact-illustration.png'
import './Contact.css'

const Contact = () => {
  return (
    <section id="contact-wrapper">
        <div className='contact'>
            <h3 >Contact Me</h3>
            <div className='line'/>
        </div>

        <div className='contact-div'>
          <div>
            <div>
              <a href='mailto:ukwuomatochi112@gmail.com'>
                  <img src={Email} alt="Email" />
              </a>
            </div>

            <hr />
            <div>
              <a href="https://twitter.com/tochy_codes"><img src={Twitter} alt="Twitter" /></a>
            </div>

            <hr />
            <div>
             <a href="https://www.linkedin.com/in/ukwuoma-tochukwu-052462223/">
                <img src={Linkedln} alt="Linkedln" />
              </a> 
            </div>

            <hr />
            <div>
            <a href="https://wa.me/message/4MFGQ25SOXAID1">
                <img src={WhatSapp} alt="WhatSapp" />
            </a>
            </div>

            <hr />
          </div>
         
          <div className='contact-logo'>
            <img src={contactLogo} alt="Contact-logo" />
          </div>
        </div>
    </section>
  )
}

export default Contact