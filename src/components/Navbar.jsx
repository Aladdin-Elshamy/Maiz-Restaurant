import { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
export default function BurgerNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
      <nav className="font-cotoris relative bg-transparent w-full h-fit z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <NavLink
            to="/"
            className="flex items-center py-4 space-x-3 rtl:space-x-reverse"
          >
            <img src="./images/logo.svg" className="w-20" alt="Logo" />
          </NavLink>
          <div className="md:mb-auto mt-4 flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="flex items-center justify-center mr-1">
              <span className="bg-[#CC9D2F] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:text-lg px-3 sm:px-6 py-2 sm:py-3 text-center dark:hover:bg-yellow-500 dark:focus:ring-yellow-800 text-[#5B0017] font-cotorisBold">
                Book Now
              </span>
              <img src="./images/button.svg" className="h-10 sm:h-16" alt="Button" />
            </button>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#5B0017] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 bg-[#CC9D2F] dark:focus:ring-yellow-600 focus:bg-[#CC9D2F] focus:text-[#5B0017]"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:mb-auto md:mt-8 items-center justify-between w-screen md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col md:p-0 font-medium rounded-lg gap-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-[#CC9D2F] md:bg-transparent">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#CC9D2F] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#CC9D2F] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavHashLink
                  to="/#menu"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#CC9D2F] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Menu
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#location"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#CC9D2F] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Venu
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#feedback"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#CC9D2F] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Events
                </NavHashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}