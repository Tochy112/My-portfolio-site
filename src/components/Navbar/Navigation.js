import React from 'react'
import './Navigation.css'
import {Container, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Btn from '../../components/Button/Btn'
import Dev from '../../images/developer-icon.svg'

const Navigation = () => {
  return (
    <div className="navbar-parent">
        <Container>
            <Navbar>
            <nav>
                <input id="nav-toggle" type="checkbox" />
                <Link className='logo' to='/'> <img src={Dev} alt="dev-icon"/> Tochy</Link>
                <ul class="links">
                    <li className='nav-link'><Link to="/">Home</Link></li>
                    <li className='nav-link'><Link to="/About">About</Link></li>
                    <li className='nav-link'><Link to="/Projects">Projects</Link></li>
                    <li className='nav-link'><Link to="/Contact"><Btn content="Contact Me"/></Link></li>
                </ul>
                <label for="nav-toggle" class="icon-burger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </label>
            </nav>
            </Navbar>
        </Container>
    </div>
  )
}

export default Navigation