import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

const Navbar: React.FC = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);


const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
};

return (
    <nav className="bg-white px-6 py-4 shadow-md">
    <div className="max-w-full mx-auto flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="flex flex-col items-start">
        <a href="/"><img src="images/logo.png" alt="Logo" className="h-10" /></a>
        </div>

        {/* Links */}
        <ul className={`flex space-x-6 text-lg font-semibold text-blue-950 sm:flex ${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <li><a href="#" className="hover:text-blue-500">Home</a></li>
        <li><a href="#" className="hover:text-blue-500">Category</a></li>
        <li><a href="#" className="hover:text-blue-500">About</a></li>
        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* Search bar */}
        <div className="sm:flex items-center space-x-2">
        <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText placeholder="Search something here!" />
        </IconField>
        </div>

        {/* Button */}
        <a href="#" className="bg-blue-950 text-white font-semibold px-8 py-3 hover:bg-blue-500 rounded-full cursor-pointer">
        Join the community
        </a>

        {/* Mobile Menu */}
        <div className="sm:hidden flex items-center space-x-4">
        <button
            className="text-blue-950 hover:text-blue-500"
            onClick={toggleMenu} 
        >
            <i className="pi pi-bars"></i>
        </button>
        </div>
    </div>
    </nav>
);
};

export default Navbar;
