"use client"

import React, { useState, useEffect } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin,
  MessageCircle,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const Footer = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollPosition((prev) => prev - 1);
    }, 30);
    
    return () => clearInterval(interval);
  }, []);

  const scrollingWords = [
    "COMFORT", "PREMIUM", "RELAXING", "LUXURY", "QUALITY", 
    "ELEGANT", "RESTFUL", "SOPHISTICATED", "CRAFTED", "TIMELESS",
    "COMFORT", "PREMIUM", "RELAXING", "LUXURY", "QUALITY"
  ];

  const productCategories = [
    { name: "Spring Mattresses", href: "#" },
    { name: "Memory Foam Mattresses", href: "#" },
    { name: "Orthopedic Mattresses", href: "#" },
    { name: "Latex Mattresses", href: "#" },
    { name: "Coir Mattresses", href: "#" },
    { name: "Pillows & Cushions", href: "#" }
  ];

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Blog & Guides", href: "#" },
    { name: "Buying Guide", href: "#" },
    { name: "Maintenance Tips", href: "#" },
    { name: "Testimonials", href: "#" },
    { name: "Contact Us", href: "#" }
  ];

  const policies = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Shipping Policy", href: "#" },
    { name: "Return & Refund", href: "#" },
    { name: "Warranty Information", href: "#" }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2a4a6f] to-[#1e3a5f] text-white overflow-hidden">
      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Top Section - CTA */}
          <div className="mb-16 pb-16 border-b border-white/10">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-serif mb-4 leading-tight" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  Let's work <span className="text-[#FF784D]">together</span> and build something great.
                </h2>
                <p className="text-lg text-gray-300" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Experience premium comfort and quality craftsmanship. Transform your space today.
                </p>
              </div>
              <button className="group flex items-center gap-3 px-8 py-4 bg-[#FF784D] hover:bg-white text-white hover:text-[#1e3a5f] rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap">
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Contact Section */}
            <div>
              <h3 className="text-[#FF784D] text-sm font-semibold tracking-wider uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <MapPin className="w-5 h-5 text-[#FF784D] mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors">
                    23, Street Name, City, Country
                  </p>
                </div>
                <a href="mailto:contact@company.com" className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-[#FF784D] flex-shrink-0" />
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    contact@company.com
                  </span>
                </a>
                <a href="tel:+919426020398" className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-[#FF784D] flex-shrink-0" />
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    +91 9426020398
                  </span>
                </a>
                <a href="tel:+919723820398" className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-[#FF784D] flex-shrink-0" />
                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    +91 9723820398
                  </span>
                </a>
                <a 
                  href="https://wa.me/919426020398" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Product Categories */}
            <div>
              <h3 className="text-[#FF784D] text-sm font-semibold tracking-wider uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Products
              </h3>
              <ul className="space-y-3">
                {productCategories.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="group flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-[#FF784D] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#FF784D] text-sm font-semibold tracking-wider uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="group flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-[#FF784D] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us & Policies */}
            <div>
              <h3 className="text-[#FF784D] text-sm font-semibold tracking-wider uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Follow Us
              </h3>
              <div className="flex items-center gap-3 mb-8">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 hover:bg-[#FF784D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 hover:bg-[#FF784D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 hover:bg-[#FF784D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 hover:bg-[#FF784D] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>

              <h3 className="text-[#FF784D] text-sm font-semibold tracking-wider uppercase mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                Legal
              </h3>
              <ul className="space-y-3">
                {policies.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="group flex items-center gap-2 text-gray-300 text-sm hover:text-white transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 text-[#FF784D] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Section with Scrolling Text */}
      <div className="relative py-20 overflow-hidden">
        {/* 3D Chair Image - Left Corner */}
        <div className="absolute left-8 bottom-0 w-56 h-56 md:w-80 md:h-80 z-30">
          <img 
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" 
            alt="Premium Chair"
            className="w-full h-full object-contain drop-shadow-2xl"
            style={{ 
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
              transform: 'perspective(1000px) rotateY(-8deg)'
            }}
          />
        </div>
        
        {/* 3D Chair Image - Right Corner */}
        <div className="absolute right-8 bottom-0 w-56 h-56 md:w-80 md:h-80 z-30">
          <img 
            src="https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80" 
            alt="Luxury Armchair"
            className="w-full h-full object-contain drop-shadow-2xl"
            style={{ 
              filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))',
              transform: 'perspective(1000px) rotateY(8deg)'
            }}
          />
        </div>

        {/* Infinite Scrolling Text */}
        <div className="relative  z-10 flex items-center justify-center h-full">
          <div 
            className="flex gap-20 text-[120px] md:text-[160px] lg:text-[200px] font-serif whitespace-nowrap"
            style={{ 
              fontFamily: 'Libre Baskerville, serif',
              transform: `translateX(${scrollPosition}px)`,
              WebkitTextStroke: '2px #FF784D',
              color: 'transparent',
              fontWeight: '700',
              letterSpacing: '0.05em'
            }}
          >
            {[...scrollingWords, ...scrollingWords].map((word, index) => (
              <span 
                key={index} 
                className="inline-block"
                style={{
                  textShadow: '4px 4px 0px rgba(255, 120, 77, 0.1)'
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#1a2f4a] py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p style={{ fontFamily: 'Inter, sans-serif' }}>
              © 2024 Premium Mattress Manufacturing. All rights reserved.
            </p>
            <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              Crafted with care for your comfort | Mattress Manufacturer Contact | Bedding Company Information
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF784D]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default Footer;