import React from 'react';
import SecondImage from '../../assets/pic02.webp'
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';

export default function SecondProject() {
    return (
        <>
            <div className="card">
                <img src={SecondImage} className="card-img-top" alt="Team member profile slider project" />
                <div className="card-body p-4">
                    <h5 className="card-title">Food Munch</h5>
                    <p className="card-text lh-lg mt-3 pb-5">Developed a fully responsive food delivery website using HTML, CSS, and Bootstrap, integrating dynamic components like interactive menus and customized sections for delivery and payments.</p>
                    <div className='d-flex align-items-center'>
                        <a href="https://htmlfoodwebsite.netlify.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='me-2 icon'>
                            <AiOutlineGlobal size={30} />
                        </a>
                        <a href="https://github.com/Poornima545/Food-Website/pull/1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='me-2 icon'>
                            <AiFillGithub size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}