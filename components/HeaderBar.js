"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeaderBar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center transform rotate-45">
                <div className="w-4 h-4 bg-white rounded-sm transform -rotate-45"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">Global Tech</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="flex items-center gap-1 text-gray-700 hover:text-gray-900 font-medium transition-colors"
              >
                Products
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <a href="#pricing" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </a>
            <a href="#partners" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Partners
            </a>
            <a href="#blogs" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Blogs
            </a>
            <a href="#resources" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Resources
            </a>
            <a href="#trial" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Free Trial
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
              Start Free Trial
            </button>
            <button className="px-6 py-2 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}