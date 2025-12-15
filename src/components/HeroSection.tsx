// // app/components/HeroSection.tsx
// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { Shield, Award, Truck, CheckCircle2 } from "lucide-react";

// export default function HeroSection() {
//   const trustFeatures = [
//     {
//       icon: Shield,
//       title: "Manufacturer Direct",
//       description: "No middlemen, best prices",
//     },
//     {
//       icon: Award,
//       title: "Quality Materials",
//       description: "Tested for durability",
//     },
//     {
//       icon: Truck,
//       title: "Reliable Delivery",
//       description: "Across multiple cities",
//     },
//   ];

//   return (
//     <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/30 to-white min-h-screen flex items-center">
//       {/* BACKGROUND BRAND TEXT */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2, delay: 0.3 }}
//         className="pointer-events-none absolute inset-0 flex items-center justify-center"
//       >
//         <span className="font-serif text-[18rem] lg:text-[22rem] font-bold text-black/[0.03] select-none">
//           YUNORA
//         </span>
//       </motion.div>

//       {/* PRODUCT IMAGE BEHIND TEXT */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, delay: 0.5 }}
//         className="absolute inset-0 flex items-center justify-center -z-10"
//       >
//         <Image
//           src="/images/premium_matress.png"
//           alt="Yunora comfort furniture"
//           width={900}
//           height={500}
//           className="opacity-90"
//           priority
//         />
//       </motion.div>

//       <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32 w-full">
//         <div className="text-center max-w-4xl mx-auto space-y-10">
//           {/* BADGE */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex justify-center"
//           >
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 border border-brand/20 text-brand rounded-full text-sm font-medium backdrop-blur-sm">
//               <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
//               Premium Quality Manufacturing
//             </div>
//           </motion.div>

//           {/* MAIN HEADING */}
//           <motion.h1
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="font-serif text-5xl md:text-6xl lg:text-7xl text-textPrimary leading-tight"
//           >
//             Mattress & Home
//             <br />
//             <span className="text-brand">Comfort Products</span>
//             <br />
//             Manufacturer
//           </motion.h1>

//           {/* SUBHEADING */}
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="text-lg md:text-xl text-textSecondary max-w-2xl mx-auto leading-relaxed"
//           >
//             Manufacturer-direct mattresses and bedding essentials designed for
//             everyday comfort and lasting quality.
//           </motion.p>

//           {/* CTA BUTTONS */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//             className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
//           >
//             <Button className="bg-brand text-white px-10 py-7 text-base rounded-full hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/30 transition-all duration-300 hover:-translate-y-1 font-medium group">
//               Explore Mattresses
//               <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
//                 →
//               </span>
//             </Button>
//             <Button
//               variant="outline"
//               className="border-2 border-brand/30 text-brand px-10 py-7 text-base rounded-full hover:bg-brand hover:text-white hover:border-brand transition-all duration-300 hover:-translate-y-1 hover:shadow-lg font-medium"
//             >
//               Get Price on WhatsApp
//             </Button>
//           </motion.div>

//           {/* TRUST INDICATORS - REDESIGNED */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.8 }}
//             className="pt-16"
//           >
//             <div className="inline-flex items-center gap-2 mb-8 text-sm text-textSecondary">
//               <CheckCircle2 className="w-4 h-4 text-brand" />
//               <span>Trusted by 15,000+ happy customers</span>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
//               {trustFeatures.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                   className="group"
//                 >
//                   <div className="bg-white/80 backdrop-blur-sm border border-borderLight rounded-2xl p-6 hover:border-brand/30 hover:shadow-lg transition-all duration-300">
//                     <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
//                       <feature.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
//                     </div>
//                     <h3 className="font-semibold text-textPrimary text-lg mb-2">
//                       {feature.title}
//                     </h3>
//                     <p className="text-sm text-textSecondary">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* FLOATING PRODUCT IMAGES WITH ANIMATION */}
//       <motion.div
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1, delay: 1 }}
//         className="pointer-events-none absolute left-8 top-1/3 hidden lg:block"
//       >
//         <motion.div>
//           <Image
//             src="/images/premium_sofa.png"
//             alt="Yunora sofa"
//             width={260}
//             height={160}
//             className="drop-shadow-2xl"
//           />
//         </motion.div>
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1, delay: 1.2 }}
//         className="pointer-events-none absolute right-8 top-1/4 hidden lg:block"
//       >
//         <motion.div>
//           <Image
//             src="/images/premium_sofa_yellow.png"
//             alt="Yunora furniture comfort"
//             width={260}
//             height={160}
//             className="drop-shadow-2xl"
//           />
//         </motion.div>
//       </motion.div>

//       {/* DECORATIVE GRADIENT ORBS */}
//       <div className="absolute top-20 right-20 w-72 h-72 bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>
//       <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-100 rounded-full blur-3xl pointer-events-none"></div>
//     </section>
//   );
// }


'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Background Chairs - Large hero chairs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Black chair (Serene) - left */}
        <div className="relative translate-x-[-30%]">
          <Image
            src="/images/premium_sofa.png" // assuming it's the dark/black chair
            alt="Serene chair"
            width={800}
            height={800}
            className="object-contain"
            priority
          />
          <p className="absolute bottom-10 left-10 text-xl font-light tracking-wider">Serene</p>
        </div>

        {/* Orange chair (Cozy) - right */}
        <div className="relative z-10 translate-x-[10%]">
          <Image
            src="/images/premium_sofa_yellow.png" // assuming it's the orange/yellow chair
            alt="Cozy chair"
            width={800}
            height={800}
            className="object-contain"
            priority
          />
          <p className="absolute bottom-10 right-10 text-xl font-light tracking-wider">Cozy</p>
          <p className="absolute bottom-10 right-[-150px] text-xl font-light tracking-wider">Effortless</p>
        </div>
      </div>

      {/* Large "härmor" text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-[28vw] font-bold text-white opacity-90 pointer-events-none select-none leading-none">
          härmor
        </h1>
      </div>

      {/* Top Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 py-6">
        <div className="text-4xl font-bold tracking-wider">theyfolk</div>
        <ul className="flex items-center space-x-8 text-sm">
          <li className="hover:text-orange-500 transition"><Link href="/">Home</Link></li>
          <li className="hover:text-orange-500 transition"><Link href="/shop">Shop</Link></li>
          <li className="hover:text-orange-500 transition"><Link href="/inspiration">Inspiration</Link></li>
          <li className="hover:text-orange-500 transition"><Link href="/about">About Us</Link></li>
          <li className="hover:text-orange-500 transition"><Link href="/support">Support</Link></li>
        </ul>
        <button className="hover:text-orange-500 transition">
          <ShoppingCart size={24} />
        </button>
      </nav>

      {/* Small chair thumbnails (01, 02, 03) */}
      <div className="absolute top-32 left-12 z-20 flex flex-col space-y-6">
        <div className="group cursor-pointer">
          <Image
            src="/premium_sofa.png" // replace with actual thumbnail if different
            alt="Chair 01"
            width={80}
            height={80}
            className="object-cover rounded-lg shadow-lg group-hover:scale-105 transition"
          />
          <span className="block text-xs text-center mt-2 opacity-70">01</span>
        </div>
        <div className="group cursor-pointer">
          <Image
            src="/premium_sofa_yellow.png" // replace with actual thumbnail if different
            alt="Chair 02"
            width={80}
            height={80}
            className="object-cover rounded-lg shadow-lg group-hover:scale-105 transition"
          />
          <span className="block text-xs text-center mt-2 opacity-70">02</span>
        </div>
        <div className="group cursor-pointer">
          <Image
            src="/premium_sofa.png" // replace with actual thumbnail if different
            alt="Chair 03"
            width={80}
            height={80}
            className="object-cover rounded-lg shadow-lg group-hover:scale-105 transition"
          />
          <span className="block text-xs text-center mt-2 opacity-70">03</span>
        </div>
      </div>

      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="text-center max-w-2xl px-8 pointer-events-auto">
          <p className="text-lg md:text-xl font-light leading-relaxed mb-8">
            Your journey to a calm, beautifully organized, and perfectly nested home begins here.
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-medium hover:bg-orange-500 hover:text-white transition flex items-center mx-auto gap-2">
            Get Your Furniture Now
            <span className="inline-block ml-2">→</span>
          </button>
        </div>
      </div>

      {/* Right side stats */}
      <div className="absolute top-48 right-12 z-20 text-right space-y-12">
        <div>
          <h2 className="text-6xl font-bold">15K+</h2>
          <p className="text-sm opacity-80">Loyal Customers</p>
        </div>
        <div>
          <h2 className="text-6xl font-bold">10+</h2>
          <p className="text-sm opacity-80">Years Journey</p>
        </div>
        <div>
          <h2 className="text-6xl font-bold">150+</h2>
          <p className="text-sm opacity-80">Collections Served</p>
        </div>
      </div>

      {/* Orange dots decoration (above "härmor") */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
        <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
        <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
        <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
      </div>
    </section>
  );
}