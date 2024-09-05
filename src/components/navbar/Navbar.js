import React from 'react';
import Home from './Home'

export default function Navbar() {
    return (
        <>
            <section className='bg-color px-5'>
                <header className='pb-5 pt-4 row align-items-center'>
                    <strong className='fs-30 col-md-6 col-12 d-flex justify-content-md-start'>
                        <span>Web</span>
                        <span className='text-success'>Dev</span>
                    </strong>
                    <nav className='col-md-6 col-12 d-flex mt-md-0'>
                        <ul className='d-flex list-unstyled fs-18 nav'>
                            <li><a href="#home" className='nav-link text-dark ps-sm-0' rel="noreferrer">Home</a></li>
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


