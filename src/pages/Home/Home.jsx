import React from 'react'
import './Home.css'
import {Container} from 'react-bootstrap'
import Btn from '../../components/Button/Btn'
import FE from '../../images/FE-guy.svg'
import Wave from '../../images/waving-hand.png'

const Home = () => {
  return (
    <div className ="Home-wrapper">
        <Container fluid>
            <div className='home-div'>
                <div className='write-up'>
                   <p> Hi Dear,  
                        <span className="icon-div">
                            <img src={Wave} alt="Hello" />
                        </span> 
                        I'M
                    </p>
                  

                   <h2>Ukwuoma Tochukwu</h2>
                   <p> Frontend Web Developer</p>

                    <a href='/Contact'><Btn content="Hire Me"/></a>
                </div>
                <div className="img-div">
                    <img src={FE} alt="Developer" />
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Home