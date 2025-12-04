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

const involvedSubItems = [
    { name: 'Donate', description: 'Make a financial contribution to support our mission.', path: '/donate' },
    { name: 'Partner', description: 'Explore business and organizational partnerships.', path: '/partner' },
    { name: 'Volunteer', description: 'Give your time to directly support our programs.', path: '/volunteer' },
];

const navItems = [
    { name: 'Home', path: '/'},
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    {
        name: 'Get Involved',
        path: '#',
        type: 'dropdown',
        subItems: involvedSubItems
    },
    { name: 'Contact Us', path: '/contact' },
    { name: 'News & Events', path: '/events' },
];

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navButtonClass = "inline-flex items-center rounded-full px-3 py-1 border-2 border-dark-blue bg-dark-blue text-base font-bold text-white transition duration-300 hover:bg-off-white hover:text-dark-blue hover:border-dark-blue shadow-lg hover:shadow-xl transform hover:scale-[1.02] whitespace-nowrap";
    const mobileLinkClass = "block w-full text-left px-3 py-2 text-base font-medium text-white hover:bg-blue-800 rounded-md transition duration-150 ease-in-out";


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
                                    className="inline-block rounded-full px-2
            border-2 border-dark-blue bg-dark-blue text-base font-bold
            text-white transition duration-300
            hover:bg-off-white hover:text-dark-blue hover:border-dark-blue
            shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
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
                                        className="p-2 pl-4 text-sm text-off-black rounded-full border border-dark-blue
                                        focus:outline-none focus:ring-2 focus:ring-white w-40 transition"
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
                                className="inline-block rounded-full px-2
            border-2 border-dark-blue bg-dark-blue text-base font-bold
            text-white transition duration-300
            hover:bg-off-white hover:text-dark-blue hover:border-dark-blue
            shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
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