import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-stone-200/80
        ${isScrolled ? 'bg-stone-200/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}
        `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-stone-200/80 rounded-lg">
                <div className="flex justify-between items-center py-4">
                    <div
                        className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600
                    text-transparent bg-clip-text"
                    >
                        Ziba Nouri
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {['home', 'about', 'skills', 'projects', 'contact'].map(
                            (item) => (
                                <button className="capitalize hover:text-gray-800 transition-all duration-300 cursor-pointer font-medium relative group">
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:bg-gray-800 group-hover:w-full transition-all duration-300"></span>
                                </button>
                            )
                        )}
                    </div>
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden py-4 bg-white/90 rounded-lg mt-2 border border-gray-400/20 backdrop-blur-md">
                        <div className="flex flex-col space-y-4 px-4">
                            {[
                                'home',
                                'about',
                                'skills',
                                'projects',
                                'contact',
                            ].map((item) => (
                                <button
                                    className="capitalize text-left py-2 hover:text-gray-800
                                    transition-colors duration-300 font-medium cursor-pointer"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
