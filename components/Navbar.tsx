"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Why Us", href: "/#why-us" },
    { name: "Contact", href: "/#contact" },
  ];

  const navbarClasses = isHomePage 
    ? clsx(
        "w-full transition-all duration-300 z-50",
        isScrolled ? "fixed top-0 bg-dark shadow-xl py-3" : "absolute top-auto bg-transparent py-5"
      )
    : "w-full sticky top-0 bg-dark shadow-xl py-4 z-50";

  return (
    <header className="w-full relative z-50">
      {/* Top Bar */}
      <div className="bg-dark border-b border-white/10 text-white/80 py-2 hidden md:block text-sm">
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="mailto:sales@solarithmenergy.in" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FaEnvelope className="text-primary" />
              sales@solarithmenergy.in
            </a>
            <a href="tel:+917733999183" className="flex items-center gap-2 hover:text-primary transition-colors">
              <FaPhoneAlt className="text-primary" />
              +91-7733-999-183
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline-block mr-2">Follow Us:</span>
            <a href="https://www.facebook.com/profile.php?id=61580928826163" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/solarithmenergysolutions" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={navbarClasses}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 bg-white/95 px-3 py-2 rounded-md shadow-sm">
            <Image 
              src="/logo.jpg" 
              alt="Solarithm Energy" 
              width={240} 
              height={80} 
              className="object-contain max-h-[45px] md:max-h-[55px] w-auto mix-blend-multiply"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-medium text-[15px] text-white hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/#contact"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-md font-medium transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-2xl text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav */}
        <div
          className={clsx(
            "lg:hidden absolute top-full left-0 w-full bg-dark shadow-xl overflow-hidden transition-all duration-300 border-t border-white/10",
            mobileMenuOpen ? "max-h-[400px]" : "max-h-0 border-t-0"
          )}
        >
          <ul className="flex flex-col py-4 px-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-white font-medium text-lg hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#contact"
                className="block text-center bg-primary text-white py-3 rounded-md font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
