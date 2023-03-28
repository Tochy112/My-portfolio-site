import React, {useState} from 'react'
import {Container} from 'react-bootstrap'
import Dev from '../../images/developer-icon.svg'
import Btn from '../Button/Btn'
import Mode from '../mode/DarkMode'
import {Link} from "react-scroll";
import "./Navigation.css"


const Navigation = () => {

    const [isMobile, setIsMobile] = useState(false)

  return (
    <div>
        <Container>
        
            <div className="navbar-wrapper">
                <Link to="Home-wrapper" spy={true} smooth={true} offset={50} duration={500}  className="logo">
                    <img src={Dev} alt="dev-icon"/>
                </Link>
            
                <nav className="navbar">
                    <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                    >
                        <li>
                            <Link to="Home-wrapper"  
                            spy={true} smooth={true} offset={-100} duration={500}
                            onClick={() => setIsMobile(false)}
                            className="home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="about-parent" 
                            spy={true} smooth={true} offset={-100} duration={500} 
                            onClick={() => setIsMobile(false)}
                            className="about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="project-parent" 
                             spy={true} smooth={true} offset={-100} duration={500}
                            onClick={() => setIsMobile(false)}
                            className="projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="contact-wrapper" 
                             spy={true} smooth={true} offset={-70} duration={500}
                             onClick={() => setIsMobile(false)}
                            className="contact">
                                <Btn content="Contact Me"/>
                            </Link>
                        </li>

                       <li 
                       onClick={() => setIsMobile(false)}
                       >
                            <Mode />
                       </li>
                        
                       
                    </ul>

                    <div className={isMobile ? "nav-toggle-active" : "nav-toggle"}
                        onClick={ () => setIsMobile(!isMobile)}
                    >
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </nav>
            </div>
            
        </Container>

    </div>
  )
}

export default Navigation