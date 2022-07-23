import React from 'react'
import './Navigation.css'
import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Btn from '../Button/Btn'
import Dev from '../../images/developer-icon.svg'
import Mode from '../../components/mode/DarkMode'


const Navigation = () => {
  return (
    <div className="navbar-parent">
        <Container>
            <Navbar>
            <nav>
                <input id="nav-toggle" type="checkbox" />
                <Link className='logo' to='/'> <img src={Dev} alt="dev-icon"/></Link>
                <ul class="links">
                    <li className='nav-link'><a href="/">Home</a></li>
                    <li className='nav-link'><a href="/About">About</a></li>
                    <li className='nav-link'><a href="/Projects">Projects</a></li>
                    <li className='nav-link'><a href="/Contact"><Btn content="Contact Me"/></a></li>
                    <Mode />
                </ul>
                    
                <label for="nav-toggle" class="icon-burger">
                    <div class="line"></div>
                    <div class="line" id="line2"></div>
                    <div class="line" id="line3"></div>
                </label>
            
            </nav>
            </Navbar>
        </Container>
    </div>
  )
}

export default Navigation