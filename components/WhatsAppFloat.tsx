"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <motion.a
        href="https://wa.me/917733999183"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 2 }}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all relative"
        aria-label="Chat with us on WhatsApp"
      >
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        <FaWhatsapp className="text-3xl relative z-10" />
      </motion.a>
      
      {/* Tooltip */}
      <div className="absolute right-full bottom-1/2 translate-y-1/2 mr-4 bg-white text-dark text-sm font-medium px-3 py-1.5 rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap border border-gray-100">
        Chat with us on WhatsApp
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-y-4 border-l-4 border-r-0 border-transparent border-l-white"></div>
      </div>
    </div>
  );
}
