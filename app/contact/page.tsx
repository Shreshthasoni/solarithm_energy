"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Call / WhatsApp",
      details: ["+91-7733-999-183"],
      link: "tel:+917733999183"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Address",
      details: ["sales@solarithmenergy.in"],
      link: "mailto:sales@solarithmenergy.in"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: Closed"],
      link: "#"
    }
  ];

  const offices = [
    {
      type: "Corporate Office",
      address: "UG-45 Sunny Trade Centre, New Atish Market, Mansarover, Jaipur (Raj.) – 302020",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8833075199343!2d75.7663249!3d26.8754124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db4504f29d783%3A0x67341c305a4155b1!2sSunny%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1714900000000!5m2!1sen!2sin"
    },
    {
      type: "Registered Office",
      address: "Plot No. 146, Jain Vihar, Near Kamla Nehru Nagar, Ajmer Road, Jaipur (Raj.) – 302026",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.918239049449!2d75.7265111!3d26.8741333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3791a8e9d3d%3A0x5a1a1a1a1a1a1a1a!2sAjmer%20Road%2C%20Jaipur!5e0!3m2!1sen!2sin!4v1714900000000!5m2!1sen!2sin"
    },
    {
      type: "Branch Office",
      address: "A-140, Laxmi Nagar, Opposite Ambedkar Nagar, Alwar",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.6152140411335!2d76.6111111!3d27.5666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3972900000000000%3A0x0!2sAlwar%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1714900000000!5m2!1sen!2sin"
    }
  ];

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[45vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2075&auto=format&fit=crop"
            alt="Contact Solarithm"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-dark/85"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 md:px-8 text-center mt-10">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
            <div className="text-primary text-sm font-bold tracking-widest uppercase mb-4">
              <Link href="/" className="hover:text-white transition-colors">Home</Link> / Contact Us
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Get In Touch
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Have questions about solar? Our experts are here to help you power your home or business with clean energy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 md:py-20 bg-light relative -mt-16 z-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg border-b-4 border-primary text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {info.icon}
                </div>
                <h3 className="font-heading font-bold text-xl text-dark mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-dark/70 font-medium">{detail}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Grid */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-10">
                <div className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Send Message</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-6">Request a Free Quote</h2>
                <p className="text-dark/70">Fill out the form below and our solar consultant will get back to you within 24 hours with a custom proposal.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-dark mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-light focus:outline-none focus:border-primary transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-dark mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-light focus:outline-none focus:border-primary transition-all" placeholder="Enter phone number" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-dark mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-light focus:outline-none focus:border-primary transition-all" placeholder="Enter email" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-dark mb-2">City</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-light focus:outline-none focus:border-primary transition-all" placeholder="e.g. Jaipur" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-light focus:outline-none focus:border-primary transition-all appearance-none">
                    <option>Inquiry for Residential Solar</option>
                    <option>Inquiry for Commercial Solar</option>
                    <option>Maintenance / Service Request</option>
                    <option>Subsidy / PM Surya Ghar Query</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-dark mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-light focus:outline-none focus:border-primary transition-all resize-none" placeholder="Tell us about your requirement..."></textarea>
                </div>
                <button type="submit" className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-lg font-bold text-lg transition-all shadow-lg w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Right: Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div>
                <div className="text-primary text-sm font-bold tracking-widest uppercase mb-4">Our Offices</div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-10">Visit Our Locations</h2>
                
                <div className="space-y-8">
                  {offices.map((office, index) => (
                    <div key={index} className="flex gap-5 group">
                      <div className="w-12 h-12 rounded-lg bg-dark text-primary flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                        <FaMapMarkerAlt />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-lg text-dark mb-2">{office.type}</h4>
                        <p className="text-dark/70 leading-relaxed text-sm mb-4">{office.address}</p>
                        <div className="rounded-lg overflow-hidden h-32 w-full grayscale hover:grayscale-0 transition-all">
                          <iframe 
                            src={office.map} 
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-dark rounded-xl text-white">
                <h4 className="font-heading font-bold text-xl mb-6">Stay Connected</h4>
                <div className="flex gap-4">
                  <a href="https://www.facebook.com/profile.php?id=61580928826163" target="_blank" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-primary transition-all"><FaFacebookF /></a>
                  <a href="https://www.instagram.com/solarithmenergysolutions" target="_blank" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-primary transition-all"><FaInstagram /></a>
                  <a href="https://wa.me/917733999183" target="_blank" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-green-500 transition-all"><FaWhatsapp /></a>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Prefer a Direct Call?</h2>
          <p className="text-xl mb-10 text-white/90">Our solar experts are available for a quick chat at your convenience.</p>
          <a href="tel:+917733999183" className="inline-flex items-center gap-3 bg-white text-dark px-10 py-5 rounded-full font-bold text-2xl shadow-xl hover:bg-light transition-all">
            <FaPhoneAlt /> +91-7733-999-183
          </a>
        </div>
      </section>
    </main>
  );
}
