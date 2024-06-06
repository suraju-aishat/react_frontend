import React from 'react';
import './App.css';
import Navbar from "./components/NavBar/navbar";
import Home from './components/Home/home';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';


function App() {
  return (
    
      <div className="App">
        <Navbar/>
        <main>
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
        </main>
        <Footer/>
      </div>

  );
}

export default App;


