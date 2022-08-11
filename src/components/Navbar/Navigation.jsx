import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {Container} from 'react-bootstrap'
import Dev from '../../images/developer-icon.svg'
import Btn from '../Button/Btn'
import Mode from '../mode/DarkMode'
import "./Navigation.css"


const Navigation = () => {

    const [isMobile, setIsMobile] = useState(false)

  return (
    <div>
        <Container>
        
            <div className="navbar-wrapper">
                <Link to="/" className="logo">
                    <img src={Dev} alt="dev-icon"/>
                </Link>
            
                <nav className="navbar">
                    <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
                        onClick={() => setIsMobile(false)}
                    >
                        <li>
                            <Link to="/" className="home">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="about">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className="projects">
                                Projects
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="contact">
                                <Btn content="Contact Me"/>
                            </Link>
                        </li>
                       <li >
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