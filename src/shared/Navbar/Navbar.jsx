import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from '../../assets/logo.png'

const Navbar = () => {

    const [open, setOpen] = useState(false); // mobile menu state

    return (
        <header>
            <div className="w-full bg-[#49BBBD]">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <img className='w-20' src={logo} alt="logo" />

                    {/* Desktop Menu */}
                    <div className='hidden md:flex justify-center items-center gap-12 font-sans'>
                        <nav className="flex items-center gap-8 font-medium">
                            <Link to="/" className="hover:text-cyan-600 transition">Home</Link>
                            <Link to="/courses" className="hover:text-cyan-600 transition">Courses</Link>
                            <Link to="/careers" className="hover:text-cyan-600 transition">Careers</Link>
                            <Link to="/blog" className="hover:text-cyan-600 transition">Blog</Link>
                            <Link to="/about" className="hover:text-cyan-600 transition">About Us</Link>
                        </nav>

                        <div className='space-x-3 font-semibold'>
                            <Link to="/login" className="bg-white text-gray-700 rounded-full px-6 py-2">Login</Link>
                            <Link to="/register" className="bg-gray-700 text-white rounded-full px-6 py-2">Register</Link>
                        </div>
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden" onClick={() => setOpen(!open)}>
                        {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white  shadow-lg py-6 px-6 space-y-5 text-lg font-medium">

                    <Link to="/" className="block text-gray-600" onClick={() => setOpen(false)}>Home</Link>
                    <Link to="/courses" className="block  text-gray-600" onClick={() => setOpen(false)}>Courses</Link>
                    <Link to="/careers" className="block  text-gray-600" onClick={() => setOpen(false)}>Careers</Link>
                    <Link to="/blog" className="block  text-gray-600" onClick={() => setOpen(false)}>Blog</Link>
                    <Link to="/about" className="block  text-gray-600" onClick={() => setOpen(false)}>About Us</Link>

                    <div className="pt-4 space-y-3">
                        <Link
                            to="/login"
                            className="block text-center bg-gray-200 rounded-full px-6 py-2"
                            onClick={() => setOpen(false)}
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="block text-center bg-gray-800 text-white rounded-full px-6 py-2"
                            onClick={() => setOpen(false)}
                        >
                            Register
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
