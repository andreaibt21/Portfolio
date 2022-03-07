import React from 'react';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import './App.css';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
     <Home/>
     <AboutMe/>
     <Projects/>
    </div>
  );
}

export default App;
