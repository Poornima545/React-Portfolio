import React from 'react'
import './About.css'
import Laptop from '../../assets/laptopImg.png'
import TechStack from './TechStack';

function About() {
  return (
    <>
      <div className='about-container'>
        <div className='about-content'>
          <h1 className='knowMe'>Know Who <strong className='yellow'>I'M</strong></h1>
          <p className='about-para'>Hi Everyone, <br /> I am <span className='yellow' style={{ fontSize: '20px' }}>Poornima Gowda</span> from Chitradurga, Karnataka, India.</p>
          I graduated with a Bachelor of Engineering in Computer Science and Engineering from S.J.M Institute of Technology, Chitradurga, in 2023.
          <br />
          During my academic journey, I completed a project titled "Plant Disease Identification Based on Artificial Intelligence," which honed my skills in AI, Html, Python and its applications.
          <br /><br />
          Post-graduation, I pursued a professional course in Frontend Development with a specialization in React.js to further enhance my technical capabilities.
          <br /><br />
          Apart from coding, some other activities that I have to do!
          <ul className='hobbies'>
            <li>Playing Games</li>
            <li>watching series</li>
            <li>Travelling</li>
          </ul>
        </div>
        <img src={Laptop} alt='about' className='laptop-img' />
      </div>
      <TechStack />
    </>
  )
}

export default About;
