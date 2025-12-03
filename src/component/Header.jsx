import React, { useState } from 'react';
import { Link } from "react-router-dom";

// logged in user
// const name = "Rowajana Barbie";

// function UserInfo() {
//     return (
//         <div className="flex items-center space-x-2">
//             <div className="text-white text-base">Hello, {name}</div>
//         </div>
//     );
// }

function Header() {
    // State to handle the mobile menu collapse/expand
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'News & Events', path: '/events' },
        { name: 'Our Mission', path: '/mission' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Donate', path: '/donate' },
    ];

    return (
        <header className="bg-dark-blue shadow-lg font-sans">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    <Link to="/" className="flex items-center flex-shrink-0">
                        <img
                            src="/logo_full_transparent.png"
                            alt="Jeremiah's Inn logo"
                            className="h-12 w-15"
                        />
                    </Link>

                    {/* Desktop Navigation & Search */}
                    <div className="hidden lg:flex lg:items-center lg:space-x-8">
                        {/* Links */}
                        <div className="flex items-center space-x-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="text-white text-base font-medium hover:text-light-orange transition duration-150"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            {/* Search (Aligned to the right) */}
                            <div className="flex items-center">
                                {/* Search Container */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        className="p-2 pl-4 text-sm text-off-black rounded-full border border-dark-blue focus:outline-none focus:ring-2 focus:ring-light-orange w-40 transition"
                                        placeholder="Search..."
                                    />
                                    <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-dark-blue">
                                        <i className="fa-solid fa-magnifying-glass"></i>
                                    </button>
                                </div>

                                {/*/!* User Info *!/*/}
                                {/*<UserInfo />*/}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden flex items-center">
                        {/* Toggle Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-light-orange hover:bg-med-blue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            {/* Icon for open/close state */}
                            <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
                        </button>
                    </div>
                </div>
            </div>

            {/*Mobile View*/}
            {isMenuOpen && (
                <div className="lg:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-white hover:bg-med-blue hover:text-light-orange block px-3 py-2 rounded-md text-base font-medium transition duration-150"
                                onClick={() => setIsMenuOpen(false)} // Close menu on click
                            >
                                {item.name}
                            </Link>
                        ))}
                        {/* Search for mobile */}
                        <div className="pt-4 border-t border-med-blue">
                            {/*<UserInfo />*/}
                            {/* Mobile Search - Adjust styling as needed for fit */}
                            <div className="mt-2 relative">
                                <input
                                    type="text"
                                    className="w-full p-2 pl-4 text-sm text-off-black rounded-lg border border-dark-blue focus:outline-none focus:ring-2 focus:ring-light-orange"
                                    placeholder="Search..."
                                />
                                <button type="submit" className="absolute right-0 top-0 mt-2 mr-3 text-dark-blue">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;