import React from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navbar/Navigation'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer';
import  Page404 from './pages/Page-404/PageError';
import Preloader from "./components/Preloader/Preloader"
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() { 

  return (
      <div className ="App-header">
        <BrowserRouter>
          <Preloader />

          <Routes>
          <Route path='/' element={
          <>
            <Navigation />
            <Home />
            <Footer />
          </>
          }/>            
          <Route path='*' element={ <Page404 />} />
          </Routes>
          
        </BrowserRouter>
      </div>
    // )
  );
}

export default App;
