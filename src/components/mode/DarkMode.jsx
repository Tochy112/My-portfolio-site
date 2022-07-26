import React from 'react'
import '../../App.css'
import Sun from '../../images/sun-icon.svg'
import Moon from '../../images/moon-icon.svg'

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
      body.classList.add(lightTheme);
    }

    const switchTheme = (e) => {
      if (theme === darkTheme) {
        body.classList.replace(darkTheme, lightTheme);
        e.target.classList.remove(clickedClass);
        localStorage.setItem("theme", "light");
        body.classList.add("blur")
        theme = lightTheme; 
      } else {

        body.classList.replace(lightTheme, darkTheme);
        e.target.classList.add(clickedClass);
        localStorage.setItem("theme", "dark");
        theme = darkTheme; 
    }

    
}
  return (
    <div>
        <button
            className={theme === "dark" ? clickedClass : ""}
            id="darkMode"
            onClick={(e) => switchTheme(e)}
        >
          <img class="moon" src={Moon} alt="moon"></img> 
           <img class="sun" src={Sun} alt="sun"></img>
        </button>
    </div>
  )
}

export default DarkMode