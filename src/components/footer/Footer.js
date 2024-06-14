import React from 'react';
import './Footer.css'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className='footer'>
      <h3>Designed and Developed by Poornima Gowda</h3>
      <p> Copyright &#169; 2024</p>
      <ul className="footer-icons">
        <li className="footer-icon">
          <a
            href="https://github.com/Poornima545"
            target="_blank"
            rel="noopener noreferrer"
            className='icon'
          >
            <AiFillGithub />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://x.com/Poornima545" target="_blank"
            rel="noopener noreferrer"
            className='icon'
          >
            <AiOutlineTwitter />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="https://linkedin.com/in/poornima545"
            target="_blank"
            rel="noopener noreferrer"
            className='icon'
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="social-icons">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className='icon'
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </footer>
  )
}


export default Footer;