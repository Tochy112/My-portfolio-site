import React from 'react'
import Box from '../../components/Box/Box'
import './Project.css'
import ToDo from '../../images/do_it.PNG'
import Piggy from '../../images/piggy-vest.PNG'
import Jackofruitty from '../../images/jacko_fruitty.PNG'
import Chart from '../../images/admin-dashboard.PNG'
import Estate from '../../images/real_estate.PNG'
import Crappo from '../../images/Crappo.PNG'

const Project = () => {
  return (
    <div className="project-parent">
        <div className='project'>
            <h2>Projects</h2>
            <div className='line'/>

            <p>Selected projects I worked on</p>
        </div>
       

        <div className='project-boxes'>
            <Box logo={Crappo} 
            name="CRAPPO" 
            link="https://tochy-crypto.netlify.app/"
            github="https://github.com/Tochy112/cryptopage"
            />

            <Box logo={Estate} 
            name="Real Estate" 
            link="https://tochy-real-estate.netlify.app"
            github="https://github.com/Tochy112/real-estate-site"
            />

              
            <Box logo={Piggy} 
            name="piggyvest-clone" 
            link="https://tochy-piggy-vest.netlify.app"
            github="https://github.com/Tochy112/piggyVest"
            />

            <Box logo={ToDo}
             name="ToDo" 
             link="https://week2-todo-api-app.vercel.app"
             github= "https://github.com/Portfolio-React-Team-2/week2-todo-api-app"
            />

            <Box logo={Chart} 
            name="Admin-dashboard" 
            link="https://admin-21.netlify.app"
            github ="https://github.com/Tochy112/Admin-21"
            />
            
            <Box logo={Jackofruitty} 
            name="FruitStore" 
            link="https://fruitty.netlify.app"
            github="https://github.com/Tochy112/Fruitty"
            />
        </div>       
    </div>
  )
}

export default Project