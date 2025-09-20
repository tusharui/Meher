import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-20 py-4 relative">
      {/* Logo */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-[700]">Meher</h1>

      {/* Desktop / Tablet Menu */}
      <ul className="hidden md:flex gap-4 lg:gap-8 text-[16px] sm:text-[18px] lg:text-[20px] font-[600]">
        <li className="hover:text-gray-500 cursor-pointer transition transform hover:scale-110 duration-300 ease-in-out">
          Home
        </li>
        <li className="hover:text-gray-500 cursor-pointer transition transform hover:scale-110 duration-300 ease-in-out">
          Products
        </li>
        <li className="hover:text-gray-500 cursor-pointer transition transform hover:scale-110 duration-300 ease-in-out">
          About Us
        </li>
        <li className="hover:text-gray-500 cursor-pointer transition transform hover:scale-110 duration-300 ease-in-out">
          Categories
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl focus:outline-none transition transform hover:scale-110 duration-300"
        >
          {open ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col gap-4 absolute top-16 right-4 bg-gray-100 p-4 rounded shadow-md md:hidden animate-slideDown">
          <li className="hover:text-gray-500 cursor-pointer transition transform hover:scale-105 duration-300">
            Home
          </li>
          <li className="hover:text-gray-500 cursor-pointer transition transform hover:scale-105 duration-300">
            Products
          </li>
          <li className="hover:text-gray-500 cursor-pointer transition transform hover:scale-105 duration-300">
            About Us
          </li>
          <li className="hover:text-gray-500 cursor-pointer transition transform hover:scale-105 duration-300">
            Categories
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
