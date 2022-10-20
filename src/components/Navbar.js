import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaAngleDown } from 'react-icons/fa';
import './Navbar.css';

export const Navbar = () => {
    const myRef = useRef();
    const myRef2 = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    const [visible] = useState(true);


    return (
        <nav id='navbar' style={{ top: visible ? '0' : '-60px' }}>
            <div className='container' id='navbar-container'>
                
                <div className={isOpen ? 'mobile-icon open' : 'mobile-icon'} ref={myRef2} onClick={toggle}>
                    <FaBars />
                </div>
                <ul className={isOpen ? 'nav-menu-active' : 'close'} ref={myRef}>
                    <li
                        className='nav-item'
                        onClick={closeMenu}
                    >
                        <div className='container link'>
                            Designers <FaAngleDown />
                        </div>
                    </li>

                    <li className='designer' onClick={closeMenu}>
                        <Link to='/kawakubo' className='link'>
                            Rei Kawakubo
                        </Link>
                    </li>
                    <li className='designer' onClick={closeMenu}>
                        <Link to='/theyskens' className='link'>
                            Olivier Theyskens
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export const Footer = () => {
    return (
        <div className='container' id='footer'>
            <div className='flex row' if='footer-content'>
                <p>Made by Shannon Harrison (shnnnldn)</p>
            </div>
        </div>
    );
};