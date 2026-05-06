"use client";

import { motion } from "framer-motion";
import { FaHandshake, FaAward, FaTools, FaHeadset, FaFileInvoiceDollar, FaUserTie } from "react-icons/fa";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: FaHandshake,
      title: "Authorized Channel Partner",
      description: "Official partner of Adani, Polycab, Waaree & Luminous"
    },
    {
      icon: FaAward,
      title: "PM SURYA GHAR Registered",
      description: "Verified vendor on India's flagship solar subsidy portal"
    },
    {
      icon: FaTools,
      title: "End-to-End EPC",
      description: "From design and supply to installation and commissioning"
    },
    {
      icon: FaHeadset,
      title: "Post-Installation Support",
      description: "Dedicated AMC plans and responsive support team"
    },
    {
      icon: FaFileInvoiceDollar,
      title: "Transparent Pricing",
      description: "No hidden charges. Clear quotes before any work begins"
    },
    {
      icon: FaUserTie,
      title: "Expert Local Team",
      description: "Experienced technicians based in Jaipur and Alwar"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white" id="why-us">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Our Advantage
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Why Choose Solarithm?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-5 group border-l-2 border-transparent hover:border-primary pl-4 py-2 transition-all duration-300"
            >
              <div className="w-12 h-12 flex-shrink-0 bg-light rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <reason.icon className="text-2xl text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-dark mb-2 font-heading">
                  {reason.title}
                </h3>
                <p className="text-dark/70">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
