"use client";
import React, { useState } from "react";

const GeoDeliverySection = () => {
  const [userCity] = useState("Ahmedabad"); // This would be dynamically detected
  
  const cities = [
    { name: "Mumbai", state: "Maharashtra", deliveryTime: "2-3 days" },
    { name: "Delhi", state: "Delhi NCR", deliveryTime: "2-3 days" },
    { name: "Bangalore", state: "Karnataka", deliveryTime: "3-4 days" },
    { name: "Ahmedabad", state: "Gujarat", deliveryTime: "1-2 days", featured: true },
    { name: "Pune", state: "Maharashtra", deliveryTime: "2-3 days" },
    { name: "Chennai", state: "Tamil Nadu", deliveryTime: "3-4 days" },
    { name: "Hyderabad", state: "Telangana", deliveryTime: "3-4 days" },
    { name: "Kolkata", state: "West Bengal", deliveryTime: "3-4 days" },
    { name: "Surat", state: "Gujarat", deliveryTime: "1-2 days" },
    { name: "Jaipur", state: "Rajasthan", deliveryTime: "2-3 days" },
    { name: "Lucknow", state: "Uttar Pradesh", deliveryTime: "3-4 days" },
    { name: "Indore", state: "Madhya Pradesh", deliveryTime: "2-3 days" }
  ];

  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 18.75V14.25m0 0a2.25 2.25 0 012.25-2.25h5.25a2.25 2.25 0 012.25 2.25m-9 0h9" />
        </svg>
      ),
      title: "Fast Delivery",
      description: "Express shipping across major cities"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
        </svg>
      ),
      title: "Safe Packaging",
      description: "Protected handling throughout transit"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      title: "Local Support",
      description: "Regional customer service teams"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Time Slots",
      description: "Flexible delivery scheduling"
    }
  ];

  return (
    <section className="py-32 px-4 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-[#FF784D]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-[#FF784D]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#FF784D] to-transparent"></div>
            <span className="text-xs font-semibold tracking-[0.3em] text-gray-500 uppercase">Nationwide Coverage</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#FF784D] to-transparent"></div>
          </div>
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl mb-8 text-gray-900 tracking-tight leading-tight"
            style={{ fontFamily: "'Libre Baskerville', serif" }}
          >
            Delivery Available in Your Area
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto mb-6">
            Our mattresses and home comfort products are delivered across multiple cities with reliable logistics support
          </p>
          
          {/* User Location Highlight */}
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FF784D]/10 via-[#FF784D]/5 to-[#FF784D]/10 border border-[#FF784D]/20 mt-4">
            <svg className="w-6 h-6 text-[#FF784D]" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span className="text-lg font-semibold text-gray-900">
              Fast delivery available in <span className="text-[#FF784D]">{userCity}</span>
            </span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Cities Grid */}
          <div>
            <h3 
              className="text-3xl mb-8 text-gray-900"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Cities We Serve
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {cities.map((city, index) => (
                <a
                  key={index}
                  href={`/delivery/${city.name.toLowerCase()}`}
                  className={`group relative p-6 bg-white border transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                    city.featured 
                      ? 'border-[#FF784D] bg-[#FF784D]/5' 
                      : 'border-gray-200 hover:border-[#FF784D]/50'
                  }`}
                >
                  {city.featured && (
                    <div className="absolute top-3 right-3">
                      <div className="w-2 h-2 bg-[#FF784D] rounded-full animate-pulse"></div>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#FF784D] transition-colors duration-300">
                        {city.name}
                      </h4>
                      <p className="text-sm text-gray-600">{city.state}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 text-[#FF784D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">{city.deliveryTime}</span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#FF784D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </a>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <a href="/delivery-areas" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#FF784D] transition-colors duration-300">
                <span>View All Delivery Locations</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Delivery Features */}
          <div>
            <h3 
              className="text-3xl mb-8 text-gray-900"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
              Delivery Advantages
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group flex gap-6 p-6 bg-gray-50 hover:bg-white border border-transparent hover:border-gray-200 transition-all duration-500 hover:shadow-lg hover:-translate-x-2"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-white group-hover:bg-[#FF784D] text-gray-900 group-hover:text-white flex items-center justify-center shadow-sm transition-all duration-500">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#FF784D] transition-colors duration-300" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                      {feature.title}
                    </h4>
                    <p className="text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Box */}
            <div className="mt-8 p-8 bg-gray-900 text-white">
              <h4 className="text-2xl mb-4" style={{ fontFamily: "'Libre Baskerville', serif" }}>
                Need Delivery Information?
              </h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Contact our logistics team for detailed delivery schedules and area coverage.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 py-3 bg-[#FF784D] text-white font-semibold text-sm tracking-wide hover:bg-[#FF784D]/90 transition-all duration-300"
              >
                <span>GET IN TOUCH</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* SEO Footer */}
        <div className="text-center mt-20 max-w-4xl mx-auto">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mx-auto mb-8"></div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Looking for mattress delivery in your city or bedding products delivery near you? As a local mattress manufacturer and trusted mattress supplier near me, we provide reliable delivery services across India.
          </p>
        </div>
      </div>
    </section>
  );
};

export { GeoDeliverySection };