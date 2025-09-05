
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        
        <Link to="/" className="text-2xl font-extrabold">SHOP.CO</Link>

        <div className="hidden md:flex flex-1 items-center justify-center gap-6">
          <ul className="flex items-center gap-8 text-gray-700 font-medium">
            <li>
              <Link to="/shop" className="hover:text-black">Shop</Link>
            </li>
            <li>
              <Link to="/topselling" className="hover:text-black">New Arrivals</Link>
            </li>
            <li>
              <Link to="/browse" className="hover:text-black">Brands</Link>
            </li>
          </ul>

         
          <div className="hidden lg:flex items-center w-[400px] lg:w-[500px] bg-gray-100 rounded-full px-4 py-2">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-6">
          <Search className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black md:hidden" />
          <ShoppingCart className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />
          <User className="w-6 h-6 text-gray-700 cursor-pointer hover:text-black" />

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
            </li>
            <li>
              <Link to="/topselling" onClick={() => setMenuOpen(false)}>New Arrivals</Link>
            </li>
            <li>
              <Link to="/browse" onClick={() => setMenuOpen(false)}>Brands</Link>
            </li>
          </ul>

          <div className="flex items-center w-full bg-gray-100 rounded-full px-4 py-2 mt-4">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for products..."
              className="ml-2 w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
