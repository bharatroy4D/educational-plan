import React from "react";
import logo from "../../assets/logo.png"; // change to your logo

const Footer = () => {
    return (
        <footer className="bg-[#1C1E53] text-white py-12 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-8">

                {/* Logo + Text */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <img src={logo} alt="TOTC" className="w-20" />
                    </div>

                    <div className="border-r border-gray-400 h-8"></div>

                    <div>
                        <p className="text-lg font-semibold">Virtual Class</p>
                        <p className="text-lg font-semibold">for Zoom</p>
                    </div>
                </div>

                {/* Newsletter Heading */}
                <h2 className="text-xl font-medium text-gray-200 text-center">
                    Subscribe to get our Newsletter
                </h2>

                {/* Subscription Box */}
                <div className="flex gap-3 w-full max-w-md">
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-5 py-3 rounded-full bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none"
                    />

                    <button className="px-6 py-3 rounded-full bg-[#4AD7D1] text-black font-semibold hover:opacity-90 transition">
                        Subscribe
                    </button>
                </div>

                {/* Bottom Links */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-3 text-gray-300 text-sm">
                    <a href="#" className="hover:text-white transition">Careers</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white transition">Privacy Policy</a>
                    <span>|</span>
                    <a href="#" className="hover:text-white transition">Terms & Conditions</a>
                </div>

                {/* Copyright */}
                <p className="text-gray-400 text-sm mt-3">
                    © 2021 Class Technologies Inc.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
