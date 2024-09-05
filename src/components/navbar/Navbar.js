import React from 'react';
import Home from './Home'

export default function Navbar() {
    return (
        <>
            <section className='bg-color px-5'>
                <header className='d-flex pb-5 pt-4 align-items-center gap'>
                    <strong className='fs-30'>
                        <span>Web</span>
                        <span className='text-success'>Dev</span>
                    </strong>
                    <nav>
                        <ul className='d-flex list-unstyled fs-18 nav'>
                            <li><a href="#home" className='nav-link text-dark' rel="noreferrer">Home</a></li>
                            <li><a href="#tech-stack" className='nav-link text-dark' rel="noreferrer">Skills</a></li>
                            <li><a href="#about" className='nav-link text-dark' rel="noreferrer">About</a></li>
                            <li><a href="#projects" className='nav-link text-dark' rel="noreferrer">Projects</a></li>
                        </ul>
                    </nav>
                </header>
                <Home />
            </section>
        </>
    )
}


