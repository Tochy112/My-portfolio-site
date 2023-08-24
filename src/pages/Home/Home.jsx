import React from "react";
import "./Home.css";
import Btn from "../../components/Button/Btn";
import FE from "../../images/profile-pic.png";
import FE_Dark from "../../images/pfp-dark.jpg";
import Wave from "../../images/waving-hand.png";
import { Link } from "react-scroll";
import About from "../About/About";
import Project from "../Projects/Project";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <div>
      <section id="Home-wrapper">
        <div className="home-div">
          <div className="write-up">
            <p>
              {" "}
              Hi There,
              <span className="icon-div">
                <img src={Wave} alt="Hello" />
              </span>
              I'M
            </p>

            <h2>Ukwuoma Tochukwu</h2>
            <p> Frontend Web Developer</p>

            <Link to="contact-wrapper">
              <Btn content="Hire Me" />
            </Link>
          </div>
          <div className="img-div">
            <img className="fe-light" src={FE} alt="Developer" />
            <img className="fe-dark" src={FE_Dark} alt="Developer" />
          </div>
        </div>
      </section>

      <About />
      <Project />
      <Contact />
    </div>
  );
};

export default Home;
