"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaBolt, FaStar, FaQuoteLeft, FaCheckCircle } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [statsRef, statsInView] = useInView({ triggerOnce: true, rootMargin: "-100px" });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stats = [
    { value: 500, suffix: "+", label: "Projects Completed" },
    { value: 2, suffix: "MW+", label: "Solar Capacity Installed" },
    { value: 3, suffix: "", label: "Cities Served" },
    { value: 98, suffix: "%", label: "Customer Satisfaction" }
  ];

  const filterTabs = ["All", "Residential", "Commercial", "Industrial"];

  const projects = [
    {
      id: 1,
      category: "Residential",
      title: "3kW Rooftop Solar System",
      location: "Vaishali Nagar, Jaipur",
      capacity: "3 kWp | Monthly Generation: ~360 units",
      image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 2,
      category: "Residential",
      title: "5kW PM SURYA GHAR Installation",
      location: "Ajmer Road, Jaipur",
      capacity: "5 kWp | Subsidy Availed: ₹78,000",
      image: "https://images.unsplash.com/photo-1509391366360-12009a34bc69?q=80&w=2072&auto=format&fit=crop"
    },
    {
      id: 3,
      category: "Residential",
      title: "2kW Home Solar + Net Metering",
      location: "Pratap Nagar, Jaipur",
      capacity: "2 kWp | Bill Savings: ~₹2,500/month",
      image: "https://images.unsplash.com/photo-1588508065123-287b28e01397?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      category: "Residential",
      title: "4kW Rooftop with Battery Backup",
      location: "Civil Lines, Jaipur",
      capacity: "4 kWp | Battery: Luminous 10kWh",
      image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 5,
      category: "Residential",
      title: "3kW Residential System",
      location: "Alwar, Rajasthan",
      capacity: "3 kWp | ROI Period: 4 Years",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=2037&auto=format&fit=crop"
    },
    {
      id: 6,
      category: "Commercial",
      title: "10kW Commercial Rooftop",
      location: "Mansarover, Jaipur",
      capacity: "10 kWp | Annual Savings: ₹1.2 Lakh",
      image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2058&auto=format&fit=crop"
    },
    {
      id: 7,
      category: "Commercial",
      title: "25kW Office Complex Solar",
      location: "New Atish Market, Jaipur",
      capacity: "25 kWp | Grid Export Enabled",
      image: "https://images.unsplash.com/photo-1592833159057-657754d922a9?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 8,
      category: "Commercial",
      title: "15kW Showroom Solar Plant",
      location: "MI Road, Jaipur",
      capacity: "15 kWp | Payback: 3.5 Years",
      image: "https://images.unsplash.com/photo-1620241608701-94ef138c7ea9?q=80&w=1974&auto=format&fit=crop"
    },
    {
      id: 9,
      category: "Commercial",
      title: "20kW Commercial Installation",
      location: "Alwar Industrial Area",
      capacity: "20 kWp | Brand: Waaree Panels",
      image: "https://images.unsplash.com/photo-1590682664539-7ef3f2b43b67?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: 10,
      category: "Industrial",
      title: "50kW Factory Solar Plant",
      location: "Bhiwadi, Alwar",
      capacity: "50 kWp | Annual Gen: 72,000 units",
      image: "https://images.unsplash.com/photo-1593005886470-356bc08229b4?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 11,
      category: "Industrial",
      title: "100kW Industrial Rooftop",
      location: "Neemrana, Alwar",
      capacity: "100 kWp | Adani Solar Panels",
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 12,
      category: "Industrial",
      title: "75kW Manufacturing Unit Solar",
      location: "Sitapura Industrial Area, Jaipur",
      capacity: "75 kWp | Polycab Wiring & Panels",
      image: "https://images.unsplash.com/photo-1611365892597-0996b11aa80f?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const testimonials = [
    {
      quote: "Solarithm installed our 10kW commercial system at Mansarover. The team was professional, installation was clean, and they handled all net metering paperwork. Our bills dropped by 85%!",
      name: "Rajesh Gupta",
      title: "Business Owner, Mansarover Jaipur"
    },
    {
      quote: "We got our 3kW home system under PM SURYA GHAR scheme. Solarithm guided us through the entire subsidy process and we received ₹78,000 in subsidy. Highly recommend!",
      name: "Sunita Sharma",
      title: "Homeowner, Vaishali Nagar Jaipur"
    },
    {
      quote: "Our 50kW factory plant in Alwar has been running for 8 months now with zero issues. The AMC team is responsive and the system performance is excellent.",
      name: "Vikram Singhania",
      title: "Factory Owner, Alwar"
    }
  ];

  return (
    <main>
      {/* SECTION 1 — Hero Banner */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592833159057-657754d922a9?q=80&w=2069&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-dark/90"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center mt-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
            <div className="text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link> / Projects
            </div>
            <h1 className="font-heading text-4xl md:text-[52px] font-bold text-white mb-6 leading-tight">
              Our Projects
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Real installations. Real savings. Real impact across Rajasthan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2 — Stats Bar */}
      <section className="bg-dark py-10 border-b-4 border-primary" ref={statsRef}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x-0 md:divide-x divide-white/10">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center justify-center p-4 border-b md:border-b-0 border-white/10 last:border-b-0"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 font-heading">
                  {statsInView ? <CountUp end={stat.value} duration={2.5} /> : "0"}
                  {stat.suffix}
                </div>
                <div className="text-white/80 font-medium text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — Filter + Project Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-12"
          >
            <div className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-4">
              Our Work
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Projects We're Proud Of
            </h2>
            <p className="text-dark/70 text-lg max-w-2xl mx-auto">
              From 1kW home systems to large commercial plants — here's what we've built across Jaipur and Alwar.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  activeFilter === tab 
                    ? "bg-primary text-white shadow-md border border-primary" 
                    : "bg-white text-dark border border-gray-300 hover:border-primary hover:text-primary"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link href="/#contact" className="bg-primary text-white px-6 py-2.5 rounded font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary-hover shadow-lg">
                        View Details
                      </Link>
                    </div>
                  </div>
                  
                  <div className="p-6 border-b-4 border-transparent group-hover:border-primary transition-colors">
                    <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold mb-4 uppercase tracking-wide">
                      {project.category}
                    </div>
                    <h3 className="font-heading font-bold text-xl text-dark mb-4 group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-dark/60 text-sm">
                        <FaMapMarkerAlt className="text-gray-400 flex-shrink-0" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm">
                        <FaBolt className="flex-shrink-0" />
                        <span>{project.capacity}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — Featured Project Spotlight */}
      <section className="py-12 md:py-20 bg-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:col-span-7 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop"
                alt="Featured 100kW Industrial Rooftop"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg font-bold text-primary shadow-lg font-heading">
                Neemrana, Alwar
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="text-primary text-sm font-bold tracking-widest uppercase mb-4">
                Featured Project
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                100kW Industrial Rooftop — Neemrana, Alwar
              </h2>
              <p className="text-dark/70 text-base mb-8 leading-relaxed">
                Our largest installation to date — a 100kWp rooftop solar plant for a manufacturing unit in Neemrana Industrial Zone, Alwar. Installed with Adani Solar panels and Polycab wiring, this system generates over 1.4 lakh units annually, saving the client approximately ₹12 lakhs per year in electricity costs.
              </p>

              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
                <div>
                  <span className="block text-dark/50 text-xs uppercase font-bold mb-1">Capacity</span>
                  <span className="font-medium text-dark flex items-center gap-2"><FaBolt className="text-primary"/> 100 kWp</span>
                </div>
                <div>
                  <span className="block text-dark/50 text-xs uppercase font-bold mb-1">Location</span>
                  <span className="font-medium text-dark flex items-center gap-2"><FaMapMarkerAlt className="text-primary"/> Neemrana, Alwar</span>
                </div>
                <div>
                  <span className="block text-dark/50 text-xs uppercase font-bold mb-1">Brand</span>
                  <span className="font-medium text-dark">Adani Solar + Polycab</span>
                </div>
                <div>
                  <span className="block text-dark/50 text-xs uppercase font-bold mb-1">Completion</span>
                  <span className="font-medium text-dark">2024</span>
                </div>
                <div>
                  <span className="block text-dark/50 text-xs uppercase font-bold mb-1">Annual Generation</span>
                  <span className="font-medium text-dark">1,40,000 units</span>
                </div>
                <div>
                  <span className="block text-dark/50 text-xs uppercase font-bold mb-1">Annual Savings</span>
                  <span className="font-medium text-primary">₹12 Lakhs</span>
                </div>
              </div>

              <Link
                href="/#contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-md font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Start Your Project &rarr;
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 5 — Testimonials */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow relative border-b-4 border-b-transparent hover:border-b-primary"
              >
                <FaQuoteLeft className="absolute top-6 right-6 text-primary/10 text-6xl" />
                <div className="flex text-primary mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="text-dark/80 italic mb-8 relative z-10 leading-relaxed text-sm">
                  "{test.quote}"
                </p>
                <div>
                  <h4 className="font-bold text-dark font-heading">{test.name}</h4>
                  <p className="text-xs text-dark/60 font-medium">{test.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 — Start Your Project CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Have a Project in Mind?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
                Tell us about your energy needs and we'll design the perfect solar solution for you — free of charge.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white font-medium">
                  <FaCheckCircle className="text-dark text-xl" />
                  Free Site Assessment
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <FaCheckCircle className="text-dark text-xl" />
                  No-Obligation Quote
                </div>
                <div className="flex items-center gap-3 text-white font-medium">
                  <FaCheckCircle className="text-dark text-xl" />
                  PM SURYA GHAR Assistance
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-2xl"
            >
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Full Name" className="w-full px-4 py-3 bg-light border border-gray-200 rounded-md focus:outline-none focus:border-primary" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 bg-light border border-gray-200 rounded-md focus:outline-none focus:border-primary" />
                  <input type="text" placeholder="City" className="w-full px-4 py-3 bg-light border border-gray-200 rounded-md focus:outline-none focus:border-primary" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <select className="w-full px-4 py-3 bg-light border border-gray-200 rounded-md focus:outline-none focus:border-primary appearance-none">
                    <option value="">System Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                    <option value="Industrial">Industrial</option>
                  </select>
                  <select className="w-full px-4 py-3 bg-light border border-gray-200 rounded-md focus:outline-none focus:border-primary appearance-none">
                    <option value="">Approx. Capacity</option>
                    <option value="1-3kW">1–3kW</option>
                    <option value="5-10kW">5–10kW</option>
                    <option value="10-25kW">10–25kW</option>
                    <option value="25kW+">25kW+</option>
                  </select>
                </div>
                
                <button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white py-4 rounded-md font-bold text-lg transition-colors shadow-md mt-2">
                  Get Free Quote
                </button>
                <div className="text-center pt-3">
                  <p className="text-dark/60 text-sm">Or call us directly: <a href="tel:+917733999183" className="font-bold text-dark hover:text-primary transition-colors">+91-7733-999-183</a></p>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
