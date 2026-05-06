"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is PM SURYA GHAR Yojana?",
      a: "It's the Government of India's flagship scheme providing subsidies up to ₹78,000 for rooftop solar installations on residential homes."
    },
    {
      q: "How much subsidy can I get?",
      a: "For up to 2kW — ₹30,000/kW; 2–3kW — ₹18,000/kW for the additional 1kW. Maximum subsidy is ₹78,000 for 3kW systems."
    },
    {
      q: "Which solar brands do you install?",
      a: "We are authorized channel partners of Adani Solar, Polycab, Waaree, and Luminous — all Tier-1 certified brands."
    },
    {
      q: "How long does installation take?",
      a: "A typical residential rooftop solar installation takes 2–4 working days after all approvals are in place."
    },
    {
      q: "Do you provide AMC services?",
      a: "Yes, we offer Annual Maintenance Contracts (AMC) to ensure your system runs at peak efficiency throughout the year."
    },
    {
      q: "How do I apply for net metering?",
      a: "We handle the complete net metering process with JVVNL/AVVNL on your behalf — from application to final approval."
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white" id="faq">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Got Questions?
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full flex justify-between items-center p-5 md:p-6 bg-white hover:bg-light transition-colors text-left"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-bold text-dark font-heading pr-4">{faq.q}</span>
                <span className="text-primary flex-shrink-0">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-5 md:p-6 pt-0 text-dark/70 bg-white">
                      <div className="w-full h-px bg-gray-100 mb-4"></div>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
