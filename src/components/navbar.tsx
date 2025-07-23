import { Menu } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 transition-all duration-500">
            <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 bg-red-500 bg-red-200">
                <div className="flex justify-between item-center py-4">
                    <div className="text-2xl font-bold text-orange-400">
                        Ziba Nouri
                    </div>
                    <div className="hidden md:flex space-x-8">
                        {['Home', 'About', 'skills', 'Contact'].map((item) => (
                            <button className="capitalize hover:text-orange-200 transition-all duration-300 hover:translate-y-4 curser-pointer font-medium relative group">
                                {item}
                                <span className="absolute-bottom-1 left-0 w-0 h-0.5 group-hover:bg-orange-300 group-hover:w-full transition-all duration-1000"></span>
                            </button>
                        ))}
                    </div>
                    <button className="md:hidden p-2 rounded-lg hover:bg-black transition-colors">
                        <Menu className="w-6 h-8" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
