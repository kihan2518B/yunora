"use client"

import React, { useEffect, useRef, useState } from 'react';

const BrandStorySection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-5 px-6 overflow-hidden"
    >

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column - Enhanced Visual */}
          <div className={`lg:col-span-7 relative transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="relative">
              {/* Main Container with Parallax Effect */}
              <div className="relative aspect-[5/4] group">
                {/* Background Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-sm transform rotate-3 transition-transform duration-500 group-hover:rotate-6" />
                
                {/* Main Image Card */}
                <div className="relative h-full bg-gradient-to-br from-gray-100 via-gray-50 to-white rounded-sm overflow-hidden shadow-2xl transform -rotate-2 transition-all duration-500 group-hover:rotate-0 group-hover:shadow-3xl">
                  {/* Texture Overlay */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.02) 10px, rgba(0,0,0,.02) 20px)'
                    }} />
                  </div>

                  {/* Decorative Corner Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32">
                    <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-orange-500/30" />
                    <div className="absolute top-4 right-4 w-full h-full border-t border-r border-orange-500/20" />
                  </div>

                  {/* Content Area */}
                  <div className="relative h-full p-12 flex flex-col justify-between">
                    {/* Top Badge */}
                    <div className="flex justify-between items-start">
                      <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-lg">
                        <span className="text-xs font-semibold text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>
                          EST. 2009
                        </span>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                        <svg className="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                    </div>

                    {/* Center Content */}
                    <div className="text-center">
                      <div className="inline-block relative">
                        <div className="absolute inset-0 bg-orange-500/10 blur-2xl rounded-full" />
                        <svg className="relative w-20 h-20 text-gray-800 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-normal text-gray-900 mb-2" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                        Crafted Excellence
                      </h3>
                      <p className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Where precision meets comfort
                      </p>
                    </div>

                    {/* Bottom Stats */}
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
                        <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Products</p>
                        <p className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Libre Baskerville', serif" }}>500+</p>
                      </div>
                      <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-gray-200">
                        <p className="text-xs text-gray-500 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>Quality</p>
                        <p className="text-xl font-bold text-gray-900" style={{ fontFamily: "'Libre Baskerville', serif" }}>100%</p>
                      </div>
                    </div>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Elements */}
                {/* <div className={`absolute -top-8 -left-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-xl shadow-orange-500/30 animate-bounce" style={{ animationDuration: '3s' }}>
                    <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Libre Baskerville', serif" }}>15+</span>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-700 whitespace-nowrap bg-white px-2 py-1 rounded-full shadow-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Years
                  </div>
                </div> */}

                <div className={`absolute -bottom-20 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="bg-gray-900 text-white p-6 rounded-sm shadow-2xl border border-gray-800 max-w-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                      <span className="text-xs uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>Manufacturing</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Precision craftsmanship in every thread
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`lg:col-span-5 transition-all duration-1200 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="w-12 h-px bg-orange-500" />
                <div className="absolute top-0 left-0 w-3 h-px bg-orange-500 animate-pulse" />
              </div>
              <span className="text-sm tracking-[0.3em] uppercase text-orange-500 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our Story
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 leading-[1.1]"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Built on
              <span className="block mt-2">Manufacturing</span>
              <span className="relative inline-block mt-2">
                <span className="relative z-10">Experience</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-500/40 -skew-x-12" />
              </span>
            </h2>

            {/* Body Text */}
            <p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              With experience in manufacturing bedding and comfort products, we focus on practical design, reliable materials, and consistent quality.
            </p>

            {/* Feature Cards */}
            <div className="space-y-4 mb-12">
              {[
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  ),
                  label: 'Practical Design', 
                  desc: 'Function-first approach to comfort'
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  label: 'Reliable Materials', 
                  desc: 'Quality you can trust, built to last'
                },
                { 
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  label: 'Consistent Quality', 
                  desc: 'Excellence in every product we create'
                }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className={`group flex items-start gap-4 p-5 rounded-sm bg-gradient-to-r from-gray-50 to-transparent border-l-2 border-orange-500 hover:from-orange-50/50 transition-all duration-300 cursor-pointer`}
                  style={{ 
                    transitionDelay: `${600 + idx * 150}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                  }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1 text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.label}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="group relative px-8 py-4 bg-orange-500 text-white font-medium rounded-sm overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-105"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Our Craft
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>

              <button
                className="group px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-sm transition-all duration-300 hover:bg-gray-900 hover:text-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="flex items-center justify-center gap-2">
                  View Products
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Trust Bar */}
            {/* <div className="flex items-center gap-6 mt-12 pt-8 border-t border-gray-200">
              {[
                { value: 'ISO', label: 'Certified' },
                { value: '500K+', label: 'Products' },
                { value: '15+', label: 'Years' }
              ].map((stat, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <p className="text-3xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="sr-only">
        <h3>Bedding Products Manufacturer with Mattress Manufacturing Experience</h3>
        <p>Trusted mattress company with years of experience in bedding manufacturing</p>
      </div>
    </section>
  );
};

export default BrandStorySection;