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

function App() {
  return (
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
  );
}

export default App;
