"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/criteria", label: "Criteria" },
  { href: "/insights", label: "Insights" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);
  const toggleDarkMode = () => {
    setDarkMode((curr) => (curr = !curr));
    const html = document.documentElement;

    html.classList.toggle("dark");
    console.log(darkMode);
  };

  return (
    <header className="w-full border-b border-gray-200/50 dark:border-gray-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl sticky top-0 z-50 shadow-sm dark:shadow-gray-800/20">
      {/* Subtle top accent line */}
      <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Enhanced Logo */}
        <Link
          href="/"
          className="group flex items-center space-x-2 transition-all duration-300"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl dark:shadow-gray-800/50 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 dark:from-cyan-300 dark:to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              Mr. Anwar Arshi
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
              Angel Investor
            </span>
          </div>
        </Link>

        {/* Enhanced Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200 rounded-xl group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="relative z-10">{link.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-200 transform scale-95 group-hover:scale-100"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 transition-all duration-200 group-hover:w-3/4 transform -translate-x-1/2"></div>
            </Link>
          ))}

          {/* Enhanced Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="relative p-3 ml-4 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group shadow-sm hover:shadow-md dark:shadow-gray-800/50"
          >
            <div className="relative">
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-500 dark:text-amber-400 transition-transform duration-200 group-hover:rotate-12" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600 dark:text-slate-300 transition-transform duration-200 group-hover:-rotate-12" />
              )}
            </div>
          </button>
        </nav>

        {/* Enhanced CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-full hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-gray-800/50 transform hover:scale-105 group"
        >
          <span className="font-medium">Submit Your Pitch</span>
          <div className="w-2 h-2 bg-white rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-200"></div>
        </Link>

        {/* Enhanced Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-3">
          {/* Mobile theme toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-amber-500 dark:text-amber-400" />
            ) : (
              <Moon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 relative group"
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <Menu
                className={`w-5 h-5 text-gray-700 dark:text-gray-300 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0 rotate-90"
                    : "opacity-100 rotate-0"
                }`}
              />
              <X
                className={`w-5 h-5 text-gray-700 dark:text-gray-300 absolute transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-100 rotate-0"
                    : "opacity-0 -rotate-90"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-800 dark:to-blue-900/20 border-t border-gray-200/50 dark:border-gray-700/50">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-2 gap-3 mb-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center justify-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 bg-white/70 dark:bg-gray-800/70 hover:bg-white dark:hover:bg-gray-700 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-gray-800/30 group"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <Link
              href="/contact"
              className="flex items-center justify-center space-x-2 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-200 shadow-lg dark:shadow-gray-800/50 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Submit Your Pitch</span>
              <div className="w-2 h-2 bg-white rounded-full opacity-70"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Floating accent elements */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-purple-100/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-100/20 to-cyan-100/20 dark:from-purple-900/10 dark:to-cyan-900/10 rounded-full blur-2xl pointer-events-none"></div>
    </header>
  );
}