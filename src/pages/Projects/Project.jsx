import React from 'react'
import Box from '../../components/Box/Box'
import {Container} from 'react-bootstrap'
import './Project.css'
import ToDo from '../../images/todo-logo.svg'
import Piggy from '../../images/piggy-logo.svg'
import Jackofruitty from '../../images/JackoFruity (1).PNG'
import Chart from '../../images/chart.svg'

const Project = () => {
  return (
    <div className="project-parent">
        <Container>
        <div className='project'>
            <h2>Projects</h2>
            <div className='line'/>

            <p>Selected projects I worked on</p>
        </div>
       

        <div className='project-boxes'>
            <Box logo={ToDo} name="ToDo-list app" link="https://week2-todo-api-app.vercel.app"/>
            
            <Box logo={Piggy} name="piggyvest-clone" link="https://campwork01piggyvestclone.netlify.app"/>

            <Box logo={Chart} name="Admin-dashboard" link="https://admin-21.netlify.app/"/>
            
            <Box logo={Jackofruitty} name="Jackofruitty fruitStore" link="https://fruitty.netlify.app"/>
        </div>
        </Container>
       
    </div>
  )
}

export default Project