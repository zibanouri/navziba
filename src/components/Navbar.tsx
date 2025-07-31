import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative top-0 left-0 right-0 z-20 transition-all duration-500 shadow-sm bg-white/90 backdrop-blur-md">
            <div className="max-w-5xl mx-auto p-4 sm:px-6 lg:px-8 rounded-lg">
                <div className="flex justify-between items-center py-5">
                    <div className="text-2xl font-bold text-slate-800">
                        Ziba Nouri
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {['Home', 'About', 'Skills', 'Contact'].map((item) => (
                            <button
                                key={item}
                                className="capitalize text-slate-700 hover:text-blue-600 transition-all duration-300 cursor-pointer font-medium relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                    </div>
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
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
                    <div className="md:hidden py-4 bg-black/5 rounded-lg mt-2 border border-black/10">
                        <div className="flex flex-col space-y-4 px-4">
                            {[
                                'home',
                                'about',
                                'skills',
                                'projects',
                                'contact',
                            ].map((item) => (
                                <button
                                    className="capitalize text-left py-2 hover:text-blue-600
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
