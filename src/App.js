import React, {useState} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar/Navigation'
import Home from './pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About/About';
import Project from './pages/Projects/Project';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import  Page404 from './pages/Page-404/PageError';
// import Loadpage from "./components/Load_page/Loadpage";


function App() {

  const [loading, setLoading] = useState(true)
  const loader = document.getElementById('loader')
  loader && setTimeout(() => {
    loader.style.display = "none"
    setLoading(false)
  }, 3000) 

  return (
    !loading && (
      <div className ="App-header">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/About' element={<About />}/>
            <Route path='/Projects' element={<Project />}/>
            <Route path='/Contact' element={<Contact />}/>
            <Route path='*' element={<Page404 />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    )
  );
}

export default App;
