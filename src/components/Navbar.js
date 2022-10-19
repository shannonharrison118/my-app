import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaAngleDown } from 'react-icons/fa';
import './Navbar.css';
import Dropdown from './Dropdown';
import { debounce } from './helper';
import { BiLinkExternal } from 'react-icons/bi'

export const Navbar = () => {
    const myRef = useRef();
    const myRef2 = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);
    const [dropdown, setDropdown] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!myRef?.current?.contains(event.target) && !myRef2?.current?.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutisde);
    }, [myRef]);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }
        else {
            setDropdown(true);
        }
    };

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset;
        setVisible(
            (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10
        );
        setPrevScrollPos(currentScrollPos);
    }, 90);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible, handleScroll]);

    return (
        <nav id='navbar' style={{ top: visible ? '0' : '-60px' }}>
            <div className='container' id='navbar-container'>
                <Link to='/' className='container row' id='nav-profile-container'>
                    <img src={Home} id='icon' alt='home-icon' />
                </Link>
                <div className={isOpen ? 'mobile-icon open' : 'mobile-icon'} ref={myRef2} onClick={toggle}>
                    <FaBars />
                </div>
                <ul className={isOpen ? 'nav-menu-active' : 'close'} ref={myRef}>
                    <li
                        className='nav-item'
                        onClick={closeMenu}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <div className='container link'>
                            Designers <FaAngleDown />
                        </div>
                        {dropdown && <Dropdown />}
                    </li>

                    {/* experience dropdown items */}
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
                    <li className='designer' onClick={closeMenu}>
                        <Link to='/MentalHealthApp' className='link'>
                            Mental Health App
                        </Link>
                    </li>
                    <li className='designer' onClick={closeMenu}>
                        <Link to='/MentalHealthApp' className='link'>
                            Mental Health App
                        </Link>
                    </li>

                    <li className='nav-item' onClick={closeMenu}>
                        <Link to='/Design' className='link'>
                            UI Designs
                        </Link>
                    </li>
                    <li className='nav-item' onClick={closeMenu}>
                        <Link to='/About' className='link'>
                            About
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