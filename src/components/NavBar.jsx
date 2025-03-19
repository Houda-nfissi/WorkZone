import React from 'react';
import { Menu, Search, User, Code } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Code className="w-8 h-8 text-purple-600 mr-2" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              TechTalent
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Find Tech Jobs</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Hire Developers</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors">Why Us</a>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
              Post IT Project
            </button>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600 transition-colors" />
            <User className="w-5 h-5 text-gray-600 cursor-pointer hover:text-purple-600 transition-colors" />
            <Menu className="w-5 h-5 text-gray-600 md:hidden cursor-pointer hover:text-purple-600 transition-colors" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;