import React from 'react';
import './Resume.css';
import { AiOutlineDownload } from 'react-icons/ai';
import ResumeImg from '../../assets/resumeImg.jpg';

function Resume() {
    return (
        <div className='resume-container'>
            <a href='/Poornima_SDE.pdf' download className='cv-link' target='_blank' rel='noopener noreferrer'>
                <button className='cv-btn'>
                    <AiOutlineDownload className='download-icon' />
                    Download CV
                </button>
            </a>
            <img src={ResumeImg} alt='resume' className='resume-img' />
        </div>
    );
}

export default Resume;
