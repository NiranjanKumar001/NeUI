import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              NEUI
            </Link>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-white">
                About
              </Link>
              <Link to="/magic" className="text-gray-300 hover:text-white transition-colors">
                Magic
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About NEUI
          </h1>
          
          <div className="glass rounded-2xl p-8 mb-8">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              NEUI is a comprehensive collection of modern, interactive UI components designed to help developers create stunning user interfaces with ease. Our library focuses on performance, accessibility, and beautiful design that works across all devices and platforms.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Built with React and modern web technologies, NEUI provides ready-to-use components that can be easily integrated into any project. Each component is carefully crafted with attention to detail and follows industry best practices for maintainability and scalability.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              Whether you're building a simple landing page or a complex web application, NEUI has the components you need to create exceptional user experiences that your users will love.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Modern Design</h3>
              <p className="text-gray-300">
                Clean, contemporary designs that follow the latest UI/UX trends and best practices
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Mobile First</h3>
              <p className="text-gray-300">
                Responsive components that work beautifully on all devices and screen sizes
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Production Ready</h3>
              <p className="text-gray-300">
                Thoroughly tested components ready for use in production applications
              </p>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Developer Love</h3>
              <p className="text-gray-300">
                Built by developers, for developers with excellent documentation and support
              </p>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="glass rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">50+</span>
                </div>
                <h3 className="text-white font-bold mb-2">Components</h3>
                <p className="text-gray-400 text-sm">Ready-to-use components</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">100%</span>
                </div>
                <h3 className="text-white font-bold mb-2">Responsive</h3>
                <p className="text-gray-400 text-sm">Works on all devices</p>
              </div>
              
              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">A11Y</span>
                </div>
                <h3 className="text-white font-bold mb-2">Accessible</h3>
                <p className="text-gray-400 text-sm">Built with accessibility in mind</p>
              </div>

              <div>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">MIT</span>
                </div>
                <h3 className="text-white font-bold mb-2">Open Source</h3>
                <p className="text-gray-400 text-sm">Free to use and modify</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/magic"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 shadow-2xl"
            >
              Explore Components ✨
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 NEUI. Built with ❤️ for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;