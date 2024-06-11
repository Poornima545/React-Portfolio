import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
// import Preloader from './components/Pre/Pre'
import ScrollToTop from './components/ScroolToTop';
// import { useEffect, useState } from 'react';

function App() {
  // const [load, upadateLoad] = useState(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     upadateLoad(false);
  //   }, 1200);

  //   return () => clearTimeout(timer);
  // }, []);


  return (
    <div className="App">
      <BrowserRouter>
        {/* <Preloader load={load} /> */}

        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
