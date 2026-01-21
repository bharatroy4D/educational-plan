import React from 'react';
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <header className="bg-[#49BBBD]">
            <div className="container mx-auto px-10 py-4 flex items-center justify-between">
                {/* Logo */}
                <img className='w-20 h-' src={logo} alt="logo" />
                {/* Desktop Menu */}
                <div className='flex justify-center items-center gap-12 font-sans'>
                    <nav className="hidden md:flex items-center gap-8 font-medium">
                        <Link to="/" className="hover:text-cyan-600 transition">Home</Link>
                        <Link to="/courses" className="hover:text-cyan-600 transition">Courses</Link>
                        <Link to="/careers" className="hover:text-cyan-600 transition">Careers</Link>
                        <Link to="/blog" className="hover:text-cyan-600 transition">Blog</Link>
                        <Link to="/about" className="hover:text-cyan-600 transition">About Us</Link>
                    </nav>
                    {/* button */}
                    <div className='space-x-3 font-semibold font-sans'>
                        <button>
                            <Link to="/login" className="text-gray-500 transition bg-white rounded-full px-6 py-2 ">Login</Link>
                        </button>
                        <button>
                            <Link to="/register" className="transition bg-gray-400 rounded-full px-6 py-2 ">Register</Link>
                        </button>
                    </div>
                </div>


                {/* Mobile Icon */}
                <div className="md:hidden">
                    <Menu className="w-7 h-7 text-gray-700" />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
