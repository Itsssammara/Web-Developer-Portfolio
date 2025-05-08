// src/components/Navbar.js
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black shadow-md px-6 py-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold text-purple-600">Ammara&apos;s Portfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex gap-9 text-white">
          <li><a href="#case-studies" className="hover:text-pink-400 transition-colors">My Work</a></li>
          <li><a href="#about" className="hover:text-pink-400 transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-pink-400 transition-colors">Skills</a></li>
          <li><a href="#tools" className="hover:text-pink-400 transition-colors">Tools</a></li>
          <li><a href="#contact" className="hover:text-pink-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)} className="text-white focus:outline-none">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-700">
          <span className="text-lg font-semibold text-purple-500">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col space-y-6 px-6 pt-6">
          <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Home</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">My Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Skills</a>
          <a href="#tools" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Tools</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
