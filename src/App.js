import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar/Navigation'
import Home from './pages/Home/Home'
import {BrowserRouter} from 'react-router-dom'
import About from './pages/About/About';
import Project from './pages/Projects/Project';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
// import  Page404 from './pages/Page-404/PageError';
import Preloader from "./components/Preloader/Preloader"

function App() { 

  return (
      <div className ="App-header">
        <BrowserRouter>
        <Preloader />
          {/* <Route path='*' element={<Page404 />}> */}
            <Navigation />
            <Home />
            <About />
            <Project />
            <Contact />
            <Footer />
          {/* </Route> */}
        </BrowserRouter>
      </div>
    // )
  );
}

export default App;
