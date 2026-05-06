"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ProjectsGallery() {
  const projects = [
    { title: "3kW Residential System", location: "Vaishali Nagar, Jaipur", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2072&auto=format&fit=crop" },
    { title: "10kW Commercial Rooftop", location: "Mansarover, Jaipur", image: "https://images.unsplash.com/photo-1588508065123-287b28e01397?q=80&w=2070&auto=format&fit=crop" },
    { title: "5kW Home Solar", location: "Ajmer Road, Jaipur", image: "https://images.unsplash.com/photo-1509391366360-12009a34bc69?q=80&w=2072&auto=format&fit=crop" },
    { title: "15kW Industrial Plant", location: "Alwar", image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2069&auto=format&fit=crop" },
    { title: "7kW Society Solar", location: "Pratap Nagar, Jaipur", image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=2037&auto=format&fit=crop" },
    { title: "4kW Rooftop + Battery", location: "Civil Lines, Jaipur", image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=2069&auto=format&fit=crop" },
  ];

  return (
    <section className="py-12 md:py-20 bg-light" id="projects">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
            Our Portfolio
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-dark mb-4">
            Our Recent Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden h-[300px] cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2 font-heading">
                  {project.title}
                </h3>
                <p className="text-primary flex items-center gap-2 font-medium">
                  <FaMapMarkerAlt /> {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 rounded-md font-medium transition-all"
          >
            View All Projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
