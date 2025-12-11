// import { Check, Clock, Box, Sparkles, Award } from 'lucide-react';

// export function WhyChooseSection() {
//   const benefits = [
//     {
//       icon: Check,
//       title: 'Premium Quality',
//       description: 'Crafted with the finest materials for lasting beauty and durability.'
//     },
//     {
//       icon: Clock,
//       title: 'Fast Delivery',
//       description: 'Get your furniture delivered within 5-7 business days across the country.'
//     },
//     {
//       icon: Box,
//       title: 'Easy Returns',
//       description: '30-day hassle-free return policy for your peace of mind.'
//     },
//     {
//       icon: Sparkles,
//       title: 'Timeless Design',
//       description: 'Modern pieces that blend seamlessly with any interior aesthetic.'
//     },
//     {
//       icon: Award,
//       title: 'Warranty Included',
//       description: 'All products come with a comprehensive 2-year warranty.'
//     }
//   ];

//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm">
//             <img
//               src="https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjUzNDA4OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//               alt="Minimalist bedroom"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Content */}
//           <div>
//             <h2 className="text-3xl sm:text-4xl mb-12 tracking-tight">
//               WHY CHOOSE US
//             </h2>
            
//             <div className="space-y-8">
//               {benefits.map((benefit, index) => {
//                 const Icon = benefit.icon;
//                 return (
//                   <div key={index} className="flex items-start space-x-4">
//                     <div className="flex-shrink-0 w-10 h-10 rounded-full bg-black flex items-center justify-center">
//                       <Icon className="w-5 h-5 text-white" />
//                     </div>
//                     <div>
//                       <h3 className="mb-2">{benefit.title}</h3>
//                       <p className="text-gray-600">{benefit.description}</p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react';

const WhyChooseSection = () => {
  const features = [
    {
      title: 'Premium Quality',
      description: 'Our furniture is crafted from the finest materials, ensuring durability and longevity.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop'
    },
    {
      title: 'Affordable Luxury',
      description: 'Experience top-notch quality without breaking the bank.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop'
    },
    {
      title: 'Wide Selection',
      description: 'We have styles to suit every taste.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=400&fit=crop'
    },
    {
      title: 'Expert Craftsman',
      description: 'Designed and constructed with attention to detail.',
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 bg-white">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
          Why Choose Us
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Comfortable seating areas, well-lit displays, and carefully arranged vignettes.
          </p>
          
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Knowledgeable staff should be on hand to provide personalized assistance, helping customers navigate options, understand materials, and make decisions that align with their tastes and needs.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden">
              <img 
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export {WhyChooseSection};