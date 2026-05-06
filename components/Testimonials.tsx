"use client";

import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Solarithm made the entire PM SURYA GHAR subsidy process seamless. Our electricity bill dropped by 90%!",
      name: "Ramesh Sharma",
      location: "Vaishali Nagar, Jaipur"
    },
    {
      quote: "Very professional team. Installation was clean and completed in just 2 days. Highly recommend!",
      name: "Priya Agarwal",
      location: "Mansarover, Jaipur"
    },
    {
      quote: "Got my 10kW commercial plant installed in Alwar. Great service and transparent pricing.",
      name: "Vikram Singh",
      location: "Alwar"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-light border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              <FaQuoteLeft className="absolute top-8 right-8 text-secondary/10 text-6xl" />
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-dark/80 italic mb-8 relative z-10 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <h4 className="font-bold text-dark font-heading">{testimonial.name}</h4>
                <p className="text-sm text-dark/60">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
