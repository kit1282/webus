// components/Sidebar.js

import { useState } from 'react';
import { FiX } from 'react-icons/fi'; // For the close button
import { FiInstagram, FiLinkedin } from 'react-icons/fi'; // For the social media icons

export default function Sidebar({isOpen, setIsOpen}:any) {

  return (
    <div className={`fixed top-0 left-0 h-screen bg-slate-700 text-black transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-dvw`}>
      <div className="flex justify-between items-center p-4">
        {/* Close Button */}
        <button onClick={() => setIsOpen(false)} className="text-black text-2xl">
          <FiX  />
        </button>
        {/* Social Media Icons */}
        <div className="flex space-x-3">
          <a href="#" aria-label="LinkedIn" className="text-black text-xl" >
            <FiLinkedin />
          </a>
          <a href="#" aria-label="Instagram" className="text-black text-xl">
            <FiInstagram  />
          </a>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col space-y-4 pl-6 mt-10">
        <a href="#" className="text-red-500 text-lg font-bold">home</a>
        <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">about</a>
        <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">services</a>
        <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">case studies</a>
        <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">contact us</a>
      </nav>
    </div>
  );
}