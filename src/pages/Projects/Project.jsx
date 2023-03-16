import React from 'react'
import Box from '../../components/Box/Box'
import './Project.css'
import Piggy from '../../images/piggy-vest.PNG'
import Estate from '../../images/real_estate.PNG'
import Crappo from '../../images/Crappo.PNG'
import react from "../../images/icons8-react.svg"
import vue from "../../images/icons8-vue-js.svg"
import Taskeet from "../../images/taskeet_grab.PNG"
import framer from "../../images/framer.png"
import bootstrap from "../../images/bootstrap.png"
import vuetify from "../../images/vuetify.svg"
// import json from "../../images/icons8-json.png"


const Project = () => {

  return (
    <div className="project-parent">
        <div className='project'>
            <h2>Projects</h2>
            <div className='line'/>

            <p>Selected projects I worked on</p>
        </div>
       

        <div className='project-boxes'>

          <Box 
            logo={Crappo} 
            link="https://tochy-crypto.netlify.app/"
            github="https://github.com/Tochy112/cryptopage"
            header="CRAPPO"
            content="A landing page of a crypto company"
            icon1={react}
            icon2={framer}
          />

          <Box 
            logo={Estate} 
            link="https://tochy-real-estate.netlify.app"
            github="https://github.com/Tochy112/real-estate-site"
            header="REAL ESTATE"
            content="A real estate landing page"
            icon1={react}
          />


          <Box 
            logo={Taskeet} 
            link="https://taskeet.netlify.app/"
            github ="https://github.com/Tochy112/vuetify_task_tracker"
            header="TASKEET"
            content="Task tracking application with server storage"
            icon1={vue}
            icon2={vuetify}
          />  
            
          <Box 
            logo={Piggy} 
            link="https://tochy-piggy-vest.netlify.app"
            github="https://github.com/Tochy112/piggyVest"
            header="PIGGY-VEST"
            content="A cloned version of the piggy-vest website"
            icon1={react}
            icon2={bootstrap}
          />
            
        </div>       
    </div>
  )
}

export default Project