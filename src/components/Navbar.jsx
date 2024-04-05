import React from "react";
import { Outlet ,Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <>
       <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-lg backdrop-filter bg-opacity-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              {/* Your logo component or text */}
              <img
                className="w-1/6 h-auto"
                src="https://pngimg.com/uploads/mercedes_logos/mercedes_logos_PNG32.png"
                alt=""
              />
            </div>
            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Your mobile menu button component */}
            </div>
            {/* Desktop Menu */}
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to="/"
                  className="text-zinc-50 nav-link transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white rounded-lg px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/product"
                  className="text-zinc-50 nav-link transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white rounded-lg px-3 py-2 text-sm font-medium"
                >
                  Product
                </Link>
                <Link
                  to="/about"
                  className="text-zinc-50 nav-link transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white rounded-lg px-3 py-2 text-sm font-medium"
                >
                  About
                </Link>
                {/* Link to Cart */}
                <Link
                  to="/cart"
                  className="text-zinc-50 nav-link transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white rounded-lg px-3 py-2 text-sm font-medium"
                >
                  Cart
                </Link>
                {/* Link to Login */}
                <Link
                  to="/login"
                  className="text-zinc-50 nav-link transition duration-300 ease-in-out hover:bg-gray-700 hover:text-white rounded-lg px-3 py-2 text-sm font-medium"
                >
                  Login
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Notification Button */}
              <button
                type="button"
                className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                {/* Notification Icon */}
              </button>
              {/* User Menu */}
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    {/* User Icon */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-4 py-3">
            <Link
              to="/dashboard"
              className="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </Link>
            <Link
              to="/team"
              className="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium"
            >
              Team
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium"
            >
              Projects
            </Link>
            <Link
              to="/calendar"
              className="text-white hover:text-gray-200 block px-3 py-2 text-base font-medium"
            >
              Calendar
            </Link>
          </div>
        </div>
      </nav> 
    <Outlet />
    </>
    
  );
};

export default Navbar;
