import './App.css';
import React from 'react';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Project from './components/Projects/Project';
import TechStack from './components/skills/TechStack';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TechStack />
      <About />
      <Project />
      <Resume/>
    </div>
  );
}

export default App;
