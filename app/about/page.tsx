"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaBuilding, FaMapMarkerAlt, FaPhoneAlt, FaSun } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function AboutPage() {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, rootMargin: "-100px" });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const features = [
    "PM SURYA GHAR PORTAL Registered Vendor",
    "Authorized: Adani Solar · Polycab · Waaree · Luminous",
    "Serving Jaipur (2 offices) & Alwar",
    "Residential, Commercial & Industrial Solar",
    "Complete EPC with Net Metering Support",
    "Post-Installation AMC Plans Available"
  ];

  const stats = [
    { value: 500, suffix: "+", label: "Solar Installations" },
    { value: 5, suffix: "+", label: "Years of Experience" },
    { value: 3, suffix: "", label: "Office Locations" },
    { value: 4, suffix: "", label: "Brand Partnerships" }
  ];

  const brands = [
    { name: "Adani Solar" },
    { name: "Polycab" },
    { name: "Waaree" },
    { name: "Luminous" }
  ];

  const locations = [
    { title: "Registered Office", address: "Plot No. 146, Jain Vihar, Near Kamla Nehru Nagar, Ajmer Road, Jaipur (Raj.) – 302026" },
    { title: "Corporate Office", address: "UG-45 Sunny Trade Centre, New Atish Market, Mansarover, Jaipur (Raj.) – 302020" },
    { title: "Branch Office", address: "A-140, Laxmi Nagar, Opposite Ambedkar Nagar, Alwar" }
  ];

  return (
    <main>
      {/* A. Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509391366360-12009a34bc69?q=80&w=2072&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-dark/85"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center mt-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
            <div className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link> / About Us
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About Solarithm Energy
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Registered under PM SURYA GHAR PORTAL | Authorized Partner of Adani &middot; Polycab &middot; Waaree &middot; Luminous
            </p>
          </motion.div>
        </div>
      </section>

      {/* B. Company Story Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
              className="lg:col-span-7"
            >
              <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4">
                Who We Are
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Powering Rajasthan with Clean Solar Energy
              </h2>
              <p className="text-dark/70 text-lg mb-6 leading-relaxed">
                Solarithm Energy Solutions Private Limited is a Jaipur-based solar energy company committed to making clean, affordable solar power accessible to every home and business in Rajasthan. We are a registered vendor under the Government of India's PM SURYA GHAR PORTAL and an authorized channel partner of India's top solar brands.
              </p>
              <p className="text-dark/70 text-lg mb-8 leading-relaxed">
                From initial consultation and system design to installation, net metering, and after-sales AMC — we handle everything so our customers can simply enjoy the benefits of solar energy without any hassle.
              </p>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-primary mt-1 text-lg flex-shrink-0" />
                    <span className="text-dark/80 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-md font-medium transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Contact Us Today &rarr;
              </Link>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
              className="lg:col-span-5 relative"
            >
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop"
                  alt="Solar Installation Team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border-l-4 border-primary max-w-[250px] hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl">
                    <FaSun />
                  </div>
                  <div className="font-heading font-bold text-2xl text-dark">500+</div>
                </div>
                <p className="text-dark/80 font-medium leading-tight">Installations Completed Successfully</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* C. Stats Bar */}
      <section className="bg-dark py-16 border-y border-primary/20" ref={statsRef}>
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col items-center justify-center p-4 border-b-2 border-primary/20 md:border-b-0 md:border-r-2 last:border-r-0 border-white/10"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {statsInView ? <CountUp end={stat.value} duration={2.5} /> : "0"}
                  {stat.suffix}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* D. Mission & Vision Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Our Mission & Vision
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="bg-white p-8 md:p-10 rounded-xl shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl mb-6">🎯</div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">Our Mission</h3>
              <p className="text-dark/70 text-lg leading-relaxed">
                To accelerate Rajasthan's transition to clean energy by delivering high-quality, affordable solar solutions backed by India's best brands — making every rooftop a power plant.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              className="bg-white p-8 md:p-10 rounded-xl shadow-lg border-t-4 border-primary hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl mb-6">👁️</div>
              <h3 className="font-heading text-2xl font-bold text-dark mb-4">Our Vision</h3>
              <p className="text-dark/70 text-lg leading-relaxed">
                To be Rajasthan's most trusted solar EPC company, empowering thousands of homes and businesses to achieve energy independence through the power of the sun.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* E. Authorized Brand Partners Section */}
      <section className="py-12 md:py-20 bg-light">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Authorized Brand Partners
            </h2>
            <p className="text-dark/70 text-lg max-w-2xl mx-auto mb-12">
              We only install certified Tier-1 solar products from India's most trusted brands
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
              >
                <div className="text-2xl font-bold text-dark font-heading uppercase mb-4 tracking-wider">
                  {brand.name}
                </div>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase">
                  Authorized Channel Partner
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* F. Office Locations Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark">
              Find Us
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((loc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-light p-8 rounded-xl border border-transparent hover:border-primary hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:bg-primary transition-colors">
                  <FaBuilding className="text-2xl text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-dark mb-4">{loc.title}</h3>
                
                <div className="flex items-start gap-3 mb-4">
                  <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-dark/70 text-sm leading-relaxed">{loc.address}</p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                  <FaPhoneAlt className="text-primary flex-shrink-0" />
                  <a href="tel:+917733999183" className="text-dark font-bold hover:text-primary transition-colors">+91-7733-999-183</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* G. CTA Banner */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Go Solar?
            </h2>
            <p className="text-white/90 text-xl mb-10">
              Get a free site assessment and custom quote for your home or business.
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
                Call Us Now: +91-7733-999-183
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
