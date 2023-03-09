import React from 'react'
import '../../App.css'
import Sun from '../../images/sun-icon.svg'
import Moon from '../../images/moon-icon.svg'
import "./DarkMode.css"

const DarkMode = () => {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;
  
    if (localStorage) {
      theme = localStorage.getItem("theme");
    }
  
    if (theme === lightTheme || theme === darkTheme) {
      body.classList.add(theme);
    } else {
      body.classList.add(darkTheme);
    }
  

    const switchTheme = (e) => {
      if (theme === lightTheme) {
        body.classList.replace(lightTheme, darkTheme);
        e.target.classList.add(clickedClass);
        localStorage.setItem("theme", "dark");
        theme = darkTheme; 
      } else {
        body.classList.replace(darkTheme, lightTheme);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");
        theme = lightTheme; 
    }

    
}
  return (
    <div>
        <button
            className={theme === "dark" ? clickedClass : ""}
            id="darkMode"
            onClick={(e) => switchTheme(e)}
        >
          <img className="sun" src={Sun} alt="sun"></img>
          <img className="moon" src={Moon} alt="moon"></img> 
        </button>
    </div>
  )
}

export default DarkMode