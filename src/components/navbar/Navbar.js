import React from 'react';
import Home from './Home'

export default function Navbar() {
    return (
        <>
            <section className='bg-color px-5'>
                <header className='d-flex pb-5 pt-4 align-items-center gap'>
                    <strong className='fs-2'>
                        <span>Web</span>
                        <span className='text-success'>Dev</span>
                    </strong>
                    <nav>
                        <ul className='d-flex list-unstyled fs-5 nav'>
                            <li><a href="#home" className='nav-link text-dark'>Home</a></li>
                            <li><a href="#tech-stack" className='nav-link text-dark'>Skills</a></li>
                            <li><a href="#" className='nav-link text-dark'>About</a></li>
                            <li><a href="#" className='nav-link text-dark'>Projects</a></li>
                        </ul>
                    </nav>
                </header>
                <Home />
            </section>
        </>
    )
}


