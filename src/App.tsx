import React from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import './App.css';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
     <Home/>
     <AboutMe/>
     <Projects/>
     <Contact/>
    </div>
  );
}

export default App;
