"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white/70 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-rose-600">
          Pastry Shop
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-800 font-medium">
          <Link href="/" className="hover:text-rose-600 transition">Home</Link>
          <Link href="/menu" className="hover:text-rose-600 transition">Menu</Link>
          <Link href="/about" className="hover:text-rose-600 transition">About</Link>
          <Link href="/contact" className="hover:text-rose-600 transition">Contact</Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-800 text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-lg flex flex-col px-6 py-4 gap-4 text-gray-800 text-lg font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/menu" onClick={() => setOpen(false)}>Menu</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
