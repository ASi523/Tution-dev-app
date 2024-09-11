import React, { useState } from 'react';
// import './Navbar.css';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">Sklassics Tutoring</div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Blog</a></li>
                <li><p className="contact-btn" style={{ backgroundColor:'#00bfff', color:'#fff'}}>Contact Us</p></li>
            </ul>
            <div className={`hamburger ${isOpen ? 'close-hamburger' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default Nav;
