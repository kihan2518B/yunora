// export function InspirationSection() {
//   const images = [
//     {
//       url: 'https://images.unsplash.com/photo-1703867110051-a0eb1e77b967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMHJvb218ZW58MXx8fHwxNzY1MzEyODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       className: 'col-span-2 row-span-2'
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1759936236914-e8b1ac061030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBvYmplY3RzfGVufDF8fHx8MTc2NTM1NzQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       className: 'col-span-1 row-span-1'
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1637873208809-c2d62f3998ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY1MzU3NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       className: 'col-span-1 row-span-2'
//     },
//     {
//       url: 'https://images.unsplash.com/photo-1733459065613-cbc1503bffc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHRleHR1cmV8ZW58MXx8fHwxNzY1MzU3NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
//       className: 'col-span-2 row-span-1'
//     }
//   ];

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl mb-12 tracking-tight">
//           INSPIRATION COLLECTION
//         </h2>

//         {/* Bento Grid */}
//         <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
//           {images.map((image, index) => (
//             <div
//               key={index}
//               className={`${image.className} overflow-hidden rounded-sm group cursor-pointer`}
//             >
//               <img
//                 src={image.url}
//                 alt={`Inspiration ${index + 1}`}
//                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// import Image from "next/image";
// import React from "react";

// const InspirationSection = () => {
//   return (
//     <section className="relative min-h-[600px] md:min-h-[700px] bg-white overflow-hidden">
//       {/* Background elements - wooden floor simulation */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent"></div>
//       <div
//         className="absolute bottom-0 left-0 right-0 h-1/3 bg-cover bg-center opacity-80"
//       ></div>

// <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between h-full">
//   {/* Text Content - Left Side */}
//   <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 relative">
//     <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
//       Experience our collections in person. Our friendly and knowledgeable
//       staff are here to help you find the perfect pieces for your home.
//     </h2>
//     <button className="px-8 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-full text-lg hover:bg-yellow-300 transition-colors shadow-lg">
//       Visit Our Showroom →
//     </button>
//   </div>

//   {/* Image - Right Side */}
//   <div className="w-[200px] h-full lg:w-1/2 relative">
//     <Image
//       height={500}
//       width={500}
//       src="/chair.png"
//       alt="Green armchair with plants on side table"
//       className="w-full h-full max-h-[500px] object-contain mx-auto lg:ml-auto"
//     />
//     {/* Hanging lamp simulation */}
//     <div
//       className="absolute -top-10 right-4 lg:-top-20 lg:right-10 w-20 h-44 rounded-full opacity-90"
//       style={{
//         backgroundImage: 'url("/lamp.png")',
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     ></div>
//   </div>
// </div>
//     </section>
//   );
// };

// export { InspirationSection };

import Image from "next/image";
import React from "react";

const InspirationSection = () => {
  return (
    <div className="relative h-screen w-full bg-gray-100">
      <Image
        className="object-cover backdrop-blur-sm"
        alt="bedroom"
        fill
        src={"/bedroom.jpg"}
      />
      <div className="h-full w-full absolute top-0 right-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center h-full">
        {/* Text Content - Left Side */}
        <div className="w-full h-full justify-center items-center flex flex-col text-center lg:text-left mb-8 lg:mb-0 relative">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black  leading-tight mb-6">
            Experience our collections in person.
          </h2>
          <button className="px-8 py-3 mt-2 text-center bg-yellow-400 text-gray-800 font-semibold rounded-full text-lg hover:bg-yellow-300 transition-colors shadow-lg">
            Visit Our Showroom →
          </button>
        </div>
      </div>
    </div>
  );
};

export { InspirationSection };
