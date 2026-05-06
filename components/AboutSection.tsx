"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection() {
  const features = [
    "Registered under PM SURYA GHAR PORTAL",
    "Authorized: Adani · Polycab · Waaree · Luminous",
    "Residential, Commercial & Industrial Solar",
    "End-to-End EPC with Post-Installation AMC",
    "Serving Jaipur & Alwar",
  ];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
              alt="Solar Panels Rooftop India"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg inline-block border-l-4 border-primary">
                <p className="font-bold text-dark mb-1">PM SURYA GHAR PORTAL</p>
                <p className="text-sm text-dark/80">Authorized Registered Vendor</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
              About Us
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
              Building a Solar-Powered <span className="text-primary">Rajasthan</span>
            </h2>
            <p className="text-dark/70 text-lg mb-8 leading-relaxed">
              Solarithm Energy Solutions Private Limited is a Jaipur-based solar EPC company registered under the PM SURYA GHAR PORTAL. As an authorized channel partner of Adani, Polycab, Waaree, and Luminous, we deliver end-to-end solar solutions for homes, businesses, and industries across Rajasthan.
            </p>
            
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <FaCheckCircle className="text-primary mt-1 text-xl flex-shrink-0" />
                  <span className="text-dark/80 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-md font-medium transition-all transform hover:-translate-y-1 shadow-lg"
            >
              Know More About Us &rarr;
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
