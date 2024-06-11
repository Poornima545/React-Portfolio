import React from 'react';
import './Home.css';
import HomeImg from '../../assets/home.jpg';
import Type from './Type';
import Home2 from './Home2';

function Home() {
  return (
    <section id='home'>
      <div className='home-container'>
        <div className='home-content'>
          <h1 className='hello'>Hi, There!</h1>
          <h1 className='home-section'>I'm <span className='yellow'>Poornima Gowda</span><br /></h1>
          <span>
            <Type />
          </span>
          <button className='hireme-btn'>
            <i className='bi bi-bag-fill'></i>Hire Me
          </button>
        </div>
        <div className='image-container'>
          <img src={HomeImg} alt='home' className='homeImg' />
        </div>
      </div>
      <div>
        <Home2/>
      </div>
    </section>
  );
}

export default Home;
