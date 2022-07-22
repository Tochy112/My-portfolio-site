import React from 'react'
import {Container} from 'react-bootstrap'
import Btn from '../../components/Button/Btn'
import Tool from '../../images/tool.svg'
import Happy from '../../images/happy.svg'
import CV from '../../download/Tochukwu-CV.pdf'
import './About.css'

const About = () => {
  return (
    <div className="about-parent">
        <Container>
       
        <div className='about-wrapper'>
            <div className='about-div'>

                <div className='about'>
                    <h2 >About Me</h2>
                    <div className='line'/>
                </div>
                
                <p>
                    I'm Ukwuoma Tochukwu, a Frontend web Developer 
                    based in Imo State, Nigeria. <br /> <br />
                    
                    I develop websites using HTML, CSS, javaScript and React.  
                     React.js is my favourite tool. 
                     <span>
                      <img src={Tool} alt="tool-icon" /> 
                     </span>
                     <br /> <br />



                    I have knowledge in using server side programming language, PHP and database management system MySql.
                    Gradually going into full stack.
                    <span>
                      <img src={Happy} alt="happy-icon" /> 
                     </span>
                      <br /> <br />

                    I'm a passionate and innovative individual who is always open to  learn and improve on my skill.

                </p>

                <a href={CV} 
                    download="CV"><Btn content="Download CV"/>
                </a>
            </div>
       


            <div className='skill-div'>
                <div className='skill'>
                    <h4 >My skill Set</h4>
                    <div className='line'/>
                </div>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>PHP</li>
                    <li>MySql</li>
                    <li>Git</li>
                </ul>
            </div>
        </div>
       
        </Container>
        
       
    </div>
  )
}

export default About