import React from 'react'
import './Navigation.css'
import {Container, Navbar, Nav} from 'react-bootstrap'
import Btn from '../../components/Button/Btn'
import Dev from '../../images/developer-icon.svg'

const Navigation = () => {
  return (
    <div className="navbar-parent">
        <Navbar bg="light" expand="lg"  fixed="top" >
            
            <Container className='nav-parent' >
                <Navbar.Brand href="/"><img src={Dev} alt="dev-icon"/> Tochy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                <div className='nav-links '>
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                    <Nav.Link href="/About" className="nav-link">About</Nav.Link>
                    <Nav.Link href="/Projects" className="nav-link">Projects</Nav.Link>
                    <Nav.Link href="/Contact"><Btn content="Contact Me"/></Nav.Link>
                    
                    
                    
                    </Nav>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation