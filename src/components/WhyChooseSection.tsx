"use client";
// import React from "react";

// const WhyChooseSection = () => {
//   const features = [
//     {
//       id: 1,
//       title: "Manufacturer Direct",
//       description: "Designed and produced in-house to maintain consistent quality and fair pricing.",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
//         </svg>
//       )
//     },
//     {
//       id: 2,
//       title: "Material Quality",
//       description: "Carefully selected materials focused on long-term comfort and durability.",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
//         </svg>
//       )
//     },
//     {
//       id: 3,
//       title: "Quality Checks",
//       description: "Products are tested to meet performance and usage standards.",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
//         </svg>
//       )
//     },
//     {
//       id: 4,
//       title: "Reliable Delivery",
//       description: "Structured logistics support for safe and timely delivery.",
//       icon: (
//         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 18.75V14.25m0 0a2.25 2.25 0 012.25-2.25h5.25a2.25 2.25 0 012.25 2.25m-9 0h9M3.375 9.75h17.25" />
//         </svg>
//       )
//     }
//   ];

//   return (
//     <section className="py-32 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
//       {/* Decorative Background Elements */}
//       <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-[#FF784D]/5 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-[#FF784D]/5 rounded-full blur-3xl"></div>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF784D]/3 rounded-full blur-3xl"></div>
      
//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="text-center mb-24">
//           <div className="inline-flex items-center gap-4 mb-8">
//             <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#FF784D] to-transparent"></div>
//             <span className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">Our Promise</span>
//             <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#FF784D] to-transparent"></div>
//           </div>
//           <h2 
//             className="text-5xl md:text-6xl lg:text-7xl mb-8 text-gray-900 tracking-tight leading-tight"
//             style={{ fontFamily: "'Libre Baskerville', serif" }}
//           >
//             Why Choose Our Products
//           </h2>
//           <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
//             Manufacturer direct quality meets trusted craftsmanship
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
//           {features.map((feature, index) => (
//             <div
//               key={feature.id}
//               className="group relative bg-white overflow-hidden transition-all duration-700 ease-out hover:-translate-y-3 hover:shadow-2xl"
//             >
//               {/* Background Pattern - Subtle */}
//               <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700">
//                 <div className="absolute inset-0" style={{ 
//                   backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
//                   backgroundSize: '12px 12px',
//                   color: '#FF784D'
//                 }}></div>
//               </div>

//               {/* Content Container */}
//               <div className="relative p-12">
//                 {/* Number Badge */}
//                 <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
//                   <span 
//                     className="text-7xl font-bold text-[#FF784D]"
//                     style={{ fontFamily: "'Libre Baskerville', serif" }}
//                   >
//                     0{feature.id}
//                   </span>
//                 </div>

//                 {/* Icon Container - Refined */}
//                 <div className="mb-8 relative">
//                   <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 relative overflow-hidden group-hover:scale-110 transition-all duration-500">
//                     {/* Icon */}
//                     <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
//                       {feature.icon}
//                     </div>
                    
//                     {/* Gradient Overlay on Hover */}
//                     <div className="absolute inset-0 bg-gradient-to-br from-[#FF784D] to-[#FF784D]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
//                     {/* White Icon on Hover */}
//                     <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
//                       {feature.icon}
//                     </div>
//                   </div>
                  
//                   {/* Decorative Ring */}
//                   <div className="absolute -inset-2 border-2 border-gray-200 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 pointer-events-none"></div>
//                 </div>

//                 {/* Content */}
//                 <h3 
//                   className="text-3xl lg:text-4xl mb-5 text-gray-900 leading-tight transform transition-all duration-500 group-hover:translate-x-2"
//                   style={{ fontFamily: "'Libre Baskerville', serif" }}
//                 >
//                   {feature.title}
//                 </h3>
                
//                 <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-8 transform transition-all duration-500 group-hover:translate-x-2">
//                   {feature.description}
//                 </p>

//                 {/* Read More Link */}
//                 <div className="flex items-center gap-3 text-gray-900 group-hover:text-[#FF784D] transition-colors duration-300">
//                   <span className="text-sm font-semibold tracking-wide">LEARN MORE</span>
//                   <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </div>
//               </div>

//               {/* Left Accent Bar */}
//               <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FF784D] via-[#FF784D]/70 to-[#FF784D] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top"></div>

//               {/* Bottom Border */}
//               <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent group-hover:via-[#FF784D] transition-colors duration-700"></div>
//             </div>
//           ))}
//         </div>

//         {/* Trust Badges Section */}
//         <div className="mt-24 max-w-5xl mx-auto">
//           <div className="bg-white p-12 shadow-sm border border-gray-100">
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//               <div className="group">
//                 <div className="text-5xl mb-3 text-gray-900 group-hover:text-[#FF784D] transition-colors duration-300" style={{ fontFamily: "'Libre Baskerville', serif" }}>
//                   15+
//                 </div>
//                 <p className="text-sm text-gray-600 font-medium tracking-wide uppercase">Years Experience</p>
//               </div>
//               <div className="group">
//                 <div className="text-5xl mb-3 text-gray-900 group-hover:text-[#FF784D] transition-colors duration-300" style={{ fontFamily: "'Libre Baskerville', serif" }}>
//                   50K+
//                 </div>
//                 <p className="text-sm text-gray-600 font-medium tracking-wide uppercase">Happy Customers</p>
//               </div>
//               <div className="group">
//                 <div className="text-5xl mb-3 text-gray-900 group-hover:text-[#FF784D] transition-colors duration-300" style={{ fontFamily: "'Libre Baskerville', serif" }}>
//                   100%
//                 </div>
//                 <p className="text-sm text-gray-600 font-medium tracking-wide uppercase">Quality Tested</p>
//               </div>
//               <div className="group">
//                 <div className="text-5xl mb-3 text-gray-900 group-hover:text-[#FF784D] transition-colors duration-300" style={{ fontFamily: "'Libre Baskerville', serif" }}>
//                   24/7
//                 </div>
//                 <p className="text-sm text-gray-600 font-medium tracking-wide uppercase">Support Available</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="text-center mt-24">
//           <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
//             Experience the difference of manufacturer direct mattresses and quality bedding products
//           </p>
//           <a 
//             href="/about" 
//             className="group inline-flex items-center gap-4 px-10 py-4 bg-gray-900 text-white font-semibold text-sm tracking-[0.15em] hover:bg-[#FF784D] transition-all duration-500"
//           >
//             <span>LEARN MORE ABOUT US</span>
//             <svg className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
//               <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </a>
//         </div>

//         {/* SEO Footer */}
//         <div className="text-center mt-20 max-w-4xl mx-auto">
//           <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>
//           <p className="text-sm text-gray-500 leading-relaxed">
//             As a trusted bedding brand and quality mattress manufacturer, we deliver durable mattresses with manufacturer direct pricing, ensuring exceptional value and reliability for every customer.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { WhyChooseSection };

import React, { useEffect, useRef, useState } from 'react';

const WhyChooseSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: 'Manufacturer Direct',
      description: 'Designed and produced in-house to maintain consistent quality and fair pricing.',
      number: '01',
      stat: 'Direct',
      detail: 'No middlemen'
    },
    {
      title: 'Material Quality',
      description: 'Carefully selected materials focused on long-term comfort and durability.',
      number: '02',
      stat: 'Premium',
      detail: 'Materials tested'
    },
    {
      title: 'Quality Checks',
      description: 'Products are tested to meet performance and usage standards.',
      number: '03',
      stat: 'Certified',
      detail: 'Quality assured'
    },
    {
      title: 'Reliable Delivery',
      description: 'Structured logistics support for safe and timely delivery.',
      number: '04',
      stat: 'On-Time',
      detail: 'Safe delivery'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-24 md:py-40 px-6 overflow-hidden"
    >
      {/* Minimal Background Elements */}
      <div className="absolute top-1/4 right-0 w-px h-96 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />
      <div className="absolute bottom-1/4 left-0 w-px h-96 bg-gradient-to-b from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        {/* Vertical Layout Design */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Side - Sticky Title Section */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              {/* Small Label */}
              <div className="mb-8">
                <div className="inline-block">
                  <span className="text-xs tracking-[0.4em] uppercase text-orange-500 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Excellence
                  </span>
                  <div className="w-20 h-px bg-orange-500 mt-2" />
                </div>
              </div>

              {/* Large Heading */}
              <h2 
                className="text-5xl md:text-6xl lg:text-7xl font-normal text-gray-900 mb-8 leading-[0.95]"
                style={{ fontFamily: "'Libre Baskerville', serif" }}
              >
                Why
                <span className="block mt-3 text-gray-400">Choose</span>
                <span className="block mt-3 text-orange-500">Our Products</span>
              </h2>

              {/* Description */}
              <p 
                className="text-lg text-gray-600 leading-relaxed mb-12 max-w-md"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Manufacturing excellence meets unwavering quality standards. Every product tells our story of dedication.
              </p>

              {/* Interactive Number Display */}
              <div className={`mt-12 flex gap-4 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <button
                className="group flex-1 md:flex-none px-10 py-5 bg-orange-500 text-white font-medium transition-all duration-300 hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-500/30 relative overflow-hidden"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  View All Products
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-black/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </button>

              <button
                className="group px-10 py-5 border-2 border-gray-900 text-gray-900 font-medium transition-all duration-300 hover:bg-gray-900 hover:text-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Get in Touch
              </button>
            </div>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="lg:col-span-3">
            <div className="space-y-0">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`group relative border-b border-gray-200 last:border-0 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                  style={{ transitionDelay: `${400 + idx * 200}ms` }}
                  onMouseEnter={() => setActiveIndex(idx)}
                >
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-50/0 via-orange-50/50 to-orange-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content Container */}
                  <div className="relative py-12 px-6 lg:px-12 cursor-pointer">
                    <div className="grid md:grid-cols-12 gap-6 items-center">
                      {/* Number */}
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-4">
                          <span 
                            className="text-5xl md:text-6xl font-normal text-gray-400 group-hover:text-orange-500 transition-all duration-500"
                            style={{ fontFamily: "'Libre Baskerville', serif" }}
                          >
                            {feature.number}
                          </span>
                          <div className="w-8 h-px bg-gray-300 group-hover:w-16 group-hover:bg-orange-500 transition-all duration-500" />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="md:col-span-7">
                        <h3 
                          className="text-2xl md:text-3xl font-normal text-gray-900 mb-3 group-hover:text-orange-500 transition-colors duration-300"
                          style={{ fontFamily: "'Libre Baskerville', serif" }}
                        >
                          {feature.title}
                        </h3>
                        <p 
                          className="text-gray-600 leading-relaxed"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {feature.description}
                        </p>
                      </div>

                      {/* Badge */}
                      <div className="md:col-span-3 flex md:justify-end">
                        <div className="inline-flex flex-col items-center">
                          <div className="w-20 h-8 bg-[#FF784D] rounded-full border-2 border-gray-200 group-hover:border-orange-500 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                            <div className="text-center">
                              <p className="text-xs font-bold text-white  transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                                {feature.stat}
                              </p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-400 mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            {feature.detail}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Arrow Indicator */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4 transition-all duration-300">
                      <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>            
          </div>
        </div>
      </div>

      {/* SEO Content */}
      <div className="sr-only">
        <h3>Manufacturer Direct Mattresses - Quality Mattress Manufacturer</h3>
        <p>Durable mattresses from a trusted bedding brand. Direct from manufacturer for quality assurance.</p>
      </div>
    </section>
  );
};

export default WhyChooseSection;

