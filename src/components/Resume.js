import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';


function Resume() {
    return (
        <div id='resume' className='bg-color text-center resume-container'>
            <a href='/Poornima_SDE.pdf' download target='_blank' rel='noopener noreferrer'>
                <button className='btn btn-danger px-5 py-2'>
                    <AiOutlineDownload className='me-2' />
                    Download CV
                </button>
            </a>
    
        </div>
    );
}

export default Resume;
