"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome, FaIndustry, FaHandHoldingUsd, FaFileContract, FaWrench, FaDraftingCompass } from "react-icons/fa";

export default function ServicesSection() {
  const services = [
    {
      icon: FaHome,
      title: "Residential Rooftop Solar",
      description: "Affordable solar systems for homes with subsidy assistance under PM SURYA GHAR Yojana.",
      link: "/services#residential"
    },
    {
      icon: FaIndustry,
      title: "Commercial & Industrial Solar",
      description: "High-capacity solar plants for factories, warehouses, and commercial buildings.",
      link: "/services#commercial"
    },
    {
      icon: FaHandHoldingUsd,
      title: "PM SURYA GHAR Subsidy Help",
      description: "Complete assistance in applying for and availing government subsidies.",
      link: "/services#subsidy"
    },
    {
      icon: FaFileContract,
      title: "Net Metering Support",
      description: "End-to-end support for net metering registration with JVVNL/AVVNL.",
      link: "/services#net-metering"
    },
    {
      icon: FaWrench,
      title: "Solar AMC & Maintenance",
      description: "Annual maintenance contracts to keep your solar system at peak performance.",
      link: "/services#amc"
    },
    {
      icon: FaDraftingCompass,
      title: "Solar Design & Consultation",
      description: "Expert site assessment and custom solar system design.",
      link: "/services#consultation"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-light" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Our Expertise
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Our Solar Services
          </h2>
          <p className="text-dark/70 text-lg">
            Comprehensive solar solutions tailored for every need
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-primary group relative overflow-hidden"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="text-2xl text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3 font-heading">
                {service.title}
              </h3>
              <p className="text-dark/70 mb-6 line-clamp-3">
                {service.description}
              </p>
              <Link 
                href={service.link}
                className="text-primary font-semibold hover:text-primary-hover transition-colors inline-flex items-center gap-2 group/link"
              >
                Learn More <span className="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
              </Link>
              
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
