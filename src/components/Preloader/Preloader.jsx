import React, { useEffect } from "react";
import { preLoaderAnim } from "../Animation";
import './preloader.css'

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span className="tochy">Tochy</span>
        <span className="tochy">_</span>
        <span className="code">Codes</span>
      </div>
    </div>
  );
};

export default Preloader;