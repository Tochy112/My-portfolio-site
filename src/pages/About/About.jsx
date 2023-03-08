import React from 'react'
import Btn from '../../components/Button/Btn'
import Tool from '../../images/tool.svg'
import Happy from '../../images/happy.svg'
import Resume from '../../CV/Tochukwu_Resume.pdf'
import './About.css'
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import html from "../../images/icons8-html-5.svg"
import css from "../../images/icons8-css3.svg"
import js from "../../images/icons8-javascript.svg"
import laravel from "../../images/icons8-laravel.png"
import sql from "../../images/icons8-my-sql.svg"
import vue from "../../images/icons8-vue-js.svg"
import react from "../../images/icons8-react.svg"
import mui from "../../images/icons8-material-ui.svg"
import git from "../../images/icons8-git.svg"


const About = () => {
  return (
    <div className="about-parent">
       
        <div className='about-wrapper'>
            <div className='about-div'>

                <div className='about'>
                    <h2 className='header'>About Me</h2>
                    <div className='line'/>
                </div>
                <p>
                    I'm Ukwuoma Tochukwu, a front-end web developer based in Imo state, Nigeria. <br /> <br />
                    
                    I create super reponsive web-applications using HTML, CSS, JavaScript, React and other frameworks.  
                      
                    <span>
                        <br />
                        One of my favorite tool is react.js 
                      <img src={Tool} alt="tool-icon" /> 
                     </span>
                     <br />

                     PHP and MySql database are both skills I have in server side development.
                     Gradually going into full stack.
                    <span>
                      <img src={Happy} alt="happy-icon" /> 
                     </span>
                      <br />

                      I'm a driven, creative person who's constantly willing to learn new things and develop my abilities.
                </p>

                <a href={Resume} 
                    download="Ukwuoma_Tochukwu_CV"><Btn content="Download CV"/>
                </a>
            </div>
       


            <div className='skill-div'>
                <div className='skill'>
                    <h4 >My skill Set</h4>
                    <div className='line'/>
                </div>

                <div className="skills">
                    <div>
                        <Chip avatar={<Avatar src={html} />} label="HTML5" variant="outlined"className='chip' />
                        <Chip avatar={<Avatar src={css} />} label="CSS3" variant="outlined"className='chip' />
                    </div>
                    <div>
                        <Chip avatar={<Avatar src={js} />} label="ES6" variant="outlined"className='chip' />
                        <Chip avatar={<Avatar src={mui} />} label="MUI" variant="outlined"className='chip' />
                    </div>
                    <div>
                        <Chip avatar={<Avatar src={react} />} label="REACTJS" variant="outlined"className='chip' />
                        <Chip avatar={<Avatar src={vue} />} label="VUEJS" variant="outlined"className='chip' />
                    </div>
                    <div>
                        <Chip avatar={<Avatar src={sql} />} label="MySql" variant="outlined"className='chip' />
                        <Chip avatar={<Avatar src={laravel} />} label="Laravel" variant="outlined"className='chip' />
                    </div>
                    <div>
                        <Chip avatar={<Avatar src={git} />} label="git" variant="outlined"className='chip' />
                    </div>
                </div>
            </div>
        </div>        
       
    </div>
  )
}

export default About