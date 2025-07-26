const Navbar = () => {
  return (
    <nav className="relative top-0 left-0 right-0 z-40 transition-all duration-500 shadow-md ">
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 bg-slate-300 rounded-lg  ">
        <div className="flex justify-between items-center py-5">
          <div className="text-2xl font-bold text-black-400">
            Ziba Nouri
          </div>
          <div className="hidden md:flex space-x-8 ">
            {['Home', 'About', 'skills', 'Contact'].map((item) => (
              <button className="capitalize transition-all duration-300 hover:translate-y-4 cursor-pointer font-medium relative group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-1000 group-hover:w-full mt-2"></span>
              </button>
            ))}
          </div>
          <button className="md:hidden p-2 rounded-lg hover:bg-red-100 transition-colors">
           <div className="w-6 h-8 flex flex-col justify-center">
              <span className="block w-6 h-0.5 bg-gray-700 mb-2"></span>
              <span className="block w-6 h-0.5 bg-gray-700 mb-2"></span>
              <span className="block w-6 h-0.5 bg-gray-700"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;