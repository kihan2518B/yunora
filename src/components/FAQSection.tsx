// "use client"
// import { Plus, Minus } from 'lucide-react';
// import { useState } from 'react';

// export function FAQSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   const faqs = [
//     {
//       question: 'What materials are used in your furniture?',
//       answer: 'We use premium, sustainably-sourced materials including solid hardwoods, high-grade fabrics, and eco-friendly finishes to ensure both quality and environmental responsibility.'
//     },
//     {
//       question: 'Do you offer customization options?',
//       answer: 'Yes, many of our pieces can be customized in terms of fabric, finish, and dimensions. Contact our design team for personalized consultation.'
//     },
//     {
//       question: 'What is your return policy?',
//       answer: 'We offer a 30-day return policy for all items. Products must be in original condition with all packaging intact.'
//     },
//     {
//       question: 'How long does delivery take?',
//       answer: 'Standard delivery takes 5-7 business days. Express shipping options are available for select items.'
//     },
//     {
//       question: 'Do you offer assembly services?',
//       answer: 'Yes, we offer professional assembly services for an additional fee. This can be selected during checkout.'
//     },
//     {
//       question: 'Is there a warranty on your products?',
//       answer: 'All our furniture comes with a comprehensive 2-year warranty covering manufacturing defects and structural issues.'
//     }
//   ];

//   return (
//     <section className="py-20 bg-[#F9F7F4]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-2 gap-12 items-start">
//           {/* Image */}
//           <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm order-2 md:order-1">
//             <img
//               src="https://images.unsplash.com/photo-1723750290151-164cb19ebab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2NTM0MTQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
//               alt="Modern dining room"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* FAQ Content */}
//           <div className="order-1 md:order-2">
//             <h2 className="text-3xl sm:text-4xl mb-12 tracking-tight">
//               FREQUENTLY ASKED QUESTIONS
//             </h2>

//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="border-b border-gray-300 pb-4">
//                   <button
//                     onClick={() => setOpenIndex(openIndex === index ? null : index)}
//                     className="w-full flex items-center justify-between text-left group"
//                   >
//                     <span className="pr-8 group-hover:opacity-60 transition-opacity">
//                       {faq.question}
//                     </span>
//                     <div className="flex-shrink-0">
//                       {openIndex === index ? (
//                         <Minus className="w-5 h-5" />
//                       ) : (
//                         <Plus className="w-5 h-5" />
//                       )}
//                     </div>
//                   </button>

//                   {openIndex === index && (
//                     <div className="mt-4 text-gray-600 pr-8">
//                       {faq.answer}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Plus, Minus } from "lucide-react";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What materials are used in your furniture?",
      answer:
        "We use premium, sustainably-sourced materials including solid hardwoods, high-grade fabrics, and eco-friendly finishes to ensure both quality and environmental responsibility.",
    },
    {
      question: "Do you offer customization options?",
      answer:
        "Yes, many of our pieces can be customized in terms of fabric, finish, and dimensions. Contact our design team for personalized consultation.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all items. Products must be in original condition with all packaging intact.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Standard delivery takes 5–7 business days. Express shipping options are available for select items.",
    },
    {
      question: "Do you offer assembly services?",
      answer:
        "Yes, we offer professional assembly services for an additional fee. This can be selected during checkout.",
    },
    {
      question: "Is there a warranty on your products?",
      answer:
        "All our furniture comes with a comprehensive 2-year warranty covering manufacturing defects and structural issues.",
    },
  ];

  return (
    <section className="py-20 bg-[#F9F7F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1723750290151-164cb19ebab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaW5pbmclMjByb29tfGVufDF8fHx8MTc2NTM0MTQ2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern dining room"
              className="w-full h-full object-cover scale-105 transition-transform duration-700 hover:scale-100"
            />
          </div>

          {/* FAQ Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl mb-12 tracking-tight opacity-0 translate-y-3 animate-fadeUp">
              FREQUENTLY ASKED QUESTIONS
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className="border-b border-gray-300 pb-4 transition-colors duration-300"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <span className="pr-8 group-hover:opacity-60 transition-all duration-200">
                        {faq.question}
                      </span>

                      <div
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-5 h-5" />
                        ) : (
                          <Plus className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    {/* Animated Answer */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-out ${
                        isOpen
                          ? "max-h-40 opacity-100 mt-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-600 pr-8">{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0px);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
