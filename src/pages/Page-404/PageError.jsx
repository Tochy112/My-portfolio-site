import React from 'react'
import {Container} from 'react-bootstrap'
import './page-404.css'
import Error from '../../images/error-404.svg'

const PageError = () => {
  return (
    <div>
        <Container fluid>
           <div className='error-parent'>
                <div className='img-div'>
                    <img src={Error}  alt="Error404"/>
                </div>
           </div>
        </Container>
    </div>
  )
}

export default PageError