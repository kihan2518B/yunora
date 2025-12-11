// // export function InspirationSection() {
// //   const images = [
// //     {
// //       url: 'https://images.unsplash.com/photo-1703867110051-a0eb1e77b967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBpbnRlcmlvciUyMHJvb218ZW58MXx8fHwxNzY1MzEyODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
// //       className: 'col-span-2 row-span-2'
// //     },
// //     {
// //       url: 'https://images.unsplash.com/photo-1759936236914-e8b1ac061030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwZGVjb3IlMjBvYmplY3RzfGVufDF8fHx8MTc2NTM1NzQ3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
// //       className: 'col-span-1 row-span-1'
// //     },
// //     {
// //       url: 'https://images.unsplash.com/photo-1637873208809-c2d62f3998ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGNsb3NlJTIwdXB8ZW58MXx8fHwxNzY1MzU3NDc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
// //       className: 'col-span-1 row-span-2'
// //     },
// //     {
// //       url: 'https://images.unsplash.com/photo-1733459065613-cbc1503bffc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHRleHR1cmV8ZW58MXx8fHwxNzY1MzU3NDc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
// //       className: 'col-span-2 row-span-1'
// //     }
// //   ];

// //   return (
// //     <section className="py-20 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-7xl mx-auto">
// //         <h2 className="text-3xl sm:text-4xl mb-12 tracking-tight">
// //           INSPIRATION COLLECTION
// //         </h2>

// //         {/* Bento Grid */}
// //         <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
// //           {images.map((image, index) => (
// //             <div
// //               key={index}
// //               className={`${image.className} overflow-hidden rounded-sm group cursor-pointer`}
// //             >
// //               <img
// //                 src={image.url}
// //                 alt={`Inspiration ${index + 1}`}
// //                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// import React from "react";

// const InspirationSection = () => {
//   return (
//     <section className="relative min-h-[600px] md:min-h-[700px] bg-white overflow-hidden">
//       {/* Background elements - wooden floor simulation */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent"></div>
//       <div
//         className="absolute bottom-0 left-0 right-0 h-1/3 bg-[url('https://source.unsplash.com/1920x400/?wooden-floor,white')] bg-cover bg-center opacity-80"
//         style={{ backgroundSize: "cover", backgroundPosition: "center" }}
//       ></div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col lg:flex-row items-center justify-between h-full">
//         {/* Text Content - Left Side */}
//         <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-6">
//             Experience our collections in person. Our friendly and knowledgeable
//             staff are here to help you find the perfect pieces for your home.
//           </h2>
//           <button className="px-8 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-full text-lg hover:bg-yellow-300 transition-colors shadow-lg">
//             Visit Our Showroom →
//           </button>
//         </div>

//         {/* Image - Right Side */}
//         <div className="w-full lg:w-1/2 relative">
//           <img
//             src="https://images.unsplash.com/photo-1700000000-niZ1rRSMSls?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
//             alt="Green armchair with plants on side table"
//             className="w-full h-auto max-h-[500px] object-contain mx-auto lg:ml-auto"
//           />
//           {/* Hanging lamp simulation */}
//           <div
//             className="absolute -top-10 right-4 lg:-top-20 lg:right-10 w-24 h-24 rounded-full opacity-90"
//             style={{
//               backgroundImage:
//                 'url("https://images.unsplash.com/photo-1732580000-LPeE6sXfGms?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80")',
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//             }}
//           ></div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export { InspirationSection };

import React from "react";

const InspirationSection = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Experience our collections in person. Our friendly and
              knowledgeable staff are here to help you find the perfect pieces
              for your home.
            </h1>

            <button className="group flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <span className="text-lg">Visit Our Showroom</span>
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>

          {/* Right Content - Furniture Scene */}
          <div className="relative hidden lg:block">
            {/* Pendant Lamp */}
            <div className="absolute top-0 right-32 z-10">
              <div className="relative">
                <div className="w-1 h-48 bg-gray-400 mx-auto"></div>
                <div className="w-40 h-40 rounded-full bg-gradient-to-b from-amber-200 via-amber-100 to-amber-50 shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-amber-100/50"></div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-amber-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Chair and Table Scene */}
            <div className="relative mt-64 flex items-end justify-center gap-8">
              {/* Side Table with Plants */}
              <div className="relative">
                {/* Table */}
                <div className="relative w-32 h-32">
                  <div className="absolute bottom-0 w-full h-3 bg-amber-700 rounded-full"></div>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2 h-20 bg-amber-800"></div>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2 h-20 bg-amber-700 transform rotate-12 origin-bottom"></div>
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2 h-20 bg-amber-700 transform -rotate-12 origin-bottom"></div>
                </div>

                {/* Plants */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="w-8 h-10 bg-white rounded-full shadow-md relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-6 bg-green-600 rounded-t-full"></div>
                  </div>
                  <div className="w-8 h-10 bg-white rounded-full shadow-md relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-7 bg-green-700 rounded-t-full"></div>
                  </div>
                  <div className="w-8 h-10 bg-white rounded-full shadow-md relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-5 bg-green-600 rounded-t-full"></div>
                  </div>
                </div>
              </div>

              {/* Chair */}
              <div className="relative w-48 h-56">
                {/* Seat */}
                <div className="absolute bottom-16 w-full h-16 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-lg shadow-lg"></div>

                {/* Backrest */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-32 bg-gradient-to-b from-emerald-400 to-emerald-500 rounded-t-3xl shadow-lg"></div>

                {/* Arms */}
                <div className="absolute bottom-16 left-0 w-6 h-20 bg-amber-700 rounded-t-lg"></div>
                <div className="absolute bottom-16 right-0 w-6 h-20 bg-amber-700 rounded-t-lg"></div>

                {/* Legs */}
                <div className="absolute bottom-0 left-4 w-3 h-16 bg-amber-800"></div>
                <div className="absolute bottom-0 right-4 w-3 h-16 bg-amber-800"></div>
                <div className="absolute bottom-0 left-12 w-3 h-16 bg-amber-700"></div>
                <div className="absolute bottom-0 right-12 w-3 h-16 bg-amber-700"></div>

                {/* Texture pattern */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-36 h-28 opacity-20">
                  <div className="grid grid-cols-6 gap-1 h-full">
                    {[...Array(24)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 bg-white rounded-full"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floor */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-200/50"></div>
          </div>

          {/* Mobile Image Alternative */}
          <div className="lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
              alt="Showroom furniture"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20 -z-10"></div>
    </div>
  );
};

export { InspirationSection };
