// "use client";
// import React from "react";

// const CollectionSection = () => {
//   const categories = [
//     { 
//       name: "Mattresses", 
//       href: "/collections/mattresses",
//       description: "Premium comfort for restful sleep",
//       image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80"
//     },
//     { 
//       name: "Pillows", 
//       href: "/collections/pillows",
//       description: "Perfect support for every sleeper",
//       image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80"
//     },
//     { 
//       name: "Bedsheets", 
//       href: "/collections/bedsheets",
//       description: "Soft, breathable luxury fabrics",
//       image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80"
//     },
//     { 
//       name: "Mattress Protectors", 
//       href: "/collections/mattress-protectors",
//       description: "Protect your investment",
//       image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80"
//     },
//     { 
//       name: "Bath Towels", 
//       href: "/collections/bath-towels",
//       description: "Plush, absorbent essentials",
//       image: "https://images.unsplash.com/photo-1600resilient2945-4c67c3cf7bf5?w=800&q=80"
//     },
//   ];

//   return (
//     <section className="py-32 px-4 bg-white relative overflow-hidden">
//       {/* Subtle Background Elements */}
//       <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-[#FF784D]/3 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-[#FF784D]/3 rounded-full blur-3xl"></div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <div className="inline-flex items-center gap-4 mb-8">
//             <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#FF784D] to-transparent"></div>
//             <span className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">Curated for Comfort</span>
//             <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#FF784D] to-transparent"></div>
//           </div>
//           <h2 
//             className="text-5xl md:text-6xl lg:text-7xl mb-6 text-gray-900 tracking-tight leading-tight"
//             style={{ fontFamily: "'Libre Baskerville', serif" }}
//           >
//             Shop by Category
//           </h2>
//           <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-2xl mx-auto">
//             Explore a curated range of sleep essentials—from premium mattresses to luxury bedding—crafted to suit every style and comfort need
//           </p>
//         </div>

//         {/* Circular Categories Grid */}
//         <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 mb-16">
//           {categories.map((category, index) => (
//             <a
//               key={category.name}
//               href={category.href}
//               className="group flex flex-col items-center"
//             >
//               {/* Circular Image Container */}
//               <div className="relative mb-6">
//                 {/* Outer Ring - Appears on Hover */}
//                 <div className="absolute inset-0 rounded-full border-2 border-[#FF784D] opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-110 transition-all duration-500"></div>
                
//                 {/* Middle Ring - Static */}
//                 <div className="absolute -inset-2 rounded-full border border-gray-200 group-hover:border-[#FF784D]/30 transition-colors duration-500"></div>
                
//                 {/* Image Circle */}
//                 <div className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gray-100 shadow-lg group-hover:shadow-2xl transition-all duration-500">
//                   <img 
//                     src={category.image} 
//                     alt={category.name}
//                     className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-95"
//                   />
                  
//                   {/* Gradient Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
//                   {/* Hover Icon */}
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-50 group-hover:scale-100">
//                     <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
//                       <svg className="w-6 h-6 text-[#FF784D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
//                         <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                       </svg>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Pulsing Dot Indicator */}
//                 {/* <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FF784D] rounded-full border-4 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div> */}
//               </div>

//               {/* Category Name */}
//               <h3 
//                 className="text-xl lg:text-2xl mb-2 text-gray-900 text-center group-hover:text-[#FF784D] transition-colors duration-300"
//                 style={{ fontFamily: "'Libre Baskerville', serif" }}
//               >
//                 {category.name}
//               </h3>
              
//               {/* Description */}
//               <p className="text-sm text-gray-600 text-center max-w-[180px] leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
//                 {category.description}
//               </p>

//               {/* Bottom Line Indicator */}
//               <div className="w-0 group-hover:w-16 h-px bg-[#FF784D] mt-4 transition-all duration-500"></div>
//             </a>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-20">
//           <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//             Can't decide? Our team can help you find the perfect product for your needs
//           </p>
//           <a 
//             href="/products" 
//             className="group inline-flex items-center gap-4 px-10 py-4 bg-gray-900 text-white font-semibold text-sm tracking-[0.15em] hover:bg-[#FF784D] transition-all duration-500"
//           >
//             <span>VIEW ALL PRODUCTS</span>
//             <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </a>
//         </div>

//         {/* SEO Footer Text */}
//         <div className="text-center mt-20 max-w-4xl mx-auto">
//           <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>
//           <p className="text-sm text-gray-500 leading-relaxed">
//             From premium mattress collections and pillows to luxury bedsheets online, mattress protectors, and bath towels—discover our complete range of sleep products and home bedding products crafted for quality and comfort.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { CollectionSection };

"use client";
import React, { useState } from "react";

const CollectionSection = () => {
  const [activeId, setActiveId] = useState(null);
  
  const categories = [
    { 
      id: 1,
      name: "Mattresses", 
      href: "/collections/mattresses",
      description: "Premium comfort for restful sleep",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      number: "01"
    },
    { 
      id: 2,
      name: "Pillows", 
      href: "/collections/pillows",
      description: "Perfect support for every sleeper",
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=800&q=80",
      number: "02"
    },
    { 
      id: 3,
      name: "Bedsheets", 
      href: "/collections/bedsheets",
      description: "Soft, breathable luxury fabrics",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      number: "03"
    },
    { 
      id: 4,
      name: "Mattress Protectors", 
      href: "/collections/mattress-protectors",
      description: "Protect your investment",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      number: "04"
    }
  ];

  return (
    <section className="mt-5 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Organic Background SVG */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 right-10 w-[500px] h-[500px] text-[#FF784D]" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="0.3" opacity="0.7"/>
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.3" opacity="0.7"/>
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="0.3" opacity="0.7"/>
          <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="0.3" opacity="0.7"/>
        </svg>
        <svg className="absolute bottom-40 right-20 w-96 h-96 text-[#FF784D]" viewBox="0 0 200 200" fill="none">
          <path d="M50 100 L150 100 M100 50 L100 150 M70 70 L130 130 M130 70 L70 130" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
        </svg>
      </div>
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        
        {/* Artistic Header */}
        <div className="mb-5 max-w-6xl mx-auto">
          <div className="flex items-start gap-12 mb-12">
            <div className="flex flex-col gap-2 pt-6">
              <div className="w-px h-24 bg-gradient-to-b from-[#FF784D] to-transparent"></div>
              <div className="w-px h-10 bg-[#FF784D] opacity-30"></div>
            </div>
            <div className="flex-1">
              <p className="text-xs tracking-[0.3em] text-gray-400 mb-8 font-bold">EXPLORE BY CATEGORY</p>
              <h2 
                className="text-4xl md:text-6xl text-gray-900 leading-[0.9] mb-10"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Shop by<span className="text-[#FF784D] ml-5">Category</span>
              </h2>
              <div className="flex items-start gap-8">
                <div className="h-px w-20 bg-gray-300 mt-3"></div>
                <p className="text-base text-gray-500 leading-relaxed max-w-xl font-light">
                  Discover our curated collections—each crafted with precision, designed for comfort, and built to elevate your everyday moments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Split Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {/* Left Side - Large Featured */}
          <div className="lg:row-span-2">
            <a
              href={categories[0].href}
              className="group relative block h-full"
              onMouseEnter={() => setActiveId(categories[0].id)}
              onMouseLeave={() => setActiveId(null)}
            >
              <div className="relative h-full bg-white overflow-hidden">
                
                {/* Large Number Background */}
                <div 
                  className="absolute top-6 left-6 text-[10rem] font-bold text-gray-100 leading-none pointer-events-none transition-all duration-700 select-none z-10"
                  style={{ 
                    fontFamily: "'Libre Baskerville', serif",
                    opacity: activeId === categories[0].id ? 0.6 : 0.3,
                    color: activeId === categories[0].id ? '#FF784D' : '#f3f4f6'
                  }}
                >
                  {categories[0].number}
                </div>

                {/* Image */}
                <div className="absolute inset-0">
                  <img 
                    src={categories[0].image} 
                    alt={categories[0].name}
                    className="w-full h-full object-cover transition-all duration-[2000ms] ease-out"
                    style={{
                      transform: activeId === categories[0].id ? 'scale(1.1)' : 'scale(1)',
                      filter: activeId === categories[0].id ? 'brightness(0.95)' : 'brightness(1)'
                    }}
                  />
                  
                  {/* Enhanced Gradient Overlay - Bottom to Middle Fade */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-700"
                    style={{ opacity: activeId === categories[0].id ? 1 : 0.85 }}
                  ></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10 z-20">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="h-px bg-white transition-all duration-700"
                      style={{ width: activeId === categories[0].id ? '60px' : '30px' }}
                    ></div>
                    <div className="w-2 h-2 rounded-full bg-[#FF784D]"></div>
                  </div>
                  
                  <h3 
                    className="text-4xl lg:text-5xl text-white mb-3 leading-tight"
                    style={{ fontFamily: "'Libre Baskerville', serif" }}
                  >
                    {categories[0].name}
                  </h3>
                  
                  <p className="text-sm text-white/90 mb-6 leading-relaxed max-w-md font-light">
                    {categories[0].description}
                  </p>

                  <div className="flex items-center gap-3 text-white">
                    <span className="text-xs font-bold tracking-[0.2em]">EXPLORE</span>
                    <div 
                      className="w-10 h-10 border border-white/40 flex items-center justify-center transition-all duration-500"
                      style={{
                        transform: activeId === categories[0].id ? 'rotate(45deg)' : 'rotate(0deg)',
                        borderColor: activeId === categories[0].id ? '#FF784D' : 'rgba(255,255,255,0.4)',
                        backgroundColor: activeId === categories[0].id ? '#FF784D' : 'transparent'
                      }}
                    >
                      <svg 
                        className="w-5 h-5 transition-transform duration-500"
                        style={{
                          transform: activeId === categories[0].id ? 'rotate(-45deg)' : 'rotate(0deg)'
                        }}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Top Corner Accent */}
                <div 
                  className="absolute top-0 right-0 w-24 h-24 bg-[#FF784D] transition-all duration-700 origin-top-right"
                  style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                    transform: activeId === categories[0].id ? 'scale(1)' : 'scale(0)'
                  }}
                ></div>

                {/* Border Frame */}
                <div 
                  className="absolute inset-3 border transition-all duration-700 pointer-events-none"
                  style={{
                    borderColor: activeId === categories[0].id ? '#FF784D' : 'rgba(255,255,255,0.2)'
                  }}
                ></div>
              </div>
            </a>
          </div>

          {/* Right Side - Grid of Smaller Items */}
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            {categories.slice(1).map((category, index) => {
              const isActive = activeId === category.id;
              
              return (
                <a
                  key={category.id}
                  href={category.href}
                  className="group relative block"
                  onMouseEnter={() => setActiveId(category.id)}
                  onMouseLeave={() => setActiveId(null)}
                >
                  <div className="relative h-[260px] bg-white overflow-hidden">
                    
                    {/* Number Watermark */}
                    <div 
                      className="absolute top-3 right-3 text-[4.5rem] font-bold text-gray-100 leading-none pointer-events-none transition-all duration-700 select-none z-10"
                      style={{ 
                        fontFamily: "'Libre Baskerville', serif",
                        opacity: isActive ? 0.6 : 0.3,
                        color: isActive ? '#FF784D' : '#f3f4f6'
                      }}
                    >
                      {category.number}
                    </div>

                    {/* Image with Diagonal Clip */}
                    <div className="absolute inset-0">
                      <div 
                        className="absolute inset-0 transition-all duration-1000"
                        style={{
                          clipPath: isActive 
                            ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                            : 'polygon(0 5%, 100% 0, 100% 95%, 0 100%)'
                        }}
                      >
                        <img 
                          src={category.image} 
                          alt={category.name}
                          className="w-full h-full object-cover transition-all duration-[2000ms] ease-out"
                          style={{
                            transform: isActive ? 'scale(1.15)' : 'scale(1)',
                            filter: isActive ? 'brightness(0.9)' : 'brightness(1)'
                          }}
                        />
                        
                        {/* Enhanced Gradient Overlay - Bottom to Middle Fade */}
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-700"
                          style={{ opacity: isActive ? 1 : 0.8 }}
                        ></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6 z-10">
                      <div className="flex items-center gap-3">
                        <div 
                          className="h-px bg-white transition-all duration-700"
                          style={{ width: isActive ? '40px' : '20px' }}
                        ></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF784D]"></div>
                      </div>

                      <div>
                        <h3 
                          className="text-2xl lg:text-3xl text-white mb-2 leading-tight"
                          style={{ fontFamily: "'Libre Baskerville', serif" }}
                        >
                          {category.name}
                        </h3>
                        
                        <p className="text-xs text-white/90 mb-5 leading-relaxed font-light">
                          {category.description}
                        </p>

                        <div className="flex items-center gap-2 text-white">
                          <span className="text-[9px] font-bold tracking-[0.2em]">DISCOVER</span>
                          <div 
                            className="w-8 h-8 border border-white/40 flex items-center justify-center transition-all duration-500"
                            style={{
                              transform: isActive ? 'rotate(45deg)' : 'rotate(0deg)',
                              borderColor: isActive ? '#FF784D' : 'rgba(255,255,255,0.4)',
                              backgroundColor: isActive ? '#FF784D' : 'transparent'
                            }}
                          >
                            <svg 
                              className="w-4 h-4 transition-transform duration-500"
                              style={{
                                transform: isActive ? 'rotate(-45deg)' : 'rotate(0deg)'
                              }}
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              strokeWidth="2"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Vertical Accent Line */}
                    <div 
                      className="absolute left-0 top-0 w-1 h-full bg-[#FF784D] transition-all duration-700 origin-top"
                      style={{
                        transform: isActive ? 'scaleY(1)' : 'scaleY(0)'
                      }}
                    ></div>

                    {/* Border Frame */}
                    <div 
                      className="absolute inset-2 border transition-all duration-700 pointer-events-none"
                      style={{
                        borderColor: isActive ? '#FF784D' : 'rgba(255,255,255,0.2)'
                      }}
                    ></div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Artistic CTA */}
        <div className="text-center relative mt-32">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border border-[#FF784D] opacity-10 rounded-full"></div>
          
          <div className="relative inline-block">
            <a 
              href="/products" 
              className="group/cta relative inline-flex items-center gap-6 px-14 py-6 bg-gray-900 text-white text-xs font-bold tracking-[0.25em] transition-all duration-700 hover:bg-[#FF784D] overflow-hidden"
            >
              <span className="relative z-10">VIEW ALL PRODUCTS</span>
              <div className="relative z-10 w-8 h-8 border border-white/30 flex items-center justify-center transform group-hover/cta:rotate-90 transition-transform duration-700">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              
              <div className="absolute inset-0 bg-[#FF784D] transform -translate-x-full group-hover/cta:translate-x-0 transition-transform duration-700"></div>
            </a>
          </div>
        </div>

        {/* Minimal Footer */}
        <div className="mt-32 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-[#FF784D] opacity-30"></div>
            <svg className="w-4 h-4 text-[#FF784D]" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <div className="w-12 h-px bg-[#FF784D] opacity-30"></div>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed tracking-wide font-light">
            From premium mattress collections and pillows to luxury bedsheets online, mattress protectors, and bath towels—discover our complete range of sleep products and home bedding products crafted for quality and comfort.
          </p>
        </div>
      </div>
    </section>
  );
};

export { CollectionSection };