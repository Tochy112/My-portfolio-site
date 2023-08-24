import React from "react";
import Box from "../../components/Box/Box";
import "./Project.css";
import Archi from "../../images/archi.PNG";
import Estate from "../../images/real_estate.PNG";
import Crappo from "../../images/Crappo.PNG";
import react from "../../images/icons8-react.svg";
import vue from "../../images/icons8-vue-js.svg";
import Taskeet from "../../images/taskeet_grab.PNG";
import framer from "../../images/framer.png";
import vuetify from "../../images/vuetify.svg";
import html from "../../images/icons8-html-5.svg";
import css from "../../images/icons8-css3.svg";
import js from "../../images/icons8-javascript.svg";
import dash from "../../images/vue-dash.PNG";
import allbirds from "../../images/allbirds-screen-grab.PNG";
import weda from "../../images/weda-app.png";
import calc from "../../images/calc-app.PNG";
import ts from "../../images/ts.svg";

const Project = () => {
  const projectContents = [
    {
      id: 1,
      logo: allbirds,
      link: "http://allbirds-clone.netlify.app/",
      github: "https://github.com/Tochy112/allbirds-clone",
      header: "Allbirds",
      content: "A landing page of an e-commerce site",
      icon1: vue,
      icon2: js,
      icon3: css,
    },
    {
      id: 2,
      logo: Crappo,
      link: "https://tochy-crypto.netlify.app/",
      github: "https://github.com/Tochy112/cryptopage",
      header: "CRAPPO",
      content: "A crypto company site",
      icon1: react,
      icon2: framer,
      icon3: css,
    },
    {
      id: 3,
      logo: Archi,
      link: "https://tochy-archi.netlify.app",
      github: "https://github.com/Tochy112/architect-site",
      header: "ACHI",
      content: "An Architecture and Interior Design website",
      icon1: html,
      icon2: css,
      icon3: js,
    },
    {
      id: 4,
      logo: weda,
      link: "https://tweda.netlify.app",
      github: "https://github.com/Tochy112/T-weather",
      header: "T-WEDA",
      content: "A real-time weather application",
      icon1: vue,
      icon2: vuetify,
      icon3: ts,
    },
    {
      id: 5,
      logo: Estate,
      link: "https://tochy-real-estate.netlify.app",
      github: "https://github.com/Tochy112/real-estate-site",
      header: "REAL ESTATE",
      content: "A real estate site",
      icon1: react,
      icon2: css,
      icon3: js,
    },
    {
      id: 6,
      logo: Taskeet,
      link: "https://taskeet.netlify.app/",
      github: "https://github.com/Tochy112/vuetify_task_tracker",
      header: "TASKEET",
      content: "Task tracking application with server storage",
      icon1: vue,
      icon2: vuetify,
      icon3: css,
    },
    {
      id: 7,
      logo: calc,
      link: "http://tochy-calc.netlify.app/",
      github: "https://github.com/Tochy112/calculator-app",
      header: "CALCULATOR",
      content: "Calculator App",
      icon1: react,
      icon2: ts,
      icon3: css,
    },
    {
      id: 8,
      logo: dash,
      link: "https://tochy-vue-dashboard.netlify.app",
      github: "https://github.com/Tochy112/vuetify-dashboard",
      header: "VUE-DASH",
      content: "A responsive user dashboard ",
      icon1: vue,
      icon2: vuetify,
      icon3: js,
    },
  ];

  return (
    <section id="project-parent">
      <div className="project">
        <h2>Projects</h2>
        <div className="line" />

        <p>Selected projects I worked on</p>
      </div>

      <div className="project-boxes">
        {projectContents &&
          projectContents.map((projectContent) => (
            <Box key={projectContent.id} project={projectContent} />
          ))}
      </div>
    </section>
  );
};

export default Project;
