import React from "react";

function Footer() {
  return (
    <div className="w-full bg-gradient-to-t from-black to-[#121951] text-white p-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left side - Brand & Address */}
        <div className="md:w-1/3 flex flex-col animate-fadeInLeft">
          <h1 className="text-4xl font-bold mb-4">Meher</h1>
          <p className="mb-2">We do not divide our collections to seasons</p>
          <p className="mb-2">Technology Park</p>
          <p className="mb-2">B-14 Cruise Street Marie</p>
          <p className="mb-2">09876 USA</p>
          <p className="mb-2">emailhellomeher@gmail.com</p>
        </div>

        {/* Right side - Grids */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Customers */}
          <div className="animate-fadeInUp hover:scale-105 transition duration-500 ease-in-out">
            <h2 className="text-2xl font-bold mb-4">Customers</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition duration-300">Order Tracking</li>
              <li className="hover:text-gray-300 transition duration-300">Returns & Refunds</li>
              <li className="hover:text-gray-300 transition duration-300">FAQs</li>
              <li className="hover:text-gray-300 transition duration-300">Gift Cards</li>
              <li className="hover:text-gray-300 transition duration-300">Special Offers</li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp delay-200 hover:scale-105 transition duration-500 ease-in-out">
            <h2 className="text-2xl font-bold mb-4">Services</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition duration-300">Free Shipping</li>
              <li className="hover:text-gray-300 transition duration-300">Personal Shopping</li>
              <li className="hover:text-gray-300 transition duration-300">24/7 Support</li>
              <li className="hover:text-gray-300 transition duration-300">Customization</li>
              <li className="hover:text-gray-300 transition duration-300">Warranty Services</li>
            </ul>
          </div>

          {/* Products */}
          <div className="animate-fadeInUp delay-400 hover:scale-105 transition duration-500 ease-in-out">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition duration-300">Jackets & Coats</li>
              <li className="hover:text-gray-300 transition duration-300">Shoes & Sneakers</li>
              <li className="hover:text-gray-300 transition duration-300">Headphones</li>
              <li className="hover:text-gray-300 transition duration-300">Lamps & Lights</li>
              <li className="hover:text-gray-300 transition duration-300">Bags & Accessories</li>
            </ul>
          </div>

          {/* Company Info */}
          <div className="md:col-span-1 sm:col-span-2 mt-6 md:mt-0 animate-fadeInUp delay-600 hover:scale-105 transition duration-500 ease-in-out">
            <h2 className="text-2xl font-bold mb-4">Company Info</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition duration-300">About Us</li>
              <li className="hover:text-gray-300 transition duration-300">Our Team</li>
              <li className="hover:text-gray-300 transition duration-300">Careers</li>
              <li className="hover:text-gray-300 transition duration-300">Press & Media</li>
              <li className="hover:text-gray-300 transition duration-300">Privacy Policy</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="md:col-span-1 sm:col-span-2 mt-6 md:mt-0 animate-fadeInUp delay-800 hover:scale-105 transition duration-500 ease-in-out">
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <ul className="space-y-2">
              <li className="hover:text-gray-300 transition duration-300">Facebook</li>
              <li className="hover:text-gray-300 transition duration-300">Instagram</li>
              <li className="hover:text-gray-300 transition duration-300">Twitter</li>
              <li className="hover:text-gray-300 transition duration-300">LinkedIn</li>
              <li className="hover:text-gray-300 transition duration-300">Youtube</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
