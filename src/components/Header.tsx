"use client"
import { ShoppingCart, User, Menu } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl tracking-tight">Yunora.</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-black hover:opacity-60 transition-opacity">
              HOME
            </a>
            <a href="#" className="text-black hover:opacity-60 transition-opacity">
              SHOP
            </a>
            <a href="#" className="text-black hover:opacity-60 transition-opacity">
              LIVING
            </a>
            <a href="#" className="text-black hover:opacity-60 transition-opacity">
              CONTACT
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="hover:opacity-60 transition-opacity" aria-label="Shopping Cart">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="hover:opacity-60 transition-opacity" aria-label="User Profile">
              <User className="w-5 h-5" />
            </button>
            <button 
              className="md:hidden hover:opacity-60 transition-opacity"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a href="#" className="block text-black hover:opacity-60 transition-opacity">
              HOME
            </a>
            <a href="#" className="block text-black hover:opacity-60 transition-opacity">
              SHOP
            </a>
            <a href="#" className="block text-black hover:opacity-60 transition-opacity">
              LIVING
            </a>
            <a href="#" className="block text-black hover:opacity-60 transition-opacity">
              CONTACT
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
