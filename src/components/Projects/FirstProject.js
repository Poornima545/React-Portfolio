import React from 'react';
import FirstImage from '../../assets/pic01.webp';
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';

export default function FirstProject() {
    return (
        <>
            <div className="card">
                <img src={FirstImage} className="card-img-top" alt="First Image" />
                <div className="card-body p-4">
                    <h5 className="card-title">Slider Project</h5>
                    <p className="card-text lh-lg mt-3">The Slider Project is a React application that showcases a carousel of team member profiles. Each slide includes an image, name, job title, and a brief description, with customized navigation icons for a smooth user experience.</p>
                    <div className='d-flex align-items-center'>
                        <a href="https://www.example.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='me-2 icon'>
                            <AiOutlineGlobal size={30} />
                        </a>
                        <a href="https://github.com/Poornima545/react-projects/pull/1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='me-2 icon'>
                            <AiFillGithub size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
