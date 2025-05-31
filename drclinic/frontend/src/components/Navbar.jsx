// drclinic/frontend/src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors duration-300">DrClinic</Link>
        <div className="space-x-4">
                  <Link to="/" className="hover:text-blue-200 transition-colors duration-300">Home</Link>
                  <Link to="/about" className="hover:text-blue-200 transition-colors duration-300">About Clinic</Link>
                  <Link to="/services" className="hover:text-blue-200 transition-colors duration-300">Services</Link>
                  <Link to="/contact" className="hover:text-blue-200 transition-colors duration-300">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}
