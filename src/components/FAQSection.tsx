// app/components/FAQSection.tsx
"use client";

import { Plus, Minus, Shield, Award, Clock, HeadphonesIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What materials are used in your mattresses?",
      answer:
        "We use premium, certified materials including high-density memory foam, natural latex, organic cotton covers, and breathable fabrics. All materials are tested for safety and durability to ensure the best sleep experience.",
    },
    {
      question: "Do you offer customization options?",
      answer:
        "Yes, we offer custom sizing for mattresses and can accommodate specific firmness preferences. Our team works with you to create the perfect bedding solution for your needs.",
    },
    {
      question: "What is your warranty and return policy?",
      answer:
        "We provide a 10-year warranty on all mattresses and a 30-night trial period. If you're not completely satisfied, we offer hassle-free returns with full refund.",
    },
    {
      question: "How long does delivery take in my area?",
      answer:
        "Standard delivery takes 3-5 business days for most locations. We offer free delivery and setup for orders within our service area. Express delivery is available upon request.",
    },
    {
      question: "Are your products certified and tested?",
      answer:
        "Yes, all our products meet international quality standards and are certified by relevant authorities. We conduct rigorous testing for durability, safety, and comfort.",
    },
    {
      question: "How do I maintain and care for my mattress?",
      answer:
        "We recommend rotating your mattress every 3 months, using a quality protector, and regular vacuuming. Detailed care instructions are provided with every purchase.",
    },
  ];

  const trustBadges = [
    {
      icon: Shield,
      title: "10-Year Warranty",
      description: "Comprehensive coverage",
    },
    {
      icon: Award,
      title: "Quality Certified",
      description: "International standards",
    },
    {
      icon: Clock,
      title: "30-Night Trial",
      description: "Risk-free returns",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Always here to help",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
              Got Questions?
            </span>
          </motion.div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-textPrimary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-textSecondary max-w-2xl mx-auto">
            Everything you need to know about our products and services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* FAQ Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-white border rounded-2xl transition-all duration-300 ${
                    isOpen
                      ? "border-brand shadow-lg shadow-brand/10"
                      : "border-borderLight hover:border-brand/30 hover:shadow-md"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left p-6 group"
                  >
                    <span className="pr-8 text-textPrimary font-medium text-lg group-hover:text-brand transition-colors duration-200">
                      {faq.question}
                    </span>

                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
                        isOpen
                          ? "bg-brand text-white"
                          : "bg-mutedBg text-textSecondary group-hover:bg-brand/10 group-hover:text-brand"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-textSecondary leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Trust Building Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-24 space-y-8"
          >
            {/* Trust Badges Grid */}
            <div className="bg-gradient-to-br from-mutedBg to-white rounded-3xl p-8 border border-borderLight">
              <h3 className="font-serif text-2xl text-textPrimary mb-6">
                Why Choose Yunora?
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {trustBadges.map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl p-5 border border-borderLight hover:border-brand/30 hover:shadow-lg transition-all duration-300">
                      <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-brand group-hover:scale-110 transition-all duration-300">
                        <badge.icon className="w-6 h-6 text-brand group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="font-semibold text-textPrimary mb-1">
                        {badge.title}
                      </h4>
                      <p className="text-sm text-textSecondary">
                        {badge.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-2xl mb-3">
                  Still have questions?
                </h3>
                <p className="text-gray-300 mb-6">
                  Our team is here to help you find the perfect bedding solution
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-primary-800 font-medium py-4 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  Contact Our Experts
                </motion.button>
              </div>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center p-6 bg-white rounded-2xl border border-borderLight"
            >
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.05 }}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </motion.svg>
                ))}
              </div>
              <p className="text-sm text-textSecondary">
                <span className="font-semibold text-textPrimary">5,000+ customers</span> trust our quality
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}