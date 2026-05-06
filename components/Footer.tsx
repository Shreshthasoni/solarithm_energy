import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-6 border-t-[6px] border-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1 */}
          <div>
            <div className="mb-4 flex flex-col">
              <span className="font-heading font-bold text-2xl tracking-tight leading-none text-white">
                <span className="text-primary">SOLAR</span>ITHM
              </span>
              <span className="text-[10px] uppercase tracking-widest font-medium mt-1 text-secondary">
                Powering Tomorrow, Today
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Solarithm Energy Solutions Private Limited is a registered PM SURYA GHAR vendor providing top-quality solar EPC solutions across Rajasthan.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Quick Links
              <span className="absolute bottom-[-8px] left-0 w-1/2 h-[2px] bg-primary"></span>
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="/#why-us" className="hover:text-primary transition-colors">Why Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Our Services
              <span className="absolute bottom-[-8px] left-0 w-1/2 h-[2px] bg-primary"></span>
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li><Link href="/services#residential" className="hover:text-primary transition-colors">Residential Solar</Link></li>
              <li><Link href="/services#commercial" className="hover:text-primary transition-colors">Commercial Solar</Link></li>
              <li><Link href="/services#subsidy" className="hover:text-primary transition-colors">PM SURYA GHAR</Link></li>
              <li><Link href="/services#net-metering" className="hover:text-primary transition-colors">Net Metering</Link></li>
              <li><Link href="/services#amc" className="hover:text-primary transition-colors">Solar AMC</Link></li>
              <li><Link href="/services#consultation" className="hover:text-primary transition-colors">Consultation</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 relative inline-block">
              Contact Info
              <span className="absolute bottom-[-8px] left-0 w-1/2 h-[2px] bg-primary"></span>
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span>UG-45 Sunny Trade Centre, New Atish Market, Mansarover, Jaipur (Raj.) – 302020</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary flex-shrink-0" />
                <a href="tel:+917733999183" className="hover:text-primary transition-colors">+91-7733-999-183</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <a href="mailto:sales@solarithmenergy.in" className="hover:text-primary transition-colors">sales@solarithmenergy.in</a>
              </li>
            </ul>
            
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.facebook.com/profile.php?id=61580928826163" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaFacebookF size={14} />
              </a>
              <a href="https://www.instagram.com/solarithmenergysolutions" target="_blank" rel="noreferrer" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <FaInstagram size={14} />
              </a>
            </div>
          </div>
          
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} Solarithm Energy Solutions Private Limited. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Developed by Antigravity</p>
        </div>
      </div>
    </footer>
  );
}
