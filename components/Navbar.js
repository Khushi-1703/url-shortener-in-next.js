"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Shorten", path: "/shorten" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-purple-950/70 backdrop-blur-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold tracking-tight text-white transition-colors duration-300 hover:text-purple-300"
          >
            SnipURL
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-sm font-medium text-purple-100">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className={`relative transition-all duration-300 hover:text-white ${
                      pathname === link.path ? "text-white" : "text-purple-200"
                    }`}
                  >
                    {link.name}
                    {pathname === link.path && (
                      <span className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-purple-400"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop Buttons */}
            <div className="flex items-center gap-3">
              <Link
                href="/shorten"
                className="rounded-xl bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-purple-500 hover:shadow-purple-500/30"
              >
                Try Now
              </Link>

              <Link
                href="https://github.com/Khushi-1703"
                className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-purple-100 transition-all duration-300 hover:bg-white/10 hover:text-white"
              >
                GitHub
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            menuOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-3 pt-2 text-purple-100 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 transition-all duration-300 ${
                    pathname === link.path
                      ? "bg-purple-700/40 text-white"
                      : "hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex items-center gap-3">
            <Link
              href="/shorten"
              onClick={() => setMenuOpen(false)}
              className="flex-1 rounded-xl bg-purple-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-purple-500"
            >
              Try Now
            </Link>

            <Link
              href="https://github.com/Khushi-1703"
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-purple-100 transition-all duration-300 hover:bg-white/10 hover:text-white"
            >
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
