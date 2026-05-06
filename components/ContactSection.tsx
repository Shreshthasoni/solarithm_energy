"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe, FaFacebookF, FaInstagram } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";

// EmailJS Credentials - placeholder
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

export default function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (data: any) => {
    try {
      // For now we just mock the success state until EmailJS is connected
      console.log("Form Data:", data);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      reset();
      
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <section className="py-12 md:py-20 bg-light" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
              Contact Us
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Regd. Office</h4>
                  <p className="text-dark/70 text-sm">Plot No. 146, Jain Vihar, Near Kamla Nehru Nagar, Ajmer Road, Jaipur (Raj.) – 302026</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Corp. Office</h4>
                  <p className="text-dark/70 text-sm">UG-45 Sunny Trade Centre, New Atish Market, Mansarover, Jaipur (Raj.) – 302020</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary mt-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="font-bold text-dark mb-1">Branch Office</h4>
                  <p className="text-dark/70 text-sm">A-140, Laxmi Nagar, Opposite Ambedkar Nagar, Alwar</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <FaPhoneAlt />
                </div>
                <div>
                  <a href="tel:+917733999183" className="font-bold text-dark hover:text-primary transition-colors">+91-7733-999-183</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <a href="mailto:sales@solarithmenergy.in" className="font-bold text-dark hover:text-primary transition-colors">sales@solarithmenergy.in</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  <FaGlobe />
                </div>
                <div>
                  <a href="https://www.solarithmenergy.in" target="_blank" rel="noreferrer" className="font-bold text-dark hover:text-primary transition-colors">www.solarithmenergy.in</a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/profile.php?id=61580928826163" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/solarithmenergysolutions" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center hover:bg-primary transition-colors">
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-xl"
          >
            <h3 className="font-heading text-2xl font-bold text-dark mb-6">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  {...register("name", { required: true })}
                  className="w-full px-4 py-3 bg-light border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                {errors.name && <span className="text-red-500 text-xs mt-1">Name is required</span>}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    {...register("phone", { required: true })}
                    className="w-full px-4 py-3 bg-light border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1">Phone is required</span>}
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    {...register("email", { required: true })}
                    className="w-full px-4 py-3 bg-light border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">Email is required</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="City" 
                    {...register("city", { required: true })}
                    className="w-full px-4 py-3 bg-light border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                  />
                  {errors.city && <span className="text-red-500 text-xs mt-1">City is required</span>}
                </div>
                <div>
                  <select 
                    {...register("systemSize")}
                    className="w-full px-4 py-3 bg-light border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none"
                  >
                    <option value="">Select System Size</option>
                    <option value="1kW">1kW</option>
                    <option value="2kW">2kW</option>
                    <option value="3kW">3kW</option>
                    <option value="5kW">5kW</option>
                    <option value="10kW+">10kW+</option>
                  </select>
                </div>
              </div>

              <div>
                <textarea 
                  placeholder="Message / Requirement" 
                  rows={4}
                  {...register("message")}
                  className="w-full px-4 py-3 bg-light border border-gray-200 rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-hover text-white py-3.5 rounded-md font-bold transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>

              {submitStatus === "success" && (
                <p className="text-green-600 text-sm text-center font-medium">Message sent successfully! We will get back to you soon.</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600 text-sm text-center font-medium">Oops! Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
