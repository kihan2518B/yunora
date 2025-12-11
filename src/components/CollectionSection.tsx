// "use client";
// import React, { useState } from "react";

// const CollectionSection = () => {
//   const [activeFilter, setActiveFilter] = useState("All");

//   const collections = [
//     {
//       name: "CHAIR",
//       image:
//         "https://images.unsplash.com/photo-1760716478125-aa948e99ef85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGFpciUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjUyNjUyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     },
//     {
//       name: "TABLE",
//       image:
//         "https://images.unsplash.com/photo-1758977404683-d04c315a005b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0YWJsZSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjUyODU1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     },
//     {
//       name: "BOOKSHELF",
//       image:
//         "https://images.unsplash.com/photo-1576325781808-58584d4f505c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGYlMjBtaW5pbWFsfGVufDF8fHx8MTc2NTI4NzEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     },
//     {
//       name: "SOFA",
//       image:
//         "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhfGVufDF8fHx8MTc2NTM1MDczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     },
//     {
//       name: "LAMP",
//       image:
//         "https://images.unsplash.com/photo-1667312939978-64cf31718a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYW1wfGVufDF8fHx8MTc2NTMzMDY3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     },
//   ];
//   const filters = ["All", "Chair", "Cabinet", "Sofa", "Bed"];

//   const products = [
//     {
//       id: 1,
//       name: "Easy Sofa",
//       price: 66.0,
//       category: "SOFA",
//       image:
//         "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
//     },
//     {
//       id: 2,
//       name: "Easy Sofa",
//       price: 126.0,
//       category: "CHAIR",
//       image:
//         "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&h=400&fit=crop",
//     },
//     {
//       id: 3,
//       name: "Cabinet",
//       price: 138.0,
//       category: "BOOKSHELF",
//       image:
//         "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400&h=400&fit=crop",
//     },
//     {
//       id: 4,
//       name: "Rumpt Chair",
//       price: 100.0,
//       category: "CHAIR",
//       image:
//         "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=400&fit=crop",
//     },
//     {
//       id: 5,
//       name: "Romp Toil",
//       price: 86.0,
//       category: "CHAIR",
//       image:
//         "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=400&fit=crop",
//     },
//     {
//       id: 6,
//       name: "Almirah",
//       price: 222.0,
//       category: "BOOKSHELF",
//       image:
//         "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=400&fit=crop",
//     },
//   ];

//   const filteredProducts =
//     activeFilter === "All"
//       ? products
//       : products.filter((product) => product.category === activeFilter);

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50">
//       {/* Filter Buttons */}
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl text-center mb-12 tracking-tight">
//           OUR COLLECTION
//         </h2>

//         <div className="relative overflow-x-auto scrollbar-hide">
//           <div className="flex space-x-8 pb-4 justify-center min-w-max px-4">
//             {collections.map((item, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveFilter(item.name)}
//                 className="flex flex-col items-center space-y-4 group hover:opacity-75 transition-opacity"
//               >
//                 <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-4 border-white shadow-lg">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <span className="text-sm tracking-wider">{item.name}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative group"
//           >
//             {/* Product Image */}
//             <div className="relative h-72 bg-gray-100 overflow-hidden">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>

//             {/* Product Info */}
//             <div className="p-6 flex items-center justify-between">
//               <div>
//                 <h3 className="text-lg font-medium text-gray-600 mb-1">
//                   {product.name}
//                 </h3>
//                 <p className="text-2xl font-bold text-gray-900">
//                   ${product.price.toFixed(2)}
//                 </p>
//               </div>

//               {/* Arrow Button */}
//               <button className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-300 group-hover:scale-110">
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M7 17L17 7M17 7H7M17 7V17"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* No Results Message */}
//       {filteredProducts.length === 0 && (
//         <div className="text-center py-12">
//           <p className="text-xl text-gray-500">
//             No products found in this category.
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export { CollectionSection };

"use client";
import React, { useState } from "react";

const CollectionSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const collections = [
    {
      name: "CHAIR",
      image:
        "https://images.unsplash.com/photo-1760716478125-aa948e99ef85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaGFpciUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjUyNjUyMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "TABLE",
      image:
        "https://images.unsplash.com/photo-1758977404683-d04c315a005b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0YWJsZSUyMGZ1cm5pdHVyZXxlbnwxfHx8fDE3NjUyODU1MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "BOOKSHELF",
      image:
        "https://images.unsplash.com/photo-1576325781808-58584d4f505c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib29rc2hlbGYlMjBtaW5pbWFsfGVufDF8fHx8MTc2NTI4NzEyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "SOFA",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhfGVufDF8fHx8MTc2NTM1MDczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "LAMP",
      image:
        "https://images.unsplash.com/photo-1667312939978-64cf31718a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsYW1wfGVufDF8fHx8MTc2NTMzMDY3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Easy Sofa",
      price: 66.0,
      category: "SOFA",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Easy Sofa",
      price: 126.0,
      category: "SOFA",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Cabinet",
      price: 138.0,
      category: "BOOKSHELF",
      image:
        "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400&h=400&fit=crop",
    },
    {
      id: 4,
      name: "Rumpt Chair",
      price: 100.0,
      category: "CHAIR",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=400&fit=crop",
    },
    {
      id: 5,
      name: "Romp Toil",
      price: 86.0,
      category: "CHAIR",
      image:
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=400&h=400&fit=crop",
    },
    {
      id: 6,
      name: "Almirah",
      price: 222.0,
      category: "BOOKSHELF",
      image:
        "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&h=400&fit=crop",
    },
    {
      id: 7,
      name: "Dining Table",
      price: 200.0,
      category: "TABLE",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
    },
    {
      id: 8,
      name: "Floor Lamp",
      price: 50.0,
      category: "LAMP",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=400&fit=crop",
    },
    {
      id: 9,
      name: "Modern Chair",
      price: 120.0,
      category: "CHAIR",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
    },
    {
      id: 11,
      name: "Bookshelf Unit",
      price: 150.0,
      category: "BOOKSHELF",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    },
    {
      id: 12,
      name: "Coffee Table",
      price: 80.0,
      category: "TABLE",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop",
    },
  ];
  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-center mb-12 tracking-tight">
          OUR COLLECTION
        </h2>
        <div className="relative overflow-x-auto scrollbar-hide">
          <div className="flex space-x-8 pb-4 justify-center min-w-max px-4">
            {collections.map((item, index) => {
              const isActive = activeFilter === item.name;
              return (
                <button
                  key={index}
                  onClick={() => setActiveFilter(item.name)}
                  className="flex flex-col items-center space-y-2 py-4 transition-all duration-300 hover:opacity-75"
                >
                  <div
                    className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shadow-lg transition-all ease-in-out duration-300 ${
                      isActive
                        ? "scale-110"
                        : "border-4 border-white"
                    }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span
                    className={`text-xs sm:text-sm tracking-wider transition-colors duration-300 ${
                      isActive
                        ? "text-black font-semibold"
                        : "text-gray-600"
                    }`}
                  >
                    {item.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative group cursor-pointer"
          >
            {/* Product Image */}
            <div className="relative h-64 bg-gray-100 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* Product Info */}
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-600 mb-1">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
              </div>
              {/* Arrow Button */}
              <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-all duration-300 group-hover:scale-110">
                <svg
                  className="w-5 h-5"
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
          </div>
        ))}
      </div>
      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">
            No products found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export { CollectionSection };
