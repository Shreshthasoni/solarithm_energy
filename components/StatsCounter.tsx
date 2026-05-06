"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { value: 500, suffix: "+", label: "Installations Done" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 3, suffix: "", label: "Office Locations" },
  { value: 100, suffix: "%", label: "Certified & Registered" },
];

export default function StatsCounter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-dark py-12 md:py-20" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center justify-center p-4 border-b-2 border-primary/20 md:border-b-0 md:border-r-2 last:border-r-0 border-white/10"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {isInView ? (
                  <CountUp end={stat.value} duration={2.5} />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </div>
              <div className="text-white/90 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
