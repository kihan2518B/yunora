"use client"

import React, { useState } from "react";
import { ArrowRight, BookOpen, Clock, TrendingUp } from "lucide-react";

const BlogSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogPosts = [
    {
      id: 1,
      category: "Buying Guide",
      title: "How to Choose the Right Mattress for Daily Use",
      excerpt: "Discover the essential factors that make a mattress perfect for everyday comfort and long-term durability.",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
      trending: true
    },
    {
      id: 2,
      category: "Expert Tips",
      title: "Mattress Buying Guide for Indian Homes",
      excerpt: "Navigate climate considerations, space constraints, and cultural preferences for Indian households.",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80",
      trending: false
    },
    {
      id: 3,
      category: "Maintenance",
      title: "How to Maintain Mattresses and Bedding Products",
      excerpt: "Extend the life of your investment with proper care techniques and cleaning schedules.",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
      trending: false
    },
    {
      id: 4,
      category: "Sleep Science",
      title: "Choosing the Right Mattress Based on Sleep Needs",
      excerpt: "Match your unique sleep patterns, body type, and health requirements with the ideal mattress.",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80",
      trending: true
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #FF784D 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header with Floating Accent */}
        <div className="relative mb-20">
          <div className="absolute -top-6 -left-4 w-32 h-32 bg-gradient-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-40"></div>
          <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <div className="w-12 h-px bg-orange-500" />
                <div className="absolute top-0 left-0 w-3 h-px bg-orange-500 animate-pulse" />
              </div>
              <span className="text-sm tracking-[0.3em] uppercase text-orange-500 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                Knowledge Center
              </span>
            </div>

            {/* Main Heading */}
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 mb-6 leading-[1.1]"
              style={{ fontFamily: "'Libre Baskerville', serif" }}
            >
             Buying Guides & Comfort
              <span className="relative ml-5 inline-block mt-2">
                <span className="relative z-10">Insights</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-500/40 -skew-x-12" />
              </span>
            </h2>

            {/* Body Text */}
            <p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
                Expert knowledge to help you make informed decisions about sleep comfort, mattress selection, and long-term care.
            </p>          
        </div>

        {/* Blog Grid with Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Featured Large Card */}
          <div 
            className="lg:col-span-7 group cursor-pointer"
            onMouseEnter={() => setHoveredCard(blogPosts[0].id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-[540px] rounded-3xl overflow-hidden bg-gray-900 shadow-2xl">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              
              {/* Trending Badge */}
              {blogPosts[0].trending && (
                <div className="absolute top-6 right-6 flex items-center gap-2 bg-[#FF784D] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                  <TrendingUp className="w-4 h-4" />
                  Trending
                </div>
              )}
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-4 flex items-center gap-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </div>
                </div>
                
                <h3 className="text-3xl font-serif text-white mb-3 leading-tight" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-gray-200 text-base mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-white font-medium group-hover:gap-4 transition-all duration-300">
                  Read Article
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {blogPosts.slice(1, 3).map((post, index) => (
              <div 
                key={post.id}
                className="group cursor-pointer"
                onMouseEnter={() => setHoveredCard(post.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-[250px] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="flex h-full">
                    {/* Image Side */}
                    <div className="w-2/5 relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                    </div>
                    
                    {/* Content Side */}
                    <div className="w-3/5 p-6 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2.5 py-1 bg-orange-50 text-[#FF784D] text-xs font-medium rounded-lg">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-serif text-gray-900 mb-2 leading-snug group-hover:text-[#FF784D] transition-colors duration-300" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                          {post.title}
                        </h3>
                        
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-[#FF784D] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-[#FF784D] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Full Width Card */}
          <div 
            className="lg:col-span-12 group cursor-pointer"
            onMouseEnter={() => setHoveredCard(blogPosts[3].id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-orange-50/30 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Side */}
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <img 
                    src={blogPosts[3].image} 
                    alt={blogPosts[3].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-50/80"></div>
                  
                  {blogPosts[3].trending && (
                    <div className="absolute top-4 left-4 flex items-center gap-2 bg-[#FF784D] text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                      <TrendingUp className="w-3.5 h-3.5" />
                      Trending
                    </div>
                  )}
                </div>
                
                {/* Content Side */}
                <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1.5 bg-white text-[#FF784D] text-sm font-medium rounded-lg shadow-sm">
                      {blogPosts[3].category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      {blogPosts[3].readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-4 leading-tight group-hover:text-[#FF784D] transition-colors duration-300" style={{ fontFamily: 'Libre Baskerville, serif' }}>
                    {blogPosts[3].title}
                  </h3>
                  
                  <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {blogPosts[3].excerpt}
                  </p>
                  
                  <div className="flex items-center gap-3 text-[#FF784D] font-medium group-hover:gap-5 transition-all duration-300">
                    <span className="text-lg">Explore Guide</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-[#FF784D] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#FF784D]/10 to-transparent rounded-full blur-3xl"></div>
    </section>
  );
};

export { BlogSection };