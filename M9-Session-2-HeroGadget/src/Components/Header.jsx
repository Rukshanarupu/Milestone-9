import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBolt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='bg-gray-100 container mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
          <div className='relative flex items-center justify-between'>
                <nav className="hidden lg:flex navbar bg-gray-100 text-white header container mx-auto">
                    {/* Logo section */}
                    <Link to="./" className="flex-1">
                        <p className='text'>
                            <FontAwesomeIcon className='w-6 text-blue-500' icon={faBolt} /> 
                            <span className='text-xl ml-2 font-bold text-gray-800'>NextPage</span>
                        </p>
                    </Link>

                    {/* Menu section */}
                    <ul className={`menu md:menu-horizontal absolute md:static duration-500 ${open? 'top-20':"-top-48"}`}>
                        <li className='text-black'>
                            <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                            </NavLink>
                        </li>
                        <li className='text-black'>
                            <NavLink to="/shop" 
                            className={({ isActive }) => (isActive ? 'active' : 'default')} 
                            >Shop
                            </NavLink>
                        </li>
                        <li className='text-black'>
                            <NavLink to="/cart" 
                            className={({ isActive }) => (isActive ? 'active' : 'default')} 
                            >Cart
                            </NavLink>
                        </li>
                        <li className='text-black'>
                            <NavLink 
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active' : 'default')} 
                            >About Us
                            </NavLink>
                        </li>
                        <li className='text-black'>
                            <NavLink to="/login"
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >Login
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                {/* Mobile Navbar Section */}
                <div className='lg:hidden container mx-auto my-3'>
                    {/* Dropdown Open Button */}
                    <div className='flex'>
                        <Link to="./" className="flex-1">
                            <p className='text'>
                                <FontAwesomeIcon className='w-6 text-blue-500' icon={faBolt} /> 
                                <span className='text-xl ml-2 font-bold text-gray-800'>NextPage</span>
                            </p>
                        </Link>
                        <button aria-label='Open Menu' title='Open Menu' onClick={() => setIsMenuOpen(true)}>
                            <FontAwesomeIcon className='w-6 text-gray-600' icon={faBars} /> 
                        </button>
                    </div>
                    {isMenuOpen && (
                        <div className='absolute top-0 left-0 w-full z-10'>
                            <div className='p-5 bg-white border rounded shadow-sm'>
                                {/* Logo & Button section */}
                                <div className='flex items-center justify-between mb-4'>
                                    <div>
                                        <Link to='/' className='inline-flex items-center'>
                                            <FontAwesomeIcon className='w-6 text-blue-500' icon={faBolt} /> 
                                            <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                            nextPage
                                        </span>
                                        </Link>
                                    </div>
                                    {/* Dropdown menu close button */}
                                    <div>
                                        <button aria-label='Close Menu' title='Close Menu' onClick={() => setIsMenuOpen(false)} >
                                            <FontAwesomeIcon className='w-6 text-gray-600' icon={faTimes} />
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile Nav Items Section */}
                                <nav>
                                    <ul className='space-y-4'>
                                        <li>
                                        <Link to='/' className='default text-gray-700'>
                                            Home
                                        </Link>
                                        </li>
                                        <li>
                                        <Link
                                            to='/shop'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            shop
                                        </Link>
                                        </li>
                                        <li>
                                        <Link
                                            to='/cart'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Cart
                                        </Link>
                                        </li>
                                        <li>
                                        <Link
                                            to='/about'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            About us
                                        </Link>
                                        </li>
                                        <li>
                                        <Link
                                            to='/login'
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Login
                                        </Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;
