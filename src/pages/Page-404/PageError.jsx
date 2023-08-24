import React from "react";
import { Container } from "react-bootstrap";
import "./page-404.css";
import Error from "../../images/error-404.svg";
import Mode from "../../components/mode/DarkMode";
import Btn from "../../components/Button/Btn";
import { Link } from "react-router-dom";

const PageError = () => {
  return (
    <div className="error-page">
      <Container fluid>
        <div className="error-nav">
          <Link to="/">
            <Btn content="Home" />
          </Link>
          <Mode />
        </div>
        <div className="error-parent">
          <div className="img-div">
            <img src={Error} alt="Error404" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PageError;
