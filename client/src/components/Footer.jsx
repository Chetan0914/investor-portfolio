'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-16 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-blue-900/10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo / Branding */}
          <div className="space-y-4">
            <div className="group">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-blue-200 bg-clip-text text-transparent mb-3 transition-all duration-300 group-hover:from-blue-200 group-hover:to-white">
                Mr. Anwar Arshi
              </h3>
              <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300 group-hover:w-24"></div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-sm">
              Empowering visionary founders through strategic capital, expert mentorship, and powerful networks.
            </p>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white mb-4 relative">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
            </h4>
            <ul className="space-y-3">
              {[
                { href: '/about', label: 'About' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/criteria', label: 'Criteria' },
                { href: '/insights', label: 'Insights' },
                { href: '/contact', label: 'Contact' }
              ].map((link, index) => (
                <li key={link.href} className="transform transition-all duration-200 hover:translate-x-1">
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-all duration-200 relative group inline-flex items-center"
                  >
                    <span className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact / Social */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white mb-4 relative">
              Get in Touch
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
            </h4>
            <ul className="space-y-4">
              <li className="group">
                <a 
                  href="mailto:invest@anwararshi.com" 
                  className="text-gray-400 hover:text-white transition-all duration-200 flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-900/50"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <span>invest@anwararshi.com</span>
                </a>
              </li>
              <li className="group">
                <a 
                  href="https://www.linkedin.com/in/anwararshi" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-all duration-200 flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-900/50"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm ">
            © {new Date().getFullYear()} Anwar Arshi. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 text-xs text-gray-600">
            <span>Built with precision</span>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <span>Designed for impact</span>
          </div>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-full blur-2xl"></div>
    </footer>
  );
}