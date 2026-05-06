"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1509391366360-12009a34bc69?q=80&w=2072&auto=format&fit=crop"
          alt="Solar panels on rooftop"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-dark/70"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block bg-primary/20 border border-primary/50 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 uppercase tracking-wider"
          >
            Powering Tomorrow, Today
          </motion.div>
          
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Harness the Power of <br className="hidden md:block" />
            <span className="text-primary">the Sun</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Solarithm Energy Solutions — Registered under <span className="font-bold text-secondary">PM SURYA GHAR PORTAL</span>
            <br className="hidden md:block" />
            Authorized Partner: Adani &middot; Polycab &middot; Waaree &middot; Luminous
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-md font-medium text-lg transition-all transform hover:-translate-y-1 shadow-[0_10px_20px_rgba(245,166,35,0.3)] flex items-center justify-center gap-2"
            >
              Get Free Consultation <FaArrowRight className="text-sm" />
            </Link>
            <Link 
              href="/projects" 
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-dark px-8 py-3.5 rounded-md font-medium text-lg transition-all transform hover:-translate-y-1 flex items-center justify-center"
            >
              Our Projects
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-white/60 text-sm mb-2 font-medium tracking-widest uppercase">Scroll Down</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
