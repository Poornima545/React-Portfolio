import './App.css';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Project from './components/Projects/Project';
import TechStack from './components/skills/TechStack';

function App() {
  return (
    <div className="App">
      <Navbar />
      <TechStack />
      <About />
     <Project/>
    </div>
  );
}

export default App;
