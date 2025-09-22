import React from 'react';
import dollarImg from '../assets/dollar.svg';
import logo from '../assets/logo.png';
const Header = ({mainBalance}) => {
    return (
        <header>
            <div className="navbar container">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <a className="text-xl">
                        <img src={logo} alt="" className='w-[4.5rem]' />
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 space-x-6">
                        <li><a>Home</a></li>
                        <li><a>Fixture</a></li>
                        <li><a>Teams</a></li>
                        <li><a>Schedules</a></li>
                    </ul>
                    <div className='btn rounded-lg shadow-none bg-white ml-8 text-black border-[#e5e5e5] font-semibold'>
                        <span>{mainBalance} Coins</span>
                        <img src={dollarImg} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;