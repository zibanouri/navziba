import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="relative top-0 left-0 right-0 z-40 transition-all duration-500 shadow-sm bg-white/90 backdrop-blur-md">
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
                            <X className="w-6 h-6 text-slate-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-slate-700" />
                        )}
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden py-4 bg-white/95 rounded-lg mt-2 border border-gray-200 shadow-sm">
                        <div className="flex flex-col space-y-4 px-4">
                            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                                <button
                                    key={item}
                                    className="capitalize text-left py-2 text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium cursor-pointer"
                                    onClick={() => setIsMenuOpen(false)}
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
