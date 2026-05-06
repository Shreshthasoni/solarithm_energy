"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaHome, FaIndustry, FaRegHandshake, FaBolt, FaWrench, FaDraftingCompass, FaCheckCircle, FaPlus, FaMinus } from "react-icons/fa";

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      id: "residential",
      icon: <FaHome />,
      title: "Residential Rooftop Solar",
      description: "Transform your home into a mini power plant. We design and install custom rooftop solar systems for homes of all sizes — helping you slash electricity bills and earn from excess power via net metering.",
      features: [
        "1kW to 10kW systems",
        "PM SURYA GHAR subsidy assistance",
        "Net metering registration support",
        "25-year panel performance warranty"
      ]
    },
    {
      id: "commercial",
      icon: <FaIndustry />,
      title: "Commercial & Industrial Solar",
      description: "Power your business with clean, cost-effective solar energy. Our commercial and industrial solar plants are engineered for high performance and fast ROI.",
      features: [
        "10kW to 500kW+ capacity",
        "On-grid, off-grid & hybrid systems",
        "Custom engineering & design",
        "Reduced energy costs by up to 80%"
      ]
    },
    {
      id: "subsidy",
      icon: <FaRegHandshake />,
      title: "PM SURYA GHAR Subsidy Assistance",
      description: "As a registered vendor on the PM SURYA GHAR PORTAL, we handle your entire subsidy application process — from registration to disbursement — completely hassle-free.",
      features: [
        "Registered PM SURYA GHAR vendor",
        "Subsidy up to ₹78,000 for 3kW systems",
        "Complete documentation support",
        "Fast approval assistance"
      ]
    },
    {
      id: "net-metering",
      icon: <FaBolt />,
      title: "Net Metering Support",
      description: "Sell your excess solar power back to the grid and earn credits on your electricity bill. We manage the complete net metering process with JVVNL/AVVNL on your behalf.",
      features: [
        "End-to-end application handling",
        "JVVNL & AVVNL coordination",
        "Bi-directional meter installation",
        "Monthly generation monitoring"
      ]
    },
    {
      id: "amc",
      icon: <FaWrench />,
      title: "Solar AMC & Maintenance",
      description: "Protect your solar investment with our Annual Maintenance Contracts. Our certified technicians ensure your system performs at peak efficiency year-round.",
      features: [
        "Quarterly panel cleaning",
        "Inverter & wiring inspection",
        "Performance monitoring & reporting",
        "Emergency breakdown support"
      ]
    },
    {
      id: "consultation",
      icon: <FaDraftingCompass />,
      title: "Solar Design & Consultation",
      description: "Not sure which system is right for you? Our solar experts conduct a free site assessment and design a custom solution based on your roof space, energy needs, and budget.",
      features: [
        "Free site assessment",
        "Shadow & orientation analysis",
        "Custom system sizing & design",
        "ROI & payback period calculation"
      ]
    }
  ];

  const steps = [
    { num: "1", title: "Free Consultation", desc: "Call us or fill the enquiry form. Our solar expert will call you back within 24 hours." },
    { num: "2", title: "Site Assessment", desc: "We visit your site, assess roof area, shadow analysis, load requirements & grid connection." },
    { num: "3", title: "Custom Proposal", desc: "We prepare a detailed proposal with system design, brand options, cost, subsidy & ROI." },
    { num: "4", title: "Agreement & Approval", desc: "Once you approve, we handle all paperwork — DISCOM approvals, PM SURYA GHAR registration." },
    { num: "5", title: "Installation", desc: "Our certified team installs your system in 2–4 days with zero mess and full safety." },
    { num: "6", title: "Go Solar!", desc: "System is commissioned, net meter installed, and you start saving from Day 1." }
  ];

  const brands = [
    { name: "Adani Solar" },
    { name: "Polycab" },
    { name: "Waaree" },
    { name: "Luminous" }
  ];

  const faqs = [
    {
      q: "Do you provide service in Alwar as well?",
      a: "Yes! We have a dedicated branch office at A-140, Laxmi Nagar, Opposite Ambedkar Nagar, Alwar. We serve Jaipur and Alwar extensively."
    },
    {
      q: "What brands of solar panels do you use?",
      a: "We are authorized channel partners of Adani Solar, Polycab, Waaree, and Luminous — all Tier-1 MNRE-approved brands."
    },
    {
      q: "Is there any government subsidy available?",
      a: "Yes! Under PM SURYA GHAR Yojana, residential customers can get up to ₹78,000 in subsidy. We are a registered vendor and handle the entire process."
    },
    {
      q: "What is the payback period for a solar system?",
      a: "Typically 3–5 years for residential systems, after which you enjoy virtually free electricity for 20+ years."
    },
    {
      q: "Do you handle net metering registration?",
      a: "Absolutely. We manage the complete JVVNL/AVVNL net metering process on your behalf from start to finish."
    }
  ];

  return (
    <main>
      {/* SECTION 1 — Hero Banner */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-dark/90"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center mt-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
            <div className="text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link> / Services
            </div>
            <h1 className="font-heading text-4xl md:text-[52px] font-bold text-white mb-6 leading-tight">
              Our Solar Services
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              End-to-end solar solutions for homes, businesses &amp; industries across Rajasthan
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — Intro Strip */}
      <section className="bg-white py-12 border-b-4 border-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="px-6 py-4 md:py-0 flex flex-col items-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-heading font-bold text-xl text-dark mb-2">Turnkey Solar Projects</h3>
              <p className="text-dark/70 text-sm">Design to commissioning, all under one roof</p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="px-6 py-4 md:py-0 flex flex-col items-center"
            >
              <div className="text-4xl mb-4">🏅</div>
              <h3 className="font-heading font-bold text-xl text-dark mb-2">Brand Certified Products</h3>
              <p className="text-dark/70 text-sm">Only Adani, Polycab, Waaree &amp; Luminous</p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="px-6 py-4 md:py-0 flex flex-col items-center"
            >
              <div className="text-4xl mb-4">📞</div>
              <h3 className="font-heading font-bold text-xl text-dark mb-2">Lifetime Support</h3>
              <p className="text-dark/70 text-sm">AMC, maintenance &amp; net metering assistance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — Main Services */}
      <section className="py-12 md:py-20 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-4">
              What We Offer
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Comprehensive Solar Solutions
            </h2>
            <p className="text-dark/70 text-lg max-w-2xl mx-auto">
              Whether you're a homeowner, business owner, or industrialist — we have the right solar solution for you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-xl shadow-sm hover:shadow-xl border border-transparent hover:border-l-4 hover:border-l-primary transition-all duration-300 flex flex-col sm:flex-row gap-6 md:gap-8 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full border-2 border-primary/20 group-hover:border-primary bg-primary/5 flex items-center justify-center text-primary text-3xl transition-colors">
                    {service.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold text-dark mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark/70 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                        <span className="text-dark/80 font-medium text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center text-primary font-bold hover:text-dark transition-colors"
                  >
                    Enquire Now &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 — Process / How It Works */}
      <section className="py-12 md:py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              How We Work
            </h2>
            <p className="text-dark/70 text-lg max-w-2xl mx-auto">
              Simple, transparent, and hassle-free — from your first call to your first solar unit generated
            </p>
          </motion.div>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[28px] left-[5%] w-[90%] h-[2px] bg-primary/20 -z-10"></div>
            {/* Vertical Line for Mobile */}
            <div className="md:hidden absolute top-0 bottom-0 left-[28px] w-[2px] bg-primary/20 -z-10"></div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4 relative z-0">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative flex md:flex-col items-start md:items-center gap-6 md:gap-4 text-left md:text-center"
                >
                  <div className="w-14 h-14 bg-white border-4 border-primary text-primary rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-sm">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-[15px] xl:text-lg text-dark mb-2 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-dark/60 text-[13px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — Brand Partners Strip */}
      <section className="py-16 bg-dark">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h2 className="font-heading text-3xl font-bold text-white mb-2">
              Products We Install
            </h2>
            <p className="text-white/60 text-lg mb-12">
              Only Tier-1 certified brands — quality you can trust
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center hover:border-primary border-2 border-transparent transition-all"
              >
                <div className="text-xl md:text-2xl font-bold text-dark font-heading uppercase mb-3">
                  {brand.name}
                </div>
                <span className="text-primary text-[11px] font-bold tracking-wider uppercase border border-primary/20 px-2 py-1 rounded">
                  Authorized Partner
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — FAQ */}
      <section className="py-12 md:py-20 bg-light">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Common Questions About Our Services
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
                className="border border-gray-200 rounded-lg overflow-hidden bg-white"
              >
                <button
                  className="w-full flex justify-between items-center p-5 md:p-6 hover:bg-gray-50 transition-colors text-left"
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
                      <div className="p-5 md:p-6 pt-0 text-dark/70">
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

      {/* SECTION 7 — CTA Banner */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
              Start Your Solar Journey Today
            </h2>
            <p className="text-white/90 text-xl mb-10">
              Get a free site assessment and custom quote. No obligation, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/#contact" 
                className="w-full sm:w-auto bg-white text-dark hover:bg-light px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
              >
                Get Free Consultation
              </Link>
              <a 
                href="tel:+917733999183" 
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Call: +91-7733-999-183
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
