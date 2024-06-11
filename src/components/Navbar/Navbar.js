import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const getClassName = ({ isActive }) => (isActive ? 'active' : '');

    return (
        <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
            <img src={logo} alt='Logo' className='logo' aria-label='Logo' />
            <div className={`desktop-menu ${menuOpen ? 'open' : ''}`}>
                <NavLink to='/' className={getClassName} onClick={() => setMenuOpen(false)}>Home</NavLink>
                <NavLink to='/about' className={getClassName} onClick={() => setMenuOpen(false)}>About</NavLink>
                <NavLink to='/resume' className={getClassName} onClick={() => setMenuOpen(false)}>Resume</NavLink>
            </div>

            <div className="mobile-menu-icon" onClick={toggleMenu}>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                <div className={`line ${menuOpen ? 'open' : ''}`}></div>
            </div>
        </nav>
    );
}

export default Navbar;
