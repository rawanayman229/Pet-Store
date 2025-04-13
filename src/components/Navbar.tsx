import React, { useEffect, useState, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState<any[]>([]);
    const [searchResults, setSearchResults] = useState<any[]>([]);

    const searchInputRef = useRef<HTMLDivElement>(null);
    const searchResultsRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
        if (searchVisible) setSearchVisible(false);
    };

    const toggleSearch = () => {
        setSearchVisible(!searchVisible);
    };

    useEffect(() => {
        fetch("https://round-3-pet-store.digital-vision-solutions.com/api/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;

            if (
                !searchInputRef.current?.contains(target) &&
                !searchResultsRef.current?.contains(target)
            ) {
                setSearchVisible(false);
                setSearchQuery("");
                setSearchResults([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            const found = products.data?.filter((product: any) =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(found || []);
        }
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 transition-all duration-200 ${scrolled ? "bg-white" : "bg-transparent"}`}>
                <div className="flex items-center justify-between px-5 py-4 lg:px-20 sm:px-10">
                    {/* Sidebar Toggle - Mobile */}
                    <div className="sm:hidden flex-grow text-left">
                        <button onClick={toggleSidebar} className="text-blue-950 hover:text-blue-500 text-2xl">
                            <i className="pi pi-bars"></i>
                        </button>
                    </div>

                    {/* Logo */}
                    <Link to="/" className="text-center flex justify-center items-center">
                        <img src="images/logo.png" alt="Logo" className="h-10 mx-auto max-w-full" />
                    </Link>

                    {/* Search Icon - Mobile */}
                    <div className="sm:hidden flex-grow text-right">
                        <button onClick={toggleSearch} className="text-blue-950 hover:text-blue-500 text-2xl">
                            <i className="pi pi-search"></i>
                        </button>
                    </div>

                    {/* Desktop Links */}
                    <ul className="hidden sm:flex space-x-6 text-lg font-semibold text-blue-950">
                        <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                        <li><Link to="/categoriespage" className="hover:text-blue-500">Category</Link></li>
                        <li><a href="#" className="hover:text-blue-500">About</a></li>
                        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
                    </ul>

                    {/* Desktop Search */}
                    <div className="hidden md:flex bg-white rounded-full px-8 py-4 shadow-sm">
                        <IconField iconPosition="left">
                            <InputIcon className="pi pi-search" />
                            <InputText
                                placeholder="Search something here!"
                                className="focus:outline-none rounded-full ml-10"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchKeyDown}
                            />
                        </IconField>
                    </div>

                    {/* Join Button */}
                    <a href="#" className="hidden sm:block bg-blue-950 text-white font-semibold px-6 py-2 hover:bg-blue-500 rounded-full">
                        Join the community
                    </a>
                </div>

                {/* Mobile Search Field */}
                {searchVisible && (
                    <div ref={searchInputRef} className="sm:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 p-4">
                        <IconField iconPosition="left" className="w-full">
                            <InputIcon className="pi pi-search" />
                            <InputText
                                placeholder="Search something here!"
                                className="!rounded-full bg-white border px-4 py-2 shadow-sm focus:outline-none w-full"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchKeyDown}
                            />
                        </IconField>
                    </div>
                )}

                {/* Search Results */}
                {searchResults.length > 0 && (
                    <div ref={searchResultsRef} className="bg-white p-6 max-w-6xl mx-auto shadow-md rounded mt-4 z-30 relative">
                        <h2 className="text-xl font-bold mb-4">Search Results:</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {searchResults.map((product) => (
                                <Link
                                    to={`/productDetails/${product.id}`}
                                    key={product.id}
                                    className="border rounded-lg p-4 shadow hover:shadow-lg transition-all duration-300"
                                >
                                    <img
                                        src={product.image || "https://via.placeholder.com/150"}
                                        alt={product.name}
                                        className="w-full h-40 object-cover rounded mb-3"
                                    />
                                    <h3 className="text-lg font-semibold">{product.name}</h3>
                                    <p className="text-sm text-gray-500 truncate">{product.description}</p>
                                    <p className="mt-2 font-bold text-blue-600">${product.price}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 z-50 ${isSidebarVisible ? "translate-x-0" : "translate-x-full"}`}>
                <div className="p-6 flex flex-col space-y-6">
                    <div className="flex justify-end">
                        <button onClick={toggleSidebar} className="text-blue-950 text-xl">
                            <i className="pi pi-times"></i>
                        </button>
                    </div>
                    <Link to="/" className="text-lg font-semibold text-blue-950 hover:text-blue-500">Home</Link>
                    <Link to="/categoriespage" className="text-lg font-semibold text-blue-950 hover:text-blue-500">Category</Link>
                    <a href="#" className="text-lg font-semibold text-blue-950 hover:text-blue-500">About</a>
                    <a href="#" className="text-lg font-semibold text-blue-950 hover:text-blue-500">Contact</a>
                    <a href="#" className="bg-blue-950 text-white text-center font-semibold px-6 py-3 hover:bg-blue-500 rounded-full">
                        Join the community
                    </a>
                </div>
            </div>

            {/* Sidebar Overlay */}
            {isSidebarVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar} />
            )}
        </>
    );
};

export default Navbar;
