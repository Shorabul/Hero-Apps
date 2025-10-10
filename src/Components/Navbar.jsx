import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import './Navbar.css';
// import { Github } from 'lucide-react';

const Navbar = () => {
    const [textColor, setTextColor] = useState('');

    return (
        <div className=''>
            <div className="navbar shadow-sm px-5 md:px-20">


                {/* <div className="navbar-start">
                    <figure className='nav-img-logo'>
                        <Link>
                            <img className='nav-img' src="/logo.png" alt="logo" />
                        </Link>
                        <Link to='/' className="nav-text text-[26px]">HERO.IO</Link>
                    </figure>
                </div> */}
                <div className="navbar-start">
                    <figure className="nav-img-logo flex items-center gap-2">
                        <Link to="/" className='w-6 h-6 md:w-8 md:h-8 lg:h-10 lg:w-10'>
                            <img className="nav-img" src="/logo.png" alt="logo" />
                        </Link>
                        <Link to='/' className="nav-text text-lg md:xl lg:text-[26px]">
                            <span >HERO.IO</span>
                        </Link>
                    </figure>
                </div>


                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-8 text-[#00000090] font-semibold">
                        <li onClick={() => setTextColor('home')}>
                            <NavLink to="/" className={`nav-menu ${textColor === 'home' && 'nav-menu-active'}`}>Home</NavLink>
                        </li>
                        <li onClick={() => setTextColor('apps')}>
                            <NavLink to='/apps' className={`nav-menu ${textColor === 'apps' && 'nav-menu-active'}`}>Apps</NavLink>
                        </li>
                        <li onClick={() => setTextColor('installation')} >
                            <NavLink to='/installation' className={`nav-menu ${textColor === 'installation' && 'nav-menu-active'}`}>Installation</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-[#00000090] font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow -right-[86px] text-[#00000090] font-semibold">
                            <li onClick={() => setTextColor('home')}>
                                <NavLink to="/" className={`${textColor === 'home' && 'nav-menu-active'}`}>Home</NavLink>
                            </li>
                            <li onClick={() => setTextColor('apps')}>
                                <NavLink to='/apps' className={`${textColor === 'apps' && 'nav-menu-active'}`}>Apps</NavLink>
                            </li>
                            <li onClick={() => setTextColor('installation')} >
                                <NavLink to='/installation' className={`${textColor === 'installation' && 'nav-menu-active'}`}>Installation</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <button className="btn nav-btn"><span className='nav-btn-github'><Github className='bg-white' /></span> Contribute</button> */}
                    <button className="btn nav-btn" onClick={() => window.open('https://github.com/Shorabul', '_blank')}><img src="/github.png" alt="" />Contribute</button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;