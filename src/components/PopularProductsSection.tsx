"use client";
import React, { useState } from "react";

const PopularProductsSection = () => {
  const [activeId, setActiveId] = useState(null);
  
  const products = [
    {
      id: 1,
      name: "Cloud Memory Foam Mattress",
      descriptor: "Pressure-relieving foam with cooling gel technology",
      price: "₹24,999",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      tag: "BESTSELLER",
      number: "01"
    },
    {
      id: 2,
      name: "Luxury Down Pillow",
      descriptor: "Premium goose down with hypoallergenic fill",
      price: "₹3,499",
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
      tag: "TOP RATED",
      number: "02"
    },
    {
      id: 3,
      name: "Egyptian Cotton Bedsheet Set",
      descriptor: "600-thread count sateen weave for ultimate softness",
      price: "₹5,999",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      number: "03"
    },
    {
      id: 4,
      name: "Orthopedic Spine Support Mattress",
      descriptor: "Medically designed for back pain relief",
      price: "₹32,999",
      image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=800&q=80",
      tag: "POPULAR",
      number: "04"
    },
    {
      id: 5,
      name: "Premium Bamboo Pillow",
      descriptor: "Eco-friendly bamboo fiber with adjustable loft",
      price: "₹2,799",
      image: "https://images.unsplash.com/photo-1541188495357-ad2dc89487f4?w=800&q=80",
      number: "05"
    },
    {
      id: 6,
      name: "Waterproof Mattress Protector",
      descriptor: "Breathable membrane with dust mite protection",
      price: "₹1,899",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      number: "06"
    }
  ];

  return (
    <section className="bg-white relative">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <svg className="absolute top-20 right-20 w-96 h-96 text-[#FF784D]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        </svg>
        <svg className="absolute bottom-40 left-20 w-64 h-64 text-[#FF784D]" viewBox="0 0 200 200" fill="none">
          <path d="M50 100 L150 100 M100 50 L100 150" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        </svg>
      </div>

      <div className="mx-auto relative z-10">
        
        {/* Artistic Header */}
        <div className="max-w-5xl">
          <div className="flex items-start gap-12 mb-12">
            <div className="flex flex-col gap-2 pt-4">
              <div className="w-px h-20 bg-gradient-to-b from-[#FF784D] to-transparent"></div>
              <div className="w-px h-8 bg-[#FF784D] opacity-30"></div>
            </div>
            <div>
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-6 font-bold">HANDPICKED FOR YOU</p>
              <h2 
                className="text-6xl md:text-7xl text-gray-900 leading-[0.9] mb-8"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Popular<span className="text-[#FF784D] ml-5">Products</span>
              </h2>
              <div className="flex items-center gap-8">
                <div className="h-px w-24 bg-gray-300"></div>
                <p className="text-base text-gray-500 leading-relaxed max-w-md font-light">
                  Each piece tells a story of craftsmanship, comfort, and timeless design
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal Grid Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {products.map((product, index) => {
              const isActive = activeId === product.id;
              
              return (
                <div
                  key={product.id}
                  className="group relative"
                  onMouseEnter={() => setActiveId(product.id)}
                  onMouseLeave={() => setActiveId(null)}
                  style={{
                    transform: `translateY(${index % 2 === 0 ? '0' : '30px'})`,
                    transition: 'transform 0.7s ease'
                  }}
                >
                  {/* Floating Container */}
                  <div className="relative">
                    
                    {/* Main Card */}
                    <div className="relative bg-white overflow-hidden group-hover:shadow-2xl transition-all duration-700">
                      
                      {/* Angled Top Corner */}
                      <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                        <div 
                          className="absolute top-0 right-0 w-full h-full bg-[#FF784D] transform origin-top-right transition-all duration-700"
                          style={{
                            transform: isActive ? 'rotate(0deg) scale(1)' : 'rotate(45deg) scale(0)',
                          }}
                        ></div>
                      </div>

                      {/* Image with Clip Path */}
                      <div className="relative h-[350px] overflow-hidden">
                        <div 
                          className="absolute inset-0 transition-all duration-1000"
                          style={{
                            clipPath: isActive 
                              ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                              : 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)'
                          }}
                        >
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-[2000ms] ease-out"
                            style={{
                              transform: isActive ? 'scale(1.15) rotate(2deg)' : 'scale(1)'
                            }}
                          />
                          
                          {/* Gradient Mesh */}
                          <div 
                            className="absolute inset-0 mix-blend-multiply transition-opacity duration-700"
                            style={{
                              background: isActive 
                                ? 'radial-gradient(circle at 60% 40%, transparent 30%, rgba(255,120,77,0.15) 100%)'
                                : 'transparent'
                            }}
                          ></div>
                        </div>

                        {/* Floating Tag */}
                        {product.tag && (
                          <div className="absolute top-8 left-8 z-10">
                            <div 
                              className="relative px-6 py-3 backdrop-blur-md bg-white/80 transform -rotate-2 transition-all duration-500"
                              style={{
                                boxShadow: isActive ? '0 20px 40px rgba(0,0,0,0.15)' : '0 10px 25px rgba(0,0,0,0.1)',
                                transform: isActive ? 'rotate(-2deg) scale(1.05)' : 'rotate(-2deg) scale(1)'
                              }}
                            >
                              <span className="text-[10px] font-black tracking-[0.2em] text-gray-900">
                                {product.tag}
                              </span>
                              <div className="absolute -bottom-1 left-4 w-2 h-2 bg-[#FF784D] rounded-full"></div>
                            </div>
                          </div>
                        )}

                        {/* Vertical Price Tag */}
                        <div className="absolute bottom-8 right-0 bg-gray-900 px-6 py-5 transform origin-right transition-all duration-700"
                          style={{
                            transform: isActive ? 'translateX(0) rotate(0deg)' : 'translateX(20px) rotate(-2deg)'
                          }}
                        >
                          <div className="flex flex-col items-end">
                            <span className="text-[8px] tracking-[0.2em] text-gray-400 mb-2 font-bold">FROM</span>
                            <span 
                              className="text-2xl font-bold text-white"
                              style={{ fontFamily: "'Libre Baskerville', serif" }}
                            >
                              {product.price}
                            </span>
                          </div>
                          <div 
                            className="absolute top-0 left-0 w-1 h-full bg-[#FF784D] transition-all duration-700 origin-top"
                            style={{
                              transform: isActive ? 'scaleY(1)' : 'scaleY(0.3)'
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="relative p-6 bg-white">
                        
                        {/* Decorative Line */}
                        <div className="flex items-center gap-4">
                          <div 
                            className="h-px bg-[#FF784D] transition-all duration-700"
                            style={{ width: isActive ? '60px' : '30px' }}
                          ></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-[#FF784D]"></div>
                        </div>

                        <h3 
                          className="text-2xl lg:text-3xl text-gray-900 leading-tight transition-colors duration-500"
                          style={{ 
                            fontFamily: "'Libre Baskerville', serif",
                            color: isActive ? '#FF784D' : '#111827'
                          }}
                        >
                          {product.name}
                        </h3>
                        
                        <p className="text-sm text-gray-500 leading-relaxed mb-2 font-light min-h-[40px]">
                          {product.descriptor}
                        </p>

                        {/* Angular CTA */}
                        <div className="flex items-center justify-between">
                          <a 
                            href={`/products/${product.id}`}
                            className="group/link flex items-center gap-3"
                          >
                            <span className="text-xs font-bold tracking-[0.15em] text-gray-900 group-hover/link:text-[#FF784D] transition-colors duration-300">
                              DISCOVER
                            </span>
                            <div className="relative w-10 h-10 border border-gray-900 group-hover/link:border-[#FF784D] flex items-center justify-center transition-all duration-300 transform group-hover/link:rotate-45">
                              <svg 
                                className="w-4 h-4 text-gray-900 group-hover/link:text-[#FF784D] transition-all duration-300 transform group-hover/link:-rotate-45" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24" 
                                strokeWidth="2"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </div>
                          </a>

                          <button 
                            className="w-10 h-10 border border-gray-200 hover:border-[#FF784D] hover:bg-[#FF784D] flex items-center justify-center transition-all duration-300 group/fav"
                            aria-label="Add to favorites"
                          >
                            <svg className="w-5 h-5 text-gray-400 group-hover/fav:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Bottom Stripe */}
                      <div 
                        className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF784D] via-[#ff9d7d] to-[#FF784D] transition-all duration-700 origin-left"
                        style={{
                          transform: isActive ? 'scaleX(1)' : 'scaleX(0)'
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Artistic CTA */}
        <div className="mt-32 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#FF784D] opacity-10 rounded-full"></div>
          
          <a 
            href="/products" 
            className="relative inline-flex items-center gap-6 px-14 py-6 bg-gray-900 text-white text-xs font-bold tracking-[0.25em] transition-all duration-700 hover:bg-[#FF784D] group/cta overflow-hidden"
          >
            <span className="relative z-10">VIEW ENTIRE COLLECTION</span>
            <div className="relative z-10 w-8 h-8 border border-white/30 flex items-center justify-center transform group-hover/cta:rotate-90 transition-transform duration-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
            
            <div className="absolute inset-0 bg-[#FF784D] transform -translate-x-full group-hover/cta:translate-x-0 transition-transform duration-700"></div>
          </a>
        </div>

        {/* Minimal Footer */}
        {/* <div className="mt-32 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#FF784D] opacity-30"></div>
            <svg className="w-4 h-4 text-[#FF784D]" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <div className="w-12 h-px bg-[#FF784D] opacity-30"></div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed tracking-wide font-light">
            Explore our best selling mattresses and popular bedding products, featuring comfortable mattresses and quality bedding products trusted by thousands of satisfied customers.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export { PopularProductsSection }