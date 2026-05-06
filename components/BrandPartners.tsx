"use client";

import { motion } from "framer-motion";

export default function BrandPartners() {
  const brands = [
    { name: "Adani Solar" },
    { name: "Polycab" },
    { name: "Waaree" },
    { name: "Luminous" },
  ];

  return (
    <section className="py-12 md:py-16 bg-dark border-y border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">
            Our Authorized Brand Partners
          </h2>
          <p className="text-white/60">
            We install only the best — certified products from India's leading solar brands
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
          {brands.map((brand, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="px-6 py-4 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center min-w-[160px] md:min-w-[200px]"
            >
              <span className="text-2xl md:text-3xl font-bold text-white tracking-wider font-heading uppercase text-center">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <span className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase">
            Authorized Channel Partner — All brands
          </span>
        </div>
      </div>
    </section>
  );
}
