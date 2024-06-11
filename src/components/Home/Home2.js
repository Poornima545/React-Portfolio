import React from 'react';
import ladyAvatar from '../../assets/ladyAvatar.jpg';
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";


function Home2() {
  return (
    <div className='home2-container'>
      <h1>
        LET ME <span className='yellow'>INTRODUCE MYSELF</span>
      </h1>
      <div className='home2-content'>
        <div className='home2-text'>
          <p className='home2-body'>
            I fell in love with programming and I have at least learnt something, I think... 🤷‍♂️
            <br /><br />
            I am fluent in classics like <span className='yellow'> HTML5, CSS3, and Javascript.</span>
            <br /><br />
            My field of Interest's are building new <span className='yellow'>Web Technologies and Products.</span>
            <br /><br />
            Whenever possible, I also apply my passion for developing products with Modern <span className='yellow'> Javascript Library and Frameworks like React.js.</span>
          </p>
        </div>
        <div className='avatar-container'>
          <img src={ladyAvatar} alt='avatar' className='avatar' />
        </div>
      </div>
      <div className='home2-social'>
        <h1> find me on</h1>
        <p className='social-para'>Feel free to <span style={{ color: 'yellow' }}>connect</span> with me</p>
        <ul className='social-links'>
          <li className='social-icons'>
            <a href='https://github.com/Poornima545' target='_blank' className='icon-colour'><AiFillGithub /></a>
          </li>
          <li className='social-icons'>
            <a href='https://x.com/Poornima545' target='_blank' className='icon-colour'> <AiOutlineTwitter /></a>
          </li>
          <li className='social-icons'>
            <a href='https://linkedin.com/in/poornima545' target='_blank' className='icon-colour'><FaLinkedinIn /></a>
          </li>
          <li className='social-icons'>
            <a href='/' target='_blank' className='icon-colour'><AiFillInstagram /></a>
          </li>
        </ul>
      </div>
    </div >
  );
}

export default Home2;
